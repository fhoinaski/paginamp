'use client';

import ProtectedRoute from '../../components/ProtectedRoute';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';
import { LogOut, Home, Package, Settings, Users, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function DashboardLayout({ children }) {
  const { logout, user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        {/* Overlay para dispositivos móveis */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
        
        {/* Sidebar */}
        <div className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:inset-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="p-4 border-b flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Painel Admin</h2>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
            <button 
              className="p-1 rounded-md text-gray-500 hover:bg-gray-100 lg:hidden"
              onClick={toggleSidebar}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100" onClick={() => setSidebarOpen(false)}>
                  <Home className="h-5 w-5 mr-3" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/produtos" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100" onClick={() => setSidebarOpen(false)}>
                  <Package className="h-5 w-5 mr-3" />
                  <span>Produtos</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/configuracoes" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100" onClick={() => setSidebarOpen(false)}>
                  <Settings className="h-5 w-5 mr-3" />
                  <span>Configurações</span>
                </Link>
              </li>
              <li>
                <button 
                  onClick={logout}
                  className="flex items-center w-full p-2 text-gray-700 rounded hover:bg-gray-100"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  <span>Sair</span>
                </button>
              </li>
              <li>
                <Link href="/login" className="flex items-center p-2 text-red-600 rounded hover:bg-gray-100" onClick={() => setSidebarOpen(false)}>
                  <LogOut className="h-5 w-5 mr-3" />
                  <span>Voltar para login</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white shadow-sm">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <button 
                  className="p-1 mr-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none lg:hidden"
                  onClick={toggleSidebar}
                >
                  <Menu className="h-6 w-6" />
                </button>
                <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-2">
                <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 mr-2 hidden sm:inline-block">
                  Voltar para o site
                </Link>
                <Link href="/login" className="text-sm px-3 py-1 border border-transparent rounded-md text-red-600 hover:text-red-800 mr-2 hidden sm:inline-block">
                  Voltar para login
                </Link>
                <button 
                  onClick={logout} 
                  className="text-sm px-3 py-1 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sair
                </button>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-auto">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
} 