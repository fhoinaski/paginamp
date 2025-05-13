'use client'
import Image from "next/image";
import { fetchProductData } from "../../data/productData";
import { useState, useEffect } from "react";

const HeroSectionPointAir = () => {
    const [priceAir, setPriceAir] = useState(59.99);
    const [normalPriceAir, setNormalPriceAir] = useState(358.80);
    const [discountAir, setDiscountAir] = useState(298.81);

    useEffect(() => {
        const loadProductData = async () => {
            try {
                const productData = await fetchProductData();
                if (Array.isArray(productData)) {
                    const pointAir = productData.find(product => product.name === "Point Air");
                    if (pointAir) {
                        const price = parseFloat(pointAir.price.replace(',', '.'));
                        const normalPrice = parseFloat(pointAir.normalPrice.replace(',', '.'));
                        const discount = normalPrice - price;

                        setPriceAir(price);
                        setNormalPriceAir(normalPrice);
                        setDiscountAir(discount);
                    }
                } else {
                    console.error("Dados de produtos não são um array:", productData);
                }
            } catch (error) {
                console.error("Erro ao carregar dados do produto:", error);
            }
        };

        loadProductData();
    }, []);

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const getPriceWhole = (price) => {
        return Math.floor(price);
    };

    const getPriceCents = (price) => {
        return Math.round((price - Math.floor(price)) * 100);
    };

    // A vista preço com 50% de desconto
    const vistaPreco = priceAir * 12 * 0.9;

    return (
        <section id="hero-section" className="relative mt-18">
            <div className="bg-gradient-28 pt-16 pb-28 relative">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Coluna de Texto */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="inline-flex items-center border border-black rounded-full px-2.5 py-0.5 text-xs sm:text-sm font-extralight uppercase text-black mb-4 mt-8">
                            Point Air
                        </div>

                        <h1 className="text-md sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-tight text-black mb-4 sm:mb-6">
                            Uma nova experiência de<br />venda com maquininha
                        </h1>

                        <p className="text-xs sm:text-base md:text-lg text-black mb-6 sm:mb-8 max-w-lg">
                            Mostre o status do pagamento para seus clientes através da borda iluminada.
                        </p>

                        {/* Preços formatados no estilo do modelo */}
                        <div className="mb-6 sm:mb-8">


                            <div className="flex items-center mt-2">
                                <span className="text-sm sm:text-base line-through text-black mr-2">R$ {formatPrice(normalPriceAir)}</span>
                            </div>

                            <div className="flex items-center mt-1">
                                <span className="text-2xl sm:text-2xl font-extrabold text-black">R$ {formatPrice(priceAir)}</span>
                            </div>
                        </div>

                        {/* Botão e Frete */}
                        <div className="flex flex-col md:flex-row gap-4 mb-6 sm:mb-8 w-full md:w-auto">
                            <a
                                href="/comprar/point-air"
                                className="relative inline-flex items-center justify-center w-full md:w-auto rounded-md font-medium text-white bg-brand hover:bg-brand-dark h-10 sm:h-12 px-4 sm:px-8 text-sm sm:text-base"
                            >
                                Comprar
                            </a>

                            <div className="flex items-center gap-2 sm:gap-3  m-auto text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                </svg>
                                <span className="text-xs sm:text-sm">Frete grátis para todo o Brasil</span>
                            </div>
                        </div>
                    </div>

                    {/* Coluna da Imagem */}
                    <div className="flex justify-center md:h-[450px]">
                        <Image
                            alt="Point Air - Maquininha de cartão"
                            fetchPriority="high"
                            width={450}
                            height={450}
                            className="object-contain animate-float max-w-[80%] md:max-w-full"
                            src="/images/point/device-62.webp"
                            style={{ color: 'transparent' }}
                        />
                    </div>
                </div>

                {/* Lista de recursos */}
                <div className="container mx-auto px-4 mt-6 sm:mt-8">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm leading-tight text-black">
                        <li className="flex items-center gap-2 sm:gap-3">
                            <svg class="pog-ui-svg-icon" fill="none" viewBox="0 0 24 24" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.42652 0.75C7.50987 0.75 6.79029 1.44462 6.63972 2.30623L6.11447 4.65523C6.03839 4.99549 6 5.34309 6 5.69175V6.27108L6.00005 21.4789C6.00005 22.4441 6.77191 23.25 7.7527 23.25H16.2474C17.2282 23.25 18.0001 22.4441 18.0001 21.4789L18 6.27108V5.69099C18 5.34293 17.9617 4.99592 17.8859 4.65622L17.3614 2.30639C17.2109 1.44471 16.4913 0.75 15.5746 0.75H8.42652ZM7.50005 21.4789L7.5 6.27108C7.5 6.10843 7.62594 6 7.75265 6H12H16.2473C16.3741 6 16.5 6.10843 16.5 6.27108L16.5001 21.4789C16.5001 21.6416 16.3741 21.75 16.2474 21.75H7.7527C7.62598 21.75 7.50005 21.6416 7.50005 21.4789ZM16.2473 4.5C16.2698 4.5 16.2922 4.50042 16.3144 4.50126L15.8932 2.614L15.8883 2.59221L15.8847 2.57016C15.8483 2.34432 15.6862 2.25 15.5746 2.25H8.42652C8.31495 2.25 8.15283 2.34432 8.11636 2.57016L8.11278 2.59235L8.10788 2.61428L7.68594 4.50125C7.70807 4.50042 7.7303 4.5 7.75265 4.5H12H16.2473ZM9.00002 7.50391H8.25002V8.25391V18.7461V19.4961H9.00002H15H15.75V18.7461V8.25391V7.50391H15H9.00002ZM9.75002 17.9961V9.00391H14.25V17.9961H9.75002Z" fill="rgba(0,0,0,0.9)"></path></svg>
                            <p className="font-bold">Venda sem precisar do celular</p>
                        </li>
                        
                        <li className="flex items-center gap-2 sm:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6">
                                <path d="M12 20h.01"></path>
                                <path d="M2 8.82a15 15 0 0 1 20 0"></path>
                                <path d="M5 12.859a10 10 0 0 1 14 0"></path>
                                <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
                            </svg>
                            <p>Plano de dados grátis e Wi‑Fi</p>
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6">
                                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                <line x1="2" x2="22" y1="10" y2="10"></line>
                            </svg>
                            <p>Aceita cartões, aproximação, QR e Pix</p>
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6">
                                <rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect>
                                <line x1="22" x2="22" y1="11" y2="13"></line>
                                <line x1="6" x2="6" y1="11" y2="13"></line>
                                <line x1="10" x2="10" y1="11" y2="13"></line>
                            </svg>
                            <p>Inclui bateria que dura o dia todo</p>
                        </li>
                    </ul>
                </div>

                {/* Efeito ondulado na parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ transform: 'translateY(1px)' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 lg:h-20">
                        <path d="M0,0 C600,120 1000,0 1200,120 L1200,120 L0,120 Z" className="fill-white"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default HeroSectionPointAir;