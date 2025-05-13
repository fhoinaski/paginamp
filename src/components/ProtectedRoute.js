'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Verificar autenticação apenas após o carregamento
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Se ainda estiver carregando ou não tiver usuário, não renderizar nada
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Se não estiver autenticado, não renderizar nada (será redirecionado)
  if (!user) {
    return null;
  }

  // Se estiver autenticado, renderizar as children
  return <>{children}</>;
} 