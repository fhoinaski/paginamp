'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu, X, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchProductData } from '../data/productData';
import { staticProductData } from '../data/staticProductData';
import { NAVIGATION, SITE, URLS, TEXTS, STYLES } from '../constants';

const MenuPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentMachine, setCurrentMachine] = useState(TEXTS.MODELS);
  const [products, setProducts] = useState(staticProductData);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);

  // Buscar produtos de forma assíncrona
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

  // Determinar a máquina atual com base no pathname
  useEffect(() => {
    if (products && products.length > 0) {
      const machineNames = products.reduce((acc, product) => {
        if (product && product.urlInfo) {
          acc[product.urlInfo] = product.name;
        }
        return acc;
      }, {});

      const matchingPath = Object.keys(machineNames).find(path => pathname.startsWith(path));
      if (matchingPath) {
        setCurrentMachine(machineNames[matchingPath]);
      } else {
        setCurrentMachine(TEXTS.MODELS);
      }
    }
  }, [pathname, products]);

  const handleItemClick = (machineName, path) => {
    setIsOpen(false);
    setIsMobileMenuOpen(false);
    if (path) {
      router.push(path);
    } else {
      router.push('/');
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gradient-28 shadow fixed top-0 left-0 w-full z-50 transition-colors border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href={NAVIGATION.HOME} className="flex items-center gap-3" aria-label={SITE.NAME}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
              <rect width="36" height="36" fill="#009EE3" rx="5.273" ry="5.273"></rect>
              <rect width="27.984" height="12.023" x="4.008" y="4.008" fill="#A5F3FC" rx="1.758" ry="1.758"></rect>
              <g fill="#2E3441">
                <circle cx="6.012" cy="21.973" r="2.004"></circle>
                <circle cx="6.012" cy="29.988" r="2.004"></circle>
                <circle cx="14.027" cy="21.973" r="2.004"></circle>
                <circle cx="14.027" cy="29.988" r="2.004"></circle>
                <circle cx="21.973" cy="21.973" r="2.004"></circle>
                <circle cx="21.973" cy="29.988" r="2.004"></circle>
                <circle cx="29.988" cy="21.973" r="2.004"></circle>
                <circle cx="29.988" cy="29.988" r="2.004"></circle>
              </g>
            </svg>
            <span className="font-extrabold leading-3 text-black">
              {SITE.NAME}
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {currentMachine}
              <ChevronDown className="ml-2 h-5 w-5" />
            </button>
            
            {isOpen && (
              <ul className="absolute z-10 mt-2 w-[280px] bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 flex flex-col gap-2 p-4">
                {loading ? (
                  <li className="flex justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                  </li>
                ) : (
                  products.map((product) => (
                    <li className="flex" key={product.name}>
                      <Link
                        className="rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-50 py-2 px-4 group flex h-16 w-full items-center justify-between"
                        href={product.urlInfo || "/"}
                        onClick={() => {
                          handleItemClick(product.name, product.urlInfo || "/");
                          setCurrentMachine(product.name);
                        }}
                      >
                        <div className="flex gap-3">
                          <div className="shrink-0">
                            <Image
                              alt={product.name}
                              loading="lazy"
                              width="25"
                              height="25"
                              src={product.imageUrl}
                            />
                          </div>
                          <div>
                            <span className="font-semibold text-black">{product.name}</span>
                            <div className="space-x-2">
                              <span className="text-gray-500 line-through">R$ {product.normalPrice}</span>
                              <span className="text-black">R$ {product.price}</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
          
          <Link 
            href={URLS.MODELS_SECTION} 
            className={STYLES.PRIMARY_BUTTON}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{TEXTS.BUY}</span>
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 hover:text-gray-900"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t w-full absolute left-0 right-0 shadow-md z-10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="border-b pb-4">
              <p className="text-sm font-medium text-gray-500 mb-2">Produtos</p>
              {loading ? (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {products.map((product) => (
                    <li key={product.name}>
                      <Link
                        href={product.urlInfo || "/"}
                        className="flex items-center justify-between py-2 text-gray-700 hover:text-brand"
                        onClick={() => handleItemClick(product.name, product.urlInfo || "/")}
                      >
                        <div className="flex items-center">
                          <Image
                            alt={product.name}
                            loading="lazy"
                            width="20"
                            height="20"
                            src={product.imageUrl}
                            className="mr-2"
                          />
                          <span>{product.name}</span>
                        </div>
                        <span className="text-sm font-medium text-brand">R$ {product.price}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            <Link 
              href={URLS.MODELS_SECTION}
              className={STYLES.PRIMARY_BUTTON + " justify-center"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>{TEXTS.BUY_NOW}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default MenuPopover;