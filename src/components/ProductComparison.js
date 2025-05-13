'use client';
import React, { useState, useEffect } from 'react';
import { fetchProductData } from '../data/productData';
import { staticProductData } from '../data/staticProductData';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

const ProductComparison = () => {
  const [products, setProducts] = useState(staticProductData);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductData();
        setProducts(data);
        setSelectedProducts(data.map(p => p.name));
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        setSelectedProducts(staticProductData.map(p => p.name));
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleProductToggle = (productName) => {
    if (selectedProducts.includes(productName)) {
      if (selectedProducts.length > 1) {
        setSelectedProducts(selectedProducts.filter(p => p !== productName));
      }
    } else {
      setSelectedProducts([...selectedProducts, productName]);
    }
  };

  const filteredProducts = products.filter(p => selectedProducts.includes(p.name));

  if (loading) {
    return (
      <section className="bg-white dark:bg-slate-900 py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">Compare as Maquininhas</h2>
        
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {products.map((product) => (
            <button
              key={product.name}
              onClick={() => handleProductToggle(product.name)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedProducts.includes(product.name)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-gray-300'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 border-b dark:border-slate-700"></th>
                {filteredProducts.map((product) => (
                  <th key={product.name} className="py-4 px-6 border-b dark:border-slate-700 text-center">
                    <div className="flex flex-col items-center">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-16 h-16 object-contain mb-2"
                      />
                      <span className="font-semibold dark:text-white">{product.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">R$ {product.price}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-6 border-b dark:border-slate-700 font-medium dark:text-white">Conexão</td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-3 px-6 border-b dark:border-slate-700 text-center dark:text-gray-300">
                    {product.specifications.some(s => s.type === "wifi") ? "Wi-Fi + 4G" : "Bluetooth"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-6 border-b dark:border-slate-700 font-medium dark:text-white">Bateria</td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-3 px-6 border-b dark:border-slate-700 text-center dark:text-gray-300">
                    {product.specifications.find(s => s.type === "bateria")?.text || "N/A"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-6 border-b dark:border-slate-700 font-medium dark:text-white">Imprime Comprovante</td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-3 px-6 border-b dark:border-slate-700 text-center">
                    {product.specifications.some(s => s.type === "Imprime o comprovante") ? (
                      <Check className="mx-auto text-green-500" size={20} />
                    ) : (
                      <X className="mx-auto text-red-500" size={20} />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-6 border-b dark:border-slate-700 font-medium dark:text-white">Peso</td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-3 px-6 border-b dark:border-slate-700 text-center dark:text-gray-300">
                    {product.specifications.find(s => s.type === "peso")?.text || "N/A"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-6 border-b dark:border-slate-700 font-medium dark:text-white">Dimensões</td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-3 px-6 border-b dark:border-slate-700 text-center dark:text-gray-300">
                    {product.specifications.find(s => s.type === "dimensões")?.text || "N/A"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-5 px-6 dark:text-white"></td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-5 px-6 text-center">
                    <Link
                      href={product.urlBuy}
                      className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-md inline-block"
                    >
                      Comprar
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;