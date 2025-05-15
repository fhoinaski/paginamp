import AppIcon from '../../components/icons/AppIcon';

/**
 * Mapeamento centralizado de ícones para o aplicativo
 * Usa o componente AppIcon que se baseia na biblioteca lucide-react
 */
export const ICON_MAPPING = {
  "bateria": <AppIcon name="BatteryMedium" />,
  "wifi": <AppIcon name="Wifi" />,
  "débito, crédito, código QR e Pix": <AppIcon name="CreditCard" />,
  "conta digital e cartão gratuito": <AppIcon name="Shield" />,
  "garantia": <AppIcon name="Shield" />,
  "Imprime o comprovante": <AppIcon name="Printer" />,
  "Cartão com chip, tarja magnética e por aproximação": <AppIcon name="CreditCard" />,
  "dimensões": <AppIcon name="Ruler" />,
  "peso": <AppIcon name="Dumbbell" />,
  "bluetooth": <AppIcon name="Bluetooth" />,
  "sms": <AppIcon name="Mail" />,
  
  // Ícones adicionais para uso em toda a aplicação
  "check": <AppIcon name="Check" color="green" />,
  "close": <AppIcon name="X" color="red" />,
  "warning": <AppIcon name="AlertTriangle" color="yellow" />,
  "info": <AppIcon name="Info" color="blue" />,
  "success": <AppIcon name="CheckCircle" color="green" />,
  "error": <AppIcon name="XCircle" color="red" />,
  "search": <AppIcon name="Search" />,
  "cart": <AppIcon name="ShoppingCart" />,
  "user": <AppIcon name="User" />,
  "settings": <AppIcon name="Settings" />,
  "logout": <AppIcon name="LogOut" />,
  "menu": <AppIcon name="Menu" />,
  "calendar": <AppIcon name="Calendar" />,
  "money": <AppIcon name="DollarSign" />,
  "truck": <AppIcon name="Truck" />,
  "clock": <AppIcon name="Clock" />,
  "phone": <AppIcon name="Phone" />,
  "mail": <AppIcon name="Mail" />,
  "link": <AppIcon name="Link" />,
  "star": <AppIcon name="Star" color="yellow" />,
  "heart": <AppIcon name="Heart" color="red" />,
};

/**
 * Função auxiliar para obter ícone pelo nome
 * @param {string} name - Nome do ícone
 * @returns {React.ReactNode} - Componente de ícone ou null se não encontrado
 */
export const getIcon = (name) => {
  return ICON_MAPPING[name] || null;
}; 