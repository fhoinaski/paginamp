import React from 'react';
import { BellRing } from 'lucide-react';
import { FaBatteryFull, FaWifi, FaCreditCard, FaShieldAlt, FaPrint, FaSimCard, FaRulerCombined, FaWeight } from 'react-icons/fa';
import Image from 'next/image';

// const iconMapping = {
//     "bateria": <FaBatteryFull className="mr-2 text-sky-500" />,
//     "wifi": <FaWifi className="mr-2 text-sky-500" />,
//     "débito, crédito, código QR e Pix": <FaCreditCard className="mr-2 text-sky-500" />,
//     "conta digital e cartão gratuito": <FaShieldAlt className="mr-2 text-sky-500" />,
//     "garantia": <FaShieldAlt className="mr-2 text-sky-500" />,
//     "Imprime o comprovante": <FaPrint className="mr-2 text-sky-500" />,
//     "Cartão com chip, tarja magnética e por aproximação": <FaSimCard className="mr-2 text-sky-500" />,
//     "dimensões": <FaRulerCombined className="mr-2 text-sky-500" />,
//     "peso": <FaWeight className="mr-2 text-sky-500" />
//   };

const iconMapping = {
    "bateria": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-medium h-5 w-5 shrink-0 text-sky-500">
            <rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect>
            <line x1="22" x2="22" y1="11" y2="13"></line>
            <line x1="6" x2="6" y1="11" y2="13"></line>
            <line x1="10" x2="10" y1="11" y2="13"></line>
        </svg>
    ),
    "wifi": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi h-5 w-5 shrink-0 text-sky-500">
            <path d="M12 20h.01"></path>
            <path d="M2 8.82a15 15 0 0 1 20 0"></path>
            <path d="M5 12.859a10 10 0 0 1 14 0"></path>
            <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
        </svg>
    ),
    "conta digital e cartão gratuito": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-5 w-5 shrink-0 text-sky-500">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    ),
    "garantia": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-5 w-5 shrink-0 text-sky-500">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    ),
    "Imprime o comprovante": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-receipt h-5 w-5 shrink-0 text-sky-500">
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path>
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
            <path d="M12 17.5v-11"></path>
        </svg>
    ),
    "Cartão com chip, tarja magnética e por aproximação": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card h-5 w-5 shrink-0 text-sky-500">
            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
            <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
    ),
    "dimensões": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ruler h-5 w-5 shrink-0 text-sky-500">
            <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path>
            <path d="m14.5 12.5 2-2"></path>
            <path d="m11.5 9.5 2-2"></path>
            <path d="m8.5 6.5 2-2"></path>
            <path d="m17.5 15.5 2-2"></path>
        </svg>
    ),
    "peso": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell h-5 w-5 shrink-0 text-sky-500">
            <path d="M14.4 14.4 9.6 9.6"></path>
            <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path>
            <path d="m21.5 21.5-1.4-1.4"></path>
            <path d="M3.9 3.9 2.5 2.5"></path>
            <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path>
        </svg>
    ),
    "bluetooth":(
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell h-5 w-5 shrink-0 text-sky-500"><path d="m7 7 10 10-5 5V2l5 5L7 17"></path></svg>
    ),
    "sms":(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell h-5 w-5 shrink-0 text-sky-500"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
    )
};
// Função para calcular a porcentagem de desconto
const calcularDesconto = (precoNormal, precoVenda) => {
    const precoNormalNum = parseFloat(precoNormal.replace("R$", "").replace(",", ".").trim());
    const precoVendaNum = parseFloat(precoVenda.replace("R$", "").replace(",", ".").trim());
    const desconto = ((precoNormalNum - precoVendaNum) / precoNormalNum) * 100;
    return Math.round(desconto);
  };

