import { staticProductData } from '../../../data/staticProductData';
import { slugToName } from '../../../utils/formatters';

export async function generateMetadata({ params }) {
  // Usar "point-air" como modelo fixo já que sabemos que estamos neste diretório
  const productSlug = "point-air";
  const productName = slugToName(productSlug);
  
  // Encontra o produto correspondente
  const product = staticProductData.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-') === productSlug
  );

  const currentYear = new Date().getFullYear();
  
  // Se o produto não for encontrado
  if (!product) {
    return {
      title: "Produto não encontrado | Maquininhas Point",
      description: "A maquininha que você procura não foi encontrada."
    };
  }
  
  // Se o produto for encontrado, retorna metadados completos
  return {
    title: `Conheça a ${product.name} | Maquininha Point - ${product.info}`,
    description: `Descubra tudo sobre a ${product.name}: ${product.info}. Veja especificações, taxas e compre online com frete grátis. Ideal para seu negócio em ${currentYear}.`,
    keywords: `maquininha ${product.name}, comprar ${product.name}, point ${product.name}, ${product.info}, taxas ${product.name}, mercado pago, revendedor autorizado`,
    openGraph: {
      title: `Comprar ${product.name} | Maquininhas Point Revendedor Autorizado`,
      description: `Explore a ${product.name}: ${product.info}. A melhor escolha para suas vendas.`,
      images: [{ 
        url: product.imageUrl,
        width: 600, 
        height: 600, 
        alt: product.name 
      }],
      siteName: 'Maquininhas Point',
      type: 'website'
    }
  };
}

export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
  