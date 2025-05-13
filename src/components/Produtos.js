'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ui/ProductCard';
import { fetchProductData } from '../data/productData';
import { staticProductData } from '../data/staticProductData';

const Produtos = () => {
    const [products, setProducts] = useState(staticProductData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProductData();
                setProducts(data);
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
                // Mantém os dados estáticos como fallback
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return (
        <section className='-mt-24 bg-primary-foreground'>
            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className='grid grid-cols-1 justify-center gap-8 px-4 py-8 sm:grid-cols-[repeat(auto-fit,_minmax(256px,_256px))]'>
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Produtos;


