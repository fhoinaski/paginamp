import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';
import { invalidateCache } from '../../../../lib/productCache';

export const dynamic = 'force-dynamic';

// Dados estáticos para seed
const staticProducts = [
  {
    _id: "1",
    name: "Point Smart 2",
    normalPrice: "840,80",
    price: "239,99",
    urlBuy: "/comprar/point-smart-2",
    imageUrl: "/images/devices/device-smart.webp",
    urlInfo: "/maquininhas/point-smart-2",
    info: "A maquininha mais avançada",
    linkOperadoras: [
      {name: "Vivo", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/P2VI85Y7YZ"},
      {name: "Claro", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/43J1PJ1OM8"},
      {name: "Tim", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/NKV81BCPAR"}
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
    _id: "2",
    name: "Point Pro 3",
    normalPrice: "718,80",
    price: "89,99",
    imageUrl: "/images/devices/device-pro.webp",
    urlBuy: "/comprar/point-pro-3",
    urlInfo: "/maquininhas/point-pro-3",
    info: "Bateria que dura o dia todo",
    linkOperadoras: [
      {name: "Vivo", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/NE6414IYET"},
      {name: "Claro", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/60CQTYX2JV"},
      {name: "Tim", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/25KO8KVS9F"}
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
    _id: "3",
    name: "Point Air",
    normalPrice: "358,80",
    price: "59,99",
    urlBuy: "/comprar/point-air",
    urlInfo: "/maquininhas/point-air",
    imageUrl: "/images/devices/device-air.webp",
    info: "Não precisa de celular",
    linkOperadoras: [
      {name: "Vivo", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/948BUCPMM0"},
      {name: "Claro", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/7VAOZHR4W3"},
      {name: "Tim", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/93P5E7V1ZI"}
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
    _id: "4",
    name: "Point Mini NFC 2",
    normalPrice: "118,80",
    price: "59,99",
    urlBuy: "/comprar/point-mini-nfc-2",
    urlInfo: "/maquininhas/point-mini-nfc-2",
    imageUrl: "/images/devices/device-mini.webp",
    info: "Use com seu celular",
    linkPedido: "https://enoc-maquininhas-br.pay.yampi.com.br/r/40WK3PGTN0",
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

// POST /api/products/seed
export async function POST() {
  try {
    console.log('Iniciando seed da coleção products...');
    
    const { db } = await connectToDatabase();
    console.log('Conectado ao banco de dados MongoDB');
    
    // Verificar se o banco de dados está definido e não é um mock
    if (!db || typeof db.collection !== 'function') {
      console.error('Banco de dados não está disponível ou é um mock');
      return NextResponse.json({ 
        success: false, 
        message: 'Banco de dados não está disponível. Verifique a conexão com o MongoDB.' 
      }, { status: 500 });
    }
    
    // Verificar se a coleção products existe
    const collections = await db.listCollections().toArray();
    const hasProductsCollection = collections.some(c => c.name === 'products');
    
    if (!hasProductsCollection) {
      console.log('Coleção products não existe, criando...');
      await db.createCollection('products');
      console.log('Coleção products criada com sucesso');
    }
    
    // Verificar se o banco de dados está vazio
    const count = await db.collection('products').countDocuments();
    
    if (count > 0) {
      console.log(`Já existem ${count} produtos no banco de dados`);
      return NextResponse.json({ 
        success: false, 
        message: `A coleção já contém ${count} produtos. Limpe a coleção antes de executar o seed novamente.` 
      });
    }
    
    console.log(`Inserindo ${staticProducts.length} produtos...`);
    const result = await db.collection('products').insertMany(staticProducts);
    
    // Após inserir os produtos, invalidamos o cache para forçar uma recarga
    invalidateCache();
    console.log('Cache invalidado após inserção de produtos');
    
    console.log(`${result.insertedCount} produtos inseridos com sucesso!`);
    
    return NextResponse.json({ 
      success: true, 
      message: `${result.insertedCount} produtos inseridos com sucesso!`,
      insertedIds: result.insertedIds
    });
  } catch (error) {
    console.error('Erro ao realizar seed dos produtos:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Erro ao realizar seed dos produtos', 
      message: error.message 
    }, { status: 500 });
  }
}

// DELETE /api/products/seed
export async function DELETE() {
  try {
    console.log('Limpando coleção products...');
    
    const { db } = await connectToDatabase();
    console.log('Conectado ao banco de dados MongoDB');
    
    if (!db || typeof db.collection !== 'function') {
      console.error('Banco de dados não está disponível ou é um mock');
      return NextResponse.json({ 
        success: false, 
        message: 'Banco de dados não está disponível. Verifique a conexão com o MongoDB.' 
      }, { status: 500 });
    }
    
    const result = await db.collection('products').deleteMany({});
    
    // Após remover os produtos, invalidamos o cache
    invalidateCache();
    console.log('Cache invalidado após remoção de produtos');
    
    console.log(`${result.deletedCount} produtos removidos com sucesso!`);
    
    return NextResponse.json({ 
      success: true, 
      message: `${result.deletedCount} produtos removidos com sucesso!` 
    });
  } catch (error) {
    console.error('Erro ao limpar coleção products:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Erro ao limpar coleção products', 
      message: error.message 
    }, { status: 500 });
  }
} 