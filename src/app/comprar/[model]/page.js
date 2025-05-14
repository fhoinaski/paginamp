// src/app/comprar/[model]/page.js
import React from 'react';
import { notFound } from 'next/navigation';
import ConfiguraPedido from '../../../components/comprar/ConfiguraPedido';
import { slugToName } from '../../../utils/formatters';

// Removida diretiva de renderização dinâmica para permitir cache
// export const dynamic = 'force-dynamic';

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
      return (
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold mb-4">Erro ao carregar informações do produto</h1>
          <p>Houve um problema ao carregar os dados. Por favor, tente novamente mais tarde.</p>
        </div>
      );
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
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">Erro ao carregar informações do produto</h1>
        <p>Ocorreu um erro: {error.message}</p>
      </div>
    );
  }
}

// Como agora a página é totalmente dinâmica, podemos remover a função generateStaticParams
// pois ela não será utilizada com dynamic: 'force-dynamic'