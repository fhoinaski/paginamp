'use client'
import Image from "next/image";
import { useState } from "react";

const SectionSmartFerramenta = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const accordionItems = [
        {
            id: 0,
            title: "Relatório de vendas",
            content: "Confira quanto recebeu com cada meio de pagamento e imprima o resumo diário de vendas com um só clique.",
            image: "/images/point/accordion.webp"
        },
        {
            id: 1,
            title: "Função Colaboradores",
            content: "Configure acessos e permissões da sua equipe para ter mais controle sobre o seu negócio.",
            image: "/images/point/accordion2.webp"
        },
        {
            id: 2,
            title: "Recargas de celular",
            content: "Ofereça este serviço sem pagar nenhuma taxa e ainda ganhe comissão por cada recarga!",
            image: "/images/point/accordion3.webp"
        }
    ];

    const toggleAccordion = (id) => {
        // Se clicar no mesmo, mantém ativo (não permite null)
        setActiveAccordion(activeAccordion === id ? id : id);
    };

    // Determina qual imagem mostrar com base no acordeão ativo
    const getActiveImage = () => {
        const activeItem = accordionItems.find(item => item.id === activeAccordion);
        return activeItem ? activeItem.image : accordionItems[0].image;
    };

    // Obtém o título do acordeão ativo com segurança
    const getActiveTitle = () => {
        const activeItem = accordionItems.find(item => item.id === activeAccordion);
        return activeItem ? activeItem.title : accordionItems[0].title;
    };

    return (
        <section className="mt-32 min-h-[500px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    {/* Lado da imagem */}
                    <div className="md:w-5/12 flex items-center justify-center">
                        <div className="rounded-xl overflow-hidden w-full" style={{ maxWidth: "450px" }}>
                            <div className="relative" style={{ paddingBottom: "100%" }}>
                                <Image
                                    src={getActiveImage()}
                                    alt={`Point Smart - ${getActiveTitle()}`}
                                    fill
                                    className="object-contain transition-opacity duration-300"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Lado do conteúdo */}
                    <div className="md:w-7/12 flex flex-col justify-center mt-8 md:mt-0">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10">
                            Ferramentas para facilitar seu dia a dia
                        </h2>

                        <div className="flex flex-col">
                            {accordionItems.map((item, index) => (
                                <div 
                                    key={item.id} 
                                    className={index !== accordionItems.length - 1 ? "border-b border-gray-200" : ""}
                                >
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="flex justify-between items-center w-full py-5 text-left"
                                        aria-expanded={activeAccordion === item.id}
                                    >
                                        <div className="text-lg md:text-xl font-semibold text-black">{item.title}</div>
                                        <div className="flex-shrink-0">
                                            <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 20 20"
                                                fill="rgba(0, 0, 0, 0.55)"
                                                className={`transform transition-transform duration-200 ${
                                                    activeAccordion === item.id ? "rotate-180" : ""
                                                }`}
                                            >
                                                <path
                                                    d="M5.2018 6.75609L9.99743 11.5517L14.7981 6.7511L15.6466 7.59963L9.99743 13.2488L4.35327 7.60462L5.2018 6.75609Z"
                                                    fill="rgba(0, 0, 0, 0.55)"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            activeAccordion === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <div className="pb-6 pr-10">
                                            <p className="text-base text-gray-700">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionSmartFerramenta; 