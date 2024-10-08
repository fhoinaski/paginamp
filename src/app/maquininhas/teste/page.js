'use client'

import { useState, useEffect } from 'react';
import { fetchProductPrice } from '../../../lib/productFecth';

export default function ProductPage() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    async function loadPrice() {
      try {
        const productPrice = await fetchProductPrice();
        console.log('Fetched product price:', productPrice);
        setPrice(productPrice);
      } catch (error) {
        console.error('Failed to load product price:', error);
      }
    }
    loadPrice();
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {price !== null ? (
        <p>Price: ${price.toFixed(2)}</p>
      ) : (
        <p>Loading price...</p>
      )}
    </div>
  );
}