'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { fetchProductData } from '../data/productData'; // Importe os dados

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMachine, setCurrentMachine] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);
  const productData = fetchProductData(); // Obtenha os dados do produto

  useEffect(() => {
    const machineNames = productData.reduce((acc, product) => {
      acc[product.urlInfo] = product.name;
      return acc;
    }, {});

    const matchingPath = Object.keys(machineNames).find(path => pathname.startsWith(path));
    if (matchingPath) {
      setCurrentMachine(machineNames[matchingPath]);
    }
  }, [pathname, productData]);

  const handleItemClick = (machineName, path) => {
    setIsOpen(false);
    router.push(path);
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
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="container flex h-16 items-center gap-4">
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-3" aria-label="Point Maquininha" href="/">
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
          </a>
          <span className="font-extrabold leading-3">
            Enoc <br /> maquininha
          </span>
        </div>
        <nav ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            {currentMachine}
            <ChevronDown className="ml-2 h-5 w-5" />
          </button>
          {isOpen && (
            <ul className="absolute z-10 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 flex w-[280px] flex-col gap-2 p-4">
              {productData.map((product) => (
                <li className="flex" key={product.name}>
                  <a
                    className="rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-gray-50 focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-50 hover:text-accent-foreground data-[state=open]:bg-accent/50 data-[active]:bg-accent/50 py-2 px-4 group flex h-16 w-full items-center justify-between bg-muted"
                    href={product.urlInfo}
                    onClick={() => {
                      handleItemClick(product.name, product.urlInfo);
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
                        <span className="font-semibold text-foreground">{product.name}</span>
                        <div className="space-x-2">
                          <span className="text-muted-foreground line-through">R$ {product.normalPrice}</span>
                          <span>R$ {product.price}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default CustomDropdown;