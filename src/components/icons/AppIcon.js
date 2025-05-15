'use client';

import React from 'react';
import { cn } from '../../lib/utils';
import * as LucideIcons from 'lucide-react';

/**
 * Componente de ícone centralizado que utiliza Lucide Icons
 * 
 * @param {Object} props
 * @param {string} props.name - Nome do ícone do Lucide (ex: 'CreditCard', 'Shield', etc)
 * @param {string} props.className - Classes adicionais para o ícone
 * @param {string} props.size - Tamanho do ícone (sm, md, lg)
 * @param {string} props.color - Cor do ícone (usar cores do Tailwind como 'sky', 'blue', etc)
 */
const AppIcon = ({ 
  name, 
  className, 
  size = 'md',
  color = 'sky',
  ...props 
}) => {
  // Obter o componente do ícone Lucide pelo nome
  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    console.warn(`Ícone "${name}" não encontrado`);
    return null;
  }

  // Mapeamento de tamanhos
  const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8'
  };

  // Mapeamento de cores
  const colorMap = {
    sky: 'text-sky-500',
    blue: 'text-blue-500',
    red: 'text-red-500',
    green: 'text-green-500',
    yellow: 'text-yellow-500',
    gray: 'text-gray-500',
    black: 'text-black',
    white: 'text-white',
    brand: 'text-brand'
  };

  return (
    <IconComponent 
      className={cn(
        'shrink-0', 
        sizeMap[size] || sizeMap.md,
        colorMap[color] || colorMap.sky,
        className
      )} 
      {...props} 
    />
  );
};

export default AppIcon; 