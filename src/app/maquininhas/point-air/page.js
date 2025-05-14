'use client';
import React, { useEffect, useState } from 'react';
import CardFlag from '../../../components/CardFlag';
import SectionTaxas from '../../../components/SectionTaxas';
import SectionPointAir from '../../../components/SectionPointAir';
import SectionCredito from '../../../components/SectionCredito';
import SectionLinkVendas from '../../../components/SectionLinkVendas';
import TestimonialSlider from '../../../components/TestimonialSlider';
import HeroSectionPointAir from '../../../components/points/HeroSectionPointAir';
import SectionConta from '../../../components/SectionConta';
import SectionNovaAir from '../../../components/SectionNovaAir';
import MenuPopover from '../../../components/MenuPopover';
import ProductJsonLd from '../../../components/ProductJsonLd';
import { staticProductData } from '../../../data/staticProductData';

export default function PointAirPage() {
  const [productDetails, setProductDetails] = useState(null);
  const productSlug = "point-air"; // Slug fixo para esta página

  useEffect(() => {
    const foundProduct = staticProductData.find(p => 
      p.name.toLowerCase().replace(/\s+/g, '-') === productSlug
    );
    if (foundProduct) {
      setProductDetails(foundProduct);
    } else {
      console.warn(`Produto com slug ${productSlug} não encontrado para ViewContent.`);
    }
  }, [productSlug]);

  useEffect(() => {
    if (productDetails && typeof window !== 'undefined') {
      // Tentar rastrear o evento ViewContent usando o objeto global MPTracker
      if (window.MPTracker) {
        try {
          window.MPTracker.trackViewContent(productDetails);
          console.log(`Evento ViewContent para ${productDetails.name} enviado via MPTracker`);
        } catch (error) {
          console.error('Erro ao rastrear ViewContent:', error);
        }
      } else {
        console.warn('MPTracker não está disponível. Evento ViewContent não rastreado.');
        
        // Tentar novamente após um pequeno delay
        setTimeout(() => {
          if (window.MPTracker) {
            try {
              window.MPTracker.trackViewContent(productDetails);
              console.log(`Evento ViewContent para ${productDetails.name} enviado via MPTracker após retry`);
            } catch (error) {
              console.error('Erro ao rastrear ViewContent após retry:', error);
            }
          }
        }, 1500);
      }
    }
  }, [productDetails]);

  const handleFinalBuyClick = () => {
    if (productDetails && typeof window !== 'undefined') {
      // Usar o objeto global MPTracker para rastrear eventos
      if (window.MPTracker) {
        try {
          window.MPTracker.trackInitiateCheckout(productDetails);
          console.log(`Evento InitiateCheckout para ${productDetails.name} enviado via MPTracker`);
        } catch (error) {
          console.error('Erro ao rastrear evento InitiateCheckout:', error);
        }
      } else {
        console.warn('MPTracker não está disponível. Evento InitiateCheckout não rastreado.');
      }
    }
  };

  return (
    <div className="w-screen m-0 p-0">
      <ProductJsonLd productSlug={productSlug} />
      <MenuPopover /> 
      <HeroSectionPointAir />
      <SectionTaxas />
      <CardFlag />
      <SectionNovaAir />
      <SectionPointAir />
      <SectionConta />
      <SectionCredito />
      <SectionLinkVendas />
      <TestimonialSlider />
      <section className="relative  bg-gradient-to-b from-[#FFE600_100%] to-[#FFD400_28%] transition duration-500 ">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-black sm:text-2xl">Crescer só depende de você</h2>
          <a 
            href="/comprar/point-air" 
            onClick={handleFinalBuyClick}
            className="relative inline-flex items-center justify-center shrink-0 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-8 h-12 w-60 bg-white px-4 text-base font-medium text-brand-dark hover:bg-slate-100 dark:text-brand-darker"
          >
            Comprar Point Air
          </a>
        </div>
      </section>
    </div>
  );
}