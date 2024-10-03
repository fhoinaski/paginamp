'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMachine, setCurrentMachine] = useState('Point Mini NFC 2');
  const pathname = usePathname();

  useEffect(() => {
    const machineNames = {
      '/maquininhas/point-mini': 'Point Mini NFC 2',
      '/maquininhas/point-pro': 'Point Pro 2',
      '/maquininhas/point-smart-2': 'Point Smart 2',
      '/maquininhas/point-air': 'Point Air'
    };

    const matchingPath = Object.keys(machineNames).find(path => pathname.startsWith(path));
    if (matchingPath) {
      setCurrentMachine(machineNames[matchingPath]);
    }
  }, [pathname]);

  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto p-4">
        <nav>
          <ul className="flex space-x-4">
            <li className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                {currentMachine}
                <ChevronDown className="ml-2 h-5 w-5" />
              </button>
              {isOpen && (
                <ul className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <li>
                    <a href="/maquininhas/point-mini" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900">
                      Point Mini NFC 2
                    </a>
                  </li>
                  <li>
                    <a href="/maquininhas/point-pro" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900">
                      Point Pro 2
                    </a>
                  </li>
                  <li>
                    <a href="/maquininhas/point-smart-2" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900">
                      Point Smart 2
                    </a>
                  </li>
                  <li>
                    <a href="/maquininhas/point-air" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900">
                      Point Air
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default CustomDropdown;