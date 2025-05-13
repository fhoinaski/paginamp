'use client';
import React, { useState, useEffect } from 'react';
import { Save, RefreshCcw, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../../../contexts/AuthContext';

const DashboardConfiguracoes = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  // Estados para as diferentes seções de configuração
  const [generalConfig, setGeneralConfig] = useState({
    siteName: 'Maquininhas Point',
    contactEmail: 'admin@exemplo.com',
    phoneNumber: '(11) 99999-9999',
    enabledFeatures: {
      analytics: true,
      cache: true,
      notifications: false
    }
  });
  
  const [apiConfig, setApiConfig] = useState({
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
    refreshInterval: '30',
    cacheExpiration: '60',
    timeout: '10'
  });
  
  const [displayConfig, setDisplayConfig] = useState({
    darkModeDefault: false,
    itemsPerPage: '12',
    showPrices: true,
    showPromotions: true,
    currencySymbol: 'R$'
  });
  
  useEffect(() => {
    // Carregar configurações quando a página for montada
    loadConfigurations();
  }, []);
  
  const loadConfigurations = async () => {
    setIsLoading(true);
    setMessage({ type: '', text: '' });
    
    try {
      // Em um ambiente real, você carregaria as configurações da API
      // Por enquanto, usando dados simulados
      
      // Simulação de resposta da API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage({ type: 'success', text: 'Configurações carregadas com sucesso!' });
      
      // Após 3 segundos, limpar a mensagem de sucesso
      setTimeout(() => {
        if (message.type === 'success') {
          setMessage({ type: '', text: '' });
        }
      }, 3000);
    } catch (error) {
      console.error('Erro ao carregar configurações:', error);
      setMessage({ type: 'error', text: 'Erro ao carregar configurações. Tente novamente.' });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSaveConfig = async () => {
    setIsSaving(true);
    setMessage({ type: 'info', text: 'Salvando configurações...' });
    
    try {
      // Em um ambiente real, você enviaria as configurações para a API
      // Por enquanto, usando uma simulação de envio
      
      // Simular tempo de processamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Configurações a serem enviadas (combinação de todos os estados)
      const configToSave = {
        general: generalConfig,
        api: apiConfig,
        display: displayConfig
      };
      
      console.log('Configurações salvas:', configToSave);
      
      setMessage({ type: 'success', text: 'Configurações salvas com sucesso!' });
      
      // Após 3 segundos, limpar a mensagem de sucesso
      setTimeout(() => {
        if (message.type === 'success') {
          setMessage({ type: '', text: '' });
        }
      }, 3000);
    } catch (error) {
      console.error('Erro ao salvar configurações:', error);
      setMessage({ type: 'error', text: `Erro ao salvar: ${error.message}` });
    } finally {
      setIsSaving(false);
    }
  };
  
  // Handlers para diferentes seções de configuração
  const handleGeneralConfigChange = (field, value) => {
    setGeneralConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleToggleFeature = (feature) => {
    setGeneralConfig(prev => ({
      ...prev,
      enabledFeatures: {
        ...prev.enabledFeatures,
        [feature]: !prev.enabledFeatures[feature]
      }
    }));
  };
  
  const handleApiConfigChange = (field, value) => {
    setApiConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleDisplayConfigChange = (field, value) => {
    setDisplayConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleToggleDisplayOption = (option) => {
    setDisplayConfig(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Configurações do Sistema</h1>
        <p className="text-gray-600">Personalize as configurações do seu site de maquininhas</p>
      </div>
      
      {message.text && (
        <div className={`mb-6 p-3 rounded flex items-center ${
          message.type === 'error' ? 'bg-red-100 text-red-700' : 
          message.type === 'success' ? 'bg-green-100 text-green-700' : 
          'bg-blue-100 text-blue-700'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="h-5 w-5 mr-2" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2" />
          )}
          <span>{message.text}</span>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row justify-between mb-6 space-y-3 sm:space-y-0">
        <button 
          onClick={loadConfigurations} 
          className="flex items-center justify-center px-3 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 w-full sm:w-auto"
          disabled={isLoading}
        >
          <RefreshCcw className="w-4 h-4 mr-2" />
          {isLoading ? 'Carregando...' : 'Recarregar'}
        </button>
        
        <button 
          onClick={handleSaveConfig} 
          className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto"
          disabled={isSaving}
        >
          <Save className="w-4 h-4 mr-2" />
          {isSaving ? 'Salvando...' : 'Salvar Configurações'}
        </button>
      </div>
      
      {/* Configurações Gerais */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Configurações Gerais</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Site
            </label>
            <input
              type="text"
              value={generalConfig.siteName}
              onChange={(e) => handleGeneralConfigChange('siteName', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email de Contato
            </label>
            <input
              type="email"
              value={generalConfig.contactEmail}
              onChange={(e) => handleGeneralConfigChange('contactEmail', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Número de Telefone
            </label>
            <input
              type="text"
              value={generalConfig.phoneNumber}
              onChange={(e) => handleGeneralConfigChange('phoneNumber', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-md font-medium mb-3">Recursos Ativados</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="feature-analytics"
                type="checkbox"
                checked={generalConfig.enabledFeatures.analytics}
                onChange={() => handleToggleFeature('analytics')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="feature-analytics" className="ml-2 block text-sm text-gray-700">
                Analytics e Relatórios
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="feature-cache"
                type="checkbox"
                checked={generalConfig.enabledFeatures.cache}
                onChange={() => handleToggleFeature('cache')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="feature-cache" className="ml-2 block text-sm text-gray-700">
                Cache de Dados
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="feature-notifications"
                type="checkbox"
                checked={generalConfig.enabledFeatures.notifications}
                onChange={() => handleToggleFeature('notifications')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="feature-notifications" className="ml-2 block text-sm text-gray-700">
                Notificações por Email
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {/* Configurações de API */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Configurações de API</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              URL da API
            </label>
            <input
              type="text"
              value={apiConfig.apiUrl}
              onChange={(e) => handleApiConfigChange('apiUrl', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Intervalo de Atualização (segundos)
            </label>
            <input
              type="number"
              value={apiConfig.refreshInterval}
              onChange={(e) => handleApiConfigChange('refreshInterval', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiração do Cache (minutos)
            </label>
            <input
              type="number"
              value={apiConfig.cacheExpiration}
              onChange={(e) => handleApiConfigChange('cacheExpiration', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Timeout (segundos)
            </label>
            <input
              type="number"
              value={apiConfig.timeout}
              onChange={(e) => handleApiConfigChange('timeout', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      
      {/* Configurações de Exibição */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Configurações de Exibição</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Itens por Página
            </label>
            <select
              value={displayConfig.itemsPerPage}
              onChange={(e) => handleDisplayConfigChange('itemsPerPage', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="6">6 itens</option>
              <option value="12">12 itens</option>
              <option value="24">24 itens</option>
              <option value="48">48 itens</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Símbolo da Moeda
            </label>
            <input
              type="text"
              value={displayConfig.currencySymbol}
              onChange={(e) => handleDisplayConfigChange('currencySymbol', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-md font-medium mb-3">Opções de Exibição</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="option-darkmode"
                type="checkbox"
                checked={displayConfig.darkModeDefault}
                onChange={() => handleToggleDisplayOption('darkModeDefault')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="option-darkmode" className="ml-2 block text-sm text-gray-700">
                Modo Escuro como Padrão
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="option-showprices"
                type="checkbox"
                checked={displayConfig.showPrices}
                onChange={() => handleToggleDisplayOption('showPrices')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="option-showprices" className="ml-2 block text-sm text-gray-700">
                Mostrar Preços
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="option-showpromotions"
                type="checkbox"
                checked={displayConfig.showPromotions}
                onChange={() => handleToggleDisplayOption('showPromotions')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="option-showpromotions" className="ml-2 block text-sm text-gray-700">
                Mostrar Promoções
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardConfiguracoes; 