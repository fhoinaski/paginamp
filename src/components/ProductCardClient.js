'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { useProductCard } from '../hooks/useProductCard';

/**
 * Componente cliente para exibição de produto
 * @param {Object} props
 * @param {string} props.productId - ID do produto
 * @param {boolean} props.hideButton - Se deve esconder o botão de compra
 */
const ProductCardClient = ({ productId, hideButton = false }) => {
  const { product, isLoading, error } = useProductCard(productId);

  return (
    <ProductCard
      product={product}
      isLoading={isLoading}
      error={error}
      hideButton={hideButton}
    />
  );
};

export default ProductCardClient; 