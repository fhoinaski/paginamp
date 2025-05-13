/**
 * Formata um número para o formato de moeda brasileira
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado em reais (R$)
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

/**
 * Converte um nome para slug
 * @param {string} name - Nome a ser convertido
 * @returns {string} Slug gerado
 */
export const nameToSlug = (name) => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

/**
 * Converte um slug para nome
 * @param {string} slug - Slug a ser convertido
 * @returns {string} Nome gerado
 */
export const slugToName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}; 