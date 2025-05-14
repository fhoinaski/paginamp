// src/components/comprar/ConfiguraPedido.js (versão aprimorada)
'use client';
import React, { useState, useEffect } from 'react';
import InternetProviderSelector from "./InternetProviderSelector";
import OrderConfiguration from "./OrderConfiguration";
import { Check, ChevronRight, ExternalLink } from 'lucide-react';
import { trackInitiateCheckout, isPixelReady } from '../../lib/fbPixel';

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
            if (product) {
                // Tenta rastrear o evento do FB Pixel
                if (isPixelReady()) {
                    trackInitiateCheckout(product);
                    console.log(`Evento InitiateCheckout para ${product.name} rastreado com sucesso em ConfiguraPedido.`);
                } else {
                    console.warn('FB Pixel não estava pronto para InitiateCheckout em ConfiguraPedido. Tentando novamente...');
                    // Tenta novamente após um pequeno delay
                    setTimeout(() => {
                        if (isPixelReady()) {
                            trackInitiateCheckout(product);
                            console.log(`Evento InitiateCheckout para ${product.name} rastreado após retry em ConfiguraPedido.`);
                        }
                    }, 500);
                }
                
                // TikTok Pixel continua como antes
                if (typeof ttq === 'object' && ttq.track) {
                    const contentName = product.name;
                    const contentId = product._id || product.name.toLowerCase().replace(/\s+/g, '-');
                    const value = parseFloat(product.price.replace(',', '.'));
                    const currency = 'BRL';
                    const numItems = 1;
                    
                    ttq.track('InitiateCheckout', {
                        content_name: contentName,
                        content_id: contentId,
                        content_type: 'product',
                        value: value,
                        currency: currency,
                        quantity: numItems
                    });
                    console.log(`PIXEL TT EVENT: InitiateCheckout for ${contentName} (ConfiguraPedido Step 1)`);
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
                            <div className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-brand text-white' : 'bg-gray-300 text-gray-600'}`}>
                                    {currentStep > 1 ? <Check size={20} /> : 1}
                                </div>
                                <span className="text-sm mt-2 dark:text-white">Produto</span>
                            </div>
                            <div className="flex-1 h-1 bg-gray-300 mx-2">
                                <div className={`h-full ${currentStep >= 3 ? 'bg-brand' : 'bg-gray-300'}`} style={{ width: `${currentStep > 1 ? '100%' : '0%'}` }}></div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-brand text-white' : 'bg-gray-300 text-gray-600'}`}>
                                    {currentStep > 3 ? <Check size={20} /> : 2}
                                </div>
                                <span className="text-sm mt-2 dark:text-white">Pagamento</span>
                            </div>
                        </div>
                    </div>

                    {currentStep === 1 && (
                        <>
                            <OrderConfiguration product={product} />
                            {showProviderSelector && (
                                <div className="mt-5">
                                    <InternetProviderSelector
                                        selectedProvider={selectedProvider}
                                        onProviderChange={handleProviderChange}
                                        availableProviders={product.linkOperadoras || []}
                                    />
                                </div>
                            )}
                            <div className="max-w-3xl mx-auto overflow-hidden mt-4">
                                <button 
                                    onClick={nextStep}
                                    className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand hover:bg-brand-dark text-white py-2 px-4 mt-5 h-12 w-full text-base"
                                >
                                    Continuar para Pagamento <ChevronRight size={20} className="ml-2" />
                                </button>
                            </div>
                        </>
                    )}

                    {currentStep === 3 && (
                        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 overflow-hidden rounded-lg shadow transition-colors">
                            <h2 className="text-lg font-medium p-4 dark:text-white">Método de Pagamento</h2>
                            
                            <div className="p-4 flex flex-col gap-4">
                                <div className="border rounded-md p-4">
                                    <h3 className="font-medium mb-2 dark:text-white">Ir para Checkout Seguro</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                        Você será redirecionado para uma página de pagamento segura para finalizar sua compra.
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                        Maquininha selecionada: <strong>{product.name}</strong>
                                        {showProviderSelector && (
                                            <> com chip <strong>{getProviderName(selectedProvider)}</strong></>
                                        )}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        Você fornecerá detalhes de endereço e forma de pagamento na próxima tela.
                                    </p>
                                </div>
                                
                                <div className="flex justify-between mt-4">
                                    <button 
                                        onClick={prevStep}
                                        className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 h-12 w-1/4 text-base"
                                    >
                                        Voltar
                                    </button>
                                    <a 
                                        href={buyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand hover:bg-brand-dark text-white py-2 px-4 h-12 w-2/3 text-base"
                                    >
                                        Finalizar Pedido <ExternalLink size={20} className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ConfiguraPedido;