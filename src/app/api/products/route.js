import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import { staticProductData } from '../../../data/staticProductData';
import { 
  getCachedProducts, 
  setCachedProducts, 
  isCacheValid, 
  getCacheInfo 
} from '../../../lib/productCache';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Valores de fallback para quando as variáveis de ambiente não são carregadas
const FALLBACK_MONGODB_URI = 'mongodb+srv://encmaquininhas:0OEuZVHbcuC2PUZk@cluster0.sgebrtm.mongodb.net';
const FALLBACK_DB_NAME = 'maquininhas-point';

// Função para validar produtos - adicione esta no início do arquivo
const validateProducts = (products) => {
  return products.map(product => {
    if (!product.urlInfo && product.name) {
      console.log(`Adicionando urlInfo padrão para o produto: ${product.name}`);
      return {
        ...product,
        urlInfo: `/maquininhas/${product.name.toLowerCase().replace(/\s+/g, '-')}`
      };
    }
    return product;
  });
};

export async function GET(request) {
  console.log('API: Recebida requisição GET /api/products');
  
  // Verificar se há um parâmetro para forçar a recarga do cache
  const { searchParams } = new URL(request.url);
  const forceRefresh = searchParams.get('forceRefresh') === 'true';
  
  // Debug de variáveis de ambiente na rota
  console.log('[API Route] ENV Debug:');
  console.log('- MONGODB_URI definido?', !!process.env.MONGODB_URI);
  console.log('- MONGODB_DB definido?', !!process.env.MONGODB_DB);
  
  // Verificar se tem cache válido e não está forçando a recarga
  if (!forceRefresh && isCacheValid()) {
    const cachedProducts = getCachedProducts();
    console.log('Retornando produtos do cache');
    return NextResponse.json({ products: cachedProducts });
  }
  
  // Log do estado do cache
  console.log('Info do cache:', getCacheInfo());
  
  try {
    console.log('Iniciando busca de produtos no MongoDB...');
    
    const { db } = await connectToDatabase();
    console.log('Conectado ao banco de dados MongoDB');
    
    // Verificar se o banco de dados está definido
    if (!db) {
      console.error('Conexão estabelecida, mas objeto db não disponível');
      console.log('Retornando dados estáticos como fallback');
      const validatedStaticProducts = validateProducts(staticProductData);
      setCachedProducts(validatedStaticProducts);
      return NextResponse.json({ products: validatedStaticProducts });
    }
    
    // Verificar configurações do MongoDB
    const dbName = process.env.MONGODB_DB || FALLBACK_DB_NAME;
    const mongoUri = process.env.MONGODB_URI || FALLBACK_MONGODB_URI;
    console.log(`Nome do banco de dados: ${dbName}`);
    console.log(`URL de conexão: ${mongoUri ? mongoUri.substring(0, 20) + '...' : 'não definida'}`);
    
    // Obter nome das coleções para debug
    console.log('Listando coleções disponíveis...');
    const collections = await db.listCollections().toArray();
    console.log(`Coleções disponíveis: ${collections.map(c => c.name).join(', ') || 'nenhuma'}`);
    
    if (!collections.some(c => c.name === 'products')) {
      console.log('Coleção products não existe, retornando dados estáticos');
      
      // Tentar criar a coleção se ela não existir
      try {
        console.log('Tentando criar a coleção products...');
        await db.createCollection('products');
        console.log('Coleção products criada com sucesso. Use a rota /api/products/seed para adicionar dados.');
        
        // Tentar inserir os dados estáticos imediatamente
        try {
          console.log('Tentando inserir dados de exemplo automaticamente...');
          const validatedStaticProducts = validateProducts(staticProductData);
          const result = await db.collection('products').insertMany(validatedStaticProducts);
          console.log(`${result.insertedCount} produtos inseridos automaticamente.`);
          
          // Adicionar os produtos ao cache
          setCachedProducts(validatedStaticProducts);
          return NextResponse.json({ products: validatedStaticProducts });
        } catch (insertError) {
          console.error('Erro ao inserir dados automáticos:', insertError);
        }
      } catch (createError) {
        console.error('Erro ao criar coleção products:', createError);
      }
      
      const validatedStaticProducts = validateProducts(staticProductData);
      setCachedProducts(validatedStaticProducts);
      return NextResponse.json({ products: validatedStaticProducts });
    }
    
    // Tentar buscar produtos com mais logs
    console.log('Buscando documentos na coleção products...');
    const products = await db.collection('products').find({}).toArray();
    
    // TODO: Considerar projeção se esta rota for usada para listagens mais leves no futuro:
    // Ex: Para listagens que não precisam de todos os detalhes de cada produto:
    // const products = await db.collection('products').find({}, { 
    //   projection: { name: 1, price: 1, normalPrice: 1, imageUrl: 1, info: 1, _id: 1 } 
    // }).toArray();
    
    console.log(`Produtos encontrados: ${products?.length || 0}`);
    
    if (!products || products.length === 0) {
      console.log('Nenhum produto encontrado na coleção, retornando dados estáticos');
      const validatedStaticProducts = validateProducts(staticProductData);
      setCachedProducts(validatedStaticProducts);
      return NextResponse.json({ products: validatedStaticProducts });
    }
    
    console.log('Primeiro produto encontrado:', products[0].name);
    
    // Garantir que todos os produtos tenham a propriedade urlInfo
    const validatedProducts = validateProducts(products);
    
    // Atualizar o cache com os produtos validados
    setCachedProducts(validatedProducts);
    
    // Sempre retornar no formato { products: [...] }
    return NextResponse.json({ products: validatedProducts });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    console.log('Retornando dados estáticos como fallback devido a erro');
    
    // Mesmo em caso de erro, retornar no formato esperado
    const validatedStaticProducts = validateProducts(staticProductData);
    setCachedProducts(validatedStaticProducts);
    return NextResponse.json({ 
      products: validatedStaticProducts,
      error: error.message
    });
  }
} 