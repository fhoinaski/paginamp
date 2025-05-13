// src/app/dashboard/page.js
'use client';
import React, { useState, useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';
import axios from 'axios';
import { fetchProductData } from '../../data/productData';
import { staticProductData } from '../../data/staticProductData';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';

const Dashboard = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [usingLocalData, setUsingLocalData] = useState(false);
  
  useEffect(() => {
    // Carregar dados dos produtos da API
    if (user) {
      loadProducts();
    }
  }, [user]);

  const loadProducts = async (forceRefresh = false) => {
    setIsLoading(true);
    console.log('Iniciando carregamento de produtos...');
    
    try {
      // Tenta carregar da API primeiro, com opção para forçar atualização
      console.log('Tentando carregar produtos da API...');
      const url = forceRefresh 
        ? '/api/products?forceRefresh=true' 
        : '/api/products';
      
      const response = await axios.get(url, {
        timeout: 10000, // 10 segundos de timeout
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      // Verificar se os dados estão na estrutura esperada
      if (!response.data) {
        console.warn('Resposta da API vazia');
        throw new Error('Resposta vazia da API');
      }
      
      const productsData = Array.isArray(response.data.products) 
        ? response.data.products 
        : Array.isArray(response.data) 
          ? response.data 
          : null;
      
      if (!productsData || productsData.length === 0) {
        console.warn("Nenhum produto retornado da API, tentando dados locais");
        throw new Error("Nenhum produto encontrado na API");
      }
      
      // Garantir que todos os produtos tenham um ID
      const validProducts = productsData.map((product, index) => ({
        ...product,
        _id: product._id || `api_${index + 1}`
      }));
      
      setProducts(validProducts);
      setUsingLocalData(false);
    } catch (error) {
      console.warn("Erro ao carregar dados da API:", error.message);
      
      try {
        // Carrega do arquivo local se a API falhar
        const localData = await fetchProductData();
        
        // Adicionar _id fictícios para compatibilidade com a interface
        const dataWithIds = localData.map((product, index) => ({
          ...product,
          _id: product._id || `local_${index + 1}` // Manter ID existente ou criar um local
        }));
        
        setProducts(dataWithIds);
      } catch (localError) {
        console.error("Erro ao carregar dados locais:", localError);
        
        // Usar dados estáticos como último recurso
        const dataWithIds = staticProductData.map((product, index) => ({
          ...product,
          _id: product._id || `static_${index + 1}` // IDs estáticos prefixados com 'static_'
        }));
        
        setProducts(dataWithIds);
      }
      
      setUsingLocalData(true);
      setMessage({ 
        type: 'info', 
        text: 'Usando dados locais. As alterações não serão salvas permanentemente.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Função para forçar a atualização dos dados do servidor
  const handleRefreshProducts = async () => {
    setMessage({ type: 'info', text: 'Atualizando dados do servidor...' });
    await loadProducts(true);
    setMessage({ type: 'success', text: 'Dados atualizados com sucesso!' });
    
    // Limpar mensagem após 3 segundos
    setTimeout(() => {
      if (message.type === 'success') {
        setMessage({ type: '', text: '' });
      }
    }, 3000);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Painel de Administração</h1>
        <p className="text-gray-600">Bem-vindo, {user?.email}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-3 sm:space-y-0">
          <h2 className="text-xl font-semibold">Produtos ({products.length})</h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <Link 
              href="/dashboard/produtos"
              className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto"
            >
              Gerenciar Produtos
            </Link>
            <button 
              onClick={handleRefreshProducts} 
              className="flex items-center justify-center px-3 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 w-full sm:w-auto"
            >
              <RefreshCcw className="w-4 h-4 mr-2" />
              Atualizar Dados
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
              <Link 
                key={product._id} 
                href={`/dashboard/produtos?id=${product._id}`}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{product.name}</h3>
                  <span className="text-green-600 font-bold">R$ {product.price}</span>
                </div>
                <p className="text-sm text-gray-500 truncate mb-2">{product.info}</p>
                {product.imageUrl && (
                  <div className="flex justify-center">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="h-20 w-auto object-contain" 
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
        
        {message.text && (
          <div className={`mt-4 p-3 rounded ${
            message.type === 'error' ? 'bg-red-100 text-red-700' : 
            message.type === 'success' ? 'bg-green-100 text-green-700' : 
            'bg-blue-100 text-blue-700'
          }`}>
            <p>{message.text}</p>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-xl font-semibold mb-4">Informações do Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-y-3 md:space-y-0">
          <div className="p-3 bg-gray-50 rounded-md">
            <p className="font-medium">Autenticado como:</p>
            <p className="text-gray-700">{user?.email}</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-md">
            <p className="font-medium">Origem dos dados:</p>
            <p className="text-gray-700">{usingLocalData ? 'Local (Fallback)' : 'API'}</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-md">
            <p className="font-medium">Total de produtos:</p>
            <p className="text-gray-700">{products.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;