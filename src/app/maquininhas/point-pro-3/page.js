import React from 'react';
import CardFlag from '../../../components/CardFlag';

import SectionLinkVendas from '../../../components/SectionLinkVendas';
import TestimonialSlider from '../../../components/TestimonialSlider';
import HeroSectionPointPro from '../../../components/points/HeroSectionPointPro';
import SectionPointPro from '../../../components/points/SectionPointPro';

import MenuPopover from '../../../components/MenuPopover';
import SectionAboutPointPro from '../../../components/points/SectionAboutPointPro';
import ConhecaPointPro3 from '../../../components/ConhecaPointPro3';
import SectionConta from '../../../components/SectionConta';

export default function Home() {
  return (
    <div className="w-screen m-0 p-0">
     <MenuPopover /> 
      <HeroSectionPointPro />
      <SectionPointPro />
      {/* <SectionTaxas /> */}
      <CardFlag />
      <SectionAboutPointPro />
      
      <ConhecaPointPro3 />
      <SectionConta />
      <SectionLinkVendas />
      <TestimonialSlider />
      <section className="relative  transition duration-500  bg-gradient-to-b from-[#FFE600_100%] to-[#FFD400_28%]">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-black sm:text-2xl">Crescer só depende de você</h2>
          <a href="/comprar/point-pro-3" className="relative inline-flex items-center justify-center shrink-0 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-8 h-12 w-60 bg-white px-4 text-base font-medium text-brand-dark hover:bg-slate-100 dark:text-brand-darker">Comprar Point Pro 3</a>
        </div>
      </section>
    </div>
  );
}