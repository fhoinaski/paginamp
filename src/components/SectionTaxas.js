'use client';

import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react'; // Assuming lucide-react is installed
import { useTaxasModal } from '../contexts/TaxasModalContext';
import { TEXTS, URLS } from '../constants';
import { 
    RANGE_LABELS, 
    TAX_RANGES, 
    TAX_TYPE_LABELS, 
    DETAILED_RATES, 
    MOBILE_RANGE_MAPPING, 
    MOBILE_RANGE_LABELS 
} from '../constants/taxasConstants';

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

    const getMobileRate = (rateObject) => {
        if (!rateObject) return '-';
        const key = MOBILE_RANGE_MAPPING[activeMobileRange];
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
                                        {MOBILE_RANGE_LABELS.map((label, index) => (
                                            <option key={index} value={index}>
                                                {index === 0 ? 'Até ' : (index === MOBILE_RANGE_LABELS.length - 1 ? 'Acima ' : '')}
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
                                                    <div className="p-2 text-center text-emerald-600 font-semibold">{DETAILED_RATES.credito.vista.promo}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{DETAILED_RATES.credito.vista.ate2mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{DETAILED_RATES.credito.vista.de2a5mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{DETAILED_RATES.credito.vista.de5a10mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{DETAILED_RATES.credito.vista.de10a15mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{DETAILED_RATES.credito.vista.acima15mil}</div>
                                                    <div className="p-2 text-center md:hidden">{getMobileRate(DETAILED_RATES.credito.vista)}</div>
                                                </div>
                                                {DETAILED_RATES.credito.parcelas.map((parcela, index) => (
                                                    <div key={index} className={`grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] border-b ${index === DETAILED_RATES.credito.parcelas.length - 1 ? 'border-b-0' : 'border-gray-200'} hover:bg-gray-50`}>
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
                                                <div className="p-2 text-center text-emerald-600 font-semibold">{section === 'PIX' ? DETAILED_RATES.pix.promo : DETAILED_RATES.debito.promo}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? DETAILED_RATES.pix.ate2mil : DETAILED_RATES.debito.ate2mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? DETAILED_RATES.pix.de2a5mil : DETAILED_RATES.debito.de2a5mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? DETAILED_RATES.pix.de5a10mil : DETAILED_RATES.debito.de5a10mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? DETAILED_RATES.pix.de10a15mil : DETAILED_RATES.debito.de10a15mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? DETAILED_RATES.pix.acima15mil : DETAILED_RATES.debito.acima15mil}</div>
                                                <div className="p-2 text-center md:hidden">{getMobileRate(section === 'PIX' ? DETAILED_RATES.pix : DETAILED_RATES.debito)}</div>
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
                            {TEXTS.PROMOTION_NOTICE}
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
                            {RANGE_LABELS.map((label, index) => (
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
                        {TAX_TYPE_LABELS.map((label) => {
                            const currentTaxObject = TAX_RANGES[activeRange];
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
                            {TEXTS.PROMOTION_NOTICE}
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