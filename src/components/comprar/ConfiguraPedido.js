// src/components/comprar/ConfiguraPedido.js (versão aprimorada)
'use client';
import React, { useState, useEffect } from 'react';
import InternetProviderSelector from "./InternetProviderSelector";
import OrderConfiguration from "./OrderConfiguration";
import { Check, ChevronRight, ExternalLink } from 'lucide-react';

const ConfiguraPedido = ({ product }) => {
    const [selectedProvider, setSelectedProvider] = useState('36'); // Default to Vivo
    const [buyLink, setBuyLink] = useState('');
    const [showProviderSelector, setShowProviderSelector] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    // Lista de modelos que não têm seleção de operadora
    const modelsWithoutProvider = ["Point Mini NFC 2"];

    // Função para mapear nome da operadora para ID
    const getProviderIdByName = (name) => {
        const nameLower = name.toLowerCase();
        if (nameLower === 'vivo') return '36';
        if (nameLower === 'claro') return '23';
        if (nameLower === 'tim') return '32';
        return '36'; // Fallback para Vivo
    };

    useEffect(() => {
        if (product) {
            console.log('Product loaded:', product.name);
            console.log('Available operadoras:', product.linkOperadoras);
            
            const isPointMiniNFC2 = product.name === "Point Mini NFC 2";
            const hasOperadoras = product.linkOperadoras && 
                                 Array.isArray(product.linkOperadoras) && 
                                 product.linkOperadoras.length > 0;
            
            setShowProviderSelector(!modelsWithoutProvider.includes(product.name) && hasOperadoras);
            
            // Se tem operadoras, selecionar a primeira disponível por padrão
            if (hasOperadoras) {
                const firstOperadora = product.linkOperadoras[0];
                console.log('First operadora:', firstOperadora);
                
                const providerId = getProviderIdByName(firstOperadora.name);
                console.log('Selected provider ID:', providerId, 'for name:', firstOperadora.name);
                
                setSelectedProvider(providerId);
                updateBuyLink(product, providerId, isPointMiniNFC2);
            } else {
                // Sem operadoras, usar o link de compra padrão
                console.log('No operadoras available, using default buy link');
                updateBuyLink(product, '36', isPointMiniNFC2);
            }
        }
    }, [product]);

    const updateBuyLink = (productData, providerId, isPointMiniNFC2) => {
        if (productData) {
            console.log('Updating buy link for provider ID:', providerId);
            
            if (isPointMiniNFC2 || !productData.linkOperadoras || productData.linkOperadoras.length === 0) {
                console.log('Using default urlBuy:', productData.urlBuy);
                setBuyLink(productData.urlBuy || '');
            } else if (productData.linkOperadoras && Array.isArray(productData.linkOperadoras)) {
                const providerName = getProviderName(providerId);
                console.log('Looking for provider name:', providerName);
                
                const providerLink = productData.linkOperadoras.find(op => 
                    op.name.toLowerCase() === providerName.toLowerCase()
                );
                
                console.log('Found provider link:', providerLink);
                
                if (providerLink) {
                    console.log('Using provider link URL:', providerLink.url);
                    setBuyLink(providerLink.url);
                } else {
                    console.log('Provider not found, using default urlBuy:', productData.urlBuy);
                    setBuyLink(productData.urlBuy || '');
                }
            } else {
                console.log('Using default urlBuy as fallback');
                setBuyLink(productData.urlBuy || '');
            }
        }
    };

    const getProviderName = (id) => {
        switch(id) {
            case '36': return 'Vivo';
            case '23': return 'Claro';
            case '32': return 'TIM';
            default: return '';
        }
    };

    const handleProviderChange = (providerId) => {
        console.log('Provider changed to:', providerId);
        setSelectedProvider(providerId);
        
        // Verificar se o produto existe e tem operadoras
        if (product && product.linkOperadoras && Array.isArray(product.linkOperadoras)) {
            // Obter o nome da operadora a partir do ID
            const providerName = getProviderName(providerId);
            console.log('Looking for provider:', providerName);
            
            // Verificar se a operadora selecionada está disponível no produto
            const operadoraDisponivel = product.linkOperadoras.find(
                op => op.name.toLowerCase() === providerName.toLowerCase()
            );
            
            console.log('Provider available?', !!operadoraDisponivel);
            
            if (operadoraDisponivel) {
                // Se a operadora estiver disponível, usar o link correspondente
                console.log('Using provider link:', operadoraDisponivel.url);
                setBuyLink(operadoraDisponivel.url);
            } else {
                // Se a operadora não estiver disponível, usar o link padrão
                console.log('Provider not available, using default link');
                setBuyLink(product.urlBuy || '');
            }
        } else {
            // Se o produto não tiver operadoras, usar o link padrão
            console.log('No operadoras array, using default link');
            updateBuyLink(product, providerId, product.name === "Point Mini NFC 2");
        }
    };

    const nextStep = () => {
        if (currentStep === 1) {
            // Disparar evento InitiateCheckout quando o usuário prossegue para o pagamento
            if (product && typeof window !== 'undefined') {
                // Usar o objeto global MPTracker para rastrear eventos
                if (window.MPTracker) {
                    try {
                        window.MPTracker.trackInitiateCheckout(product);
                        console.log(`Evento InitiateCheckout para ${product.name} enviado via MPTracker em ConfiguraPedido`);
                    } catch (error) {
                        console.error('Erro ao rastrear evento InitiateCheckout:', error);
                    }
                } else {
                    console.warn('MPTracker não está disponível. Evento InitiateCheckout não rastreado em ConfiguraPedido.');
                }
            }
            
            // Pular a etapa 2 (endereço) e ir diretamente para a etapa 3 (pagamento)
            setCurrentStep(3);
        } else if (currentStep === 3) {
            // Último passo, redirecionar para o link de compra
            if (buyLink) {
                window.location.href = buyLink;
            }
        }
    };

    const prevStep = () => {
        if (currentStep === 3) {
            // Voltar da etapa 3 para a etapa 1, já que pulamos a etapa 2
            setCurrentStep(1);
        } else {
            setCurrentStep(currentStep - 1);
        }
    };

    if (!product) return (
        <div className="container mx-auto py-20">
            <p className="text-center text-gray-600">Carregando informações do produto...</p>
        </div>
    );

    return (
        <section className="min-h-screen">
            <div className="bg-[#ededed] dark:bg-slate-900 h-full py-20 transition-colors">
                <div className="container mx-auto">
                    {/* Progress Steps - Mantemos 3 passos na interface, mas pulamos o 2 no fluxo */}
                    <div className="max-w-3xl mx-auto mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                                    {currentStep > 1 ? <Check size={16} /> : 1}
                                </div>
                                <p className={`ml-2 ${currentStep >= 1 ? 'font-medium' : 'text-gray-500'}`}>Operadora</p>
                            </div>
                            <div className="h-0.5 w-12 bg-gray-300"></div>
                            <div className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                                    {currentStep > 2 ? <Check size={16} /> : 2}
                                </div>
                                <p className={`ml-2 ${currentStep >= 2 ? 'font-medium' : 'text-gray-500'}`}>Endereço</p>
                            </div>
                            <div className="h-0.5 w-12 bg-gray-300"></div>
                            <div className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                                    {currentStep > 3 ? <Check size={16} /> : 3}
                                </div>
                                <p className={`ml-2 ${currentStep >= 3 ? 'font-medium' : 'text-gray-500'}`}>Pagamento</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 shadow-md rounded-lg p-6 transition-colors">
                        {currentStep === 1 && (
                            <div>
                                <h2 className="text-xl font-bold mb-6 dark:text-white">Escolha sua operadora</h2>
                                {showProviderSelector ? (
                                    <InternetProviderSelector 
                                        selectedProvider={selectedProvider}
                                        onProviderChange={handleProviderChange}
                                        product={product}
                                    />
                                ) : (
                                    <div className="text-center py-4">
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            Este modelo não requer seleção de operadora.
                                        </p>
                                    </div>
                                )}
                                <div className="mt-8 flex justify-end">
                                    <button 
                                        className="flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                                        onClick={nextStep}
                                    >
                                        Continuar
                                        <ChevronRight size={20} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div>
                                <h2 className="text-xl font-bold mb-6 dark:text-white">Finalizar pedido</h2>
                                
                                <OrderConfiguration 
                                    product={product}
                                    providerName={getProviderName(selectedProvider)}
                                />
                                
                                <div className="mt-8 flex justify-between">
                                    <button 
                                        className="px-6 py-3 border border-gray-300 text-gray-700 dark:text-white dark:border-gray-600 font-medium rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                                        onClick={prevStep}
                                    >
                                        Voltar
                                    </button>
                                    
                                    <button 
                                        className="flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                                        onClick={nextStep}
                                    >
                                        Finalizar compra
                                        <ExternalLink size={18} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConfiguraPedido;