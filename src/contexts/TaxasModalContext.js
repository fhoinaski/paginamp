'use client';

import { createContext, useContext, useState } from 'react';

// Criando o contexto para o modal de taxas
const TaxasModalContext = createContext(null);

// Provedor do contexto
export const TaxasModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  
  // Função para abrir o modal
  const openModal = () => setShowModal(true);
  
  // Função para fechar o modal
  const closeModal = () => setShowModal(false);
  
  // Função para alternar o estado do modal
  const toggleModal = () => setShowModal(prev => !prev);

  return (
    <TaxasModalContext.Provider 
      value={{ 
        showModal, 
        openModal, 
        closeModal,
        toggleModal
      }}
    >
      {children}
    </TaxasModalContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useTaxasModal = () => {
  const context = useContext(TaxasModalContext);
  
  if (!context) {
    throw new Error('useTaxasModal deve ser usado dentro de um TaxasModalProvider');
  }
  
  return context;
}; 