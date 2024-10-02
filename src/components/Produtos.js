
import ProductCard from './ProductCard';
const fetchProductData = () => {
    return [
      {
        name: "Point Smart 2",
        normalPrice: "840,80",
        price: "249,90",
        urlBuy: "/comprar/point-smart-2",
        imageUrl: "/images/devices/device-smart.webp",
        urlInfo: "/maquininhas/point-smart-2",
        info: "A maquininha mais avançada",
        specifications: [
         
          { text: "Plano de dados grátis e Wi-Fi", type: "wifi" },
          { text: "Imprime o comprovante", type: "Imprime o comprovante" },
          { text: "Cartão com chip, tarja magnética e por aproximação", type: "Cartão com chip, tarja magnética e por aproximação" },
          { text: "72 horas de bateria", type: "bateria" },
          { text: "20,1cm(C) x 8cm(L) x 6,2cm(A)", type: "dimensões" },
          { text: "440 gramas", type: "peso" }
        ]
      },
    
      {
        name: "Point Pro",
        normalPrice: "718,80",
        price: "129,90",
        imageUrl: "/images/devices/device-pro.webp",
        urlBuy: "/comprar/point-pro",
        urlInfo: "/maquininhas/point-pro",
        info: "Bateria que dura o dia todo",
        specifications: [
          { text: "Plano de dados grátis e Wi-Fi", type: "wifi" },
          { text: "Imprime o comprovante", type: "Imprime o comprovante" },
          { text: "Cartão com chip, tarja magnética e por aproximação", type: "Cartão com chip, tarja magnética e por aproximação" },
          { text: "48 horas de bateria", type: "bateria" },
          { text: "15,5cm(C) x 7,2cm(L) x 5,5cm(A)", type: "dimensões" },
          { text: "300 gramas", type: "peso" }
        ]
      },
      {
        name: "Point Air",
        normalPrice: "358,80",
        price: "79,90",
        urlBuy: "/comprar/point-air",
        urlInfo: "/maquininhas/point-air",
        imageUrl: "/images/devices/device-air.webp",
        info: "Não precisa de celular",
        specifications: [
          
          { text: "Plano de dados grátis e Wi-Fi", type: "wifi" },
          { text: "Envia comprovante por SMS", type: "sms" },
          { text: "Cartão com chip, e por aproximação", type: "Cartão com chip, tarja magnética e por aproximação" },
          { text: "24 horas de bateria", type: "bateria" },
          { text: "11,6cm(C) x 6,56cm(L) x 1,7cm(A)", type: "dimensões" },
          { text: "144 gramas", type: "peso" }
        ]
      },  {
        name: "Point Mini",
        normalPrice: "118,80",
        price: "25",
        urlBuy: "/comprar/point-mini",
        urlInfo: "/maquininhas/point-mini",
        imageUrl: "/images/devices/device-mini.webp",
        info: "Use com seu celular",	
        specifications: [
          
          { text: "Conexão via Bluetooth com celualar", type: "bluetooth" },
          { text: "Envia comprovante por SMS", type: "sms" },
          { text: "Cartão com chip e tarja magnética", type: "Cartão com chip, tarja magnética e por aproximação" },
          { text: "10 horas de bateria", type: "bateria" },
          { text: "10,5cm(C) x 5,8cm(L) x 1,2cm(A)", type: "dimensões" },
          { text: "88 gramas", type: "peso" }
        ]
      },
    ];
  };


const Produtos = () => {
    const productData = fetchProductData();

    return (
        <section className='-mt-24 bg-primary-foreground'>
            <div className='grid grid-cols-1 justify-center gap-8 px-4 py-8 sm:grid-cols-[repeat(auto-fit,_minmax(256px,_256px))]'>
            {productData.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
                  </div>
        </section>
    );
  };

export default Produtos;


