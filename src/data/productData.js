// src/data/productData.js

import { staticProductData } from './staticProductData';

export const fetchProductData = async () => {
  try {
    console.log('Iniciando fetchProductData...');
    
    // Definir URL base para a requisição API
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    console.log(`Buscando dados da API em: ${baseUrl}/api/products`);
    
    // Configuração para não usar cache do navegador
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    };
    
    // Tentar buscar dados da API
    const response = await fetch(`${baseUrl}/api/products`, fetchOptions);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar produtos da API: ${response.status}`);
    }
    
    const data = await response.json();
 
    
    // Verificar se os dados estão na estrutura esperada
    if (!data || !data.products || !Array.isArray(data.products) || data.products.length === 0) {
     
      return staticProductData;
    }
    
    // Combinar dados estáticos com os dados do banco
    // Usamos os dados estáticos como base e atualizamos os campos específicos
    const combinedProducts = staticProductData.map(staticProduct => {
      // Procurar o produto correspondente no banco de dados
      const dbProduct = data.products.find(p => p.name === staticProduct.name);
      
      // Se encontrou o produto no banco, atualizar valores relevantes
      if (dbProduct) {
        // Importante: Para linkOperadoras, não usar o operador || para fallback
        // Se existir no banco de dados, usar SOMENTE os dados do banco
        // Se não existir no banco, só então usar os dados estáticos
        const linkOperadoras = dbProduct.linkOperadoras !== undefined 
          ? dbProduct.linkOperadoras 
          : staticProduct.linkOperadoras;
        
        return {
          ...staticProduct,                           // Manter a estrutura base do produto estático
          price: dbProduct.price || staticProduct.price, // Usar preço do banco ou manter o estático
          urlBuy: dbProduct.urlBuy || staticProduct.urlBuy, // Usar URL de compra do banco ou manter o estático
          linkOperadoras: linkOperadoras,             // Usar APENAS os dados de operadoras do banco
          linkPedido: dbProduct.linkPedido || staticProduct.linkPedido // Usar link de pedido do banco ou manter o estático
        };
      }
      
      // Se não encontrou no banco, retornar o produto estático original
      return staticProduct;
    });
    
    
    return combinedProducts;
    
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    console.warn('Usando dados estáticos como fallback devido a erro');
    return staticProductData;
  }
};