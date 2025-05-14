'use client';
import { useEffect } from 'react';
import { initFacebookPixel, isPixelReady } from '../lib/fbPixel';

// Componente para inicializar o Facebook Pixel no lado do cliente
export default function FacebookPixelInitializer({ pixelId }) {
  useEffect(() => {
    if (pixelId && typeof window !== 'undefined') {
      // Verifica se já foi inicializado
      if (!isPixelReady()) {
        console.log('Inicializando Facebook Pixel no componente com ID:', pixelId);
        initFacebookPixel(pixelId);
      } else {
        console.log('Facebook Pixel já estava inicializado.');
      }
    }
  }, [pixelId]);

  return null; // Este componente não renderiza nada visível
} 