'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário está autenticado ao carregar o contexto
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const email = localStorage.getItem('userEmail');
        
        if (token) {
          // No sistema real, você verificaria o token com o backend
          setUser({ email });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      // Primeiro tenta autenticar via API
      try {
        const response = await axios.post('/api/auth/login', {
          email,
          password
        });
        
        if (response.data && response.data.token) {
          localStorage.setItem('authToken', response.data.token);
          localStorage.setItem('userEmail', email);
          setUser({ email });
          return true;
        }
      } catch (apiError) {
        console.warn('Erro ao autenticar via API:', apiError.message);
        // Se a API falhar, tenta o fallback de login
      }
      
      // Fallback para o login simulado (para desenvolvimento/teste)
      if ((email === 'admin@exemplo.com' && password === 'admin123') ||
          (email === 'enoc@enocmaquinihas.com.br' && password === 'EnocHenrique12345678@')) {
        const token = 'dummy-token-for-demo';
        localStorage.setItem('authToken', token);
        localStorage.setItem('userEmail', email);
        setUser({ email });
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Erro no processo de login:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    setUser(null);
    router.push('/login');
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        login, 
        logout, 
        isAuthenticated 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 