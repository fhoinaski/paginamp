import { staticProductData } from '../../data/staticProductData'; 

// URL base do site
const URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://enocmaquininhas.com.br';

export async function GET() {
  // Use staticProductData conforme o contexto do projeto.
  const products = staticProductData; 

  const productUrls = products.map(product => {
    // Garanta que urlInfo e urlBuy existam e sejam strings válidas para URL
    let productPageUrl = '';
    if (product.urlInfo && typeof product.urlInfo === 'string') {
      productPageUrl = `
        <url>
          <loc>${URL}${product.urlInfo.startsWith('/') ? product.urlInfo : '/' + product.urlInfo}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.9</priority>
        </url>
      `;
    }
    
    let buyPageUrl = '';
    // A urlBuy em staticProductData já inclui /comprar/, então não precisamos adicionar.
    if (product.urlBuy && typeof product.urlBuy === 'string') {
     buyPageUrl = `
        <url>
          <loc>${URL}${product.urlBuy.startsWith('/') ? product.urlBuy : '/' + product.urlBuy}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    }
    return `${productPageUrl}${buyPageUrl}`;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${URL}/</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${productUrls}
      <!-- Adicionar outras URLs estáticas importantes manualmente se necessário
      <url>
        <loc>${URL}/contato</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>
      -->
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 