'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCardClient from './ProductCardClient';
import Skeleton from './ui/Skeleton';

const ProdutosClient = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/products');
        setProducts(response.data.products || []);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        setError('Falha ao carregar os produtos');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50" id="maquininhas">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Maquininhas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="bg-white rounded-lg shadow-lg p-4">
                <Skeleton className="h-40 mb-4" />
                <Skeleton className="h-6 mb-2" />
                <Skeleton className="h-4 mb-4" />
                <Skeleton className="h-6 mb-2" />
                <Skeleton className="h-10 mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Maquininhas</h2>
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-dark transition-colors"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-16 bg-gray-50" id="maquininhas">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossas Maquininhas</h2>
        
        {products.length === 0 ? (
          <p className="text-center">Nenhum produto encontrado</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCardClient key={product._id} productId={product._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProdutosClient; 