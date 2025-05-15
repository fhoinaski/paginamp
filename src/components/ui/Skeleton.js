'use client';

import { cn } from '../../lib/utils';

/**
 * Componente Skeleton para estados de carregamento
 * @param {string} className - Classes adicionais de estilização
 * @param {React.ReactNode} children - Conteúdo opcional dentro do skeleton
 * @param {React.ComponentProps<'div'>} props - Outras props de div
 */
const Skeleton = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("animate-pulse bg-gray-200 dark:bg-gray-700 rounded", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Skeleton; 