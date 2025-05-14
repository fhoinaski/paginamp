'use client';
import React, { useEffect, useState } from 'react';
import CardFlag from '../../../components/CardFlag';

import SectionLinkVendas from '../../../components/SectionLinkVendas';
import TestimonialSlider from '../../../components/TestimonialSlider';
import HeroSectionPointPro from '../../../components/points/HeroSectionPointPro';
import SectionPointPro from '../../../components/points/SectionPointPro';

import MenuPopover from '../../../components/MenuPopover';
import SectionAboutPointPro from '../../../components/points/SectionAboutPointPro';
import ConhecaPointPro3 from '../../../components/ConhecaPointPro3';
import SectionConta from '../../../components/SectionConta';
import ProductJsonLd from '../../../components/ProductJsonLd';
import { staticProductData } from '../../../data/staticProductData';

export default function PointProPage() {
  const [productDetails, setProductDetails] = useState(null);
  const productSlug = "point-pro-3"; // Slug fixo para esta página

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
      const contentName = productDetails.name;
      const contentId = productDetails._id || productSlug;
      const value = parseFloat(productDetails.price.replace(',', '.'));
      const currency = 'BRL';

      // Facebook Pixel: ViewContent - verificação mais robusta
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'ViewContent', {
          content_name: contentName,
          content_ids: [contentId],
          content_type: 'product',
          value: value,
          currency: currency,
          product_catalog_id: process.env.NEXT_PUBLIC_FACEBOOK_CATALOG_ID || undefined
        });
        console.log(`PIXEL FB EVENT: ViewContent for ${contentName} (Page Load)`);
      } else {
        console.warn('Facebook Pixel não disponível para evento ViewContent');
      }

      // TikTok Pixel: ViewContent
      if (typeof ttq === 'object' && ttq.track) {
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
      const contentName = productDetails.name;
      const contentId = productDetails._id || productSlug;
      const value = parseFloat(productDetails.price.replace(',', '.'));
      const currency = 'BRL';
      const numItems = 1;
      
      // Facebook Pixel: InitiateCheckout - verificação mais robusta
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
          content_name: contentName,
          content_ids: [contentId],
          content_type: 'product',
          value: value,
          currency: currency,
          num_items: numItems
        });
        console.log(`PIXEL FB EVENT: InitiateCheckout for ${contentName} (Final Buy Button)`);
      } else {
        console.warn('Facebook Pixel não disponível para evento InitiateCheckout');
      }

      // TikTok Pixel: InitiateCheckout
      if (typeof ttq === 'object' && ttq.track) {
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
          <a 
            href="/comprar/point-pro-3" 
            onClick={handleFinalBuyClick}
            className="relative inline-flex items-center justify-center shrink-0 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-8 h-12 w-60 bg-white px-4 text-base font-medium text-brand-dark hover:bg-slate-100 dark:text-brand-darker"
          >
            Comprar Point Pro 3
          </a>
        </div>
      </section>
    </div>
  );
}