import { NextResponse } from 'next/server';

// Dados estáticos para as configurações de rastreamento
const trackingConfigurations = {
  facebookPixelId: process.env.FACEBOOK_PIXEL_ID || '',
  tiktokPixelId: process.env.TIKTOK_PIXEL_ID || '',
  googleTagId: process.env.GOOGLE_TAG_ID || ''
};

// Informações de debug para o console
console.log('Configurações carregadas na inicialização da API:');
console.log('- TIKTOK_PIXEL_ID:', process.env.TIKTOK_PIXEL_ID);
console.log('- Objeto de configurações:', JSON.stringify(trackingConfigurations));

export const revalidate = 3600; // Revalidar a cada hora

export async function GET() {
  try {
    // Verificar novamente as variáveis de ambiente no momento da requisição
    // Isso é útil para verificar se as variáveis estão sendo carregadas corretamente
    const runtimeConfigs = {
      facebookPixelId: process.env.FACEBOOK_PIXEL_ID || '',
      tiktokPixelId: process.env.TIKTOK_PIXEL_ID || '',
      googleTagId: process.env.GOOGLE_TAG_ID || ''
    };
    
    console.log('Configurações de rastreamento requisitadas');
    console.log('TikTok Pixel ID (env):', process.env.TIKTOK_PIXEL_ID);
    console.log('TikTok Pixel ID (configs):', runtimeConfigs.tiktokPixelId);
    
    // Usar um valor fixo para o TikTok se o ambiente não forneceu
    if (!runtimeConfigs.tiktokPixelId) {
      console.log('TikTok Pixel ID não encontrado nas variáveis de ambiente, usando valor padrão');
      runtimeConfigs.tiktokPixelId = 'C7A0GFLC77U9T380GM9G'; // Valor padrão para desenvolvimento
    }
    
    return NextResponse.json({ 
      success: true, 
      data: runtimeConfigs 
    }, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
      }
    });
  } catch (error) {
    console.error('Erro ao buscar configurações de rastreamento:', error);
    
    return NextResponse.json({ 
      success: false, 
      error: 'Erro ao buscar configurações de rastreamento'
    }, { 
      status: 500 
    });
  }
} 