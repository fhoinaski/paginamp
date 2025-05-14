import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb'; // Ajuste o caminho se necessário

export const dynamic = 'force-dynamic'; // Garante que a API não seja cacheada

const CONFIG_ID = "site_tracking_settings"; // ID fixo para o documento de configuração

// GET /api/configurations/tracking
export async function GET(request) {
  try {
    const { db } = await connectToDatabase();
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 });
    }

    const configurationsCollection = db.collection('configurations');
    let settings = await configurationsCollection.findOne({ _id: CONFIG_ID });

    if (!settings) {
      // Se não houver configurações, retorna valores padrão/vazios
      settings = {
        _id: CONFIG_ID,
        facebookPixelId: '',
        tiktokPixelId: '',
        googleTagId: '',
        lastUpdatedAt: new Date()
      };
      // Opcionalmente, poderia criar o documento aqui se não existir
      // await configurationsCollection.insertOne(settings); 
    }
    
    // Remover _id da resposta se não for necessário no frontend
    const { _id, ...trackingSettings } = settings;

    return NextResponse.json({ settings: trackingSettings });
  } catch (error) {
    console.error('Erro ao buscar configurações de rastreamento:', error);
    return NextResponse.json({ error: 'Erro interno do servidor ao buscar configurações' }, { status: 500 });
  }
}

// POST /api/configurations/tracking (para salvar/atualizar)
export async function POST(request) {
  try {
    const body = await request.json();
    const { facebookPixelId, tiktokPixelId, googleTagId } = body;

    // Validação básica dos IDs (opcional, mas recomendado)
    if (typeof facebookPixelId === 'undefined' || typeof tiktokPixelId === 'undefined' || typeof googleTagId === 'undefined') {
      return NextResponse.json({ error: 'Dados incompletos para salvar configurações de rastreamento' }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    if (!db) {
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 });
    }

    const configurationsCollection = db.collection('configurations');
    const updateData = {
      facebookPixelId: facebookPixelId || '', // Garante que seja string vazia se nulo/undefined
      tiktokPixelId: tiktokPixelId || '',
      googleTagId: googleTagId || '',
      lastUpdatedAt: new Date()
    };

    const result = await configurationsCollection.updateOne(
      { _id: CONFIG_ID },
      { $set: updateData },
      { upsert: true } // Cria o documento se não existir
    );

    if (result.modifiedCount > 0 || result.upsertedCount > 0) {
      return NextResponse.json({ success: true, message: 'Configurações de rastreamento salvas com sucesso' });
    } else {
      return NextResponse.json({ success: false, message: 'Nenhuma alteração foi feita ou falha ao salvar.' });
    }

  } catch (error) {
    console.error('Erro ao salvar configurações de rastreamento:', error);
    return NextResponse.json({ error: 'Erro interno do servidor ao salvar configurações' }, { status: 500 });
  }
} 