// src/app/layout.js
import "./globals.css";
import Script from 'next/script';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';
import { TaxasModalProvider } from '../contexts/TaxasModalContext';
import ClientLayout from '../components/ClientLayout';

export const metadata = {
  title: {
    default: "Maquininhas Point | Revendedor Autorizado - Compre Já!",
    template: "%s | Maquininhas Point"
  },
  description: "Encontre a maquininha Point ideal para seu negócio: Point Smart 2, Pro 3, Air e Mini NFC 2. Melhores taxas, frete grátis e promoções exclusivas. Compre online!",
  keywords: "maquininhas point, comprar maquininha, mercado pago point, point smart 2, point pro 3, point air, point mini nfc 2, taxas maquininha, revendedor point, maquininha de cartão",
  openGraph: {
    title: "Maquininhas Point | As Melhores Opções para Seu Negócio",
    description: "Compre sua maquininha Point Smart 2, Pro 3, Air ou Mini NFC 2 com condições especiais. Revendedor Autorizado.",
    images: [{
      url: '/images/hero.webp',
      width: 1200,
      height: 630,
      alt: 'Maquininhas Point em Promoção'
    }],
    siteName: 'Maquininhas Point',
    type: 'website',
    locale: 'pt_BR'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Maquininhas Point | As Melhores Opções para Seu Negócio",
    description: "Compre sua maquininha Point Smart 2, Pro 3, Air ou Mini NFC 2 com condições especiais.",
    images: ['/images/hero.webp']
  }
};

async function getTrackingConfigurations() {
  // Configuração de fallback: Usada se a API falhar ou não retornar dados válidos.
  // Tenta usar variáveis de ambiente (que seriam lidas no Vercel se configuradas),
  // senão, usa strings vazias.
  const fallbackEnvConfig = {
    facebookPixelId: process.env.FACEBOOK_PIXEL_ID || '',
    tiktokPixelId: process.env.TIKTOK_PIXEL_ID || '', // Pode ser um ID fixo se preferir um fallback global aqui
    googleTagId: process.env.GOOGLE_TAG_ID || ''
  };

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || (
      process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : '' // Em produção sem VERCEL_URL e sem NEXT_PUBLIC_API_URL, pode precisar de um valor fixo
    );

    if (!baseUrl) {
      console.warn('URL base da API não pôde ser determinada. Usando fallback de variáveis de ambiente (se disponíveis).');
      return fallbackEnvConfig;
    }

    // Endpoint que busca do BANCO DE DADOS
    const apiUrl = `${baseUrl}/api/configurations/tracking`;
    console.log('[layout.js] Buscando configurações de rastreamento (do DB) de:', apiUrl);

    // Cache revalidate a cada hora.
    // Em desenvolvimento, para ver mudanças no DB imediatamente, pode diminuir ou usar { cache: 'no-store' }
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.error(`[layout.js] Erro ao buscar de ${apiUrl}: ${res.status} ${res.statusText}. Usando fallback de variáveis de ambiente.`);
      return fallbackEnvConfig;
    }

    const data = await res.json();
    console.log('[layout.js] Configurações de rastreamento (/tracking) recebidas:', data);

    // O endpoint /api/configurations/tracking retorna { settings: { ... } }
    // ou { settings: { facebookPixelId: '', ... }, error: 'msg' } se houver erro no backend
    // ou { settings: { facebookPixelId: '', ... } } se não encontrar no DB.
    if (data && data.settings) {
        // Verifica se há um erro retornado pela API de tracking junto com settings vazias
        if (data.error) {
            console.warn(`[layout.js] API /tracking retornou um erro: "${data.error}". Usando fallback de variáveis de ambiente.`);
            return fallbackEnvConfig;
        }
        console.log('[layout.js] Usando configurações do banco de dados:', data.settings);
        return data.settings; // Retorna o objeto settings do banco
    } else {
        console.error('[layout.js] Resposta da API /tracking inválida ou sem objeto settings. Usando fallback de variáveis de ambiente.');
        return fallbackEnvConfig;
    }

  } catch (error) {
    console.error('[layout.js] Erro CRÍTICO em getTrackingConfigurations:', error);
    // Em caso de erro crítico (ex: rede), retorna o fallback de variáveis de ambiente
    return fallbackEnvConfig;
  }
}

