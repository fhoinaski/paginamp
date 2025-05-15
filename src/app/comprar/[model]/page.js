// src/app/comprar/[model]/page.js
import React from 'react';
import { notFound } from 'next/navigation';
import ConfiguraPedido from '../../../components/comprar/ConfiguraPedido';
import { slugToName } from '../../../utils/formatters';
import Link from 'next/link';

// Removida diretiva de renderização dinâmica para permitir cache
// export const dynamic = 'force-dynamic';

// Componente de erro reutilizável
const ErrorDisplay = ({ message }) => (
  <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
      <svg 
        className="h-20 w-20 text-red-500 mx-auto mb-4" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
        />
      </svg>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Erro ao carregar informações do produto</h1>
      <p className="mb-6 dark:text-gray-300">{message || 'Houve um problema ao carregar os dados.'}</p>
      <div className="flex justify-center space-x-4">
        <Link href="/" className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors dark:text-white">
          Voltar ao Início
        </Link>
        <Link href="/maquininhas" className="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-dark transition-colors">
          Ver Maquininhas
        </Link>
      </div>
    </div>
  </div>
);

// Esta página é um Server Component
export default async function ComprarPage({ params }) {
  try {
    // Garantir que params esteja resolvido antes de acessar suas propriedades
    const resolvedParams = await Promise.resolve(params);
    const productSlug = resolvedParams.model;
    
    if (!productSlug) {
      return notFound();
    }
    
    // Usar URL absoluta para Server Components
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 
                   (typeof window === 'undefined' ? 'http://localhost:3000' : '');
    
    // Buscar todos os produtos para encontrar o correspondente pelo slug
    // Utilizando cache com revalidação a cada hora
    const response = await fetch(`${apiUrl}/api/products`, { 
      next: { revalidate: 3600 }, // Revalidação a cada 1 hora
    });
    
    if (!response.ok) {
      console.error('Erro ao buscar produtos');
      return <ErrorDisplay message="Houve um problema ao buscar os produtos. Por favor, tente novamente mais tarde." />;
    }
    
    const { products } = await response.json();
    
    // Mapear o slug da URL para o produto no banco de dados
    // Formatar o nome do produto da URL para comparar
    const formattedSlug = productSlug.toLowerCase().trim();
    
    // Procurar um produto que corresponda ao slug da URL
    const product = products.find(p => {
      const productNameSlug = p.name.toLowerCase().replace(/\s+/g, '-');
      return productNameSlug === formattedSlug;
    });
    
    if (!product) {
      return notFound();
    }
    
    return (
      <div className="pt-20">
        <ConfiguraPedido product={product} />
      </div>
    );
  } catch (error) {
    console.error('Erro ao carregar dados do produto:', error);
    return <ErrorDisplay message={`Ocorreu um erro: ${error.message}`} />;
  }
}

// Como agora a página é totalmente dinâmica, podemos remover a função generateStaticParams
// pois ela não será utilizada com dynamic: 'force-dynamic'