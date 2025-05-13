'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCardClient from './ProductCardClient';

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
              <div key={num} className="bg-white rounded-lg shadow-lg p-4 animate-pulse">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-10 bg-gray-200 rounded mt-4"></div>
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
          <p className="text-center text-red-500">{error}</p>
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