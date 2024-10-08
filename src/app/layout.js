import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "Maquininhas Point | Revendedor autorizado Point Enoc Maquininhas",
  description: "Escolha a maquininha perfeita para o seu negócio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><rect width='36' height='36' fill='%23009EE3' rx='5.273' ry='5.273'></rect><rect width='27.984' height='12.023' x='4.008' y='4.008' fill='%23A5F3FC' rx='1.758' ry='1.758'></rect><g fill='%232E3441'><circle cx='6.012' cy='21.973' r='2.004'></circle><circle cx='6.012' cy='29.988' r='2.004'></circle><circle cx='14.027' cy='21.973' r='2.004'></circle><circle cx='14.027' cy='29.988' r='2.004'></circle><circle cx='21.973' cy='21.973' r='2.004'></circle><circle cx='21.973' cy='29.988' r='2.004'></circle><circle cx='29.988' cy='21.973' r='2.004'></circle><circle cx='29.988' cy='29.988' r='2.004'></circle></g></svg>" type="image/svg+xml" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '546621900705567');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=546621900705567&ev=PageView&noscript=1"
          />
        </noscript>
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('CS29J6BC77UF26CUDJV0');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}