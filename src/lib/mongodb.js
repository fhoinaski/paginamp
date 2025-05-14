import { MongoClient } from 'mongodb';

// Debug de variáveis de ambiente
console.log('==== DEBUG ENV VARS ====');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('MONGODB_URI definido?', !!process.env.MONGODB_URI);
console.log('MONGODB_DB definido?', !!process.env.MONGODB_DB);
// Se precisar ver o valor real (cuidado com dados sensíveis):
// console.log('MONGODB_URI:', process.env.MONGODB_URI);
// console.log('MONGODB_DB:', process.env.MONGODB_DB);
console.log('========================');

/*
 * =======================================================================================
 * RECOMENDAÇÕES DE INDEXAÇÃO PARA OTIMIZAÇÃO DE PERFORMANCE
 * =======================================================================================
 * 
 * Para garantir a performance das consultas ao MongoDB, especialmente à medida que 
 * a base de dados cresce, é crucial criar índices nos campos frequentemente utilizados.
 * 
 * Coleção 'products':
 * - _id: Indexado automaticamente pelo MongoDB.
 * - name: Crie um índice neste campo se houver buscas/filtros frequentes por nome.
 *   Comando: db.products.createIndex({ name: 1 })
 * 
 * Coleção 'users':
 * - _id: Indexado automaticamente.
 * - email: ESSENCIAL criar um índice único neste campo para otimizar logins.
 *   Comando: db.users.createIndex({ email: 1 }, { unique: true })
 * 
 * Coleção 'configurations':
 * - _id: Indexado automaticamente (suficiente para busca por CONFIG_ID).
 * 
 * Coleção 'page_views' (se implementada para analytics):
 * - pageSlug: Recomendado índice para contagem e agregações rápidas.
 *   Comando: db.page_views.createIndex({ pageSlug: 1 })
 * - createdAt: Índice para queries por período de tempo.
 *   Comando: db.page_views.createIndex({ createdAt: 1 })
 * 
 * IMPORTANTE: Índices melhoram a performance de leitura mas podem 
 * impactar a performance de escrita. Use com moderação em coleções 
 * com alto volume de operações de escrita.
 * =======================================================================================
 */

// Variáveis de fallback para quando as vars de ambiente falham
const FALLBACK_MONGODB_URI = 'mongodb+srv://encmaquininhas:0OEuZVHbcuC2PUZk@cluster0.sgebrtm.mongodb.net';

// Variável para controlar se já mostramos o aviso sobre variáveis de ambiente
let missingEnvWarningShown = false;

// Verificar variáveis de ambiente obrigatórias
const mongoUri = process.env.MONGODB_URI || FALLBACK_MONGODB_URI;
if (!process.env.MONGODB_URI) {
  if (!missingEnvWarningShown) {
    console.warn('Aviso: variável de ambiente MONGODB_URI não definida. Usando URI de fallback.');
    missingEnvWarningShown = true;
  }
} else {
  console.log(`MongoDB URI encontrada: ${mongoUri.substring(0, 20)}...`);
}

// Definir nome do banco de dados (usar um nome padrão se não estiver definido)
const dbName = process.env.MONGODB_DB || 'maquininhas-point';
if (mongoUri) {
  console.log(`Usando banco de dados: ${dbName}`);
}

// Configuração de conexão do MongoDB
const options = {
  connectTimeoutMS: 30000, // 30 segundos de timeout
  socketTimeoutMS: 45000,  // 45 segundos
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // timeout para seleção de servidor
};

console.log('Opções de conexão configuradas:', JSON.stringify(options));

let client;
let clientPromise;

// Objeto de banco de dados mock para quando não temos MongoDB
const mockDb = {
  collection: (name) => ({
    find: () => ({ toArray: async () => [] }),
    findOne: async () => null,
    insertOne: async () => ({ insertedId: 'mock-id' }),
    insertMany: async (docs) => ({ insertedCount: docs.length, insertedIds: docs.map((_, i) => `mock-id-${i}`) }),
    updateOne: async () => ({ modifiedCount: 1 }),
    deleteOne: async () => ({ deletedCount: 1 }),
    deleteMany: async () => ({ deletedCount: 0 }),
    countDocuments: async () => 0,
  }),
  listCollections: () => ({ toArray: async () => [] }),
  createCollection: async (name) => ({ name }),
};

// Sempre inicializar cliente, mesmo com URI de fallback
console.log('Iniciando conexão com MongoDB usando URI:', mongoUri.substring(0, 20) + '...');

// Usar singleton em desenvolvimento para manter a conexão ao hot-reloading
if (process.env.NODE_ENV === 'development') {
  console.log('Modo de desenvolvimento detectado, usando singleton para conexão MongoDB');
  
  // Em desenvolvimento, use uma variável global para que o valor
  // seja preservado entre recarregamentos de módulo causados pelo HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    console.log('Criando nova conexão MongoDB (primeira vez)');
    client = new MongoClient(mongoUri, options);
    global._mongoClientPromise = client.connect()
      .then(client => {
        console.log('Conexão MongoDB estabelecida com sucesso (dev)');
        return client;
      })
      .catch(err => {
        console.error('Erro ao conectar ao MongoDB em desenvolvimento:', err);
        return { client: null, db: null };
      });
  } else {
    console.log('Reutilizando conexão MongoDB existente (global)');
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Em produção, é melhor não usar uma variável global.
  console.log('Modo de produção detectado, criando nova conexão MongoDB');
  client = new MongoClient(mongoUri, options);
  clientPromise = client.connect()
    .then(client => {
      console.log('Conexão MongoDB estabelecida com sucesso (prod)');
      return client;
    })
    .catch(err => {
      console.error('Erro ao conectar ao MongoDB em produção:', err);
      return { client: null, db: null };
    });
}

// Exporta a função para uso no servidor
export async function connectToDatabase() {
  try {
    if (typeof window !== 'undefined') {
      console.warn('Tentativa de conexão ao MongoDB no lado do cliente');
      throw new Error('Este módulo só pode ser usado no lado do servidor');
    }

    // Tentar conectar ao MongoDB
    console.log('Aguardando promessa de conexão MongoDB...');
    const client = await clientPromise;
    
    // Se falhou a conexão, usar mock
    if (!client || !client.db) {
      console.warn('Falha na conexão com MongoDB, usando banco de dados mock');
      return { client: null, db: mockDb };
    }
    
    console.log('Conexão MongoDB bem-sucedida, obtendo referência para banco de dados:', dbName);
    const db = client.db(dbName);
    
    // Verificar se podemos listar as coleções (teste de conexão)
    try {
      const collections = await db.listCollections().toArray();
      console.log(`Conexão verificada. Coleções disponíveis: ${collections.map(c => c.name).join(', ') || 'nenhuma'}`);
    } catch (verifyError) {
      console.error('Erro ao verificar conexão (listar coleções):', verifyError);
    }
    
    return { client, db };
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    console.warn('Usando banco de dados mock devido a erro de conexão');
    return { client: null, db: mockDb };
  }
}

// Função auxiliar para obter uma coleção específica
export async function getCollection(collectionName) {
  try {
    console.log(`Tentando obter coleção: ${collectionName}`);
    const { db } = await connectToDatabase();
    return db.collection(collectionName);
  } catch (error) {
    console.error(`Erro ao obter coleção ${collectionName}:`, error);
    return mockDb.collection(collectionName);
  }
} 