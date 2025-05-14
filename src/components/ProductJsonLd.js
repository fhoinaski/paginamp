import React from 'react';
import { staticProductData } from '../data/staticProductData';

export default function ProductJsonLd({ productSlug }) {
  // Encontra o produto com base no slug
  const product = staticProductData.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-') === productSlug
  );

  if (!product) return null;

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    // Idealmente, esta seria uma URL absoluta
    "image": (process.env.NEXT_PUBLIC_BASE_URL || 'https://enocmaquininhas.com.br') + 
      (product.imageUrl.startsWith('/') ? product.imageUrl : '/' + product.imageUrl),
    "description": product.info + ". " + product.specifications
      .map(spec => spec.text)
      .join(". "),
    "sku": product._id,
    "mpn": product._id,
    "brand": {
      "@type": "Brand",
      "name": "Point (Mercado Pago)"
    },
    "offers": {
      "@type": "Offer",
      // Para "url", idealmente seria uma URL absoluta
      "url": (process.env.NEXT_PUBLIC_BASE_URL || 'https://enocmaquininhas.com.br') + 
        (product.urlBuy.startsWith('/') ? product.urlBuy : '/' + product.urlBuy),
      "priceCurrency": "BRL",
      "price": product.price.replace(',', '.'),
      "priceValidUntil": new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split('T')[0],
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock"
    }
    // Não há dados reais de avaliação disponíveis
    // "aggregateRating": {
    //   "@type": "AggregateRating",
    //   "ratingValue": "4.5",
    //   "reviewCount": "120"
    // }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
} 