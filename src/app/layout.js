import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "Maquininhas Point | Revendedor autorizado Point Enoc Maquininhas",
  description: "Escolha a maquininha perfeita para o seu negócio. Oferecemos as melhores opções de maquininhas Point, incluindo a Point Pro 2 com conexão 3G e Wi-Fi. Menores taxas do mercado e recebimento na hora.",
  keywords: "maquininhas point, mercado pago, point pro 2, máquina de cartão, pagamento, débito, crédito",
  openGraph: {
    title: "Maquininhas Point | Revendedor autorizado Point Enoc Maquininhas",
    description: "Escolha a maquininha perfeita para o seu negócio. Oferecemos as melhores opções de maquininhas Point, incluindo a Point Pro 2.",
    type: "website",
    url: "https://www.seusite.com.br",
    images: [
      {
        url: "https://www.seusite.com.br/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maquininhas Point",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maquininhas Point | Revendedor autorizado Point Enoc Maquininhas",
    description: "Escolha a maquininha perfeita para o seu negócio. Oferecemos as melhores opções de maquininhas Point, incluindo a Point Pro 2.",
    images: ["https://www.enocmaquininhas.com.br/images/herotaxas.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://www.enocmaquininhas.com.br/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="schema-markup" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Enoc Maquininhas",
              "description": "Revendedor autorizado de maquininhas Point do Mercado Pago",
              "url": "https://www.enocmaquininhas.com.br/",
              "logo": "https://www.enocmaquininhas.com.br/favicon.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service"
              }
            }
          `}
        </Script>
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
      </head>
      <body>
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=546621900705567&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
      </body>
    </html>
  );
}