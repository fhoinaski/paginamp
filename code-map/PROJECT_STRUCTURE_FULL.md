# Análise de Projeto para IA - maquininhas-point 

**🚨 Instrução Fundamental para a IA:**
**VOCÊ DEVE USAR ESTE DOCUMENTO COMO A ÚNICA FONTE DE CONTEXTO.**
Analise o projeto, responda às perguntas e gere código/sugestões baseando-se **exclusivamente** nas informações contidas aqui (visão geral, dependências, scripts, estrutura de pastas e conteúdo dos arquivos fornecidos).
**Não invente arquivos, funções ou dependências que não estejam listados.**

---

**Gerado em:** 09/05/2025, 21:22:38
**Diretório Raiz Analisado:** `E:\Projetos\maquininhaspoint\maquininhas-point`
**Node Version:** v18.20.4 | **Plataforma:** win32

## 1. Visão Geral do Projeto

**Nome:** maquininhas-point
**Versão:** 0.1.0
**Descrição:** (não definida)
**Ponto de Entrada Principal (main):** `(não definido)`
**Ponto de Entrada Módulo (module):** `(não definido)`

**Resumo do README.md:**
```markdown
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
```

## 2. Dependências

### Dependências Principais (`dependencies`):
```json
{
  "@headlessui/react": "^2.1.9",
  "@svgr/webpack": "^8.1.0",
  "axios": "^1.7.7",
  "clsx": "^2.1.1",
  "lucide-react": "^0.446.0",
  "next": "^15.2.0",
  "react": "^18",
  "react-dom": "^18",
  "react-icons": "^5.3.0",
  "recharts": "^2.15.1",
  "shadcn-ui": "^0.9.2",
  "swiper": "^11.1.14",
  "tailwind-merge": "^3.0.2"
}
```

### Dependências de Desenvolvimento (`devDependencies`):
```json
{
  "@types/node": "22.7.4",
  "@types/react": "18.3.10",
  "eslint": "^8",
  "eslint-config-next": "14.2.13",
  "postcss": "^8",
  "tailwindcss": "^3.4.1"
}
```

## 3. Scripts (`package.json`)

| Script | Comando |
|---|---|
| `dev` | `next dev` |
| `build` | `next build` |
| `start` | `next start` |
| `lint` | `next lint` |

## 4. Estrutura de Pastas

```
maquininhas-point/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 comprar/
│   │   │   └── 📁 [model]/
│   │   │       ├── 📄 layout.js
│   │   │       ├── 📄 page.js
│   │   │       └── 📄 style.css
│   │   ├── 📁 dashboard/
│   │   │   └── 📄 page.js
│   │   ├── 📁 maquininhas/
│   │   │   ├── 📁 point-air/
│   │   │   │   ├── 📄 layout.js
│   │   │   │   └── 📄 page.js
│   │   │   ├── 📁 point-mini-nfc-2/
│   │   │   │   ├── 📄 layout.js
│   │   │   │   └── 📄 page.js
│   │   │   ├── 📁 point-pro-3/
│   │   │   │   ├── 📄 layout.js
│   │   │   │   └── 📄 page.js
│   │   │   └── 📁 point-smart-2/
│   │   │       ├── 📄 layout.js
│   │   │       └── 📄 page.js
│   │   ├── 📄 globals.css
│   │   ├── 📄 layout.js
│   │   └── 📄 page.js
│   ├── 📁 components/
│   │   ├── 📁 cards/
│   │   │   ├── 📁 header/
│   │   │   │   └── 📄 header.js
│   │   │   └── 📄 PointSmartCard.js
│   │   ├── 📁 comprar/
│   │   │   ├── 📄 ConfiguraPedido.js
│   │   │   ├── 📄 InternetProviderSelector.js
│   │   │   └── 📄 OrderConfiguration.js
│   │   ├── 📁 points/
│   │   │   ├── 📄 HeroSectionPointAir.js
│   │   │   ├── 📄 HeroSectionPointMini.js
│   │   │   ├── 📄 HeroSectionPointPro.js
│   │   │   └── 📄 HeroSectionPointSmart.js
│   │   ├── 📁 ui/
│   │   │   └── 📄 tabs.js
│   │   ├── 📄 CardFlag.js
│   │   ├── 📄 FeedbackForm.js
│   │   ├── 📄 Footer.js
│   │   ├── 📄 Header.js
│   │   ├── 📄 MenuPopover.js
│   │   ├── 📄 MercadoPagoHero.js
│   │   ├── 📄 OptimizedImage.js
│   │   ├── 📄 PlanCard.js
│   │   ├── 📄 ProductCard.js
│   │   ├── 📄 ProductCatalog.js
│   │   ├── 📄 ProductComparison.js
│   │   ├── 📄 ProductDetail.js
│   │   ├── 📄 Produtos.js
│   │   ├── 📄 ReviewsAndQuestions.js
│   │   ├── 📄 SectionConta.js
│   │   ├── 📄 SectionCredito.js
│   │   ├── 📄 SectionLinkVendas.js
│   │   ├── 📄 SectionNovaAir.js
│   │   ├── 📄 SectionPointAir.js
│   │   ├── 📄 SectionPointMini.js
│   │   ├── 📄 SectionPointPro2.js
│   │   ├── 📄 SectionTaxas.js
│   │   └── 📄 TestimonialSlider.js
│   ├── 📁 contexts/
│   │   └── 📄 ThemeContext.js
│   ├── 📁 data/
│   │   ├── 📄 productData copy.js
│   │   └── 📄 productData.js
│   ├── 📁 lib/
│   │   ├── 📄 productFecth.js
│   │   └── 📄 utils.js
│   └── 📁 pages/
│       └── 📁 api/
│           └── 📄 product-proxy.js
├── 📄 .eslintrc.json
├── 📄 generate-code-map.js
├── 📄 jsconfig.json
├── 📄 next-env.d.ts
├── 📄 next.config.mjs
├── 📄 postcss.config.mjs
├── 📄 README.md
├── 📄 tailwind.config.js
└── 📄 tsconfig.json
```

## 5. Conteúdo Detalhado dos Arquivos

---
### 📄 Arquivo: `src/app/comprar/[model]/layout.js`

```javascript
import './style.css';

export const metadata = {
    title: "Configure seu Pedido - Point Smart 2",
    description: "Escolha a maquininha perfeita para o seu negócio",
  };
  
  export default function Layout({ children }) {
    return (
      <>
        {children}
      </>
    );
  }
```


---
### 📄 Arquivo: `src/app/comprar/[model]/page.js`

```javascript
// src/app/comprar/page.js
'use client';
import React, { use } from 'react';
import ConfiguraPedido from '../../../components/comprar/ConfiguraPedido';

export default function ComprarPage({ params }) {
  // Desembrulhar o objeto params usando React.use()
  const unwrappedParams = use(params);
  
  // Converte o formato da URL (ex: point-smart-2) para o formato do nome do produto (ex: Point Smart 2)
  const formatProductName = (slug) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Mapeia os slugs de URL para nomes exatos de produtos (caso necessário)
  const getProductName = (slug) => {
    const productMap = {
      'point-smart-2': 'Point Smart 2',
      'point-pro-3': 'Point Pro 3',
      'point-mini-nfc-2': 'Point Mini NFC 2',
      'point-air': 'Point Air',
      'point-mini': 'Point Mini NFC 2' // Aliás para consistency
    };
    
    return productMap[slug] || formatProductName(slug);
  };

  const productName = getProductName(unwrappedParams.model);

  return (
    <div className="pt-20">
      <ConfiguraPedido productModel={productName} />
    </div>
  );
}
```


---
### 📄 Arquivo: `src/app/comprar/[model]/style.css`

```css
.nav-custom-header {
    background-color: #00b1ea;
    width: 100%;
}
```


---
### 📄 Arquivo: `src/app/dashboard/page.js`

