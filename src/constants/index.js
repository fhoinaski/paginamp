/**
 * Constantes globais do projeto
 * Centralize aqui valores que podem ser alterados ou reutilizados em várias partes do projeto
 */

// Navegação
export const NAVIGATION = {
  HOME: '/',
  COMPRAR: '#modelos',
}

// Nome do site e da empresa
export const SITE = {
  NAME: 'Enoc maquininha',
  TITLE: 'Enoc maquininha',
  DESCRIPTION: 'Soluções de pagamento para seu negócio',
}

// URLs para recursos
export const URLS = {
  MODELS_SECTION: '#modelos',
  TAXAS_SECTION: '#taxas-section',
}

// Textos reutilizáveis
export const TEXTS = {
  BUY_NOW: 'Comprar Agora',
  BUY: 'Comprar',
  LOADING: 'Carregando...',
  MODELS: 'Modelos',
  VIEW_MORE: 'Ver mais',
  PROMOTION_NOTICE: 'Promoção para novos usuários: Ao adquirir uma maquininha Point, o usuário aproveita taxas promocionais nos primeiros 30 dias ou até R$ 5.000 em vendas (o que ocorrer primeiro)',
}

// Estilos comuns reusáveis como classes Tailwind
export const STYLES = {
  PRIMARY_BUTTON: 'bg-brand hover:bg-brand-dark text-white rounded-md px-4 py-2 flex items-center gap-2',
  SECONDARY_BUTTON: 'bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-4 py-2',
  LINK: 'text-brand hover:text-brand-dark underline',
}

// Breakpoints responsivos
export const BREAKPOINTS = {
  MOBILE: 'md',
  TABLET: 'lg',
  DESKTOP: 'xl',
} 