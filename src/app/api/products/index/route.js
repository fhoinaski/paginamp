import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';
import { invalidateCache } from '../../../../lib/productCache';

export const dynamic = 'force-dynamic';

// POST /api/products/index
export async function POST(request) {
  console.log('API: Recebida requisição POST /api/products/index');
  
  try {
    const productData = await request.json();
    console.log('Dados recebidos para criação:', productData);
    
    // Validar dados mínimos necessários
    if (!productData.name || !productData.price) {
      return NextResponse.json({ 
        error: 'Dados incompletos. Nome e preço são obrigatórios.' 
      }, { status: 400 });
    }
    
    const { db } = await connectToDatabase();
    
    if (!db) {
      console.error('Banco de dados não disponível');
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 });
    }
    
    // Garantir que campos obrigatórios estejam presentes
    const productToSave = {
      ...productData,
      linkOperadoras: productData.linkOperadoras || [],
      specifications: productData.specifications || []
    };
    
    // Inserir o produto no banco de dados
    const result = await db.collection('products').insertOne(productToSave);
    
    if (!result.insertedId) {
      return NextResponse.json({ error: 'Falha ao inserir produto' }, { status: 500 });
    }
    
    // Invalidar o cache para que os novos dados sejam carregados
    invalidateCache();
    console.log('Cache invalidado após criação do produto');
    
    return NextResponse.json({
      success: true,
      message: 'Produto criado com sucesso',
      productId: result.insertedId
    });
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return NextResponse.json({ 
      error: 'Erro ao criar produto', 
      message: error.message 
    }, { status: 500 });
  }
} 