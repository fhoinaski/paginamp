/**
 * Sistema de cache para produtos no lado do servidor
 * Evita requisições frequentes ao MongoDB
 */

// Armazenamento de cache - só existe no lado do servidor
let productsCache = null;
let cacheTimestamp = null;
let cacheValid = false;

// Tempo máximo de validade do cache em ms (15 minutos)
const CACHE_MAX_AGE = 15 * 60 * 1000;

/**
 * Verifica se o cache atual é válido
 * @returns {boolean} - true se o cache for válido, false caso contrário
 */
export function isCacheValid() {
  // Se não temos cache ou se ele não foi marcado como válido, retorna falso
  if (!productsCache || !cacheValid) {
    return false;
  }
  
  // Se temos cache mas não temos timestamp, considere inválido
  if (!cacheTimestamp) {
    return false;
  }
  
  // Verifica se o cache não expirou
  const now = Date.now();
  const age = now - cacheTimestamp;
  
  return age < CACHE_MAX_AGE;
}

/**
 * Obtém os produtos do cache
 * @returns {Array|null} - Array de produtos ou null se o cache não for válido
 */
export function getCachedProducts() {
  if (isCacheValid()) {
    console.log('Usando produtos do cache (idade: ' + ((Date.now() - cacheTimestamp) / 1000).toFixed(2) + 's)');
    return productsCache;
  }
  return null;
}

/**
 * Armazena produtos no cache
 * @param {Array} products - Array de produtos para armazenar
 */
export function setCachedProducts(products) {
  if (!products || !Array.isArray(products)) {
    console.warn('Tentativa de armazenar dados inválidos no cache');
    return;
  }
  
  console.log(`Atualizando cache com ${products.length} produtos`);
  productsCache = [...products]; // Clone para evitar referência direta
  cacheTimestamp = Date.now();
  cacheValid = true;
}

/**
 * Invalida o cache, forçando uma nova busca no banco na próxima requisição
 */
export function invalidateCache() {
  console.log('Cache de produtos invalidado');
  cacheValid = false;
}

/**
 * Obtém informações sobre o estado do cache
 * @returns {Object} - Informações sobre o cache
 */
export function getCacheInfo() {
  return {
    hasCache: !!productsCache,
    itemCount: productsCache ? productsCache.length : 0,
    isValid: cacheValid,
    age: cacheTimestamp ? Date.now() - cacheTimestamp : null,
    timestamp: cacheTimestamp,
    maxAge: CACHE_MAX_AGE
  };
} 