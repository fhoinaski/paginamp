// components/ProductDetail.js
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CircleCheckBig, Truck, CreditCard, Calendar, Shield } from 'lucide-react';

const ProductDetail = ({ product }) => {
  const [activeTab, setActiveTab] = useState('specifications');

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex justify-center items-center bg-white/10 rounded-lg p-6">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-lg">{product.info}</p>
              <div className="mt-4">
                <span className="text-xl line-through opacity-75">R$ {product.normalPrice}</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-3xl font-bold">R$ {product.price}</span>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {Math.round((parseFloat(product.normalPrice.replace(',', '.')) - parseFloat(product.price.replace(',', '.'))) / parseFloat(product.normalPrice.replace(',', '.')) * 100)}% OFF
                  </span>
                </div>
                <p className="text-sm mt-1">ou em até 12x sem juros</p>
              </div>
              <a 
                href={product.urlBuy} 
                className="mt-6 bg-white text-blue-700 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Comprar agora
                <Truck size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex flex-wrap">
            <button
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'specifications'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('specifications')}
            >
              Especificações
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'details'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('details')}
            >
              Detalhes
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'shipping'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('shipping')}
            >
              Envio
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-4 dark:text-white">Características</h3>
                <ul className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center">
                      <CircleCheckBig className="h-5 w-5 shrink-0 text-brand mr-3" />
                      <span className="text-sm leading-tight dark:text-gray-300">{spec.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-4 dark:text-white">Benefícios</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CircleCheckBig className="h-5 w-5 shrink-0 text-brand mr-3" />
                    <span className="text-sm leading-tight dark:text-gray-300">Aceita débito, crédito, código QR e Pix</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheckBig className="h-5 w-5 shrink-0 text-brand mr-3" />
                    <span className="text-sm leading-tight dark:text-gray-300">Inclui conta digital e cartão gratuito</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheckBig className="h-5 w-5 shrink-0 text-brand mr-3" />
                    <span className="text-sm leading-tight dark:text-gray-300">3 anos de garantia</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-6">
              <h3 className="font-medium text-lg mb-4 dark:text-white">Sobre este produto</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A maquininha {product.name} é a solução ideal para empreendedores que buscam praticidade e segurança nas vendas.
                Com design moderno e funcionalidades avançadas, ela permite receber pagamentos de forma rápida e segura.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="text-brand" />
                    <h4 className="font-medium dark:text-white">Pagamentos</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Aceita cartões de crédito, débito, pagamentos por aproximação e Pix.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="text-brand" />
                    <h4 className="font-medium dark:text-white">Recebimento</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Receba o dinheiro na hora ou escolha receber em até 30 dias com taxas reduzidas.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="text-brand" />
                    <h4 className="font-medium dark:text-white">Segurança</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Todas as transações são criptografadas e seguem os mais altos padrões de segurança.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-6">
              <h3 className="font-medium text-lg mb-4 dark:text-white">Informações de Envio</h3>
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <Truck className="text-brand mt-1" />
                <div>
                  <h4 className="font-medium dark:text-white">Frete Grátis</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Entrega para todo o Brasil com prazo médio de 5 a 7 dias úteis após a confirmação do pagamento.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2 dark:text-white">Perguntas frequentes sobre o envio</h4>
                <div className="space-y-4">
                  <div className="border-b pb-3 dark:border-gray-700">
                    <h5 className="font-medium text-sm dark:text-white">Como rastrear meu pedido?</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Após o envio, você receberá um código de rastreio por e-mail e SMS.
                    </p>
                  </div>
                  <div className="border-b pb-3 dark:border-gray-700">
                    <h5 className="font-medium text-sm dark:text-white">Quanto tempo leva para a entrega?</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      O prazo médio é de 5 a 7 dias úteis para todo o Brasil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;