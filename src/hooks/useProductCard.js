import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Hook para gerenciar o estado do produto no cliente
 * @param {string} productId - ID do produto
 * @returns {Object} - Estado e funções do produto
 */
export const useProductCard = (productId) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;

      try {
        setIsLoading(true);
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data.product);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar produto:', err);
        setError('Falha ao carregar o produto');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return {
    product,
    isLoading,
    error
  };
}; 