import "./globals.css";

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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}