```javascript
// src/app/dashboard/page.js
'use client';
import React, { useState, useEffect } from 'react';
import { fetchProductData } from '../../data/productData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Save, Upload, Edit, Trash, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    // Carregar dados dos produtos
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = fetchProductData();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setMessage({ type: 'error', text: 'Erro ao carregar dados dos produtos' });
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setEditedProduct({...product});
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

  const handleSaveProduct = () => {
    // Simulação de salvamento - em produção, isso enviaria dados para uma API
    setMessage({ type: 'success', text: 'Produto atualizado com sucesso!' });
    
    // Atualiza o produto na lista
    const updatedProducts = products.map(p => 
      p.name === editedProduct.name ? editedProduct : p
    );
    
    setProducts(updatedProducts);
    
    // Limpa a mensagem após 3 segundos
    setTimeout(() => {
      setMessage({ type: '', text: '' });
    }, 3000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Em uma aplicação real, você enviaria o arquivo para um servidor
      // Aqui, vamos simular o carregamento local com uma URL temporária
      const imageUrl = URL.createObjectURL(file);
      
      setEditedProduct(prev => ({
        ...prev,
        imageUrl: imageUrl
      }));
      
      setMessage({ type: 'info', text: 'Imagem selecionada. Clique em Salvar para concluir a atualização.' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold dark:text-white">Painel Administrativo</h1>
          
          {message.text && (
            <div className={`rounded-md p-3 flex items-center ${
              message.type === 'success' ? 'bg-green-100 text-green-800' : 
              message.type === 'error' ? 'bg-red-100 text-red-800' : 
              'bg-blue-100 text-blue-800'
            }`}>
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>{message.text}</span>
            </div>
          )}
        </div>
        
        <Tabs defaultValue="products">
          <TabsList className="mb-8">
            <TabsTrigger value="products">Gerenciamento de Produtos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">Produtos</h2>
                
                {isLoading ? (
                  <div className="flex justify-center py-10">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-brand"></div>
                  </div>
                ) : (
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {products.map((product) => (
                      <li key={product.name} className="py-3">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className={`w-full text-left flex items-center ${
                            selectedProduct?.name === product.name ? 
                            'text-brand font-medium' : 'text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="w-10 h-10 mr-3 object-contain" 
                          />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-xs text-gray-500">R$ {product.price}</p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg shadow">
                {selectedProduct ? (
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold dark:text-white">Editar Produto</h2>
                      <button 
                        onClick={handleSaveProduct}
                        className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-md flex items-center gap-2"
                      >
                        <Save className="h-4 w-4" />
                        Salvar Alterações
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="flex flex-col items-center">
                          <img 
                            src={editedProduct.imageUrl} 
                            alt={editedProduct.name}
                            className="w-40 h-40 object-contain border rounded-md p-2 mb-2"
                          />
                          <label className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-white px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-600 flex items-center gap-2 mt-2">
                            <Upload className="h-4 w-4" />
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
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Nome do Produto
                            </label>
                            <input
                              type="text"
                              value={editedProduct.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-brand focus:border-brand dark:bg-slate-700 dark:text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Descrição Curta
                            </label>
                            <input
                              type="text"
                              value={editedProduct.info}
                              onChange={(e) => handleInputChange('info', e.target.value)}
                              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-brand focus:border-brand dark:bg-slate-700 dark:text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Preço Normal (R$)
                            </label>
                            <input
                              type="text"
                              value={editedProduct.normalPrice}
                              onChange={(e) => handleInputChange('normalPrice', e.target.value)}
                              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-brand focus:border-brand dark:bg-slate-700 dark:text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Preço Promocional (R$)
                            </label>
                            <input
                              type="text"
                              value={editedProduct.price}
                              onChange={(e) => handleInputChange('price', e.target.value)}
                              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-brand focus:border-brand dark:bg-slate-700 dark:text-white"
                            />
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h3 className="text-lg font-medium mb-3 dark:text-white">Links de Operadoras</h3>
                          {editedProduct.linkOperadoras && editedProduct.linkOperadoras.map((link, index) => (
                            <div key={index} className="grid grid-cols-3 gap-3 mb-3">
                              <div>
                                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                                  Operadora
                                </label>
                                <input
                                  type="text"
                                  value={link.name}
                                  onChange={(e) => handleLinkOperadoraChange(index, 'name', e.target.value)}
                                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-brand focus:border-brand dark:bg-slate-700 dark:text-white"
                                />
                              </div>
                              <div className="col-span-2">
                                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                                  URL
                                </label>
                                <input
                                  type="text"
                                  value={link.url}
                                  onChange={(e) => handleLinkOperadoraChange(index, 'url', e.target.value)}
                                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-brand focus:border-brand dark:bg-slate-700 dark:text-white"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6">
                          <h3 className="text-lg font-medium mb-3 dark:text-white">Especificações</h3>
                          {editedProduct.specifications && editedProduct.specifications.map((spec, index) => (
                            <div key={index} className="grid grid-cols-3 gap-3 mb-3">
                              <div>
                                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                                  Tipo
                                </label>
                                <input
                                  type="text"
                                  value={spec.type}
                                  onChange={(e) => handleSpecificationChange(index, 'type', e.target.value)}
                                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-brand focus:border-brand dark:bg-slate-700 dark:text-white"
                                />
                              </div>
                              <div className="col-span-2">
                                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                                  Texto
                                </label>
                                <input
                                  type="text"
                                  value={spec.text}
                                  onChange={(e) => handleSpecificationChange(index, 'text', e.target.value)}
                                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-brand focus:border-brand dark:bg-slate-700 dark:text-white"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-80">
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-2 dark:text-white">Selecione um produto para editar</h3>
                      <p className="text-gray-500 dark:text-gray-400">Escolha um produto da lista à esquerda para começar</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
```


---
### 📄 Arquivo: `src/app/maquininhas/point-air/layout.js`

```javascript
export const metadata = {
    title: "Point Air",
    description: "Escolha a maquininha perfeita para o seu negócio",
  };
  
  export default function Layout({ children }) {
    return (
      <>
        {children}
      </>
    );
  }
```


---
### 📄 Arquivo: `src/app/maquininhas/point-air/page.js`

```javascript
import React from 'react';
import CardFlag from '../../../components/CardFlag';
import SectionTaxas from '../../../components/SectionTaxas';
import SectionPointAir from '../../../components/SectionPointAir';
import SectionCredito from '../../../components/SectionCredito';
import SectionLinkVendas from '../../../components/SectionLinkVendas';
import TestimonialSlider from '../../../components/TestimonialSlider';
import HeroSectionPointAir from '../../../components/points/HeroSectionPointAir';
import SectionConta from '../../../components/SectionConta';
import SectionNovaAir from '../../../components/SectionNovaAir';
import MenuPopover from '../../../components/MenuPopover';


export default function Home() {
  return (
    <div className="w-screen m-0 p-0">
      <MenuPopover /> 
      <HeroSectionPointAir />
      <CardFlag />
      <SectionTaxas />
      <SectionNovaAir />
      <SectionPointAir />
      <SectionConta />
      <SectionCredito />
      <SectionLinkVendas />
      <TestimonialSlider />
      <section className="relative bg-brand transition duration-500 dark:bg-brand-dark">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-white sm:text-2xl">Crescer só depende de você</h2>
          <a href="/comprar/point-air" className="relative inline-flex items-center justify-center shrink-0 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-8 h-12 w-60 bg-white px-4 text-base font-medium text-brand-dark hover:bg-slate-100 dark:text-brand-darker">Comprar Point Air</a>
        </div>
      </section>
    </div>
  );
}
```


---
### 📄 Arquivo: `src/app/maquininhas/point-mini-nfc-2/layout.js`

```javascript
export const metadata = {
    title: "Point Mini NFC 2",
    description: "Escolha a maquininha perfeita para o seu negócio",
  };
  
  export default function Layout({ children }) {
    return (
      <>
        {children}
      </>
    );
  }
```


---
### 📄 Arquivo: `src/app/maquininhas/point-mini-nfc-2/page.js`

```javascript
import React from 'react';
import CardFlag from '../../../components/CardFlag';
import SectionTaxas from '../../../components/SectionTaxas';
import SectionPointAir from '../../../components/SectionPointAir';
import SectionCredito from '../../../components/SectionCredito';
import SectionLinkVendas from '../../../components/SectionLinkVendas';
import TestimonialSlider from '../../../components/TestimonialSlider';
import HeroSectionPointMini from '../../../components/points/HeroSectionPointMini';
import SectionConta from '../../../components/SectionConta';
import SectionPointMini from '../../../components/SectionPointMini';
import MenuPopover from '../../../components/MenuPopover';



export default function Home() {
  return (
    <div className="w-screen m-0 p-0">
      <MenuPopover />
      <HeroSectionPointMini />
      <CardFlag />
      <SectionTaxas />
      <SectionPointMini />
      <SectionConta />
      <SectionCredito />
      <SectionLinkVendas />
      <TestimonialSlider />
      <section className="relative bg-brand transition duration-500 dark:bg-brand-dark">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-white sm:text-2xl">Crescer só depende de você</h2>
          <a href="/comprar/point-mini" className="relative inline-flex items-center justify-center shrink-0 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-8 h-12 w-60 bg-white px-4 text-base font-medium text-brand-dark hover:bg-slate-100 dark:text-brand-darker">Comprar Point Mini NFC 2 NFC2</a>
        </div>
      </section>
    </div>
  );
}
```


---
### 📄 Arquivo: `src/app/maquininhas/point-pro-3/layout.js`

```javascript
export const metadata = {
    title: "Point Pro 3",
    description: "Escolha a maquininha perfeita para o seu negócio",
  };
  
  export default function Layout({ children }) {
    return (
      <>
        {children}
      </>
    );
  }
```


---
### 📄 Arquivo: `src/app/maquininhas/point-pro-3/page.js`

```javascript
import React from 'react';
import CardFlag from '../../../components/CardFlag';
import SectionTaxas from '../../../components/SectionTaxas';
import SectionPointPro2 from '../../../components/SectionPointPro2';
import SectionCredito from '../../../components/SectionCredito';
import SectionLinkVendas from '../../../components/SectionLinkVendas';
import TestimonialSlider from '../../../components/TestimonialSlider';
import HeroSectionPointPro from '../../../components/points/HeroSectionPointPro';
import SectionConta from '../../../components/SectionConta';
import MenuPopover from '../../../components/MenuPopover';



export default function Home() {
  return (
    <div className="w-screen m-0 p-0">
     <MenuPopover /> 
      <HeroSectionPointPro />
      <CardFlag />
      <SectionTaxas />
      <SectionPointPro2 />
      <SectionConta />
      <SectionCredito />
      <SectionLinkVendas />
      <TestimonialSlider />
      <section className="relative bg-brand transition duration-500 dark:bg-brand-dark">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-white sm:text-2xl">Crescer só depende de você</h2>
          <a href="/comprar/point-pro-3" className="relative inline-flex items-center justify-center shrink-0 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-8 h-12 w-60 bg-white px-4 text-base font-medium text-brand-dark hover:bg-slate-100 dark:text-brand-darker">Comprar Point Pro 3</a>
        </div>
      </section>
    </div>
  );
}
```


---
### 📄 Arquivo: `src/app/maquininhas/point-smart-2/layout.js`

```javascript
export const metadata = {
  title: "Point Smart 2",
  description: "Escolha a maquininha perfeita para o seu negócio",
};

export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
```


---
### 📄 Arquivo: `src/app/maquininhas/point-smart-2/page.js`

```javascript
// Exemplo para src/app/maquininhas/point-smart-2/page.js
import React from 'react';
import HeroSectionPointSmart2 from '../../../components/points/HeroSectionPointSmart';
import CardFlag from '../../../components/CardFlag';
import SectionTaxas from '../../../components/SectionTaxas';
import SectionConta from '../../../components/SectionConta';
import SectionCredito from '../../../components/SectionCredito';
import SectionLinkVendas from '../../../components/SectionLinkVendas';
import TestimonialSlider from '../../../components/TestimonialSlider';
import MenuPopover from '../../../components/MenuPopover';
import FeedbackForm from '../../../components/FeedbackForm'; // Adicionado
import ProductDetail from '../../../components/ProductDetail'; // Adicionado
import ReviewsAndQuestions from '../../../components/ReviewsAndQuestions'; // Adicionado
import { fetchProductData } from '../../../data/productData'; // Adicionado

export default function Home() {
  const productData = fetchProductData();
  const pointSmart = productData.find(product => product.name === "Point Smart 2");

  return (
    <div className="w-screen m-0 p-0">
      <MenuPopover /> 
      <HeroSectionPointSmart2 />
      
      {/* Adicionado componente ProductDetail para mais informações sobre o produto */}
      {pointSmart && <ProductDetail product={pointSmart} />}
      
      <CardFlag />
      <SectionTaxas />
      <SectionConta />
      <SectionCredito />
      <SectionLinkVendas />
      
      {/* Adicionados componentes de avaliações e feedback */}
      {pointSmart && <ReviewsAndQuestions productName={pointSmart.name} />}
      <div className="container mx-auto py-8">
        <FeedbackForm />
      </div>
      
      <TestimonialSlider />
      <section className="relative bg-brand transition duration-500 dark:bg-brand-dark">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-white sm:text-2xl">Crescer só depende de você</h2>
          <a href="/comprar/point-smart-2" className="relative inline-flex items-center justify-center shrink-0 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-8 h-12 w-60 bg-white px-4 text-base font-medium text-brand-dark hover:bg-slate-100 dark:text-brand-darker">Comprar Point Smart 2</a>
        </div>
      </section>
    </div>
  );
}
```


---
### 📄 Arquivo: `src/app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 100%;
  --foreground: 228.6 84% 4.9%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 228.6 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 228.6 84% 4.9%;
  --border: 214.3 31.8% 91.4%; 
  --input: 214.3 31.8% 91.4%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --ring: 215 20.2% 65.1%;
  --brand-lighter: 198.1 80% 66.7%;
  --brand-light: 198.5 80.5% 55.7%;
  --brand: 198.2 100% 44.5%;
  --brand-dark: 198.5 100% 35.7%;
  --brand-darker: 198.1 100% 26.7%;
  --swiper-theme-color: #007aff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

@media (min-width: 640px) {
  .navigation {
      display: flex;
      align-items: center;
      justify-content: center;
  }
}
.navigation.slide-prev {
  left: .75rem;
}

:host, html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
}

body {
  min-height: 100vh;
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "rlig" 1, "calt" 1;
}

/* reset css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  .container {
    max-width: 1024px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem;
    
  }
  @media (max-width: 1024px) {
    .container {
      max-width:90%;
      margin-right: auto;
      margin-left: auto;
      padding-right: 1rem;
      padding-left: 1rem;
    }
}
  @media (max-width: 768px) {
    .container {
      max-width:100%;
      margin-right: auto;
      margin-left: auto;
      padding-right: 1rem;
      padding-left: 1rem;
    }
}
  .bg-primary-foreground {
    background-color: hsl(var(--primary-foreground));
  }
  .navigation {
    position: absolute;
    top: 50%;
    z-index: 10;
    display: none;
    height: 2.5rem;
    width: 2.5rem;
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    border-radius: 9999px;
    border-width: 1px;
    color: hsl(var(--brand));
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 8px 10px -6px rgba(0, 0, 0, .1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.text-accent {
  color: hsl(var(--accent));
}
.bg-background {
  background-color: hsl(var(--background));
}
@media (min-width: 768px) {
  .md\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
}
```


---
### 📄 Arquivo: `src/app/layout.js`

```javascript
// src/app/layout.js
import "./globals.css";
import Script from 'next/script';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Maquininhas Point | Revendedor autorizado Point Enoc Maquininhas",
  description: "Escolha a maquininha perfeita para o seu negócio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><rect width='36' height='36' fill='%23009EE3' rx='5.273' ry='5.273'></rect><rect width='27.984' height='12.023' x='4.008' y='4.008' fill='%23A5F3FC' rx='1.758' ry='1.758'></rect><g fill='%232E3441'><circle cx='6.012' cy='21.973' r='2.004'></circle><circle cx='6.012' cy='29.988' r='2.004'></circle><circle cx='14.027' cy='21.973' r='2.004'></circle><circle cx='14.027' cy='29.988' r='2.004'></circle><circle cx='21.973' cy='21.973' r='2.004'></circle><circle cx='21.973' cy='29.988' r='2.004'></circle><circle cx='29.988' cy='21.973' r='2.004'></circle><circle cx='29.988' cy='29.988' r='2.004'></circle></g></svg>" type="image/svg+xml" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '546621900705567');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=546621900705567&ev=PageView&noscript=1"
          />
        </noscript>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '546621900705567');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=546621900705567&ev=PageView&noscript=1"
          />
        </noscript>
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('CS29J6BC77UF26CUDJV0');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```


---
### 📄 Arquivo: `src/app/page.js`

```javascript
import React from 'react';
import MercadoPagoHero from '../components/MercadoPagoHero';
import Produtos from '../components/Produtos';
import CardFlag from '../components/CardFlag';
import SectionTaxas from '../components/SectionTaxas';
import SectionConta from '../components/SectionConta';
import SectionCredito from '../components/SectionCredito';
import SectionLinkVendas from '../components/SectionLinkVendas';
import TestimonialSlider from '../components/TestimonialSlider';
import ProductComparison from '../components/ProductComparison'; // Adicionado

export default function Home() {
  return (
    <div className="w-screen m-0 p-0">
      <MercadoPagoHero />
      <Produtos />
      <ProductComparison /> {/* Componente adicionado */}
      <CardFlag />
      <SectionTaxas />
      <SectionConta />
      <SectionCredito />
      <SectionLinkVendas />
      <TestimonialSlider />
      <section className="relative bg-brand transition duration-500 dark:bg-brand-dark">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-white sm:text-2xl">Crescer só depende de você</h2>
          <a href="#modelos" className="relative inline-flex items-center justify-center shrink-0 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-8 h-12 w-60 bg-white px-4 text-base font-medium text-brand-dark hover:bg-slate-100 dark:text-brand-darker">Peça a sua</a>
        </div>
      </section>
    </div>
  );
}
```


---
### 📄 Arquivo: `src/components/cards/header/header.js`

*Conteúdo: [Vazio]*


---
### 📄 Arquivo: `src/components/cards/PointSmartCard.js`

```javascript
import React from 'react';
import Image from 'next/image';
import { ArrowRight, BatteryMedium, BellRing, CircleCheckBig, CreditCard, Dumbbell, Receipt, Ruler, Wifi } from 'lucide-react';

const PointSmartCard = () => {
  return (
    <div className="card relative rounded-lg rounded-tl-xl border bg-background p-4 pt-10 shadow">
      {/* Discount Badge */}
      <div className="absolute -left-px -top-px rounded-br-lg rounded-tl-lg border-b border-r bg-gradient-to-r from-[#1aa271] to-[#00b87d] px-2 py-1">
        <div className="flex items-center gap-1 text-xs font-medium text-white">
          <BellRing size={14} strokeWidth={2.5} />
          <span>70% OFF</span>
          <small>|</small>
          <span className="uppercase tracking-wide text-yellow-200">Frete Grátis</span>
        </div>
      </div>

      {/* Point Logo */}
      <div className="absolute -top-4 right-4 sm:right-2">
        <Image src="/images/point-logo.svg" alt="Point Logo" width={50} height={50} />
      </div>

      {/* Main Content */}
      <div className="relative flex gap-4 lg:block">
        {/* New Badge */}
        <div className="absolute left-0 top-0 flex items-center gap-1 rounded-br-md rounded-tl-md bg-rose-500 px-2 py-0.5 text-xs font-medium text-white lg:rounded">
          <BellRing size={14} strokeWidth={2.5} />
          <span>NOVA</span>
        </div>

        {/* Product Image */}
        <div className="flex w-2/5 shrink-0 items-center justify-center rounded-md bg-muted p-2 sm:h-[184px] lg:mx-auto lg:h-full lg:w-full lg:bg-transparent py-6 sm:py-2">
          <Image
            src="/images/devices/device-144.webp"
            alt="Point Smart 2"
            width={70}
            height={122}
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center gap-4 lg:text-center">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold leading-tight">Point Smart 2</h2>
            <h3 className="text-sm leading-tight text-muted-foreground">A maquininha mais avançada</h3>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground line-through lg:text-lg">R$ 840,80</span>
            <span className="text-lg font-semibold lg:text-2xl">R$ 249,90</span>
            <span className="text-xs lg:text-sm">ou 12x R$ 20,82 sem juros</span>
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <a
        href="https://pay.pointmaquininha.com/?pref_id=179504451-f9165193-a20a-40de-ba61-f4fab0464d5e"
        className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand hover:bg-brand-dark text-white py-2 px-4 mt-5 h-12 w-full text-base"
      >
        Comprar agora
      </a>

      <hr className="my-5" />

      {/* Features List */}
      <FeaturesList />

      <hr className="my-5" />

      {/* Specifications List */}
      <SpecificationsList />

      <hr className="my-5" />

      {/* More Info Button */}
      <a
        className="relative inline-flex items-center justify-center shrink-0 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4 w-full"
        href="/point-smart-2"
      >
        Mais informações
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

const FeaturesList = () => (
  <ul className="mr-2 flex flex-col gap-3">
    <FeatureItem icon={<CircleCheckBig />} text="Aceita débito, crédito, código QR e Pix" />
    <FeatureItem icon={<CircleCheckBig />} text="Inclui conta digital e cartão gratuito" />
    <FeatureItem icon={<CircleCheckBig />} text="3 anos de garantia" />
  </ul>
);

const SpecificationsList = () => (
  <ul className="mr-2 flex flex-col gap-3">
    <FeatureItem icon={<Wifi />} text="Plano de dados grátis e Wi-Fi" />
    <FeatureItem icon={<Receipt />} text="Imprime o comprovante" />
    <FeatureItem icon={<CreditCard />} text="Cartão com chip, tarja magnética e por aproximação" />
    <FeatureItem icon={<BatteryMedium />} text="72 horas de bateria" />
    <FeatureItem icon={<Ruler />} text="20,1cm(C) x 8cm(L) x 6,2cm(A)" />
    <FeatureItem icon={<Dumbbell />} text="440 gramas" />
  </ul>
);

const FeatureItem = ({ icon, text }) => (
  <li className="flex items-center">
    {React.cloneElement(icon, { className: "h-5 w-5 shrink-0 text-brand" })}
    <span className="ml-3 text-sm leading-tight">{text}</span>
  </li>
);

export default PointSmartCard;
```


---
### 📄 Arquivo: `src/components/comprar/ConfiguraPedido.js`

```javascript
// src/components/comprar/ConfiguraPedido.js (versão aprimorada)
'use client';
import React, { useState, useEffect } from 'react';
import { fetchProductData } from "../../data/productData";
import InternetProviderSelector from "./InternetProviderSelector";
import OrderConfiguration from "./OrderConfiguration";
import { Check, ChevronRight, ExternalLink } from 'lucide-react';

const ConfiguraPedido = ({ productModel }) => {
    const [selectedProvider, setSelectedProvider] = useState('36'); // Default to Vivo
    const [productData, setProductData] = useState(null);
    const [buyLink, setBuyLink] = useState('');
    const [showProviderSelector, setShowProviderSelector] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const modelsWithoutProvider = ["Point Mini NFC 2"];

    useEffect(() => {
        const allProductData = fetchProductData();
        const currentProduct = allProductData.find(product => product.name === productModel);
        setProductData(currentProduct);
        if (currentProduct) {
            const isPointMiniNFC2 = currentProduct.name === "Point Mini NFC 2";
            setShowProviderSelector(!modelsWithoutProvider.includes(currentProduct.name));
            updateBuyLink(currentProduct, '36', isPointMiniNFC2);
        }
    }, [productModel]);

    const updateBuyLink = (product, providerId, isPointMiniNFC2) => {
        if (product) {
            if (isPointMiniNFC2) {
                setBuyLink(product.linkPedido || product.urlBuy);
            } else if (product.linkOperadoras && Array.isArray(product.linkOperadoras)) {
                const providerName = getProviderName(providerId);
                const providerLink = product.linkOperadoras.find(op => op.name.toLowerCase() === providerName.toLowerCase());
                setBuyLink(providerLink ? providerLink.url : product.urlBuy);
            } else {
                setBuyLink(product.urlBuy || '');
            }
        }
    };

    const getProviderName = (id) => {
        switch(id) {
            case '36': return 'Vivo';
            case '23': return 'Claro';
            case '32': return 'TIM';
            default: return '';
        }
    };

    const handleProviderChange = (providerId) => {
        setSelectedProvider(providerId);
        updateBuyLink(productData, providerId, productData.name === "Point Mini NFC 2");
    };

    const nextStep = () => {
        if (currentStep === 1) {
            // Pular a etapa 2 (endereço) e ir diretamente para a etapa 3 (pagamento)
            setCurrentStep(3);
        } else if (currentStep === 3) {
            // Último passo, redirecionar para o link de compra
            if (buyLink) {
                window.location.href = buyLink;
            }
        }
    };

    const prevStep = () => {
        if (currentStep === 3) {
            // Voltar da etapa 3 para a etapa 1, já que pulamos a etapa 2
            setCurrentStep(1);
        } else {
            setCurrentStep(currentStep - 1);
        }
    };

    if (!productData) return null;

    return (
        <section className="min-h-screen">
            <div className="bg-[#ededed] dark:bg-slate-900 h-full py-20 transition-colors">
                <div className="container mx-auto">
                    {/* Progress Steps - Mantemos 3 passos na interface, mas pulamos o 2 no fluxo */}
                    <div className="max-w-3xl mx-auto mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-brand text-white' : 'bg-gray-300 text-gray-600'}`}>
                                    {currentStep > 1 ? <Check size={20} /> : 1}
                                </div>
                                <span className="text-sm mt-2 dark:text-white">Produto</span>
                            </div>
                            <div className="flex-1 h-1 bg-gray-300 mx-2">
                                <div className={`h-full ${currentStep >= 3 ? 'bg-brand' : 'bg-gray-300'}`} style={{ width: `${currentStep > 1 ? '100%' : '0%'}` }}></div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-brand text-white' : 'bg-gray-300 text-gray-600'}`}>
                                    {currentStep > 3 ? <Check size={20} /> : 2}
                                </div>
                                <span className="text-sm mt-2 dark:text-white">Pagamento</span>
                            </div>
                        </div>
                    </div>

                    {currentStep === 1 && (
                        <>
                            <OrderConfiguration {...productData} />
                            {showProviderSelector && (
                                <div className="mt-5">
                                    <InternetProviderSelector
                                        selectedProvider={selectedProvider}
                                        onProviderChange={handleProviderChange}
                                    />
                                </div>
                            )}
                            <div className="max-w-3xl mx-auto overflow-hidden mt-4">
                                <button 
                                    onClick={nextStep}
                                    className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand hover:bg-brand-dark text-white py-2 px-4 mt-5 h-12 w-full text-base"
                                >
                                    Continuar para Pagamento <ChevronRight size={20} className="ml-2" />
                                </button>
                            </div>
                        </>
                    )}

                    {currentStep === 3 && (
                        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 overflow-hidden rounded-lg shadow transition-colors">
                            <h2 className="text-lg font-medium p-4 dark:text-white">Método de Pagamento</h2>
                            
                            <div className="p-4 flex flex-col gap-4">
                                <div className="border rounded-md p-4">
                                    <h3 className="font-medium mb-2 dark:text-white">Ir para Checkout Seguro</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                        Você será redirecionado para uma página de pagamento segura para finalizar sua compra.
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                        Maquininha selecionada: <strong>{productData.name}</strong>
                                        {showProviderSelector && (
                                            <> com chip <strong>{getProviderName(selectedProvider)}</strong></>
                                        )}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        Você fornecerá detalhes de endereço e forma de pagamento na próxima tela.
                                    </p>
                                </div>
                                
                                <div className="flex justify-between mt-4">
                                    <button 
                                        onClick={prevStep}
                                        className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 h-12 w-1/4 text-base"
                                    >
                                        Voltar
                                    </button>
                                    <a 
                                        href={buyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand hover:bg-brand-dark text-white py-2 px-4 h-12 w-2/3 text-base"
                                    >
                                        Finalizar Pedido <ExternalLink size={20} className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ConfiguraPedido;
```


---
### 📄 Arquivo: `src/components/comprar/InternetProviderSelector.js`

```javascript
'use client'
const InternetProviderSelector = ({ selectedProvider, onProviderChange }) => {
  const providers = [
      { id: '36', name: 'Chip Vivo', description: 'Plano de dados grátis', logo: '/chips/vivo.png', recommended: true },
      { id: '23', name: 'Chip Claro', description: 'Plano de dados grátis', logo: '/chips/claro.png' },
      { id: '32', name: 'Chip TIM', description: 'Plano de dados grátis', logo: '/chips/tim.png' },
  ];

  return (
      <div className="max-w-3xl mx-auto bg-white overflow-hidden">
          <h2 className="text-lg font-medium p-4">Escolha um provedor de internet para a sua Point</h2>
          <p className="text-sm text-gray-400 px-4 py-2">Estas são as recomendações de conexão com a internet para o seu endereço salvo.</p>
          <ul className="divide-y divide-gray-200 shadow-lg rounded-lg border">
              {providers.map((provider) => (
                  <li
                      key={provider.id}
                      className={`flex items-center p-4 ${selectedProvider === provider.id ? 'bg-gray-50' : ''}`}
                  >
                      <input
                          type="radio"
                          id={`provider-${provider.id}`}
                          name="provider"
                          value={provider.id}
                          checked={selectedProvider === provider.id}
                          onChange={() => onProviderChange(provider.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label htmlFor={`provider-${provider.id}`} className="ml-3 flex flex-1 items-center">
                          <img src={provider.logo} alt={provider.name} className="w-12 h-12 object-contain mr-3" />
                          <div>
                              <p className="font-medium text-gray-900">{provider.name}</p>
                              <p className="text-sm text-gray-500">{provider.description}</p>
                          </div>
                      </label>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default InternetProviderSelector;
```


---
### 📄 Arquivo: `src/components/comprar/OrderConfiguration.js`

```javascript
import { ChevronDownIcon, TagIcon } from 'lucide-react';

const OrderConfiguration = ({ price, name, imageUrl, normalPrice }) => {
    const desconto = parseFloat(normalPrice) - parseFloat(price);



    return (
        <div className="max-w-3xl mx-auto bg-white  overflow-hidden">
            <h2 className="text-xl font-medium p-4 ">Configure o seu pedido</h2>

            <div className="p-4">
                <div className="bg-emerald-500 text-white p-2 rounded-t-lg flex items-center justify-center">
                    <TagIcon className="w-5 h-5 mr-2" />
                    <span className="font-extralight text-sm">Preço especial</span>
                </div>

                <div className="flex items-center p-4 bg-white rounded-b-lg border border-t-0 border-gray-200">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-24 h-auto mr-6"
                    />
                    <div className="flex-grow flex flex-col gap-4 md:flex-row lg:flex-row xl:flex-row sm:flex-row justify-between">
                        <div className='flex flex-col '>
                            <h3 className="text-lg font-medium mb-2">{name}</h3>
                            <div className=''>
                            <span className='text-[0.6rem]' >Preço:</span>
                                <p className="text-gray-500 text-xs ">
                                    <s>R$: {normalPrice}</s>
                                    
                                </p>
                            </div>
                          
                            <span className=''></span>
                            <div className='mt-4'>
                                <span className='text-[0.6rem]' >Você Paga:</span>
                                <p className='text-xl font-semibold font-inter  '>R$: {price}
                                
                                </p>
                            </div>
                            
                        </div>
                        <div className="max-w-xs">
                            <label htmlFor="quantity" className="block text-sm font-extralight text-gray-700 mb-1">
                                Quantidade:
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="quantity"
                                    name="quantity"
                                    value="1 unidade"
                                    disabled
                                    className="block w-full rounded-md border-gray-300 bg-gray-100 py-2 pl-3 pr-10 text-gray-500 focus:border-gray-300 focus:outline-none focus:ring-0 sm:text-sm"
                                    readOnly
                                />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfiguration;
```


---
### 📄 Arquivo: `src/components/points/HeroSectionPointAir.js`

```javascript
import Image from "next/image";
import { fetchProductData } from "../../data/productData";

const HeroSectionPointAir = () => {
    const productData = fetchProductData();
    const pointAir = productData.find(product => product.name === "Point Air");
    const priceAir = pointAir ? parseFloat(pointAir.price.replace(',', '.')) : null;
    const normalPriceAir = pointAir ? parseFloat(pointAir.normalPrice.replace(',', '.')) : null;
    const discountPro = priceAir && normalPriceAir ? (normalPriceAir - priceAir) : null;

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };


    return (
        <section>
            <div className="relative bg-gradient-to-b py-8 md:bg-gradient-to-br md:py-12 from-[#167be4] to-[#092653] mt-16">
                <div className="card container grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
                        <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand border-transparent hover:bg-brand/80 uppercase text-white">Point Air</div>
                        <h1 className="mt-4 text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                            Você tem um<br /> desconto de R$&nbsp;{formatPrice(discountPro)}<br />na Point Air
                        </h1>
                        <div className="mt-8 flex flex-col text-white">
                            <span className="text-xl line-through">R$&nbsp;{formatPrice(normalPriceAir)}</span>
                            <span className="text-3xl font-semibold">R$&nbsp;{formatPrice(priceAir)}</span>
                        </div>
                        <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-6"><a href="/comprar/point-air" className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary-foreground dark:bg-primary text-primary dark:text-primary-foreground hover:bg-primary-foreground/90 dark:hover:bg-primary/90 h-12 px-8 text-base md:w-full md:max-w-[210px]">Comprar agora</a><div className="flex items-center gap-3 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck shrink-0"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg><span className="text-sm">Frete grátis para todo o Brasil</span></div></div>
                    </div>
                    <div className="flex justify-center md:h-[450px]">
                        <Image
                            alt="hero-image"
                            fetchPriority="high"
                            width={450}
                            height={450}
                            decoding="async"
                            data-nimg="1"
                            className="object-contain"
                            src="/images/point/device-62.webp"
                            style={{ color: 'transparent' }}
                        />
                    </div>
               
                </div>
                <ul className="card container flex flex-col flex-wrap justify-center gap-3 pt-8 text-sm leading-tight text-white sm:flex-row md:gap-x-8"><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi shrink-0"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg><p>Plano de dados grátis e Wi‑Fi</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card shrink-0"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg><p>Aceita cartões, aproximação, QR e Pix</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square shrink-0"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg><p>Envia o comprovante por SMS</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-medium shrink-0"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line><line x1="6" x2="6" y1="11" y2="13"></line><line x1="10" x2="10" y1="11" y2="13"></line></svg><p>Inclui bateria que dura o dia todo</p></li></ul>
            </div>
        </section>
    );
}

export default HeroSectionPointAir;
```


---
### 📄 Arquivo: `src/components/points/HeroSectionPointMini.js`

```javascript
import Image from "next/image";
import { fetchProductData } from "../../data/productData";

const HeroSectionPointAir = () => {
    const productData = fetchProductData();
    const pointMini = productData.find(product => product.name === "Point Mini NFC 2");
    const priceMini = pointMini ? parseFloat(pointMini.price.replace(',', '.')) : null;
    const normalPriceMini = pointMini ? parseFloat(pointMini.normalPrice.replace(',', '.')) : null;
    const discountPro = priceMini && normalPriceMini ? (normalPriceMini - priceMini) : null;

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };


    return (
        
        <section>
            <div className="relative bg-gradient-to-b py-8 md:bg-gradient-to-br md:py-12 from-[#0a0080] to-[#00bcff] mt-16">
                <div className="card container grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
                        <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand border-transparent hover:bg-brand/80 uppercase text-white">Point Mini NFC 2 NFC2</div>
                        <h1 className="mt-4 text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                            Você tem um<br /> desconto de R$&nbsp;{formatPrice(discountPro)}<br />na Point Mini NFC 2 NFC2
                        </h1>
                        <div className="mt-8 flex flex-col text-white">
                            <span className="text-xl line-through">R$&nbsp;{formatPrice(normalPriceMini)}</span>
                            <span className="text-3xl font-semibold">R$&nbsp;{formatPrice(priceMini)}</span>
                        </div>
                        <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-6"><a href="/comprar/point-mini-nfc-2" className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary-foreground dark:bg-primary text-primary dark:text-primary-foreground hover:bg-primary-foreground/90 dark:hover:bg-primary/90 h-12 px-8 text-base md:w-full md:max-w-[210px]">Comprar agora</a><div className="flex items-center gap-3 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck shrink-0"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg><span className="text-sm">Frete grátis para todo o Brasil</span></div></div>
                    </div>
                    <div className="flex justify-center md:h-[450px]">
                        <Image
                            alt="hero-image"
                            fetchPriority="high"
                            width={450}
                            height={450}
                            decoding="async"
                            data-nimg="1"
                            className="object-contain"
                            src="/images/point/device-45.webp"
                            style={{ color: 'transparent' }}
                        />
                    </div>
               
                </div>
                <ul className="card container flex flex-col flex-wrap justify-center gap-3 pt-8 text-sm leading-tight text-white sm:flex-row md:gap-x-8"><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi shrink-0"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg><p>Plano de dados grátis e Wi‑Fi</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb shrink-0"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg><p>Visor com luz automática</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><p>Envia o comprovante por e-mail e SMS</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-medium shrink-0"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line><line x1="6" x2="6" y1="11" y2="13"></line><line x1="10" x2="10" y1="11" y2="13"></line></svg><p>Até 15 horas de bateria</p></li></ul>
            </div>
        </section>
    );
}

export default HeroSectionPointAir;
```


---
### 📄 Arquivo: `src/components/points/HeroSectionPointPro.js`

```javascript
import Image from "next/image";
import { fetchProductData } from "../../data/productData";

const HeroSectionPointPro = () => {
    const productData = fetchProductData();
    const pointPro = productData.find(product => product.name === "Point Pro 3");
    const pricePro = pointPro ? parseFloat(pointPro.price.replace(',', '.')) : null;
    const normalPricePro = pointPro ? parseFloat(pointPro.normalPrice.replace(',', '.')) : null;
    const discountPro = pricePro && normalPricePro ? (normalPricePro - pricePro) : null;

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };


    return (
        <section>
            <div className="relative bg-gradient-to-b py-8 md:bg-gradient-to-br md:py-12 from-[#167be4] to-[#092653] mt-16">
                <div className="card container grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
                        <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand border-transparent hover:bg-brand/80 uppercase text-white">Point Pro 3</div>
                        <h1 className="mt-4 text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                            Você tem um<br /> desconto de R$&nbsp;{formatPrice(discountPro)}<br />na Point Pro
                        </h1>
                        <div className="mt-8 flex flex-col text-white">
                            <span className="text-xl line-through">R$&nbsp;{formatPrice(normalPricePro)}</span>
                            <span className="text-3xl font-semibold">R$&nbsp;{formatPrice(pricePro)}</span>
                        </div>
                        <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-6"><a href="/comprar/point-pro-3" className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary-foreground dark:bg-primary text-primary dark:text-primary-foreground hover:bg-primary-foreground/90 dark:hover:bg-primary/90 h-12 px-8 text-base md:w-full md:max-w-[210px]">Comprar agora</a><div className="flex items-center gap-3 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck shrink-0"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg><span className="text-sm">Frete grátis para todo o Brasil</span></div></div>
                    </div>
                    <div className="flex justify-center md:h-[450px]">
                        <Image
                            alt="hero-image"
                            fetchPriority="high"
                            width={450}
                            height={450}
                            decoding="async"
                            data-nimg="1"
                            className="object-contain"
                            src="/images/point/device-28.webp"
                            style={{ color: 'transparent' }}
                        />
                    </div>
               
                </div>
                <ul className="card container flex flex-col flex-wrap justify-center gap-3 pt-8 text-sm leading-tight text-white sm:flex-row md:gap-x-8">
                        <li className="flex flex-1 items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi shrink-0"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
                            <p>Plano de dados grátis e Wi‑Fi</p>
                        </li>
                        <li className="flex flex-1 items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card shrink-0"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line>
                            </svg>
                            <p>Aceita cartões, aproximação, QR e Pix</p>
                        </li>
                        <li className="flex flex-1 items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" width="24" height="24" strokeWidth="2" className="shrink-0"><ellipse cx="8" cy="5" rx="7" ry="4"></ellipse><path d="M1 5v12c0 2.21 3.13 4 7 4s7-1.79 7-4V5"></path><ellipse cx="8" cy="5" rx="2" ry="1" stroke="none" fill="currentColor"></ellipse><path d="M8 1h13v16h-6"></path></svg>
                            <p>Imprime comprovantes e tem reposição de bobinas grátis</p>
                        </li>
                        <li className="flex flex-1 items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-medium shrink-0"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line><line x1="6" x2="6" y1="11" y2="13"></line><line x1="10" x2="10" y1="11" y2="13"></line>
                            </svg>
                            <p>Inclui bateria que dura o dia todo</p>
                        </li>
                    </ul>
            </div>
        </section>
    );
}

export default HeroSectionPointPro;
```


---
### 📄 Arquivo: `src/components/points/HeroSectionPointSmart.js`

```javascript
import Image from "next/image";
import { fetchProductData } from "../../data/productData";

const HeroSectionPointSmart = () => {
    const productData = fetchProductData();
    const pointSmart2 = productData.find(product => product.name === "Point Smart 2");
    const priceSmart = pointSmart2 ? pointSmart2.price : "Preço não disponível";

    return (
        <section>
            <div className="relative bg-gradient-to-b py-8 md:bg-gradient-to-br md:py-12 bg-slate-950 mt-16">
                <div className="card container grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
                        <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand border-transparent hover:bg-brand/80 uppercase text-white">Point Smart 2</div>
                        <h1 className="mt-4 text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                            Você tem um<br /> desconto de R$&nbsp;590,90<br />na Point Smart 2
                        </h1>
                        <div className="mt-8 flex flex-col text-white">
                            <span className="text-xl line-through">R$&nbsp;840,80</span>
                            <span className="text-3xl font-semibold">R$&nbsp;{priceSmart}</span>

                        </div>
                        <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-6"><a href="/comprar/point-smart-2" className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary-foreground dark:bg-primary text-primary dark:text-primary-foreground hover:bg-primary-foreground/90 dark:hover:bg-primary/90 h-12 px-8 text-base md:w-full md:max-w-[210px]">Comprar agora</a><div className="flex items-center gap-3 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck shrink-0"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg><span className="text-sm">Frete grátis para todo o Brasil</span></div></div>
                    </div>
                    <div className="flex justify-center md:h-[450px]">
                        <Image
                            alt="hero-image"
                            fetchPriority="high"
                            width={450}
                            height={450}
                            decoding="async"
                            data-nimg="1"
                            className="object-contain"
                            src="/images/point/device-144.webp"
                            style={{ color: 'transparent' }}
                        />
                    </div>
               
                </div>
                <ul className="card container flex flex-col flex-wrap justify-center gap-3 pt-8 text-sm leading-tight text-white sm:flex-row md:gap-x-8">
                        <li className="flex flex-1 items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi shrink-0"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
                            <p>Plano de dados grátis e Wi‑Fi</p>
                        </li>
                        <li className="flex flex-1 items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card shrink-0"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line>
                            </svg>
                            <p>Aceita cartões, aproximação, QR e Pix</p>
                        </li>
                        <li className="flex flex-1 items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" width="24" height="24" strokeWidth="2" className="shrink-0"><ellipse cx="8" cy="5" rx="7" ry="4"></ellipse><path d="M1 5v12c0 2.21 3.13 4 7 4s7-1.79 7-4V5"></path><ellipse cx="8" cy="5" rx="2" ry="1" stroke="none" fill="currentColor"></ellipse><path d="M8 1h13v16h-6"></path></svg>
                            <p>Imprime comprovantes e tem reposição de bobinas grátis</p>
                        </li>
                        <li className="flex flex-1 items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-medium shrink-0"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line><line x1="6" x2="6" y1="11" y2="13"></line><line x1="10" x2="10" y1="11" y2="13"></line>
                            </svg>
                            <p>Inclui bateria que dura até 3 dias</p>
                        </li>
                    </ul>
            </div>
        </section>
    );
}

export default HeroSectionPointSmart;
```


---
### 📄 Arquivo: `src/components/ui/tabs.js`

```javascript
"use client";

import * as React from "react";

const TabsContext = React.createContext(null);

export function Tabs({ defaultValue, value, onValueChange, children, ...props }) {
  const [tabValue, setTabValue] = React.useState(value || defaultValue || "");

  React.useEffect(() => {
    if (value !== undefined) {
      setTabValue(value);
    }
  }, [value]);

  const handleValueChange = React.useCallback(
    (newValue) => {
      setTabValue(newValue);
      onValueChange?.(newValue);
    },
    [onValueChange]
  );

  return (
    <TabsContext.Provider value={{ value: tabValue, onValueChange: handleValueChange }}>
      <div {...props} className={`tabs ${props.className || ""}`}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, ...props }) {
  return (
    <div
      role="tablist"
      {...props}
      className={`flex space-x-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800 ${props.className || ""}`}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, ...props }) {
  const { value: selectedValue, onValueChange } = React.useContext(TabsContext);
  const isSelected = selectedValue === value;

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      data-state={isSelected ? "active" : "inactive"}
      {...props}
      className={`px-3 py-1.5 text-sm font-medium transition-all rounded-md focus:outline-none 
        ${isSelected 
          ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-gray-100" 
          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        } ${props.className || ""}`}
      onClick={() => onValueChange(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, ...props }) {
  const { value: selectedValue } = React.useContext(TabsContext);
  const isSelected = selectedValue === value;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      data-state={isSelected ? "active" : "inactive"}
      {...props}
      className={`mt-2 ring-offset-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:ring-offset-gray-900 ${props.className || ""}`}
    >
      {children}
    </div>
  );
}
```


---
### 📄 Arquivo: `src/components/CardFlag.js`

```javascript
const CardFlag = () => {
    return (
        <section>
            <div className="card container space-y-8 py-16">
                <h2 className="text-center text-2xl font-semibold sm:text-3xl">Aceite os principais meios de pagamento</h2>
                <ul className="mx-auto flex max-w-2xl flex-wrap justify-center gap-4">
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="14.063" className="fill-[#172b85] dark:fill-current">
                            <path d="M43.022.32h-3.208c-.665 0-1.33.421-1.547 1.048l-5.534 12.589h3.873l.767-1.994h4.754l.448 1.994H46zM38.37 9.126l1.993-5.138 1.112 5.138h-3.093zM13.599.32 9.624 9.547 8.078 1.674C7.962.946 7.298.307 6.416.307H0v.421c1.265.205 2.492.601 3.655 1.15.447.205.741.652.882 1.15l2.99 10.904h3.976L17.472.32zM27.646 4.09c.115-.729.78-1.15 1.546-1.15 1.215-.103 2.544.102 3.656.626l.665-2.94A9.845 9.845 0 0 0 30.087 0c-3.655 0-6.301 1.892-6.301 4.512 0 1.994 1.879 3.042 3.208 3.668 1.432.626 1.994 1.048 1.879 1.674 0 .946-1.1 1.368-2.211 1.368-1.33 0-2.659-.32-3.873-.844l-.665 2.94c1.33.524 2.761.741 4.09.741 4.09.103 6.634-1.79 6.634-4.614 0-3.566-5.202-3.77-5.202-5.342z"></path>
                            <path d="m19.03.32-3.105 13.624h3.77L22.788.32z"></path>
                        </svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.707" height="22">
                <path fill="#ed0006" d="M18.354 19.372A11.167 11.167 0 0 1 11.132 22C4.984 22 0 17.074 0 11S4.984 0 11.132 0c2.756 0 5.277.99 7.222 2.628A11.167 11.167 0 0 1 25.574 0c6.149 0 11.133 4.925 11.133 11s-4.984 11-11.132 11a11.167 11.167 0 0 1-7.222-2.628z" />
                <path fill="#f9a000" d="M18.354 19.372A10.923 10.923 0 0 0 22.265 11c0-3.353-1.518-6.356-3.911-8.372A11.167 11.167 0 0 1 25.574 0c6.149 0 11.133 4.925 11.133 11s-4.984 11-11.132 11a11.167 11.167 0 0 1-7.222-2.628z" />
                <path fill="#ff5e00" d="M18.354 19.372A10.923 10.923 0 0 0 22.265 11c0-3.353-1.518-6.356-3.911-8.372A10.918 10.918 0 0 0 14.443 11c0 3.352 1.517 6.355 3.911 8.372z" />
              </svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="17.63"><path fill="#fc0" d="M7.17 3.897a5.188 5.188 0 0 1 6.727 3.884l3.556-.726A8.817 8.817 0 0 0 6.021.455z"></path><path fill="#00a0de" d="m2.975 15.42 2.404-2.72a5.175 5.175 0 0 1-1.75-3.883 5.175 5.175 0 0 1 1.75-3.882l-2.406-2.72A8.796 8.796 0 0 0 0 8.818a8.795 8.795 0 0 0 2.975 6.603z"></path><path fill="#ec3413" d="M13.897 9.857a5.185 5.185 0 0 1-6.728 3.879l-1.152 3.443a8.842 8.842 0 0 0 2.798.451 8.817 8.817 0 0 0 8.637-7.044z"></path><path fill="currentColor" d="M20.562 12.815a6.279 6.279 0 0 1-.37-.713 5.231 5.231 0 0 1-.114-3.959c.524-1.423 1.52-2.513 2.81-3.069 1.624-.697 3.419-.56 4.974.362.988.567 1.687 1.442 2.22 2.68l.048.12.092.238.045.112zm3.24-5.643c-1.15.496-1.745 1.577-1.622 2.843l4.88-2.1c-.84-.985-1.933-1.313-3.258-.741zm5.752 5.832-1.886-1.261-.003.003-.102-.068c-.29.473-.745.856-1.319 1.104-1.09.473-2.1.351-2.828-.285l-.066.102-.001-.003-1.24 1.853c.308.214.64.394.984.538 1.369.569 2.768.543 4.147-.057.996-.432 1.78-1.091 2.314-1.926zm4.104-10.657v10.296l1.601.65-.91 2.122-1.767-.735a2.004 2.004 0 0 1-.871-.732c-.196-.302-.342-.717-.342-1.277V2.347zm4.148 7.673c0-.876.388-1.662 1-2.198l-1.642-1.83a5.364 5.364 0 0 0-1.817 4.026 5.365 5.365 0 0 0 1.812 4.031l1.64-1.834a2.913 2.913 0 0 1-.993-2.195zm2.918 2.924a2.986 2.986 0 0 1-.925-.151l-.785 2.332a5.382 5.382 0 0 0 6.983-4.017l-2.41-.492a2.921 2.921 0 0 1-2.863 2.328zm.008-8.3c-.597 0-1.17.095-1.706.274l.777 2.335a2.92 2.92 0 0 1 3.786 2.19L46 8.953a5.382 5.382 0 0 0-5.268-4.31z"></path></svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="46" height="16.611" className="fill-[#0078a9] dark:fill-current"><path d="M31.315 10.499h4.395v1.311h-3.048v1.141h2.965v1.155h-2.964v1.201h3.049v1.275h-4.398V10.5zm12.894 2.37c1.653.095 1.791 1.012 1.791 1.99 0 1.14-.843 1.751-1.723 1.751H41.45v-1.303h2.203c.372 0 .928 0 .928-.584 0-.277-.097-.455-.495-.5a14.233 14.233 0 0 0-.93-.071c-1.491-.043-1.84-.869-1.84-1.872 0-1.142.722-1.766 1.601-1.766h2.828v1.306h-2.07c-.468.005-.976-.062-.976.527 0 .374.25.45.568.483.11 0 .844.043.942.04zm-5.065 0c1.653.095 1.794 1.012 1.794 1.99 0 1.14-.847 1.751-1.726 1.751h-2.827v-1.303h2.203c.373 0 .93 0 .93-.584 0-.277-.098-.455-.495-.5a14.265 14.265 0 0 0-.932-.071c-1.492-.043-1.84-.869-1.84-1.872 0-1.142.722-1.766 1.604-1.766h2.824v1.306h-2.065c-.47.005-.979-.062-.979.527 0 .374.25.45.569.483.11 0 .846.043.941.04zm-16.404.41h-1.678v-1.46h1.682c.562 0 .74.401.74.7 0 .408-.195.76-.743.76zm-3.033 2.733-1.935-2.54 1.935-2.375v4.914zm-5.146-.706h-3.1v-1.201h2.966v-1.153h-2.964v-1.146l3.27.012 1.309 1.653-1.481 1.834zm8.631-4.793H18.47l-1.542 1.889-1.492-1.903h-5.3v6.083h5.132l1.614-2.008 1.578 2.024h2.58V14.53h1.81c.697 0 1.97-.025 1.97-2.157 0-1.52-.967-1.86-1.626-1.86zM28.53 13.2h-1.677v-1.38h1.684c.562 0 .74.401.74.699 0 .407-.197.68-.748.68zm1.162.626c.736-.405.929-.948.929-1.682 0-1.303-.952-1.629-1.615-1.629h-3.498v6.082h1.347V14.45h1.76c.465 0 .649.516.66 1.033l.039 1.113h1.307l-.049-1.25c0-.98-.243-1.438-.882-1.521v.002zm-3.643-7.738h1.344V0h-1.344zM15.034.005h4.395v1.31h-3.048v1.14h2.965v1.156h-2.964v1.2h3.049v1.276h-4.396V.005zm8.218 2.683h-1.677V1.31h1.683c.562 0 .738.4.738.7 0 .408-.195.68-.744.68zm1.162.629c.733-.406.928-.95.928-1.683 0-1.305-.954-1.63-1.614-1.63h-3.501v6.083h1.348V3.943h1.76c.464 0 .648.515.661 1.03l.037 1.114h1.307l-.047-1.248c0-.98-.243-1.44-.882-1.521zm-21.962.1.801-2.127.836 2.128zM11.93.008l-1.65 4.079L8.634.006H6.527v5.857L4.173.007H2.397L0 6.086h1.418l.524-1.359H4.63l.532 1.359h2.71V1.573l1.796 4.514h1.224l1.84-4.439v4.439h1.347V.005H11.93zM33.01 3.42l.801-2.127.844 2.127zM41.275 0v4.212L39.008.002H37.02v5.712L34.725.004h-1.779l-1.854 4.714s-.783 0-.86-.023c-.327-.072-.831-.324-.84-1.399v-.442c0-1.426.697-1.53 1.59-1.53h.832V0h-1.757c-.61 0-1.94.518-1.984 3.016-.03 1.687.626 3.072 2.121 3.072h1.775l.524-1.357h2.683l.534 1.357h2.654V1.636l2.421 4.456h1.835V0h-1.348.003z"></path></svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20.444">
                <path fill="#fff" d="M3.541 5.57h38.696v10.292H3.541z" />
                <path fill="#b82126" d="M29.965 11.646c-.147 1.23 1.298 1.084 1.812.569.38-.38.487-1.058.574-1.61l.007-.05c-1.18-.148-2.269.069-2.393 1.091zm7.783-.143c.015.705.349 1.13 1.022 1.115 1.22-.026 1.42-1.376 1.606-2.627.054-.361.106-.715.182-1.026-.367-.128-.73-.246-1.23-.189-1.077.123-1.607 1.494-1.58 2.727zm-24.275.332c.102.972 1.417.981 1.951.404.443-.48.81-1.661.673-2.61-.155-1.09-1.703-1.011-2.23-.355a17.582 17.582 0 0 0-.12.713c-.027.177-.056.358-.089.544a7.948 7.948 0 0 1-.076.373c-.07.314-.141.628-.109.932zm.395-3.153.024-.02c0 .016-.011.018-.024.02zm4.739 1.256h2.346c.212-.917-.303-1.214-1.022-1.186a1.395 1.395 0 0 0-1.324 1.186z" />
                <path fillRule="evenodd" fill="#b82126" d="M7.86 0H46c-.777 3.91-1.54 7.733-2.299 11.541l-.492 2.469-.108.548c-.201 1.01-.403 2.028-.614 2.943-.531 2.325-2.502 2.944-5.37 2.944H0c.444-2.169.874-4.383 1.306-6.613.526-2.719 1.058-5.459 1.624-8.157.07-.334.133-.675.197-1.017.118-.646.239-1.295.408-1.904C4.031.97 5.752.102 7.86 0zm22.174 8.755c.043-.17.086-.342.117-.525.213-.006.455-.025.71-.047 1.165-.096 2.599-.215 2.657.853.023.397-.067.825-.162 1.265-.04.195-.082.389-.115.586l-.015.092c-.122.72-.231 1.378-.24 2.185h-.86a3.156 3.156 0 0 1 .07-.76c-.412.674-1.601 1.163-2.579.735-.507-.222-.773-1.017-.534-1.827.355-1.206 1.709-1.487 3.368-1.327l.002-.004c.074-.209.172-.49.115-.754-.178-.805-2.013-.341-2.603-.19.022-.095.046-.188.069-.282zm10.618-.453a23.6 23.6 0 0 0 .347-2.207h.998A100.91 100.91 0 0 1 41.645 8c-.317 1.656-.635 3.312-.762 5.162h-.907c.005-.198.034-.37.064-.543l.03-.191c-.012-.041-.062.04-.112.124a1.697 1.697 0 0 1-.423.469c-.67.45-1.998.323-2.462-.214-.269-.31-.343-.746-.348-1.186-.027-2.272 1.476-4.112 3.926-3.32zm-26.76.359c.447-.368 1.477-.754 2.322-.43 1.74.666.74 4.075-.558 4.79-.628.346-2.118.518-2.346-.38a20.598 20.598 0 0 0-.314 1.852c-.04.293-.082.587-.128.876h-.998c.448-2.34.873-4.706 1.23-7.139h.86c-.003.08-.018.146-.034.214a1.154 1.154 0 0 0-.035.213v.004zm4.343.21c.435-.467 1.044-.678 1.765-.735.824-.066 1.633.108 1.859.782.128.383.051.796-.026 1.196-.025.132-.05.264-.067.393a56.521 56.521 0 0 0-3.275 0c-.168.728-.165 1.567.349 1.898.677.438 1.824.085 2.485-.166-.017.102-.037.199-.056.297a4.642 4.642 0 0 0-.083.509c-1.604.398-3.608.457-3.788-1.186-.125-1.153.306-2.416.837-2.989zm-7.04-.57c0-.034-.002-.067.025-.07h.998a68.918 68.918 0 0 0-.859 4.931h-.999c.32-1.579.616-3.181.836-4.86zm24.183.711c.287-.452 1.022-1.209 1.905-.759a3.348 3.348 0 0 0-.086.42 4.948 4.948 0 0 1-.053.292c-1.564-.451-1.877 1.05-2.09 2.42-.026.169-.056.328-.082.482-.077.426-.146.815-.151 1.297h-1.022a74.597 74.597 0 0 0 .86-4.934h.881c-.036.115-.056.247-.077.378-.021.14-.042.284-.085.404zm-9.407 2.04c-.023.305 0 .706.092.949.317.836 1.68.639 2.393.26a8.406 8.406 0 0 0-.059.33c-.024.146-.048.293-.08.43-1.305.46-2.916.396-3.276-.805-.307-1.028.127-2.66.79-3.37.678-.724 1.953-.864 3.298-.639-.014.109-.031.216-.048.322-.026.157-.052.316-.068.483-.82-.292-1.849-.378-2.369.143-.378.377-.622 1.212-.673 1.898zM23.6 9.06c.323-.577 1.02-1.194 1.905-.83a3.693 3.693 0 0 1-.054.32 2.62 2.62 0 0 0-.063.416c-.936-.341-1.587.285-1.834 1.02-.223.658-.316 1.507-.403 2.29a27.95 27.95 0 0 1-.109.889h-.999l.123-.65c.263-1.401.526-2.803.714-4.284h.882a7.291 7.291 0 0 0-.062.338 4.637 4.637 0 0 1-.1.493zM8.943 9.038c.16-.927.321-1.853.464-2.799h1.162c-.458 2.253-.844 4.58-1.209 6.926H8.224c.102-.662.22-1.306.34-1.95.09-.485.18-.971.263-1.465-.846-.084-1.881-.055-2.79-.031l-.277.006a51.137 51.137 0 0 0-.502 2.931l-.078.509H4.043c.31-1.575.579-3.192.85-4.808.117-.707.236-1.415.357-2.118h1.115c-.092.448-.173.91-.252 1.372-.082.472-.164.945-.26 1.403.797.06 1.628.047 2.458.033l.633-.01zm3.46-2.799c.295.266.036.904-.162 1.043-.127.09-.553.192-.743 0-.196-.195-.08-.726.046-.9.079-.11.194-.18.396-.214.216-.038.37-.013.464.071z" />
              </svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.3" height="22"><circle cx="11.118" cy="10.989" r="10.539" fill="#fff"></circle><path fill="#0069aa" d="M17.4 10.981a6.388 6.388 0 0 0-4.075-5.959v11.915a6.388 6.388 0 0 0 4.075-5.956zm-8.618 5.954V5.025a6.391 6.391 0 0 0 0 11.911zM11.054.91C5.525.913 1.046 5.42 1.045 10.981c0 5.56 4.48 10.067 10.01 10.068 5.529 0 10.01-4.508 10.01-10.068C21.065 5.42 16.584.912 11.055.91zM11.03 22C4.98 22.028 0 17.098 0 11.095 0 4.536 4.98 0 11.03 0h2.836C19.844 0 25.3 4.533 25.3 11.095c0 6-5.456 10.904-11.436 10.904z"></path></svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="16.611"><path fill="#02538b" d="M0 0h46v13.658c0 .387-.072.772-.21 1.13-.14.357-.342.683-.6.958a2.745 2.745 0 0 1-.897.64 2.616 2.616 0 0 1-1.058.225H0z"></path><path fill="#fff" d="M28.345 8.9c1.413 0 2.125-.228 2.125.768 0 1.248-.17 1.059-2.125 1.059zm.017-2.797c1.612 0 1.874-.202 1.874.894 0 1.101-.5.868-1.891.868zm-1.314 5.674 2.819.02c1.023 0 1.89-.426 1.89-1.524 0-.846.127-1.72-.922-1.993.656-.592.69-.273.69-1.735 0-1.056-.572-1.438-1.525-1.503a23.718 23.718 0 0 0-2.957 0zM8.767 5.628c.088.218 2.147 2.288 2.262 2.476.277.442-.297.86-.473 1.047-.519.556-1.03 1.062-1.558 1.61-.195.204-.23.159-.23.557 0 .54-.03 2.14.022 2.461l4.364-4.57c.189-.185.49-.395.512-.803.023-.491-.644-.948-1.099-1.475-.754-.876-1.725-1.784-2.536-2.644-.217-.23-.396-.447-.602-.668a6.735 6.735 0 0 0-.666-.647l.004 2.658zm-.869 8.148c.05-.418.022-2.104.02-2.647 0-.23-1.56-1.722-1.814-1.996-.153-.166-.529-.456-.519-.776.01-.32.826-1.03 1.153-1.415.2-.247.4-.43.61-.655.324-.345.572-.494.572-.752V2.967c-.217.138-2.61 2.76-3.138 3.25-.477.44-.753.86-1.245 1.338-.94.91-.523 1.158.603 2.267.849.844 1.673 1.85 2.517 2.657.23.225.399.418.621.644.221.203.43.421.624.653h-.005zm15.59-7.621.92 3.121-1.843-.025.92-3.096zm-3.043 5.625 1.357.018.428-1.393h2.45c.163.145.41 1.12.46 1.393h1.361l-2.13-6.759c-2.153-.117-1.78-.14-2.649 2.643-.293.95-1.109 3.351-1.29 4.092zm14.64-5.623.923 3.12h-1.844zm-3.043 5.634h1.271c.135-.036.22-.465.282-.666.063-.203.166-.493.217-.738h2.535l.41 1.393h1.35L36.493 6.7l-.275-.867c-.07-.221-.135-.696-.322-.815-.907 0-1.615-.133-1.94.653l-1.914 6.12zM15.743 6.744v3.067c0 1.444 1.003 1.967 2.326 1.967l1.82-.016c0-1.23-.264-1.155-1.348-1.155-1.827 0-1.5-.341-1.5-3.615 0-.737.345-.984 1.028-.984h1.865c.076-1.383-.32-1.173-1.96-1.173-1.24 0-2.23.562-2.23 1.917v-.007zm22.812 5.052c.65 0 3.702.085 4.085-.034 0-.207.027-.823 0-.984-.038-.219-.294-.128-.83-.128h-1.96V4.953c-1.677-.379-1.297 1.23-1.297 2.706v4.145z"></path></svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28.603" height="22"><path fill="#eb5d15" d="M3.525 22H27.84a3.858 3.858 0 0 0 .647-3.234L24.412 2.98a3.966 3.966 0 0 0-1.86-2.416 4.232 4.232 0 0 0-3.086-.45L3.093 4.044a4.089 4.089 0 0 0-2.505 1.79 3.826 3.826 0 0 0-.473 2.97z"></path><path fill="#fffbff" d="M3.084 16.712h1.713v-2.797h2.448v2.796h1.711v-6.683H7.245v2.447H4.797v-2.447H3.084z"></path><path fill="#fff" d="M15.078 11.686c-1.54 0-1.586.788-1.586.788v-.612H12.13v3.715c-.836 0-.815-.897-.815-.897v-2.82H9.637v2.773c0 2.077 2.425 2.2 2.425 2.2v1.705h1.655v-1.664c3.174 0 3.537-1.29 3.537-2.556s-.635-2.645-2.178-2.645l.002.012zm-.771 3.89h-.59v-1.988s.068-.634.862-.634c.792 0 .973.96.973 1.463 0 .504-.16 1.159-1.246 1.159z"></path><path fill="#fccf11" d="M11.304 10.563a.85.85 0 0 1-.264.612.915.915 0 0 1-.636.252.915.915 0 0 1-.633-.256.85.85 0 0 1-.193-.942.864.864 0 0 1 .195-.28.9.9 0 0 1 .636-.253.926.926 0 0 1 .633.255.864.864 0 0 1 .262.612z"></path><path fill="#fffbff" d="M19.952 11.686c-2.607 0-2.448 2.841-2.448 2.797 0-.044-.158 2.382 2.562 2.382a6.123 6.123 0 0 0 1.973-.372l-.16-1.092s-2.676.7-2.902-.656h3.242s.341-3.058-2.266-3.058zm.909 1.991h-1.906s-.068-1.028.952-1.028c1.023 0 .954 1.026.954 1.026v.001zm3.272-1.815h-1.506v4.84h1.77v-2.787s-.091-1.006 1.361-.72v-1.508s-1.157-.262-1.632.787l.007-.613z"></path></svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="22.439"><path fill="#ec1c25" d="M34.5 10.483c1.59-1.34 3.02-2.85 4.381-4.411a11.966 11.966 0 0 1-3.4 5.441c-.38.3-.72.65-1.151.9-1.38.92-3.01 1.521-4.691 1.531l.04-.03a29 29 0 0 0 3.77-2.55c.35-.29.72-.56 1.041-.881z"></path><path className="fill-[#273896] dark:fill-current" d="M14.134 8.533c-.78-.45-1.74-.52-2.63-.43-1.191.12-2.361.66-3.132 1.58-.62.75-.96 1.74-.86 2.7.04.34.16.661.34.951.19.29.44.53.74.7.77.45 1.7.52 2.571.45 1.32-.11 2.631-.75 3.401-1.84.51-.73.79-1.65.67-2.531a2.2 2.2 0 0 0-1.09-1.58zm-.63 2.33c-.06.56-.28 1.09-.63 1.54-.25.31-.57.561-.93.731-.37.17-.76.25-1.171.24-.44 0-.9-.1-1.21-.42-.21-.23-.33-.52-.34-.83-.05-1.28.81-2.611 2.12-2.911.57-.13 1.24-.08 1.7.3.39.33.51.88.45 1.36zM3.911 9.293c1.12-.25 2.28-.18 3.401-.09.1-.3.21-.59.33-.88-.78-.13-1.58-.19-2.37-.18-.72-.01-1.44.07-2.131.25-.5.13-.96.36-1.35.68-.45.4-.66 1.08-.44 1.65.12.33.44.54.76.66.75.27 1.56.22 2.32.45.29.08.58.34.49.67-.08.5-.6.731-1.05.831-1.2.24-2.43.06-3.63-.09-.08.31-.17.62-.24.94 1.39.35 2.86.47 4.29.24.69-.13 1.41-.36 1.901-.87.42-.46.61-1.1.5-1.71-.06-.38-.36-.69-.72-.85-.75-.35-1.62-.32-2.41-.53-.26-.07-.541-.25-.521-.541.09-.39.53-.53.87-.62zM28.449 8.062c-1.26-.03-2.58.33-3.501 1.21a3.73 3.73 0 0 0-1.2 2.562c-.05.6.11 1.23.5 1.69.48.62 1.25.96 2.01 1.08 1.16.19 2.421 0 3.401-.66l.04-.03c-1.13.12-2.36.15-3.4-.39-.66-.36-.971-1.12-.901-1.83 1.3.23 2.69.28 3.951-.19.53-.21 1.05-.54 1.31-1.05.29-.591.22-1.381-.3-1.831-.52-.44-1.24-.54-1.91-.56zm.07 2.601c-.94.31-1.94.23-2.9.07.27-.62.75-1.16 1.37-1.45.54-.24 1.16-.33 1.74-.19.27.07.52.29.54.59.07.47-.35.83-.76.97zM34.54 10.443c-.68-.74-1.33-1.51-1.93-2.31h-1.481c.71 1.12 1.49 2.2 2.33 3.23.35-.29.72-.57 1.041-.88zM45.964 10.033c-.12-.72-.65-1.34-1.32-1.64-.84-.39-1.81-.42-2.721-.29-1.33.19-2.601.94-3.281 2.1-.42.73-.64 1.61-.47 2.45.14.68.64 1.261 1.28 1.561.83.39 1.78.43 2.68.31 1.281-.18 2.522-.85 3.222-1.93.49-.75.76-1.68.6-2.561zm-3.431 3.201c-.6.24-1.29.27-1.89.04a1.2 1.2 0 0 1-.75-1c-.12-1.34.78-2.781 2.17-3.071.54-.12 1.17-.09 1.63.25.36.26.54.7.55 1.13.01 1.11-.64 2.24-1.71 2.661zM22.577 5.592c-.16.81-.33 1.63-.48 2.44-1.3-.04-2.66-.13-3.881.42-1.02.41-1.84 1.29-2.13 2.341-.271.86-.241 1.88.34 2.611.57.7 1.49.99 2.36 1.03.99.05 2.05-.1 2.86-.7.761-.55 1.191-1.45 1.361-2.34.38-1.961.76-3.932 1.14-5.912-.52.04-1.05.07-1.58.11zm-1.23 5.852c-.09.5-.28 1.01-.67 1.35-.48.44-1.181.54-1.811.46-.44-.04-.91-.24-1.11-.65-.25-.47-.17-1.03-.04-1.51.17-.69.61-1.341 1.27-1.661.88-.45 1.89-.44 2.85-.33-.17.79-.32 1.57-.49 2.35zM39.472 4.081c-.19.67-.39 1.34-.58 2 .51-.48 1.03-.95 1.56-1.42.35.48.68.97 1.04 1.45.04-.66.08-1.32.11-1.97.63-.05 1.251-.08 1.881-.15-.46-.36-.93-.71-1.4-1.08.43-.55.86-1.1 1.31-1.63-.63.18-1.25.42-1.87.63L41.253 0c-.32.62-.61 1.25-.92 1.88-.54-.26-1.091-.48-1.621-.74.23.57.48 1.14.73 1.71-.59.33-1.18.671-1.77.991l1.82.24zM34.33 12.414c.49.58 1.01 1.14 1.56 1.68.14.13.26.29.43.39.66.01 1.321 0 1.981 0-.94-.99-1.89-1.97-2.82-2.97-.38.3-.72.65-1.151.9z"></path></svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33.579" height="22"><path fill="#007858" d="M22.563.003a10.974 10.974 0 0 0-6.137 1.867 103.09 103.09 0 0 0-1.025.73c-1.43 1.074-2.393 1.26-3.71.93a10.412 10.412 0 0 1-.576-.193A8.221 8.221 0 0 0 .995 7.092a8.19 8.19 0 0 0 2.356 10.521 8.218 8.218 0 0 0 7.466 1.167c1.964-.587 3.03-.427 4.264.443.245.173.839.553.963.642a11.024 11.024 0 0 0 16.99-5.436 10.985 10.985 0 0 0-1.545-9.88A11.012 11.012 0 0 0 22.57 0z"></path><path fill="#fff" d="M18.589 12.712a1.946 1.946 0 0 1-2.409.256l-.732 1.158a3.33 3.33 0 0 0 4.105-.436zM17.272 7.99a3.333 3.333 0 0 0-2.966 1.717 3.32 3.32 0 0 0 .124 3.42l6.028-2.571A3.323 3.323 0 0 0 17.27 7.99zm-2 3.532a1.953 1.953 0 0 1 1.178-2.005 1.96 1.96 0 0 1 2.265.533zm7.078-5.028v6.417l1.114.46-.525 1.263-1.106-.458a1.225 1.225 0 0 1-.544-.456 1.418 1.418 0 0 1-.212-.796V6.49l1.274.003zm-9.7 0v6.417l1.114.46-.527 1.263-1.104-.458a1.224 1.224 0 0 1-.545-.456 1.417 1.417 0 0 1-.213-.796V6.49z"></path><path fill="#c7d540" d="M27.838 9.55a1.96 1.96 0 0 1 1.11 1.873 1.953 1.953 0 0 1-.192.74l1.233.59a3.32 3.32 0 0 0-1.015-4.1 3.333 3.333 0 0 0-4.225.204l.921 1.012a1.957 1.957 0 0 1 2.168-.319z"></path><path fill="#fff" d="M26.14 13.076a1.96 1.96 0 0 1-.918-2.61l-1.231-.592a3.32 3.32 0 0 0 1.015 4.1 3.333 3.333 0 0 0 4.224-.203l-.92-1.011a1.964 1.964 0 0 1-2.169.316zm-16.014.093v-1.856A3.308 3.308 0 0 0 7.808 8.16a3.32 3.32 0 0 0-1.994 0 3.315 3.315 0 0 0-2.335 3.672 3.31 3.31 0 0 0 3.324 2.813c.514 0 1.021-.12 1.482-.348l-.54-1.252a1.967 1.967 0 0 1-2.91-1.717 1.96 1.96 0 0 1 1.52-1.907 1.964 1.964 0 0 1 2.405 1.907v1.84c-.01.282.065.559.213.797.133.202.322.36.544.455l.622.247.527-1.262-.541-.234z"></path></svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="16.618" fill="none"><g strokeWidth="1.279"><path fill="#32bcad" d="M12.85 12.715a2.386 2.386 0 0 1-1.714-.716l-2.47-2.494a.468.468 0 0 0-.65 0L5.54 12.008a2.404 2.404 0 0 1-1.714.715h-.487l3.13 3.158a2.494 2.494 0 0 0 3.54 0l3.14-3.167h-.298zM3.825 3.893a2.386 2.386 0 0 1 1.713.715l2.48 2.506a.458.458 0 0 0 .65 0l2.47-2.494a2.404 2.404 0 0 1 1.712-.716h.298L10.008.737a2.494 2.494 0 0 0-3.54 0l-3.13 3.16h.486z"></path><path fill="#32bcad" d="M15.743 6.521 13.85 4.608a.358.358 0 0 1-.135.026h-.863a1.697 1.697 0 0 0-1.199.502L9.183 7.63a1.182 1.182 0 0 1-1.678-.003l-2.481-2.5a1.705 1.705 0 0 0-1.199-.501h-1.06a.358.358 0 0 1-.128-.026L.736 6.521A2.527 2.527 0 0 0 0 8.307a2.545 2.545 0 0 0 .734 1.786l1.905 1.92a.358.358 0 0 1 .128-.025h1.058c.45 0 .88-.18 1.199-.499l2.478-2.504a1.208 1.208 0 0 1 1.68 0l2.469 2.494c.318.32.748.499 1.197.5h.863a.358.358 0 0 1 .135.027l1.896-1.913a2.528 2.528 0 0 0 .734-1.787 2.545 2.545 0 0 0-.734-1.785zm15.885-4.936-.504-.508a.32.32 0 0 1-.069-.351.32.32 0 0 1 .07-.105l.503-.507a.318.318 0 0 1 .453 0l.502.507a.322.322 0 0 1 0 .456l-.502.508a.32.32 0 0 1-.35.07.32.32 0 0 1-.103-.07z"></path><path className="stroke-[#939598] dark:stroke-current" strokeLinecap="round" strokeLinejoin="round" d="M20.529 14.251v-8.74c0-.773.304-1.514.845-2.06a2.877 2.877 0 0 1 2.043-.853l2.56.004a2.865 2.865 0 0 1 2.034.854 2.92 2.92 0 0 1 .844 2.054v1.86a2.93 2.93 0 0 1-.846 2.06 2.886 2.886 0 0 1-2.042.854H22.35m7.22-7.687h1.11a1.177 1.177 0 0 1 1.095.738c.06.146.09.3.09.458v6.527m2.13-7.73h1.1a2.12 2.12 0 0 1 1.51.632l2.576 2.596a.853.853 0 0 0 .932.188.853.853 0 0 0 .278-.186l2.565-2.589a2.127 2.127 0 0 1 1.51-.63h.894m-11.365 7.663h1.1a2.123 2.123 0 0 0 1.51-.63l2.576-2.597a.853.853 0 0 1 .932-.188.853.853 0 0 1 .278.187l2.565 2.59c.4.404.944.63 1.51.63h.894"></path><path className="fill-[#939598] dark:fill-current" d="M22.729 13.508a1.823 1.823 0 0 0-.396.06v.533c.1.035.204.053.309.053.265 0 .391-.09.391-.326 0-.22-.102-.32-.304-.32zm-.486.989v-1.053h.074l.007.045a2.059 2.059 0 0 1 .414-.067.408.408 0 0 1 .27.08.4.4 0 0 1 .12.326.368.368 0 0 1-.17.34.652.652 0 0 1-.307.068 1.096 1.096 0 0 1-.318-.049v.31zm1.55-.993c-.266 0-.384.085-.384.32 0 .226.117.33.384.33.263 0 .381-.082.381-.317 0-.227-.115-.333-.381-.333zm.34.65a.57.57 0 0 1-.34.083.578.578 0 0 1-.343-.083.368.368 0 0 1-.135-.325.377.377 0 0 1 .135-.325.58.58 0 0 1 .343-.082.58.58 0 0 1 .34.082.453.453 0 0 1 .101.501.45.45 0 0 1-.1.149zm.267-.71h.099l.262.646h.007l.283-.646h.082l.292.646h.008l.254-.646h.095l-.315.771h-.08l-.295-.64h-.006l-.29.639h-.08zm1.955.059c-.246 0-.33.111-.346.268h.69c-.008-.175-.098-.268-.346-.268zm-.003.733a.457.457 0 0 1-.32-.086.47.47 0 0 1 .025-.65.509.509 0 0 1 .298-.078.533.533 0 0 1 .306.074c.11.077.13.208.13.359h-.783c.003.158.054.298.352.298.133-.004.264-.018.394-.045v.08a2.322 2.322 0 0 1-.402.049zm.696-.022v-.771h.073l.006.046c.124-.041.252-.064.381-.067h.01v.086h-.021a1.24 1.24 0 0 0-.36.06v.646zm.99-.711c-.246 0-.33.111-.345.268h.689c-.008-.175-.098-.268-.344-.268zm-.003.733a.457.457 0 0 1-.319-.086.47.47 0 0 1 .023-.65.508.508 0 0 1 .298-.078.533.533 0 0 1 .307.074c.11.077.13.208.13.359h-.783c.002.158.054.298.352.298.133-.004.264-.018.393-.045v.08a2.326 2.326 0 0 1-.401.049zm1.42-.678a.91.91 0 0 0-.31-.055c-.265 0-.391.092-.391.326 0 .224.102.321.303.321a1.88 1.88 0 0 0 .396-.06v-.533zm.015.656-.007-.045a2.064 2.064 0 0 1-.414.067.402.402 0 0 1-.271-.08.402.402 0 0 1-.119-.327.366.366 0 0 1 .169-.336.637.637 0 0 1 .31-.07 1.151 1.151 0 0 1 .316.048v-.352h.09v1.095zm1.382-.706a1.8 1.8 0 0 0-.396.06v.533a.878.878 0 0 0 .308.053c.266 0 .391-.09.391-.326 0-.22-.102-.32-.303-.32zm.23.66a.648.648 0 0 1-.308.068 1.08 1.08 0 0 1-.343-.058l-.003.036h-.062v-1.096h.09v.368c.133-.034.268-.055.405-.064a.408.408 0 0 1 .27.08.4.4 0 0 1 .12.326.368.368 0 0 1-.17.34zm.287.343v-.085c.038.005.075.008.114.01a.23.23 0 0 0 .239-.16l.027-.062-.398-.77h.102l.342.665h.007l.325-.665h.102l-.43.865a.315.315 0 0 1-.32.21.896.896 0 0 1-.11-.008zm2.092-.736h-.298v.269h.3c.204 0 .28-.022.28-.134 0-.12-.106-.135-.282-.135zm-.055-.44h-.243v.277h.243c.205 0 .283-.025.283-.139 0-.122-.101-.136-.284-.136h.001zm.46.806c-.107.07-.24.073-.482.073h-.451v-1.045h.441c.207 0 .334.003.441.067a.22.22 0 0 1 .106.208.234.234 0 0 1-.042.145.226.226 0 0 1-.121.087v.006a.24.24 0 0 1 .217.248.228.228 0 0 1-.109.212zm1.016-.25a3.236 3.236 0 0 0-.275-.013c-.156 0-.211.033-.211.104 0 .067.046.104.166.104.108-.004.215-.02.32-.046zm.046.323-.007-.045c-.135.039-.273.06-.414.067a.395.395 0 0 1-.231-.057.24.24 0 0 1-.043-.318.237.237 0 0 1 .086-.077.694.694 0 0 1 .285-.04c.082 0 .188.003.278.01v-.013c0-.122-.078-.161-.294-.161-.082 0-.183.003-.282.012v-.154c.11-.01.22-.016.33-.016a.645.645 0 0 1 .354.072.285.285 0 0 1 .107.263v.457h-.17zm1.166 0v-.426c0-.14-.07-.192-.198-.192a1.435 1.435 0 0 0-.31.05v.568h-.214v-.771h.172l.008.048a1.79 1.79 0 0 1 .41-.069.373.373 0 0 1 .261.08.298.298 0 0 1 .083.24v.472zm.815.022a.431.431 0 0 1-.284-.08.398.398 0 0 1-.122-.328.377.377 0 0 1 .156-.33.601.601 0 0 1 .337-.077c.088 0 .174.006.268.017v.165a2.723 2.723 0 0 0-.243-.013c-.203 0-.298.063-.298.238 0 .167.07.24.238.24a1.79 1.79 0 0 0 .32-.04v.16a1.913 1.913 0 0 1-.371.048zm1.002-.653c-.203 0-.293.064-.293.24s.09.25.293.25c.202 0 .29-.064.29-.238 0-.176-.086-.252-.29-.252zm.366.572a.64.64 0 0 1-.366.08.65.65 0 0 1-.368-.08.437.437 0 0 1-.106-.504.439.439 0 0 1 .106-.148.875.875 0 0 1 .735 0 .358.358 0 0 1 .142.325.367.367 0 0 1-.142.326zm1.376.08a.572.572 0 0 1-.373-.108.54.54 0 0 1-.163-.437.514.514 0 0 1 .211-.444.788.788 0 0 1 .44-.099c.115 0 .233.008.36.018v.187a4.69 4.69 0 0 0-.35-.017c-.295 0-.423.114-.423.355 0 .246.118.356.335.356a2.353 2.353 0 0 0 .462-.062v.186c-.164.039-.331.06-.499.064zm1.126-.676c-.176 0-.245.064-.259.183h.516c-.008-.125-.08-.183-.256-.183zm-.031.677a.491.491 0 0 1-.325-.086.396.396 0 0 1-.122-.322.394.394 0 0 1 .144-.325.564.564 0 0 1 .334-.08.588.588 0 0 1 .332.076c.121.088.133.223.136.381h-.728c.004.117.066.195.281.195.137-.004.273-.017.407-.04v.15a2.932 2.932 0 0 1-.46.05zm1.448-.022v-.426c0-.14-.07-.192-.197-.192a1.435 1.435 0 0 0-.312.05v.568h-.214v-.771h.173l.009.048c.133-.038.27-.062.409-.069a.373.373 0 0 1 .26.08.297.297 0 0 1 .084.24v.472zm.82.022a.276.276 0 0 1-.248-.112.4.4 0 0 1-.056-.232v-.29h-.155v-.158h.154l.023-.234h.19v.234h.301v.159h-.3v.248a.367.367 0 0 0 .02.146.133.133 0 0 0 .14.071.96.96 0 0 0 .153-.013v.153a1.188 1.188 0 0 1-.221.028zm.417-.022v-.771h.174l.008.048a1.326 1.326 0 0 1 .405-.069v.184h-.074a1.188 1.188 0 0 0-.299.039v.569zm1.364-.324a3.212 3.212 0 0 0-.277-.012c-.156 0-.21.033-.21.104 0 .067.047.104.167.104.107-.004.215-.02.32-.046zm.046.324-.007-.045a1.83 1.83 0 0 1-.414.067.395.395 0 0 1-.232-.057.24.24 0 0 1-.043-.318.237.237 0 0 1 .087-.077.694.694 0 0 1 .285-.04c.082 0 .188.003.278.01v-.013c0-.122-.078-.161-.295-.161-.081 0-.184.003-.28.012v-.154c.108-.01.228-.016.328-.016a.643.643 0 0 1 .355.072.285.285 0 0 1 .105.263v.457h-.169zm.654-1.096v1.096h-.213v-1.096z"></path></g></svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-qr-code "><rect width="5" height="5" x="3" y="3" rx="1"></rect><rect width="5" height="5" x="16" y="3" rx="1"></rect><rect width="5" height="5" x="3" y="16" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="19.682" fill="currentColor"><path fillRule="evenodd" d="M8.405 2.538c-.539.664-1.401 1.188-2.264 1.114-.108-.9.315-1.854.809-2.444C7.488.524 8.432.038 9.196 0c.09.937-.26 1.853-.792 2.538zm.782 1.292c-.76-.046-1.454.237-2.013.467-.36.147-.666.272-.899.272-.26 0-.577-.131-.935-.28-.468-.192-1.002-.413-1.563-.403-1.284.019-2.479.777-3.135 1.984-1.348 2.415-.35 5.993.953 7.96.637.973 1.402 2.04 2.407 2.003.444-.018.762-.159 1.091-.304.38-.168.773-.343 1.39-.343.593 0 .97.17 1.332.332.345.156.675.306 1.165.296 1.043-.018 1.698-.974 2.336-1.948.689-1.045.992-2.065 1.038-2.22l.005-.017a.243.243 0 0 0-.026-.013c-.23-.11-1.988-.948-2.006-3.198-.015-1.89 1.398-2.847 1.62-2.997l.026-.019c-.898-1.385-2.3-1.536-2.786-1.573zm7.215 11.881V1.116h5.256c2.714 0 4.61 1.947 4.61 4.794 0 2.845-1.931 4.812-4.681 4.812h-3.01v4.99zm2.174-12.688h2.507c1.888 0 2.965 1.05 2.965 2.895S22.97 8.82 21.075 8.82h-2.498V3.025zm14.871 10.939c-.575 1.14-1.84 1.863-3.207 1.863-2.021 0-3.432-1.255-3.432-3.146 0-1.874 1.366-2.95 3.89-3.11l2.714-.168v-.805c0-1.188-.747-1.835-2.075-1.835-1.097 0-1.897.59-2.058 1.489h-1.96c.064-1.891 1.771-3.269 4.08-3.269 2.49 0 4.107 1.359 4.107 3.466v7.265h-2.013v-1.75zm-2.623.13c-1.159 0-1.896-.58-1.896-1.47 0-.917.71-1.451 2.066-1.535l2.418-.16v.824c0 1.367-1.115 2.34-2.588 2.34zm11.357 2.191c-.871 2.556-1.868 3.4-3.989 3.4-.161 0-.7-.02-.827-.057v-1.75c.136.017.468.036.64.036.96 0 1.5-.421 1.831-1.516l.199-.647L36.35 5.122h2.273l2.56 8.624h.045l2.561-8.624H46z"></path></svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="18.942"><path fill="currentColor" d="M21.215 14.816V9.258h2.87c1.176 0 2.167-.394 2.977-1.17l.193-.197a4.002 4.002 0 0 0-.194-5.603 4.094 4.094 0 0 0-2.977-1.193h-4.605v13.721h1.737zm0-7.244V2.781h2.913c.626 0 1.22.24 1.661.677a2.44 2.44 0 0 1 .054 3.404 2.255 2.255 0 0 1-1.715.71zm14.141-1.41c-.744-.69-1.758-1.04-3.041-1.04-1.651 0-2.89.613-3.71 1.827l1.531.973c.561-.83 1.327-1.247 2.298-1.247.613 0 1.207.23 1.67.646.453.394.713.963.713 1.565v.405c-.669-.373-1.51-.57-2.546-.57-1.207 0-2.178.285-2.9.865-.723.58-1.09 1.346-1.09 2.32a2.92 2.92 0 0 0 1.025 2.298c.68.613 1.542.919 2.555.919 1.198 0 2.147-.537 2.87-1.609h.076v1.303h1.66V9.03c0-1.215-.367-2.179-1.111-2.867zm-4.712 6.925a1.426 1.426 0 0 1-.573-1.15c0-.514.238-.94.703-1.279.473-.339 1.067-.514 1.768-.514.971-.011 1.725.207 2.265.646 0 .743-.29 1.389-.863 1.937a2.74 2.74 0 0 1-1.952.82c-.486.01-.96-.153-1.348-.46zm9.555 5.854 5.8-13.512h-1.886l-2.686 6.74h-.032l-2.75-6.74h-1.889l3.808 8.786-2.157 4.727h1.79z"></path><path fill="#4285f4" d="M15.221 8.054c0-.536-.043-1.073-.13-1.597H7.769v3.03h4.195a3.652 3.652 0 0 1-1.554 2.397v1.97h2.502c1.467-1.367 2.309-3.393 2.309-5.8z"></path><path fill="#34a853" d="M7.769 15.758c2.092 0 3.86-.702 5.144-1.904l-2.502-1.97c-.702.482-1.597.755-2.642.755-2.028 0-3.744-1.39-4.357-3.25H.833v2.035a7.746 7.746 0 0 0 6.936 4.331z"></path><path fill="#fbbc04" d="M3.412 9.39a4.819 4.819 0 0 1 0-3.021V4.345H.833a7.912 7.912 0 0 0 0 7.068z"></path><path fill="#ea4335" d="M7.769 3.118a4.146 4.146 0 0 1 2.977 1.183l2.221-2.254A7.437 7.437 0 0 0 7.769 0C4.835 0 2.149 1.687.833 4.345L3.412 6.38c.613-1.872 2.33-3.262 4.357-3.262z"></path></svg>
                    </li>
                    <li className="flex aspect-card w-16 items-center justify-center rounded border p-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20.444" fill="currentColor"><path d="M2.424 10.916H.017v6.955h1.316v-1.99H2.42a2.53 2.53 0 0 0 1.777-.725 2.481 2.481 0 0 0 .737-1.755 2.461 2.461 0 0 0-.732-1.756 2.51 2.51 0 0 0-1.771-.73zm-.097 3.762h-1v-2.562h1c.344 0 .673.135.916.376a1.275 1.275 0 0 1 0 1.813c-.243.24-.572.374-.916.374zm7.577-1.714a2.355 2.355 0 0 0-1.808-.78c-1.426 0-2.792 1.058-2.792 2.905 0 1.822 1.414 2.894 2.777 2.894a2.361 2.361 0 0 0 1.83-.839v.723h1.298V12.3H9.904zm-1.618 3.841a1.757 1.757 0 0 1-.981-.262 1.71 1.71 0 0 1-.332-2.657 1.747 1.747 0 0 1 1.9-.408 1.728 1.728 0 0 1 1.099 1.59c0 .964-.722 1.737-1.686 1.737zm4.826-4.506h-1.387l2.313 5.297-1.186 2.85h1.318l3.361-8.147h-1.367l-1.482 3.754zm26.504-5.65V.208H37.99l.089 5.108h-.036L36.53.21h-2.438v6.44h1.617l-.092-5.287h.038l1.623 5.285h2.34zM8.537.81l.877 5.903h1.767L9.967.211H7.044L5.826 6.715h1.776l.9-5.904h.035zm6.777 5.903h1.667L18.08.865h.037l.04 5.85h1.645L19.657.21h-2.681l-.81 4.974h-.038L15.318.21h-2.68l-.144 6.503h1.644l.04-5.848h.038l1.098 5.85zM2.396 6.97c1.188 0 2.167-.401 2.323-1.487a3.125 3.125 0 0 0-.007-1.066c-.277-1.363-2.778-1.771-2.958-2.531a.848.848 0 0 1-.008-.342c.048-.21.19-.434.601-.434a.565.565 0 0 1 .575.354.55.55 0 0 1 .037.235v.404h1.642v-.463C4.6.222 3.313 0 2.383 0 1.213 0 .257.384.085 1.447a2.223 2.223 0 0 0 .013.88C.384 3.653 2.72 4.038 3.058 4.88a.83.83 0 0 1 .014.48c-.054.218-.202.435-.64.435-.412 0-.66-.235-.66-.59v-.628H.001v.502c0 1.45 1.159 1.889 2.395 1.889zm20.743-5.068a.801.801 0 0 1-.007-.337c.046-.206.187-.435.592-.435a.56.56 0 0 1 .57.348c.03.074.04.153.037.233v.396h1.623V1.66c0-1.406-1.272-1.623-2.192-1.623-1.156 0-2.103.377-2.274 1.429-.054.287-.049.583.015.869.281 1.318 2.594 1.697 2.924 2.531a.83.83 0 0 1 .012.477c-.054.214-.2.434-.633.434-.41 0-.655-.232-.655-.579v-.634H21.41v.494c0 1.446 1.14 1.882 2.363 1.882 1.179 0 2.147-.396 2.3-1.473a3.11 3.11 0 0 0-.006-1.056c-.276-1.358-2.743-1.758-2.927-2.514V1.9zm9.12-1.694h-1.665v4.815a1.354 1.354 0 0 1-.016.249.578.578 0 0 1-.629.471.588.588 0 0 1-.63-.472 1.232 1.232 0 0 1-.016-.248V.207h-1.668v4.666c0 .12.008.362.013.427.116 1.214 1.086 1.609 2.295 1.609 1.207 0 2.177-.394 2.292-1.608.013-.143.018-.286.018-.429l.006-4.664zM43.673 3.06v.948h.672v.947c.004.083-.001.166-.013.247-.032.175-.198.473-.674.473-.476 0-.64-.297-.672-.472a1.674 1.674 0 0 1-.013-.248V1.982a1.453 1.453 0 0 1 .025-.307c.036-.162.175-.473.655-.473.503 0 .626.327.658.47.012.082.019.167.019.248v.365h1.66v-.218a4.17 4.17 0 0 0-.017-.434C45.851.415 44.832.028 43.666.028c-1.164 0-2.162.405-2.307 1.613a4.664 4.664 0 0 0-.027.434v2.73c0 .145.006.29.022.434.11 1.186 1.147 1.609 2.312 1.609 1.167 0 2.202-.422 2.312-1.608A4.71 4.71 0 0 0 46 4.806v-1.74z"></path></svg>
                    </li>
                </ul>
                <p className="text-center font-light">Ofereça pagamento parcelado em até 12 vezes.</p>
            </div>
        </section>
    );
}

export default CardFlag;
```


---
### 📄 Arquivo: `src/components/FeedbackForm.js`

```javascript
// components/FeedbackForm.js
'use client';
import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setError('Por favor, selecione uma classificação');
      return;
    }
    
    // Aqui você pode adicionar a lógica para enviar o feedback para um servidor
    console.log({ rating, feedback, email });
    
    // Simula o envio bem-sucedido
    setSubmitted(true);
    setError(null);
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 dark:text-white">Obrigado pelo seu feedback!</h3>
        <p className="text-gray-600 dark:text-gray-300">Sua opinião é muito importante para nós.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Compartilhe sua experiência</h3>
      
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Como você avalia nossos produtos?</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none"
              >
                <Star
                  fill={(hoveredRating || rating) >= star ? '#F59E0B' : 'none'}
                  className={`h-8 w-8 ${
                    (hoveredRating || rating) >= star
                      ? 'text-yellow-500'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-gray-700 dark:text-gray-300 mb-2">
            Seu feedback
          </label>
          <textarea
            id="feedback"
            rows="4"
            className="w-full px-3 py-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            placeholder="Conte-nos sobre sua experiência..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
            Seu email (opcional)
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            placeholder="email@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <button
          type="submit"
          className="bg-brand hover:bg-brand-dark text-white py-2 px-4 rounded-md flex items-center gap-2"
        >
          Enviar feedback
          <Send size={16} />
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
```


---
### 📄 Arquivo: `src/components/Footer.js`

```javascript
// src/components/Footer.js
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Maquininhas Point</h2>
            <p className="text-gray-400 mb-4">Revendedor autorizado de maquininhas Point para seu negócio crescer mais.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-brand transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-brand transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-brand transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li><Link href="/maquininhas/point-smart-2" className="text-gray-400 hover:text-white transition-colors">Point Smart 2</Link></li>
              <li><Link href="/maquininhas/point-pro-3" className="text-gray-400 hover:text-white transition-colors">Point Pro 3</Link></li>
              <li><Link href="/maquininhas/point-air" className="text-gray-400 hover:text-white transition-colors">Point Air</Link></li>
              <li><Link href="/maquininhas/point-mini-nfc-2" className="text-gray-400 hover:text-white transition-colors">Point Mini NFC 2</Link></li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Comprar Maquininhas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Taxas e Tarifas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Revenda</a></li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-400">(11) 4002-8922</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <a href="mailto:contato@maquininhaspoint.com.br" className="text-gray-400 hover:text-white transition-colors">contato@maquininhaspoint.com.br</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Maquininhas Point. Todos os direitos reservados.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```


---
### 📄 Arquivo: `src/components/Header.js`

```javascript
// src/components/Header.js
'use client';
import React from 'react';
import MenuPopover from './MenuPopover';
import { useTheme } from '../contexts/ThemeContext';
import { MoonIcon, SunIcon, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-slate-900 shadow fixed top-0 left-0 w-full z-50 transition-colors">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Point Maquininha">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
              <rect width="36" height="36" fill="#009EE3" rx="5.273" ry="5.273"></rect>
              <rect width="27.984" height="12.023" x="4.008" y="4.008" fill="#A5F3FC" rx="1.758" ry="1.758"></rect>
              <g fill="#2E3441">
                <circle cx="6.012" cy="21.973" r="2.004"></circle>
                <circle cx="6.012" cy="29.988" r="2.004"></circle>
                <circle cx="14.027" cy="21.973" r="2.004"></circle>
                <circle cx="14.027" cy="29.988" r="2.004"></circle>
                <circle cx="21.973" cy="21.973" r="2.004"></circle>
                <circle cx="21.973" cy="29.988" r="2.004"></circle>
                <circle cx="29.988" cy="21.973" r="2.004"></circle>
                <circle cx="29.988" cy="29.988" r="2.004"></circle>
              </g>
            </svg>
            <span className="font-extrabold leading-3 dark:text-white">
              Enoc <br /> maquininha
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <MenuPopover />
          
          <button 
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-slate-800"
            aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          >
            {theme === 'light' ? 
              <MoonIcon className="h-5 w-5" /> : 
              <SunIcon className="h-5 w-5 text-white" />
            }
          </button>
          
          <Link href="/dashboard" className="text-brand hover:text-brand-dark font-medium">
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
```


---
### 📄 Arquivo: `src/components/MenuPopover.js`

```javascript
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu, X, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchProductData } from '../data/productData';
import { useTheme } from '../contexts/ThemeContext';

const MenuPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentMachine, setCurrentMachine] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);
  const productData = fetchProductData();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const machineNames = productData.reduce((acc, product) => {
      acc[product.urlInfo] = product.name;
      return acc;
    }, {});

    const matchingPath = Object.keys(machineNames).find(path => pathname.startsWith(path));
    if (matchingPath) {
      setCurrentMachine(machineNames[matchingPath]);
    } else {
      setCurrentMachine('Modelos');
    }
  }, [pathname, productData]);

  const handleItemClick = (machineName, path) => {
    setIsOpen(false);
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white dark:bg-slate-900 shadow fixed top-0 left-0 w-full z-50 transition-colors border-b dark:border-slate-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Point Maquininha">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
              <rect width="36" height="36" fill="#009EE3" rx="5.273" ry="5.273"></rect>
              <rect width="27.984" height="12.023" x="4.008" y="4.008" fill="#A5F3FC" rx="1.758" ry="1.758"></rect>
              <g fill="#2E3441">
                <circle cx="6.012" cy="21.973" r="2.004"></circle>
                <circle cx="6.012" cy="29.988" r="2.004"></circle>
                <circle cx="14.027" cy="21.973" r="2.004"></circle>
                <circle cx="14.027" cy="29.988" r="2.004"></circle>
                <circle cx="21.973" cy="21.973" r="2.004"></circle>
                <circle cx="21.973" cy="29.988" r="2.004"></circle>
                <circle cx="29.988" cy="21.973" r="2.004"></circle>
                <circle cx="29.988" cy="29.988" r="2.004"></circle>
              </g>
            </svg>
            <span className="font-extrabold leading-3 dark:text-white">
              Enoc <br /> maquininha
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {currentMachine}
              <ChevronDown className="ml-2 h-5 w-5" />
            </button>
            
            {isOpen && (
              <ul className="absolute z-10 mt-2 w-[280px] bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 flex flex-col gap-2 p-4">
                {productData.map((product) => (
                  <li className="flex" key={product.name}>
                    <Link
                      className="rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-gray-50 dark:focus:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-50 dark:hover:bg-slate-700 py-2 px-4 group flex h-16 w-full items-center justify-between"
                      href={product.urlInfo}
                      onClick={() => {
                        handleItemClick(product.name, product.urlInfo);
                        setCurrentMachine(product.name);
                      }}
                    >
                      <div className="flex gap-3">
                        <div className="shrink-0">
                          <Image
                            alt={product.name}
                            loading="lazy"
                            width="25"
                            height="25"
                            src={product.imageUrl}
                          />
                        </div>
                        <div>
                          <span className="font-semibold dark:text-white">{product.name}</span>
                          <div className="space-x-2">
                            <span className="text-muted-foreground line-through dark:text-gray-400">R$ {product.normalPrice}</span>
                            <span className="dark:text-white">R$ {product.price}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <Link href="/dashboard" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium">
            Dashboard
          </Link>
          
          <button 
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 dark:text-gray-300"
            aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )}
          </button>
          
          <Link 
            href="#modelos" 
            className="bg-brand hover:bg-brand-dark text-white rounded-md px-4 py-2 flex items-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Comprar</span>
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 dark:text-gray-300"
            aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <div className="border-b dark:border-slate-800 pb-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Produtos</p>
              <ul className="space-y-2">
                {productData.map((product) => (
                  <li key={product.name}>
                    <Link
                      href={product.urlInfo}
                      className="flex items-center justify-between py-2 text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand"
                      onClick={() => handleItemClick(product.name, product.urlInfo)}
                    >
                      <div className="flex items-center">
                        <Image
                          alt={product.name}
                          loading="lazy"
                          width="20"
                          height="20"
                          src={product.imageUrl}
                          className="mr-2"
                        />
                        <span>{product.name}</span>
                      </div>
                      <span className="text-sm font-medium text-brand">R$ {product.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link 
              href="/dashboard"
              className="flex items-center py-2 text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            
            <Link 
              href="#modelos"
              className="bg-brand hover:bg-brand-dark text-white rounded-md px-4 py-2 flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Comprar Agora</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default MenuPopover;
```


---
### 📄 Arquivo: `src/components/MercadoPagoHero.js`

```javascript
import React from 'react';
import Image from 'next/image';
import { CreditCard, Banknote, CalendarX } from 'lucide-react';

const MercadoPagoHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#068ee4] to-[#020b7c] pb-24 pt-8 md:pt-12 m-0">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2  ">
        <div className="flex flex-col  gap-4 text-center md:items-start md:justify-center md:text-left max-w-[480px] ">
        <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand border-transparent hover:bg-brand/80 uppercase text-white max-w-[200px] justify-center mx-auto md:mx-0">
            Mercado Pago Point
          </div>
          <h1 className="text-2xl font-black uppercase leading-tight text-white sm:text-2xl md:text-4xl mt-4">
            Escolha a maquininha perfeita para o seu negócio
          </h1>
        </div>
        <div className="flex justify-center mt-10">
          <Image
            src="/images/hero.webp"
            alt="hero-image"
            width={450}
            height={450}
            priority
            className="object-contain"
          />
        </div>
      </div>
      <ul className="container mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8 text-sm leading-tight text-white">
        <FeatureItem icon={<CreditCard />} text="Conta digital e cartão gratuito" />
        <FeatureItem icon={<Banknote />} text="Dinheiro na hora" />
        <FeatureItem icon={<CreditIcon />} text="Crédito na hora sob medida" />
        <FeatureItem icon={<CalendarX />} text="Sem mensalidades" />
      </ul>
    </section>
  );
};

const FeatureItem = ({ icon, text }) => (
  <li className="flex items-center gap-3">
    {icon}
    <span>{text}</span>
  </li>
);

const CreditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" width="24" height="24" strokeWidth="2" className="shrink-0">
    <rect width="3.8" height="7.6" x="2" y="12.52" rx=".48" ry=".48" />
    <path d="M5.8 18.58h.96c.31 0 .61.08.89.22l3.61 1.9c.77.41 1.69.44 2.49.08l7.38-3.28a1.5 1.5 0 0 0 .78-1.92h0a1.5 1.5 0 0 0-1.98-.82l-4.74 2.06m-9.37-2.88 2.44-.9c.94-.35 1.98-.31 2.89.1l3.36 1.53c.73.33 1.07 1.17.77 1.91h0a1.49 1.49 0 0 1-1.99.81l-3.56-1.58" />
    <circle cx="15.3" cy="6.77" r="3.8" />
  </svg>
);

export default MercadoPagoHero;
```


---
### 📄 Arquivo: `src/components/OptimizedImage.js`

```javascript
// components/OptimizedImage.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function OptimizedImage({ src, alt, width, height, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
  }, [src]);

  return (
    <div className={`relative ${props.className || ''}`} style={{ width, height }}>
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
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
}
```


---
### 📄 Arquivo: `src/components/PlanCard.js`

```javascript
import React from 'react';

const PlanCard = ({ title, isPromotional, features, promoDetails, rates, afterPromoRates }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {isPromotional && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
            Promocional
          </span>
        )}
      </div>
      
      <ul className="mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start mb-2">
            <svg className="w-4 h-4 text-green-500 mr-2 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      {promoDetails && (
        <div className="bg-green-100 p-3 rounded-md mb-4">
          <p className="text-xs text-center text-green-800">{promoDetails}</p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {Object.entries(rates).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-xs text-gray-600 ">{key}</p>
                <p className="font-bold text-green-600 text-xs">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {afterPromoRates && (
        <div>
          <p className="text-xs mb-2">Depois, para vendas acima de R$ 2 mil ao mês</p>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(afterPromoRates).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-xs text-gray-600">{key}</p>
                <p className="font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanCard;
```


---
### 📄 Arquivo: `src/components/ProductCard.js`

```javascript
import React from 'react';
import { BellRing } from 'lucide-react';
import { FaBatteryFull, FaWifi, FaCreditCard, FaShieldAlt, FaPrint, FaSimCard, FaRulerCombined, FaWeight } from 'react-icons/fa';
import Image from 'next/image';

// const iconMapping = {
//     "bateria": <FaBatteryFull className="mr-2 text-sky-500" />,
//     "wifi": <FaWifi className="mr-2 text-sky-500" />,
//     "débito, crédito, código QR e Pix": <FaCreditCard className="mr-2 text-sky-500" />,
//     "conta digital e cartão gratuito": <FaShieldAlt className="mr-2 text-sky-500" />,
//     "garantia": <FaShieldAlt className="mr-2 text-sky-500" />,
//     "Imprime o comprovante": <FaPrint className="mr-2 text-sky-500" />,
//     "Cartão com chip, tarja magnética e por aproximação": <FaSimCard className="mr-2 text-sky-500" />,
//     "dimensões": <FaRulerCombined className="mr-2 text-sky-500" />,
//     "peso": <FaWeight className="mr-2 text-sky-500" />
//   };

const iconMapping = {
    "bateria": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-medium h-5 w-5 shrink-0 text-sky-500">
            <rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect>
            <line x1="22" x2="22" y1="11" y2="13"></line>
            <line x1="6" x2="6" y1="11" y2="13"></line>
            <line x1="10" x2="10" y1="11" y2="13"></line>
        </svg>
    ),
    "wifi": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi h-5 w-5 shrink-0 text-sky-500">
            <path d="M12 20h.01"></path>
            <path d="M2 8.82a15 15 0 0 1 20 0"></path>
            <path d="M5 12.859a10 10 0 0 1 14 0"></path>
            <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
        </svg>
    ),
    "conta digital e cartão gratuito": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-5 w-5 shrink-0 text-sky-500">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    ),
    "garantia": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-5 w-5 shrink-0 text-sky-500">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    ),
    "Imprime o comprovante": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-receipt h-5 w-5 shrink-0 text-sky-500">
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path>
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
            <path d="M12 17.5v-11"></path>
        </svg>
    ),
    "Cartão com chip, tarja magnética e por aproximação": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card h-5 w-5 shrink-0 text-sky-500">
            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
            <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
    ),
    "dimensões": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ruler h-5 w-5 shrink-0 text-sky-500">
            <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path>
            <path d="m14.5 12.5 2-2"></path>
            <path d="m11.5 9.5 2-2"></path>
            <path d="m8.5 6.5 2-2"></path>
            <path d="m17.5 15.5 2-2"></path>
        </svg>
    ),
    "peso": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell h-5 w-5 shrink-0 text-sky-500">
            <path d="M14.4 14.4 9.6 9.6"></path>
            <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path>
            <path d="m21.5 21.5-1.4-1.4"></path>
            <path d="M3.9 3.9 2.5 2.5"></path>
            <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path>
        </svg>
    ),
    "bluetooth":(
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell h-5 w-5 shrink-0 text-sky-500"><path d="m7 7 10 10-5 5V2l5 5L7 17"></path></svg>
    ),
    "sms":(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell h-5 w-5 shrink-0 text-sky-500"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
    )
};
// Função para calcular a porcentagem de desconto
const calcularDesconto = (precoNormal, precoVenda) => {
    const precoNormalNum = parseFloat(precoNormal.replace("R$", "").replace(",", ".").trim());
    const precoVendaNum = parseFloat(precoVenda.replace("R$", "").replace(",", ".").trim());
    const desconto = ((precoNormalNum - precoVendaNum) / precoNormalNum) * 100;
    return Math.round(desconto);
  };

const ProductCard = ({ product }) => {
    const desconto = calcularDesconto(product.normalPrice, product.price);

    return (
        <div id="modelos" className="card relative rounded-lg rounded-tl-xl border bg-white p-4 pt-10 shadow z-10">
            {/* Ícone superior direito */}
            <div className="absolute -left-px -top-px rounded-br-lg rounded-tl-lg border-b border-r bg-gradient-to-r from-[#1aa271] to-[#00b87d] px-2 py-1">
                {/* Ícone SVG complexo - Substitua pelo seu ícone ou imagem */}
                <div className='flex items-center gap-1 text-xs font-medium text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-percent "><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg>
                    <span>{desconto}% OFF</span>
                    <small>|</small>
                    <span className="uppercase tracking-wide text-yellow-200 font-medium text-xs">Frete Grátis</span>
                </div>
            </div>

            {(product.name.toLowerCase().includes('pro') || product.name.toLowerCase().includes('smart')) && (
        <div className='absolute -top-4 right-4 sm:right-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 499.7" width="50" height="50">
            <defs>
              <linearGradient id="a" x1="285.41" x2="285.41" y1="498.27" y2="305.05" gradientTransform="rotate(-20 268.672 380.863)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#5558ff"></stop>
                <stop offset="1" stopColor="#2f86ff"></stop>
              </linearGradient>
              <linearGradient xlinkHref="#a" id="c" x1="470.36" x2="470.36" y1="565.59" y2="372.37" gradientTransform="scale(-1 1) rotate(-20 -20.738 2022.189)"></linearGradient>
              <linearGradient id="d" x1="191" x2="191" y1="382" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#aedcff"></stop>
                <stop offset="1" stopColor="#eaf6ff"></stop>
              </linearGradient>
              <linearGradient id="b" x1="190.75" x2="190.75" y1="283.53" y2="98.47" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2b8cff"></stop>
                <stop offset="1" stopColor="#00bfff"></stop>
              </linearGradient>
              <linearGradient xlinkHref="#b" id="e" x1="125.54" x2="125.54" y1="185.5" y2="101.09"></linearGradient>
              <linearGradient xlinkHref="#b" id="f" x1="256.46" x2="256.46" y1="280.92" y2="196.5"></linearGradient>
            </defs>
            <path fill="url(#a)" d="M308.75 285.6 208.2 322.2l61.17 168.06c4.49 12.33 21.8 12.67 26.76.52l16.09-39.36 37.5 19.79c11.61 6.13 24.67-5.26 20.18-17.6L308.75 285.6Z"></path>
            <path fill="url(#c)" d="m73.25 285.6 100.55 36.6-61.17 168.06c-4.49 12.33-21.8 12.67-26.76.52l-16.09-39.36-37.5 19.79c-11.61 6.13-24.67-5.26-20.18-17.6L73.25 285.6Z"></path>
            <path fill="url(#d)" d="M382 191c0 16.38-17.88 30.2-21.92 45.31-4.18 15.64 4.28 36.52-3.64 50.21-8.03 13.89-30.42 16.96-41.69 28.23s-14.34 33.66-28.23 41.69c-13.69 7.92-34.57-.54-50.21 3.64S207.38 382 191 382s-30.2-17.88-45.31-21.92-36.52 4.28-50.21-3.64c-13.89-8.03-16.96-30.42-28.23-41.69s-33.66-14.34-41.69-28.23.54-34.57-3.64-50.21S0 207.38 0 191s17.88-30.2 21.92-45.31-4.28-36.52 3.64-50.21 30.42-16.96 41.69-28.23c11.27-11.27 14.34-33.66 28.23-41.69s34.57.54 50.21-3.64S174.62 0 191 0s30.2 17.88 45.31 21.92 36.52-4.28 50.21 3.64c13.89 8.03 16.96 30.42 28.23 41.69s33.66 14.34 41.69 28.23c7.92 13.69-.54 34.57 3.64 50.21S382 174.62 382 191Z"></path>
            <path fill="url(#b)" d="M237.18 99.68c-5.48-2.79-12.18-.6-14.96 4.88l-82.77 162.79c-2.79 5.48-.6 12.18 4.88 14.96a11.12 11.12 0 0 0 14.96-4.88l82.77-162.79c2.79-5.48.6-12.18-4.88-14.96Z"></path>
            <path fill="url(#e)" d="M167.75 143.29c0-23.27-18.93-42.21-42.21-42.21-23.27 0-42.21 18.93-42.21 42.21s18.93 42.21 42.21 42.21 42.21-18.93 42.21-42.21Zm-42.21 19.95c-11 0-19.95-8.95-19.95-19.95s8.95-19.95 19.95-19.95 19.95 8.95 19.95 19.95-8.95 19.95-19.95 19.95Z"></path>
            <path fill="url(#f)" d="M256.46 196.5c-23.27 0-42.21 18.93-42.21 42.21s18.93 42.21 42.21 42.21 42.21-18.93 42.21-42.21-18.93-42.21-42.21-42.21Zm0 62.15c-11 0-19.95-8.95-19.95-19.95s8.95-19.95 19.95-19.95 19.95 8.95 19.95 19.95-8.95 19.95-19.95 19.95Z"></path>
          </svg>
        </div>
      )}

            {/* Conteúdo do Produto */}
            <div className="relative flex gap-4 lg:block">
            {product.name.toLowerCase().includes('point pro 3') && (
        <div className="absolute left-0 top-0 flex items-center gap-1 rounded-br-md rounded-tl-md bg-rose-500 px-2 py-0.5 text-xs font-medium text-white lg:rounded">
          <BellRing size={14} />
          <span className="">NOVA</span>
        </div>
      )}
                <div className="flex w-2/5 shrink-0 items-center justify-center rounded-md bg-muted p-2 sm:h-[184px] lg:mx-auto lg:h-full lg:w-full lg:bg-transparent py-6 sm:py-2">
                    <Image
                        alt={product.name}
                        src={product.imageUrl}
                        width="70"
                        height="122"
                        decoding="async"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col justify-center gap-4 lg:text-center">
                    <div className='space-y-1'>
                        <h2 className="text-lg font-semibold leading-tight">{product.name}</h2>
                        <p className="text-sm text-gray-500">{product.info}</p>
                    </div>
                    <div className="flex flex-col"><span className="text-muted-foreground line-through lg:text-lg">R$&nbsp;{product.normalPrice}</span><span className="text-lg font-semibold lg:text-2xl">R$&nbsp;{product.price}</span></div>
                </div>
            </div>
                <a href={product.urlBuy} className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand hover:bg-brand-dark text-white py-2 px-4 mt-5 h-12 w-full text-base">Comprar agora</a>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-5"></div>
                <ul className="mr-2 flex flex-col gap-3">
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 shrink-0 text-brand"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span className="ml-3 text-sm leading-tight">Aceita débito, crédito, código QR e Pix</span>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 shrink-0 text-brand"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span className="ml-3 text-sm leading-tight">Inclui conta digital e cartão gratuito</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 shrink-0 text-brand"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path>
                                </svg>
                                <span className="ml-3 text-sm leading-tight">3 anos de garantia</span></li>
                                </ul>
                                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-5"></div>
                <ul className="mr-2 flex flex-col gap-3">
                    {product.specifications.map((spec, index) => (
                        <li key={index} className="flex items-center">
                            {iconMapping[spec.type] } {/* Ícone antes da especificação */}
                            <span className='ml-3 text-sm leading-tight'>{spec.text}</span>
                        </li>
                    ))}
                </ul>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-5"></div>
                <a className="relative inline-flex items-center justify-center shrink-0 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4 w-full" href={product.urlInfo}>Mais informações<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
        </div>
    );
};

export default ProductCard;
```


---
### 📄 Arquivo: `src/components/ProductCatalog.js`

```javascript
// src/components/ProductCatalog.js
'use client';
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProductData } from '../data/productData';
import { Filter, Search } from 'lucide-react';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    const allProducts = fetchProductData();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.info.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply price filter
    result = result.filter(product => {
      const price = parseFloat(product.price.replace(',', '.'));
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Apply sorting
    if (sortOption === 'price-asc') {
      result.sort((a, b) => parseFloat(a.price.replace(',', '.')) - parseFloat(b.price.replace(',', '.')));
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => parseFloat(b.price.replace(',', '.')) - parseFloat(a.price.replace(',', '.')));
    } else if (sortOption === 'discount') {
      result.sort((a, b) => {
        const discountA = parseFloat(a.normalPrice.replace(',', '.')) - parseFloat(a.price.replace(',', '.'));
        const discountB = parseFloat(b.normalPrice.replace(',', '.')) - parseFloat(b.price.replace(',', '.'));
        return discountB - discountA;
      });
    }
    
    setFilteredProducts(result);
  }, [searchTerm, products, priceRange, sortOption]);

  return (
    <section className="-mt-24 bg-primary-foreground dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold dark:text-white">Nossos Produtos</h2>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full md:w-64 px-4 py-2 pl-10 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
            </div>
            
            <button
              className="px-4 py-2 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-white flex items-center gap-2"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter size={16} />
              <span className="hidden md:inline">Filtros</span>
            </button>
          </div>
        </div>
        
        {filterOpen && (
          <div className="mb-8 p-4 bg-white dark:bg-slate-800 rounded-md shadow-md transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2 dark:text-white">Faixa de Preço</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <span className="text-sm font-medium dark:text-white">
                    R$ {priceRange[0]} - R$ {priceRange[1]}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 dark:text-white">Ordenar por</h3>
                <select
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-slate-800 dark:text-white"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Relevância</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                  <option value="discount">Maior Desconto</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 dark:text-white">
              <p className="text-lg">Nenhum produto encontrado com os filtros selecionados.</p>
              <button 
                className="mt-4 text-brand hover:text-brand-dark"
                onClick={() => {
                  setSearchTerm('');
                  setPriceRange([0, 1000]);
                  setSortOption('default');
                }}
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
```


---
### 📄 Arquivo: `src/components/ProductComparison.js`

```javascript
'use client';
import React, { useState } from 'react';
import { fetchProductData } from '../data/productData';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

const ProductComparison = () => {
  const products = fetchProductData();
  const [selectedProducts, setSelectedProducts] = useState(products.map(p => p.name));

  const handleProductToggle = (productName) => {
    if (selectedProducts.includes(productName)) {
      if (selectedProducts.length > 1) {
        setSelectedProducts(selectedProducts.filter(p => p !== productName));
      }
    } else {
      setSelectedProducts([...selectedProducts, productName]);
    }
  };

  const filteredProducts = products.filter(p => selectedProducts.includes(p.name));

  return (
    <section className="bg-white dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">Compare as Maquininhas</h2>
        
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {products.map((product) => (
            <button
              key={product.name}
              onClick={() => handleProductToggle(product.name)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedProducts.includes(product.name)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-gray-300'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 border-b dark:border-slate-700"></th>
                {filteredProducts.map((product) => (
                  <th key={product.name} className="py-4 px-6 border-b dark:border-slate-700 text-center">
                    <div className="flex flex-col items-center">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-16 h-16 object-contain mb-2"
                      />
                      <span className="font-semibold dark:text-white">{product.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">R$ {product.price}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-6 border-b dark:border-slate-700 font-medium dark:text-white">Conexão</td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-3 px-6 border-b dark:border-slate-700 text-center dark:text-gray-300">
                    {product.specifications.some(s => s.type === "wifi") ? "Wi-Fi + 4G" : "Bluetooth"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-6 border-b dark:border-slate-700 font-medium dark:text-white">Bateria</td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-3 px-6 border-b dark:border-slate-700 text-center dark:text-gray-300">
                    {product.specifications.find(s => s.type === "bateria")?.text || "N/A"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-6 border-b dark:border-slate-700 font-medium dark:text-white">Imprime Comprovante</td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-3 px-6 border-b dark:border-slate-700 text-center">
                    {product.specifications.some(s => s.type === "Imprime o comprovante") ? (
                      <Check className="mx-auto text-green-500" size={20} />
                    ) : (
                      <X className="mx-auto text-red-500" size={20} />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-6 border-b dark:border-slate-700 font-medium dark:text-white">Peso</td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-3 px-6 border-b dark:border-slate-700 text-center dark:text-gray-300">
                    {product.specifications.find(s => s.type === "peso")?.text || "N/A"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-6 border-b dark:border-slate-700 font-medium dark:text-white">Dimensões</td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-3 px-6 border-b dark:border-slate-700 text-center dark:text-gray-300">
                    {product.specifications.find(s => s.type === "dimensões")?.text || "N/A"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-5 px-6 dark:text-white"></td>
                {filteredProducts.map((product) => (
                  <td key={product.name} className="py-5 px-6 text-center">
                    <Link
                      href={product.urlBuy}
                      className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-md inline-block"
                    >
                      Comprar
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
```


---
### 📄 Arquivo: `src/components/ProductDetail.js`

```javascript
// components/ProductDetail.js
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CircleCheckBig, Truck, CreditCard, Calendar, Shield } from 'lucide-react';

const ProductDetail = ({ product }) => {
  const [activeTab, setActiveTab] = useState('specifications');

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex justify-center items-center bg-white/10 rounded-lg p-6">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-lg">{product.info}</p>
              <div className="mt-4">
                <span className="text-xl line-through opacity-75">R$ {product.normalPrice}</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-3xl font-bold">R$ {product.price}</span>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {Math.round((parseFloat(product.normalPrice.replace(',', '.')) - parseFloat(product.price.replace(',', '.'))) / parseFloat(product.normalPrice.replace(',', '.')) * 100)}% OFF
                  </span>
                </div>
                <p className="text-sm mt-1">ou em até 12x sem juros</p>
              </div>
              <a 
                href={product.urlBuy} 
                className="mt-6 bg-white text-blue-700 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Comprar agora
                <Truck size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex flex-wrap">
            <button
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'specifications'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('specifications')}
            >
              Especificações
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'details'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('details')}
            >
              Detalhes
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'shipping'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('shipping')}
            >
              Envio
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-4 dark:text-white">Características</h3>
                <ul className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center">
                      <CircleCheckBig className="h-5 w-5 shrink-0 text-brand mr-3" />
                      <span className="text-sm leading-tight dark:text-gray-300">{spec.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-4 dark:text-white">Benefícios</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CircleCheckBig className="h-5 w-5 shrink-0 text-brand mr-3" />
                    <span className="text-sm leading-tight dark:text-gray-300">Aceita débito, crédito, código QR e Pix</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheckBig className="h-5 w-5 shrink-0 text-brand mr-3" />
                    <span className="text-sm leading-tight dark:text-gray-300">Inclui conta digital e cartão gratuito</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheckBig className="h-5 w-5 shrink-0 text-brand mr-3" />
                    <span className="text-sm leading-tight dark:text-gray-300">3 anos de garantia</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-6">
              <h3 className="font-medium text-lg mb-4 dark:text-white">Sobre este produto</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A maquininha {product.name} é a solução ideal para empreendedores que buscam praticidade e segurança nas vendas.
                Com design moderno e funcionalidades avançadas, ela permite receber pagamentos de forma rápida e segura.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="text-brand" />
                    <h4 className="font-medium dark:text-white">Pagamentos</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Aceita cartões de crédito, débito, pagamentos por aproximação e Pix.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="text-brand" />
                    <h4 className="font-medium dark:text-white">Recebimento</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Receba o dinheiro na hora ou escolha receber em até 30 dias com taxas reduzidas.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="text-brand" />
                    <h4 className="font-medium dark:text-white">Segurança</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Todas as transações são criptografadas e seguem os mais altos padrões de segurança.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-6">
              <h3 className="font-medium text-lg mb-4 dark:text-white">Informações de Envio</h3>
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <Truck className="text-brand mt-1" />
                <div>
                  <h4 className="font-medium dark:text-white">Frete Grátis</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Entrega para todo o Brasil com prazo médio de 5 a 7 dias úteis após a confirmação do pagamento.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2 dark:text-white">Perguntas frequentes sobre o envio</h4>
                <div className="space-y-4">
                  <div className="border-b pb-3 dark:border-gray-700">
                    <h5 className="font-medium text-sm dark:text-white">Como rastrear meu pedido?</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Após o envio, você receberá um código de rastreio por e-mail e SMS.
                    </p>
                  </div>
                  <div className="border-b pb-3 dark:border-gray-700">
                    <h5 className="font-medium text-sm dark:text-white">Quanto tempo leva para a entrega?</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      O prazo médio é de 5 a 7 dias úteis para todo o Brasil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
```


---
### 📄 Arquivo: `src/components/Produtos.js`

```javascript
import ProductCard from './ProductCard';
import { fetchProductData } from '../data/productData'

const Produtos = () => {
    const productData = fetchProductData();

    return (
        <section className='-mt-24 bg-primary-foreground'>
            <div className='grid grid-cols-1 justify-center gap-8 px-4 py-8 sm:grid-cols-[repeat(auto-fit,_minmax(256px,_256px))]'>
            {productData.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
                  </div>
        </section>
    );
  };

export default Produtos;
```


---
### 📄 Arquivo: `src/components/ReviewsAndQuestions.js`

```javascript
// src/components/ReviewsAndQuestions.js
'use client';
import React, { useState } from 'react';
import { Star, MessageCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

const MOCK_REVIEWS = [
  {
    id: 1,
    user: 'Carlos Silva',
    date: '15/02/2025',
    rating: 5,
    title: 'Excelente produto, superou minhas expectativas',
    comment: 'Comprei a maquininha há 2 semanas e estou muito satisfeito. O processo de configuração foi simples e o aplicativo é muito intuitivo. Recomendo!',
    helpful: 24,
    notHelpful: 2,
  },
  {
    id: 2,
    user: 'Mariana Oliveira',
    date: '10/02/2025',
    rating: 4,
    title: 'Ótima maquininha, mas o app poderia melhorar',
    comment: 'A maquininha em si é excelente, fácil de usar e com boa duração da bateria. O único ponto que poderia melhorar é o aplicativo, que às vezes fica lento.',
    helpful: 18,
    notHelpful: 4,
  },
  {
    id: 3,
    user: 'João Mendes',
    date: '05/02/2025',
    rating: 5,
    title: 'Melhor investimento para o meu negócio',
    comment: 'Desde que comecei a usar essa maquininha, minhas vendas aumentaram significativamente. Meus clientes adoram a facilidade de pagamento e eu adoro as taxas baixas!',
    helpful: 32,
    notHelpful: 1,
  },
];

const MOCK_QUESTIONS = [
  {
    id: 1,
    user: 'Pedro Almeida',
    date: '18/02/2025',
    question: 'A maquininha funciona sem internet?',
    answer: 'Sim, ela pode funcionar offline para algumas operações, mas para processar pagamentos é necessário estar conectado à internet via Wi-Fi ou dados móveis.',
    helpful: 15,
    notHelpful: 2,
  },
  {
    id: 2,
    user: 'Juliana Costa',
    date: '12/02/2025',
    question: 'Qual é o tempo médio de entrega?',
    answer: 'A entrega geralmente leva de 5 a 7 dias úteis para todo o Brasil. Algumas regiões podem ter prazos diferenciados.',
    helpful: 20,
    notHelpful: 0,
  },
  {
    id: 3,
    user: 'Rafael Souza',
    date: '08/02/2025',
    question: 'Posso usar a maquininha em outro país?',
    answer: 'A maquininha foi projetada para uso no Brasil e opera com a rede brasileira. Para uso internacional, recomendamos entrar em contato com o suporte para verificar a compatibilidade.',
    helpful: 12,
    notHelpful: 1,
  },
];

const ReviewsAndQuestions = ({ productName }) => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [sortBy, setSortBy] = useState('recent');
  
  const sortedReviews = [...MOCK_REVIEWS].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date.split('/').reverse().join('-')) - new Date(a.date.split('/').reverse().join('-'));
    } else if (sortBy === 'helpful') {
      return b.helpful - a.helpful;
    } else if (sortBy === 'rating-high') {
      return b.rating - a.rating;
    } else if (sortBy === 'rating-low') {
      return a.rating - b.rating;
    }
    return 0;
  });
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden mt-8">
      <div className="flex border-b dark:border-slate-700">
        <button
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === 'reviews'
              ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Avaliações ({MOCK_REVIEWS.length})
        </button>
        <button
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === 'questions'
              ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('questions')}
        >
          Perguntas ({MOCK_QUESTIONS.length})
        </button>
      </div>
      
      <div className="p-6">
        {activeTab === 'reviews' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold dark:text-white">Avaliações de clientes para {productName}</h3>
              <div className="flex items-center">
                <label htmlFor="sortReviews" className="text-sm mr-2 dark:text-gray-300">
                  Ordenar por:
                </label>
                <select
                  id="sortReviews"
                  className="border rounded-md py-1 px-2 text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="recent">Mais recentes</option>
                  <option value="helpful">Mais úteis</option>
                  <option value="rating-high">Maior avaliação</option>
                  <option value="rating-low">Menor avaliação</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {sortedReviews.map((review) => (
                <div key={review.id} className="border-b dark:border-slate-700 pb-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium dark:text-white">{review.title}</h4>
                      <div className="flex items-center mt-1">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              fill={review.rating >= star ? '#F59E0B' : 'none'}
                              className={`h-4 w-4 ${
                                review.rating >= star ? 'text-yellow-500' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          por {review.user} em {review.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{review.helpful}</span>
                      </button>
                      <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        <span>{review.notHelpful}</span>
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{review.comment}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white px-4 py-2 rounded-md text-sm font-medium">
                Ver todas as avaliações
              </button>
            </div>
          </>
        )}

        {activeTab === 'questions' && (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Perguntas e respostas</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tem dúvidas sobre o {productName}? Veja as perguntas mais frequentes ou faça a sua própria.
              </p>
            </div>

            <div className="space-y-6">
              {MOCK_QUESTIONS.map((question) => (
                <div key={question.id} className="border-b dark:border-slate-700 pb-6">
                  <div className="flex items-start">
                    <MessageCircle className="h-5 w-5 text-brand mr-2 mt-1 shrink-0" />
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium dark:text-white">{question.question}</h4>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Perguntado por {question.user} em {question.date}
                      </span>
                      <div className="mt-3 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-300">{question.answer}</p>
                      </div>
                      <div className="mt-2 flex items-center space-x-4">
                        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>Útil ({question.helpful})</span>
                        </button>
                        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          <span>Não útil ({question.notHelpful})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-slate-700 p-4 rounded-md">
              <h4 className="font-medium mb-2 dark:text-white">Faça sua pergunta</h4>
              <textarea
                className="w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:border-slate-600 dark:text-white mb-3"
                rows="3"
                placeholder="Digite sua dúvida sobre este produto..."
              ></textarea>
              <button className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-md text-sm font-medium">
                Enviar pergunta
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewsAndQuestions;
```


---
### 📄 Arquivo: `src/components/SectionConta.js`

```javascript
import Image from 'next/image';

const SectionConta = () => {
    return (
        <section >
            <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
                <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-2xl">Faça tudo pela sua conta Mercado Pago</h2>
                <ul className="space-y-6"><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span> <strong>Pague boletos</strong> e recarregue seu celular ou cartão de transporte pelo app de Mercado Pago.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span> <strong>Compre no Mercado Livre</strong> e em centenas de lojas com o cartão Mercado Pago ou código QR.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span> <strong>Gere mais rendimentos</strong> do que com a poupança.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span> <strong>Receba um crédito</strong> on-line e na hora.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Crie uma <strong>conta PJ gratuita</strong> e sem burocracia.</span></li></ul>
                <div className="row-start-2 self-center sm:row-start-1 sm:row-end-3">
      <Image 
        alt="account features" 
        loading="lazy" 
        width={500} 
        height={500} 
        decoding="async" 
        src="/images/account-features.webp" 
        quality={75} 
        sizes="(max-width: 640px) 640px, 1080px"
      />
    </div>

            </div>
            <div className='card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2'>
            <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-3xl">Muitas formas de sacar seu dinheiro</h2>
            <ul className="space-y-6"><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Faça transferências para contas bancárias ou digitais.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Saque dinheiro sem cartão em caixas do Banco24Horas.</span></li></ul>
            <div className='row-start-2 self-center sm:row-start-1 sm:row-end-3'>
            <Image 
              alt="ways to withdraw" 
              loading="lazy" 
              width={500} 
              height={500} 
              decoding="async" 
              data-nimg="1" 
              style={{ color: "transparent" }}
              src="/images/ways-to-withdraw.webp"
              quality={75} 
              sizes="(max-width: 640px) 640px, 1080px"
            />
            </div>
            </div>
        </section>
        
    );
}

export default SectionConta;
```


---
### 📄 Arquivo: `src/components/SectionCredito.js`

```javascript
import Image from "next/image";

const SectionCredito = () => {
    return (
        <section className="bg-primary-foreground">
        <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
        <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-3xl">Usar a Point pode te dar acesso a um crédito</h2>
        <div>
        <p>Ao cobrar com a Point, você tem acesso ao Mercado Crédito.</p>
        <ul className="mt-8 space-y-6"><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Sem papelada nem burocracia e sem custos adicionais.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>100% online, disponível na hora na sua conta do Mercado Pago.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Pague em parcelas fixas ou com uma porcentagem das suas vendas.</span></li></ul>
        </div>
        <div className="row-start-2 self-center sm:col-start-2 sm:row-start-1 sm:row-end-3">
        <Image
          alt="loan" 
          loading="lazy" 
          width={500} 
          height={500} 
          decoding="async" 
          data-nimg="1" 
          style={{ color: "transparent" }} 
          src="/images/loan.webp"
        />
        </div>
          
        </div>
        </section>
    );
    }

export default SectionCredito;
```


---
### 📄 Arquivo: `src/components/SectionLinkVendas.js`

```javascript
import Image from "next/image";

const SectionLinkVendas = () => {
    return (
        <section className="">
        <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
        <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-3xl">Venda parcelado nas redes sociais com um Link de pagamento</h2>
        <div><ul className="space-y-6"><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>É só criar um link e enviá-lo ao seu cliente.</span></li></ul></div>
        <div className="row-start-2 self-center sm:row-start-1 sm:row-end-3">
        <Image 
          alt="payment link" 
          loading="lazy" 
          width={500} 
          height={500} 
          decoding="async" 
          data-nimg="1" 
          style={{ color: "transparent" }} 
          src="/images/payment-link.webp"
        />
        </div>
        
        </div>
        </section>
    );

}

export default SectionLinkVendas;
```


---
### 📄 Arquivo: `src/components/SectionNovaAir.js`

```javascript
import Image from "next/image";

const SectionNovaAir = () => {
    return (
        <section >
        <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
        <div className="space-y-4 self-end text-center sm:text-left"><span className="text-sm font-bold uppercase text-brand">Nova Point Air</span><h2 className="text-2xl font-semibold sm:text-3xl">A maquininha que cativa e inspira confiança em seus clientes</h2></div>
        <div><ul className="space-y-6"><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>A borda se ilumina para mostrar se o pagamento foi aprovado.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>A maquininha inicia rápido, para você começar a vender na mesma hora.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>A tela é ampla e colorida, dando conforto visual para vender de noite.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Não precisa de papel. Envie os comprovantes por SMS.</span></li></ul></div>
        <div className="row-start-2 self-center sm:col-start-2 sm:row-start-1 sm:row-end-3">
        <Image 
        alt="account features" 
        loading="lazy" 
        width={500} 
        height={500} 
        decoding="async" 
        src="/images/new-point-air.webp" 
        quality={75} 
        sizes="(max-width: 640px) 640px, 1080px"
      />
        </div>
        </div>
        </section>
    );
    }

export default SectionNovaAir;
```


---
### 📄 Arquivo: `src/components/SectionPointAir.js`

```javascript
import Image from 'next/image';

const SectionPointAir = () => {
    return (
        <section >
            <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
                <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-3xl">Como cobrar com a Point Air</h2>
                <div><ol className="space-y-6"><li className="flex gap-4"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">1</span><span>Ligue a maquininha e a conecte à internet. Você não precisa do celular para usar a maquininha.</span></li><li className="flex gap-4"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">2</span><span>Digite o valor, insira ou aproxime o cartão e peça para o seu cliente pagar.</span></li><li className="flex gap-4"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">3</span><span>Pronto! O comprovante será impresso. Você receberá o dinheiro das vendas na sua conta Mercado Pago.</span></li></ol><p className="mt-6 text-center sm:text-left">Você não precisa ter conta bancária para começar a vender com a Point.</p></div>
                <div className="row-start-2 self-center sm:col-start-2 sm:row-start-1 sm:row-end-3">
      <Image 
        alt="account features" 
        loading="lazy" 
        width={500} 
        height={500} 
        decoding="async" 
        src="/images/loanpro.webp" 
        quality={75} 
        sizes="(max-width: 640px) 640px, 1080px"
      />
    </div>

            </div>
         
        </section>
        
    );
}

export default SectionPointAir;
```


---
### 📄 Arquivo: `src/components/SectionPointMini.js`

```javascript
import Image from 'next/image';

const SectionPointMini = () => {
    return (
        <section >
            <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2 ">
                <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-3xl">Como cobrar com a Point Mini NFC 2 NFC 2</h2>
                <div>
                    <ol className="space-y-6">
                        <li className="flex gap-4">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">1</span>
                            <span>Baixe o aplicativo do Mercado Pago. Entre em sua conta ou cadastre-se.</span>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">2</span>
                            <span>No app, escolha &quot;Cobrar com Point&quot; e vincule a maquininha pelo Bluetooth.</span>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">3</span>
                            <span>Já pode começar a vender! Você receberá o dinheiro das vendas na sua conta Mercado Pago.</span>
                        </li>
                    </ol>
                    <p className="mt-6 text-center sm:text-left">Você não precisa ter conta bancária para começar a vender com a Point.</p>
                </div>
                <div className="row-start-2 self-center sm:col-start-2 sm:row-start-1 sm:row-end-3">
                    <Image 
                        alt="account features" 
                        loading="lazy" 
                        width={500} 
                        height={500} 
                        decoding="async" 
                        src="/images/loanpro.webp" 
                        quality={75}
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionPointMini;
```


---
### 📄 Arquivo: `src/components/SectionPointPro2.js`

```javascript
import Image from 'next/image';

const SectionPointPro2 = () => {
    return (
        <section >
            <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
                <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-3xl">Como cobrar com a Point Pro 3</h2>
                <div><ol className="space-y-6"><li className="flex gap-4"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">1</span><span>Ligue a maquininha e a conecte à internet. Você não precisa do celular para usar a maquininha.</span></li><li className="flex gap-4"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">2</span><span>Digite o valor, insira ou aproxime o cartão e peça para o seu cliente pagar.</span></li><li className="flex gap-4"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">3</span><span>Pronto! O comprovante será impresso. Você receberá o dinheiro das vendas na sua conta Mercado Pago.</span></li></ol><p className="mt-6 text-center sm:text-left">Você não precisa ter conta bancária para começar a vender com a Point.</p></div>
                <div className="row-start-2 self-center sm:col-start-2 sm:row-start-1 sm:row-end-3">
      <Image 
        alt="account features" 
        loading="lazy" 
        width={500} 
        height={500} 
        decoding="async" 
        src="/images/loanpro.webp" 
        quality={75} 
        sizes="(max-width: 640px) 640px, 1080px"
      />
    </div>

            </div>
         
        </section>
        
    );
}

export default SectionPointPro2;
```


---
### 📄 Arquivo: `src/components/SectionTaxas.js`

```javascript
const SectionTaxas = () => {
    return (
        <section className="bg-primary-foreground">
            <div className="card container space-y-8 py-16">
                <div className="space-y-4"><h2 className="text-center text-2xl font-semibold sm:text-3xl">Receba o dinheiro de suas vendas na hora</h2><p className="text-center">Você escolhe quando ter o dinheiro disponível e qual taxa pagar por cada venda.</p>
                </div>
                <div className="mx-auto flex justify-center gap-6 text-center leading-tight sm:max-w-xl">
                    <div className="flex w-full flex-col items-center gap-2 rounded bg-white p-4 shadow-xl shadow-black/5 dark:bg-accent dark:shadow-black/20"><h3 className="font-semibold uppercase text-brand">Débito na hora</h3>
                        <span className="text-2xl font-semibold">1,99%</span></div><div className="flex w-full flex-col items-center gap-2 rounded bg-white p-4 shadow-xl shadow-black/5 dark:bg-accent dark:shadow-black/20"><h3 className="font-semibold uppercase text-brand">Crédito na hora</h3><span className="text-2xl font-semibold">4,98%</span>
                    </div>
                </div>
                <div className="mx-auto grid grid-cols-1 gap-6 sm:max-w-xl sm:grid-cols-2">
                    <div className="space-y-2 sm:col-start-2"><p className="text-center">Prazos com crédito</p>
                        <div className="flex justify-between px-2 text-lg">
                            <span>Em <strong>14</strong> dias</span><span>3,79%</span>
                        </div>
                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full">
                        </div>
                        <div className="flex justify-between px-2 text-lg"><span>Em <strong>30</strong> dias</span><span>3,03%</span>
                        </div>
                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionTaxas;
```


---
### 📄 Arquivo: `src/components/TestimonialSlider.js`

```javascript
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Márcio Gonçalves",
    location: "São Paulo",
    image: "/images/testimonials/testimonial1.webp",
    quote: "O produto atendeu as minhas expectativas. O modo de usar é intuitivo e muito bem sinalizado. Recomendo para todos os comerciantes realizarem suas negociações. Os juros são os menores do mercado."
  },
  {
    name: "Roberto Martins",
    location: "Rio de janeiro",
    image: "/images/testimonials/testimonial2.webp",
    quote: "Excelente maquininha. Sou taxista e é uma mão na roda. Tem bateria de longa duração, é de fácil manuseio. Valeu o investimento que por sinal é baixíssimo. Recomendo a aquisição. As taxas cobradas estão na média do mercado financeiro."
  },
  {
    name: "Fernanda Teixeira",
    location: "Curitiba",
    image: "/images/testimonials/testimonial3.webp",
    quote: "Melhor impossível, correspondeu todas as minhas expectativas e aumentou as minhas vendas, além disso posso escolher quando quero ter o meu dinheiro disponível. Qualquer dúvida, posso entrar em contato que ela é esclarecida. Recomendo!"
  },
  {
    name: "Marilene Ferreira",
    location: "Salvador",
    image: "/images/testimonials/testimonial4.webp",
    quote: "Excelente! Esta maquininha torna os produtos mais acessíveis aos clientes, porque dá condição para eles comprarem. Um produto que antes era difícil, agora é possível, já que o cartão de crédito está nas mãos de todos os brasileiros."
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handlePrev = () => {
    if (!isAnimating) {
      setDirection('right');
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setDirection('left');
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-primary-foreground dark:bg-primary-foreground/30">
      <div className="card container py-16">
        <div className="relative rounded-xl border bg-white p-8 shadow-xl shadow-black/5 dark:bg-accent/60 dark:shadow-black/30 sm:px-16 sm:py-12 overflow-hidden">
          <div
            className="testimonial-slide"
            style={{
              transform: isAnimating
                ? direction === 'left'
                  ? 'translateX(100%)'
                  : 'translateX(-100%)'
                : 'translateX(0)',
              transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none',
            }}
          >
            <div className="flex flex-col items-center gap-8 sm:flex-row md:gap-12">
              <div className="h-36 w-36 shrink-0 md:h-[220px] md:w-[220px]">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  width={220}
                  height={220}
                  priority={true}
                />
              </div>
              <div className="space-y-6 text-center sm:text-left">
                <blockquote className="relative">
                  <svg
                    aria-hidden="true"
                    className="absolute -top-12 z-10 w-10 text-accent sm:-left-14 sm:top-0"
                    viewBox="0 0 24 27"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                  <q className="md:text-lg">{currentTestimonial.quote}</q>
                </blockquote>
                <figcaption className="md:text-lg">
                  <h2 className="font-semibold">{currentTestimonial.name}</h2>
                  <h3 className="text-muted-foreground">{currentTestimonial.location}</h3>
                </figcaption>
              </div>
            </div>
          </div>
          <button
            type="button"
            aria-label="previous slide"
            className="navigation slide-prev absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </button>
          <button
            type="button"
            aria-label="next slide"
            className="navigation slide-next absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
```


---
### 📄 Arquivo: `src/contexts/ThemeContext.js`

```javascript
// src/contexts/ThemeContext.js
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```


---
### 📄 Arquivo: `src/data/productData copy.js`

```javascript
'use client'

const productData = [
  {
    name: "Point Smart 2",
    normalPrice: "840,80",
    price: "239,99",
    urlBuy: "/comprar/point-smart-2",
    imageUrl: "/images/devices/device-smart.webp",
    urlInfo: "/maquininhas/point-smart-2",
    info: "A maquininha mais avançada",
    linkOperadoras:[
      {name: "Vivo", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/37728883:1"},
      {name: "Claro", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/37728885:1"},
      {name: "Tim", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/37728884:1"}
    ],
    specifications: [
      { text: "Plano de dados grátis e Wi-Fi", type: "wifi" },
      { text: "Imprime o comprovante", type: "Imprime o comprovante" },
      { text: "Cartão com chip, tarja magnética e por aproximação", type: "Cartão com chip, tarja magnética e por aproximação" },
      { text: "72 horas de bateria", type: "bateria" },
      { text: "20,1cm(C) x 8cm(L) x 6,2cm(A)", type: "dimensões" },
      { text: "440 gramas", type: "peso" }
    ]
  },
  {
    name: "Point Pro 3",
    normalPrice: "718,80",
    price: "89,99",
    imageUrl: "/images/devices/device-pro.webp",
    urlBuy: "/comprar/point-pro-3",
    urlInfo: "/maquininhas/point-pro-3",
    info: "Bateria que dura o dia todo",
    linkOperadoras:[
      {name: "Vivo", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21840125:1"},
      {name: "Claro", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21840127:1"},
      {name: "Tim", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21840126:1"}
    ],
    specifications: [
      { text: "Plano de dados grátis e Wi-Fi", type: "wifi" },
      { text: "Imprime o comprovante", type: "Imprime o comprovante" },
      { text: "Cartão com chip, tarja magnética e por aproximação", type: "Cartão com chip, tarja magnética e por aproximação" },
      { text: "48 horas de bateria", type: "bateria" },
      { text: "15,5cm(C) x 7,2cm(L) x 5,5cm(A)", type: "dimensões" },
      { text: "300 gramas", type: "peso" }
    ]
  },
  {
    name: "Point Air",
    normalPrice: "358,80",
    price: "59,99",
    urlBuy: "/comprar/point-air",
    urlInfo: "/maquininhas/point-air",
    imageUrl: "/images/devices/device-air.webp",
    info: "Não precisa de celular",
    linkOperadoras:[
      {name: "Vivo", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21838973:1"},
      {name: "Claro", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21838974:1"},
      {name: "Tim", url: "https://enoc-maquininhas-br.mycartpanda.com/checkout/158408657:1"}
    ],
    specifications: [
      { text: "Plano de dados grátis e Wi-Fi", type: "wifi" },
      { text: "Envia comprovante por SMS", type: "sms" },
      { text: "Cartão com chip, e por aproximação", type: "Cartão com chip, tarja magnética e por aproximação" },
      { text: "24 horas de bateria", type: "bateria" },
      { text: "11,6cm(C) x 6,56cm(L) x 1,7cm(A)", type: "dimensões" },
      { text: "144 gramas", type: "peso" }
    ]
  },
  {
    name: "Point Mini NFC 2",
    normalPrice: "118,80",
    price: "59,99",
    urlBuy: "/comprar/point-mini-nfc-2",
    urlInfo: "/maquininhas/point-mini-nfc-2",
    imageUrl: "/images/devices/device-mini.webp",
    info: "Use com seu celular",
    linkPedido: "https://enoc-maquininhas-br.mycartpanda.com/checkout/21840677:1",
    specifications: [
      { text: "Conexão via Bluetooth com celualar", type: "bluetooth" },
      { text: "Envia comprovante por SMS", type: "sms" },
      { text: "Cartão com chip e tarja magnética", type: "Cartão com chip, tarja magnética e por aproximação" },
      { text: "10 horas de bateria", type: "bateria" },
      { text: "10,5cm(C) x 5,8cm(L) x 1,2cm(A)", type: "dimensões" },
      { text: "88 gramas", type: "peso" }
    ]
  }
];

export const fetchProductData = () => productData;
```


---
### 📄 Arquivo: `src/data/productData.js`

```javascript
// src/data/productData.js

const productData = [
      {
        name: "Point Smart 2",
        normalPrice: "840,80",
        price: "239,99",
        urlBuy: "/comprar/point-smart-2",
        imageUrl: "/images/devices/device-smart.webp",
        urlInfo: "/maquininhas/point-smart-2",
        info: "A maquininha mais avançada",
        linkOperadoras:[
          {name: "Vivo", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/P2VI85Y7YZ"},
          {name: "Claro", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/43J1PJ1OM8"},
          {name: "Tim", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/NKV81BCPAR"}
        ],
        specifications: [
          { text: "Plano de dados grátis e Wi-Fi", type: "wifi" },
          { text: "Imprime o comprovante", type: "Imprime o comprovante" },
          { text: "Cartão com chip, tarja magnética e por aproximação", type: "Cartão com chip, tarja magnética e por aproximação" },
          { text: "72 horas de bateria", type: "bateria" },
          { text: "20,1cm(C) x 8cm(L) x 6,2cm(A)", type: "dimensões" },
          { text: "440 gramas", type: "peso" }
        ]
      },
      {
        name: "Point Pro 3",
        normalPrice: "718,80",
        price: "89,99",
        imageUrl: "/images/devices/device-pro.webp",
        urlBuy: "/comprar/point-pro-3",
        urlInfo: "/maquininhas/point-pro-3",
        info: "Bateria que dura o dia todo",
        linkOperadoras:[
          {name: "Vivo", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/NE6414IYET"},
          {name: "Claro", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/60CQTYX2JV"},
          {name: "Tim", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/25KO8KVS9F"}
        ],
        specifications: [
          { text: "Plano de dados grátis e Wi-Fi", type: "wifi" },
          { text: "Imprime o comprovante", type: "Imprime o comprovante" },
          { text: "Cartão com chip, tarja magnética e por aproximação", type: "Cartão com chip, tarja magnética e por aproximação" },
          { text: "48 horas de bateria", type: "bateria" },
          { text: "15,5cm(C) x 7,2cm(L) x 5,5cm(A)", type: "dimensões" },
          { text: "300 gramas", type: "peso" }
        ]
      },
      {
        name: "Point Air",
        normalPrice: "358,80",
        price: "59,99",
        urlBuy: "/comprar/point-air",
        urlInfo: "/maquininhas/point-air",
        imageUrl: "/images/devices/device-air.webp",
        info: "Não precisa de celular",
        linkOperadoras:[
          {name: "Vivo", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/948BUCPMM0"},
          {name: "Claro", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/7VAOZHR4W3"},
          {name: "Tim", url: "https://enoc-maquininhas-br.pay.yampi.com.br/r/93P5E7V1ZI"}
        ],
        specifications: [
          { text: "Plano de dados grátis e Wi-Fi", type: "wifi" },
          { text: "Envia comprovante por SMS", type: "sms" },
          { text: "Cartão com chip, e por aproximação", type: "Cartão com chip, tarja magnética e por aproximação" },
          { text: "24 horas de bateria", type: "bateria" },
          { text: "11,6cm(C) x 6,56cm(L) x 1,7cm(A)", type: "dimensões" },
          { text: "144 gramas", type: "peso" }
        ]
      },
      {
        name: "Point Mini NFC 2",
        normalPrice: "118,80",
        price: "59,99",
        urlBuy: "/comprar/point-mini-nfc-2",
        urlInfo: "/maquininhas/point-mini-nfc-2",
        imageUrl: "/images/devices/device-mini.webp",
        info: "Use com seu celular",
        linkPedido: "https://enoc-maquininhas-br.pay.yampi.com.br/r/40WK3PGTN0",
        specifications: [
          { text: "Conexão via Bluetooth com celualar", type: "bluetooth" },
          { text: "Envia comprovante por SMS", type: "sms" },
          { text: "Cartão com chip e tarja magnética", type: "Cartão com chip, tarja magnética e por aproximação" },
          { text: "10 horas de bateria", type: "bateria" },
          { text: "10,5cm(C) x 5,8cm(L) x 1,2cm(A)", type: "dimensões" },
          { text: "88 gramas", type: "peso" }
        ]
      }
    ];
  
  export const fetchProductData = () => productData;
```


---
### 📄 Arquivo: `src/lib/productFecth.js`

```javascript
// lib/productFetcher.js
import axios from 'axios';

export async function fetchProductPrice() {
  try {
    const { data } = await axios.get('/api/product-proxy');
    console.log( data.price);
    // Assumindo que queremos o preço do primeiro produto retornado
    const price = data.price;
    return price;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}
```


---
### 📄 Arquivo: `src/lib/utils.js`

```javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```


---
### 📄 Arquivo: `src/pages/api/product-proxy.js`

```javascript
import { NextResponse } from 'next/server';
import axios from 'axios';

export default async function handler(req, res) { 
  const shopSlug = process.env.NEXT_PUBLIC_SHOP_SLUG;
  const apiToken = process.env.API_TOKEN;

  if (!shopSlug || !apiToken) {
    console.error('Missing environment variables');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    const response = await axios({
      method: 'GET',
      url: `https://accounts.cartpanda.com/api/${shopSlug}/products/2388581`,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiToken}`
      }
    });

    const product = response.data.product;
    console.log('Full product data:', JSON.stringify(product, null, 2));

    let price = 0;

    // Check product_default_variant first
    if (product.product_default_variant && product.product_default_variant.price) {
      price = parseFloat(product.product_default_variant.price);
      console.log('Price from product_default_variant:', price);
    }

    // If price is still 0, check product_variants
    if (price === 0 && product.product_variants && product.product_variants.length > 0) {
      const variantPrices = product.product_variants
        .map(variant => parseFloat(variant.price))
        .filter(p => p > 0);

      console.log('Variant prices:', variantPrices);

      if (variantPrices.length > 0) {
        price = Math.min(...variantPrices);
        console.log('Lowest non-zero variant price:', price);
      }
    }

    console.log('Final calculated price:', price);

    return NextResponse.json({
      product: {
        ...product,
        calculatedPrice: price
      }
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: error.message },
      { status: error.response?.status || 500 }
    );
  }
}

export const runtime = 'edge';
```


---
### 📄 Arquivo: `.eslintrc.json`

```json
{
  "extends": "next/core-web-vitals"
}
```


---
### 📄 Arquivo: `generate-code-map.js`

```javascript
const fs = require('fs');
const path = require('path');

// Configurações
const EXCLUDED_DIRS = ['node_modules', '.next', '.git', '.github', 'code-map']; // Adicionado 'code-map' à exclusão
const EXCLUDED_FILES = [
  '.gitignore',
  '.env',
  'package-lock.json',
  'yarn.lock',
  'generate-code-map.js',
  'PROJECT_STRUCTURE_FULL.md'
];
const TEXT_EXTENSIONS = ['.js', '.ts', '.jsx', '.tsx', '.json', '.css', '.scss', '.html', '.md'];
const MAX_SIZE_PER_FILE = 50000; // Limite de caracteres por arquivo
const OUTPUT_DIR = 'code-map'; // Pasta onde os arquivos serão salvos

function findProjectRoot() {
  let currentDir = __dirname;
  while (currentDir !== path.parse(currentDir).root) {
    if (fs.existsSync(path.join(currentDir, 'package.json'))) {
      return currentDir;
    }
    currentDir = path.dirname(currentDir);
  }
  throw new Error('Raiz do projeto não encontrada');
}

function buildMarkdown(structure, depth = 0) {
  if (!structure || typeof structure !== 'object' || Object.keys(structure).length === 0) {
    return '';
  }

  let md = '';
  const indent = '  '.repeat(depth);

  for (const [name, item] of Object.entries(structure)) {
    if (!item) continue;

    if (item.content !== undefined) {
      md += `${indent}- 📄 ${name}\n`;
      if (item.content !== '[Arquivo binário]') {
        const ext = path.extname(name);
        const codeLang = ext === '.ts' ? 'typescript' : 
                        ext === '.js' ? 'javascript' :
                        ext.slice(1) || 'text';
        const content = item.content;
        md += `${indent}\n\`\`\`${codeLang}\n${content}\n${indent}\`\`\`\n\n`;
      }
    } else {
      md += `${indent}- 📁 ${name}/\n`;
      md += buildMarkdown(item, depth + 1);
    }
  }
  
  return md;
}

function generateMarkdownReport(structure, partName = 'FULL') {
  return `# Estrutura do Projeto - Parte ${partName}

**Gerado em:** ${new Date().toLocaleString()}  
**Node Version:** ${process.version}  
**Diretório Raiz:** \`${structure.metadata.projectRoot}\`

${buildMarkdown(structure.structure).trim()}
`;
}

function listContents(structure, prefix = '') {
  let contents = '';
  for (const [name, item] of Object.entries(structure)) {
    const fullPath = prefix ? `${prefix}${name}` : name;
    if (item.content !== undefined) {
      contents += `  - 📄 ${fullPath}\n`;
    } else {
      contents += `  - 📁 ${fullPath}/\n`;
      contents += listContents(item, `${fullPath}/`);
    }
  }
  return contents.trim();
}

function readDirectory(dirPath, rootPath) {
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    const structure = {};

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = path.relative(rootPath, fullPath);

      if (EXCLUDED_DIRS.includes(entry.name) || EXCLUDED_FILES.includes(entry.name)) {
        continue;
      }

      if (path.basename(dirPath) === 'prisma' && entry.name !== 'schema.prisma') {
        continue;
      }

      if (entry.isDirectory()) {
        const subStructure = readDirectory(fullPath, rootPath);
        if (Object.keys(subStructure).length > 0) {
          structure[entry.name] = subStructure;
        }
      } else {
        const ext = path.extname(entry.name);
        const content = TEXT_EXTENSIONS.includes(ext)
          ? fs.readFileSync(fullPath, 'utf-8')
          : '[Arquivo binário]';
        structure[entry.name] = { content, path: relativePath, size: content.length };
      }
    }
    return structure;
  } catch (error) {
    console.error(`❌ Erro em ${dirPath}: ${error.message}`);
    return { error: error.message };
  }
}

function splitStructure(structure, maxSize) {
  const parts = [];
  let currentPart = { structure: {}, metadata: structure.metadata };
  let currentSize = 0;

  const baseHeader = generateMarkdownReport({ structure: {}, metadata: structure.metadata }, 'TEMP').length;

  for (const [name, item] of Object.entries(structure.structure)) {
    const itemMd = buildMarkdown({ [name]: item });
    const itemSize = baseHeader + itemMd.length;

    if (currentSize + itemSize > maxSize && Object.keys(currentPart.structure).length > 0) {
      parts.push(currentPart);
      currentPart = { structure: {}, metadata: structure.metadata };
      currentSize = 0;
    }

    currentPart.structure[name] = item;
    currentSize += itemSize;
  }

  if (Object.keys(currentPart.structure).length > 0) {
    parts.push(currentPart);
  }

  return parts;
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function generateCodeMap() {
  try {
    const projectRoot = findProjectRoot();
    console.log('\n🚀 Iniciando geração do relatório...');

    const outputDirPath = path.join(projectRoot, OUTPUT_DIR);
    ensureDirectoryExists(outputDirPath); // Cria a pasta se não existir

    const structure = {
      metadata: {
        projectRoot,
        generatedAt: new Date().toISOString(),
        nodeVersion: process.version,
        platform: process.platform
      },
      structure: readDirectory(projectRoot, projectRoot)
    };

    const fullMd = generateMarkdownReport(structure);
    if (fullMd.length <= MAX_SIZE_PER_FILE) {
      const outputFile = path.join(outputDirPath, 'PROJECT_STRUCTURE_FULL.md');
      fs.writeFileSync(outputFile, fullMd);
      console.log('\n✅ Relatório único gerado com sucesso!');
      console.log(`📁 Arquivo: ${outputFile}`);
    } else {
      const parts = splitStructure(structure, MAX_SIZE_PER_FILE);
      let indexMd = `# Índice da Estrutura do Projeto\n\n**Gerado em:** ${new Date().toLocaleString()}\n\n`;

      parts.forEach((part, index) => {
        const partName = `PART_${index + 1}`;
        const partFile = path.join(outputDirPath, `PROJECT_STRUCTURE_${partName}.md`);
        fs.writeFileSync(partFile, generateMarkdownReport(part, partName));
        
        indexMd += `## Parte ${index + 1}\n`;
        indexMd += `- [Ver detalhes](./${partName}.md)\n`; // Caminho relativo ajustado
        indexMd += `**Conteúdo:**\n`;
        indexMd += listContents(part.structure);
        indexMd += '\n\n';
        
        console.log(`✅ Gerado: ${partFile}`);
      });

      const indexFile = path.join(outputDirPath, 'PROJECT_STRUCTURE_FULL.md');
      fs.writeFileSync(indexFile, indexMd);
      console.log('\n✅ Relatórios parciais gerados com sucesso!');
      console.log(`📁 Índice: ${indexFile}`);
    }
  } catch (error) {
    console.error('\n❌ Erro:', error.message);
    process.exit(1);
  }
}

generateCodeMap();
```


---
### 📄 Arquivo: `jsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```


---
### 📄 Arquivo: `next-env.d.ts`

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/compat/navigation" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```


---
### 📄 Arquivo: `next.config.mjs`

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
```


---
### 📄 Arquivo: `postcss.config.mjs`

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
```


---
### 📄 Arquivo: `README.md`

```markdown
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
```


---
### 📄 Arquivo: `tailwind.config.js`

```javascript
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajuste para incluir todos os arquivos relevantes
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        'muted-foreground': 'hsl(var(--muted-foreground))',
        'brand-dark': 'hsl(var(--brand-dark))',
        'brand': 'hsl(var(--brand))',
        'border': 'hsl(var(--border))',
        'secondary': 'hsl(var(--secondary))', // Adiciona a cor secondary
      },
      // Adiciona a cor secondary com opacidade
      backgroundColor: {
        'secondary/80': 'hsl(var(--secondary) / 0.8)',
      },
    },
  },
  plugins: [],
};
```


---
### 📄 Arquivo: `tsconfig.json`

```json
{
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "incremental": true,
    "module": "esnext",
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "plugins": [
      {
        "name": "next"
      }
    ],
    "strictNullChecks": true,
    "target": "ES2017"
  },
  "include": [
    "next-env.d.ts",
    ".next/types/**/*.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```


## 6. Notas da Análise e Arquivos Excluídos

*Atenção: A IA não terá acesso ao conteúdo completo dos arquivos listados abaixo devido a erros ou exclusões.*

### Arquivos Ignorados (Tamanho/Tipo/Exclusão):
- **.env.local:** [Arquivo binário ou extensão não incluída]
- **src\app\fonts\GeistMonoVF.woff:** [Arquivo binário ou extensão não incluída]
- **src\app\fonts\GeistVF.woff:** [Arquivo binário ou extensão não incluída]

## 7. Instruções e Prompts para Análise via IA

**Lembrete:** Use **apenas** o contexto fornecido neste documento.

Com base nas informações detalhadas acima, você pode solicitar à IA diversas análises. Aqui estão alguns exemplos de prompts e modelos:

**1. Identificação de Problemas e Bugs:**
   - *Prompt Exemplo:* `Revise o código em [NomeDoArquivo.ext] e [OutroArquivo.ext]. Existem possíveis bugs lógicos, condições de corrida ou erros de tratamento de exceção? Liste-os e explique por quê.`
   - *Modelo:* `Analise o fluxo de [Funcionalidade Específica] envolvendo os arquivos [ArquivoA.js], [ArquivoB.ts]. Há algum potencial para [Tipo de Erro, ex: NullPointerException, Loop Infinito]?`

**2. Sugestões de Melhoria e Refatoração:**
   - *Prompt Exemplo:* `Sugira 3 refatorações no arquivo [NomeDoArquivoLongo.java] para melhorar a legibilidade e aplicar o princípio SOLID.`
   - *Modelo:* `Olhando para o componente [NomeDoComponente.vue], como ele poderia ser otimizado para performance? Existe algum código repetido que poderia ser extraído para um utilitário?`
   - *Modelo:* `Avalie a arquitetura geral baseada na estrutura de pastas e nos pontos de entrada. Quais são os pontos fortes e fracos? Há sugestões para melhorar a separação de responsabilidades?`

**3. Análise de Performance:**
   - *Prompt Exemplo:* `No arquivo [ArquivoComLoops.py], identifique loops ou operações que podem ser gargalos de performance. Sugira otimizações.`
   - *Modelo:* `Considerando as dependências listadas ([DepA], [DepB]), existem alternativas mais performáticas conhecidas para as tarefas que elas realizam (baseado no código onde são usadas)?` (Nota: a IA pode precisar de conhecimento geral aqui, mas deve basear a aplicabilidade no código fornecido).

**4. Verificação de Segurança (Básica):**
   - *Prompt Exemplo:* `Analise o código que lida com [Entrada do Usuário/Acesso a Dados] no arquivo [SecuritySensitive.php]. Existem vulnerabilidades óbvias como [SQL Injection, XSS, etc.]?`
   - *Modelo:* `Verifique se alguma das dependências listadas ([DepX], [DepY]) tem vulnerabilidades conhecidas e críticas (CVEs).` (Nota: Requer capacidade da IA de acessar dados externos, mas pode ser solicitado).

**5. Explicação de Código:**
   - *Prompt Exemplo:* `Explique o que a função [nomeDaFuncaoComplexa] no arquivo [ArquivoComplexo.ts] faz, qual seu propósito e como ela interage com [OutraParteDoCodigo].`
   - *Modelo:* `Descreva o fluxo de dados para a funcionalidade de [Login/Cadastro/Etc.], começando por [ArquivoDeEntrada.js].`

**6. Geração de Documentação:**
   - *Prompt Exemplo:* `Gere comentários no formato JSDoc para a função [nomeDaFuncao] em [Arquivo.js].`
   - *Modelo:* `Com base no README e na estrutura, escreva uma seção de 'Como Começar' (Getting Started) para a documentação do projeto.`

**7. Perguntas Específicas:**
   - *Prompt Exemplo:* `Onde a variável de ambiente [NOME_VAR] é utilizada no projeto?`
   - *Modelo:* `Qual a versão da dependência [NomeDependencia] utilizada e onde ela é importada/requerida no código?`

**Lembre-se de ser específico em seus prompts para obter os melhores resultados!**