'use client';
import { useEffect } from 'react';
import { initFacebookPixel, isPixelReady } from '../lib/fbPixel';

// Componente para inicializar o Facebook Pixel no lado do cliente
export default function FacebookPixelInitializer({ pixelId }) {
  useEffect(() => {
    if (pixelId && typeof window !== 'undefined') {
      // Armazenar o ID no window para possíveis recuperações futuras
      window.FB_PIXEL_ID = pixelId;
      
      // Verifica se já foi inicializado
      if (!isPixelReady()) {
        console.log('Inicializando Facebook Pixel no componente com ID:', pixelId);
        
        // Adicionar um pequeno atraso para dar tempo aos scripts carregarem
        setTimeout(() => {
          initFacebookPixel(pixelId);
        }, 100);
      } else {
        console.log('Facebook Pixel já estava inicializado.');
      }
    }
  }, [pixelId]);

  // Adicionar um segundo useEffect para tentar reinicializar depois de algum tempo
  // se o primeiro não tiver sido bem-sucedido
  useEffect(() => {
    if (pixelId && typeof window !== 'undefined') {
      // Após 2 segundos, verificar se o pixel está pronto e reinicializar se necessário
      const retryTimer = setTimeout(() => {
        if (!isPixelReady()) {
          console.log('Tentativa adicional de inicialização do Pixel após atraso...');
          initFacebookPixel(pixelId);
        }
      }, 2000);

      return () => clearTimeout(retryTimer);
    }
  }, [pixelId]);

  return null; // Este componente não renderiza nada visível
} 