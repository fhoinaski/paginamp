import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Hook personalizado para gerenciar o estado do produto
 * @param {string} productId - ID do produto
 * @returns {Object} - Estado e funções do produto
 */
export const useProduct = (productId) => {
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

  const updateProduct = async (updatedData) => {
    try {
      setIsLoading(true);
      const response = await axios.put(`/api/products/${productId}`, updatedData);
      setProduct(response.data.product);
      setError(null);
      return true;
    } catch (err) {
      console.error('Erro ao atualizar produto:', err);
      setError('Falha ao atualizar o produto');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/products/${productId}`);
      setProduct(null);
      setError(null);
      return true;
    } catch (err) {
      console.error('Erro ao excluir produto:', err);
      setError('Falha ao excluir o produto');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    product,
    isLoading,
    error,
    updateProduct,
    deleteProduct
  };
}; 