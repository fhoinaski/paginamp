'use client'

const productData = [
  {
    name: "Point Smart 2",
    normalPrice: "840,80",
    price: "239,99",
    urlBuy: "/comprar/point-smart-2",
    imageUrl: "/images/devices/device-smart.webp",
    urlInfo: "/maquininhas/point-smart-2",
    info: "A maquininha mais avançada",
    linkOperadoras:[
      {name: "Vivo", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/37728883:1"},
      {name: "Claro", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/37728885:1"},
      {name: "Tim", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/37728884:1"}
    ],
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
    name: "Point Pro 2",
    normalPrice: "718,80",
    price: "89,99",
    imageUrl: "/images/devices/device-pro.webp",
    urlBuy: "/comprar/point-pro-2",
    urlInfo: "/maquininhas/point-pro-2",
    info: "Bateria que dura o dia todo",
    linkOperadoras:[
      {name: "Vivo", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21840125:1"},
      {name: "Claro", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21840127:1"},
      {name: "Tim", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21840126:1"}
    ],
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
    price: "59,99",
    urlBuy: "/comprar/point-air",
    urlInfo: "/maquininhas/point-air",
    imageUrl: "/images/devices/device-air.webp",
    info: "Não precisa de celular",
    linkOperadoras:[
      {name: "Vivo", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21838973:1"},
      {name: "Claro", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21838974:1"},
      {name: "Tim", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/158408657:1"}
    ],
    specifications: [
      { text: "Plano de dados grátis e Wi-Fi", type: "wifi" },
      { text: "Envia comprovante por SMS", type: "sms" },
      { text: "Cartão com chip, e por aproximação", type: "Cartão com chip, tarja magnética e por aproximação" },
      { text: "24 horas de bateria", type: "bateria" },
      { text: "11,6cm(C) x 6,56cm(L) x 1,7cm(A)", type: "dimensões" },
      { text: "144 gramas", type: "peso" }
    ]
  },
  {
    name: "Point Mini NFC 2",
    normalPrice: "118,80",
    price: "59,99",
    urlBuy: "/comprar/point-mini-nfc-2",
    urlInfo: "/maquininhas/point-mini-nfc-2",
    imageUrl: "/images/devices/device-mini.webp",
    info: "Use com seu celular",
    linkPedido: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21840677:1",
    specifications: [
      { text: "Conexão via Bluetooth com celualar", type: "bluetooth" },
      { text: "Envia comprovante por SMS", type: "sms" },
      { text: "Cartão com chip e tarja magnética", type: "Cartão com chip, tarja magnética e por aproximação" },
      { text: "10 horas de bateria", type: "bateria" },
      { text: "10,5cm(C) x 5,8cm(L) x 1,2cm(A)", type: "dimensões" },
      { text: "88 gramas", type: "peso" }
    ]
  }
];

export const fetchProductData = () => productData;