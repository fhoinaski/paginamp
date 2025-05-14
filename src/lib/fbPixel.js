// src/lib/fbPixel.js
let isFbPixelInitialized = false;

export const initFacebookPixel = (pixelId) => {
  if (!pixelId || typeof window === 'undefined') {
    return;
  }

  // Se window.fbq já existe mas isFbPixelInitialized é false, tentamos inicializar
  if (window.fbq && !isFbPixelInitialized) {
    console.log('FB Pixel script já carregado, tentando inicializar com ID:', pixelId);
    try {
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
      isFbPixelInitialized = true;
      console.log('Facebook Pixel (re)inicializado com ID:', pixelId);
    } catch (e) {
      console.error('Erro ao tentar (re)inicializar fbq:', e);
    }
    return;
  } else if (isFbPixelInitialized) {
    console.log('FB Pixel já inicializado.');
    return;
  }

  // Se fbq não existe, carregamos o script
  try {
    (function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)})(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
    isFbPixelInitialized = true;
    console.log('Facebook Pixel inicializado via script loader com ID:', pixelId);
  } catch (e) {
    console.error('Erro ao inicializar fbq após carregar script:', e);
  }
};

export const trackFbPixelEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.fbq && isFbPixelInitialized) {
    window.fbq('track', eventName, params);
    console.log(`PIXEL FB EVENT: ${eventName}`, params);
    return true;
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