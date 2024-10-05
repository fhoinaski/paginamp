import React, { useState, useEffect } from 'react';
import { fetchProductData } from "../../data/productData";
import InternetProviderSelector from "./InternetProviderSelector";
import OrderConfiguration from "./OrderConfiguration";

const ConfiguraPedido = ({ productModel }) => {
    const [selectedProvider, setSelectedProvider] = useState('36'); // Default to Vivo
    const [productData, setProductData] = useState(null);
    const [buyLink, setBuyLink] = useState('');
    const [showProviderSelector, setShowProviderSelector] = useState(false);

    const modelsWithoutProvider = ["Point Mini NFC 2"];

    useEffect(() => {
        const allProductData = fetchProductData();
        const currentProduct = allProductData.find(product => product.name === productModel);
        setProductData(currentProduct);
        if (currentProduct) {
            const isPointMiniNFC2 = currentProduct.name === "Point Mini NFC 2";
            setShowProviderSelector(!modelsWithoutProvider.includes(currentProduct.name));
            updateBuyLink(currentProduct, '36', isPointMiniNFC2); // Always use '36' (Vivo) initially
        }
    }, [productModel]);

    const updateBuyLink = (product, providerId, isPointMiniNFC2) => {
        if (product) {
            if (isPointMiniNFC2) {
                setBuyLink(product.linkPedido || product.urlBuy);
            } else if (product.linkOperadoras && Array.isArray(product.linkOperadoras)) {
                const providerName = getProviderName(providerId);
                const providerLink = product.linkOperadoras.find(op => op.name.toLowerCase() === providerName.toLowerCase());
                setBuyLink(providerLink ? providerLink.url : product.urlBuy);
            } else {
                setBuyLink(product.urlBuy || '');
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
        setSelectedProvider(providerId);
        updateBuyLink(productData, providerId, productData.name === "Point Mini NFC 2");
    };

    if (!productData) return null;

    return (
        <section>
            <div className="bg-[#ededed] h-full py-20">
                <div className="">
                    <OrderConfiguration {...productData} />
                    {showProviderSelector && (
                        <div className="mt-5">
                            <InternetProviderSelector
                                selectedProvider={selectedProvider}
                                onProviderChange={handleProviderChange}
                            />
                        </div>
                    )}
                    <div className="max-w-3xl mx-auto overflow-hidden mt-4">
                        <a href={buyLink} className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand hover:bg-brand-dark text-white py-2 px-4 mt-5 h-12 w-full text-base">
                            Continuar
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConfiguraPedido;