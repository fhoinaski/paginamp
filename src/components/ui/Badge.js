import React from 'react';

/**
 * Componente de badge reutilizável
 * @param {Object} props
 * @param {string} props.variant - Variante do badge ('discount' | 'pro' | 'new')
 * @param {React.ReactNode} props.icon - Ícone opcional
 * @param {string} props.text - Texto do badge
 * @param {string} props.className - Classes CSS adicionais
 */
const Badge = ({ variant = 'discount', icon, text, className = '' }) => {
  const variants = {
    discount: 'absolute -left-px -top-px rounded-br-lg rounded-tl-lg border-b border-r bg-gradient-to-r from-[#1aa271] to-[#00b87d]',
    pro: 'absolute right-0 top-0 rounded-bl-md rounded-tr-md bg-gradient-to-r from-[#1aa271] to-[#00b87d]',
    new: 'absolute left-0 top-0 rounded-br-md rounded-tl-md bg-rose-500 lg:rounded'
  };

  return (
    <div className={`${variants[variant]} px-2 py-0.5 text-xs font-medium text-white ${className}`}>
      <div className="flex items-center gap-1">
        {icon}
        <span className="uppercase tracking-wide">{text}</span>
      </div>
    </div>
  );
};

export default Badge; 