'use client';

import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react'; // Assuming lucide-react is installed
import { useTaxasModal } from '../contexts/TaxasModalContext';

// AnimatedNumber Component - modificado para efeito de contador digital
const AnimatedNumber = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const previousValue = useRef(value);
    const countRef = useRef(null);
    
    useEffect(() => {
        if (value !== previousValue.current) {
            // Limpar qualquer contagem anterior
            if (countRef.current) {
                clearInterval(countRef.current);
            }
            
            // Converter os valores para números
            const startValue = parseFloat(previousValue.current?.replace(',', '.') || '0');
            const targetValue = parseFloat(value?.replace(',', '.') || '0');
            
            // Se os valores forem iguais, não precisamos animar
            if (startValue === targetValue) {
                setDisplayValue(value);
                previousValue.current = value;
                return;
            }
            
            // Configurações da animação
            const steps = 20; // Número de etapas
            const interval = 25; // Intervalo em ms
            
            // Para valores decimais (multiplicamos para trabalhar com inteiros)
            const multiplier = 100;
            const startValueInt = Math.round(startValue * multiplier);
            const targetValueInt = Math.round(targetValue * multiplier);
            const increment = Math.max(1, Math.ceil(Math.abs(targetValueInt - startValueInt) / steps));
            
            let currentValue = startValueInt;
            let step = 0;
            const isIncreasing = targetValue > startValue;
            
            // Iniciar a animação de contagem
            countRef.current = setInterval(() => {
                step++;
                
                // Incrementar ou decrementar o valor
                if (isIncreasing) {
                    currentValue = Math.min(targetValueInt, currentValue + increment);
                } else {
                    currentValue = Math.max(targetValueInt, currentValue - increment);
                }
                
                // Formatar o valor atual
                const decimal = (currentValue / multiplier).toFixed(2);
                const formatted = decimal.replace('.', ',').replace(/,?0+$/, '');
                
                setDisplayValue(formatted);
                
                // Finalizar quando atingir o alvo
                if (currentValue === targetValueInt || step >= steps) {
                    clearInterval(countRef.current);
                    setDisplayValue(value);
                    previousValue.current = value;
                }
            }, interval);
            
            return () => {
                if (countRef.current) {
                    clearInterval(countRef.current);
                }
            };
        }
    }, [value]);
    
    return <span>{displayValue}</span>;
};

