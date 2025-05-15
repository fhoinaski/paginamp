// src/components/ProductCatalog.js
'use client';
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProductData } from '../data/productData';
import { staticProductData } from '../data/staticProductData';
import { Search } from 'lucide-react';
import Skeleton from './ui/Skeleton';

const ProductCatalog = () => {
  const [products, setProducts] = useState(staticProductData);
  const [filteredProducts, setFilteredProducts] = useState(staticProductData);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductData();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        // Mantém os dados estáticos como fallback
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.info.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(result);
  }, [searchTerm, products]);

  return (
    <section className="-mt-24 bg-primary-foreground dark:bg-slate-900 transition-colors sm:px-20 md:px-32 lg:px-40 ">
      <div className=" mx-auto px-4 py-8 w-full">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 8].map((item) => (
              <div key={item} className="flex flex-col space-y-3">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-10 w-1/2" />
                <Skeleton className="h-8 w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12 dark:text-white">
                <p className="text-lg">Nenhum produto encontrado com o termo de busca.</p>
                <button 
                  className="mt-4 text-brand hover:text-brand-dark"
                  onClick={() => setSearchTerm('')}
                >
                  Limpar busca
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;