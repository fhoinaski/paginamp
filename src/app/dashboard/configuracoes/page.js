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
  
  // Estados para as configurações de rastreamento
  const [trackingConfig, setTrackingConfig] = useState({
    facebookPixelId: '',
    tiktokPixelId: '',
    googleTagId: ''
  });
  
  useEffect(() => {
    // Carregar configurações quando a página for montada
    loadConfigurations();
  }, []);
  
  const loadConfigurations = async () => {
    setIsLoading(true);
    setMessage({ type: '', text: '' });
    
    try {
      // Carregar configurações de rastreamento
      const trackingRes = await axios.get('/api/configurations/tracking');
      if (trackingRes.data && trackingRes.data.settings) {
        setTrackingConfig(trackingRes.data.settings);
      }
      
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
      // Definir valores padrão em caso de erro
      setTrackingConfig({ facebookPixelId: '', tiktokPixelId: '', googleTagId: '' });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSaveConfig = async () => {
    setIsSaving(true);
    setMessage({ type: 'info', text: 'Salvando configurações...' });
    
    try {
      // Salvar configurações de rastreamento
      await axios.post('/api/configurations/tracking', trackingConfig);

      setMessage({ type: 'success', text: 'Configurações salvas com sucesso!' });
      
      // Após 3 segundos, limpar a mensagem de sucesso
      setTimeout(() => {
        if (message.type === 'success') {
          setMessage({ type: '', text: '' });
        }
      }, 3000);
    } catch (error) {
      console.error('Erro ao salvar configurações:', error);
      let errorMessage = 'Erro ao salvar configurações.';
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      } else if (error.message) {
        errorMessage = error.message;
      }
      setMessage({ type: 'error', text: `Erro ao salvar: ${errorMessage}` });
    } finally {
      setIsSaving(false);
    }
  };
  
  // Handler para tracking config
  const handleTrackingConfigChange = (field, value) => {
    setTrackingConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Configurações de Pixels</h1>
        <p className="text-gray-600">Configure os IDs de rastreamento para análise de conversões</p>
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
      
      {/* Configurações de Rastreamento (Pixels) */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Configurações de Rastreamento (Pixels)</h2>
        
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Facebook Pixel ID
            </label>
            <input
              type="text"
              value={trackingConfig.facebookPixelId}
              onChange={(e) => handleTrackingConfigChange('facebookPixelId', e.target.value)}
              placeholder="Ex: 123456789012345"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-xs text-gray-500">
              Deixe em branco para desativar o Facebook Pixel.
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              TikTok Pixel ID
            </label>
            <input
              type="text"
              value={trackingConfig.tiktokPixelId}
              onChange={(e) => handleTrackingConfigChange('tiktokPixelId', e.target.value)}
              placeholder="Ex: ABCDEFGHIJ1234567890"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-xs text-gray-500">
              Deixe em branco para desativar o TikTok Pixel.
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Google Tag ID (GA4 ou GTM)
            </label>
            <input
              type="text"
              value={trackingConfig.googleTagId}
              onChange={(e) => handleTrackingConfigChange('googleTagId', e.target.value)}
              placeholder="Ex: G-XXXXXXXXXX ou GTM-XXXXXX"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-xs text-gray-500">
              Use o formato G-XXXXXXXXXX para GA4 ou GTM-XXXXXX para Google Tag Manager. Deixe em branco para desativar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardConfiguracoes; 