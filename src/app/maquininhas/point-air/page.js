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
import { trackViewContent, trackInitiateCheckout, isPixelReady } from '../../../lib/fbPixel';

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
    if (productDetails) {
      const attemptTrackViewContent = () => {
        if (isPixelReady()) {
          trackViewContent(productDetails);
          console.log(`Evento ViewContent para ${productDetails.name} rastreado com sucesso.`);
        } else {
          // Se o pixel não estiver pronto, tenta novamente após um pequeno delay
          console.warn('FB Pixel não estava pronto para ViewContent, tentando novamente em 1s...');
          setTimeout(attemptTrackViewContent, 1000);
        }
      };
      
      // Tenta rastrear imediatamente, e se falhar tentará novamente com delay
      attemptTrackViewContent();
      
      // TikTok Pixel continua como antes
      if (typeof ttq === 'object' && ttq.track) {
        const contentName = productDetails.name;
        const contentId = productDetails._id || productSlug;
        const value = parseFloat(productDetails.price.replace(',', '.'));
        const currency = 'BRL';
        
        ttq.track('ViewContent', {
          content_name: contentName,
          content_id: contentId,
          content_type: 'product',
          value: value,
          currency: currency,
          quantity: 1,
          description: productDetails.info,
        });
        console.log(`PIXEL TT EVENT: ViewContent for ${contentName} (Page Load)`);
      }
    }
  }, [productDetails]);

  const handleFinalBuyClick = () => {
    if (productDetails) {
      if (isPixelReady()) {
        trackInitiateCheckout(productDetails);
        console.log(`Evento InitiateCheckout para ${productDetails.name} rastreado com sucesso.`);
      } else {
        console.warn('FB Pixel não estava pronto para InitiateCheckout no clique do botão de compra.');
        // Para cliques do usuário, podemos usar uma abordagem de tentar uma vez mais após um pequeno delay
        setTimeout(() => {
          if (isPixelReady()) {
            trackInitiateCheckout(productDetails);
            console.log(`Evento InitiateCheckout para ${productDetails.name} rastreado após retry.`);
          }
        }, 500);
      }
      
      // TikTok Pixel continua como antes
      if (typeof ttq === 'object' && ttq.track) {
        const contentName = productDetails.name;
        const contentId = productDetails._id || productSlug;
        const value = parseFloat(productDetails.price.replace(',', '.'));
        const currency = 'BRL';
        const numItems = 1;
        
        ttq.track('InitiateCheckout', {
          content_name: contentName,
          content_id: contentId,
          content_type: 'product',
          value: value,
          currency: currency,
          quantity: numItems
        });
        console.log(`PIXEL TT EVENT: InitiateCheckout for ${contentName} (Final Buy Button)`);
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