import React from 'react';
import Image from 'next/image';
import { ArrowRight, BatteryMedium, BellRing, CircleCheckBig, CreditCard, Dumbbell, Receipt, Ruler, Wifi } from 'lucide-react';

const PointSmartCard = () => {
  return (
    <div className="card relative rounded-lg rounded-tl-xl border bg-background p-4 pt-10 shadow">
      {/* Discount Badge */}
      <div className="absolute -left-px -top-px rounded-br-lg rounded-tl-lg border-b border-r bg-gradient-to-r from-[#1aa271] to-[#00b87d] px-2 py-1">
        <div className="flex items-center gap-1 text-xs font-medium text-white">
          <BellRing size={14} strokeWidth={2.5} />
          <span>70% OFF</span>
          <small>|</small>
          <span className="uppercase tracking-wide text-yellow-200">Frete Grátis</span>
        </div>
      </div>

      {/* Point Logo */}
      <div className="absolute -top-4 right-4 sm:right-2">
        <Image src="/images/point-logo.svg" alt="Point Logo" width={50} height={50} />
      </div>

      {/* Main Content */}
      <div className="relative flex gap-4 lg:block">
        {/* New Badge */}
        <div className="absolute left-0 top-0 flex items-center gap-1 rounded-br-md rounded-tl-md bg-rose-500 px-2 py-0.5 text-xs font-medium text-white lg:rounded">
          <BellRing size={14} strokeWidth={2.5} />
          <span>NOVA</span>
        </div>

        {/* Product Image */}
        <div className="flex w-2/5 shrink-0 items-center justify-center rounded-md bg-muted p-2 sm:h-[184px] lg:mx-auto lg:h-full lg:w-full lg:bg-transparent py-6 sm:py-2">
          <Image
            src="/images/devices/device-144.webp"
            alt="Point Smart 2"
            width={70}
            height={122}
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center gap-4 lg:text-center">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold leading-tight">Point Smart 2</h2>
            <h3 className="text-sm leading-tight text-muted-foreground">A maquininha mais avançada</h3>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground line-through lg:text-lg">R$ 840,80</span>
            <span className="text-lg font-semibold lg:text-2xl">R$ 249,90</span>
            <span className="text-xs lg:text-sm">ou 12x R$ 20,82 sem juros</span>
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <a
        href="https://pay.pointmaquininha.com/?pref_id=179504451-f9165193-a20a-40de-ba61-f4fab0464d5e"
        className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand hover:bg-brand-dark text-white py-2 px-4 mt-5 h-12 w-full text-base"
      >
        Comprar agora
      </a>

      <hr className="my-5" />

      {/* Features List */}
      <FeaturesList />

      <hr className="my-5" />

      {/* Specifications List */}
      <SpecificationsList />

      <hr className="my-5" />

      {/* More Info Button */}
      <a
        className="relative inline-flex items-center justify-center shrink-0 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4 w-full"
        href="/point-smart-2"
      >
        Mais informações
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

const FeaturesList = () => (
  <ul className="mr-2 flex flex-col gap-3">
    <FeatureItem icon={<CircleCheckBig />} text="Aceita débito, crédito, código QR e Pix" />
    <FeatureItem icon={<CircleCheckBig />} text="Inclui conta digital e cartão gratuito" />
    <FeatureItem icon={<CircleCheckBig />} text="3 anos de garantia" />
  </ul>
);

const SpecificationsList = () => (
  <ul className="mr-2 flex flex-col gap-3">
    <FeatureItem icon={<Wifi />} text="Plano de dados grátis e Wi-Fi" />
    <FeatureItem icon={<Receipt />} text="Imprime o comprovante" />
    <FeatureItem icon={<CreditCard />} text="Cartão com chip, tarja magnética e por aproximação" />
    <FeatureItem icon={<BatteryMedium />} text="72 horas de bateria" />
    <FeatureItem icon={<Ruler />} text="20,1cm(C) x 8cm(L) x 6,2cm(A)" />
    <FeatureItem icon={<Dumbbell />} text="440 gramas" />
  </ul>
);

const FeatureItem = ({ icon, text }) => (
  <li className="flex items-center">
    {React.cloneElement(icon, { className: "h-5 w-5 shrink-0 text-brand" })}
    <span className="ml-3 text-sm leading-tight">{text}</span>
  </li>
);

export default PointSmartCard;