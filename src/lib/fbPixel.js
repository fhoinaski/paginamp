// src/lib/fbPixel.js
let isFbPixelInitialized = false;
let pixelInitAttempts = 0;
const MAX_INIT_ATTEMPTS = 3;

export const initFacebookPixel = (pixelId) => {
  if (!pixelId || typeof window === 'undefined') {
    console.log('Pixel não inicializado: ID inválido ou não estamos no navegador');
    return false;
  }

  // Incrementar tentativas
  pixelInitAttempts++;
  console.log(`Tentativa ${pixelInitAttempts} de inicializar o Facebook Pixel com ID: ${pixelId}`);

  // Se pixel já inicializado, apenas retorna sucesso
  if (isFbPixelInitialized && window.fbq) {
    console.log('Facebook Pixel já estava inicializado corretamente.');
    // Dispara PageView para garantir
    try {
      window.fbq('track', 'PageView');
      console.log('Evento PageView disparado após verificação de inicialização.');
    } catch (e) {
      console.error('Erro ao disparar PageView em pixel já inicializado:', e);
    }
    return true;
  }

  // Se já tem fbq mas não está inicializado, tenta inicializar
  if (window.fbq) {
    console.log('fbq encontrado, tentando inicializar com ID:', pixelId);
    try {
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
      isFbPixelInitialized = true;
      console.log('Facebook Pixel inicializado com sucesso usando fbq existente!');
      return true;
    } catch (e) {
      console.error('Erro ao inicializar fbq existente:', e);
      // Se não conseguiu inicializar, vamos tentar carregar o script novamente
    }
  }

  // Se chegamos aqui, fbq não existe ou falhou, então carregamos o script
  try {
    console.log('Carregando script do Facebook Pixel...');
    
    // Remover script antigo se existir (em caso de problemas)
    const existingScript = document.querySelector('script[src*="fbevents.js"]');
    if (existingScript) {
      console.log('Removendo script anterior do Facebook Pixel');
      existingScript.parentNode.removeChild(existingScript);
    }
    
    // Código oficial do Facebook para carregamento do script
    (function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)})(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    // Aguardar um curto período para garantir que o script seja carregado
    setTimeout(() => {
      if (window.fbq) {
        try {
          window.fbq('init', pixelId);
          window.fbq('track', 'PageView');
          isFbPixelInitialized = true;
          console.log('Facebook Pixel inicializado com sucesso após carregamento do script!');
        } catch (e) {
          console.error('Erro ao inicializar após carregamento do script:', e);
          // Tentar novamente se não atingimos o máximo de tentativas
          if (pixelInitAttempts < MAX_INIT_ATTEMPTS) {
            console.log(`Agendando nova tentativa de inicialização (${pixelInitAttempts+1}/${MAX_INIT_ATTEMPTS})...`);
            setTimeout(() => initFacebookPixel(pixelId), 1000);
          }
        }
      } else {
        console.error('Script carregado, mas fbq ainda não está disponível');
        // Tentar novamente se não atingimos o máximo de tentativas
        if (pixelInitAttempts < MAX_INIT_ATTEMPTS) {
          console.log(`Agendando nova tentativa de inicialização (${pixelInitAttempts+1}/${MAX_INIT_ATTEMPTS})...`);
          setTimeout(() => initFacebookPixel(pixelId), 1000);
        }
      }
    }, 200);
    
    return true;
  } catch (e) {
    console.error('Erro crítico ao tentar carregar script do Facebook Pixel:', e);
    return false;
  }
};

export const trackFbPixelEvent = (eventName, params = {}) => {
  // Se não estiver inicializado, tenta inicializar novamente com o pixel ID armazenado
  if (typeof window !== 'undefined' && !isPixelReady() && window.FB_PIXEL_ID) {
    console.log(`Tentando reinicializar pixel antes de disparar evento ${eventName}`);
    initFacebookPixel(window.FB_PIXEL_ID);
    
    // Aguarda um pouco para o pixel inicializar
    setTimeout(() => {
      if (isPixelReady()) {
        console.log(`Disparando evento ${eventName} após reinicialização`);
        window.fbq('track', eventName, params);
      }
    }, 300);
    
    return false;
  }

  if (typeof window !== 'undefined' && window.fbq && isFbPixelInitialized) {
    try {
      window.fbq('track', eventName, params);
      console.log(`PIXEL FB EVENT: ${eventName}`, params);
      return true;
    } catch (e) {
      console.error(`Erro ao disparar evento ${eventName}:`, e);
      return false;
    }
  } else {
    let reason = '';
    if (typeof window === 'undefined') reason = 'Não está no browser.';
    else if (!window.fbq) reason = 'window.fbq não está definido.';
    else if (!isFbPixelInitialized) reason = 'Pixel não foi marcado como inicializado.';
    console.warn(`FB Pixel Evento ${eventName} NÃO disparado. Razão: ${reason}`);
    return false;
  }
};

// Função para verificar se o Pixel está pronto
export const isPixelReady = () => {
  return typeof window !== 'undefined' && window.fbq && isFbPixelInitialized;
};

export const trackViewContent = (product) => {
  if (!product) return false;
  
  const contentName = product.name;
  const contentId = product._id || product.name.toLowerCase().replace(/\s+/g, '-');
  const value = parseFloat(product.price.replace(',', '.'));
  const currency = 'BRL';
  const productCatalogId = process.env.NEXT_PUBLIC_FACEBOOK_CATALOG_ID || undefined;
  
  // Armazenar o ID do pixel para tentativas futuras
  if (typeof window !== 'undefined' && !window.FB_PIXEL_ID && product.pixelId) {
    window.FB_PIXEL_ID = product.pixelId;
  }
  
  return trackFbPixelEvent('ViewContent', {
    content_name: contentName,
    content_ids: [contentId],
    content_type: 'product',
    value: value,
    currency: currency,
    ...(productCatalogId && { product_catalog_id: productCatalogId })
  });
};

export const trackInitiateCheckout = (product) => {
  if (!product) return false;
  
  const contentName = product.name;
  const contentId = product._id || product.name.toLowerCase().replace(/\s+/g, '-');
  const value = parseFloat(product.price.replace(',', '.'));
  const currency = 'BRL';
  const numItems = 1;
  const productCatalogId = process.env.NEXT_PUBLIC_FACEBOOK_CATALOG_ID || undefined;
  
  // Armazenar o ID do pixel para tentativas futuras
  if (typeof window !== 'undefined' && !window.FB_PIXEL_ID && product.pixelId) {
    window.FB_PIXEL_ID = product.pixelId;
  }
  
  return trackFbPixelEvent('InitiateCheckout', {
    content_name: contentName,
    content_ids: [contentId],
    content_type: 'product',
    value: value,
    currency: currency,
    num_items: numItems,
    ...(productCatalogId && { product_catalog_id: productCatalogId })
  });
}; 