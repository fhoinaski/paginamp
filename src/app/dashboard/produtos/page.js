'use client';
import React, { useState, useEffect } from 'react';
import { 
  Edit, 
  Trash, 
  Save, 
  Plus, 
  RefreshCcw, 
  X, 
  Upload,
  AlertCircle 
} from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../../../contexts/AuthContext';
import { useSearchParams } from 'next/navigation';

const DashboardProdutos = () => {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const productIdParam = searchParams.get('id');
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [usingLocalData, setUsingLocalData] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  
  useEffect(() => {
    if (user) {
      loadProducts();
    }
  }, [user]);
  
  // Efeito para abrir o produto específico se o ID for fornecido na URL
  useEffect(() => {
    if (productIdParam && products.length > 0) {
      const productToEdit = products.find(p => p._id === productIdParam);
      if (productToEdit) {
        handleEditProduct(productToEdit);
      } else {
        setMessage({ 
          type: 'error', 
          text: `Produto com ID ${productIdParam} não encontrado.` 
        });
      }
    }
  }, [productIdParam, products]);

  const loadProducts = async (forceRefresh = false) => {
    setIsLoading(true);
    
    try {
      const url = forceRefresh 
        ? '/api/products?forceRefresh=true' 
        : '/api/products';
      
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (!response.data) {
        throw new Error('Resposta vazia da API');
      }
      
      const productsData = Array.isArray(response.data.products) 
        ? response.data.products 
        : Array.isArray(response.data) 
          ? response.data 
          : null;
      
      if (!productsData || productsData.length === 0) {
        throw new Error("Nenhum produto encontrado na API");
      }
      
      const validProducts = productsData.map((product, index) => ({
        ...product,
        _id: product._id || `api_${index + 1}`
      }));
      
      setProducts(validProducts);
      setUsingLocalData(false);
    } catch (error) {
      console.warn("Erro ao carregar dados da API:", error.message);
      setUsingLocalData(true);
      setMessage({ 
        type: 'info', 
        text: 'Usando dados locais. As alterações não serão salvas permanentemente.' 
      });
      
      // Carregue dados estáticos aqui, se necessário
      // ...
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefreshProducts = async () => {
    setMessage({ type: 'info', text: 'Atualizando dados do servidor...' });
    await loadProducts(true);
    setMessage({ type: 'success', text: 'Dados atualizados com sucesso!' });
    
    setTimeout(() => {
      if (message.type === 'success') {
        setMessage({ type: '', text: '' });
      }
    }, 3000);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setEditedProduct({...product});
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setSelectedProduct(null);
    setEditedProduct(null);
    setIsEditing(false);
    setIsCreating(false);
  };

  const handleCreateNewProduct = () => {
    const newProduct = {
      _id: `new_${Date.now()}`,
      name: "Novo Produto",
      normalPrice: "0,00",
      price: "0,00",
      urlBuy: "",
      urlInfo: "",
      imageUrl: "/images/devices/default-product.png",
      info: "Descrição do novo produto",
      linkOperadoras: [],
      specifications: []
    };
    
    setSelectedProduct(newProduct);
    setEditedProduct(newProduct);
    setIsCreating(true);
    setIsEditing(true);
  };

  const handleSaveProduct = async () => {
    if (!editedProduct) return;
    
    setIsLoading(true);
    setMessage({ type: 'info', text: 'Salvando alterações...' });
    
    try {
      if (usingLocalData) {
        // Simulação de salvamento se estiver usando dados locais
        if (isCreating) {
          // Adicionar novo produto à lista
          setProducts([...products, editedProduct]);
        } else {
          // Atualizar produto existente
          const updatedProducts = products.map(p => 
            p._id === editedProduct._id ? editedProduct : p
          );
          setProducts(updatedProducts);
        }
        
        setMessage({ type: 'success', text: 'Produto atualizado com sucesso (modo local)' });
      } else {
        if (isCreating) {
          // Criar novo produto na API
          await axios.post('/api/products/index', editedProduct);
        } else {
          // Atualizar produto existente
          await axios.put(`/api/products/${editedProduct._id}`, editedProduct);
        }
        
        // Recarregar produtos após a atualização
        await loadProducts(true);
        setMessage({ type: 'success', text: isCreating ? 'Produto criado com sucesso!' : 'Produto atualizado com sucesso!' });
      }
      
      // Resetar estado após salvamento
      setSelectedProduct(null);
      setEditedProduct(null);
      setIsEditing(false);
      setIsCreating(false);
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      setMessage({ type: 'error', text: `Erro ao salvar: ${error.message}` });
    } finally {
      setIsLoading(false);
    }
    
    // Limpar mensagem após 3 segundos
    setTimeout(() => {
      if (message.type === 'success') {
        setMessage({ type: '', text: '' });
      }
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setEditedProduct(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLinkOperadoraChange = (index, field, value) => {
    const updatedLinks = [...editedProduct.linkOperadoras];
    updatedLinks[index] = {
      ...updatedLinks[index],
      [field]: value
    };
    
    setEditedProduct(prev => ({
      ...prev,
      linkOperadoras: updatedLinks
    }));
  };

  const addOperadora = () => {
    const updatedLinks = [...(editedProduct.linkOperadoras || [])];
    updatedLinks.push({ name: '', url: '' });
    
    setEditedProduct(prev => ({
      ...prev,
      linkOperadoras: updatedLinks
    }));
  };

  const removeOperadora = (index) => {
    const updatedLinks = [...editedProduct.linkOperadoras];
    updatedLinks.splice(index, 1);
    
    setEditedProduct(prev => ({
      ...prev,
      linkOperadoras: updatedLinks
    }));
  };

  const handleSpecificationChange = (index, field, value) => {
    const updatedSpecs = [...editedProduct.specifications];
    updatedSpecs[index] = {
      ...updatedSpecs[index],
      [field]: value
    };
    
    setEditedProduct(prev => ({
      ...prev,
      specifications: updatedSpecs
    }));
  };

  const addSpecification = () => {
    const updatedSpecs = [...(editedProduct.specifications || [])];
    updatedSpecs.push({ text: '', type: '' });
    
    setEditedProduct(prev => ({
      ...prev,
      specifications: updatedSpecs
    }));
  };

  const removeSpecification = (index) => {
    const updatedSpecs = [...editedProduct.specifications];
    updatedSpecs.splice(index, 1);
    
    setEditedProduct(prev => ({
      ...prev,
      specifications: updatedSpecs
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Em uma aplicação real, você enviaria o arquivo para um servidor
      // Aqui, vamos simular o carregamento local com uma URL temporária
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedProduct(prev => ({
          ...prev,
          imageUrl: reader.result
        }));
      };
      reader.readAsDataURL(file);
      
      setMessage({ type: 'info', text: 'Imagem selecionada. Clique em Salvar para concluir a atualização.' });
    }
  };

  const handleDeleteProduct = async (productId) => {
    setDeleteConfirmation(null);
    setIsLoading(true);
    setMessage({ type: 'info', text: 'Excluindo produto...' });
    
    try {
      if (usingLocalData) {
        // Simulação de exclusão para dados locais
        const updatedProducts = products.filter(p => p._id !== productId);
        setProducts(updatedProducts);
        setMessage({ type: 'success', text: 'Produto excluído com sucesso (modo local)' });
      } else {
        // Excluir via API
        await axios.delete(`/api/products/${productId}`);
        
        // Recarregar produtos
        await loadProducts(true);
        setMessage({ type: 'success', text: 'Produto excluído com sucesso!' });
      }
      
      // Resetar qualquer produto selecionado
      if (selectedProduct && selectedProduct._id === productId) {
        setSelectedProduct(null);
        setEditedProduct(null);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      setMessage({ type: 'error', text: `Erro ao excluir: ${error.message}` });
    } finally {
      setIsLoading(false);
    }
  };
  
  const confirmDelete = (product) => {
    setDeleteConfirmation(product);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Gerenciamento de Produtos</h1>
        <p className="text-gray-600">Edite os detalhes dos produtos, preços e especificações</p>
      </div>
      
      {message.text && (
        <div className={`mb-6 p-3 rounded flex items-center ${
          message.type === 'error' ? 'bg-red-100 text-red-700' : 
          message.type === 'success' ? 'bg-green-100 text-green-700' : 
          'bg-blue-100 text-blue-700'
        }`}>
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>{message.text}</span>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-3 sm:space-y-0">
          <h2 className="text-xl font-semibold">Produtos ({products.length})</h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <button 
              onClick={handleCreateNewProduct} 
              className="flex items-center justify-center px-3 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 w-full sm:w-auto"
            >
              <Plus className="w-4 h-4 mr-2" />
              Novo Produto
            </button>
            <button 
              onClick={handleRefreshProducts} 
              className="flex items-center justify-center px-3 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 w-full sm:w-auto"
              disabled={isLoading}
            >
              <RefreshCcw className="w-4 h-4 mr-2" />
              Atualizar Dados
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Tabela para telas médias e grandes */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Produto
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Preço
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Preço Normal
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Operadoras
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map(product => (
                    <tr key={product._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {product.imageUrl && (
                            <img 
                              src={product.imageUrl} 
                              alt={product.name} 
                              className="h-10 w-10 object-contain mr-4" 
                            />
                          )}
                          <div>
                            <div className="font-medium text-gray-900">{product.name}</div>
                            <div className="text-sm text-gray-500">{product.info}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">R$ {product.price}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">R$ {product.normalPrice}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.linkOperadoras?.length || 0} operadoras
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => confirmDelete(product)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Cards para dispositivos móveis */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {products.map(product => (
                <div key={product._id} className="bg-white border rounded-lg shadow-sm p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {product.imageUrl && (
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="h-12 w-12 object-contain mr-3" 
                        />
                      )}
                      <div>
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500 truncate max-w-[200px]">{product.info}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Preço</p>
                      <p className="text-sm font-semibold text-green-600">R$ {product.price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Preço Normal</p>
                      <p className="text-sm line-through">R$ {product.normalPrice}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Operadoras</p>
                      <p className="text-sm">{product.linkOperadoras?.length || 0}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Especificações</p>
                      <p className="text-sm">{product.specifications?.length || 0}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2 pt-2 border-t">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="p-2 text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      <span className="text-sm">Editar</span>
                    </button>
                    <button
                      onClick={() => confirmDelete(product)}
                      className="p-2 text-red-600 hover:text-red-800 flex items-center"
                    >
                      <Trash className="h-4 w-4 mr-1" />
                      <span className="text-sm">Excluir</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      
      {isEditing && editedProduct && (
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-3 sm:space-y-0">
            <h2 className="text-xl font-semibold">
              {isCreating ? "Criar Novo Produto" : `Editar Produto: ${editedProduct.name}`}
            </h2>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
              <button 
                onClick={handleCancelEdit}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 w-full sm:w-auto"
              >
                Cancelar
              </button>
              <button 
                onClick={handleSaveProduct}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto"
                disabled={isLoading}
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar Alterações
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="flex flex-col items-center">
                <img 
                  src={editedProduct.imageUrl} 
                  alt={editedProduct.name}
                  className="w-40 h-40 object-contain border rounded-md p-2 mb-4"
                />
                <label className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 flex items-center">
                  <Upload className="h-4 w-4 mr-2" />
                  Trocar Imagem
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome do Produto
                  </label>
                  <input
                    type="text"
                    value={editedProduct.name || ''}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Descrição
                  </label>
                  <input
                    type="text"
                    value={editedProduct.info || ''}
                    onChange={(e) => handleInputChange('info', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preço (R$)
                  </label>
                  <input
                    type="text"
                    value={editedProduct.price || ''}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preço Normal (R$)
                  </label>
                  <input
                    type="text"
                    value={editedProduct.normalPrice || ''}
                    onChange={(e) => handleInputChange('normalPrice', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    URL Info
                  </label>
                  <input
                    type="text"
                    value={editedProduct.urlInfo || ''}
                    onChange={(e) => handleInputChange('urlInfo', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    URL Compra
                  </label>
                  <input
                    type="text"
                    value={editedProduct.urlBuy || ''}
                    onChange={(e) => handleInputChange('urlBuy', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Seção de Operadoras */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Operadoras</h3>
              <button
                type="button"
                onClick={addOperadora}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200"
              >
                <Plus className="h-4 w-4 mr-1" />
                Adicionar Operadora
              </button>
            </div>
            
            {editedProduct.linkOperadoras?.map((operadora, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 border rounded-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome da Operadora
                  </label>
                  <input
                    type="text"
                    value={operadora.name || ''}
                    onChange={(e) => handleLinkOperadoraChange(index, 'name', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        URL da Operadora
                      </label>
                      <input
                        type="text"
                        value={operadora.url || ''}
                        onChange={(e) => handleLinkOperadoraChange(index, 'url', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeOperadora(index)}
                      className="ml-2 mt-5 p-2 text-red-600 hover:text-red-800"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Seção de Especificações */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Especificações</h3>
              <button
                type="button"
                onClick={addSpecification}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200"
              >
                <Plus className="h-4 w-4 mr-1" />
                Adicionar Especificação
              </button>
            </div>
            
            {editedProduct.specifications?.map((spec, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 border rounded-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo
                  </label>
                  <input
                    type="text"
                    value={spec.type || ''}
                    onChange={(e) => handleSpecificationChange(index, 'type', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Texto
                      </label>
                      <input
                        type="text"
                        value={spec.text || ''}
                        onChange={(e) => handleSpecificationChange(index, 'text', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeSpecification(index)}
                      className="ml-2 mt-5 p-2 text-red-600 hover:text-red-800"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal de confirmação de exclusão */}
      {deleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-medium mb-4">Confirmar exclusão</h3>
            <p className="mb-6">
              Tem certeza que deseja excluir o produto <strong>{deleteConfirmation.name}</strong>? 
              Esta ação não pode ser desfeita.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setDeleteConfirmation(null)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDeleteProduct(deleteConfirmation._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardProdutos; 