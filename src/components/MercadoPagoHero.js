import React from 'react';
import Image from 'next/image';
import { CreditCard, Banknote, CalendarX } from 'lucide-react';

const MercadoPagoHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#068ee4] to-[#020b7c] pb-24 pt-8 md:pt-12 m-0">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2  ">
        <div className="flex flex-col  gap-4 text-center md:items-start md:justify-center md:text-left max-w-[480px] ">
        <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand border-transparent hover:bg-brand/80 uppercase text-white max-w-[200px] justify-center mx-auto md:mx-0">
            Mercado Pago Point
          </div>
          <h1 className="text-2xl font-black uppercase leading-tight text-white sm:text-2xl md:text-4xl">
            Escolha a maquininha perfeita para o seu negócio
          </h1>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/hero.png"
            alt="hero-image"
            width={450}
            height={450}
            priority
            className="object-contain"
          />
        </div>
      </div>
      <ul className="container mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8 text-sm leading-tight text-white">
        <FeatureItem icon={<CreditCard />} text="Conta digital e cartão gratuito" />
        <FeatureItem icon={<Banknote />} text="Dinheiro na hora" />
        <FeatureItem icon={<CreditIcon />} text="Crédito na hora sob medida" />
        <FeatureItem icon={<CalendarX />} text="Sem mensalidades" />
      </ul>
    </section>
  );
};

const FeatureItem = ({ icon, text }) => (
  <li className="flex items-center gap-3">
    {icon}
    <span>{text}</span>
  </li>
);

const CreditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" width="24" height="24" strokeWidth="2" className="shrink-0">
    <rect width="3.8" height="7.6" x="2" y="12.52" rx=".48" ry=".48" />
    <path d="M5.8 18.58h.96c.31 0 .61.08.89.22l3.61 1.9c.77.41 1.69.44 2.49.08l7.38-3.28a1.5 1.5 0 0 0 .78-1.92h0a1.5 1.5 0 0 0-1.98-.82l-4.74 2.06m-9.37-2.88 2.44-.9c.94-.35 1.98-.31 2.89.1l3.36 1.53c.73.33 1.07 1.17.77 1.91h0a1.49 1.49 0 0 1-1.99.81l-3.56-1.58" />
    <circle cx="15.3" cy="6.77" r="3.8" />
  </svg>
);

export default MercadoPagoHero;