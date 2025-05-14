// src/components/ProductCatalog.js
'use client';
import React, { useState, useEffect } from 'react';
import ProductCard from './ui/ProductCard';
import { fetchProductData } from '../data/productData';
import { staticProductData } from '../data/staticProductData';
import { Filter, Search } from 'lucide-react';

const ProductCatalog = () => {
  const [products, setProducts] = useState(staticProductData);
  const [filteredProducts, setFilteredProducts] = useState(staticProductData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState('default');
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
    
    // Apply price filter
    result = result.filter(product => {
      const price = parseFloat(product.price.replace(',', '.'));
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Apply sorting
    if (sortOption === 'price-asc') {
      result.sort((a, b) => parseFloat(a.price.replace(',', '.')) - parseFloat(b.price.replace(',', '.')));
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => parseFloat(b.price.replace(',', '.')) - parseFloat(a.price.replace(',', '.')));
    } else if (sortOption === 'discount') {
      result.sort((a, b) => {
        const discountA = parseFloat(a.normalPrice.replace(',', '.')) - parseFloat(a.price.replace(',', '.'));
        const discountB = parseFloat(b.normalPrice.replace(',', '.')) - parseFloat(b.price.replace(',', '.'));
        return discountB - discountA;
      });
    }
    
    setFilteredProducts(result);
  }, [searchTerm, products, priceRange, sortOption]);

  // TODO: Otimização futura para escalabilidade
  // Para otimização e escalabilidade com grande número de produtos:
  // 1. Implementar paginação, filtragem (searchTerm, priceRange) e ordenação (sortOption)
  //    diretamente na API (/api/products?page=1&limit=12&search=termo&minPrice=0&maxPrice=1000&sort=price-asc)
  // 2. O frontend então passaria esses parâmetros para a API e receberia apenas 
  //    o conjunto de dados relevante e paginado.
  // 3. Isso reduziria:
  //    - A carga no cliente (filtragem e ordenação feita no servidor)
  //    - A quantidade de dados transferidos pela rede
  //    - O consumo de memória no cliente
  // 4. Implemente também indexação adequada no MongoDB para os campos de filtro e ordenação

  return (
    <section className="-mt-24 bg-primary-foreground dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold dark:text-white">Nossos Produtos</h2>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full md:w-64 px-4 py-2 pl-10 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
            </div>
            
            <button
              className="px-4 py-2 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-white flex items-center gap-2"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter size={16} />
              <span className="hidden md:inline">Filtros</span>
            </button>
          </div>
        </div>
        
        {filterOpen && (
          <div className="mb-8 p-4 bg-white dark:bg-slate-800 rounded-md shadow-md transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2 dark:text-white">Faixa de Preço</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <span className="text-sm font-medium dark:text-white">
                    R$ {priceRange[0]} - R$ {priceRange[1]}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 dark:text-white">Ordenar por</h3>
                <select
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-slate-800 dark:text-white"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Relevância</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                  <option value="discount">Maior Desconto</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12 dark:text-white">
                <p className="text-lg">Nenhum produto encontrado com os filtros selecionados.</p>
                <button 
                  className="mt-4 text-brand hover:text-brand-dark"
                  onClick={() => {
                    setSearchTerm('');
                    setPriceRange([0, 1000]);
                    setSortOption('default');
                  }}
                >
                  Limpar filtros
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