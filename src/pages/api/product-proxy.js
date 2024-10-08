import { NextResponse } from 'next/server';
import axios from 'axios';

export default async function handler(req, res) { 
  const shopSlug = process.env.NEXT_PUBLIC_SHOP_SLUG;
  const apiToken = process.env.API_TOKEN;

  if (!shopSlug || !apiToken) {
    console.error('Missing environment variables');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    const response = await axios({
      method: 'GET',
      url: `https://accounts.cartpanda.com/api/${shopSlug}/products/2388581`,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiToken}`
      }
    });

    const product = response.data.product;
    console.log('Full product data:', JSON.stringify(product, null, 2));

    let price = 0;

    // Check product_default_variant first
    if (product.product_default_variant && product.product_default_variant.price) {
      price = parseFloat(product.product_default_variant.price);
      console.log('Price from product_default_variant:', price);
    }

    // If price is still 0, check product_variants
    if (price === 0 && product.product_variants && product.product_variants.length > 0) {
      const variantPrices = product.product_variants
        .map(variant => parseFloat(variant.price))
        .filter(p => p > 0);

      console.log('Variant prices:', variantPrices);

      if (variantPrices.length > 0) {
        price = Math.min(...variantPrices);
        console.log('Lowest non-zero variant price:', price);
      }
    }

    console.log('Final calculated price:', price);

    return NextResponse.json({
      product: {
        ...product,
        calculatedPrice: price
      }
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: error.message },
      { status: error.response?.status || 500 }
    );
  }
}

export const runtime = 'edge';