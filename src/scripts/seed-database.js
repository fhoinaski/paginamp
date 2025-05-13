// Script para popular o banco de dados com dados iniciais
import { connectToDatabase } from '../lib/mongodb';
import { fetchProductData } from '../data/productData';

async function seedDatabase() {
  try {
    console.log('Iniciando a importação de dados para o MongoDB...');
    
    // Conectar ao MongoDB
    const { db } = await connectToDatabase();
    
    // Obter coleção de produtos
    const productsCollection = db.collection('products');
    
    // Verificar se já existem produtos no banco
    const existingProductsCount = await productsCollection.countDocuments();
    
    if (existingProductsCount > 0) {
      console.log(`Já existem ${existingProductsCount} produtos no banco de dados.`);
      const shouldContinue = await confirmPrompt('Deseja limpar e reimportar os dados? (s/n): ');
      
      if (shouldContinue) {
        // Limpar coleção existente
        await productsCollection.deleteMany({});
        console.log('Coleção de produtos existente foi limpa.');
      } else {
        console.log('Operação cancelada.');
        process.exit(0);
      }
    }
    
    // Obter dados de produtos do arquivo estático
    const productData = fetchProductData();
    
    // Inserir produtos no MongoDB
    const result = await productsCollection.insertMany(productData);
    
    console.log(`Sucesso! ${result.insertedCount} produtos foram importados para o MongoDB.`);
    console.log('IDs dos produtos inseridos:');
    
    // Listar produtos inseridos
    const insertedProducts = await productsCollection.find({}).toArray();
    insertedProducts.forEach(product => {
      console.log(`- ${product._id}: ${product.name}`);
    });
    
    console.log('Importação concluída com sucesso!');
  } catch (error) {
    console.error('Erro durante a importação:', error);
  } finally {
    // Encerrar o processo
    process.exit(0);
  }
}

// Função auxiliar para simular confirmação por prompt (em ambiente Node.js real usaria readline)
async function confirmPrompt(message) {
  // Esta é uma função simples para simular prompt. 
  // Em um ambiente real, você usaria 'readline' ou outro módulo para obter input do usuário
  
  // Aqui estamos apenas simulando a resposta 'sim' para facilitar
  console.log(message);
  return true;
}

// Executar o script
seedDatabase(); 