// Componente separado para o modal de taxas
export const TaxasModal = () => {
    const { showModal, toggleModal } = useTaxasModal();
    const [activeMobileRange, setActiveMobileRange] = useState(0);

    const handleMobileRangeChange = (e) => {
        setActiveMobileRange(parseInt(e.target.value, 10));
    };

    const mobileRangeMapping = ['ate2mil', 'de2a5mil', 'de5a10mil', 'de10a15mil', 'acima15mil'];
    const mobileRangeLabels = ['2 MIL', '2 A 5 MIL', '5 A 10 MIL', '10 A 15 MIL', 'ACIMA 15 MIL'];

    const detailedRates = {
        pix: { promo: "0%", ate2mil: "0,49%", de2a5mil: "0,49%", de5a10mil: "0,49%", de10a15mil: "0,49%", acima15mil: "0,49%" },
        debito: { promo: "0,74%", ate2mil: "1,99%", de2a5mil: "1,67%", de5a10mil: "1,65%", de10a15mil: "1,61%", acima15mil: "1,41%" },
        credito: {
            vista: { promo: "0,74%", ate2mil: "4,98%", de2a5mil: "3,57%", de5a10mil: "3,55%", de10a15mil: "3,51%", acima15mil: "3,31%" },
            parcelas: [
                { desc: "Em 2x", promo: "3,99%", ate2mil: "9,90%", de2a5mil: "7,79%", de5a10mil: "7,59%", de10a15mil: "7,49%", acima15mil: "5,69%" },
                { desc: "Em 3x", promo: "4,99%", ate2mil: "11,28%", de2a5mil: "8,45%", de5a10mil: "8,26%", de10a15mil: "8,21%", acima15mil: "6,47%" },
                { desc: "Em 4x", promo: "5,99%", ate2mil: "12,64%", de2a5mil: "9,33%", de5a10mil: "9,14%", de10a15mil: "9,09%", acima15mil: "7,33%" },
                { desc: "Em 5x", promo: "6,99%", ate2mil: "13,97%", de2a5mil: "10,20%", de5a10mil: "10,01%", de10a15mil: "9,96%", acima15mil: "8,14%" },
                { desc: "Em 6x", promo: "7,99%", ate2mil: "15,27%", de2a5mil: "11,09%", de5a10mil: "10,89%", de10a15mil: "10,79%", acima15mil: "8,69%" },
                { desc: "Em 7x", promo: "8,99%", ate2mil: "16,55%", de2a5mil: "11,89%", de5a10mil: "11,70%", de10a15mil: "11,65%", acima15mil: "9,91%" },
                { desc: "Em 8x", promo: "8,99%", ate2mil: "17,81%", de2a5mil: "12,74%", de5a10mil: "12,55%", de10a15mil: "12,50%", acima15mil: "10,47%" },
                { desc: "Em 9x", promo: "8,99%", ate2mil: "19,04%", de2a5mil: "13,24%", de5a10mil: "13,05%", de10a15mil: "13,00%", acima15mil: "11,76%" },
                { desc: "Em 10x", promo: "8,99%", ate2mil: "20,24%", de2a5mil: "13,49%", de5a10mil: "13,29%", de10a15mil: "13,19%", acima15mil: "11,79%" },
                { desc: "Em 11x", promo: "8,99%", ate2mil: "21,43%", de2a5mil: "13,85%", de5a10mil: "13,66%", de10a15mil: "13,61%", acima15mil: "13,21%" },
                { desc: "Em 12x", promo: "8,99%", ate2mil: "22,59%", de2a5mil: "13,99%", de5a10mil: "13,79%", de10a15mil: "13,69%", acima15mil: "13,49%" }
            ]
        }
    };

    const getMobileRate = (rateObject) => {
        if (!rateObject) return '-';
        const key = mobileRangeMapping[activeMobileRange];
        return rateObject[key] ?? '-';
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-60 p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="bg-white w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl rounded-lg shadow-xl relative max-h-[90vh] flex flex-col">
                <button 
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-20 p-1 rounded-full hover:bg-gray-100"
                    onClick={toggleModal}
                    aria-label="Fechar modal"
                >
                    <X size={24} />
                </button>
                
                <div className="px-6 pt-6 md:px-8 md:pt-8 pb-4 border-b border-gray-200">
                    <h2 id="modal-title" className="text-xl md:text-2xl font-semibold text-gray-800">Detalhe das taxas</h2>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                        Conheça a variação de acordo ao seu faturamento mensal.
                    </p>
                </div>
                
                <div className="flex-grow overflow-y-auto px-2 py-4 sm:px-6 sm:py-6 md:px-8 md:py-6">
                    <div className="w-full">
                        <div className="w-full text-gray-700 text-sm">
                            <div className="hidden md:grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] bg-gray-50 font-semibold text-gray-600 uppercase text-xs border-b border-gray-200">
                                <div className="p-2 text-center flex items-center justify-center"></div>
                                <div className="p-2 text-center flex items-center justify-center">PROMO</div>
                                <div className="p-2 text-center flex items-center justify-center col-span-4">ATÉ</div>
                                <div className="p-2 text-center flex items-center justify-center">ACIMA</div>
                            </div>
                            <div className="hidden md:grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] bg-gray-50 font-medium text-gray-600 uppercase text-[13px] border-b border-gray-200">
                                <div className="p-2 text-center flex items-center justify-center"></div>
                                <div className="p-2 text-center flex items-center justify-center"></div>
                                <div className="p-2 text-center flex items-center justify-center">2 MIL</div>
                                <div className="p-2 text-center flex items-center justify-center">2 A 5 MIL</div>
                                <div className="p-2 text-center flex items-center justify-center">5 A 10 MIL</div>
                                <div className="p-2 text-center flex items-center justify-center">10 A 15 MIL</div>
                                <div className="p-2 text-center flex items-center justify-center">15 MIL</div>
                            </div>
                            
                            <div className="md:hidden grid grid-cols-[auto_80px_1fr] bg-gray-50 text-[13px] font-semibold text-gray-600 uppercase sticky top-0 z-10 border-b border-gray-200">
                                <div className="p-2 text-center flex items-center justify-start"></div>
                                <div className="p-2 text-center flex items-center justify-center text-emerald-600">PROMO</div>
                                <div className="p-2 text-center flex items-center justify-center relative">
                                    <select
                                        className="appearance-none bg-transparent border-none p-1 pr-6 w-full text-center text-gray-800 font-semibold text-[13px] uppercase cursor-pointer focus:outline-none focus:ring-0"
                                        value={activeMobileRange}
                                        onChange={handleMobileRangeChange}
                                        aria-label="Selecionar faixa de faturamento"
                                    >
                                        {mobileRangeLabels.map((label, index) => (
                                            <option key={index} value={index}>
                                                {index === 0 ? 'Até ' : (index === mobileRangeLabels.length - 1 ? 'Acima ' : '')}
                                                {label}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-[10px] pointer-events-none">▼</span>
                                </div>
                            </div>
                            
                            <div>
                                {['PIX', 'DÉBITO', 'CRÉDITO'].map((section, idx) => (
                                    <div key={section}>
                                        <div className="grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] bg-white border-b-0">
                                            <div className="p-2 pt-4 pb-1 text-left font-semibold text-black uppercase text-[15px]">{section}</div>
                                            <div className="hidden md:block"></div><div className="hidden md:block"></div><div className="hidden md:block"></div><div className="hidden md:block"></div><div className="hidden md:block"></div><div className="hidden md:block"></div>
                                            <div className="md:hidden hidden"></div><div className="md:hidden hidden"></div>
                                        </div>
                                        {section === 'CRÉDITO' ? (
                                            <>
                                                <div className="grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] border-b border-gray-200 hover:bg-gray-50">
                                                    <div className="p-2 text-left text-gray-800 pl-3">À vista</div>
                                                    <div className="p-2 text-center text-emerald-600 font-semibold">{detailedRates.credito.vista.promo}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{detailedRates.credito.vista.ate2mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{detailedRates.credito.vista.de2a5mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{detailedRates.credito.vista.de5a10mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{detailedRates.credito.vista.de10a15mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{detailedRates.credito.vista.acima15mil}</div>
                                                    <div className="p-2 text-center md:hidden">{getMobileRate(detailedRates.credito.vista)}</div>
                                                </div>
                                                {detailedRates.credito.parcelas.map((parcela, index) => (
                                                    <div key={index} className={`grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] border-b ${index === detailedRates.credito.parcelas.length - 1 ? 'border-b-0' : 'border-gray-200'} hover:bg-gray-50`}>
                                                        <div className="p-2 text-left text-gray-800 pl-3">{parcela.desc}</div>
                                                        <div className="p-2 text-center text-emerald-600 font-semibold">{parcela.promo}</div>
                                                        <div className="p-2 text-center hidden md:flex items-center justify-center">{parcela.ate2mil}</div>
                                                        <div className="p-2 text-center hidden md:flex items-center justify-center">{parcela.de2a5mil}</div>
                                                        <div className="p-2 text-center hidden md:flex items-center justify-center">{parcela.de5a10mil}</div>
                                                        <div className="p-2 text-center hidden md:flex items-center justify-center">{parcela.de10a15mil}</div>
                                                        <div className="p-2 text-center hidden md:flex items-center justify-center">{parcela.acima15mil}</div>
                                                        <div className="p-2 text-center md:hidden">{getMobileRate(parcela)}</div>
                                                    </div>
                                                ))}
                                            </>
                                        ) : (
                                            <div className="grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] border-b border-gray-200 hover:bg-gray-50">
                                                <div className="p-2 text-left text-gray-800 pl-3"></div>
                                                <div className="p-2 text-center text-emerald-600 font-semibold">{section === 'PIX' ? detailedRates.pix.promo : detailedRates.debito.promo}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? detailedRates.pix.ate2mil : detailedRates.debito.ate2mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? detailedRates.pix.de2a5mil : detailedRates.debito.de2a5mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? detailedRates.pix.de5a10mil : detailedRates.debito.de5a10mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? detailedRates.pix.de10a15mil : detailedRates.debito.de10a15mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? detailedRates.pix.acima15mil : detailedRates.debito.acima15mil}</div>
                                                <div className="p-2 text-center md:hidden">{getMobileRate(section === 'PIX' ? detailedRates.pix : detailedRates.debito)}</div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Aviso de promoção no modal */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600 text-center">
                            Promoção para novos usuários: Ao adquirir uma maquininha Point, o usuário aproveita taxas promocionais nos primeiros 30 dias ou até R$ 5.000 em vendas (o que ocorrer primeiro)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SectionTaxas = () => {
    const [activeRange, setActiveRange] = useState(0);
    
    // Usando o contexto do modal
    const { showModal, toggleModal } = useTaxasModal();

    // Ajustando as taxas para corresponder à imagem
    const taxRanges = [
        //taxa promocional
        { debito: '0,74', credito: '0,74', credito12x: '8,99' },
        { debito: '1,99', credito: '4,98', credito12x: '22,59' },
        { debito: '1,67', credito: '3,57', credito12x: '13,99' },
        { debito: '1,65', credito: '3,55', credito12x: '13,79' },
    ];

    const rangeLabels = [
        'Promo',

        'Até R$ 2 mil',
        'Até R$ 5 mil',
        '+ R$ 5 mil'
    ];

    const handleRangeClick = (index) => {
        setActiveRange(index);
    };

    return (
        <section className="bg-white py-10 md:py-16" id="taxas-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <h2 className="text-sm sm:text-base font-bold mb-2 text-gray-900">
                        Depois, as taxas variam conforme as vendas no mês.
                        <button
                            className="text-blue-600 hover:text-blue-700 hover:underline ml-2 font-normal text-sm inline-block"
                            onClick={toggleModal}
                            aria-haspopup="dialog"
                            aria-expanded={showModal}
                        >
                            Mostrar detalhes
                        </button>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Selector de faixas */}
                    <div className="flex justify-center mb-6">
                        <div className="grid grid-cols-4 bg-gray-100 rounded-full overflow-hidden w-full max-w-md shadow-sm  border">
                            {rangeLabels.map((label, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleRangeClick(index)}
                                    className={`py-2 text-sm font-medium transition-colors duration-200 ${activeRange === index ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-700'}`}
                                >
                                   
                                    {label === 'Promo' ? (
                                        <span className="font-bold text-emerald-600">{label}</span>
                                    ) : (
                                        label
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                                
                    
                    <div className="flex justify-center items-center gap-16 sm:gap-20 mb-8 text-center">
                        {['DÉBITO', 'CRÉDITO', 'CRÉDITO 12x'].map((label) => {
                            const currentTaxObject = taxRanges[activeRange];
                            let taxValue;

                            if (label === 'DÉBITO') {
                                taxValue = currentTaxObject.debito;
                            } else if (label === 'CRÉDITO') {
                                taxValue = currentTaxObject.credito;
                            } else if (label === 'CRÉDITO 12x') {
                                taxValue = currentTaxObject.credito12x;
                            }

                            const isPromo = activeRange === 0; // 'Promo' é o índice 0

                            return (
                                <div key={label}>
                                    <div className="text-2xl md:text-3xl font-bold mb-1 flex items-end justify-center">
                                        <span className={isPromo ? "text-emerald-600" : "text-gray-900"}>
                                            <AnimatedNumber value={taxValue} />
                                        </span>
                                        <span className={`ml-2 text-xl md:text-2xl ${isPromo ? "text-emerald-600" : "text-gray-900"}`}>%</span>
                                    </div>
                                    <span className="block text-xs font-semibold text-gray-700 uppercase">{label}</span>
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Aviso de promoção */}
                    <div className="max-w-lg mx-auto text-center">
                        <p className="text-xs text-gray-600 mt-2 mb-4">
                            Promoção para novos usuários: Ao adquirir uma maquininha Point, o usuário aproveita taxas promocionais nos primeiros 30 dias ou até R$ 5.000 em vendas (o que ocorrer primeiro)
                        </p>
                    </div>
                   
                </div>
            </div>

            {showModal && (
                <TaxasModal />
            )}
        </section>
    );
};

export default SectionTaxas;