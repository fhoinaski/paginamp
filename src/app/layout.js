// src/app/layout.js
import "./globals.css";
import Script from 'next/script';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';
import { TaxasModalProvider } from '../contexts/TaxasModalContext';
import ClientLayout from '../components/ClientLayout';
import FacebookPixelInitializer from '../components/FacebookPixelInitializer';

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
  try {
    // Construa a URL base de forma segura
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
    const response = await fetch(`${baseUrl}/api/configurations/tracking`, {
      next: { revalidate: 86400 }, // Revalidação a cada 24 horas, já que configurações de tracking mudam raramente
    });

    if (!response.ok) {
      console.error(`Erro ao buscar configurações de tracking: ${response.status} ${response.statusText}`);
      return { facebookPixelId: null, tiktokPixelId: null, googleTagId: null };
    }
    const data = await response.json();
    return data.settings || { facebookPixelId: null, tiktokPixelId: null, googleTagId: null };
  } catch (error) {
    console.error('Falha ao buscar configurações de tracking no RootLayout:', error);
    return { facebookPixelId: null, tiktokPixelId: null, googleTagId: null }; // Fallback em caso de erro de fetch
  }
}

export default async function RootLayout({ children }) {
  const trackingConfig = await getTrackingConfigurations();

  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><rect width='36' height='36' fill='%23009EE3' rx='5.273' ry='5.273'></rect><rect width='27.984' height='12.023' x='4.008' y='4.008' fill='%23A5F3FC' rx='1.758' ry='1.758'></rect><g fill='%232E3441'><circle cx='6.012' cy='21.973' r='2.004'></circle><circle cx='6.012' cy='29.988' r='2.004'></circle><circle cx='14.027' cy='21.973' r='2.004'></circle><circle cx='14.027' cy='29.988' r='2.004'></circle><circle cx='21.973' cy='21.973' r='2.004'></circle><circle cx='21.973' cy='29.988' r='2.004'></circle><circle cx='29.988' cy='21.973' r='2.004'></circle><circle cx='29.988' cy='29.988' r='2.004'></circle></g></svg>" type="image/svg+xml" />
        
        {/* Facebook Pixel - Apenas noscript tag aqui, inicialização feita via componente cliente */}
        {trackingConfig && trackingConfig.facebookPixelId && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${trackingConfig.facebookPixelId}&ev=PageView&noscript=1`}
              alt="Facebook Pixel"
            />
          </noscript>
        )}

        {/* TikTok Pixel */}
        {trackingConfig && trackingConfig.tiktokPixelId && (
          <Script id="tiktok-pixel" strategy="afterInteractive">
            {`
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
                var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var s=document.createElement("script")
                ;s.type="text/javascript",s.async=!0,s.src=r+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(s,a)};
                ttq.load('${trackingConfig.tiktokPixelId}');
                ttq.page();
              }(window, document, 'ttq');
            `}
          </Script>
        )}

        {/* Google Tag (GA4 ou GTM) */}
        {trackingConfig && trackingConfig.googleTagId && trackingConfig.googleTagId.startsWith('G-') && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingConfig.googleTagId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${trackingConfig.googleTagId}');
              `}
            </Script>
          </>
        )}
        {trackingConfig && trackingConfig.googleTagId && trackingConfig.googleTagId.startsWith('GTM-') && (
          <>
            <Script id="google-tag-manager-head" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${trackingConfig.googleTagId}');
            `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        {trackingConfig && trackingConfig.googleTagId && trackingConfig.googleTagId.startsWith('GTM-') && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${trackingConfig.googleTagId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager noscript"
            ></iframe>
          </noscript>
        )}
        <AuthProvider>
          <ThemeProvider>
            <TaxasModalProvider>
              {/* Componente cliente para inicialização do Facebook Pixel */}
              {trackingConfig && trackingConfig.facebookPixelId && (
                <FacebookPixelInitializer pixelId={trackingConfig.facebookPixelId} />
              )}
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