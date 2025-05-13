import React from 'react';
import { calculateDiscount } from '../../utils/helpers/format';

/**
 * Componente para exibição de preços com desconto
 * @param {Object} props
 * @param {string} props.price - Preço atual
 * @param {string} props.normalPrice - Preço normal (opcional)
 * @param {string} props.className - Classes CSS adicionais
 */
const Price = ({ price, normalPrice, className = '' }) => {
  const discount = normalPrice ? calculateDiscount(normalPrice, price) : 0;

  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-muted-foreground line-through lg:text-lg">{normalPrice}</span>
      <span className="text-lg font-semibold lg:text-2xl">{price}</span>
    </div>
  );
};

export default Price; 