export default async function RootLayout({ children }) {
  const trackingConfig = await getTrackingConfigurations();

  // Se o TikTok ID do banco (trackingConfig.tiktokPixelId) for vazio,
  // E você AINDA quiser usar um ID fixo como último recurso global, defina-o aqui.
  // Caso contrário, se o banco é a única fonte da verdade, use trackingConfig.tiktokPixelId diretamente.
  const tikTokIdFromDb = trackingConfig.tiktokPixelId;
  const globalTikTokFallback = 'C7A0GFLC77U9T380GM9G'; // Seu ID TikTok de fallback global, se necessário
  const tiktokPixelIdToUse = tikTokIdFromDb || globalTikTokFallback;

  // Se nem do DB nem o fallback global estiverem disponíveis, e você não quiser carregar o script:
  // const tiktokPixelIdToUse = tikTokIdFromDb; // E no script abaixo, verifique if (tiktokPixelIdToUse)

  console.log(`[layout.js] Configs finais para pixels: FB: ${trackingConfig.facebookPixelId}, TT: ${tiktokPixelIdToUse}, GA: ${trackingConfig.googleTagId}`);

  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><rect width='36' height='36' fill='%23009EE3' rx='5.273' ry='5.273'></rect><rect width='27.984' height='12.023' x='4.008' y='4.008' fill='%23A5F3FC' rx='1.758' ry='1.758'></rect><g fill='%232E3441'><circle cx='6.012' cy='21.973' r='2.004'></circle><circle cx='6.012' cy='29.988' r='2.004'></circle><circle cx='14.027' cy='21.973' r='2.004'></circle><circle cx='14.027' cy='29.988' r='2.004'></circle><circle cx='21.973' cy='21.973' r='2.004'></circle><circle cx='21.973' cy='29.988' r='2.004'></circle><circle cx='29.988' cy='21.973' r='2.004'></circle><circle cx='29.988' cy='29.988' r='2.004'></circle></g></svg>" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Facebook Pixel: USA trackingConfig.facebookPixelId (do banco de dados ou fallback de env) */}
        {trackingConfig && trackingConfig.facebookPixelId && (
          <>
            <Script id="facebook-pixel-script" strategy="lazyOnload">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${trackingConfig.facebookPixelId}');
                fbq('track', 'PageView');
                console.log('[layout.js] Facebook Pixel inicializado com ID: ${trackingConfig.facebookPixelId}');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${trackingConfig.facebookPixelId}&ev=PageView&noscript=1`}
                alt="Facebook Pixel"
              />
            </noscript>
          </>
        )}

        {/* TikTok Pixel: USA tiktokPixelIdToUse (do banco de dados, ou fallback de env, ou fallback global) */}
        {tiktokPixelIdToUse && (
          <>
            <Script id="tiktok-pixel-script" strategy="afterInteractive">
              {`
                !function (w, d, t) {
                  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
                  var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var s=document.createElement("script")
                  ;s.type="text/javascript",s.async=!0,s.src=r+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(s,a)};
                  ttq.load('${tiktokPixelIdToUse}');
                  ttq.page();
                  console.log('[layout.js] TikTok Pixel inicializado com ID: ${tiktokPixelIdToUse}');
                }(window, document, 'ttq');
              `}
            </Script>
            <noscript>
              <img height="1" width="1" style={{ display: 'none' }}
                src={`https://analytics.tiktok.com/i18n/pixel/event.png?sdkid=${tiktokPixelIdToUse}&noscript=1`}
                alt="TikTok Pixel" />
            </noscript>
          </>
        )}

        {/* Google Tag (GA4 ou GTM): USA trackingConfig.googleTagId (do banco de dados ou fallback de env) */}
        {trackingConfig && trackingConfig.googleTagId && trackingConfig.googleTagId.startsWith('G-') && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingConfig.googleTagId}`} strategy="lazyOnload" />
            <Script id="google-analytics-script" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${trackingConfig.googleTagId}');
                console.log('[layout.js] Google Analytics (GA4) inicializado com ID: ${trackingConfig.googleTagId}');
              `}
            </Script>
          </>
        )}
        {trackingConfig && trackingConfig.googleTagId && trackingConfig.googleTagId.startsWith('GTM-') && (
          <>
            <Script id="google-tag-manager-head-script" strategy="lazyOnload">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${trackingConfig.googleTagId}');
              console.log('[layout.js] Google Tag Manager (GTM) inicializado com ID: ${trackingConfig.googleTagId}');
            `}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${trackingConfig.googleTagId}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
                title="Google Tag Manager noscript"
              ></iframe>
            </noscript>
          </>
        )}

        {/* Adicionar script de inicialização global que disponibiliza variáveis e funções */}
        <Script id="tracking-globals" strategy="beforeInteractive">
          {`
            // Objeto global para tracking
            window.MPTracker = {
              pixelIds: {
                fb: ${JSON.stringify(trackingConfig?.facebookPixelId || '')},
                tiktok: ${JSON.stringify(tiktokPixelIdToUse || '')}, // Usa o ID final para TikTok
                google: ${JSON.stringify(trackingConfig?.googleTagId || '')}
              },

              // Função para evento de visualização de produto
              trackViewContent: function(product) {
                if (!product) return;
                try {
                  if (window.fbq && this.pixelIds.fb) {
                    const contentName = product.name;
                    const contentId = product._id || product.name.toLowerCase().replace(/\\s+/g, '-');
                    const value = parseFloat(product.price.replace(',', '.'));
                    window.fbq('track', 'ViewContent', {
                      content_name: contentName, content_ids: [contentId], content_type: 'product',
                      value: value, currency: 'BRL'
                    });
                    console.log('MPTracker: FB ViewContent enviado para:', contentName);
                  }
                  if (window.ttq && this.pixelIds.tiktok) {
                    setTimeout(() => { // Timeout para garantir que ttq esteja pronto
                      try {
                        window.ttq.track('ViewContent', {
                          content_name: product.name,
                          content_id: product._id || product.name.toLowerCase().replace(/\\s+/g, '-'),
                          content_type: 'product',
                          value: parseFloat(product.price.replace(',', '.')),
                          currency: 'BRL'
                        });
                        console.log('MPTracker: TikTok ViewContent enviado para:', product.name);
                      } catch (err) { console.error('MPTracker: Erro ao enviar TikTok ViewContent:', err); }
                    }, 500); // Aumentado para 500ms para dar mais tempo ao ttq
                  } else if (this.pixelIds.tiktok) { console.warn('MPTracker: TikTok ttq não disponível ainda para ViewContent.'); }
                } catch (e) { console.error('MPTracker: Erro ao rastrear visualização de produto:', e); }
              },

              // Função para evento de início de checkout
              trackInitiateCheckout: function(product) {
                if (!product) return;
                try {
                  if (window.fbq && this.pixelIds.fb) {
                    const contentName = product.name;
                    const contentId = product._id || product.name.toLowerCase().replace(/\\s+/g, '-');
                    const value = parseFloat(product.price.replace(',', '.'));
                    window.fbq('track', 'InitiateCheckout', {
                      content_name: contentName, content_ids: [contentId], content_type: 'product',
                      value: value, currency: 'BRL', num_items: 1
                    });
                    console.log('MPTracker: FB InitiateCheckout enviado para:', contentName);
                  }
                  if (window.ttq && this.pixelIds.tiktok) {
                     setTimeout(() => { // Timeout para garantir que ttq esteja pronto
                      try {
                        window.ttq.track('InitiateCheckout', {
                          content_name: product.name,
                          content_id: product._id || product.name.toLowerCase().replace(/\\s+/g, '-'),
                          content_type: 'product',
                          value: parseFloat(product.price.replace(',', '.')),
                          currency: 'BRL', quantity: 1
                        });
                        console.log('MPTracker: TikTok InitiateCheckout enviado para:', product.name);
                      } catch (err) { console.error('MPTracker: Erro ao enviar TikTok InitiateCheckout:', err); }
                    }, 500); // Aumentado para 500ms
                  } else if (this.pixelIds.tiktok) { console.warn('MPTracker: TikTok ttq não disponível ainda para InitiateCheckout.'); }
                } catch (e) { console.error('MPTracker: Erro ao rastrear início de checkout:', e); }
              }
            };
            console.log('[layout.js] MPTracker inicializado com pixelIds:', window.MPTracker.pixelIds);
          `}
        </Script>

        <AuthProvider>
          <ThemeProvider>
            <TaxasModalProvider>
              <ClientLayout>
                {children}
              </ClientLayout>
            </TaxasModalProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}