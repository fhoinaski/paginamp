/**
 * Constantes relacionadas às taxas do serviço
 */

// Rótulos para as faixas de valores
export const RANGE_LABELS = [
  'Promo',
  'Até R$ 2 mil',
  'Até R$ 5 mil',
  '+ R$ 5 mil'
];

// Valores das taxas por faixa
export const TAX_RANGES = [
  // Taxa promocional
  { debito: '0,74', credito: '0,74', credito12x: '8,99' },
  // Até R$ 2 mil
  { debito: '1,99', credito: '4,98', credito12x: '22,59' },
  // Até R$ 5 mil
  { debito: '1,67', credito: '3,57', credito12x: '13,99' },
  // Acima de R$ 5 mil
  { debito: '1,65', credito: '3,55', credito12x: '13,79' },
];

// Rótulos para os tipos de taxas
export const TAX_TYPE_LABELS = ['DÉBITO', 'CRÉDITO', 'CRÉDITO 12x'];

// Taxas detalhadas para o modal
export const DETAILED_RATES = {
  pix: { promo: "0%", ate2mil: "0,49%", de2a5mil: "0,49%", de5a10mil: "0,49%", de10a15mil: "0,49%", acima15mil: "0,49%" },
  debito: { promo: "0,74%", ate2mil: "1,99%", de2a5mil: "1,67%", de5a10mil: "1,65%", de10a15mil: "1,61%", acima15mil: "1,41%" },
  credito: {
    vista: { promo: "0,74%", ate2mil: "4,98%", de2a5mil: "3,57%", de5a10mil: "3,55%", de10a15mil: "3,51%", acima15mil: "3,31%" },
    parcelas: [
      { desc: "Em 2x", promo: "3,99%", ate2mil: "9,90%", de2a5mil: "7,79%", de5a10mil: "7,59%", de10a15mil: "7,49%", acima15mil: "5,69%" },
      { desc: "Em 3x", promo: "4,99%", ate2mil: "11,28%", de2a5mil: "8,45%", de5a10mil: "8,26%", de10a15mil: "8,21%", acima15mil: "6,47%" },
      { desc: "Em 4x", promo: "5,99%", ate2mil: "12,64%", de2a5mil: "9,33%", de5a10mil: "9,14%", de10a15mil: "9,09%", acima15mil: "7,33%" },
      { desc: "Em 5x", promo: "6,99%", ate2mil: "13,97%", de2a5mil: "10,20%", de5a10mil: "10,01%", de10a15mil: "9,96%", acima15mil: "8,14%" },
      { desc: "Em 6x", promo: "7,99%", ate2mil: "15,27%", de2a5mil: "11,09%", de5a10mil: "10,89%", de10a15mil: "10,79%", acima15mil: "8,69%" },
      { desc: "Em 7x", promo: "8,99%", ate2mil: "16,55%", de2a5mil: "11,89%", de5a10mil: "11,70%", de10a15mil: "11,65%", acima15mil: "9,91%" },
      { desc: "Em 8x", promo: "8,99%", ate2mil: "17,81%", de2a5mil: "12,74%", de5a10mil: "12,55%", de10a15mil: "12,50%", acima15mil: "10,47%" },
      { desc: "Em 9x", promo: "8,99%", ate2mil: "19,04%", de2a5mil: "13,24%", de5a10mil: "13,05%", de10a15mil: "13,00%", acima15mil: "11,76%" },
      { desc: "Em 10x", promo: "8,99%", ate2mil: "20,24%", de2a5mil: "13,49%", de5a10mil: "13,29%", de10a15mil: "13,19%", acima15mil: "11,79%" },
      { desc: "Em 11x", promo: "8,99%", ate2mil: "21,43%", de2a5mil: "13,85%", de5a10mil: "13,66%", de10a15mil: "13,61%", acima15mil: "13,21%" },
      { desc: "Em 12x", promo: "8,99%", ate2mil: "22,59%", de2a5mil: "13,99%", de5a10mil: "13,79%", de10a15mil: "13,69%", acima15mil: "13,49%" }
    ]
  }
};

// Mapeamento e rótulos para faixas mobile
export const MOBILE_RANGE_MAPPING = ['ate2mil', 'de2a5mil', 'de5a10mil', 'de10a15mil', 'acima15mil'];
export const MOBILE_RANGE_LABELS = ['2 MIL', '2 A 5 MIL', '5 A 10 MIL', '10 A 15 MIL', 'ACIMA 15 MIL']; 