import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { invalidateCache } from '../../../../lib/productCache';

export const dynamic = 'force-dynamic';

// GET /api/products/[id]
export async function GET(request, { params }) {
  const id = params.id;
  console.log(`API: Recebida requisição GET /api/products/${id}`);
  
  try {
    const { db } = await connectToDatabase();
    
    if (!db) {
      console.error('Banco de dados não disponível');
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 });
    }
    
    let product;
    
    // Verificar se o ID é um ObjectId válido do MongoDB
    if (ObjectId.isValid(id)) {
      product = await db.collection('products').findOne({ _id: new ObjectId(id) });
    } 
    
    // Se não encontrou como ObjectId, tenta como string
    if (!product) {
      product = await db.collection('products').findOne({ _id: id });
    }
    
    if (!product) {
      return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
    }
    
    // TODO: Considerar implementar cache para produtos individuais em productCache.js
    // para reduzir hits no DB para produtos frequentemente acessados.
    // Exemplo: Implementar um map de IDs para produtos com TTL.
    
    return NextResponse.json({ product });
  } catch (error) {
    console.error(`Erro ao buscar produto ${id}:`, error);
    return NextResponse.json({ error: 'Erro ao buscar produto', message: error.message }, { status: 500 });
  }
}

// PUT /api/products/[id]
export async function PUT(request, { params }) {
  const id = params.id;
  console.log(`API: Recebida requisição PUT /api/products/${id}`);
  
  try {
    const productData = await request.json();
    console.log('Dados recebidos para atualização:', productData);
    
    const { db } = await connectToDatabase();
    
    if (!db) {
      console.error('Banco de dados não disponível');
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 });
    }
    
    // Remover o _id do objeto para não causar conflitos na atualização
    const { _id, ...updateData } = productData;
    
    let result;
    
    // Verificar se o ID é um ObjectId válido do MongoDB
    if (ObjectId.isValid(id)) {
      result = await db.collection('products').updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );
    } else {
      result = await db.collection('products').updateOne(
        { _id: id },
        { $set: updateData }
      );
    }
    
    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
    }
    
    // Invalidar o cache para que os novos dados sejam carregados
    invalidateCache();
    console.log('Cache invalidado após atualização do produto');
    
    return NextResponse.json({
      success: true,
      message: 'Produto atualizado com sucesso',
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    console.error(`Erro ao atualizar produto ${id}:`, error);
    return NextResponse.json({ error: 'Erro ao atualizar produto', message: error.message }, { status: 500 });
  }
}

// DELETE /api/products/[id]
export async function DELETE(request, { params }) {
  const id = params.id;
  console.log(`API: Recebida requisição DELETE /api/products/${id}`);
  
  try {
    const { db } = await connectToDatabase();
    
    if (!db) {
      console.error('Banco de dados não disponível');
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 });
    }
    
    let result;
    
    // Verificar se o ID é um ObjectId válido do MongoDB
    if (ObjectId.isValid(id)) {
      result = await db.collection('products').deleteOne({ _id: new ObjectId(id) });
    } else {
      result = await db.collection('products').deleteOne({ _id: id });
    }
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
    }
    
    // Invalidar o cache após a exclusão
    invalidateCache();
    console.log('Cache invalidado após exclusão do produto');
    
    return NextResponse.json({
      success: true,
      message: 'Produto excluído com sucesso',
      deletedCount: result.deletedCount
    });
  } catch (error) {
    console.error(`Erro ao excluir produto ${id}:`, error);
    return NextResponse.json({ error: 'Erro ao excluir produto', message: error.message }, { status: 500 });
  }
} 