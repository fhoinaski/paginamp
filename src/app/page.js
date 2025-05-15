import MercadoPagoHero from '../components/MercadoPagoHero';
import SectionTaxas from '../components/SectionTaxas';
import CardFlag from '../components/CardFlag';
import SectionPointPro2 from '../components/SectionPointPro2';
import SectionConta from '../components/SectionConta';
import SectionCredito from '../components/SectionCredito';
import ProductCatalog from '../components/ProductCatalog';
import MenuPopover from '../components/MenuPopover';
import { LazyTestimonialSlider, LazyFeedbackForm } from '../components/lazyComponents';

export const metadata = {
  title: 'Maquininhas Point - Revendedor Autorizado com as Melhores Condições'
};

export default function Home() {
  return (
    <>
      <MenuPopover />
      <MercadoPagoHero />
      <ProductCatalog />
      <SectionTaxas />
      <CardFlag />
      <SectionPointPro2 />
      <SectionConta />
      <SectionCredito />
      <LazyTestimonialSlider />
      <LazyFeedbackForm />
    </>
  );
}