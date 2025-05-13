import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    // Tentar conectar ao MongoDB
    console.log('Verificando conexão com MongoDB...');
    const { client, db } = await connectToDatabase();
    
    // Verificar se a conexão está ativa
    const isConnected = !!client && !!db && !!client.topology && client.topology.isConnected();
    
    if (!isConnected) {
      return res.status(500).json({
        status: 'error',
        message: 'Falha na conexão com o MongoDB',
        connected: false
      });
    }
    
    // Listar coleções
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);
    
    // Verificar se a coleção de produtos existe e quantos documentos tem
    let productsCount = 0;
    if (collectionNames.includes('products')) {
      productsCount = await db.collection('products').countDocuments();
    }
    
    // Buscar informações do servidor MongoDB
    const serverInfo = await db.command({ serverStatus: 1 });
    
    return res.status(200).json({
      status: 'success',
      connected: true,
      database: {
        name: db.databaseName,
        collections: collectionNames,
        productsCount
      },
      server: {
        version: serverInfo.version,
        uptime: serverInfo.uptime,
        connections: serverInfo.connections
      }
    });
  } catch (error) {
    console.error('Erro ao verificar status do MongoDB:', error);
    return res.status(500).json({
      status: 'error',
      message: `Erro ao conectar ao MongoDB: ${error.message}`,
      connected: false,
      error: error.stack
    });
  }
}

export const config = {
  runtime: 'nodejs'
}; 