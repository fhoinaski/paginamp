// lib/productFetcher.js
import axios from 'axios';

export async function fetchProductPrice() {
  try {
    const { data } = await axios.get('/api/product-proxy');
    console.log( data.price);
    // Assumindo que queremos o preço do primeiro produto retornado
    const price = data.price;
    return price;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}