const ProductCard = ({ product }) => {
    const desconto = calcularDesconto(product.normalPrice, product.price);

    return (
        <div id="modelos" className="card relative rounded-lg rounded-tl-xl border bg-background p-4 pt-10 shadow">
            {/* Ícone superior direito */}
            <div className="absolute -left-px -top-px rounded-br-lg rounded-tl-lg border-b border-r bg-gradient-to-r from-[#1aa271] to-[#00b87d] px-2 py-1">
                {/* Ícone SVG complexo - Substitua pelo seu ícone ou imagem */}
                <div className='flex items-center gap-1 text-xs font-medium text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-percent "><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg>
                    <span>{desconto}% OFF</span>
                    <small>|</small>
                    <span className="uppercase tracking-wide text-yellow-200 font-medium text-xs">Frete Grátis</span>
                </div>
            </div>

            {(product.name.toLowerCase().includes('pro') || product.name.toLowerCase().includes('smart')) && (
        <div className='absolute -top-4 right-4 sm:right-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 499.7" width="50" height="50">
            <defs>
              <linearGradient id="a" x1="285.41" x2="285.41" y1="498.27" y2="305.05" gradientTransform="rotate(-20 268.672 380.863)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#5558ff"></stop>
                <stop offset="1" stopColor="#2f86ff"></stop>
              </linearGradient>
              <linearGradient xlinkHref="#a" id="c" x1="470.36" x2="470.36" y1="565.59" y2="372.37" gradientTransform="scale(-1 1) rotate(-20 -20.738 2022.189)"></linearGradient>
              <linearGradient id="d" x1="191" x2="191" y1="382" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#aedcff"></stop>
                <stop offset="1" stopColor="#eaf6ff"></stop>
              </linearGradient>
              <linearGradient id="b" x1="190.75" x2="190.75" y1="283.53" y2="98.47" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2b8cff"></stop>
                <stop offset="1" stopColor="#00bfff"></stop>
              </linearGradient>
              <linearGradient xlinkHref="#b" id="e" x1="125.54" x2="125.54" y1="185.5" y2="101.09"></linearGradient>
              <linearGradient xlinkHref="#b" id="f" x1="256.46" x2="256.46" y1="280.92" y2="196.5"></linearGradient>
            </defs>
            <path fill="url(#a)" d="M308.75 285.6 208.2 322.2l61.17 168.06c4.49 12.33 21.8 12.67 26.76.52l16.09-39.36 37.5 19.79c11.61 6.13 24.67-5.26 20.18-17.6L308.75 285.6Z"></path>
            <path fill="url(#c)" d="m73.25 285.6 100.55 36.6-61.17 168.06c-4.49 12.33-21.8 12.67-26.76.52l-16.09-39.36-37.5 19.79c-11.61 6.13-24.67-5.26-20.18-17.6L73.25 285.6Z"></path>
            <path fill="url(#d)" d="M382 191c0 16.38-17.88 30.2-21.92 45.31-4.18 15.64 4.28 36.52-3.64 50.21-8.03 13.89-30.42 16.96-41.69 28.23s-14.34 33.66-28.23 41.69c-13.69 7.92-34.57-.54-50.21 3.64S207.38 382 191 382s-30.2-17.88-45.31-21.92-36.52 4.28-50.21-3.64c-13.89-8.03-16.96-30.42-28.23-41.69s-33.66-14.34-41.69-28.23.54-34.57-3.64-50.21S0 207.38 0 191s17.88-30.2 21.92-45.31-4.28-36.52 3.64-50.21 30.42-16.96 41.69-28.23c11.27-11.27 14.34-33.66 28.23-41.69s34.57.54 50.21-3.64S174.62 0 191 0s30.2 17.88 45.31 21.92 36.52-4.28 50.21 3.64c13.89 8.03 16.96 30.42 28.23 41.69s33.66 14.34 41.69 28.23c7.92 13.69-.54 34.57 3.64 50.21S382 174.62 382 191Z"></path>
            <path fill="url(#b)" d="M237.18 99.68c-5.48-2.79-12.18-.6-14.96 4.88l-82.77 162.79c-2.79 5.48-.6 12.18 4.88 14.96a11.12 11.12 0 0 0 14.96-4.88l82.77-162.79c2.79-5.48.6-12.18-4.88-14.96Z"></path>
            <path fill="url(#e)" d="M167.75 143.29c0-23.27-18.93-42.21-42.21-42.21-23.27 0-42.21 18.93-42.21 42.21s18.93 42.21 42.21 42.21 42.21-18.93 42.21-42.21Zm-42.21 19.95c-11 0-19.95-8.95-19.95-19.95s8.95-19.95 19.95-19.95 19.95 8.95 19.95 19.95-8.95 19.95-19.95 19.95Z"></path>
            <path fill="url(#f)" d="M256.46 196.5c-23.27 0-42.21 18.93-42.21 42.21s18.93 42.21 42.21 42.21 42.21-18.93 42.21-42.21-18.93-42.21-42.21-42.21Zm0 62.15c-11 0-19.95-8.95-19.95-19.95s8.95-19.95 19.95-19.95 19.95 8.95 19.95 19.95-8.95 19.95-19.95 19.95Z"></path>
          </svg>
        </div>
      )}

            {/* Conteúdo do Produto */}
            <div className="relative flex gap-4 lg:block">
            {product.name.toLowerCase().includes('smart') && (
        <div className="absolute left-0 top-0 flex items-center gap-1 rounded-br-md rounded-tl-md bg-rose-500 px-2 py-0.5 text-xs font-medium text-white lg:rounded">
          <BellRing size={14} />
          <span className="">NOVA</span>
        </div>
      )}
                <div className="flex w-2/5 shrink-0 items-center justify-center rounded-md bg-muted p-2 sm:h-[184px] lg:mx-auto lg:h-full lg:w-full lg:bg-transparent py-6 sm:py-2">
                    <Image
                        alt={product.name}
                        src={product.imageUrl}
                        width="70"
                        height="122"
                        decoding="async"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col justify-center gap-4 lg:text-center">
                    <div className='space-y-1'>
                        <h2 className="text-lg font-semibold leading-tight">{product.name}</h2>
                        <p className="text-sm text-gray-500">{product.info}</p>
                    </div>
                    <div className="flex flex-col"><span className="text-muted-foreground line-through lg:text-lg">R$&nbsp;{product.normalPrice}</span><span className="text-lg font-semibold lg:text-2xl">R$&nbsp;{product.price}</span></div>
                </div>
            </div>
                <a href={product.urlBuy} className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand hover:bg-brand-dark text-white py-2 px-4 mt-5 h-12 w-full text-base">Comprar agora</a>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-5"></div>
                <ul className="mr-2 flex flex-col gap-3">
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 shrink-0 text-brand"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span className="ml-3 text-sm leading-tight">Aceita débito, crédito, código QR e Pix</span>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 shrink-0 text-brand"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span className="ml-3 text-sm leading-tight">Inclui conta digital e cartão gratuito</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 shrink-0 text-brand"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path>
                                </svg>
                                <span className="ml-3 text-sm leading-tight">3 anos de garantia</span></li>
                                </ul>
                                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-5"></div>
                <ul className="mr-2 flex flex-col gap-3">
                    {product.specifications.map((spec, index) => (
                        <li key={index} className="flex items-center">
                            {iconMapping[spec.type] } {/* Ícone antes da especificação */}
                            <span className='ml-3 text-sm leading-tight'>{spec.text}</span>
                        </li>
                    ))}
                </ul>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-5"></div>
                <a className="relative inline-flex items-center justify-center shrink-0 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4 w-full" href={product.urlInfo}>Mais informações<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
        </div>
    );
};

export default ProductCard;

