'use client';

import { useState } from 'react';
import { useTaxasModal } from '../../contexts/TaxasModalContext';

const SectionPointSmart = () => {
    const [activeRange, setActiveRange] = useState(0); // Voltando para o primeiro estado para corresponder à imagem
    
    // Usando o contexto do modal
    const { openModal } = useTaxasModal();
    
    // Definição das taxas por faixa de valores
    const taxRanges = [

        // taxa promo
        {
            debito: '0,74',
            credito: '0,74',
            credito12x: '8,99'
        },

        // Até R$5 mil
        {
            debito: '1,61',
            credito: '3,51',
            credito12x: '13,6'
        },
        // De R$5 mil a R$10 mil
        {
            debito: '1,58',
            credito: '3,48',
            credito12x: '13,79'
        },
        // Mais de R$10 mil
        {
            debito: '1,49',
            credito: '3,39',
            credito12x: '13,59'
        }
    ];

    const handleRangeClick = (index) => {
        setActiveRange(index);
    };

    return (
        <section className="mt-4 md:mt-6 mb-0 bg-white py-12 md:py-16" style={{
            fontFamily: '"Proxima Nova",-apple-system,Roboto,Arial,sans-serif,sans-serif',
            fontSize: '18px',
            lineHeight: 1.25,
            WebkitFontSmoothing: 'antialiased'
        }}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold sm:text-2xl md:text-4xl mb-2">
                        Quanto mais você vende, menos você paga
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        Receba na hora com taxas que variam conforme suas vendas no mês.
                    </p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {/* Card das taxas */}
                    <div className="fee-selector-info md:w-1/2 bg-[#f5f5f5] p-6 md:p-10 rounded-3xl shadow-sm max-w-xl">
                        <h2 className="calm-landings-library-section-title__title text-xl font-semibold md:text-2xl mb-8">
                            Selecione seu faturamento mensal
                        </h2>
                        
                        {/* Seletor de faixas */}
                        <div className="calm-landings-library-taxes-switcher desktop">
                            {/* Switch bar */}
                            <div className="switch-bar relative border rounded-2xl bg-[rgba(0,0,0,.039)] p-1 mb-8 md:mb-10 text-xs">
                                {/* Highlight background */}
                                <div 
                                    className="switch-bar__highlight absolute top-1 bottom-1 left-1 bg-white rounded-2xl shadow-md transition-transform duration-300 ease-out"
                                    style={{ 
                                        width: 'calc(33.33% - 2px)', 
                                        transform: `translateX(${activeRange * 100}%)` 
                                    }}
                                />
                                
                                {/* Botões */}
                                <div className="relative z-10 flex">
                                    <button 
                                        className={`switch-bar__button flex-1 py-2 md:py-3  text-center font-extrabold transition-colors duration-200 ${activeRange === 0 ? 'switch-bar__button--active text-emerald-600' : 'text-gray-500'}`}
                                        onClick={() => handleRangeClick(0)}
                                    >
                                      PROMO
                                    </button>
                                    <button 
                                        className={`switch-bar__button flex-1 py-2 md:py-3 font-medium text-center transition-colors duration-200 ${activeRange === 1 ? 'switch-bar__button--active text-black' : 'text-gray-500'}`}
                                        onClick={() => handleRangeClick(1)}
                                    >
                                        De R$ 5 mil a<br className="block" /> R$ 10 mil
                                    </button>
                                    <button 
                                        className={`switch-bar__button flex-1 py-2 md:py-3 font-medium text-center transition-colors duration-200 ${activeRange === 2 ? 'switch-bar__button--active text-black' : 'text-gray-500'}`}
                                        onClick={() => handleRangeClick(2)}
                                    >
                                        Mais de<br className="block" /> R$ 10 mil
                                    </button>
                                </div>
                            </div>

                            {/* Valores de taxas */}
                            <div className="values flex flex-row justify-between mb-10">
                                {/* Débito */}
                                <div className="values__box flex-1 text-center">
                                    <div className="values__value flex items-end justify-center">
                                        {/* se a taxa for promo, o texto é verde  */}
                                        {activeRange === 0 ? (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold text-emerald-600">
                                                {taxRanges[activeRange].debito}
                                            </span>
                                            
                                        ) : (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold">
                                                {taxRanges[activeRange].debito}
                                            </span>
                                        )}
                                        {activeRange === 0 ? (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold text-emerald-600">%</span>
                                        ) : (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold">%</span>
                                        )}

                                        
                                    </div>
                                    <span className="values__label text-xs font-medium uppercase text-gray-600 mt-1 block">DÉBITO</span>
                                </div>
                                
                                {/* Crédito */}
                                <div className="values__box flex-1 text-center">
                                    <div className="values__value flex items-end justify-center">
                                        {/* se a taxa for promo, o texto é verde  */}
                                        {activeRange === 0 ? (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold text-emerald-600">
                                                {taxRanges[activeRange].credito}
                                            </span>
                                        ) : (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold">
                                                {taxRanges[activeRange].credito}
                                            </span>
                                        )}
                                        {activeRange === 0 ? (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold text-emerald-600">%</span>
                                        ) : (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold">%</span>
                                        )}

                                    </div>
                                    <span className="values__label text-xs font-medium uppercase text-gray-600 mt-1 block">CRÉDITO</span>
                                </div>
                                
                                {/* Crédito 12x */}
                                <div className="values__box flex-1 text-center">
                                    <div className="values__value flex items-end justify-center">
                                        {/* se a taxa for promo, o texto é verde  */}
                                        {activeRange === 0 ? (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold text-emerald-600">
                                                {taxRanges[activeRange].credito12x}
                                            </span>
                                        ) : (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold">  {taxRanges[activeRange].credito12x}</span>
                                        )}
                                        {activeRange === 0 ? (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold text-emerald-600">%</span>
                                        ) : (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold">%</span>
                                        )}

                                    </div>
                                    <span className="values__label text-xs font-medium uppercase text-gray-600 mt-1 block">CRÉDITO 12x</span>
                                </div>
                            </div>
                            
                            {/* Modal Trigger */}
                            <div className="wrapper-modal">
                                <div className="calm-landings-library-modal desktop">
                                    <section>
                                        <h2  className="flex items-center w-full  cursor-pointer hover:underline text-sm text-blue-600"
                                                
                                                onClick={openModal}
                                                style={{ color: '#3483fa' }}>
                                           
                                                Conferir todas as taxas
                                               
                                            
                                        </h2>
                                    </section>
                                </div>
                            </div>
                            
                            <div style={{ color: 'rgba(0, 0, 0, 0.55)', fontSize: '12px', marginTop: '10px', textAlign: 'left', lineHeight: '16px' }}>
                              
                                <p>
                                Promoção para novos usuários: Ao adquirir uma maquininha Point, o usuário aproveita taxas promocionais nos primeiros 30 dias ou até R$ 5.000 em vendas (o que ocorrer primeiro)
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Card da maquininha */}
                    <div className="md:w-1/2  rounded-3xl  flex items-center justify-center overflow-hidden max-w-xl p-4">
                        <div className="relative w-full h-full flex items-center justify-center">
                        <video 
                                    autoPlay 
                                    loop 
                                    playsInline 
                                    width="100%" 
                                    aria-hidden="true"
                                    style={{ 
                                        maxWidth: "100%", 
                                        height: "100%", 
                                        border: "none", 
                                        outline: "none", 
                                        pointerEvents: "none",
                                        objectFit: "cover",
                                        display: "block",
                                        borderRadius: "10px"
                                        
                                    }}
                                >
                                    <source 
                                        src="/videos/smart.mp4" 
                                        type="video/mp4" 
                                    />
                                </video>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionPointSmart; 