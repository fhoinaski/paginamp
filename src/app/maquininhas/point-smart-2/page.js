import React from 'react';
import HeroSectionPointSmart2 from '../../../components/points/HeroSectionPointSmart';
import CardFlag from '../../../components/CardFlag';
import SectionTaxas from '../../../components/SectionTaxas';
import SectionConta from '../../../components/SectionConta';
import SectionCredito from '../../../components/SectionCredito';
import SectionLinkVendas from '../../../components/SectionLinkVendas';
import TestimonialSlider from '../../../components/TestimonialSlider';
import MenuPopover from '../../../components/MenuPopover';



export default function Home() {
  return (
    <div className="w-screen m-0 p-0">
      <MenuPopover /> 
      <HeroSectionPointSmart2 />
      <CardFlag />
      <SectionTaxas />
      <SectionConta />
      <SectionCredito />
      <SectionLinkVendas />
      <TestimonialSlider />
      <section className="relative bg-brand transition duration-500 dark:bg-brand-dark">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-white sm:text-2xl">Crescer só depende de você</h2>
          <a href="/comprar/point-smart-2" className="relative inline-flex items-center justify-center shrink-0 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-8 h-12 w-60 bg-white px-4 text-base font-medium text-brand-dark hover:bg-slate-100 dark:text-brand-darker">Comprar Point Smart 2</a>
        </div>
      </section>
    </div>
  );
}