// components/OptimizedImage.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  quality = 85,
  sizes = '100vw',
  loading = 'lazy',
  placeholder = 'blur',
  blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXF6tswAAAABJRU5ErkJggg==',
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
  }, [src]);

  const imageProps = {
    src,
    alt,
    width,
    height,
    quality,
    sizes,
    loading: priority ? 'eager' : loading,
    priority,
    onLoadingComplete: () => setIsLoaded(true),
    onError: () => setIsError(true),
    className: `transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${props.imageClassName || ''}`,
  };

  // Adicionar o blurDataURL apenas quando o placeholder é 'blur'
  if (placeholder === 'blur') {
    imageProps.placeholder = 'blur';
    imageProps.blurDataURL = blurDataURL;
  }

  return (
    <div 
      className={`relative ${props.className || ''}`} 
      style={{ width: props.fill ? '100%' : width, height: props.fill ? '100%' : height }}
    >
      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-pulse">
          <span className="sr-only">Carregando...</span>
        </div>
      )}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <span className="text-sm text-gray-500">Erro ao carregar imagem</span>
        </div>
      )}
      <Image
        {...imageProps}
        {...props}
      />
    </div>
  );
}