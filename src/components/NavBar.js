'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronRight } from 'lucide-react';

const MenuItem = ({ href, imageSrc, title, originalPrice, currentPrice }) => (
  <Link href={href} className="flex items-center p-3 hover:bg-gray-100 transition-colors duration-200">
    <div className="w-12 h-12 relative mr-3">
      <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" />
    </div>
    <div className="flex-grow">
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs">
        <span className="text-gray-400 line-through">{originalPrice}</span>{' '}
        <span className="font-bold text-green-600">{currentPrice}</span>
      </p>
    </div>
    <ChevronRight className="h-4 w-4 text-gray-400" />
  </Link>
);

const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      <button
        type="button"
        className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        Maquininhas
        <ChevronDown className="ml-2 h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-all duration-200 ease-in-out transform opacity-100 scale-100">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <MenuItem
              href="/maquininhas/point-smart-2"
              imageSrc="/images/devices/device-smart.webp"
              title="Point Smart 2"
              originalPrice="R$ 840,80"
              currentPrice="R$ 249,90"
            />
            <MenuItem
              href="/maquininhas/point-pro"
              imageSrc="/images/devices/device-smart.webp"
              title="Point Pro 2"
              originalPrice="R$ 718,80"
              currentPrice="R$ 129,90"
            />
            <MenuItem
              href="/maquininhas/point-air"
              imageSrc="/images/devices/device-smart.webp"
              title="Point Air"
              originalPrice="R$ 358,80"
              currentPrice="R$ 79,90"
            />
            <MenuItem
              href="/maquininhas/point-mini"
              imageSrc="/images/devices/device-smart.webp"
              title="Point Mini NFC 2"
              originalPrice="R$ 118,80"
              currentPrice="R$ 25,90"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;