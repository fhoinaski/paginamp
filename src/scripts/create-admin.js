// Script para criar um usuário administrador no banco de dados
const { MongoClient } = require('mongodb');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

// Credenciais do usuário admin
const ADMIN_EMAIL = 'enoc@enocmaquinihas.com.br';
const ADMIN_PASSWORD = 'EnocHenrique12345678@';
const SALT_ROUNDS = 10;

// URL do MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://encmaquininhas:0OEuZVHbcuC2PUZk@cluster0.sgebrtm.mongodb.net';
const DB_NAME = process.env.MONGODB_DB || 'maquininhas-point';

async function createAdminUser() {
  // Opções de conexão
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  };

  let client;

  try {
    console.log('Conectando ao MongoDB...');
    client = new MongoClient(MONGODB_URI, options);
    await client.connect();
    console.log('Conexão com MongoDB estabelecida com sucesso!');

    const db = client.db(DB_NAME);
    const usersCollection = db.collection('users');

    // Verificar se o usuário já existe
    const existingUser = await usersCollection.findOne({ email: ADMIN_EMAIL });
    if (existingUser) {
      console.log(`Usuário ${ADMIN_EMAIL} já existe. Atualizando senha...`);
      
      // Encriptar a senha
      const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, SALT_ROUNDS);
      
      // Atualizar o usuário existente
      await usersCollection.updateOne(
        { email: ADMIN_EMAIL },
        { 
          $set: { 
            password: hashedPassword,
            role: 'admin',
            updatedAt: new Date()
          } 
        }
      );
      
      console.log(`Senha do usuário ${ADMIN_EMAIL} atualizada com sucesso!`);
    } else {
      // Encriptar a senha
      const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, SALT_ROUNDS);
      
      // Criar novo usuário
      await usersCollection.insertOne({
        email: ADMIN_EMAIL,
        password: hashedPassword,
        name: 'Administrador Enoc',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      console.log(`Usuário administrador ${ADMIN_EMAIL} criado com sucesso!`);
    }

  } catch (error) {
    console.error('Erro ao criar/atualizar usuário administrador:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('Conexão com MongoDB fechada.');
    }
  }
}

// Executar a função principal
createAdminUser()
  .then(() => console.log('Script concluído.'))
  .catch(err => console.error('Erro ao executar script:', err)); 