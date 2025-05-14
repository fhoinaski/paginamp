import './style.css';
import { staticProductData } from '../../../data/staticProductData';
import { slugToName } from '../../../utils/formatters';

export async function generateMetadata({ params }) {
  const productSlug = params.model;
  const productName = slugToName(productSlug);
  
  // Encontra o produto correspondente
  const product = staticProductData.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-') === productSlug
  );
  
  // Se o produto não for encontrado
  if (!product) {
    return {
      title: "Configurar Pedido - Produto não encontrado | Maquininhas Point",
      description: "Não foi possível encontrar a maquininha para configurar o pedido."
    };
  }
  
  // Se o produto for encontrado, retorna metadados completos
  return {
    title: `Comprar ${product.name} - Configure seu Pedido | Maquininhas Point`,
    description: `Configure seu pedido para a maquininha ${product.name}. Escolha operadora, veja preço (${product.price}) e finalize sua compra com segurança. Frete grátis!`,
    keywords: `comprar ${product.name}, pedido ${product.name}, configurar ${product.name}, preço ${product.name}, maquininha point, ${product.info}`,
    openGraph: {
      title: `Comprar ${product.name} Agora | Maquininhas Point`,
      description: `Configure e compre sua ${product.name} com as melhores condições. Preço promocional R$ ${product.price}.`,
      images: [{ 
        url: product.imageUrl,
        width: 600, 
        height: 600, 
        alt: `Comprar ${product.name}` 
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
  