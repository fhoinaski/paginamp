/**
 * Formata um valor numérico para exibição em formato monetário brasileiro
 * @param {string|number} value - Valor a ser formatado
 * @returns {string} - Valor formatado como "R$ XX,XX"
 */
export const formatCurrency = (value) => {
  // Converte para número e garante que seja um número válido
  const numValue = typeof value === 'string' 
    ? parseFloat(value.replace(',', '.')) 
    : value;
  
  if (isNaN(numValue)) return 'R$ 0,00';
  
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(numValue);
};

/**
 * Converte uma string de preço para número
 * @param {string} price - Preço no formato "R$ XX,XX"
 * @returns {number} - Preço como número
 */
export const parsePrice = (price) => {
  if (!price) return 0;
  return parseFloat(price.replace('R$', '').replace(',', '.').trim());
};

/**
 * Calcula a porcentagem de desconto entre dois preços
 * @param {string} normalPrice - Preço normal no formato "R$ XX,XX"
 * @param {string} salePrice - Preço de venda no formato "R$ XX,XX"
 * @returns {number} - Porcentagem de desconto arredondada
 */
export const calculateDiscount = (normalPrice, salePrice) => {
  const normalPriceNum = parsePrice(normalPrice);
  const salePriceNum = parsePrice(salePrice);
  
  if (normalPriceNum === 0) return 0;
  
  const discount = ((normalPriceNum - salePriceNum) / normalPriceNum) * 100;
  return Math.round(discount);
};

/**
 * Converte uma string de nome de produto em um slug para URL
 * @param {string} name - Nome do produto
 * @returns {string} - Slug para URL
 */
export const nameToSlug = (name) => {
  if (!name) return '';
  return name.toLowerCase()
    .normalize('NFD') // Normaliza acentos
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\w\s]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-'); // Remove hífens duplicados
};

/**
 * Converte um slug para um nome provável de produto
 * @param {string} slug - Slug da URL
 * @returns {string} - Nome provável do produto
 */
export const slugToName = (slug) => {
  if (!slug) return '';
  return slug
    .replace(/-/g, ' ') // Substitui hífens por espaços
    .replace(/\b\w/g, l => l.toUpperCase()); // Capitaliza primeira letra de cada palavra
}; 