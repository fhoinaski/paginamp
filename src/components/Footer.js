// src/components/Footer.js
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Maquininhas Point</h2>
            <p className="text-gray-400 mb-4">Revendedor autorizado de maquininhas Point para seu negócio crescer mais.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-brand transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-brand transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-brand transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li><Link href="/maquininhas/point-smart-2" className="text-gray-400 hover:text-white transition-colors">Point Smart 2</Link></li>
              <li><Link href="/maquininhas/point-pro-3" className="text-gray-400 hover:text-white transition-colors">Point Pro 3</Link></li>
              <li><Link href="/maquininhas/point-air" className="text-gray-400 hover:text-white transition-colors">Point Air</Link></li>
              <li><Link href="/maquininhas/point-mini-nfc-2" className="text-gray-400 hover:text-white transition-colors">Point Mini NFC 2</Link></li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Comprar Maquininhas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Taxas e Tarifas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Revenda</a></li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-400">(95) 98400-3872</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <a href="mailto:contato@maquininhaspoint.com.br" className="text-gray-400 hover:text-white transition-colors">contato@maquininhaspoint.com.br</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Maquininhas Point. Todos os direitos reservados.</p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;