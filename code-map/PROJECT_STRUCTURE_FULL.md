# Análise de Projeto para IA - maquininhas-point 

**🚨 Instrução Fundamental para a IA:**
**VOCÊ DEVE USAR ESTE DOCUMENTO COMO A ÚNICA FONTE DE CONTEXTO.**
Analise o projeto, responda às perguntas e gere código/sugestões baseando-se **exclusivamente** nas informações contidas aqui (visão geral, dependências, scripts, estrutura de pastas e conteúdo dos arquivos fornecidos).
**Não invente arquivos, funções ou dependências que não estejam listados.**

---

**Gerado em:** 13/05/2025, 20:44:13
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
# Maquininhas Point

Este é um projeto de e-commerce para venda de maquininhas de cartão, desenvolvido com Next.js, React e TypeScript.

## 🚀 Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- MongoDB

## 📦 Estrutura do Projeto

```
src/
├── app/                 # Rotas e páginas da aplicação
├── components/         # Componentes React reutilizáveis
│   ├── ui/            # Componentes de UI básicos
```

## 2. Dependências

### Dependências Principais (`dependencies`):
```json
{
  "@headlessui/react": "^2.1.9",
  "@svgr/webpack": "^8.1.0",
  "axios": "^1.7.7",
  "bcrypt": "^6.0.0",
  "clsx": "^2.1.1",
  "esm": "^3.2.25",
  "lucide-react": "^0.446.0",
  "mongodb": "^6.16.0",
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
| `seed` | `node -r esm src/scripts/seed-database.js` |
| `create-admin` | `node src/scripts/create-admin.js` |

## 4. Estrutura de Pastas

```
maquininhas-point/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 api/
│   │   │   ├── 📁 auth/
│   │   │   │   └── 📁 login/
│   │   │   │       └── 📄 route.js
│   │   │   └── 📁 products/
│   │   │       ├── 📁 [id]/
│   │   │       │   └── 📄 route.js
│   │   │       ├── 📁 index/
│   │   │       │   └── 📄 route.js
│   │   │       ├── 📁 seed/
│   │   │       │   └── 📄 route.js
│   │   │       └── 📄 route.js
│   │   ├── 📁 comprar/
│   │   │   └── 📁 [model]/
│   │   │       ├── 📄 layout.js
│   │   │       ├── 📄 page.js
│   │   │       └── 📄 style.css
│   │   ├── 📁 dashboard/
│   │   │   ├── 📁 configuracoes/
│   │   │   │   └── 📄 page.js
│   │   │   ├── 📁 produtos/
│   │   │   │   └── 📄 page.js
│   │   │   ├── 📄 layout.js
│   │   │   └── 📄 page.js
│   │   ├── 📁 login/
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
│   │   │   ├── 📄 HeroSectionPointSmart.js
│   │   │   ├── 📄 IconPix.js
│   │   │   ├── 📄 SectionAboutPointPro.js
│   │   │   ├── 📄 SectionAboutPointSmart.js
│   │   │   ├── 📄 SectionPointPro.js
│   │   │   ├── 📄 SectionPointSmart.js
│   │   │   └── 📄 SectionSmartFerramenta.js
│   │   ├── 📁 ui/
│   │   │   ├── 📄 Badge.js
│   │   │   ├── 📄 Price.js
│   │   │   ├── 📄 ProductCard.js
│   │   │   └── 📄 tabs.js
│   │   ├── 📄 CardFlag.js
│   │   ├── 📄 ClientLayout.js
│   │   ├── 📄 ConhecaPointPro3.css
│   │   ├── 📄 ConhecaPointPro3.js
│   │   ├── 📄 EspecificacoesTecnicas.css
│   │   ├── 📄 EspecificacoesTecnicas.js
│   │   ├── 📄 FeedbackForm.js
│   │   ├── 📄 Footer.js
│   │   ├── 📄 Header.js
│   │   ├── 📄 MenuPopover.js
│   │   ├── 📄 MercadoPagoHero.js
│   │   ├── 📄 OptimizedImage.js
│   │   ├── 📄 PlanCard.js
│   │   ├── 📄 ProductCardClient.js
│   │   ├── 📄 ProductCatalog.js
│   │   ├── 📄 ProductComparison.js
│   │   ├── 📄 ProductDetail.js
│   │   ├── 📄 Produtos.js
│   │   ├── 📄 ProdutosClient.js
│   │   ├── 📄 ProtectedRoute.js
│   │   ├── 📄 ReviewsAndQuestions.js
│   │   ├── 📄 SectionConta.js
│   │   ├── 📄 SectionCredito.js
│   │   ├── 📄 SectionLinkVendas.js
│   │   ├── 📄 SectionNovaAir.js
│   │   ├── 📄 SectionPointAir.js
│   │   ├── 📄 SectionPointMini.js
│   │   ├── 📄 SectionPointPro2.js
│   │   ├── 📄 SectionTaxas.js
│   │   ├── 📄 SvgIcons.js
│   │   └── 📄 TestimonialSlider.js
│   ├── 📁 constants/
│   │   ├── 📄 index.js
│   │   └── 📄 taxasConstants.js
│   ├── 📁 contexts/
│   │   ├── 📄 AuthContext.js
│   │   ├── 📄 TaxasModalContext.js
│   │   └── 📄 ThemeContext.js
│   ├── 📁 data/
│   │   ├── 📄 productData copy.js
│   │   ├── 📄 productData.js
│   │   └── 📄 staticProductData.js
│   ├── 📁 hooks/
│   │   ├── 📄 useProduct.js
│   │   └── 📄 useProductCard.js
│   ├── 📁 lib/
│   │   ├── 📄 mongodb.js
│   │   ├── 📄 productCache.js
│   │   ├── 📄 productFecth.js
│   │   └── 📄 utils.js
│   ├── 📁 pages/
│   │   └── 📁 api/
│   │       ├── 📄 db-status.js
│   │       └── 📄 product-proxy.js
│   ├── 📁 scripts/
│   │   ├── 📄 create-admin.js
│   │   └── 📄 seed-database.js
│   ├── 📁 types/
│   │   └── 📄 product.ts
│   ├── 📁 utils/
│   │   ├── 📁 constants/
│   │   │   └── 📄 icons.js
│   │   ├── 📁 helpers/
│   │   │   └── 📄 format.js
│   │   └── 📄 formatters.js
│   └── 📄 README-MONGODB.md
├── 📄 .eslintrc.json
├── 📄 create-produtos-updated.js
├── 📄 create-produtos.js
├── 📄 generate-code-map.js
├── 📄 jsconfig.json
├── 📄 next-env.d.ts
├── 📄 next.config.js
├── 📄 next.config.mjs
├── 📄 postcss.config.mjs
├── 📄 README.md
├── 📄 tailwind.config.js
└── 📄 tsconfig.json
```

## 5. Conteúdo Detalhado dos Arquivos

---
### 📄 Arquivo: `src/app/api/auth/login/route.js`

```javascript
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export async function POST(request) {
  try {
    // Obter dados do corpo da requisição
    const body = await request.json();
    const { email, password } = body;

    // Validar entradas
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Conectar ao banco de dados
    const { db } = await connectToDatabase();
    const usersCollection = db.collection('users');

    // Buscar usuário pelo email
    const user = await usersCollection.findOne({ email });

    // Verificar se o usuário existe
    if (!user) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    // Verificar senha
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    // Gerar token de autenticação
    const token = crypto.randomBytes(32).toString('hex');

    // No sistema real, você armazenaria o token no banco de dados
    // e configuraria uma expiração para ele

    // Retornar resposta de sucesso
    return NextResponse.json({
      token,
      user: {
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Erro durante autenticação:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
```


---
### 📄 Arquivo: `src/app/api/products/[id]/route.js`

```javascript
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { invalidateCache } from '../../../../lib/productCache';

export const dynamic = 'force-dynamic';

// GET /api/products/[id]
export async function GET(request, { params }) {
  const id = params.id;
  console.log(`API: Recebida requisição GET /api/products/${id}`);
  
  try {
    const { db } = await connectToDatabase();
    
    if (!db) {
      console.error('Banco de dados não disponível');
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 });
    }
    
    let product;
    
    // Verificar se o ID é um ObjectId válido do MongoDB
    if (ObjectId.isValid(id)) {
      product = await db.collection('products').findOne({ _id: new ObjectId(id) });
    } 
    
    // Se não encontrou como ObjectId, tenta como string
    if (!product) {
      product = await db.collection('products').findOne({ _id: id });
    }
    
    if (!product) {
      return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
    }
    
    return NextResponse.json({ product });
  } catch (error) {
    console.error(`Erro ao buscar produto ${id}:`, error);
    return NextResponse.json({ error: 'Erro ao buscar produto', message: error.message }, { status: 500 });
  }
}

// PUT /api/products/[id]
export async function PUT(request, { params }) {
  const id = params.id;
  console.log(`API: Recebida requisição PUT /api/products/${id}`);
  
  try {
    const productData = await request.json();
    console.log('Dados recebidos para atualização:', productData);
    
    const { db } = await connectToDatabase();
    
    if (!db) {
      console.error('Banco de dados não disponível');
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 });
    }
    
    // Remover o _id do objeto para não causar conflitos na atualização
    const { _id, ...updateData } = productData;
    
    let result;
    
    // Verificar se o ID é um ObjectId válido do MongoDB
    if (ObjectId.isValid(id)) {
      result = await db.collection('products').updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );
    } else {
      result = await db.collection('products').updateOne(
        { _id: id },
        { $set: updateData }
      );
    }
    
    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
    }
    
    // Invalidar o cache para que os novos dados sejam carregados
    invalidateCache();
    console.log('Cache invalidado após atualização do produto');
    
    return NextResponse.json({
      success: true,
      message: 'Produto atualizado com sucesso',
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    console.error(`Erro ao atualizar produto ${id}:`, error);
    return NextResponse.json({ error: 'Erro ao atualizar produto', message: error.message }, { status: 500 });
  }
}

// DELETE /api/products/[id]
export async function DELETE(request, { params }) {
  const id = params.id;
  console.log(`API: Recebida requisição DELETE /api/products/${id}`);
  
  try {
    const { db } = await connectToDatabase();
    
    if (!db) {
      console.error('Banco de dados não disponível');
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 });
    }
    
    let result;
    
    // Verificar se o ID é um ObjectId válido do MongoDB
    if (ObjectId.isValid(id)) {
      result = await db.collection('products').deleteOne({ _id: new ObjectId(id) });
    } else {
      result = await db.collection('products').deleteOne({ _id: id });
    }
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
    }
    
    // Invalidar o cache após a exclusão
    invalidateCache();
    console.log('Cache invalidado após exclusão do produto');
    
    return NextResponse.json({
      success: true,
      message: 'Produto excluído com sucesso',
      deletedCount: result.deletedCount
    });
  } catch (error) {
    console.error(`Erro ao excluir produto ${id}:`, error);
    return NextResponse.json({ error: 'Erro ao excluir produto', message: error.message }, { status: 500 });
  }
}
```


---
### 📄 Arquivo: `src/app/api/products/index/route.js`

```javascript
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';
import { invalidateCache } from '../../../../lib/productCache';

export const dynamic = 'force-dynamic';

// POST /api/products/index
export async function POST(request) {
  console.log('API: Recebida requisição POST /api/products/index');
  
  try {
    const productData = await request.json();
    console.log('Dados recebidos para criação:', productData);
    
    // Validar dados mínimos necessários
    if (!productData.name || !productData.price) {
      return NextResponse.json({ 
        error: 'Dados incompletos. Nome e preço são obrigatórios.' 
      }, { status: 400 });
    }
    
    const { db } = await connectToDatabase();
    
    if (!db) {
      console.error('Banco de dados não disponível');
      return NextResponse.json({ error: 'Banco de dados não disponível' }, { status: 500 });
    }
    
    // Garantir que campos obrigatórios estejam presentes
    const productToSave = {
      ...productData,
      linkOperadoras: productData.linkOperadoras || [],
      specifications: productData.specifications || []
    };
    
    // Inserir o produto no banco de dados
    const result = await db.collection('products').insertOne(productToSave);
    
    if (!result.insertedId) {
      return NextResponse.json({ error: 'Falha ao inserir produto' }, { status: 500 });
    }
    
    // Invalidar o cache para que os novos dados sejam carregados
    invalidateCache();
    console.log('Cache invalidado após criação do produto');
    
    return NextResponse.json({
      success: true,
      message: 'Produto criado com sucesso',
      productId: result.insertedId
    });
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return NextResponse.json({ 
      error: 'Erro ao criar produto', 
      message: error.message 
    }, { status: 500 });
  }
}
```


---
### 📄 Arquivo: `src/app/api/products/seed/route.js`

```javascript
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';
import { invalidateCache } from '../../../../lib/productCache';

export const dynamic = 'force-dynamic';

// Dados estáticos para seed
const staticProducts = [
  {
    _id: "1",
    name: "Point Smart 2",
    normalPrice: "840,80",
    price: "239,99",
    urlBuy: "/comprar/point-smart-2",
    imageUrl: "/images/devices/device-smart.webp",
    urlInfo: "/maquininhas/point-smart-2",
    info: "A maquininha mais avançada",
    linkOperadoras: [
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
    _id: "2",
    name: "Point Pro 3",
    normalPrice: "718,80",
    price: "89,99",
    imageUrl: "/images/devices/device-pro.webp",
    urlBuy: "/comprar/point-pro-3",
    urlInfo: "/maquininhas/point-pro-3",
    info: "Bateria que dura o dia todo",
    linkOperadoras: [
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
    _id: "3",
    name: "Point Air",
    normalPrice: "358,80",
    price: "59,99",
    urlBuy: "/comprar/point-air",
    urlInfo: "/maquininhas/point-air",
    imageUrl: "/images/devices/device-air.webp",
    info: "Não precisa de celular",
    linkOperadoras: [
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
    _id: "4",
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

// POST /api/products/seed
export async function POST() {
  try {
    console.log('Iniciando seed da coleção products...');
    
    const { db } = await connectToDatabase();
    console.log('Conectado ao banco de dados MongoDB');
    
    // Verificar se o banco de dados está definido e não é um mock
    if (!db || typeof db.collection !== 'function') {
      console.error('Banco de dados não está disponível ou é um mock');
      return NextResponse.json({ 
        success: false, 
        message: 'Banco de dados não está disponível. Verifique a conexão com o MongoDB.' 
      }, { status: 500 });
    }
    
    // Verificar se a coleção products existe
    const collections = await db.listCollections().toArray();
    const hasProductsCollection = collections.some(c => c.name === 'products');
    
    if (!hasProductsCollection) {
      console.log('Coleção products não existe, criando...');
      await db.createCollection('products');
      console.log('Coleção products criada com sucesso');
    }
    
    // Verificar se o banco de dados está vazio
    const count = await db.collection('products').countDocuments();
    
    if (count > 0) {
      console.log(`Já existem ${count} produtos no banco de dados`);
      return NextResponse.json({ 
        success: false, 
        message: `A coleção já contém ${count} produtos. Limpe a coleção antes de executar o seed novamente.` 
      });
    }
    
    console.log(`Inserindo ${staticProducts.length} produtos...`);
    const result = await db.collection('products').insertMany(staticProducts);
    
    // Após inserir os produtos, invalidamos o cache para forçar uma recarga
    invalidateCache();
    console.log('Cache invalidado após inserção de produtos');
    
    console.log(`${result.insertedCount} produtos inseridos com sucesso!`);
    
    return NextResponse.json({ 
      success: true, 
      message: `${result.insertedCount} produtos inseridos com sucesso!`,
      insertedIds: result.insertedIds
    });
  } catch (error) {
    console.error('Erro ao realizar seed dos produtos:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Erro ao realizar seed dos produtos', 
      message: error.message 
    }, { status: 500 });
  }
}

// DELETE /api/products/seed
export async function DELETE() {
  try {
    console.log('Limpando coleção products...');
    
    const { db } = await connectToDatabase();
    console.log('Conectado ao banco de dados MongoDB');
    
    if (!db || typeof db.collection !== 'function') {
      console.error('Banco de dados não está disponível ou é um mock');
      return NextResponse.json({ 
        success: false, 
        message: 'Banco de dados não está disponível. Verifique a conexão com o MongoDB.' 
      }, { status: 500 });
    }
    
    const result = await db.collection('products').deleteMany({});
    
    // Após remover os produtos, invalidamos o cache
    invalidateCache();
    console.log('Cache invalidado após remoção de produtos');
    
    console.log(`${result.deletedCount} produtos removidos com sucesso!`);
    
    return NextResponse.json({ 
      success: true, 
      message: `${result.deletedCount} produtos removidos com sucesso!` 
    });
  } catch (error) {
    console.error('Erro ao limpar coleção products:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Erro ao limpar coleção products', 
      message: error.message 
    }, { status: 500 });
  }
}
```


---
### 📄 Arquivo: `src/app/api/products/route.js`

```javascript
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import { staticProductData } from '../../../data/staticProductData';
import { 
  getCachedProducts, 
  setCachedProducts, 
  isCacheValid, 
  getCacheInfo 
} from '../../../lib/productCache';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Valores de fallback para quando as variáveis de ambiente não são carregadas
const FALLBACK_MONGODB_URI = 'mongodb+srv://encmaquininhas:0OEuZVHbcuC2PUZk@cluster0.sgebrtm.mongodb.net';
const FALLBACK_DB_NAME = 'maquininhas-point';

// Função para validar produtos - adicione esta no início do arquivo
const validateProducts = (products) => {
  return products.map(product => {
    if (!product.urlInfo && product.name) {
      console.log(`Adicionando urlInfo padrão para o produto: ${product.name}`);
      return {
        ...product,
        urlInfo: `/maquininhas/${product.name.toLowerCase().replace(/\s+/g, '-')}`
      };
    }
    return product;
  });
};

export async function GET(request) {
  console.log('API: Recebida requisição GET /api/products');
  
  // Verificar se há um parâmetro para forçar a recarga do cache
  const { searchParams } = new URL(request.url);
  const forceRefresh = searchParams.get('forceRefresh') === 'true';
  
  // Debug de variáveis de ambiente na rota
  console.log('[API Route] ENV Debug:');
  console.log('- MONGODB_URI definido?', !!process.env.MONGODB_URI);
  console.log('- MONGODB_DB definido?', !!process.env.MONGODB_DB);
  
  // Verificar se tem cache válido e não está forçando a recarga
  if (!forceRefresh && isCacheValid()) {
    const cachedProducts = getCachedProducts();
    console.log('Retornando produtos do cache');
    return NextResponse.json({ products: cachedProducts });
  }
  
  // Log do estado do cache
  console.log('Info do cache:', getCacheInfo());
  
  try {
    console.log('Iniciando busca de produtos no MongoDB...');
    
    const { db } = await connectToDatabase();
    console.log('Conectado ao banco de dados MongoDB');
    
    // Verificar se o banco de dados está definido
    if (!db) {
      console.error('Conexão estabelecida, mas objeto db não disponível');
      console.log('Retornando dados estáticos como fallback');
      const validatedStaticProducts = validateProducts(staticProductData);
      setCachedProducts(validatedStaticProducts);
      return NextResponse.json({ products: validatedStaticProducts });
    }
    
    // Verificar configurações do MongoDB
    const dbName = process.env.MONGODB_DB || FALLBACK_DB_NAME;
    const mongoUri = process.env.MONGODB_URI || FALLBACK_MONGODB_URI;
    console.log(`Nome do banco de dados: ${dbName}`);
    console.log(`URL de conexão: ${mongoUri ? mongoUri.substring(0, 20) + '...' : 'não definida'}`);
    
    // Obter nome das coleções para debug
    console.log('Listando coleções disponíveis...');
    const collections = await db.listCollections().toArray();
    console.log(`Coleções disponíveis: ${collections.map(c => c.name).join(', ') || 'nenhuma'}`);
    
    if (!collections.some(c => c.name === 'products')) {
      console.log('Coleção products não existe, retornando dados estáticos');
      
      // Tentar criar a coleção se ela não existir
      try {
        console.log('Tentando criar a coleção products...');
        await db.createCollection('products');
        console.log('Coleção products criada com sucesso. Use a rota /api/products/seed para adicionar dados.');
        
        // Tentar inserir os dados estáticos imediatamente
        try {
          console.log('Tentando inserir dados de exemplo automaticamente...');
          const validatedStaticProducts = validateProducts(staticProductData);
          const result = await db.collection('products').insertMany(validatedStaticProducts);
          console.log(`${result.insertedCount} produtos inseridos automaticamente.`);
          
          // Adicionar os produtos ao cache
          setCachedProducts(validatedStaticProducts);
          return NextResponse.json({ products: validatedStaticProducts });
        } catch (insertError) {
          console.error('Erro ao inserir dados automáticos:', insertError);
        }
      } catch (createError) {
        console.error('Erro ao criar coleção products:', createError);
      }
      
      const validatedStaticProducts = validateProducts(staticProductData);
      setCachedProducts(validatedStaticProducts);
      return NextResponse.json({ products: validatedStaticProducts });
    }
    
    // Tentar buscar produtos com mais logs
    console.log('Buscando documentos na coleção products...');
    const products = await db.collection('products').find({}).toArray();
    console.log(`Produtos encontrados: ${products?.length || 0}`);
    
    if (!products || products.length === 0) {
      console.log('Nenhum produto encontrado na coleção, retornando dados estáticos');
      const validatedStaticProducts = validateProducts(staticProductData);
      setCachedProducts(validatedStaticProducts);
      return NextResponse.json({ products: validatedStaticProducts });
    }
    
    console.log('Primeiro produto encontrado:', products[0].name);
    
    // Garantir que todos os produtos tenham a propriedade urlInfo
    const validatedProducts = validateProducts(products);
    
    // Atualizar o cache com os produtos validados
    setCachedProducts(validatedProducts);
    
    // Sempre retornar no formato { products: [...] }
    return NextResponse.json({ products: validatedProducts });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    console.log('Retornando dados estáticos como fallback devido a erro');
    
    // Mesmo em caso de erro, retornar no formato esperado
    const validatedStaticProducts = validateProducts(staticProductData);
    setCachedProducts(validatedStaticProducts);
    return NextResponse.json({ 
      products: validatedStaticProducts,
      error: error.message
    });
  }
}
```


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
// src/app/comprar/[model]/page.js
import React from 'react';
import { notFound } from 'next/navigation';
import ConfiguraPedido from '../../../components/comprar/ConfiguraPedido';
import { slugToName } from '../../../utils/formatters';

// Adicionando diretiva para forçar renderização dinâmica
export const dynamic = 'force-dynamic';

// Esta página é um Server Component
export default async function ComprarPage({ params }) {
  try {
    // Garantir que params esteja resolvido antes de acessar suas propriedades
    const resolvedParams = await Promise.resolve(params);
    const productSlug = resolvedParams.model;
    
    if (!productSlug) {
      return notFound();
    }
    
    // Usar URL absoluta para Server Components
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 
                   (typeof window === 'undefined' ? 'http://localhost:3000' : '');
    
    // Adicionar um timestamp para evitar cache
    const timestamp = Date.now();
    
    // Buscar todos os produtos para encontrar o correspondente pelo slug
    const response = await fetch(`${apiUrl}/api/products?t=${timestamp}`, { 
      cache: 'no-store', // Garantir que não use cache
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    
    if (!response.ok) {
      console.error('Erro ao buscar produtos');
      return (
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold mb-4">Erro ao carregar informações do produto</h1>
          <p>Houve um problema ao carregar os dados. Por favor, tente novamente mais tarde.</p>
        </div>
      );
    }
    
    const { products } = await response.json();
    
    // Mapear o slug da URL para o produto no banco de dados
    // Formatar o nome do produto da URL para comparar
    const formattedSlug = productSlug.toLowerCase().trim();
    
    // Procurar um produto que corresponda ao slug da URL
    const product = products.find(p => {
      const productNameSlug = p.name.toLowerCase().replace(/\s+/g, '-');
      return productNameSlug === formattedSlug;
    });
    
    if (!product) {
      return notFound();
    }
    
    return (
      <div className="pt-20">
        <ConfiguraPedido product={product} />
      </div>
    );
  } catch (error) {
    console.error('Erro ao carregar dados do produto:', error);
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">Erro ao carregar informações do produto</h1>
        <p>Ocorreu um erro: {error.message}</p>
      </div>
    );
  }
}

// Como agora a página é totalmente dinâmica, podemos remover a função generateStaticParams
// pois ela não será utilizada com dynamic: 'force-dynamic'
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
### 📄 Arquivo: `src/app/dashboard/configuracoes/page.js`

```javascript
'use client';
import React, { useState, useEffect } from 'react';
import { Save, RefreshCcw, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../../../contexts/AuthContext';

const DashboardConfiguracoes = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  // Estados para as diferentes seções de configuração
  const [generalConfig, setGeneralConfig] = useState({
    siteName: 'Maquininhas Point',
    contactEmail: 'admin@exemplo.com',
    phoneNumber: '(11) 99999-9999',
    enabledFeatures: {
      analytics: true,
      cache: true,
      notifications: false
    }
  });
  
  const [apiConfig, setApiConfig] = useState({
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
    refreshInterval: '30',
    cacheExpiration: '60',
    timeout: '10'
  });
  
  const [displayConfig, setDisplayConfig] = useState({
    darkModeDefault: false,
    itemsPerPage: '12',
    showPrices: true,
    showPromotions: true,
    currencySymbol: 'R$'
  });
  
  useEffect(() => {
    // Carregar configurações quando a página for montada
    loadConfigurations();
  }, []);
  
  const loadConfigurations = async () => {
    setIsLoading(true);
    setMessage({ type: '', text: '' });
    
    try {
      // Em um ambiente real, você carregaria as configurações da API
      // Por enquanto, usando dados simulados
      
      // Simulação de resposta da API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage({ type: 'success', text: 'Configurações carregadas com sucesso!' });
      
      // Após 3 segundos, limpar a mensagem de sucesso
      setTimeout(() => {
        if (message.type === 'success') {
          setMessage({ type: '', text: '' });
        }
      }, 3000);
    } catch (error) {
      console.error('Erro ao carregar configurações:', error);
      setMessage({ type: 'error', text: 'Erro ao carregar configurações. Tente novamente.' });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSaveConfig = async () => {
    setIsSaving(true);
    setMessage({ type: 'info', text: 'Salvando configurações...' });
    
    try {
      // Em um ambiente real, você enviaria as configurações para a API
      // Por enquanto, usando uma simulação de envio
      
      // Simular tempo de processamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Configurações a serem enviadas (combinação de todos os estados)
      const configToSave = {
        general: generalConfig,
        api: apiConfig,
        display: displayConfig
      };
      
      console.log('Configurações salvas:', configToSave);
      
      setMessage({ type: 'success', text: 'Configurações salvas com sucesso!' });
      
      // Após 3 segundos, limpar a mensagem de sucesso
      setTimeout(() => {
        if (message.type === 'success') {
          setMessage({ type: '', text: '' });
        }
      }, 3000);
    } catch (error) {
      console.error('Erro ao salvar configurações:', error);
      setMessage({ type: 'error', text: `Erro ao salvar: ${error.message}` });
    } finally {
      setIsSaving(false);
    }
  };
  
  // Handlers para diferentes seções de configuração
  const handleGeneralConfigChange = (field, value) => {
    setGeneralConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleToggleFeature = (feature) => {
    setGeneralConfig(prev => ({
      ...prev,
      enabledFeatures: {
        ...prev.enabledFeatures,
        [feature]: !prev.enabledFeatures[feature]
      }
    }));
  };
  
  const handleApiConfigChange = (field, value) => {
    setApiConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleDisplayConfigChange = (field, value) => {
    setDisplayConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleToggleDisplayOption = (option) => {
    setDisplayConfig(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Configurações do Sistema</h1>
        <p className="text-gray-600">Personalize as configurações do seu site de maquininhas</p>
      </div>
      
      {message.text && (
        <div className={`mb-6 p-3 rounded flex items-center ${
          message.type === 'error' ? 'bg-red-100 text-red-700' : 
          message.type === 'success' ? 'bg-green-100 text-green-700' : 
          'bg-blue-100 text-blue-700'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="h-5 w-5 mr-2" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2" />
          )}
          <span>{message.text}</span>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row justify-between mb-6 space-y-3 sm:space-y-0">
        <button 
          onClick={loadConfigurations} 
          className="flex items-center justify-center px-3 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 w-full sm:w-auto"
          disabled={isLoading}
        >
          <RefreshCcw className="w-4 h-4 mr-2" />
          {isLoading ? 'Carregando...' : 'Recarregar'}
        </button>
        
        <button 
          onClick={handleSaveConfig} 
          className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto"
          disabled={isSaving}
        >
          <Save className="w-4 h-4 mr-2" />
          {isSaving ? 'Salvando...' : 'Salvar Configurações'}
        </button>
      </div>
      
      {/* Configurações Gerais */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Configurações Gerais</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Site
            </label>
            <input
              type="text"
              value={generalConfig.siteName}
              onChange={(e) => handleGeneralConfigChange('siteName', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email de Contato
            </label>
            <input
              type="email"
              value={generalConfig.contactEmail}
              onChange={(e) => handleGeneralConfigChange('contactEmail', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Número de Telefone
            </label>
            <input
              type="text"
              value={generalConfig.phoneNumber}
              onChange={(e) => handleGeneralConfigChange('phoneNumber', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-md font-medium mb-3">Recursos Ativados</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="feature-analytics"
                type="checkbox"
                checked={generalConfig.enabledFeatures.analytics}
                onChange={() => handleToggleFeature('analytics')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="feature-analytics" className="ml-2 block text-sm text-gray-700">
                Analytics e Relatórios
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="feature-cache"
                type="checkbox"
                checked={generalConfig.enabledFeatures.cache}
                onChange={() => handleToggleFeature('cache')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="feature-cache" className="ml-2 block text-sm text-gray-700">
                Cache de Dados
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="feature-notifications"
                type="checkbox"
                checked={generalConfig.enabledFeatures.notifications}
                onChange={() => handleToggleFeature('notifications')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="feature-notifications" className="ml-2 block text-sm text-gray-700">
                Notificações por Email
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {/* Configurações de API */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Configurações de API</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              URL da API
            </label>
            <input
              type="text"
              value={apiConfig.apiUrl}
              onChange={(e) => handleApiConfigChange('apiUrl', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Intervalo de Atualização (segundos)
            </label>
            <input
              type="number"
              value={apiConfig.refreshInterval}
              onChange={(e) => handleApiConfigChange('refreshInterval', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiração do Cache (minutos)
            </label>
            <input
              type="number"
              value={apiConfig.cacheExpiration}
              onChange={(e) => handleApiConfigChange('cacheExpiration', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Timeout (segundos)
            </label>
            <input
              type="number"
              value={apiConfig.timeout}
              onChange={(e) => handleApiConfigChange('timeout', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      
      {/* Configurações de Exibição */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Configurações de Exibição</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Itens por Página
            </label>
            <select
              value={displayConfig.itemsPerPage}
              onChange={(e) => handleDisplayConfigChange('itemsPerPage', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="6">6 itens</option>
              <option value="12">12 itens</option>
              <option value="24">24 itens</option>
              <option value="48">48 itens</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Símbolo da Moeda
            </label>
            <input
              type="text"
              value={displayConfig.currencySymbol}
              onChange={(e) => handleDisplayConfigChange('currencySymbol', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-md font-medium mb-3">Opções de Exibição</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="option-darkmode"
                type="checkbox"
                checked={displayConfig.darkModeDefault}
                onChange={() => handleToggleDisplayOption('darkModeDefault')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="option-darkmode" className="ml-2 block text-sm text-gray-700">
                Modo Escuro como Padrão
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="option-showprices"
                type="checkbox"
                checked={displayConfig.showPrices}
                onChange={() => handleToggleDisplayOption('showPrices')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="option-showprices" className="ml-2 block text-sm text-gray-700">
                Mostrar Preços
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="option-showpromotions"
                type="checkbox"
                checked={displayConfig.showPromotions}
                onChange={() => handleToggleDisplayOption('showPromotions')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="option-showpromotions" className="ml-2 block text-sm text-gray-700">
                Mostrar Promoções
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardConfiguracoes;
```


---
### 📄 Arquivo: `src/app/dashboard/produtos/page.js`

```javascript
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
```


---
### 📄 Arquivo: `src/app/dashboard/layout.js`

```javascript
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
```


---
### 📄 Arquivo: `src/app/dashboard/page.js`

```javascript
// src/app/dashboard/page.js
'use client';
import React, { useState, useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';
import axios from 'axios';
import { fetchProductData } from '../../data/productData';
import { staticProductData } from '../../data/staticProductData';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';

const Dashboard = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [usingLocalData, setUsingLocalData] = useState(false);
  
  useEffect(() => {
    // Carregar dados dos produtos da API
    if (user) {
      loadProducts();
    }
  }, [user]);

  const loadProducts = async (forceRefresh = false) => {
    setIsLoading(true);
    console.log('Iniciando carregamento de produtos...');
    
    try {
      // Tenta carregar da API primeiro, com opção para forçar atualização
      console.log('Tentando carregar produtos da API...');
      const url = forceRefresh 
        ? '/api/products?forceRefresh=true' 
        : '/api/products';
      
      const response = await axios.get(url, {
        timeout: 10000, // 10 segundos de timeout
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      // Verificar se os dados estão na estrutura esperada
      if (!response.data) {
        console.warn('Resposta da API vazia');
        throw new Error('Resposta vazia da API');
      }
      
      const productsData = Array.isArray(response.data.products) 
        ? response.data.products 
        : Array.isArray(response.data) 
          ? response.data 
          : null;
      
      if (!productsData || productsData.length === 0) {
        console.warn("Nenhum produto retornado da API, tentando dados locais");
        throw new Error("Nenhum produto encontrado na API");
      }
      
      // Garantir que todos os produtos tenham um ID
      const validProducts = productsData.map((product, index) => ({
        ...product,
        _id: product._id || `api_${index + 1}`
      }));
      
      setProducts(validProducts);
      setUsingLocalData(false);
    } catch (error) {
      console.warn("Erro ao carregar dados da API:", error.message);
      
      try {
        // Carrega do arquivo local se a API falhar
        const localData = await fetchProductData();
        
        // Adicionar _id fictícios para compatibilidade com a interface
        const dataWithIds = localData.map((product, index) => ({
          ...product,
          _id: product._id || `local_${index + 1}` // Manter ID existente ou criar um local
        }));
        
        setProducts(dataWithIds);
      } catch (localError) {
        console.error("Erro ao carregar dados locais:", localError);
        
        // Usar dados estáticos como último recurso
        const dataWithIds = staticProductData.map((product, index) => ({
          ...product,
          _id: product._id || `static_${index + 1}` // IDs estáticos prefixados com 'static_'
        }));
        
        setProducts(dataWithIds);
      }
      
      setUsingLocalData(true);
      setMessage({ 
        type: 'info', 
        text: 'Usando dados locais. As alterações não serão salvas permanentemente.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Função para forçar a atualização dos dados do servidor
  const handleRefreshProducts = async () => {
    setMessage({ type: 'info', text: 'Atualizando dados do servidor...' });
    await loadProducts(true);
    setMessage({ type: 'success', text: 'Dados atualizados com sucesso!' });
    
    // Limpar mensagem após 3 segundos
    setTimeout(() => {
      if (message.type === 'success') {
        setMessage({ type: '', text: '' });
      }
    }, 3000);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Painel de Administração</h1>
        <p className="text-gray-600">Bem-vindo, {user?.email}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-3 sm:space-y-0">
          <h2 className="text-xl font-semibold">Produtos ({products.length})</h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <Link 
              href="/dashboard/produtos"
              className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto"
            >
              Gerenciar Produtos
            </Link>
            <button 
              onClick={handleRefreshProducts} 
              className="flex items-center justify-center px-3 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 w-full sm:w-auto"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
              <Link 
                key={product._id} 
                href={`/dashboard/produtos?id=${product._id}`}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{product.name}</h3>
                  <span className="text-green-600 font-bold">R$ {product.price}</span>
                </div>
                <p className="text-sm text-gray-500 truncate mb-2">{product.info}</p>
                {product.imageUrl && (
                  <div className="flex justify-center">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="h-20 w-auto object-contain" 
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
        
        {message.text && (
          <div className={`mt-4 p-3 rounded ${
            message.type === 'error' ? 'bg-red-100 text-red-700' : 
            message.type === 'success' ? 'bg-green-100 text-green-700' : 
            'bg-blue-100 text-blue-700'
          }`}>
            <p>{message.text}</p>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-xl font-semibold mb-4">Informações do Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-y-3 md:space-y-0">
          <div className="p-3 bg-gray-50 rounded-md">
            <p className="font-medium">Autenticado como:</p>
            <p className="text-gray-700">{user?.email}</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-md">
            <p className="font-medium">Origem dos dados:</p>
            <p className="text-gray-700">{usingLocalData ? 'Local (Fallback)' : 'API'}</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-md">
            <p className="font-medium">Total de produtos:</p>
            <p className="text-gray-700">{products.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
```


---
### 📄 Arquivo: `src/app/login/page.js`

```javascript
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        // Login bem-sucedido - redirecionar para o dashboard
        router.push('/dashboard');
      } else {
        setError('E-mail ou senha incorretos');
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login do Administrador
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Digite suas credenciais para acessar o painel
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                E-mail
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {loading ? 'Processando...' : 'Entrar'}
            </button>
          </div>
          
          <div className="text-sm text-center">
            <Link href="/" className="font-medium text-blue-600 hover:text-blue-500">
              Voltar para a página inicial
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
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
      <SectionTaxas />
      <CardFlag />
      <SectionNovaAir />
      <SectionPointAir />
      <SectionConta />
      <SectionCredito />
      <SectionLinkVendas />
      <TestimonialSlider />
      <section className="relative  bg-gradient-to-b from-[#FFE600_100%] to-[#FFD400_28%] transition duration-500 ">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-black sm:text-2xl">Crescer só depende de você</h2>
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
      <SectionTaxas />
      <CardFlag />
      <SectionPointMini />
      <SectionConta />
      <SectionCredito />
      <SectionLinkVendas />
      <TestimonialSlider />
      <section className="relative transition duration-500  bg-gradient-to-b from-[#FFE600_100%] to-[#FFD400_28%]">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-black sm:text-2xl">Crescer só depende de você</h2>
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

import SectionLinkVendas from '../../../components/SectionLinkVendas';
import TestimonialSlider from '../../../components/TestimonialSlider';
import HeroSectionPointPro from '../../../components/points/HeroSectionPointPro';
import SectionPointPro from '../../../components/points/SectionPointPro';

import MenuPopover from '../../../components/MenuPopover';
import SectionAboutPointPro from '../../../components/points/SectionAboutPointPro';
import ConhecaPointPro3 from '../../../components/ConhecaPointPro3';
import SectionConta from '../../../components/SectionConta';

export default function Home() {
  return (
    <div className="w-screen m-0 p-0">
     <MenuPopover /> 
      <HeroSectionPointPro />
      <SectionPointPro />
      {/* <SectionTaxas /> */}
      <CardFlag />
      <SectionAboutPointPro />
      
      <ConhecaPointPro3 />
      <SectionConta />
      <SectionLinkVendas />
      <TestimonialSlider />
      <section className="relative  transition duration-500  bg-gradient-to-b from-[#FFE600_100%] to-[#FFD400_28%]">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-black sm:text-2xl">Crescer só depende de você</h2>
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
import React from 'react';
import HeroSectionPointSmart2 from '../../../components/points/HeroSectionPointSmart';
import CardFlag from '../../../components/CardFlag';
import SectionTaxas from '../../../components/SectionTaxas';
import SectionConta from '../../../components/SectionConta';
import SectionCredito from '../../../components/SectionCredito';
import SectionLinkVendas from '../../../components/SectionLinkVendas';
import TestimonialSlider from '../../../components/TestimonialSlider';
import MenuPopover from '../../../components/MenuPopover';
import SectionAboutPointSmart from '../../../components/points/SectionAboutPointSmart';
import SectionPointSmart from '../../../components/points/SectionPointSmart';
import SectionSmartFerramenta from '../../../components/points/SectionSmartFerramenta';


export default function Home() {
  return (
    <div className="w-screen m-0 p-0">
      <MenuPopover /> 
      <HeroSectionPointSmart2 />
      <SectionPointSmart />
      <CardFlag />
      <SectionAboutPointSmart />
      <SectionSmartFerramenta />
      {/* <SectionCredito /> */}
      <SectionConta />

      <TestimonialSlider />
      <section className="relative transition duration-500  bg-gradient-to-b from-[#FFE600_100%] to-[#FFD400_28%]">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-black sm:text-2xl">Crescer só depende de você</h2>
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
import { AuthProvider } from '../contexts/AuthContext';
import { TaxasModalProvider } from '../contexts/TaxasModalContext';
import ClientLayout from '../components/ClientLayout';

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
        <AuthProvider>
          <ThemeProvider>
            <TaxasModalProvider>
              <ClientLayout>
                {children}
              </ClientLayout>
            </TaxasModalProvider>
          </ThemeProvider>
        </AuthProvider>
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


export default function Home() {
  return (
    <div className="w-screen m-0 p-0">
      <MercadoPagoHero />
      <Produtos />
     
      <CardFlag />
      <SectionTaxas />
      <SectionConta />
      <SectionCredito />
      <SectionLinkVendas />
      <TestimonialSlider />
      <section className="relative  bg-gradient-to-b from-[#FFE600_100%] to-[#FFD400_28%] transition duration-500 ">
        <div className="card container py-24 text-center">
          <h2 className="text-xl font-bold uppercase text-black sm:text-2xl">Crescer só depende de você</h2>
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
import InternetProviderSelector from "./InternetProviderSelector";
import OrderConfiguration from "./OrderConfiguration";
import { Check, ChevronRight, ExternalLink } from 'lucide-react';

const ConfiguraPedido = ({ product }) => {
    const [selectedProvider, setSelectedProvider] = useState('36'); // Default to Vivo
    const [buyLink, setBuyLink] = useState('');
    const [showProviderSelector, setShowProviderSelector] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    // Lista de modelos que não têm seleção de operadora
    const modelsWithoutProvider = ["Point Mini NFC 2"];

    // Função para mapear nome da operadora para ID
    const getProviderIdByName = (name) => {
        const nameLower = name.toLowerCase();
        if (nameLower === 'vivo') return '36';
        if (nameLower === 'claro') return '23';
        if (nameLower === 'tim') return '32';
        return '36'; // Fallback para Vivo
    };

    useEffect(() => {
        if (product) {
            console.log('Product loaded:', product.name);
            console.log('Available operadoras:', product.linkOperadoras);
            
            const isPointMiniNFC2 = product.name === "Point Mini NFC 2";
            const hasOperadoras = product.linkOperadoras && 
                                 Array.isArray(product.linkOperadoras) && 
                                 product.linkOperadoras.length > 0;
            
            setShowProviderSelector(!modelsWithoutProvider.includes(product.name) && hasOperadoras);
            
            // Se tem operadoras, selecionar a primeira disponível por padrão
            if (hasOperadoras) {
                const firstOperadora = product.linkOperadoras[0];
                console.log('First operadora:', firstOperadora);
                
                const providerId = getProviderIdByName(firstOperadora.name);
                console.log('Selected provider ID:', providerId, 'for name:', firstOperadora.name);
                
                setSelectedProvider(providerId);
                updateBuyLink(product, providerId, isPointMiniNFC2);
            } else {
                // Sem operadoras, usar o link de compra padrão
                console.log('No operadoras available, using default buy link');
                updateBuyLink(product, '36', isPointMiniNFC2);
            }
        }
    }, [product]);

    const updateBuyLink = (productData, providerId, isPointMiniNFC2) => {
        if (productData) {
            console.log('Updating buy link for provider ID:', providerId);
            
            if (isPointMiniNFC2 || !productData.linkOperadoras || productData.linkOperadoras.length === 0) {
                console.log('Using default urlBuy:', productData.urlBuy);
                setBuyLink(productData.urlBuy || '');
            } else if (productData.linkOperadoras && Array.isArray(productData.linkOperadoras)) {
                const providerName = getProviderName(providerId);
                console.log('Looking for provider name:', providerName);
                
                const providerLink = productData.linkOperadoras.find(op => 
                    op.name.toLowerCase() === providerName.toLowerCase()
                );
                
                console.log('Found provider link:', providerLink);
                
                if (providerLink) {
                    console.log('Using provider link URL:', providerLink.url);
                    setBuyLink(providerLink.url);
                } else {
                    console.log('Provider not found, using default urlBuy:', productData.urlBuy);
                    setBuyLink(productData.urlBuy || '');
                }
            } else {
                console.log('Using default urlBuy as fallback');
                setBuyLink(productData.urlBuy || '');
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
        console.log('Provider changed to:', providerId);
        setSelectedProvider(providerId);
        
        // Verificar se o produto existe e tem operadoras
        if (product && product.linkOperadoras && Array.isArray(product.linkOperadoras)) {
            // Obter o nome da operadora a partir do ID
            const providerName = getProviderName(providerId);
            console.log('Looking for provider:', providerName);
            
            // Verificar se a operadora selecionada está disponível no produto
            const operadoraDisponivel = product.linkOperadoras.find(
                op => op.name.toLowerCase() === providerName.toLowerCase()
            );
            
            console.log('Provider available?', !!operadoraDisponivel);
            
            if (operadoraDisponivel) {
                // Se a operadora estiver disponível, usar o link correspondente
                console.log('Using provider link:', operadoraDisponivel.url);
                setBuyLink(operadoraDisponivel.url);
            } else {
                // Se a operadora não estiver disponível, usar o link padrão
                console.log('Provider not available, using default link');
                setBuyLink(product.urlBuy || '');
            }
        } else {
            // Se o produto não tiver operadoras, usar o link padrão
            console.log('No operadoras array, using default link');
            updateBuyLink(product, providerId, product.name === "Point Mini NFC 2");
        }
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

    if (!product) return (
        <div className="container mx-auto py-20">
            <p className="text-center text-gray-600">Carregando informações do produto...</p>
        </div>
    );

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
                            <OrderConfiguration product={product} />
                            {showProviderSelector && (
                                <div className="mt-5">
                                    <InternetProviderSelector
                                        selectedProvider={selectedProvider}
                                        onProviderChange={handleProviderChange}
                                        availableProviders={product.linkOperadoras || []}
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
                                        Maquininha selecionada: <strong>{product.name}</strong>
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
const InternetProviderSelector = ({ selectedProvider, onProviderChange, availableProviders = [] }) => {
  const allProviders = [
      { id: '36', name: 'Chip Vivo', description: 'Plano de dados grátis', logo: '/chips/vivo.png', recommended: true },
      { id: '23', name: 'Chip Claro', description: 'Plano de dados grátis', logo: '/chips/claro.png' },
      { id: '32', name: 'Chip TIM', description: 'Plano de dados grátis', logo: '/chips/tim.png' },
  ];
  
  // Mapear os IDs para nomes para facilitar a comparação
  const providerIdToName = {
    '36': 'vivo',
    '23': 'claro',
    '32': 'tim'
  };
  
  console.log('Available providers from API:', availableProviders);
  console.log('Currently selected provider:', selectedProvider);
  
  // Filtrar operadoras disponíveis com uma lógica simples
  const filteredProviders = allProviders.filter(provider => {
    // Se não houver providers disponíveis, mostrar todos
    if (!availableProviders || availableProviders.length === 0) {
      return true;
    }
    
    // Obter o nome normalizado da operadora atual
    const providerName = providerIdToName[provider.id].toLowerCase();
    
    // Verificar se existe alguma operadora disponível com este nome
    const isAvailable = availableProviders.some(ap => 
      ap.name.toLowerCase() === providerName
    );
    
    console.log(`Provider ${provider.id} (${providerName}): Available = ${isAvailable}`);
    
    return isAvailable;
  });
  
  console.log('Filtered providers:', filteredProviders);
  
  // Verificar se o provedor selecionado está na lista de provedores filtrados
  const isSelectedProviderAvailable = filteredProviders.some(
    provider => provider.id === selectedProvider
  );
  
  console.log('Is selected provider available?', isSelectedProviderAvailable);
  
  // Se o provedor selecionado não estiver disponível e houver provedores filtrados,
  // selecionar automaticamente o primeiro provedor disponível
  if (!isSelectedProviderAvailable && filteredProviders.length > 0) {
    console.log('Auto-selecting first available provider:', filteredProviders[0].id);
    setTimeout(() => {
      onProviderChange(filteredProviders[0].id);
    }, 0);
  }

  return (
      <div className="max-w-3xl mx-auto bg-white overflow-hidden">
          <h2 className="text-lg font-medium p-4">Escolha um provedor de internet para a sua Point</h2>
          <p className="text-sm text-gray-400 px-4 py-2">Estas são as opções de conexão com a internet disponíveis para este modelo.</p>
          <ul className="divide-y divide-gray-200 shadow-lg rounded-lg border">
              {filteredProviders.map((provider) => (
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
import { formatCurrency } from '../../utils/formatters';

const OrderConfiguration = ({ product }) => {
    if (!product) return null;

    const { name, imageUrl, price, normalPrice } = product;
    
    // Converter para números
    const priceNum = parseFloat(price?.replace(',', '.') || 0);
    const normalPriceNum = parseFloat(normalPrice?.replace(',', '.') || 0);
    
    // Calcular desconto
    const discount = normalPriceNum > priceNum ? normalPriceNum - priceNum : 0;
    const discountPercentage = normalPriceNum > 0 
        ? Math.round((1 - priceNum / normalPriceNum) * 100) 
        : 0;

    return (
        <div className="max-w-3xl mx-auto bg-white overflow-hidden rounded-lg shadow">
            <h2 className="text-xl font-medium p-4">Configure o seu pedido</h2>

            <div className="p-4">
                <div className="bg-emerald-500 text-white p-2 rounded-t-lg flex items-center justify-center">
                    <TagIcon className="w-5 h-5 mr-2" />
                    <span className="font-extralight text-sm">
                        {discountPercentage > 0 
                            ? `${discountPercentage}% de desconto` 
                            : "Preço especial"}
                    </span>
                </div>

                <div className="flex items-center p-4 bg-white rounded-b-lg border border-t-0 border-gray-200">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-24 h-auto mr-6"
                    />
                    <div className="flex-grow flex flex-col gap-4 md:flex-row lg:flex-row xl:flex-row sm:flex-row justify-between">
                        <div className='flex flex-col'>
                            <h3 className="text-lg font-medium mb-2">{name}</h3>
                            {normalPriceNum > 0 && (
                                <div>
                                    <span className='text-[0.6rem]'>Preço:</span>
                                    <p className="text-gray-500 text-xs">
                                        <s>R$: {normalPrice}</s>
                                    </p>
                                </div>
                            )}
                          
                            <div className='mt-4'>
                                <span className='text-[0.6rem]'>Você Paga:</span>
                                <p className='text-xl font-semibold font-inter'>
                                    R$: {price}
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
'use client'
import Image from "next/image";
import { fetchProductData } from "../../data/productData";
import { useState, useEffect } from "react";

const HeroSectionPointAir = () => {
    const [priceAir, setPriceAir] = useState(59.99);
    const [normalPriceAir, setNormalPriceAir] = useState(358.80);
    const [discountAir, setDiscountAir] = useState(298.81);

    useEffect(() => {
        const loadProductData = async () => {
            try {
                const productData = await fetchProductData();
                if (Array.isArray(productData)) {
                    const pointAir = productData.find(product => product.name === "Point Air");
                    if (pointAir) {
                        const price = parseFloat(pointAir.price.replace(',', '.'));
                        const normalPrice = parseFloat(pointAir.normalPrice.replace(',', '.'));
                        const discount = normalPrice - price;

                        setPriceAir(price);
                        setNormalPriceAir(normalPrice);
                        setDiscountAir(discount);
                    }
                } else {
                    console.error("Dados de produtos não são um array:", productData);
                }
            } catch (error) {
                console.error("Erro ao carregar dados do produto:", error);
            }
        };

        loadProductData();
    }, []);

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const getPriceWhole = (price) => {
        return Math.floor(price);
    };

    const getPriceCents = (price) => {
        return Math.round((price - Math.floor(price)) * 100);
    };

    // A vista preço com 50% de desconto
    const vistaPreco = priceAir * 12 * 0.9;

    return (
        <section id="hero-section" className="relative mt-18">
            <div className="bg-gradient-28 pt-16 pb-28 relative">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Coluna de Texto */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="inline-flex items-center border border-black rounded-full px-2.5 py-0.5 text-xs sm:text-sm font-extralight uppercase text-black mb-4 mt-8">
                            Point Air
                        </div>

                        <h1 className="text-md sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-tight text-black mb-4 sm:mb-6">
                            Uma nova experiência de<br />venda com maquininha
                        </h1>

                        <p className="text-xs sm:text-base md:text-lg text-black mb-6 sm:mb-8 max-w-lg">
                            Mostre o status do pagamento para seus clientes através da borda iluminada.
                        </p>

                        {/* Preços formatados no estilo do modelo */}
                        <div className="mb-6 sm:mb-8">


                            <div className="flex items-center mt-2">
                                <span className="text-sm sm:text-base line-through text-black mr-2">R$ {formatPrice(normalPriceAir)}</span>
                            </div>

                            <div className="flex items-center mt-1">
                                <span className="text-2xl sm:text-2xl font-extrabold text-black">R$ {formatPrice(priceAir)}</span>
                            </div>
                        </div>

                        {/* Botão e Frete */}
                        <div className="flex flex-col md:flex-row gap-4 mb-6 sm:mb-8 w-full md:w-auto">
                            <a
                                href="/comprar/point-air"
                                className="relative inline-flex items-center justify-center w-full md:w-auto rounded-md font-medium text-white bg-brand hover:bg-brand-dark h-10 sm:h-12 px-4 sm:px-8 text-sm sm:text-base"
                            >
                                Comprar
                            </a>

                            <div className="flex items-center gap-2 sm:gap-3  m-auto text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                </svg>
                                <span className="text-xs sm:text-sm">Frete grátis para todo o Brasil</span>
                            </div>
                        </div>
                    </div>

                    {/* Coluna da Imagem */}
                    <div className="flex justify-center md:h-[450px]">
                        <Image
                            alt="Point Air - Maquininha de cartão"
                            fetchPriority="high"
                            width={450}
                            height={450}
                            className="object-contain animate-float max-w-[80%] md:max-w-full"
                            src="/images/point/device-62.webp"
                            style={{ color: 'transparent' }}
                        />
                    </div>
                </div>

                {/* Lista de recursos */}
                <div className="container mx-auto px-4 mt-6 sm:mt-8">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm leading-tight text-black">
                        <li className="flex items-center gap-2 sm:gap-3">
                            <svg class="pog-ui-svg-icon" fill="none" viewBox="0 0 24 24" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.42652 0.75C7.50987 0.75 6.79029 1.44462 6.63972 2.30623L6.11447 4.65523C6.03839 4.99549 6 5.34309 6 5.69175V6.27108L6.00005 21.4789C6.00005 22.4441 6.77191 23.25 7.7527 23.25H16.2474C17.2282 23.25 18.0001 22.4441 18.0001 21.4789L18 6.27108V5.69099C18 5.34293 17.9617 4.99592 17.8859 4.65622L17.3614 2.30639C17.2109 1.44471 16.4913 0.75 15.5746 0.75H8.42652ZM7.50005 21.4789L7.5 6.27108C7.5 6.10843 7.62594 6 7.75265 6H12H16.2473C16.3741 6 16.5 6.10843 16.5 6.27108L16.5001 21.4789C16.5001 21.6416 16.3741 21.75 16.2474 21.75H7.7527C7.62598 21.75 7.50005 21.6416 7.50005 21.4789ZM16.2473 4.5C16.2698 4.5 16.2922 4.50042 16.3144 4.50126L15.8932 2.614L15.8883 2.59221L15.8847 2.57016C15.8483 2.34432 15.6862 2.25 15.5746 2.25H8.42652C8.31495 2.25 8.15283 2.34432 8.11636 2.57016L8.11278 2.59235L8.10788 2.61428L7.68594 4.50125C7.70807 4.50042 7.7303 4.5 7.75265 4.5H12H16.2473ZM9.00002 7.50391H8.25002V8.25391V18.7461V19.4961H9.00002H15H15.75V18.7461V8.25391V7.50391H15H9.00002ZM9.75002 17.9961V9.00391H14.25V17.9961H9.75002Z" fill="rgba(0,0,0,0.9)"></path></svg>
                            <p className="font-bold">Venda sem precisar do celular</p>
                        </li>
                        
                        <li className="flex items-center gap-2 sm:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6">
                                <path d="M12 20h.01"></path>
                                <path d="M2 8.82a15 15 0 0 1 20 0"></path>
                                <path d="M5 12.859a10 10 0 0 1 14 0"></path>
                                <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
                            </svg>
                            <p>Plano de dados grátis e Wi‑Fi</p>
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6">
                                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                <line x1="2" x2="22" y1="10" y2="10"></line>
                            </svg>
                            <p>Aceita cartões, aproximação, QR e Pix</p>
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6">
                                <rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect>
                                <line x1="22" x2="22" y1="11" y2="13"></line>
                                <line x1="6" x2="6" y1="11" y2="13"></line>
                                <line x1="10" x2="10" y1="11" y2="13"></line>
                            </svg>
                            <p>Inclui bateria que dura o dia todo</p>
                        </li>
                    </ul>
                </div>

                {/* Efeito ondulado na parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ transform: 'translateY(1px)' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 lg:h-20">
                        <path d="M0,0 C600,120 1000,0 1200,120 L1200,120 L0,120 Z" className="fill-white"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default HeroSectionPointAir;
```


---
### 📄 Arquivo: `src/components/points/HeroSectionPointMini.js`

```javascript
'use client'
import Image from "next/image";
import { fetchProductData } from "../../data/productData";
import { useState, useEffect } from "react";

const HeroSectionPointMini = () => {
    const [priceMini, setPriceMini] = useState(59.99);
    const [normalPriceMini, setNormalPriceMini] = useState(118.80);
    const [discountMini, setDiscountMini] = useState(58.81);
    
    useEffect(() => {
        const loadProductData = async () => {
            try {
                const productData = await fetchProductData();
                if (Array.isArray(productData)) {
                    const pointMini = productData.find(product => product.name === "Point Mini NFC 2");
                    if (pointMini) {
                        const price = parseFloat(pointMini.price.replace(',', '.'));
                        const normalPrice = parseFloat(pointMini.normalPrice.replace(',', '.'));
                        const discount = normalPrice - price;
                        
                        setPriceMini(price);
                        setNormalPriceMini(normalPrice);
                        setDiscountMini(discount);
                    }
                } else {
                    console.error("Dados de produtos não são um array:", productData);
                }
            } catch (error) {
                console.error("Erro ao carregar dados do produto:", error);
            }
        };
        
        loadProductData();
    }, []);

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    return (
        <section>
            <div className="relative bg-gradient-28 py-8  md:py-12  mt-16">
                <div className="card container grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
                        <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  border-transparent  uppercase text-black">Point Mini NFC 2 NFC2</div>
                        <h1 className="mt-4 text-2xl font-black uppercase leading-tight text-black sm:text-3xl md:text-4xl">
                            Você tem um<br /> desconto de R$&nbsp;{formatPrice(discountMini)}<br />na Point Mini NFC 2 NFC2
                        </h1>
                        <div className="mt-8 flex flex-col text-black">
                            <span className="text-xl line-through">R$&nbsp;{formatPrice(normalPriceMini)}</span>
                            <span className="text-3xl font-semibold">R$&nbsp;{formatPrice(priceMini)}</span>
                        </div>
                        <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-6"><a href="/comprar/point-mini-nfc-2" className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-white dark:text-primary-foreground bg-brand hover:bg-brand-dark dark:hover:bg-primary/90 h-12 px-8 text-base md:w-full md:max-w-[210px]">Comprar agora</a><div className="flex items-center gap-3 text-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck shrink-0"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg><span className="text-sm">Frete grátis para todo o Brasil</span></div></div>
                    </div>
                    <div className="flex justify-center md:h-[450px]">
                        <Image
                            alt="hero-image"
                            fetchPriority="high"
                            width={450}
                            height={450}
                            decoding="async"
                            data-nimg="1"
                            className="object-contain animate-float"
                            src="/images/point/device-45.webp"
                            style={{ color: 'transparent' }}
                        />
                    </div>
               
                </div>
                <ul className="card container flex flex-col flex-wrap justify-center gap-3 pt-8 text-sm leading-tight text-black sm:flex-row md:gap-x-8"><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi shrink-0"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg><p>Plano de dados grátis e Wi‑Fi</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb shrink-0"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg><p>Visor com luz automática</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><p>Envia o comprovante por e-mail e SMS</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-medium shrink-0"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line><line x1="6" x2="6" y1="11" y2="13"></line><line x1="10" x2="10" y1="11" y2="13"></line></svg><p>Até 15 horas de bateria</p></li></ul>
            </div>
        </section>
    );
}

export default HeroSectionPointMini;
```


---
### 📄 Arquivo: `src/components/points/HeroSectionPointPro.js`

```javascript
'use client'
import Image from "next/image";
import { fetchProductData } from "../../data/productData";
import { useState, useEffect } from "react";

const HeroSectionPointPro = () => {
    const [pricePro, setPricePro] = useState(89.99);
    const [normalPricePro, setNormalPricePro] = useState(718.80);
    const [discountPro, setDiscountPro] = useState(628.81);

    useEffect(() => {
        const loadProductData = async () => {
            try {
                const productData = await fetchProductData();
                if (Array.isArray(productData)) {
                    const pointPro = productData.find(product => product.name === "Point Pro 3");
                    if (pointPro) {
                        const price = parseFloat(pointPro.price.replace(',', '.'));
                        const normalPrice = parseFloat(pointPro.normalPrice.replace(',', '.'));
                        const discount = normalPrice - price;

                        setPricePro(price);
                        setNormalPricePro(normalPrice);
                        setDiscountPro(discount);
                    }
                } else {
                    console.error("Dados de produtos não são um array:", productData);
                }
            } catch (error) {
                console.error("Erro ao carregar dados do produto:", error);
            }
        };

        loadProductData();
    }, []);

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    return (
        <section>
            <div className="relative bg-gradient-28 py-8  md:py-12  mt-16">
                <div className="card container grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
                        <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  border-transparent uppercase text-black">NOVA Point Pro 3</div>
                        <h1 className="mt-4 text-2xl font-black uppercase leading-tight text-black sm:text-3xl md:text-4xl">
                            Você tem um<br /> desconto de R$&nbsp;{formatPrice(discountPro)}<br />na Point Pro
                        </h1>
                        <div className="mt-8 flex flex-col text-black">
                            <span className="text-xl line-through">R$&nbsp;{formatPrice(normalPricePro)}</span>
                            <span className="text-3xl font-semibold">R$&nbsp;{formatPrice(pricePro)}</span>
                        </div>
                        <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-6">
                            <a 
                            href="/comprar/point-pro-3" 
                            className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand hover:bg-brand-dark text-white hover:bg-primary-foreground/90 dark:hover:bg-primary/90 h-12 px-8 text-base md:w-full md:max-w-[210px]">
                                Comprar agora
                            </a>
                            <div className="flex items-center gap-3 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck shrink-0">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2">
                                    </path>
                                    <path d="M15 18H9">
                                    </path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14">
                                    </path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                </svg>
                                <span className="text-sm">Frete grátis para todo o Brasil</span></div></div>
                    </div>
                    <div className="flex justify-center md:h-[450px]">
                        <Image
                            alt="hero-image"
                            fetchPriority="high"
                            width={450}
                            height={450}
                            decoding="async"
                            data-nimg="1"
                            className="object-contain animate-float"
                            src="/images/point/device-28.webp"
                            style={{ color: 'transparent' }}
                        />
                    </div>

                </div>
                <ul className="card container flex flex-col flex-wrap justify-center gap-3 pt-8 text-sm leading-tight text-black sm:flex-row md:gap-x-8">
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
'use client'
import Image from "next/image";
import { fetchProductData } from "../../data/productData";
import { useState, useEffect } from "react";

const HeroSectionPointSmart = () => {
    const [priceSmart, setPriceSmart] = useState("239,99");
    
    useEffect(() => {
        const loadProductData = async () => {
            try {
                const productData = await fetchProductData();
                if (Array.isArray(productData)) {
                    const pointSmart2 = productData.find(product => product.name === "Point Smart 2");
                    if (pointSmart2 && pointSmart2.price) {
                        setPriceSmart(pointSmart2.price);
                    }
                } else {
                    console.error("Dados de produtos não são um array:", productData);
                }
            } catch (error) {
                console.error("Erro ao carregar dados do produto:", error);
            }
        };
        
        loadProductData();
    }, []);

    return (
        <section>
            <div className="relative py-8 md:py-12 mt-16" style={{ background: 'linear-gradient(rgb(255, 230, 0) 28%, rgb(255, 212, 0) 100%)' }}>
                <div className="card container grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
                        <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-black border-transparent hover:bg-black/80 uppercase text-white">Point Smart 2</div>
                        <h1 className="mt-4 text-2xl font-black uppercase leading-tight text-black sm:text-3xl md:text-4xl">
                            Você tem um<br /> desconto de R$&nbsp;590,90<br />na Point Smart 2
                        </h1>
                        <div className="mt-8 flex flex-col text-black">
                            <span className="text-xl line-through">R$&nbsp;840,80</span>
                            <span className="text-3xl font-semibold">R$&nbsp;{priceSmart}</span>
                        </div>
                        <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-6">
                            <a href="/comprar/point-smart-2" className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-black text-white hover:bg-black/90 h-12 px-8 text-base md:w-full md:max-w-[210px]">
                                Comprar agora
                            </a>
                            <div className="flex items-center gap-3 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck shrink-0">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                </svg>
                                <span className="text-sm">Frete grátis para todo o Brasil</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center md:h-[450px]">
                        <Image
                            alt="hero-image"
                            fetchPriority="high"
                            width={450}
                            height={450}
                            decoding="async"
                            data-nimg="1"
                            className="object-contain animate-float"
                            src="/images/point/device-28-1.webp"
                            style={{ color: 'transparent' }}
                        />
                    </div>
                </div>
                <ul className="card container flex flex-col flex-wrap justify-center gap-3 pt-8 text-sm leading-tight text-black sm:flex-row md:gap-x-8">
                    <li className="flex flex-1 items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi shrink-0">
                            <path d="M12 20h.01"></path>
                            <path d="M2 8.82a15 15 0 0 1 20 0"></path>
                            <path d="M5 12.859a10 10 0 0 1 14 0"></path>
                            <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
                        </svg>
                        <p>Plano de dados grátis e Wi‑Fi</p>
                    </li>
                    <li className="flex flex-1 items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card shrink-0">
                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                            <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                        <p>Aceita cartões, aproximação, QR e Pix</p>
                    </li>
                    <li className="flex flex-1 items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" width="24" height="24" strokeWidth="2" className="shrink-0">
                            <ellipse cx="8" cy="5" rx="7" ry="4"></ellipse>
                            <path d="M1 5v12c0 2.21 3.13 4 7 4s7-1.79 7-4V5"></path>
                            <ellipse cx="8" cy="5" rx="2" ry="1" stroke="none" fill="currentColor"></ellipse>
                            <path d="M8 1h13v16h-6"></path>
                        </svg>
                        <p>Imprime comprovantes e tem reposição de bobinas grátis</p>
                    </li>
                    <li className="flex flex-1 items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-medium shrink-0">
                            <rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect>
                            <line x1="22" x2="22" y1="11" y2="13"></line>
                            <line x1="6" x2="6" y1="11" y2="13"></line>
                            <line x1="10" x2="10" y1="11" y2="13"></line>
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
### 📄 Arquivo: `src/components/points/IconPix.js`

```javascript
import React from 'react';

const IconPix = () => (
    <svg width="73" height="73" viewBox="0 0 78 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.9935 50.2497L37.8381 41.0941C37.5035 40.7595 37.1081 40.6987 36.8952 40.6987C36.6823 40.6987 36.2869 40.7595 35.9523 41.0941L26.7664 50.2801C25.9634 51.0832 24.8118 52.2715 21.8162 52.7625C20.6922 52.9467 20.118 54.3651 20.9244 55.1694L30.021 64.2417C31.732 65.9505 34.0512 66.9103 36.4694 66.9103C38.8875 66.9103 41.2068 65.9505 42.9177 64.2417L52.0447 55.139C52.8512 54.3347 52.2732 52.9071 51.1661 52.6395C49.6736 52.2787 48.3055 51.5617 46.9935 50.2497ZM26.7664 22.7221L35.9523 31.9081C36.1956 32.1514 36.5606 32.3035 36.8952 32.3035C37.2298 32.3035 37.5948 32.1514 37.8381 31.9081L46.9327 22.8133C48.2588 21.4312 49.6996 20.7028 51.255 20.3464C52.3653 20.092 52.9424 18.6675 52.136 17.8632L43.009 8.76054C41.298 7.05169 38.9787 6.09184 36.5606 6.09184C34.1425 6.09184 31.8232 7.05169 30.1123 8.76054L21.0157 17.8328C20.2092 18.6371 20.7838 20.0589 21.9063 20.2524C24.8833 20.7657 26.0352 21.9908 26.7664 22.7221Z" fill="url(#paint0_linear_1_12)"></path>
        <path d="M47.8257 23.6881L47.8166 23.6972L38.722 32.792C38.2491 33.2649 37.568 33.5535 36.8952 33.5535C36.2224 33.5535 35.5413 33.2649 35.0684 32.792L25.8826 23.6059C25.8651 23.5885 25.8476 23.5709 25.83 23.5534C25.4752 23.1979 25.1058 22.828 24.5241 22.4705C23.9186 22.0984 23.0386 21.7161 21.6939 21.4843C20.6479 21.3039 19.8913 20.5603 19.5697 19.7171C19.2432 18.8611 19.3202 17.7583 20.133 16.9477L29.2289 7.87611C31.1743 5.93318 33.8112 4.84184 36.5606 4.84184C39.3097 4.84184 41.9464 5.93294 43.8917 7.87547M47.8257 23.6881L43.8917 7.87547M47.8257 23.6881L47.8347 23.6787C48.9809 22.4841 50.2001 21.8705 51.5342 21.5648C52.5432 21.3336 53.2727 20.586 53.5854 19.748C53.9038 18.8947 53.8349 17.7922 53.0187 16.9781L43.8923 7.87611M47.8257 23.6881L43.8923 7.87611M43.8917 7.87547C43.8919 7.87568 43.8921 7.8759 43.8923 7.87611M43.8917 7.87547L43.8923 7.87611M38.722 40.2102L47.8774 49.3658C49.0266 50.515 50.1904 51.1176 51.4598 51.4245C52.4613 51.6665 53.1846 52.4163 53.495 53.2533C53.8111 54.1057 53.7448 55.2088 52.9274 56.0241L43.801 65.1261L43.8004 65.1267M38.722 40.2102L30.021 64.2417C31.732 65.9505 34.0512 66.9103 36.4694 66.9103C38.8875 66.9103 41.2068 65.9505 42.9177 64.2417L43.8004 65.1267M38.722 40.2102C38.0776 39.5658 37.315 39.4487 36.8952 39.4487C36.4754 39.4487 35.7128 39.5658 35.0684 40.2102L25.8826 49.3963L25.8649 49.4139C25.4689 49.81 25.0779 50.201 24.4692 50.5672C23.8561 50.936 22.9723 51.3063 21.614 51.5289C20.5638 51.701 19.8026 52.4421 19.4791 53.2861C19.1509 54.1428 19.2299 55.2448 20.0417 56.0545L29.1377 65.1261L29.1383 65.1267M38.722 40.2102L29.1383 65.1267M43.8004 65.1267C41.8551 67.0693 39.2185 68.1603 36.4694 68.1603C33.7203 68.1603 31.0836 67.0693 29.1383 65.1267M43.8004 65.1267L29.1383 65.1267" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2.5"></path>
        <path d="M64.2099 29.9613L57.7407 23.4632C57.501 23.2224 57.1752 23.087 56.8353 23.087H53.5337C51.8912 23.087 50.2487 23.7561 49.1233 24.9424L39.9983 34.0676C39.1466 34.9193 38.0212 35.3451 36.8958 35.3451C35.7369 35.3288 34.6276 34.8721 33.7933 34.0676L24.6074 24.8512C23.4516 23.6953 21.8699 23.0261 20.197 23.0261H16.2566C15.9168 23.0261 15.591 23.1615 15.3512 23.4023L8.76036 30.0221C7.05154 31.7331 6.09172 34.0524 6.09172 36.4706C6.09172 38.8888 7.05154 41.2081 8.76036 42.919L15.3512 49.5388C15.591 49.7796 15.9168 49.915 16.2566 49.915H20.2274C21.8699 49.915 23.4516 49.2458 24.6379 48.09L33.8237 38.904C34.6754 38.0523 35.8008 37.6264 36.9262 37.6264C38.0516 37.6264 39.177 38.0523 40.0287 38.904L49.1841 48.0596C50.3399 49.2154 51.9216 49.8846 53.5945 49.8846H56.8962C57.236 49.8846 57.5618 49.7492 57.8016 49.5084L64.2708 43.0103C65.9883 41.2693 66.9461 38.9188 66.9347 36.4732C66.9233 34.0277 65.9436 31.6862 64.2099 29.9613Z" fill="url(#paint1_linear_1_12)"></path>
        <path d="M36.9046 34.0951C36.0702 34.0812 35.2719 33.7528 34.6692 33.1757L25.4928 23.9688L25.4913 23.9673C24.1033 22.5792 22.2046 21.7761 20.197 21.7761H16.2566C15.5843 21.7761 14.9398 22.044 14.4654 22.5204L7.87592 29.1388C7.87569 29.139 7.87546 29.1392 7.87523 29.1395C5.93276 31.0848 4.84172 33.7215 4.84172 36.4706C4.84172 39.2199 5.93291 41.8567 7.87562 43.8021C7.87572 43.8022 7.87582 43.8023 7.87592 43.8024L14.4654 50.4208C14.9398 50.8972 15.5843 51.165 16.2566 51.165H20.2274C22.2105 51.165 24.1012 50.3581 25.5102 48.9853L25.516 48.9796L25.5218 48.9739L34.7076 39.7878C35.3126 39.1828 36.1146 38.8764 36.9262 38.8764C37.7378 38.8764 38.5398 39.1828 39.1448 39.7878L48.3002 48.9434C49.6883 50.3315 51.587 51.1346 53.5945 51.1346H56.8962C57.5685 51.1346 58.2131 50.8668 58.6874 50.3903L65.1566 43.8922L65.1607 43.8881C67.1103 41.9118 68.1976 39.2436 68.1847 36.4674C68.1718 33.6923 67.0604 31.0352 65.0938 29.0773C65.0931 29.0766 65.0923 29.0759 65.0916 29.0752L58.6266 22.5813C58.1523 22.1048 57.5076 21.837 56.8353 21.837H53.5337C51.5736 21.837 49.6025 22.6285 48.2284 24.0696L39.1144 33.1837C38.5116 33.7866 37.7132 34.0929 36.9046 34.0951Z" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2.5"></path>
        <path d="M46.9935 50.2497L37.8381 41.0941C37.5035 40.7595 37.1081 40.6987 36.8952 40.6987C36.6823 40.6987 36.2869 40.7595 35.9523 41.0941L26.7664 50.2801C25.9634 51.0832 24.8118 52.2715 21.8162 52.7625C20.6922 52.9467 20.118 54.3651 20.9244 55.1694L30.021 64.2417C31.732 65.9505 34.0512 66.9103 36.4694 66.9103C38.8875 66.9103 41.2068 65.9505 42.9177 64.2417L52.0447 55.139C52.8512 54.3347 52.2732 52.9071 51.1661 52.6395C49.6736 52.2787 48.3055 51.5617 46.9935 50.2497ZM26.7664 22.7221L35.9523 31.9081C36.1956 32.1514 36.5606 32.3035 36.8952 32.3035C37.2298 32.3035 37.5948 32.1514 37.8381 31.9081L46.9327 22.8133C48.2588 21.4312 49.6996 20.7028 51.255 20.3464C52.3653 20.092 52.9424 18.6675 52.136 17.8632L43.009 8.76054C41.298 7.05169 38.9787 6.09184 36.5606 6.09184C34.1425 6.09184 31.8232 7.05169 30.1123 8.76054L21.0157 17.8328C20.2092 18.6371 20.7838 20.0589 21.9063 20.2524C24.8833 20.7657 26.0352 21.9908 26.7664 22.7221Z" fill="url(#paint2_linear_1_12)"></path>
        <path d="M30.7277 63.5341L30.7272 63.5336L21.6306 54.4614C21.5542 54.3852 21.513 54.2666 21.5802 54.0912C21.6512 53.9057 21.8065 53.7774 21.9779 53.7493C23.5873 53.4855 24.7465 53.0261 25.629 52.4952C26.4766 51.9854 27.0321 51.4292 27.4304 51.0304C27.445 51.0158 27.4594 51.0014 27.4736 50.9872L36.6594 41.8012C36.7052 41.7554 36.7506 41.7316 36.792 41.7174C36.8382 41.7017 36.8786 41.6987 36.8952 41.6987C36.9118 41.6987 36.9522 41.7017 36.9984 41.7174C37.0398 41.7316 37.0851 41.7554 37.131 41.8012L46.2864 50.9568C47.7287 52.3991 49.2603 53.2076 50.9312 53.6115C51.1264 53.6587 51.306 53.8217 51.3854 54.0357C51.4602 54.2374 51.4105 54.3592 51.3386 54.4309L42.2115 63.5336L42.211 63.5341C40.6876 65.0557 38.6225 65.9103 36.4694 65.9103C34.3162 65.9103 32.2511 65.0557 30.7277 63.5341ZM42.3023 9.46808L42.3028 9.46859L51.4298 18.5712C51.5026 18.6439 51.5507 18.7648 51.4774 18.9614C51.3994 19.1703 51.2236 19.3277 51.0317 19.3716C49.302 19.7679 47.6865 20.5861 46.2184 22.1134L37.131 31.201C37.0714 31.2606 36.9592 31.3035 36.8952 31.3035C36.8312 31.3035 36.719 31.2606 36.6594 31.201L27.4736 22.015C27.4522 21.9936 27.4303 21.9716 27.4076 21.9489C27.047 21.5869 26.5154 21.0533 25.7021 20.5535C24.8337 20.0199 23.6797 19.5434 22.0762 19.267C21.9028 19.2371 21.7444 19.1051 21.672 18.9153C21.6035 18.7358 21.6462 18.6162 21.7219 18.5408L30.8184 9.46859L30.819 9.46807C32.3424 7.9465 34.4075 7.09184 36.5606 7.09184C38.7137 7.09184 40.7788 7.9465 42.3023 9.46808Z" stroke="#FBFBFB" strokeOpacity="0.7" strokeWidth="2"></path>
        <path d="M64.2099 29.9613L57.7407 23.4632C57.501 23.2224 57.1752 23.087 56.8353 23.087H53.5337C51.8912 23.087 50.2487 23.7561 49.1233 24.9424L39.9983 34.0676C39.1466 34.9193 38.0212 35.3451 36.8958 35.3451C35.7369 35.3288 34.6276 34.8721 33.7933 34.0676L24.6074 24.8512C23.4516 23.6953 21.8699 23.0261 20.197 23.0261H16.2566C15.9168 23.0261 15.591 23.1615 15.3512 23.4023L8.76036 30.0221C7.05154 31.7331 6.09172 34.0524 6.09172 36.4706C6.09172 38.8888 7.05154 41.2081 8.76036 42.919L15.3512 49.5388C15.591 49.7796 15.9168 49.915 16.2566 49.915H20.2274C21.8699 49.915 23.4516 49.2458 24.6379 48.09L33.8237 38.904C34.6754 38.0523 35.8008 37.6264 36.9262 37.6264C38.0516 37.6264 39.177 38.0523 40.0287 38.904L49.1841 48.0596C50.3399 49.2154 51.9216 49.8846 53.5945 49.8846H56.8962C57.236 49.8846 57.5618 49.7492 57.8016 49.5084L64.2708 43.0103C65.9883 41.2693 66.9461 38.9188 66.9347 36.4732C66.9233 34.0277 65.9436 31.6862 64.2099 29.9613Z" fill="url(#paint3_linear_1_12)"></path>
        <path d="M63.5013 30.6668L63.5046 30.6702C65.0508 32.2085 65.9246 34.2968 65.9347 36.4779C65.9449 38.6583 65.0912 40.7539 63.5604 42.3065C63.5599 42.307 63.5594 42.3075 63.5589 42.308L57.0929 48.8029C57.0408 48.8552 56.97 48.8846 56.8962 48.8846H53.5945C52.1893 48.8846 50.8613 48.3225 49.8912 47.3525L40.7358 38.1969C39.6868 37.1478 38.3027 36.6264 36.9262 36.6264C35.5497 36.6264 34.1656 37.1478 33.1166 38.1969L23.9356 47.3781C22.928 48.3576 21.5955 48.915 20.2274 48.915H16.2566C16.1828 48.915 16.112 48.8856 16.0599 48.8333L9.46901 42.2135L9.46791 42.2124C7.94636 40.6889 7.09172 38.6238 7.09172 36.4706C7.09172 34.3174 7.94636 32.2522 9.46791 30.7288L9.46901 30.7277L16.0599 24.1079C16.112 24.0555 16.1828 24.0261 16.2566 24.0261H20.197C21.602 24.0261 22.9299 24.588 23.8999 25.5578C23.9 25.558 23.9002 25.5581 23.9003 25.5583L33.085 34.7735L33.092 34.7806L33.0992 34.7875C34.1164 35.7683 35.4688 36.3251 36.8817 36.345V36.3451H36.8958C38.2722 36.3451 39.6564 35.8237 40.7054 34.7747L49.8304 25.6495L49.8397 25.6402L49.8487 25.6307C50.7748 24.6546 52.1498 24.087 53.5337 24.087H56.8353C56.9092 24.087 56.98 24.1164 57.0321 24.1687L63.5013 30.6668Z" stroke="#FBFBFB" strokeOpacity="0.7" strokeWidth="2"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M62.8418 14.7197C62.8418 14.4396 62.9489 14.2519 63.2717 13.7856C63.8103 12.9453 63.9174 12.4789 63.9174 11.451C63.9174 10.4244 63.8103 9.95808 63.2717 9.1178C63.1646 8.93154 62.8418 8.46378 62.8418 8.18368C62.8418 7.62349 63.3788 7.0633 64.0245 7.0633C64.5631 7.0633 64.993 7.25097 65.4245 7.99742C66.1773 9.02397 66.6072 10.2382 66.6072 11.5448C66.6072 12.8515 66.1773 14.1595 65.4245 15.1861C64.993 15.7462 64.5631 16.0263 64.0245 16.0263C63.3788 15.8401 62.8418 15.2799 62.8418 14.7197ZM67.3616 16.7728C67.3616 16.4927 67.4687 16.3064 67.8986 15.6524C68.76 14.2519 69.0829 12.8515 69.0829 11.3586C69.0829 9.95808 68.76 8.55761 67.8986 7.15714C67.4687 6.50311 67.3616 6.22302 67.3616 5.94292C67.3616 5.66283 67.7915 5.01021 68.5443 5.01021C69.2986 5.01021 69.6215 5.2903 70.2672 6.41068C71.2357 7.99742 71.6656 9.49173 71.6656 11.3586C71.6656 13.3192 71.3428 14.7197 70.1601 16.6804C69.8372 17.333 69.4057 17.8932 68.653 17.8932C67.8986 17.7993 67.3616 17.333 67.3616 16.7728ZM72.2042 18.9197C72.2042 18.4534 72.5271 18.0794 72.8499 17.5192C73.9255 15.5586 74.4641 13.5055 74.4641 11.451C74.4641 9.30406 73.9255 7.24957 72.7428 5.19647C72.3113 4.45002 72.2042 4.07609 72.2042 3.796C72.2042 3.42347 72.7428 2.86328 73.4956 2.86328C74.357 2.86328 74.5712 3.42347 75.1098 4.16992C76.1854 6.03676 77.1555 8.55761 77.1555 11.4524C77.1555 13.5993 76.6169 15.8401 75.3256 18.3595C74.787 19.4799 74.2484 20.0401 73.6027 20.0401C72.7428 20.0401 72.2042 19.4799 72.2042 18.9197Z" fill="currentColor" fillOpacity="0.9"></path>
        <defs>
            <linearGradient id="paint0_linear_1_12" x1="53.9939" y1="44.9905" x2="-26.9725" y2="44.9141" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E587"></stop>
                <stop offset="1" stopColor="#85DEFF"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_1_12" x1="66.3706" y1="40.2239" x2="-72.054" y2="39.7188" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E587"></stop>
                <stop offset="1" stopColor="#85DEFF"></stop>
            </linearGradient>
            <linearGradient id="paint2_linear_1_12" x1="53.9939" y1="44.9905" x2="-26.9725" y2="44.9141" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E587"></stop>
                <stop offset="1" stopColor="#85DEFF"></stop>
            </linearGradient>
            <linearGradient id="paint3_linear_1_12" x1="66.3706" y1="40.2239" x2="-72.054" y2="39.7188" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E587"></stop>
                <stop offset="1" stopColor="#85DEFF"></stop>
            </linearGradient>
        </defs>
    </svg>
);

export default IconPix;
```


---
### 📄 Arquivo: `src/components/points/SectionAboutPointPro.js`

```javascript
import React from 'react';
import Image from 'next/image';
import IconPix from './IconPix';

// You can keep SVGs inline or extract them into separate component files for better organization

const IconClockFast = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black opacity-90">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.0673 33.0938C29.48 33.0938 35.4892 27.0846 35.4892 19.6719C35.4892 12.2592 29.48 6.25 22.0673 6.25C17.2921 6.25 13.0993 8.74375 10.7202 12.5H13.2609C15.3434 9.94594 18.5149 8.3149 22.0673 8.3149C28.3396 8.3149 33.4243 13.3996 33.4243 19.6719C33.4243 25.9442 28.3396 31.0288 22.0673 31.0288C18.2468 31.0288 14.8669 29.1423 12.8083 26.25H10.3652C12.6664 30.3349 17.0447 33.0938 22.0673 33.0938ZM23.0963 19.0322V11.2838H21.0314V20.3082L26.657 23.1218L27.5806 21.275L23.0963 19.0322Z" fill="currentColor"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.27148 14.5068C3.27148 13.9891 3.69122 13.5693 4.20898 13.5693H14.2423C14.7601 13.5693 15.1798 13.9891 15.1798 14.5068C15.1798 15.0246 14.7601 15.4443 14.2423 15.4443H4.20898C3.69122 15.4443 3.27148 15.0246 3.27148 14.5068ZM2.41211 23.4601C2.41211 22.9423 2.83184 22.5226 3.34961 22.5226H13.383C13.9007 22.5226 14.3205 22.9423 14.3205 23.4601C14.3205 23.9778 13.9007 24.3976 13.383 24.3976H3.34961C2.83184 24.3976 2.41211 23.9778 2.41211 23.4601ZM2.5 18.0463C1.98223 18.0463 1.5625 18.466 1.5625 18.9838C1.5625 19.5015 1.98223 19.9213 2.5 19.9213H12.5334C13.0511 19.9213 13.4709 19.5015 13.4709 18.9838C13.4709 18.466 13.0511 18.0463 12.5334 18.0463H2.5Z" fill="currentColor"></path>
    </svg>
);

const IconChip4G = () => (
    <svg width="69" height="86" viewBox="0 0 82 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="paint0_linear_chip" x1="61.3882" y1="52.4029" x2="-44.1826" y2="52.2633" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E587"></stop>
                <stop offset="1" stopColor="#85DEFF"></stop>
            </linearGradient>
        </defs>
        <path d="M69.1675 10.4012V8.41532H64.4844V6.86444L69.0364 0.355026H71.008V6.79228H72.2835V8.41634H71.008V10.4022H69.1665L69.1675 10.4012ZM69.1675 6.79025V2.93338L66.4712 6.79025H69.1675Z" fill="black" fillOpacity="0.9"></path>
        <path d="M78.882 8.8492C79.1818 8.8492 79.5395 8.82481 79.9552 8.77705V6.32674H78.071V4.76062H81.9563V9.79132C81.502 10.0332 80.9603 10.2212 80.3323 10.3564C79.7042 10.4915 79.066 10.5596 78.4186 10.5596C76.8524 10.5596 75.6471 10.1196 74.8015 9.24048C73.956 8.36138 73.5332 7.10929 73.5332 5.48524C73.5332 3.76464 73.9702 2.4526 74.8452 1.54911C75.7203 0.645613 76.9886 0.193359 78.6513 0.193359C79.7916 0.193359 80.7723 0.391538 81.5945 0.787896V2.4404C80.5894 2.12128 79.6859 1.96173 78.883 1.96173C77.8098 1.96173 77.0222 2.23003 76.5201 2.76664C76.017 3.30324 75.766 4.14677 75.766 5.29621V5.5574C75.766 6.69769 76.015 7.53208 76.513 8.05852C77.011 8.58497 77.8007 8.84819 78.883 8.84819L78.882 8.8492Z" fill="black" fillOpacity="0.9"></path>
        <path d="M15.8078 9.41894C13.0266 9.41894 9.84977 12.201 9.84977 15.929C9.66925 32.7086 9.84982 64.9272 9.84977 70.9556C9.84969 78.8949 16.1461 81.0025 18.5462 81.1909H57.376C66.7896 81.1909 66.7896 72.3964 66.7896 69.6962L66.7896 26.1351C66.7896 21.2958 66.1358 20.4607 65.2674 19.3512L65.2356 19.3107C63.6882 17.7408 58.7346 12.8153 57.3543 11.4316C55.2597 9.33166 53.8506 9.30479 50.8733 9.3185C41.7957 9.36029 18.5891 9.41894 15.8078 9.41894Z" stroke="black" strokeOpacity="0.9" strokeWidth="4"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M15.5528 21.6071C15.5528 18.5727 18.1101 16.3084 20.349 16.3084C22.5878 16.3084 41.2686 16.2606 48.576 16.2266C50.9726 16.2154 52.1069 16.2373 53.793 17.9465C54.1754 18.3341 54.8984 19.063 55.7331 19.9046C57.3239 21.5085 59.3204 23.5214 60.1373 24.3595L60.1629 24.3925C60.862 25.2955 61.3882 25.9752 61.3882 29.914L61.3882 65.3695C61.3882 67.5673 61.3882 74.7253 53.8105 74.7253H22.5533C20.6213 74.572 15.5528 72.8566 15.5528 66.3945C15.5528 65.2769 15.5453 63.0533 15.5354 60.1242C15.5017 50.1936 15.4406 32.1536 15.5528 21.6071ZM21.789 60.3251C21.789 61.8163 22.9979 63.0251 24.489 63.0251L50.589 63.0251C52.0802 63.0251 53.289 61.8163 53.289 60.3251L53.289 35.1251C53.289 33.6339 52.0802 32.4251 50.589 32.4251L24.489 32.4251C22.9979 32.4251 21.789 33.6339 21.789 35.1251L21.789 60.3251Z" fill="url(#paint0_linear_chip)"></path>
        <path d="M50.46 32.7976L26.3367 32.7974C23.2016 32.7974 23.1999 33.3799 23.1915 36.2715L23.1914 36.2997V60.1516C23.1914 62.9704 23.3724 62.975 25.3588 62.975C31.1784 62.9963 46.1895 62.975 49.9183 62.975C53.3785 62.975 53.3785 62.2089 53.3785 59.6675V35.6401C53.3785 32.7976 52.8529 32.7976 50.4608 32.7976H50.46Z" stroke="black" strokeOpacity="0.9" strokeWidth="4"></path>
        <path d="M34.7422 36.1523L34.7422 34.6523L31.7422 34.6523L31.7422 36.1523L34.7422 36.1523ZM31.7422 39.5064C31.7422 40.3349 32.4137 41.0064 33.2422 41.0064C34.0706 41.0064 34.7422 40.3349 34.7422 39.5064L31.7422 39.5064ZM31.7422 36.1523L31.7422 39.5064L34.7422 39.5064L34.7422 36.1523L31.7422 36.1523Z" fill="black" fillOpacity="0.9"></path>
        <path d="M34.7422 59.6283L34.7422 61.1283L31.7422 61.1283L31.7422 59.6283L34.7422 59.6283ZM31.7422 52.9201C31.7422 52.0917 32.4137 51.4201 33.2422 51.4201C34.0706 51.4201 34.7422 52.0917 34.7422 52.9201L31.7422 52.9201ZM31.7422 59.6283L31.7422 52.9201L34.7422 52.9201L34.7422 59.6283L31.7422 59.6283Z" fill="black" fillOpacity="0.9"></path>
        <path d="M44.8127 36.1527L44.8127 34.6527L41.8127 34.6527L41.8127 36.1527L44.8127 36.1527ZM41.8127 39.5069C41.8127 40.3353 42.4842 41.0069 43.3127 41.0069C44.1411 41.0069 44.8127 40.3353 44.8127 39.5069L41.8127 39.5069ZM41.8127 36.1527L41.8127 39.5069L44.8127 39.5069L44.8127 36.1527L41.8127 36.1527Z" fill="black" fillOpacity="0.9"></path>
        <path d="M44.8127 59.6283L44.8127 61.1283L41.8127 61.1283L41.8127 59.6283L44.8127 59.6283ZM41.8127 52.9201C41.8127 52.0917 42.4842 51.4201 43.3127 51.4201C44.1411 51.4201 44.8127 52.0917 44.8127 52.9201L41.8127 52.9201ZM41.8127 59.6283L41.8127 52.9201L44.8127 52.9201L44.8127 59.6283L41.8127 59.6283Z" fill="black" fillOpacity="0.9"></path>
    </svg>
);


const IconSimCard = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black opacity-90">
        <path d="M6.52044 2.03975C5.35953 2.03975 4.03349 3.12355 4.03349 4.57589C3.95814 11.1127 4.03351 23.6641 4.03349 26.0126C4.03346 29.1056 6.66163 29.9266 7.66344 30H23.8713C27.8006 30 27.8006 26.5739 27.8006 25.522L27.8006 8.55187C27.8006 6.66664 27.5277 6.3413 27.1652 5.90908L27.152 5.89328C26.5061 5.2817 24.4384 3.36288 23.8623 2.82381C22.988 2.00575 22.3998 1.99528 21.1571 2.00062C17.368 2.01691 7.68135 2.03975 6.52044 2.03975Z" stroke="#1A1A1A" strokeWidth="2"></path>
        <path d="M20.9834 11.8009L10.9144 11.8008C9.6058 11.8008 9.60509 12.0439 9.6016 13.2509L9.60156 13.2626V23.2183C9.60156 24.3949 9.67711 24.3968 10.5062 24.3968C12.9353 24.4057 19.2009 24.3968 20.7573 24.3968C22.2016 24.3968 22.2016 24.0771 22.2016 23.0163V12.9873C22.2016 11.8009 21.9822 11.8009 20.9837 11.8009H20.9834Z" stroke="#1A1A1A" strokeWidth="2"></path>
        <path d="M14.8008 13.2012L14.8008 12.2012L12.8008 12.2012L12.8008 13.2012L14.8008 13.2012ZM12.8008 14.6012C12.8008 15.1535 13.2485 15.6012 13.8008 15.6012C14.3531 15.6012 14.8008 15.1535 14.8008 14.6012L12.8008 14.6012ZM12.8008 13.2012L12.8008 14.6012L14.8008 14.6012L14.8008 13.2012L12.8008 13.2012Z" fill="#1A1A1A"></path>
        <path d="M14.8008 23L14.8008 24L12.8008 24L12.8008 23L14.8008 23ZM12.8008 20.2C12.8008 19.6477 13.2485 19.2 13.8008 19.2C14.3531 19.2 14.8008 19.6477 14.8008 20.2L12.8008 20.2ZM12.8008 23L12.8008 20.2L14.8008 20.2L14.8008 23L12.8008 23Z" fill="#1A1A1A"></path>
        <path d="M19 13.2012L19 12.2012L17 12.2012L17 13.2012L19 13.2012ZM17 14.6012C17 15.1535 17.4477 15.6012 18 15.6012C18.5523 15.6012 19 15.1535 19 14.6012L17 14.6012ZM17 13.2012L17 14.6012L19 14.6012L19 13.2012L17 13.2012Z" fill="#1A1A1A"></path>
        <path d="M19 23L19 24L17 24L17 23L19 23ZM17 20.2C17 19.6477 17.4477 19.2 18 19.2C18.5523 19.2 19 19.6477 19 20.2L17 20.2ZM17 23L17 20.2L19 20.2L19 23L17 23Z" fill="#1A1A1A"></path>
    </svg>
);

const IconBattery = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black opacity-90">
        <path d="M29 12L29 20" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
        <rect x="2" y="6" width="23.0589" height="20" rx="3.49" stroke="#1A1A1A" strokeWidth="2.2"></rect>
        <path d="M14.8235 10.4123V21.5879" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round"></path>
        <path d="M10.8821 10.4121V21.5877" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round"></path>
        <path d="M6.94072 10.4121V21.5877" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round"></path>
    </svg>
);

const IconBatteryCharge = () => (
    <svg width="51" height="80" viewBox="0 0 56 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="paint0_linear_battery" x1="79.5273" y1="108.5" x2="-81.4727" y2="108" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E587"></stop>
                <stop offset="1" stopColor="#85DEFF"></stop>
            </linearGradient>
        </defs>
        <rect x="4.12695" y="90" width="80.8" height="48.8" rx="7.02788" transform="rotate(-90 4.12695 90)" stroke="currentColor" strokeOpacity="0.9" strokeWidth="4" className="text-black/90"></rect>
        <path d="M34.9262 3.20019L21.3262 3.2002" stroke="currentColor" strokeOpacity="0.9" strokeWidth="4" strokeLinecap="round" className="text-black/90"></path>
        <rect x="9.52734" y="85" width="70" height="38" rx="3" transform="rotate(-90 9.52734 85)" fill="url(#paint0_linear_battery)"></rect>
        <path d="M18.0918 50.7482L28.9263 33.7197C29.8587 32.2543 32.1301 33.1157 31.8563 34.8308L30.2142 45.1168C30.059 46.0887 30.8099 46.969 31.7942 46.969H36.7615C38.0346 46.969 38.7978 48.3837 38.0986 49.4476L27.5432 65.5114C26.5671 66.9969 24.2589 66.0213 24.6441 64.286L26.6716 55.1539C26.8934 54.1548 26.1331 53.2071 25.1096 53.2071H19.4418C18.1793 53.2071 17.4141 51.8134 18.0918 50.7482Z" fill="currentColor" fillOpacity="0.9" className="text-black/90"></path>
    </svg>
);


const PointProSection = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-36 mt-36 mb-0 font-proxima-nova">
            <div className='w-96 sm:w-full mx-auto'>

            <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12 md:mb-16">
                A Point Pro 3 acelera o ritmo das suas vendas
            </h2>
            </div>

            {/* Card 1: Processamento Rápido - Ocupa largura total em todos os breakpoints */}
            <div className="mb-8">
                <div className="rounded-[40px] h-[419px] p-8 md:p-10 relative flex flex-col md:flex-row items-start md:items-center justify-between bg-gradient-to-t w-96 sm:w-full mx-auto from-yellow-300 to-yellow-400 overflow-hidden">
                    {/* Text Side */}
                    <div className="md:w-1/2 lg:w-2/5 z-10 text-gray-900 relative pb-8 md:pb-0">
                        <div className="mb-4 h-10 w-10">
                            <IconClockFast />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                            Processamento rápido para vender em segundos
                        </h3>
                        <p className="text-lg text-black/80">
                            Cobre com Pix por aproximação para ainda mais agilidade.
                        </p>
                    </div>

                    {/* Image Side */}
                    <div className="md:w-1/2 lg:w-3/5 h-full relative flex items-end justify-center md:self-end">
                        {/* Floating Pix Icon - Elevada com z-index para ficar sobre a imagem */}
                        <div
                            className="absolute top-[5%] right-[8%] w-[119px] h-[130px] rounded-2xl bg-white/70 backdrop-blur-sm shadow-[-28.8px_0px_57.6px_0px_rgba(0,0,0,0.16)] flex items-center justify-center z-20"
                            style={{ paddingTop: '18px', paddingRight: '15px', paddingBottom: '10px', paddingLeft: '15px' }}
                        >
                            <div className="w-[73px] h-[73px]">
                                <IconPix />
                            </div>
                        </div>
                        {/* Main Image with hover effect - Colada na parte de baixo */}
                        <div >
                            <div className="w-full transform transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/images/point/point-pro3-1.webp"
                                    alt="Lector Point Smart mostrando tela de pagamento aprovado"
                                    width={500}
                                    height={400}
                                    layout="responsive"
                                    objectFit="contain"
                                    objectPosition="bottom"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards 2 e 3: Grid com dois cards lado a lado no desktop, um embaixo do outro no mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
                {/* Card 2: Internet Ilimitada */}
                <div className="rounded-[40px] w-96 sm:w-full  mx-auto  p-8 md:p-10 relative flex flex-col bg-gradient-to-t from-yellow-300 to-yellow-400 overflow-hidden">
                    {/* Text Side */}
                    <div className="z-10 text-gray-900 flex-shrink-0">
                        <div className="mb-4 h-8 w-8">
                            <IconSimCard />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 md:mb-6">
                            Internet ilimitada com chip 4G grátis e WiFi
                        </h3>
                    </div>

                    {/* Image Side */}
                    <div className="flex-grow relative -mx-8 -mb-8 md:-mx-10 md:-mb-10 mt-6 flex items-end justify-center overflow-hidden group">
                        {/* Floating Chip Icon */}
                        <div
                            className="absolute top-[48%] right-[11%] w-[119px] h-[130px] rounded-2xl bg-white/70 backdrop-blur-sm shadow-[-31.5px_0px_63px_0px_rgba(0,0,0,0.16)] flex items-center justify-center p-4 z-10"
                        >
                            <div className="w-[69px] h-[86px]">
                                <IconChip4G />
                            </div>
                        </div>
                        {/* Main Image with hover effect */}
                        <div className="w-96 transform transition-transform duration-300 group-hover:scale-105 ">
                            <Image
                                src="/images/point/point-pro3-2.webp"
                                alt="Lector Point Smart com chip 4G"
                                layout="responsive"
                                width={300}
                                height={400}
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Card 3: Bateria */}
                <div className="rounded-[40px] w-96 sm:w-full  mx-auto  p-8 md:p-10 relative flex flex-col bg-gradient-to-t from-yellow-300 to-yellow-400 overflow-hidden">
                    {/* Text Side */}
                    <div className="z-10 text-gray-900 flex-shrink-0">
                        <div className="mb-4 h-8 w-8">
                            <IconBattery />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 md:mb-6">
                            Até 48 horas de bateria para cobrar sem parar
                        </h3>
                    </div>

                    {/* Image Side */}
                    <div className="flex-grow relative -mx-8 -mb-8 md:-mx-10 md:-mb-10 mt-6 flex items-end justify-center overflow-hidden group">
                        {/* Floating Battery Icon */}
                        <div
                            className="absolute top-[48%] right-[11%] w-[119px] h-[130px] rounded-2xl bg-white/70 backdrop-blur-sm shadow-[-28.8px_0px_57.6px_0px_rgba(0,0,0,0.16)] flex items-center justify-center z-10"
                            style={{ paddingTop: '22px', paddingRight: '27px', paddingBottom: '18px', paddingLeft: '24px' }}
                        >
                            <div className="w-[51px] h-[80px]">
                                <IconBatteryCharge />
                            </div>
                        </div>
                        {/* Main Image with hover effect */}
                        <div className="w-full transform transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/images/point/point-pro3-3.webp"
                                alt="Lector Point Smart com indicador de bateria"
                                layout="responsive"
                                width={500}
                                height={600}
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PointProSection;
```


---
### 📄 Arquivo: `src/components/points/SectionAboutPointSmart.js`

```javascript
'use client'
import Image from "next/image";

const SectionAboutPointSmart = () => {
    return (
        <section className="mt-3 mb-0">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Venda sem parar com a Point Smart 2
                </h2>
                
                <div className="flex flex-col gap-6">
                    {/* Card grande */}
                    <div className="w-full bg-[#ffe600] rounded-xl overflow-hidden" style={{ height: "380px" }}>
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-black mb-4">Até 3 dias de bateria</h3>
                                <p className="text-black text-lg">Venda sem se preocupar em carregar a maquininha.</p>
                            </div>
                            <div className="md:w-1/2 relative h-full flex items-center justify-center">
                                <Image
                                    src="/images/point/card-1-smart-mp.webp"
                                    alt="Point Smart 2 com bateria de longa duração"
                                    width={500}
                                    height={380}
                                    className="object-contain -mb-28"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Cards menores */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card Bobinas */}
                        <div className="bg-[#ffe600] rounded-xl overflow-hidden" style={{ height: "300px" }}>
                            <div className="flex flex-col h-full">
                                <div className="p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-black">Bobinas grátis para sempre</h3>
                                </div>
                                <div className="relative flex-grow flex items-center justify-center">
                                    <Image
                                        src="/images/point/card-2.webp"
                                        alt="Point Smart 2 com bobinas grátis"
                                        width={320}
                                        height={200}
                                        className="object-contain -mb-6"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Card Garantia */}
                        <div className="bg-[#ffe600] rounded-xl overflow-hidden" style={{ height: "300px" }}>
                            <div className="flex flex-col h-full">
                                <div className="p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-black">Garantia de 3 anos</h3>
                                </div>
                                <div className="relative flex-grow flex items-center justify-center">
                                    <Image
                                        src="/images/point/card-3.webp"
                                        alt="Point Smart 2 com garantia de 3 anos"
                                        width={320}
                                        height={200}
                                        className="object-contain -mb-6"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionAboutPointSmart;
```


---
### 📄 Arquivo: `src/components/points/SectionPointPro.js`

```javascript
'use client';

import { useState } from 'react';
import { useTaxasModal } from '../../contexts/TaxasModalContext';

const SectionPointPro = () => {
    const [activeRange, setActiveRange] = useState(0); // Voltando para o primeiro estado para corresponder à imagem
    
    // Usando o contexto do modal
    const { openModal } = useTaxasModal();
    
    // Definição das taxas por faixa de valores
    const taxRanges = [

        // taxa promo
        {
            debito: '0,74',
            credito: '0,74',
            credito12x: '8,99'
        },

        // Até R$5 mil
        {
            debito: '1,61',
            credito: '3,51',
            credito12x: '13,6'
        },
        // De R$5 mil a R$10 mil
        {
            debito: '1,58',
            credito: '3,48',
            credito12x: '13,79'
        },
        // Mais de R$10 mil
        {
            debito: '1,49',
            credito: '3,39',
            credito12x: '13,59'
        }
    ];

    const handleRangeClick = (index) => {
        setActiveRange(index);
    };

    return (
        <section className="mt-4 md:mt-6 mb-0 bg-white py-12 md:py-16" style={{
            fontFamily: '"Proxima Nova",-apple-system,Roboto,Arial,sans-serif,sans-serif',
            fontSize: '18px',
            lineHeight: 1.25,
            WebkitFontSmoothing: 'antialiased'
        }}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold sm:text-2xl md:text-4xl mb-2">
                        Quanto mais você vende, menos você paga
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        Receba na hora com taxas que variam conforme suas vendas no mês.
                    </p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {/* Card das taxas */}
                    <div className="fee-selector-info md:w-1/2 bg-[#f5f5f5] p-6 md:p-10 rounded-3xl shadow-sm max-w-xl">
                        <h2 className="calm-landings-library-section-title__title text-xl font-semibold md:text-2xl mb-8">
                            Selecione seu faturamento mensal
                        </h2>
                        
                        {/* Seletor de faixas */}
                        <div className="calm-landings-library-taxes-switcher desktop">
                            {/* Switch bar */}
                            <div className="switch-bar relative border rounded-2xl bg-[rgba(0,0,0,.039)] p-1 mb-8 md:mb-10 text-xs">
                                {/* Highlight background */}
                                <div 
                                    className="switch-bar__highlight absolute top-1 bottom-1 left-1 bg-white rounded-2xl shadow-md transition-transform duration-300 ease-out"
                                    style={{ 
                                        width: 'calc(33.33% - 2px)', 
                                        transform: `translateX(${activeRange * 100}%)` 
                                    }}
                                />
                                
                                {/* Botões */}
                                <div className="relative z-10 flex">
                                    <button 
                                        className={`switch-bar__button flex-1 py-2 md:py-3  text-center font-extrabold transition-colors duration-200 ${activeRange === 0 ? 'switch-bar__button--active text-emerald-600' : 'text-gray-500'}`}
                                        onClick={() => handleRangeClick(0)}
                                    >
                                      PROMO
                                    </button>
                                    <button 
                                        className={`switch-bar__button flex-1 py-2 md:py-3 font-medium text-center transition-colors duration-200 ${activeRange === 1 ? 'switch-bar__button--active text-black' : 'text-gray-500'}`}
                                        onClick={() => handleRangeClick(1)}
                                    >
                                        De R$ 5 mil a<br className="block" /> R$ 10 mil
                                    </button>
                                    <button 
                                        className={`switch-bar__button flex-1 py-2 md:py-3 font-medium text-center transition-colors duration-200 ${activeRange === 2 ? 'switch-bar__button--active text-black' : 'text-gray-500'}`}
                                        onClick={() => handleRangeClick(2)}
                                    >
                                        Mais de<br className="block" /> R$ 10 mil
                                    </button>
                                </div>
                            </div>

                            {/* Valores de taxas */}
                            <div className="values flex flex-row justify-between mb-10">
                                {/* Débito */}
                                <div className="values__box flex-1 text-center">
                                    <div className="values__value flex items-end justify-center">
                                        {/* se a taxa for promo, o texto é verde  */}
                                        {activeRange === 0 ? (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold text-emerald-600">
                                                {taxRanges[activeRange].debito}
                                            </span>
                                            
                                        ) : (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold">
                                                {taxRanges[activeRange].debito}
                                            </span>
                                        )}
                                        {activeRange === 0 ? (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold text-emerald-600">%</span>
                                        ) : (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold">%</span>
                                        )}

                                        
                                    </div>
                                    <span className="values__label text-xs font-medium uppercase text-gray-600 mt-1 block">DÉBITO</span>
                                </div>
                                
                                {/* Crédito */}
                                <div className="values__box flex-1 text-center">
                                    <div className="values__value flex items-end justify-center">
                                        {/* se a taxa for promo, o texto é verde  */}
                                        {activeRange === 0 ? (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold text-emerald-600">
                                                {taxRanges[activeRange].credito}
                                            </span>
                                        ) : (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold">
                                                {taxRanges[activeRange].credito}
                                            </span>
                                        )}
                                        {activeRange === 0 ? (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold text-emerald-600">%</span>
                                        ) : (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold">%</span>
                                        )}

                                    </div>
                                    <span className="values__label text-xs font-medium uppercase text-gray-600 mt-1 block">CRÉDITO</span>
                                </div>
                                
                                {/* Crédito 12x */}
                                <div className="values__box flex-1 text-center">
                                    <div className="values__value flex items-end justify-center">
                                        {/* se a taxa for promo, o texto é verde  */}
                                        {activeRange === 0 ? (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold text-emerald-600">
                                                {taxRanges[activeRange].credito12x}
                                            </span>
                                        ) : (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold">  {taxRanges[activeRange].credito12x}</span>
                                        )}
                                        {activeRange === 0 ? (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold text-emerald-600">%</span>
                                        ) : (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold">%</span>
                                        )}

                                    </div>
                                    <span className="values__label text-xs font-medium uppercase text-gray-600 mt-1 block">CRÉDITO 12x</span>
                                </div>
                            </div>
                            
                            {/* Modal Trigger */}
                            <div className="wrapper-modal">
                                <div className="calm-landings-library-modal desktop">
                                    <section>
                                        <h2  className="flex items-center w-full  cursor-pointer hover:underline text-sm text-blue-600"
                                                
                                                onClick={openModal}
                                                style={{ color: '#3483fa' }}>
                                           
                                                Conferir todas as taxas
                                               
                                            
                                        </h2>
                                    </section>
                                </div>
                            </div>
                            
                            <div style={{ color: 'rgba(0, 0, 0, 0.55)', fontSize: '12px', marginTop: '10px', textAlign: 'left', lineHeight: '16px' }}>
                              
                                <p>
                                Promoção para novos usuários: Ao adquirir uma maquininha Point, o usuário aproveita taxas promocionais nos primeiros 30 dias ou até R$ 5.000 em vendas (o que ocorrer primeiro)
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Card da maquininha */}
                    <div className="md:w-1/2 bg-[#f5f5f5] rounded-3xl shadow-sm flex items-center justify-center overflow-hidden max-w-xl p-4">
                        <div className="relative w-full h-full flex items-center justify-center">
                        <video 
                                    autoPlay 
                                    loop 
                                    playsInline 
                                    width="100%" 
                                    aria-hidden="true"
                                    style={{ 
                                        maxWidth: "100%", 
                                        height: "100%", 
                                        border: "none", 
                                        outline: "none", 
                                        pointerEvents: "none",
                                        objectFit: "cover",
                                        display: "block"
                                    }}
                                >
                                    <source 
                                        src="/videos/pro3.mp4" 
                                        type="video/mp4" 
                                    />
                                </video>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionPointPro;
```


---
### 📄 Arquivo: `src/components/points/SectionPointSmart.js`

```javascript
'use client';

import { useState } from 'react';
import { useTaxasModal } from '../../contexts/TaxasModalContext';

const SectionPointSmart = () => {
    const [activeRange, setActiveRange] = useState(0); // Voltando para o primeiro estado para corresponder à imagem
    
    // Usando o contexto do modal
    const { openModal } = useTaxasModal();
    
    // Definição das taxas por faixa de valores
    const taxRanges = [

        // taxa promo
        {
            debito: '0,74',
            credito: '0,74',
            credito12x: '8,99'
        },

        // Até R$5 mil
        {
            debito: '1,61',
            credito: '3,51',
            credito12x: '13,6'
        },
        // De R$5 mil a R$10 mil
        {
            debito: '1,58',
            credito: '3,48',
            credito12x: '13,79'
        },
        // Mais de R$10 mil
        {
            debito: '1,49',
            credito: '3,39',
            credito12x: '13,59'
        }
    ];

    const handleRangeClick = (index) => {
        setActiveRange(index);
    };

    return (
        <section className="mt-4 md:mt-6 mb-0 bg-white py-12 md:py-16" style={{
            fontFamily: '"Proxima Nova",-apple-system,Roboto,Arial,sans-serif,sans-serif',
            fontSize: '18px',
            lineHeight: 1.25,
            WebkitFontSmoothing: 'antialiased'
        }}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold sm:text-2xl md:text-4xl mb-2">
                        Quanto mais você vende, menos você paga
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        Receba na hora com taxas que variam conforme suas vendas no mês.
                    </p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {/* Card das taxas */}
                    <div className="fee-selector-info md:w-1/2 bg-[#f5f5f5] p-6 md:p-10 rounded-3xl shadow-sm max-w-xl">
                        <h2 className="calm-landings-library-section-title__title text-xl font-semibold md:text-2xl mb-8">
                            Selecione seu faturamento mensal
                        </h2>
                        
                        {/* Seletor de faixas */}
                        <div className="calm-landings-library-taxes-switcher desktop">
                            {/* Switch bar */}
                            <div className="switch-bar relative border rounded-2xl bg-[rgba(0,0,0,.039)] p-1 mb-8 md:mb-10 text-xs">
                                {/* Highlight background */}
                                <div 
                                    className="switch-bar__highlight absolute top-1 bottom-1 left-1 bg-white rounded-2xl shadow-md transition-transform duration-300 ease-out"
                                    style={{ 
                                        width: 'calc(33.33% - 2px)', 
                                        transform: `translateX(${activeRange * 100}%)` 
                                    }}
                                />
                                
                                {/* Botões */}
                                <div className="relative z-10 flex">
                                    <button 
                                        className={`switch-bar__button flex-1 py-2 md:py-3  text-center font-extrabold transition-colors duration-200 ${activeRange === 0 ? 'switch-bar__button--active text-emerald-600' : 'text-gray-500'}`}
                                        onClick={() => handleRangeClick(0)}
                                    >
                                      PROMO
                                    </button>
                                    <button 
                                        className={`switch-bar__button flex-1 py-2 md:py-3 font-medium text-center transition-colors duration-200 ${activeRange === 1 ? 'switch-bar__button--active text-black' : 'text-gray-500'}`}
                                        onClick={() => handleRangeClick(1)}
                                    >
                                        De R$ 5 mil a<br className="block" /> R$ 10 mil
                                    </button>
                                    <button 
                                        className={`switch-bar__button flex-1 py-2 md:py-3 font-medium text-center transition-colors duration-200 ${activeRange === 2 ? 'switch-bar__button--active text-black' : 'text-gray-500'}`}
                                        onClick={() => handleRangeClick(2)}
                                    >
                                        Mais de<br className="block" /> R$ 10 mil
                                    </button>
                                </div>
                            </div>

                            {/* Valores de taxas */}
                            <div className="values flex flex-row justify-between mb-10">
                                {/* Débito */}
                                <div className="values__box flex-1 text-center">
                                    <div className="values__value flex items-end justify-center">
                                        {/* se a taxa for promo, o texto é verde  */}
                                        {activeRange === 0 ? (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold text-emerald-600">
                                                {taxRanges[activeRange].debito}
                                            </span>
                                            
                                        ) : (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold">
                                                {taxRanges[activeRange].debito}
                                            </span>
                                        )}
                                        {activeRange === 0 ? (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold text-emerald-600">%</span>
                                        ) : (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold">%</span>
                                        )}

                                        
                                    </div>
                                    <span className="values__label text-xs font-medium uppercase text-gray-600 mt-1 block">DÉBITO</span>
                                </div>
                                
                                {/* Crédito */}
                                <div className="values__box flex-1 text-center">
                                    <div className="values__value flex items-end justify-center">
                                        {/* se a taxa for promo, o texto é verde  */}
                                        {activeRange === 0 ? (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold text-emerald-600">
                                                {taxRanges[activeRange].credito}
                                            </span>
                                        ) : (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold">
                                                {taxRanges[activeRange].credito}
                                            </span>
                                        )}
                                        {activeRange === 0 ? (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold text-emerald-600">%</span>
                                        ) : (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold">%</span>
                                        )}

                                    </div>
                                    <span className="values__label text-xs font-medium uppercase text-gray-600 mt-1 block">CRÉDITO</span>
                                </div>
                                
                                {/* Crédito 12x */}
                                <div className="values__box flex-1 text-center">
                                    <div className="values__value flex items-end justify-center">
                                        {/* se a taxa for promo, o texto é verde  */}
                                        {activeRange === 0 ? (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold text-emerald-600">
                                                {taxRanges[activeRange].credito12x}
                                            </span>
                                        ) : (
                                            <span className="values__flip text-3xl md:text-4xl font-semibold">  {taxRanges[activeRange].credito12x}</span>
                                        )}
                                        {activeRange === 0 ? (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold text-emerald-600">%</span>
                                        ) : (
                                            <span className="values__percent text-xl md:text-2xl ml-1 font-semibold">%</span>
                                        )}

                                    </div>
                                    <span className="values__label text-xs font-medium uppercase text-gray-600 mt-1 block">CRÉDITO 12x</span>
                                </div>
                            </div>
                            
                            {/* Modal Trigger */}
                            <div className="wrapper-modal">
                                <div className="calm-landings-library-modal desktop">
                                    <section>
                                        <h2  className="flex items-center w-full  cursor-pointer hover:underline text-sm text-blue-600"
                                                
                                                onClick={openModal}
                                                style={{ color: '#3483fa' }}>
                                           
                                                Conferir todas as taxas
                                               
                                            
                                        </h2>
                                    </section>
                                </div>
                            </div>
                            
                            <div style={{ color: 'rgba(0, 0, 0, 0.55)', fontSize: '12px', marginTop: '10px', textAlign: 'left', lineHeight: '16px' }}>
                              
                                <p>
                                Promoção para novos usuários: Ao adquirir uma maquininha Point, o usuário aproveita taxas promocionais nos primeiros 30 dias ou até R$ 5.000 em vendas (o que ocorrer primeiro)
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Card da maquininha */}
                    <div className="md:w-1/2  rounded-3xl  flex items-center justify-center overflow-hidden max-w-xl p-4">
                        <div className="relative w-full h-full flex items-center justify-center">
                        <video 
                                    autoPlay 
                                    loop 
                                    playsInline 
                                    width="100%" 
                                    aria-hidden="true"
                                    style={{ 
                                        maxWidth: "100%", 
                                        height: "100%", 
                                        border: "none", 
                                        outline: "none", 
                                        pointerEvents: "none",
                                        objectFit: "cover",
                                        display: "block",
                                        borderRadius: "10px"
                                        
                                    }}
                                >
                                    <source 
                                        src="/videos/smart.mp4" 
                                        type="video/mp4" 
                                    />
                                </video>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionPointSmart;
```


---
### 📄 Arquivo: `src/components/points/SectionSmartFerramenta.js`

```javascript
'use client'
import Image from "next/image";
import { useState } from "react";

const SectionSmartFerramenta = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const accordionItems = [
        {
            id: 0,
            title: "Relatório de vendas",
            content: "Confira quanto recebeu com cada meio de pagamento e imprima o resumo diário de vendas com um só clique.",
            image: "/images/point/accordion.webp"
        },
        {
            id: 1,
            title: "Função Colaboradores",
            content: "Configure acessos e permissões da sua equipe para ter mais controle sobre o seu negócio.",
            image: "/images/point/accordion2.webp"
        },
        {
            id: 2,
            title: "Recargas de celular",
            content: "Ofereça este serviço sem pagar nenhuma taxa e ainda ganhe comissão por cada recarga!",
            image: "/images/point/accordion3.webp"
        }
    ];

    const toggleAccordion = (id) => {
        // Se clicar no mesmo, mantém ativo (não permite null)
        setActiveAccordion(activeAccordion === id ? id : id);
    };

    // Determina qual imagem mostrar com base no acordeão ativo
    const getActiveImage = () => {
        const activeItem = accordionItems.find(item => item.id === activeAccordion);
        return activeItem ? activeItem.image : accordionItems[0].image;
    };

    // Obtém o título do acordeão ativo com segurança
    const getActiveTitle = () => {
        const activeItem = accordionItems.find(item => item.id === activeAccordion);
        return activeItem ? activeItem.title : accordionItems[0].title;
    };

    return (
        <section className="mt-32 min-h-[500px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    {/* Lado da imagem */}
                    <div className="md:w-5/12 flex items-center justify-center">
                        <div className="rounded-xl overflow-hidden w-full" style={{ maxWidth: "450px" }}>
                            <div className="relative" style={{ paddingBottom: "100%" }}>
                                <Image
                                    src={getActiveImage()}
                                    alt={`Point Smart - ${getActiveTitle()}`}
                                    fill
                                    className="object-contain transition-opacity duration-300"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Lado do conteúdo */}
                    <div className="md:w-7/12 flex flex-col justify-center mt-8 md:mt-0">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10">
                            Ferramentas para facilitar seu dia a dia
                        </h2>

                        <div className="flex flex-col">
                            {accordionItems.map((item, index) => (
                                <div 
                                    key={item.id} 
                                    className={index !== accordionItems.length - 1 ? "border-b border-gray-200" : ""}
                                >
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="flex justify-between items-center w-full py-5 text-left"
                                        aria-expanded={activeAccordion === item.id}
                                    >
                                        <div className="text-lg md:text-xl font-semibold text-black">{item.title}</div>
                                        <div className="flex-shrink-0">
                                            <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 20 20"
                                                fill="rgba(0, 0, 0, 0.55)"
                                                className={`transform transition-transform duration-200 ${
                                                    activeAccordion === item.id ? "rotate-180" : ""
                                                }`}
                                            >
                                                <path
                                                    d="M5.2018 6.75609L9.99743 11.5517L14.7981 6.7511L15.6466 7.59963L9.99743 13.2488L4.35327 7.60462L5.2018 6.75609Z"
                                                    fill="rgba(0, 0, 0, 0.55)"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            activeAccordion === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <div className="pb-6 pr-10">
                                            <p className="text-base text-gray-700">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionSmartFerramenta;
```


---
### 📄 Arquivo: `src/components/ui/Badge.js`

```javascript
import React from 'react';

/**
 * Componente de badge reutilizável
 * @param {Object} props
 * @param {string} props.variant - Variante do badge ('discount' | 'pro' | 'new')
 * @param {React.ReactNode} props.icon - Ícone opcional
 * @param {string} props.text - Texto do badge
 * @param {string} props.className - Classes CSS adicionais
 */
const Badge = ({ variant = 'discount', icon, text, className = '' }) => {
  const variants = {
    discount: 'absolute -left-px -top-px rounded-br-lg rounded-tl-lg border-b border-r bg-gradient-to-r from-[#1aa271] to-[#00b87d]',
    pro: 'absolute right-0 top-0 rounded-bl-md rounded-tr-md bg-gradient-to-r from-[#1aa271] to-[#00b87d]',
    new: 'absolute left-0 top-0 rounded-br-md rounded-tl-md bg-rose-500 lg:rounded'
  };

  return (
    <div className={`${variants[variant]} px-2 py-0.5 text-xs font-medium text-white ${className}`}>
      <div className="flex items-center gap-1">
        {icon}
        <span className="uppercase tracking-wide">{text}</span>
      </div>
    </div>
  );
};

export default Badge;
```


---
### 📄 Arquivo: `src/components/ui/Price.js`

```javascript
import React from 'react';
import { calculateDiscount } from '../../utils/helpers/format';

/**
 * Componente para exibição de preços com desconto
 * @param {Object} props
 * @param {string} props.price - Preço atual
 * @param {string} props.normalPrice - Preço normal (opcional)
 * @param {string} props.className - Classes CSS adicionais
 */
const Price = ({ price, normalPrice, className = '' }) => {
  const discount = normalPrice ? calculateDiscount(normalPrice, price) : 0;

  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-muted-foreground line-through lg:text-lg">{normalPrice}</span>
      <span className="text-lg font-semibold lg:text-2xl">{price}</span>
    </div>
  );
};

export default Price;
```


---
### 📄 Arquivo: `src/components/ui/ProductCard.js`

```javascript
import React from 'react';
import { BellRing } from 'lucide-react';
import { FaBatteryFull, FaWifi, FaCreditCard, FaShieldAlt, FaPrint, FaSimCard, FaRulerCombined, FaWeight } from 'react-icons/fa';
import Image from 'next/image';
import { ICON_MAPPING } from '../../utils/constants/icons';
import { calculateDiscount } from '../../utils/helpers/format';
import Price from './Price';



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
    const desconto = calculateDiscount(product.normalPrice, product.price);

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
            {product.name.toLowerCase().includes('pro 3') && (
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
                    <Price 
                        price={`R$ ${product.price}`}
                        normalPrice={`R$ ${product.normalPrice}`}
                        className="flex flex-col"
                    />
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
                            {ICON_MAPPING[spec.type] } {/* Ícone antes da especificação */}
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
### 📄 Arquivo: `src/components/ClientLayout.js`

```javascript
'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import { TaxasModal } from './SectionTaxas';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isDashboard && <Footer />}
      {/* Modal global de taxas */}
      <TaxasModal />
    </>
  );
}
```


---
### 📄 Arquivo: `src/components/ConhecaPointPro3.css`

```css
.image-section {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.image-section img {
  display: block;
  max-width: 100%;
}

.animated-prop {
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.animated-prop svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .animated-prop {
    display: none;
  }
}
```


---
### 📄 Arquivo: `src/components/ConhecaPointPro3.js`

```javascript
import React from 'react';
import './ConhecaPointPro3.css';
import SvgIcons from './SvgIcons';
import EspecificacoesTecnicas from './EspecificacoesTecnicas';

const ConhecaPointPro3 = () => {
  return (
    <div className='container mt-20'>
      <div className='title-container flex justify-center items-center text-center mb-10 text-4xl font-bold'>
        <h2>Conheça a Point Pro 3</h2>
        
      </div>
    <section className="image-section">
      
      <div className="animated-prop" style={{ top: '-1.5%', left: '8.5%', width: '23%', height: '23%', opacity: 1, transform: 'none', willChange: 'auto' }}>
        <SvgIcons.Aproximacao />
      </div>
      <div className="animated-prop" style={{ top: '3%', left: '31%', width: '30%', height: '9.5%', opacity: 1, transform: 'none', willChange: 'auto' }}>
        <SvgIcons.Bobinas />
      </div>
      <div className="animated-prop" style={{ top: '22%', left: '68%', width: '18%', height: '21%', opacity: 1, transform: 'none', willChange: 'auto' }}>
        <SvgIcons.Magnetica />
      </div>
      <div className="animated-prop" style={{ right: '0%', width: '22%', bottom: '5%', height: '24%', opacity: 1, transform: 'none', willChange: 'auto' }}>
        <SvgIcons.Chip />
      </div>
      <div className="animated-prop" style={{ top: '49%', left: '13%', width: '21%', height: '23.5%', opacity: 1, transform: 'none', willChange: 'auto' }}>
        <SvgIcons.OnOff />
      </div>
      <div style={{ transform: 'scale(1)', willChange: 'auto' }}>
        <img 
          width="" 
          decoding="sync" 
          src="https://http2.mlstatic.com/storage/pog-cm-admin/calm-assets/mercado-pago-pro-3-especificacoes-desktop--5ba00079--rebrand-mp.webp" 
          fetchPriority="high" 
          alt="Detalhes da Point Smart 2"
        />
      </div>
    </section>
    <EspecificacoesTecnicas />
    </div>
  );
};

export default ConhecaPointPro3;
```


---
### 📄 Arquivo: `src/components/EspecificacoesTecnicas.css`

```css
.calm-landings-library-section-wrapper {
  margin: 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.inner-section-wrapper {
  background: unset;
  padding: 56px 90px;
  border-radius: 40px;
  width: 100%;
  box-sizing: border-box;
}

.row-title {
  margin-bottom: 40px;
  text-align: center;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.rows {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
}

.row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  transition: all 0.3s ease;
}

.icon {
  color: #1a1a1a;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.spec-content {
  width: 100%;
}

.spec-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.spec-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.spec-prop {
  font-size: 0.9rem;
  color: #4a4a4a;
  margin-bottom: 4px;
  word-break: break-word;
}

@media (max-width: 1200px) {
  .inner-section-wrapper {
    padding: 50px 60px;
  }
}

@media (max-width: 992px) {
  .inner-section-wrapper {
    padding: 40px;
  }
  
  .row {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  .title {
    font-size: 1.75rem;
  }
}

@media (max-width: 768px) {
  .inner-section-wrapper {
    padding: 32px 24px;
  }
  
  .rows {
    gap: 32px;
  }
  
  .row {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .column {
    background-color: #f9f9f9;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }
}

@media (max-width: 576px) {
  .inner-section-wrapper {
    padding: 24px 16px;
    border-radius: 20px;
  }
  
  .rows {
    gap: 16px;
  }
  
  .row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .title {
    font-size: 1.5rem;
  }
  
  .column {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 14px;
  }
  
  .spec-content {
    flex: 1;
  }
  
  .spec-title {
    font-size: 0.95rem;
    margin-bottom: 4px;
  }
  
  .spec-prop {
    font-size: 0.85rem;
  }
  
  .icon {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 380px) {
  .column {
    padding: 12px;
    gap: 12px;
  }
  
  .icon {
    width: 24px;
    height: 24px;
  }
  
  .spec-title {
    font-size: 0.9rem;
  }
  
  .spec-prop {
    font-size: 0.8rem;
  }
}
```


---
### 📄 Arquivo: `src/components/EspecificacoesTecnicas.js`

```javascript
import React from 'react';
import './EspecificacoesTecnicas.css';

const EspecificacoesTecnicas = () => {
  return (
    <section className="calm-landings-library-section-wrapper spec-section calm-landings-library-specs">
      <div className="inner-section-wrapper">
        <header className="row-title">
          <h3 className="title">Especificações técnicas</h3>
        </header>
        <div className="rows">
          <div className="row">
            <div className="column spec-item">
              <div aria-hidden="true" className="icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.1" y="2.1" width="18.8" height="27.8" rx="2.9" stroke="currentColor" strokeWidth="2.2"></rect>
                  <ellipse cx="11.5381" cy="6.53806" rx="1.53809" ry="1.53806" fill="currentColor"></ellipse>
                  <line x1="3" y1="24.9" x2="21" y2="24.9" stroke="currentColor" strokeWidth="2.2"></line>
                </svg>
              </div>
              <div className="spec-content">
                <h4 className="spec-title">Tela</h4>
                <ul>
                  <li className="spec-prop">480x800 </li>
                  <li className="spec-prop">Touch screen 4"</li>
                </ul>
              </div>
            </div>
            <div className="column spec-item">
              <div aria-hidden="true" className="icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29 12L29 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <rect x="2" y="6" width="23.0589" height="20" rx="3.49" stroke="currentColor" strokeWidth="2.2"></rect>
                  <path d="M14.8235 10.4123V21.5879" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"></path>
                  <path d="M10.8821 10.4121V21.5877" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"></path>
                  <path d="M6.94072 10.4121V21.5877" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"></path>
                </svg>
              </div>
              <div className="spec-content">
                <h4 className="spec-title">Bateria</h4>
                <ul>
                  <li className="spec-prop">5100 mAh 3.6V</li>
                  <li className="spec-prop">18,36Wh</li>
                </ul>
              </div>
            </div>
            <div className="column spec-item">
              <div aria-hidden="true" className="icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16.9208" cy="25.6063" r="0.953333" fill="currentColor" stroke="currentColor" strokeWidth="1.33333"></circle>
                  <path d="M11.4961 20.3968C11.4961 20.3968 13.3615 18.1622 17.0033 18.1055C20.6451 18.0488 22.5103 20.3968 22.5103 20.3968" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"></path>
                  <path d="M7.14062 15.2414C7.14062 15.2414 10.4809 11.24 17.0021 11.1385C23.5232 11.037 26.8631 15.2414 26.8631 15.2414" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"></path>
                  <path d="M2 10.684C2 10.684 7.08097 4.59757 17.0003 4.44318C26.9196 4.28879 32 10.684 32 10.684" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"></path>
                </svg>
              </div>
              <div className="spec-content">
                <h4 className="spec-title">Conexão</h4>
                <ul>
                  <li className="spec-prop">Chip 4G e</li>
                  <li className="spec-prop">Wi-Fi</li>
                </ul>
              </div>
            </div>
            <div className="column spec-item">
              <div aria-hidden="true" className="icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6.43203" y="6.43398" width="19.1333" height="19.1333" rx="2.9" stroke="currentColor" strokeWidth="2.2"></rect>
                  <rect x="11.7641" y="11.767" width="8.46667" height="8.46667" rx="1.9" stroke="currentColor" strokeWidth="2.2"></rect>
                  <path d="M11.7641 1.33366C11.7641 0.726145 11.2716 0.233659 10.6641 0.233659C10.0565 0.233659 9.56406 0.726145 9.56406 1.33366L11.7641 1.33366ZM11.7641 6.66699L11.7641 1.33366L9.56406 1.33366L9.56406 6.66699L11.7641 6.66699Z" fill="currentColor"></path>
                  <path d="M30.6654 11.767C31.2729 11.767 31.7654 11.2745 31.7654 10.667C31.7654 10.0595 31.2729 9.56699 30.6654 9.56699L30.6654 11.767ZM25.332 11.767L30.6654 11.767L30.6654 9.56699L25.332 9.56699L25.332 11.767Z" fill="currentColor"></path>
                  <path d="M17.1 1.33366C17.1 0.726145 16.6075 0.233659 16 0.233659C15.3925 0.233659 14.9 0.726145 14.9 1.33366L17.1 1.33366ZM17.1 6.66699L17.1 1.33366L14.9 1.33366L14.9 6.66699L17.1 6.66699Z" fill="currentColor"></path>
                  <path d="M30.6654 17.1C31.2729 17.1 31.7654 16.6075 31.7654 16C31.7654 15.3925 31.2729 14.9 30.6654 14.9L30.6654 17.1ZM25.332 17.1L30.6654 17.1L30.6654 14.9L25.332 14.9L25.332 17.1Z" fill="currentColor"></path>
                  <path d="M22.432 1.33366C22.432 0.726145 21.9395 0.233659 21.332 0.233659C20.7245 0.233659 20.232 0.726145 20.232 1.33366L22.432 1.33366ZM22.432 6.66699L22.432 1.33366L20.232 1.33366L20.232 6.66699L22.432 6.66699Z" fill="currentColor"></path>
                  <path d="M30.6654 22.4339C31.2729 22.4339 31.7654 21.9414 31.7654 21.3339C31.7654 20.7264 31.2729 20.2339 30.6654 20.2339L30.6654 22.4339ZM25.332 22.4339L30.6654 22.4339L30.6654 20.2339L25.332 20.2339L25.332 22.4339Z" fill="currentColor"></path>
                  <path d="M20.232 30.6673C20.232 31.2748 20.7245 31.7673 21.332 31.7673C21.9395 31.7673 22.432 31.2748 22.432 30.6673L20.232 30.6673ZM20.232 25.3339L20.232 30.6673L22.432 30.6673L22.432 25.3339L20.232 25.3339Z" fill="currentColor"></path>
                  <path d="M14.9 30.6673C14.9 31.2748 15.3925 31.7673 16 31.7673C16.6075 31.7673 17.1 31.2748 17.1 30.6673L14.9 30.6673ZM14.9 25.3339L14.9 30.6673L17.1 30.6673L17.1 25.3339L14.9 25.3339Z" fill="currentColor"></path>
                  <path d="M1.33073 14.9C0.723216 14.9 0.230729 15.3925 0.230729 16C0.230729 16.6075 0.723216 17.1 1.33073 17.1L1.33073 14.9ZM6.66406 14.9L1.33073 14.9L1.33073 17.1L6.66406 17.1L6.66406 14.9Z" fill="currentColor"></path>
                  <path d="M1.33073 20.2339C0.723216 20.2339 0.230729 20.7264 0.230729 21.3339C0.230729 21.9414 0.723216 22.4339 1.33073 22.4339L1.33073 20.2339ZM6.66406 20.2339L1.33073 20.2339L1.33073 22.4339L6.66406 22.4339L6.66406 20.2339Z" fill="currentColor"></path>
                  <path d="M9.56406 30.6673C9.56406 31.2748 10.0565 31.7673 10.6641 31.7673C11.2716 31.7673 11.7641 31.2748 11.7641 30.6673L9.56406 30.6673ZM9.56406 25.3339L9.56406 30.6673L11.7641 30.6673L11.7641 25.3339L9.56406 25.3339Z" fill="currentColor"></path>
                  <path d="M1.33073 9.56699C0.723216 9.56699 0.230729 10.0595 0.230729 10.667C0.230729 11.2745 0.723216 11.767 1.33073 11.767L1.33073 9.56699ZM6.66406 9.56699L1.33073 9.56699L1.33073 11.767L6.66406 11.767L6.66406 9.56699Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="spec-content">
                <h4 className="spec-title">Processador</h4>
                <ul>
                  <li className="spec-prop">Cortex A53</li>
                  <li className="spec-prop">1.3 GHz</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column spec-item">
              <div aria-hidden="true" className="icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.5443 4.41895C22.029 4.41895 20.8008 5.33586 20.8008 6.46929V24.3115C20.8008 25.4449 22.029 26.3618 23.5443 26.3618C25.0582 26.3618 26.2865 25.4449 26.2865 24.3115V6.46929C26.2865 5.33586 25.0582 4.41895 23.5443 4.41895Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.45568 4.41895C9.97095 4.41895 11.1992 5.33586 11.1992 6.46929V24.3115C11.1992 25.4449 9.97095 26.3618 8.45568 26.3618C6.94177 26.3618 5.7135 25.4449 5.7135 24.3115V6.46929C5.7135 5.33586 6.94177 4.41895 8.45568 4.41895Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.29865 9.9043C5.43982 9.9043 5.5755 9.91561 5.71484 9.92207V20.8579C5.5755 20.8644 5.43982 20.8757 5.29865 20.8757C3.25617 20.8757 1.60056 20.1469 1.60056 19.2467V11.5341C1.60056 10.6331 3.25617 9.9043 5.29865 9.9043Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M26.7014 9.9043C26.5602 9.9043 26.4245 9.91561 26.2852 9.92207V20.8579C26.4245 20.8644 26.5602 20.8757 26.7014 20.8757C28.7438 20.8757 30.3994 20.1469 30.3994 19.2467V11.5341C30.3994 10.6331 28.7438 9.9043 26.7014 9.9043Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M11.1992 15.3908H20.7992" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="spec-content">
                <h4 className="spec-title">Peso</h4>
                <ul>
                  <li className="spec-prop">380gr</li>
                </ul>
              </div>
            </div>
            <div className="column spec-item">
              <div aria-hidden="true" className="icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="10.3128" height="29.5825" rx="1" transform="matrix(1 0 0 -1 17.6797 30.791)" stroke="currentColor" strokeWidth="2.2"></rect>
                  <path d="M11.5342 27.833L7.47843 30.5476C7.41111 30.5927 7.32326 30.5927 7.25594 30.5476L3.20019 27.833" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"></path>
                  <path d="M11.5342 4.167L7.47843 1.45239C7.41111 1.40733 7.32326 1.40733 7.25594 1.45239L3.20019 4.167" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"></path>
                  <path d="M7.36553 2.6875V29.3118" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"></path>
                  <path d="M23.5742 7.12567L17.6812 7.12567" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"></path>
                  <path d="M23.5742 13.0417H17.6812" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"></path>
                  <path d="M23.5742 18.9577H17.6812" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"></path>
                  <path d="M23.5742 24.8747H17.6812" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"></path>
                </svg>
              </div>
              <div className="spec-content">
                <h4 className="spec-title">Dimensões</h4>
                <ul>
                  <li className="spec-prop">170x75x60mm</li>
                </ul>
              </div>
            </div>
            <div className="column spec-item">
              <div aria-hidden="true" className="icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.09984" y="7.76696" width="29.8" height="16.4667" rx="2.9" stroke="currentColor" strokeWidth="2.2"></rect>
                  <path d="M19.568 29.334C19.568 29.9415 20.0605 30.434 20.668 30.434C21.2755 30.434 21.768 29.9415 21.768 29.334L19.568 29.334ZM19.568 25.334L19.568 29.334L21.768 29.334L21.768 25.334L19.568 25.334Z" fill="currentColor"></path>
                  <path d="M24.232 29.334C24.232 29.9415 24.7245 30.434 25.332 30.434C25.9395 30.434 26.432 29.9415 26.432 29.334L24.232 29.334ZM24.232 25.334L24.232 29.334L26.432 29.334L26.432 25.334L24.232 25.334Z" fill="currentColor"></path>
                  <path d="M10.232 29.334C10.232 29.9415 10.7245 30.434 11.332 30.434C11.9395 30.434 12.432 29.9415 12.432 29.334L10.232 29.334ZM10.232 25.334L10.232 29.334L12.432 29.334L12.432 25.334L10.232 25.334Z" fill="currentColor"></path>
                  <path d="M14.9 29.334C14.9 29.9415 15.3925 30.434 16 30.434C16.6075 30.434 17.1 29.9415 17.1 29.334L14.9 29.334ZM14.9 25.334L14.9 29.334L17.1 29.334L17.1 25.334L14.9 25.334Z" fill="currentColor"></path>
                  <path d="M5.56797 29.334C5.56797 29.9415 6.06046 30.434 6.66797 30.434C7.27548 30.434 7.76797 29.9415 7.76797 29.334L5.56797 29.334ZM5.56797 25.334L5.56797 29.334L7.76797 29.334L7.76797 25.334L5.56797 25.334Z" fill="currentColor"></path>
                  <path d="M19.568 2.66699C19.568 2.05948 20.0605 1.56699 20.668 1.56699C21.2755 1.56699 21.768 2.05948 21.768 2.66699L19.568 2.66699ZM19.568 6.66699L19.568 2.66699L21.768 2.66699L21.768 6.66699L19.568 6.66699Z" fill="currentColor"></path>
                  <path d="M24.232 2.66699C24.232 2.05948 24.7245 1.56699 25.332 1.56699C25.9395 1.56699 26.432 2.05948 26.432 2.66699L24.232 2.66699ZM24.232 6.66699L24.232 2.66699L26.432 2.66699L26.432 6.66699L24.232 6.66699Z" fill="currentColor"></path>
                  <path d="M10.232 2.66699C10.232 2.05948 10.7245 1.56699 11.332 1.56699C11.9395 1.56699 12.432 2.05948 12.432 2.66699L10.232 2.66699ZM10.232 6.66699L10.232 2.66699L12.432 2.66699L12.432 6.66699L10.232 6.66699Z" fill="currentColor"></path>
                  <path d="M14.8998 2.6669C14.8998 2.05939 15.3923 1.5669 15.9998 1.5669C16.6074 1.5669 17.0998 2.05939 17.0998 2.6669L14.8998 2.6669ZM14.8998 6.6669L14.8998 2.6669L17.0998 2.6669L17.0998 6.6669L14.8998 6.6669Z" fill="currentColor"></path>
                  <path d="M5.56797 2.66699C5.56797 2.05948 6.06046 1.56699 6.66797 1.56699C7.27548 1.56699 7.76797 2.05948 7.76797 2.66699L5.56797 2.66699ZM5.56797 6.66699L5.56797 2.66699L7.76797 2.66699L7.76797 6.66699L5.56797 6.66699Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="spec-content">
                <h4 className="spec-title">Memória</h4>
                <ul>
                  <li className="spec-prop">512MB Flash + 256 MB DDR</li>
                </ul>
              </div>
            </div>
            <div className="column spec-item">
              <div aria-hidden="true" className="icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.31084 6.63175C5.83728 6.32855 6.50984 6.50952 6.81304 7.03596L9.61196 11.8956C9.79599 11.8187 9.98192 11.745 10.1697 11.6747C11.9653 11.0019 13.9283 10.6339 16.0004 10.6339C18.0726 10.6339 20.0356 11.0019 21.8312 11.6747C22.019 11.745 22.2049 11.8187 22.389 11.8956L25.1879 7.03596C25.4911 6.50952 26.1636 6.32855 26.6901 6.63175C27.2165 6.93495 27.3975 7.60751 27.0943 8.13395L24.3583 12.8844C24.4313 12.9277 24.504 12.9715 24.5762 13.0159C24.6459 13.0588 24.7152 13.1021 24.7841 13.146C28.4525 15.4808 31.0389 19.2629 31.8155 23.7195C31.9494 24.4882 31.331 25.1572 30.5506 25.1572H1.45019C0.669891 25.1572 0.05141 24.4883 0.185302 23.7196C0.961542 19.2629 3.54799 15.4808 7.21682 13.1459C7.28539 13.1023 7.35433 13.0592 7.42364 13.0166C7.49622 12.9719 7.56921 12.9279 7.64261 12.8844L4.90663 8.13395C4.60342 7.60751 4.7844 6.93495 5.31084 6.63175ZM22.3754 14.2984L21.9373 14.0987C20.1626 13.2902 18.1579 12.8339 16.0004 12.8339C13.843 12.8339 11.8383 13.2902 10.0636 14.0987L9.62578 14.2982L9.20832 14.5249C5.95971 16.2889 3.55954 19.3062 2.60098 22.9572H29.3998C28.441 19.3061 26.0408 16.2888 22.7925 14.5249L22.3754 14.2984ZM22.6665 19.1435C22.6665 19.993 21.9779 20.6816 21.1284 20.6816C20.2789 20.6816 19.5903 19.993 19.5903 19.1435C19.5903 18.2941 20.2789 17.6055 21.1284 17.6055C21.9779 17.6055 22.6665 18.2941 22.6665 19.1435ZM10.8745 20.6816C11.7239 20.6816 12.4126 19.993 12.4126 19.1435C12.4126 18.2941 11.7239 17.6055 10.8745 17.6055C10.025 17.6055 9.3364 18.2941 9.3364 19.1435C9.3364 19.993 10.025 20.6816 10.8745 20.6816Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="spec-content">
                <h4 className="spec-title">Sistema</h4>
                <ul>
                  <li className="spec-prop">Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EspecificacoesTecnicas;
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
                <span className="text-gray-400">(95) 98400-3872</span>
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

import Link from 'next/link';

const Header = () => {


  return (
    <header className="bg-gradient-28 dark:bg-slate-900 shadow fixed top-0 left-0 w-full z-50 transition-colors">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
   
        </div>
        
        <div className="flex items-center gap-4">
          <MenuPopover />
          
          
          
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
import { staticProductData } from '../data/staticProductData';
import { NAVIGATION, SITE, URLS, TEXTS, STYLES } from '../constants';

const MenuPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentMachine, setCurrentMachine] = useState(TEXTS.MODELS);
  const [products, setProducts] = useState(staticProductData);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);

  // Buscar produtos de forma assíncrona
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductData();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        // Mantém os dados estáticos como fallback
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Determinar a máquina atual com base no pathname
  useEffect(() => {
    if (products && products.length > 0) {
      const machineNames = products.reduce((acc, product) => {
        if (product && product.urlInfo) {
          acc[product.urlInfo] = product.name;
        }
        return acc;
      }, {});

      const matchingPath = Object.keys(machineNames).find(path => pathname.startsWith(path));
      if (matchingPath) {
        setCurrentMachine(machineNames[matchingPath]);
      } else {
        setCurrentMachine(TEXTS.MODELS);
      }
    }
  }, [pathname, products]);

  const handleItemClick = (machineName, path) => {
    setIsOpen(false);
    setIsMobileMenuOpen(false);
    if (path) {
      router.push(path);
    } else {
      router.push('/');
    }
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
    <header className="bg-gradient-28 shadow fixed top-0 left-0 w-full z-50 transition-colors border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href={NAVIGATION.HOME} className="flex items-center gap-3" aria-label={SITE.NAME}>
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
            <span className="font-extrabold leading-3 text-black">
              {SITE.NAME}
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {currentMachine}
              <ChevronDown className="ml-2 h-5 w-5" />
            </button>
            
            {isOpen && (
              <ul className="absolute z-10 mt-2 w-[280px] bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 flex flex-col gap-2 p-4">
                {loading ? (
                  <li className="flex justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                  </li>
                ) : (
                  products.map((product) => (
                    <li className="flex" key={product.name}>
                      <Link
                        className="rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-50 py-2 px-4 group flex h-16 w-full items-center justify-between"
                        href={product.urlInfo || "/"}
                        onClick={() => {
                          handleItemClick(product.name, product.urlInfo || "/");
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
                            <span className="font-semibold text-black">{product.name}</span>
                            <div className="space-x-2">
                              <span className="text-gray-500 line-through">R$ {product.normalPrice}</span>
                              <span className="text-black">R$ {product.price}</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
          
          <Link 
            href={URLS.MODELS_SECTION} 
            className={STYLES.PRIMARY_BUTTON}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{TEXTS.BUY}</span>
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 hover:text-gray-900"
            aria-label="Menu"
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
        <div className="md:hidden bg-white border-t w-full absolute left-0 right-0 shadow-md z-10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="border-b pb-4">
              <p className="text-sm font-medium text-gray-500 mb-2">Produtos</p>
              {loading ? (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {products.map((product) => (
                    <li key={product.name}>
                      <Link
                        href={product.urlInfo || "/"}
                        className="flex items-center justify-between py-2 text-gray-700 hover:text-brand"
                        onClick={() => handleItemClick(product.name, product.urlInfo || "/")}
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
              )}
            </div>
            
            <Link 
              href={URLS.MODELS_SECTION}
              className={STYLES.PRIMARY_BUTTON + " justify-center"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>{TEXTS.BUY_NOW}</span>
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
    <section className="relative bg-gradient-28 pb-24 pt-8 md:pt-12 m-0 rounded-xl shadow-lg">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2  ">
        <div className="flex flex-col  gap-4 text-center md:items-start md:justify-center md:text-left max-w-[480px] ">
        <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  uppercase text-black max-w-[200px] justify-center mx-auto md:mx-0">
            Mercado Pago Point
          </div>
          <h1 className="text-2xl font-black uppercase leading-tight text-black sm:text-2xl md:text-4xl mt-4">
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
      <ul className="container mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8 text-sm leading-tight text-black">
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
### 📄 Arquivo: `src/components/ProductCardClient.js`

```javascript
'use client';

import React from 'react';
import ProductCard from './ui/ProductCard';
import { useProductCard } from '../hooks/useProductCard';

/**
 * Componente cliente para exibição de produto
 * @param {Object} props
 * @param {string} props.productId - ID do produto
 * @param {boolean} props.hideButton - Se deve esconder o botão de compra
 */
const ProductCardClient = ({ productId, hideButton = false }) => {
  const { product, isLoading, error } = useProductCard(productId);

  return (
    <ProductCard
      product={product}
      isLoading={isLoading}
      error={error}
      hideButton={hideButton}
    />
  );
};

export default ProductCardClient;
```


---
### 📄 Arquivo: `src/components/ProductCatalog.js`

```javascript
// src/components/ProductCatalog.js
'use client';
import React, { useState, useEffect } from 'react';
import ProductCard from './ui/ProductCard';
import { fetchProductData } from '../data/productData';
import { staticProductData } from '../data/staticProductData';
import { Filter, Search } from 'lucide-react';

const ProductCatalog = () => {
  const [products, setProducts] = useState(staticProductData);
  const [filteredProducts, setFilteredProducts] = useState(staticProductData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState('default');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductData();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        // Mantém os dados estáticos como fallback
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
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
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
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
        )}
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
import React, { useState, useEffect } from 'react';
import { fetchProductData } from '../data/productData';
import { staticProductData } from '../data/staticProductData';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

const ProductComparison = () => {
  const [products, setProducts] = useState(staticProductData);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductData();
        setProducts(data);
        setSelectedProducts(data.map(p => p.name));
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        setSelectedProducts(staticProductData.map(p => p.name));
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

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

  if (loading) {
    return (
      <section className="bg-white dark:bg-slate-900 py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </section>
    );
  }

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
'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ui/ProductCard';
import { fetchProductData } from '../data/productData';
import { staticProductData } from '../data/staticProductData';

const Produtos = () => {
    const [products, setProducts] = useState(staticProductData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProductData();
                setProducts(data);
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
                // Mantém os dados estáticos como fallback
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return (
        <section className='-mt-24 bg-primary-foreground'>
            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className='grid grid-cols-1 justify-center gap-8 px-4 py-8 sm:grid-cols-[repeat(auto-fit,_minmax(256px,_256px))]'>
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Produtos;
```


---
### 📄 Arquivo: `src/components/ProdutosClient.js`

```javascript
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCardClient from './ProductCardClient';

const ProdutosClient = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/products');
        setProducts(response.data.products || []);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        setError('Falha ao carregar os produtos');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50" id="maquininhas">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Maquininhas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="bg-white rounded-lg shadow-lg p-4 animate-pulse">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-10 bg-gray-200 rounded mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Maquininhas</h2>
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-16 bg-gray-50" id="maquininhas">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossas Maquininhas</h2>
        
        {products.length === 0 ? (
          <p className="text-center">Nenhum produto encontrado</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCardClient key={product._id} productId={product._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProdutosClient;
```


---
### 📄 Arquivo: `src/components/ProtectedRoute.js`

```javascript
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
    <div style={{
      background: "linear-gradient(180deg, #FFE600 0%, #FFD400 100%)",
      padding: "60px 40px",
      position: "relative",
    }}>
      <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
        <h2 style={{
          color: "#000",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "40px"
        }}>
          Tire os planos do papel com o Mercado Pago
        </h2>

        <div style={{
          display: "grid",
          gap: "24px",
          alignItems: "stretch"
        }} className="grid-cols-1 md:grid-cols-2">
          {/* Coluna 1: Card Crédito + Imagem Homem */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            position: "relative",
            width: "100%",

            bottom: "24px",
          }}>
            {/* Card 1 - Crédito */}
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              minHeight: "300px",
              bottom: "-40px",
              zIndex: "10"
            }}>
              <div style={{ marginBottom: "16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4Z" fill="black" />
                  <path d="M15 8.5C14.5 8.5 14 8.6 13.5 8.77V8H12.25V9.4C11.04 9.97 10.25 11.26 10.25 12.75C10.25 14.85 11.56 16.12 13 16.54V18H14.25V16.54C15.5 16.18 16.5 15.15 16.75 13.85H15.75C15.52 14.69 14.8 15.27 14 15.47V10.12C14.35 10.04 14.67 10 15 10C15.55 10 16 10.23 16.17 10.67H17.11C16.89 9.43 16 8.5 15 8.5ZM13 15.32C12.17 15.03 11.5 14.3 11.5 12.75C11.5 11.7 12.11 10.8 13 10.53V15.32Z" fill="black" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "20px" }}>
                Crédito para investir no seu negócio
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", color: "#333" }}>
                <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", gap: "10px" }}>
                  <div style={{ backgroundColor: "#E6F5FD", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.18182 7.09349L12.0468 0.228516L13.5896 1.77129L5.18182 10.179L0.410431 5.40766L1.95321 3.86488L5.18182 7.09349Z" fill="#009EE3" /></svg>
                  </div>
                  <span>100% online e sem burocracia.</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", gap: "10px" }}>
                  <div style={{ backgroundColor: "#E6F5FD", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.18182 7.09349L12.0468 0.228516L13.5896 1.77129L5.18182 10.179L0.410431 5.40766L1.95321 3.86488L5.18182 7.09349Z" fill="#009EE3" /></svg>
                  </div>
                  <span>Receba o valor na hora.</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ backgroundColor: "#E6F5FD", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.18182 7.09349L12.0468 0.228516L13.5896 1.77129L5.18182 10.179L0.410431 5.40766L1.95321 3.86488L5.18182 7.09349Z" fill="#009EE3" /></svg>
                  </div>
                  <span>Venda com maquininhas Point para ter melhores condições de empréstimo.</span>
                </li>
              </ul>
            </div>
            {/* Imagem Homem Celular */}
            <div className="
    bg-white
    rounded-[16px]
    overflow-hidden
    relative
    flex-[1.5]
    min-h-[350px]
    w-full
">
              {/* Imagem de fundo */}
              <Image
                src="/images/rebrand-mp.webp"
                alt="Homem usando aplicativo do Mercado Pago"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="select-none" // Evita seleção de texto/acidental drag
              />

              {/* Imagem com efeito hover (overlay) */}
              <Image
                src="/images/Grouprebrand-mp.webp"
                alt="Overlay do aplicativo"
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
                quality={100}
                className="
            z-[11]
            transition-transform
            duration-700
            scale-100
            ease-in-out
            transform
            hover:scale-105
            
        "
              />
            </div>
          </div>

          {/* Coluna 2: Card Conta Digital + Card Pagamentos Protegidos */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Card 2 - Conta Digital */}
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              flex: "1",
              position: "relative",
              overflow: "visible"
            }}>
              <div style={{ marginBottom: "16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 10H23" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className='flex gap-4 '>
                <div className='flex flex-col gap-4  h-full max-w-[150px]'>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "8px" }}>
                    Conta digital grátis
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#333", marginBottom: "30px", lineHeight: "1.8" }}>
                    Cartão de crédito sem anuidade e rendimentos de até 105% do CDI.
                  </p>
                </div>

                <div style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "-5px",
                  width: "140px",
                  height: "auto",

                }}>
                  <Image
                    src="/images/cardmp.webp"
                    alt="Cartão Mercado Pago"
                    width={180}
                    height={113}
                    style={{ display: "block" }}
                    className="
                  
                  transition-transform
                  duration-300
                  ease-in-out
                  transform
                  scale-100
                  hover:scale-105
                  animate-float
                
              "
                  />
                </div>
              </div>
            </div>

            {/* Card 3 - Pagamentos Protegidos */}
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              flex: "1",
              position: "relative",
              overflow: "visible"
            }}>
              <div style={{ marginBottom: "16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 12L11 14L15 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className='flex gap-4 '>
                <div className='flex flex-col gap-4  h-full max-w-[150px]'>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "8px" }}>
                    Pagamentos protegidos
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#333", lineHeight: "1.8" }}>
                    Segurança contra fraudes e atendimento personalizado.
                  </p>
                </div>

                <div style={{
                  position: "absolute",
                  top: "40px",
                  right: "20px",
                  width: "100px",
                  height: "auto"
                }}>
                  <Image
                    src="/images/cadeadomp.webp"
                    alt="Cadeado de segurança"
                    width={90}
                    height={90}
                    style={{ display: "block" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
'use client';

import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react'; // Assuming lucide-react is installed
import { useTaxasModal } from '../contexts/TaxasModalContext';
import { TEXTS, URLS } from '../constants';
import { 
    RANGE_LABELS, 
    TAX_RANGES, 
    TAX_TYPE_LABELS, 
    DETAILED_RATES, 
    MOBILE_RANGE_MAPPING, 
    MOBILE_RANGE_LABELS 
} from '../constants/taxasConstants';

// AnimatedNumber Component - modificado para efeito de contador digital
const AnimatedNumber = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const previousValue = useRef(value);
    const countRef = useRef(null);
    
    useEffect(() => {
        if (value !== previousValue.current) {
            // Limpar qualquer contagem anterior
            if (countRef.current) {
                clearInterval(countRef.current);
            }
            
            // Converter os valores para números
            const startValue = parseFloat(previousValue.current?.replace(',', '.') || '0');
            const targetValue = parseFloat(value?.replace(',', '.') || '0');
            
            // Se os valores forem iguais, não precisamos animar
            if (startValue === targetValue) {
                setDisplayValue(value);
                previousValue.current = value;
                return;
            }
            
            // Configurações da animação
            const steps = 20; // Número de etapas
            const interval = 25; // Intervalo em ms
            
            // Para valores decimais (multiplicamos para trabalhar com inteiros)
            const multiplier = 100;
            const startValueInt = Math.round(startValue * multiplier);
            const targetValueInt = Math.round(targetValue * multiplier);
            const increment = Math.max(1, Math.ceil(Math.abs(targetValueInt - startValueInt) / steps));
            
            let currentValue = startValueInt;
            let step = 0;
            const isIncreasing = targetValue > startValue;
            
            // Iniciar a animação de contagem
            countRef.current = setInterval(() => {
                step++;
                
                // Incrementar ou decrementar o valor
                if (isIncreasing) {
                    currentValue = Math.min(targetValueInt, currentValue + increment);
                } else {
                    currentValue = Math.max(targetValueInt, currentValue - increment);
                }
                
                // Formatar o valor atual
                const decimal = (currentValue / multiplier).toFixed(2);
                const formatted = decimal.replace('.', ',').replace(/,?0+$/, '');
                
                setDisplayValue(formatted);
                
                // Finalizar quando atingir o alvo
                if (currentValue === targetValueInt || step >= steps) {
                    clearInterval(countRef.current);
                    setDisplayValue(value);
                    previousValue.current = value;
                }
            }, interval);
            
            return () => {
                if (countRef.current) {
                    clearInterval(countRef.current);
                }
            };
        }
    }, [value]);
    
    return <span>{displayValue}</span>;
};

// Componente separado para o modal de taxas
export const TaxasModal = () => {
    const { showModal, toggleModal } = useTaxasModal();
    const [activeMobileRange, setActiveMobileRange] = useState(0);

    const handleMobileRangeChange = (e) => {
        setActiveMobileRange(parseInt(e.target.value, 10));
    };

    const getMobileRate = (rateObject) => {
        if (!rateObject) return '-';
        const key = MOBILE_RANGE_MAPPING[activeMobileRange];
        return rateObject[key] ?? '-';
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-60 p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="bg-white w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl rounded-lg shadow-xl relative max-h-[90vh] flex flex-col">
                <button 
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-20 p-1 rounded-full hover:bg-gray-100"
                    onClick={toggleModal}
                    aria-label="Fechar modal"
                >
                    <X size={24} />
                </button>
                
                <div className="px-6 pt-6 md:px-8 md:pt-8 pb-4 border-b border-gray-200">
                    <h2 id="modal-title" className="text-xl md:text-2xl font-semibold text-gray-800">Detalhe das taxas</h2>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                        Conheça a variação de acordo ao seu faturamento mensal.
                    </p>
                </div>
                
                <div className="flex-grow overflow-y-auto px-2 py-4 sm:px-6 sm:py-6 md:px-8 md:py-6">
                    <div className="w-full">
                        <div className="w-full text-gray-700 text-sm">
                            <div className="hidden md:grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] bg-gray-50 font-semibold text-gray-600 uppercase text-xs border-b border-gray-200">
                                <div className="p-2 text-center flex items-center justify-center"></div>
                                <div className="p-2 text-center flex items-center justify-center">PROMO</div>
                                <div className="p-2 text-center flex items-center justify-center col-span-4">ATÉ</div>
                                <div className="p-2 text-center flex items-center justify-center">ACIMA</div>
                            </div>
                            <div className="hidden md:grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] bg-gray-50 font-medium text-gray-600 uppercase text-[13px] border-b border-gray-200">
                                <div className="p-2 text-center flex items-center justify-center"></div>
                                <div className="p-2 text-center flex items-center justify-center"></div>
                                <div className="p-2 text-center flex items-center justify-center">2 MIL</div>
                                <div className="p-2 text-center flex items-center justify-center">2 A 5 MIL</div>
                                <div className="p-2 text-center flex items-center justify-center">5 A 10 MIL</div>
                                <div className="p-2 text-center flex items-center justify-center">10 A 15 MIL</div>
                                <div className="p-2 text-center flex items-center justify-center">15 MIL</div>
                            </div>
                            
                            <div className="md:hidden grid grid-cols-[auto_80px_1fr] bg-gray-50 text-[13px] font-semibold text-gray-600 uppercase sticky top-0 z-10 border-b border-gray-200">
                                <div className="p-2 text-center flex items-center justify-start"></div>
                                <div className="p-2 text-center flex items-center justify-center text-emerald-600">PROMO</div>
                                <div className="p-2 text-center flex items-center justify-center relative">
                                    <select
                                        className="appearance-none bg-transparent border-none p-1 pr-6 w-full text-center text-gray-800 font-semibold text-[13px] uppercase cursor-pointer focus:outline-none focus:ring-0"
                                        value={activeMobileRange}
                                        onChange={handleMobileRangeChange}
                                        aria-label="Selecionar faixa de faturamento"
                                    >
                                        {MOBILE_RANGE_LABELS.map((label, index) => (
                                            <option key={index} value={index}>
                                                {index === 0 ? 'Até ' : (index === MOBILE_RANGE_LABELS.length - 1 ? 'Acima ' : '')}
                                                {label}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-[10px] pointer-events-none">▼</span>
                                </div>
                            </div>
                            
                            <div>
                                {['PIX', 'DÉBITO', 'CRÉDITO'].map((section, idx) => (
                                    <div key={section}>
                                        <div className="grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] bg-white border-b-0">
                                            <div className="p-2 pt-4 pb-1 text-left font-semibold text-black uppercase text-[15px]">{section}</div>
                                            <div className="hidden md:block"></div><div className="hidden md:block"></div><div className="hidden md:block"></div><div className="hidden md:block"></div><div className="hidden md:block"></div><div className="hidden md:block"></div>
                                            <div className="md:hidden hidden"></div><div className="md:hidden hidden"></div>
                                        </div>
                                        {section === 'CRÉDITO' ? (
                                            <>
                                                <div className="grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] border-b border-gray-200 hover:bg-gray-50">
                                                    <div className="p-2 text-left text-gray-800 pl-3">À vista</div>
                                                    <div className="p-2 text-center text-emerald-600 font-semibold">{DETAILED_RATES.credito.vista.promo}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{DETAILED_RATES.credito.vista.ate2mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{DETAILED_RATES.credito.vista.de2a5mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{DETAILED_RATES.credito.vista.de5a10mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{DETAILED_RATES.credito.vista.de10a15mil}</div>
                                                    <div className="p-2 text-center hidden md:flex items-center justify-center">{DETAILED_RATES.credito.vista.acima15mil}</div>
                                                    <div className="p-2 text-center md:hidden">{getMobileRate(DETAILED_RATES.credito.vista)}</div>
                                                </div>
                                                {DETAILED_RATES.credito.parcelas.map((parcela, index) => (
                                                    <div key={index} className={`grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] border-b ${index === DETAILED_RATES.credito.parcelas.length - 1 ? 'border-b-0' : 'border-gray-200'} hover:bg-gray-50`}>
                                                        <div className="p-2 text-left text-gray-800 pl-3">{parcela.desc}</div>
                                                        <div className="p-2 text-center text-emerald-600 font-semibold">{parcela.promo}</div>
                                                        <div className="p-2 text-center hidden md:flex items-center justify-center">{parcela.ate2mil}</div>
                                                        <div className="p-2 text-center hidden md:flex items-center justify-center">{parcela.de2a5mil}</div>
                                                        <div className="p-2 text-center hidden md:flex items-center justify-center">{parcela.de5a10mil}</div>
                                                        <div className="p-2 text-center hidden md:flex items-center justify-center">{parcela.de10a15mil}</div>
                                                        <div className="p-2 text-center hidden md:flex items-center justify-center">{parcela.acima15mil}</div>
                                                        <div className="p-2 text-center md:hidden">{getMobileRate(parcela)}</div>
                                                    </div>
                                                ))}
                                            </>
                                        ) : (
                                            <div className="grid grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[100px_100px_1fr_1fr_1fr_1fr_1fr] border-b border-gray-200 hover:bg-gray-50">
                                                <div className="p-2 text-left text-gray-800 pl-3"></div>
                                                <div className="p-2 text-center text-emerald-600 font-semibold">{section === 'PIX' ? DETAILED_RATES.pix.promo : DETAILED_RATES.debito.promo}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? DETAILED_RATES.pix.ate2mil : DETAILED_RATES.debito.ate2mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? DETAILED_RATES.pix.de2a5mil : DETAILED_RATES.debito.de2a5mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? DETAILED_RATES.pix.de5a10mil : DETAILED_RATES.debito.de5a10mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? DETAILED_RATES.pix.de10a15mil : DETAILED_RATES.debito.de10a15mil}</div>
                                                <div className="p-2 text-center hidden md:flex items-center justify-center">{section === 'PIX' ? DETAILED_RATES.pix.acima15mil : DETAILED_RATES.debito.acima15mil}</div>
                                                <div className="p-2 text-center md:hidden">{getMobileRate(section === 'PIX' ? DETAILED_RATES.pix : DETAILED_RATES.debito)}</div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Aviso de promoção no modal */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600 text-center">
                            {TEXTS.PROMOTION_NOTICE}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SectionTaxas = () => {
    const [activeRange, setActiveRange] = useState(0);
    
    // Usando o contexto do modal
    const { showModal, toggleModal } = useTaxasModal();

    const handleRangeClick = (index) => {
        setActiveRange(index);
    };

    return (
        <section className="bg-white py-10 md:py-16" id="taxas-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <h2 className="text-sm sm:text-base font-bold mb-2 text-gray-900">
                        Depois, as taxas variam conforme as vendas no mês.
                        <button
                            className="text-blue-600 hover:text-blue-700 hover:underline ml-2 font-normal text-sm inline-block"
                            onClick={toggleModal}
                            aria-haspopup="dialog"
                            aria-expanded={showModal}
                        >
                            Mostrar detalhes
                        </button>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Selector de faixas */}
                    <div className="flex justify-center mb-6">
                        <div className="grid grid-cols-4 bg-gray-100 rounded-full overflow-hidden w-full max-w-md shadow-sm  border">
                            {RANGE_LABELS.map((label, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleRangeClick(index)}
                                    className={`py-2 text-sm font-medium transition-colors duration-200 ${activeRange === index ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-700'}`}
                                >
                                   
                                    {label === 'Promo' ? (
                                        <span className="font-bold text-emerald-600">{label}</span>
                                    ) : (
                                        label
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                                
                    
                    <div className="flex justify-center items-center gap-16 sm:gap-20 mb-8 text-center">
                        {TAX_TYPE_LABELS.map((label) => {
                            const currentTaxObject = TAX_RANGES[activeRange];
                            let taxValue;

                            if (label === 'DÉBITO') {
                                taxValue = currentTaxObject.debito;
                            } else if (label === 'CRÉDITO') {
                                taxValue = currentTaxObject.credito;
                            } else if (label === 'CRÉDITO 12x') {
                                taxValue = currentTaxObject.credito12x;
                            }

                            const isPromo = activeRange === 0; // 'Promo' é o índice 0

                            return (
                                <div key={label}>
                                    <div className="text-2xl md:text-3xl font-bold mb-1 flex items-end justify-center">
                                        <span className={isPromo ? "text-emerald-600" : "text-gray-900"}>
                                            <AnimatedNumber value={taxValue} />
                                        </span>
                                        <span className={`ml-2 text-xl md:text-2xl ${isPromo ? "text-emerald-600" : "text-gray-900"}`}>%</span>
                                    </div>
                                    <span className="block text-xs font-semibold text-gray-700 uppercase">{label}</span>
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Aviso de promoção */}
                    <div className="max-w-lg mx-auto text-center">
                        <p className="text-xs text-gray-600 mt-2 mb-4">
                            {TEXTS.PROMOTION_NOTICE}
                        </p>
                    </div>
                   
                </div>
            </div>

            {showModal && (
                <TaxasModal />
            )}
        </section>
    );
};

export default SectionTaxas;
```


---
### 📄 Arquivo: `src/components/SvgIcons.js`

```javascript
import React from 'react';

// Componente que contém todos os SVGs necessários para ConhecaPointPro3
const SvgIcons = {
  Aproximacao: () => (
    <svg width="254" height="111" viewBox="0 0 254 111" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.748 21V10.328H10.076V19.816H15.036V21H8.748ZM16.0645 17.128C16.0645 14.888 17.6645 13.08 19.8725 13.08C22.2085 13.08 23.5845 14.904 23.5845 17.224V17.528H17.3285C17.4245 18.984 18.4485 20.2 20.1125 20.2C20.9925 20.2 21.8885 19.848 22.4965 19.224L23.0725 20.008C22.3045 20.776 21.2645 21.192 20.0005 21.192C17.7125 21.192 16.0645 19.544 16.0645 17.128ZM19.8565 14.072C18.2085 14.072 17.3925 15.464 17.3285 16.648H22.4005C22.3845 15.496 21.6165 14.072 19.8565 14.072ZM26.1201 12.168C25.6881 12.168 25.3201 11.816 25.3201 11.368C25.3201 10.92 25.6881 10.552 26.1201 10.552C26.5681 10.552 26.9361 10.92 26.9361 11.368C26.9361 11.816 26.5681 12.168 26.1201 12.168ZM25.5281 21V13.272H26.7281V21H25.5281ZM31.0739 21.192C29.9379 21.192 29.3619 20.536 29.3619 19.384V14.328H28.0819V13.272H29.3619V11.16H30.5619V13.272H32.1299V14.328H30.5619V19.128C30.5619 19.704 30.8179 20.12 31.3459 20.12C31.6819 20.12 32.0019 19.976 32.1619 19.8L32.5139 20.696C32.2099 20.984 31.7779 21.192 31.0739 21.192ZM37.201 21.192C34.849 21.192 33.377 19.368 33.377 17.128C33.377 14.888 34.849 13.08 37.201 13.08C39.553 13.08 41.025 14.888 41.025 17.128C41.025 19.368 39.553 21.192 37.201 21.192ZM37.201 20.12C38.849 20.12 39.761 18.712 39.761 17.128C39.761 15.56 38.849 14.152 37.201 14.152C35.553 14.152 34.625 15.56 34.625 17.128C34.625 18.712 35.553 20.12 37.201 20.12ZM42.9813 21V13.272H44.1813V14.52C44.8053 13.704 45.7013 13.112 46.7573 13.112V14.344C46.6133 14.312 46.4693 14.296 46.2773 14.296C45.5413 14.296 44.5333 14.904 44.1813 15.528V21H42.9813ZM57.9875 21V19.848C57.4115 20.632 56.4675 21.192 55.3795 21.192C53.3635 21.192 51.9395 19.656 51.9395 17.144C51.9395 14.68 53.3475 13.08 55.3795 13.08C56.4195 13.08 57.3635 13.592 57.9875 14.44V10.328H59.1875V21H57.9875ZM57.9875 18.904V15.4C57.5555 14.728 56.6275 14.152 55.6675 14.152C54.1155 14.152 53.1875 15.432 53.1875 17.144C53.1875 18.856 54.1155 20.12 55.6675 20.12C56.6275 20.12 57.5555 19.576 57.9875 18.904ZM61.1426 17.128C61.1426 14.888 62.7426 13.08 64.9506 13.08C67.2866 13.08 68.6626 14.904 68.6626 17.224V17.528H62.4066C62.5026 18.984 63.5266 20.2 65.1906 20.2C66.0706 20.2 66.9666 19.848 67.5746 19.224L68.1506 20.008C67.3826 20.776 66.3426 21.192 65.0786 21.192C62.7906 21.192 61.1426 19.544 61.1426 17.128ZM64.9346 14.072C63.2866 14.072 62.4706 15.464 62.4066 16.648H67.4786C67.4626 15.496 66.6946 14.072 64.9346 14.072ZM74.2833 17.128C74.2833 14.84 75.8353 13.08 78.1393 13.08C79.5473 13.08 80.3793 13.656 80.9713 14.424L80.1713 15.16C79.6593 14.456 79.0033 14.152 78.2033 14.152C76.5553 14.152 75.5312 15.416 75.5312 17.128C75.5312 18.84 76.5553 20.12 78.2033 20.12C79.0033 20.12 79.6593 19.8 80.1713 19.112L80.9713 19.848C80.3793 20.616 79.5473 21.192 78.1393 21.192C75.8353 21.192 74.2833 19.432 74.2833 17.128ZM87.4851 21V20.12C86.8451 20.824 85.9651 21.192 84.9251 21.192C83.6131 21.192 82.2211 20.312 82.2211 18.632C82.2211 16.904 83.6131 16.088 84.9251 16.088C85.9811 16.088 86.8611 16.424 87.4851 17.144V15.752C87.4851 14.712 86.6531 14.12 85.5331 14.12C84.6051 14.12 83.8531 14.456 83.1651 15.192L82.6051 14.36C83.4371 13.496 84.4291 13.08 85.6931 13.08C87.3251 13.08 88.6851 13.816 88.6851 15.688V21H87.4851ZM87.4851 19.368V17.912C87.0211 17.272 86.2051 16.952 85.3571 16.952C84.2371 16.952 83.4531 17.656 83.4531 18.648C83.4531 19.624 84.2371 20.328 85.3571 20.328C86.2051 20.328 87.0211 20.008 87.4851 19.368ZM91.0906 21V13.272H92.2906V14.52C92.9146 13.704 93.8106 13.112 94.8666 13.112V14.344C94.7226 14.312 94.5786 14.296 94.3866 14.296C93.6506 14.296 92.6426 14.904 92.2906 15.528V21H91.0906ZM98.3239 21.192C97.1879 21.192 96.6119 20.536 96.6119 19.384V14.328H95.3319V13.272H96.6119V11.16H97.8119V13.272H99.3799V14.328H97.8119V19.128C97.8119 19.704 98.0679 20.12 98.5959 20.12C98.9319 20.12 99.2519 19.976 99.4119 19.8L99.7639 20.696C99.4599 20.984 99.0279 21.192 98.3239 21.192ZM104.195 11.288C103.987 10.968 103.779 10.664 103.443 10.664C103.011 10.664 102.659 11.08 102.659 12.04H101.955C101.955 10.792 102.499 9.896 103.507 9.896C104.131 9.896 104.435 10.344 104.707 10.744C104.931 11.064 105.123 11.368 105.459 11.368C105.891 11.368 106.227 10.952 106.227 9.992H106.963C106.963 11.24 106.419 12.136 105.411 12.136C104.755 12.136 104.467 11.688 104.195 11.288ZM104.451 21.192C102.099 21.192 100.627 19.368 100.627 17.128C100.627 14.888 102.099 13.08 104.451 13.08C106.803 13.08 108.275 14.888 108.275 17.128C108.275 19.368 106.803 21.192 104.451 21.192ZM104.451 20.12C106.099 20.12 107.011 18.712 107.011 17.128C107.011 15.56 106.099 14.152 104.451 14.152C102.803 14.152 101.875 15.56 101.875 17.128C101.875 18.712 102.803 20.12 104.451 20.12ZM109.783 17.128C109.783 14.888 111.383 13.08 113.591 13.08C115.927 13.08 117.303 14.904 117.303 17.224V17.528H111.047C111.143 18.984 112.167 20.2 113.831 20.2C114.711 20.2 115.607 19.848 116.215 19.224L116.791 20.008C116.023 20.776 114.983 21.192 113.719 21.192C111.431 21.192 109.783 19.544 109.783 17.128ZM113.575 14.072C111.927 14.072 111.111 15.464 111.047 16.648H116.119C116.103 15.496 115.335 14.072 113.575 14.072ZM118.575 19.976L119.199 19.112C119.711 19.704 120.687 20.216 121.743 20.216C122.927 20.216 123.567 19.656 123.567 18.888C123.567 18.04 122.623 17.816 121.583 17.56C120.271 17.256 118.783 16.904 118.783 15.304C118.783 14.104 119.823 13.08 121.663 13.08C122.975 13.08 123.903 13.576 124.527 14.2L123.967 15.032C123.503 14.472 122.655 14.056 121.663 14.056C120.607 14.056 119.951 14.584 119.951 15.272C119.951 16.008 120.831 16.216 121.839 16.456C123.183 16.76 124.735 17.144 124.735 18.856C124.735 20.152 123.695 21.192 121.695 21.192C120.431 21.192 119.359 20.808 118.575 19.976ZM132.009 23.944H130.809V13.272H132.009V14.424C132.569 13.64 133.529 13.08 134.617 13.08C136.649 13.08 138.057 14.616 138.057 17.128C138.057 19.624 136.649 21.192 134.617 21.192C133.561 21.192 132.633 20.696 132.009 19.832V23.944ZM136.793 17.128C136.793 15.416 135.865 14.152 134.313 14.152C133.369 14.152 132.425 14.712 132.009 15.384V18.872C132.425 19.544 133.369 20.12 134.313 20.12C135.865 20.12 136.793 18.84 136.793 17.128ZM143.373 21.192C141.021 21.192 139.549 19.368 139.549 17.128C139.549 14.888 141.021 13.08 143.373 13.08C145.725 13.08 147.197 14.888 147.197 17.128C147.197 19.368 145.725 21.192 143.373 21.192ZM143.373 20.12C145.021 20.12 145.933 18.712 145.933 17.128C145.933 15.56 145.021 14.152 143.373 14.152C141.725 14.152 140.797 15.56 140.797 17.128C140.797 18.712 141.725 20.12 143.373 20.12ZM149.153 21V13.272H150.353V14.52C150.977 13.704 151.873 13.112 152.929 13.112V14.344C152.785 14.312 152.641 14.296 152.449 14.296C151.713 14.296 150.705 14.904 150.353 15.528V21H149.153ZM163.391 21V20.12C162.751 20.824 161.871 21.192 160.831 21.192C159.519 21.192 158.127 20.312 158.127 18.632C158.127 16.904 159.519 16.088 160.831 16.088C161.887 16.088 162.767 16.424 163.391 17.144V15.752C163.391 14.712 162.559 14.12 161.439 14.12C160.511 14.12 159.759 14.456 159.071 15.192L158.511 14.36C159.343 13.496 160.335 13.08 161.599 13.08C163.231 13.08 164.591 13.816 164.591 15.688V21H163.391ZM163.391 19.368V17.912C162.927 17.272 162.111 16.952 161.263 16.952C160.143 16.952 159.359 17.656 159.359 18.648C159.359 19.624 160.143 20.328 161.263 20.328C162.111 20.328 162.927 20.008 163.391 19.368ZM168.197 23.944H166.997V13.272H168.197V14.424C168.757 13.64 169.717 13.08 170.805 13.08C172.837 13.08 174.245 14.616 174.245 17.128C174.245 19.624 172.837 21.192 170.805 21.192C169.749 21.192 168.821 20.696 168.197 19.832V23.944ZM172.981 17.128C172.981 15.416 172.053 14.152 170.501 14.152C169.557 14.152 168.613 14.712 168.197 15.384V18.872C168.613 19.544 169.557 20.12 170.501 20.12C172.053 20.12 172.981 18.84 172.981 17.128ZM176.184 21V13.272H177.384V14.52C178.008 13.704 178.904 13.112 179.96 13.112V14.344C179.816 14.312 179.672 14.296 179.48 14.296C178.744 14.296 177.736 14.904 177.384 15.528V21H176.184ZM184.842 21.192C182.49 21.192 181.018 19.368 181.018 17.128C181.018 14.888 182.49 13.08 184.842 13.08C187.194 13.08 188.666 14.888 188.666 17.128C188.666 19.368 187.194 21.192 184.842 21.192ZM184.842 20.12C186.49 20.12 187.402 18.712 187.402 17.128C187.402 15.56 186.49 14.152 184.842 14.152C183.194 14.152 182.266 15.56 182.266 17.128C182.266 18.712 183.194 20.12 184.842 20.12ZM195.036 21L192.716 17.832L190.396 21H189.02L191.98 17.032L189.18 13.272H190.572L192.716 16.216L194.86 13.272H196.252L193.452 17.032L196.428 21H195.036ZM198.401 12.168C197.969 12.168 197.601 11.816 197.601 11.368C197.601 10.92 197.969 10.552 198.401 10.552C198.849 10.552 199.217 10.92 199.217 11.368C199.217 11.816 198.849 12.168 198.401 12.168ZM197.809 21V13.272H199.009V21H197.809ZM210.731 21V15.752C210.731 14.776 210.299 14.152 209.307 14.152C208.507 14.152 207.659 14.728 207.259 15.336V21H206.059V15.752C206.059 14.776 205.643 14.152 204.635 14.152C203.851 14.152 203.019 14.728 202.603 15.352V21H201.403V13.272H202.603V14.392C202.923 13.896 203.963 13.08 205.099 13.08C206.283 13.08 206.955 13.72 207.179 14.52C207.611 13.816 208.651 13.08 209.771 13.08C211.179 13.08 211.931 13.864 211.931 15.416V21H210.731ZM219.157 21V20.12C218.517 20.824 217.637 21.192 216.597 21.192C215.285 21.192 213.893 20.312 213.893 18.632C213.893 16.904 215.285 16.088 216.597 16.088C217.653 16.088 218.533 16.424 219.157 17.144V15.752C219.157 14.712 218.325 14.12 217.205 14.12C216.277 14.12 215.525 14.456 214.837 15.192L214.277 14.36C215.109 13.496 216.101 13.08 217.365 13.08C218.997 13.08 220.357 13.816 220.357 15.688V21H219.157ZM219.157 19.368V17.912C218.693 17.272 217.877 16.952 217.029 16.952C215.909 16.952 215.125 17.656 215.125 18.648C215.125 19.624 215.909 20.328 217.029 20.328C217.877 20.328 218.693 20.008 219.157 19.368ZM226.235 20.12C227.035 20.12 227.691 19.8 228.203 19.112L229.003 19.848C228.459 20.568 227.691 21.112 226.459 21.176L226.203 21.848C226.363 21.736 226.587 21.672 226.795 21.672C227.403 21.672 227.851 22.088 227.851 22.744C227.851 23.528 227.115 24.024 226.187 24.024C225.499 24.024 224.891 23.8 224.571 23.544L224.875 22.936C225.275 23.256 225.723 23.4 226.155 23.4C226.683 23.4 227.147 23.16 227.147 22.728C227.147 22.392 226.939 22.168 226.539 22.168C226.315 22.168 226.075 22.28 225.947 22.44L225.403 22.136L225.755 21.176C223.674 20.968 222.315 19.288 222.315 17.128C222.315 14.84 223.867 13.08 226.171 13.08C227.579 13.08 228.411 13.656 229.003 14.424L228.203 15.16C227.691 14.456 227.035 14.152 226.235 14.152C224.587 14.152 223.562 15.416 223.562 17.128C223.562 18.84 224.587 20.12 226.235 20.12ZM233.468 11.288C233.26 10.968 233.052 10.664 232.716 10.664C232.284 10.664 231.932 11.08 231.932 12.04H231.228C231.228 10.792 231.772 9.896 232.78 9.896C233.404 9.896 233.708 10.344 233.98 10.744C234.204 11.064 234.396 11.368 234.732 11.368C235.164 11.368 235.5 10.952 235.5 9.992H236.236C236.236 11.24 235.692 12.136 234.684 12.136C234.028 12.136 233.74 11.688 233.468 11.288ZM235.516 21V20.12C234.876 20.824 233.996 21.192 232.956 21.192C231.644 21.192 230.252 20.312 230.252 18.632C230.252 16.904 231.644 16.088 232.956 16.088C234.012 16.088 234.892 16.424 235.516 17.144V15.752C235.516 14.712 234.684 14.12 233.564 14.12C232.636 14.12 231.884 14.456 231.196 15.192L230.636 14.36C231.468 13.496 232.46 13.08 233.724 13.08C235.356 13.08 236.716 13.816 236.716 15.688V21H235.516ZM235.516 19.368V17.912C235.052 17.272 234.236 16.952 233.388 16.952C232.268 16.952 231.484 17.656 231.484 18.648C231.484 19.624 232.268 20.328 233.388 20.328C234.236 20.328 235.052 20.008 235.516 19.368ZM242.498 21.192C240.146 21.192 238.674 19.368 238.674 17.128C238.674 14.888 240.146 13.08 242.498 13.08C244.85 13.08 246.322 14.888 246.322 17.128C246.322 19.368 244.85 21.192 242.498 21.192ZM242.498 20.12C244.146 20.12 245.058 18.712 245.058 17.128C245.058 15.56 244.146 14.152 242.498 14.152C240.85 14.152 239.922 15.56 239.922 17.128C239.922 18.712 240.85 20.12 242.498 20.12Z" fill="black" fillOpacity="0.55"/>
    <path d="M123.078 58L122.776 58.3985L122.578 58.2484V58H123.078ZM187.745 105C187.745 106.473 186.551 107.667 185.078 107.667C183.605 107.667 182.411 106.473 182.411 105C182.411 103.527 183.605 102.333 185.078 102.333C186.551 102.333 187.745 103.527 187.745 105ZM123.578 34V58H122.578V34H123.578ZM123.38 57.6015L185.38 104.602L184.776 105.398L122.776 58.3985L123.38 57.6015Z" fill="black" fillOpacity="0.25"/>
    </svg>
    
  ),

  Bobinas: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="237" height="57" viewBox="0 0 237 57" fill="none">
    <path d="M8.41146 51C8.41146 52.4728 9.60537 53.6667 11.0781 53.6667C12.5509 53.6667 13.7448 52.4728 13.7448 51C13.7448 49.5272 12.5509 48.3333 11.0781 48.3333C9.60537 48.3333 8.41146 49.5272 8.41146 51ZM41.5781 16V15.5H41.3506L41.2012 15.6715L41.5781 16ZM75.0781 16.5H75.5781V15.5H75.0781V16.5ZM11.4551 51.3285L41.9551 16.3285L41.2012 15.6715L10.7012 50.6715L11.4551 51.3285ZM41.5781 16.5H75.0781V15.5H41.5781V16.5Z" fill="black" fillOpacity="0.25"/>
    <path d="M87.5761 21V10.328H94.5681V11.512H88.9041V14.952H94.4561V16.136H88.9041V19.816H94.5681V21H87.5761ZM95.9655 19.976L96.5895 19.112C97.1015 19.704 98.0775 20.216 99.1335 20.216C100.318 20.216 100.958 19.656 100.958 18.888C100.958 18.04 100.014 17.816 98.9735 17.56C97.6615 17.256 96.1735 16.904 96.1735 15.304C96.1735 14.104 97.2135 13.08 99.0535 13.08C100.366 13.08 101.294 13.576 101.918 14.2L101.358 15.032C100.894 14.472 100.046 14.056 99.0535 14.056C97.9975 14.056 97.3415 14.584 97.3415 15.272C97.3415 16.008 98.2215 16.216 99.2295 16.456C100.574 16.76 102.126 17.144 102.126 18.856C102.126 20.152 101.086 21.192 99.0855 21.192C97.8215 21.192 96.7495 20.808 95.9655 19.976ZM105.275 23.944H104.075V13.272H105.275V14.424C105.835 13.64 106.795 13.08 107.883 13.08C109.915 13.08 111.323 14.616 111.323 17.128C111.323 19.624 109.915 21.192 107.883 21.192C106.827 21.192 105.899 20.696 105.275 19.832V23.944ZM110.059 17.128C110.059 15.416 109.131 14.152 107.579 14.152C106.635 14.152 105.691 14.712 105.275 15.384V18.872C105.691 19.544 106.635 20.12 107.579 20.12C109.131 20.12 110.059 18.84 110.059 17.128ZM118.095 21V20.12C117.455 20.824 116.575 21.192 115.535 21.192C114.223 21.192 112.831 20.312 112.831 18.632C112.831 16.904 114.223 16.088 115.535 16.088C116.591 16.088 117.471 16.424 118.095 17.144V15.752C118.095 14.712 117.263 14.12 116.143 14.12C115.215 14.12 114.463 14.456 113.775 15.192L113.215 14.36C114.047 13.496 115.039 13.08 116.303 13.08C117.935 13.08 119.295 13.816 119.295 15.688V21H118.095ZM118.095 19.368V17.912C117.631 17.272 116.815 16.952 115.967 16.952C114.847 16.952 114.062 17.656 114.062 18.648C114.062 19.624 114.847 20.328 115.967 20.328C116.815 20.328 117.631 20.008 118.095 19.368ZM125.172 20.12C125.972 20.12 126.628 19.8 127.14 19.112L127.94 19.848C127.396 20.568 126.628 21.112 125.396 21.176L125.14 21.848C125.3 21.736 125.524 21.672 125.732 21.672C126.34 21.672 126.788 22.088 126.788 22.744C126.788 23.528 126.052 24.024 125.124 24.024C124.436 24.024 123.828 23.8 123.508 23.544L123.812 22.936C124.212 23.256 124.66 23.4 125.092 23.4C125.62 23.4 126.084 23.16 126.084 22.728C126.084 22.392 125.876 22.168 125.476 22.168C125.252 22.168 125.012 22.28 124.884 22.44L124.34 22.136L124.692 21.176C122.612 20.968 121.252 19.288 121.252 17.128C121.252 14.84 122.804 13.08 125.108 13.08C126.516 13.08 127.348 13.656 127.94 14.424L127.14 15.16C126.628 14.456 125.972 14.152 125.172 14.152C123.524 14.152 122.5 15.416 122.5 17.128C122.5 18.84 123.524 20.12 125.172 20.12ZM132.998 21.192C130.646 21.192 129.174 19.368 129.174 17.128C129.174 14.888 130.646 13.08 132.998 13.08C135.35 13.08 136.822 14.888 136.822 17.128C136.822 19.368 135.35 21.192 132.998 21.192ZM132.998 20.12C134.646 20.12 135.558 18.712 135.558 17.128C135.558 15.56 134.646 14.152 132.998 14.152C131.35 14.152 130.422 15.56 130.422 17.128C130.422 18.712 131.35 20.12 132.998 20.12ZM144.103 23.944H142.903V13.272H144.103V14.424C144.663 13.64 145.623 13.08 146.711 13.08C148.743 13.08 150.151 14.616 150.151 17.128C150.151 19.624 148.743 21.192 146.711 21.192C145.655 21.192 144.727 20.696 144.103 19.832V23.944ZM148.887 17.128C148.887 15.416 147.959 14.152 146.407 14.152C145.463 14.152 144.519 14.712 144.103 15.384V18.872C144.519 19.544 145.463 20.12 146.407 20.12C147.959 20.12 148.887 18.84 148.887 17.128ZM156.923 21V20.12C156.283 20.824 155.403 21.192 154.363 21.192C153.051 21.192 151.659 20.312 151.659 18.632C151.659 16.904 153.051 16.088 154.363 16.088C155.419 16.088 156.299 16.424 156.923 17.144V15.752C156.923 14.712 156.091 14.12 154.971 14.12C154.043 14.12 153.291 14.456 152.603 15.192L152.043 14.36C152.875 13.496 153.867 13.08 155.131 13.08C156.763 13.08 158.123 13.816 158.123 15.688V21H156.923ZM156.923 19.368V17.912C156.459 17.272 155.643 16.952 154.795 16.952C153.675 16.952 152.891 17.656 152.891 18.648C152.891 19.624 153.675 20.328 154.795 20.328C155.643 20.328 156.459 20.008 156.923 19.368ZM160.528 21V13.272H161.728V14.52C162.352 13.704 163.248 13.112 164.304 13.112V14.344C164.16 14.312 164.016 14.296 163.824 14.296C163.088 14.296 162.08 14.904 161.728 15.528V21H160.528ZM170.641 21V20.12C170.001 20.824 169.121 21.192 168.081 21.192C166.769 21.192 165.377 20.312 165.377 18.632C165.377 16.904 166.769 16.088 168.081 16.088C169.137 16.088 170.017 16.424 170.641 17.144V15.752C170.641 14.712 169.809 14.12 168.689 14.12C167.761 14.12 167.009 14.456 166.321 15.192L165.761 14.36C166.593 13.496 167.585 13.08 168.849 13.08C170.481 13.08 171.841 13.816 171.841 15.688V21H170.641ZM170.641 19.368V17.912C170.177 17.272 169.361 16.952 168.513 16.952C167.393 16.952 166.609 17.656 166.609 18.648C166.609 19.624 167.393 20.328 168.513 20.328C169.361 20.328 170.177 20.008 170.641 19.368ZM178.372 21V10.328H179.572V14.44C180.196 13.592 181.124 13.08 182.18 13.08C184.196 13.08 185.62 14.68 185.62 17.144C185.62 19.656 184.196 21.192 182.18 21.192C181.092 21.192 180.148 20.632 179.572 19.848V21H178.372ZM179.572 18.904C179.988 19.576 180.932 20.12 181.876 20.12C183.444 20.12 184.372 18.856 184.372 17.144C184.372 15.432 183.444 14.152 181.876 14.152C180.932 14.152 179.988 14.728 179.572 15.4V18.904ZM190.951 21.192C188.599 21.192 187.127 19.368 187.127 17.128C187.127 14.888 188.599 13.08 190.951 13.08C193.303 13.08 194.775 14.888 194.775 17.128C194.775 19.368 193.303 21.192 190.951 21.192ZM190.951 20.12C192.599 20.12 193.511 18.712 193.511 17.128C193.511 15.56 192.599 14.152 190.951 14.152C189.303 14.152 188.375 15.56 188.375 17.128C188.375 18.712 189.303 20.12 190.951 20.12ZM196.731 21V10.328H197.931V14.44C198.555 13.592 199.483 13.08 200.539 13.08C202.555 13.08 203.979 14.68 203.979 17.144C203.979 19.656 202.555 21.192 200.539 21.192C199.451 21.192 198.507 20.632 197.931 19.848V21H196.731ZM197.931 18.904C198.347 19.576 199.291 20.12 200.235 20.12C201.803 20.12 202.731 18.856 202.731 17.144C202.731 15.432 201.803 14.152 200.235 14.152C199.291 14.152 198.347 14.728 197.931 15.4V18.904ZM206.526 12.168C206.094 12.168 205.726 11.816 205.726 11.368C205.726 10.92 206.094 10.552 206.526 10.552C206.974 10.552 207.342 10.92 207.342 11.368C207.342 11.816 206.974 12.168 206.526 12.168ZM205.934 21V13.272H207.134V21H205.934ZM214.744 21V15.944C214.744 14.584 214.056 14.152 213.016 14.152C212.072 14.152 211.176 14.728 210.728 15.352V21H209.528V13.272H210.728V14.392C211.272 13.752 212.328 13.08 213.48 13.08C215.096 13.08 215.944 13.896 215.944 15.576V21H214.744ZM223.173 21V20.12C222.533 20.824 221.653 21.192 220.613 21.192C219.301 21.192 217.909 20.312 217.909 18.632C217.909 16.904 219.301 16.088 220.613 16.088C221.669 16.088 222.549 16.424 223.173 17.144V15.752C223.173 14.712 222.341 14.12 221.221 14.12C220.293 14.12 219.541 14.456 218.853 15.192L218.293 14.36C219.125 13.496 220.117 13.08 221.381 13.08C223.013 13.08 224.373 13.816 224.373 15.688V21H223.173ZM223.173 19.368V17.912C222.709 17.272 221.893 16.952 221.045 16.952C219.925 16.952 219.141 17.656 219.141 18.648C219.141 19.624 219.925 20.328 221.045 20.328C221.893 20.328 222.709 20.008 223.173 19.368Z" fill="black" fillOpacity="0.55"/>
    </svg>
  ),

  Magnetica: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="124" viewBox="0 0 200 124" fill="none">
    <path d="M55.8339 21V10.328H57.1619V19.816H62.1219V21H55.8339ZM63.1504 17.128C63.1504 14.888 64.7504 13.08 66.9584 13.08C69.2944 13.08 70.6704 14.904 70.6704 17.224V17.528H64.4144C64.5104 18.984 65.5344 20.2 67.1984 20.2C68.0784 20.2 68.9744 19.848 69.5824 19.224L70.1584 20.008C69.3904 20.776 68.3504 21.192 67.0864 21.192C64.7984 21.192 63.1504 19.544 63.1504 17.128ZM66.9424 14.072C65.2944 14.072 64.4784 15.464 64.4144 16.648H69.4864C69.4704 15.496 68.7024 14.072 66.9424 14.072ZM73.2061 12.168C72.7741 12.168 72.4061 11.816 72.4061 11.368C72.4061 10.92 72.7741 10.552 73.2061 10.552C73.6541 10.552 74.0221 10.92 74.0221 11.368C74.0221 11.816 73.6541 12.168 73.2061 12.168ZM72.6141 21V13.272H73.8141V21H72.6141ZM78.1598 21.192C77.0238 21.192 76.4478 20.536 76.4478 19.384V14.328H75.1678V13.272H76.4478V11.16H77.6478V13.272H79.2158V14.328H77.6478V19.128C77.6478 19.704 77.9038 20.12 78.4318 20.12C78.7678 20.12 79.0878 19.976 79.2478 19.8L79.5998 20.696C79.2958 20.984 78.8638 21.192 78.1598 21.192ZM84.2869 21.192C81.9349 21.192 80.4629 19.368 80.4629 17.128C80.4629 14.888 81.9349 13.08 84.2869 13.08C86.6389 13.08 88.1109 14.888 88.1109 17.128C88.1109 19.368 86.6389 21.192 84.2869 21.192ZM84.2869 20.12C85.9349 20.12 86.8469 18.712 86.8469 17.128C86.8469 15.56 85.9349 14.152 84.2869 14.152C82.6389 14.152 81.7109 15.56 81.7109 17.128C81.7109 18.712 82.6389 20.12 84.2869 20.12ZM90.0672 21V13.272H91.2672V14.52C91.8912 13.704 92.7872 13.112 93.8432 13.112V14.344C93.6992 14.312 93.5552 14.296 93.3632 14.296C92.6272 14.296 91.6192 14.904 91.2672 15.528V21H90.0672ZM105.073 21V19.848C104.497 20.632 103.553 21.192 102.465 21.192C100.449 21.192 99.0254 19.656 99.0254 17.144C99.0254 14.68 100.433 13.08 102.465 13.08C103.505 13.08 104.449 13.592 105.073 14.44V10.328H106.273V21H105.073ZM105.073 18.904V15.4C104.641 14.728 103.713 14.152 102.753 14.152C101.201 14.152 100.273 15.432 100.273 17.144C100.273 18.856 101.201 20.12 102.753 20.12C103.713 20.12 104.641 19.576 105.073 18.904ZM108.229 17.128C108.229 14.888 109.829 13.08 112.037 13.08C114.373 13.08 115.749 14.904 115.749 17.224V17.528H109.493C109.589 18.984 110.613 20.2 112.277 20.2C113.157 20.2 114.053 19.848 114.661 19.224L115.237 20.008C114.469 20.776 113.429 21.192 112.165 21.192C109.877 21.192 108.229 19.544 108.229 17.128ZM112.021 14.072C110.373 14.072 109.557 15.464 109.493 16.648H114.565C114.549 15.496 113.781 14.072 112.021 14.072ZM121.369 17.128C121.369 14.84 122.921 13.08 125.225 13.08C126.633 13.08 127.465 13.656 128.057 14.424L127.257 15.16C126.745 14.456 126.089 14.152 125.289 14.152C123.641 14.152 122.617 15.416 122.617 17.128C122.617 18.84 123.641 20.12 125.289 20.12C126.089 20.12 126.745 19.8 127.257 19.112L128.057 19.848C127.465 20.616 126.633 21.192 125.225 21.192C122.921 21.192 121.369 19.432 121.369 17.128ZM134.571 21V20.12C133.931 20.824 133.051 21.192 132.011 21.192C130.699 21.192 129.307 20.312 129.307 18.632C129.307 16.904 130.699 16.088 132.011 16.088C133.067 16.088 133.947 16.424 134.571 17.144V15.752C134.571 14.712 133.739 14.12 132.619 14.12C131.691 14.12 130.939 14.456 130.251 15.192L129.691 14.36C130.523 13.496 131.515 13.08 132.779 13.08C134.411 13.08 135.771 13.816 135.771 15.688V21H134.571ZM134.571 19.368V17.912C134.107 17.272 133.291 16.952 132.443 16.952C131.323 16.952 130.539 17.656 130.539 18.648C130.539 19.624 131.323 20.328 132.443 20.328C133.291 20.328 134.107 20.008 134.571 19.368ZM138.177 21V13.272H139.377V14.52C140.001 13.704 140.897 13.112 141.953 13.112V14.344C141.809 14.312 141.665 14.296 141.473 14.296C140.737 14.296 139.729 14.904 139.377 15.528V21H138.177ZM145.41 21.192C144.274 21.192 143.698 20.536 143.698 19.384V14.328H142.418V13.272H143.698V11.16H144.898V13.272H146.466V14.328H144.898V19.128C144.898 19.704 145.154 20.12 145.682 20.12C146.018 20.12 146.338 19.976 146.498 19.8L146.85 20.696C146.546 20.984 146.114 21.192 145.41 21.192ZM151.281 11.288C151.073 10.968 150.865 10.664 150.529 10.664C150.097 10.664 149.745 11.08 149.745 12.04H149.041C149.041 10.792 149.585 9.896 150.593 9.896C151.217 9.896 151.521 10.344 151.793 10.744C152.017 11.064 152.209 11.368 152.545 11.368C152.977 11.368 153.313 10.952 153.313 9.992H154.049C154.049 11.24 153.505 12.136 152.497 12.136C151.841 12.136 151.553 11.688 151.281 11.288ZM151.537 21.192C149.185 21.192 147.713 19.368 147.713 17.128C147.713 14.888 149.185 13.08 151.537 13.08C153.889 13.08 155.361 14.888 155.361 17.128C155.361 19.368 153.889 21.192 151.537 21.192ZM151.537 20.12C153.185 20.12 154.097 18.712 154.097 17.128C154.097 15.56 153.185 14.152 151.537 14.152C149.889 14.152 148.961 15.56 148.961 17.128C148.961 18.712 149.889 20.12 151.537 20.12ZM156.869 17.128C156.869 14.888 158.469 13.08 160.677 13.08C163.013 13.08 164.389 14.904 164.389 17.224V17.528H158.133C158.229 18.984 159.253 20.2 160.917 20.2C161.797 20.2 162.693 19.848 163.301 19.224L163.877 20.008C163.109 20.776 162.069 21.192 160.805 21.192C158.517 21.192 156.869 19.544 156.869 17.128ZM160.661 14.072C159.013 14.072 158.197 15.464 158.133 16.648H163.205C163.189 15.496 162.421 14.072 160.661 14.072ZM165.661 19.976L166.285 19.112C166.797 19.704 167.773 20.216 168.829 20.216C170.013 20.216 170.653 19.656 170.653 18.888C170.653 18.04 169.709 17.816 168.669 17.56C167.357 17.256 165.869 16.904 165.869 15.304C165.869 14.104 166.909 13.08 168.749 13.08C170.061 13.08 170.989 13.576 171.613 14.2L171.053 15.032C170.589 14.472 169.741 14.056 168.749 14.056C167.693 14.056 167.037 14.584 167.037 15.272C167.037 16.008 167.917 16.216 168.925 16.456C170.269 16.76 171.821 17.144 171.821 18.856C171.821 20.152 170.781 21.192 168.781 21.192C167.517 21.192 166.445 20.808 165.661 19.976ZM43.4629 37.128C43.4629 34.84 45.0149 33.08 47.3189 33.08C48.7269 33.08 49.5589 33.656 50.1509 34.424L49.3509 35.16C48.8389 34.456 48.1829 34.152 47.3829 34.152C45.7349 34.152 44.7109 35.416 44.7109 37.128C44.7109 38.84 45.7349 40.12 47.3829 40.12C48.1829 40.12 48.8389 39.8 49.3509 39.112L50.1509 39.848C49.5589 40.616 48.7269 41.192 47.3189 41.192C45.0149 41.192 43.4629 39.432 43.4629 37.128ZM55.2088 41.192C52.8568 41.192 51.3848 39.368 51.3848 37.128C51.3848 34.888 52.8568 33.08 55.2088 33.08C57.5608 33.08 59.0328 34.888 59.0328 37.128C59.0328 39.368 57.5608 41.192 55.2088 41.192ZM55.2088 40.12C56.8568 40.12 57.7688 38.712 57.7688 37.128C57.7688 35.56 56.8568 34.152 55.2088 34.152C53.5608 34.152 52.6328 35.56 52.6328 37.128C52.6328 38.712 53.5608 40.12 55.2088 40.12ZM70.3171 41V35.752C70.3171 34.776 69.8851 34.152 68.8931 34.152C68.0931 34.152 67.2451 34.728 66.8451 35.336V41H65.6451V35.752C65.6451 34.776 65.2291 34.152 64.2211 34.152C63.4371 34.152 62.6051 34.728 62.1891 35.352V41H60.9891V33.272H62.1891V34.392C62.5091 33.896 63.5491 33.08 64.6851 33.08C65.8691 33.08 66.5411 33.72 66.7651 34.52C67.1971 33.816 68.2371 33.08 69.3571 33.08C70.7651 33.08 71.5171 33.864 71.5171 35.416V41H70.3171ZM79.9879 41.192C78.8519 41.192 78.2759 40.536 78.2759 39.384V34.328H76.9959V33.272H78.2759V31.16H79.4759V33.272H81.0439V34.328H79.4759V39.128C79.4759 39.704 79.7319 40.12 80.2599 40.12C80.5959 40.12 80.9159 39.976 81.0759 39.8L81.4279 40.696C81.1239 40.984 80.6919 41.192 79.9879 41.192ZM87.5711 41V40.12C86.9311 40.824 86.0511 41.192 85.0111 41.192C83.6991 41.192 82.3071 40.312 82.3071 38.632C82.3071 36.904 83.6991 36.088 85.0111 36.088C86.0671 36.088 86.9471 36.424 87.5711 37.144V35.752C87.5711 34.712 86.7391 34.12 85.6191 34.12C84.6911 34.12 83.9391 34.456 83.2511 35.192L82.6911 34.36C83.5231 33.496 84.5151 33.08 85.7791 33.08C87.4111 33.08 88.7711 33.816 88.7711 35.688V41H87.5711ZM87.5711 39.368V37.912C87.1071 37.272 86.2911 36.952 85.4431 36.952C84.3231 36.952 83.5391 37.656 83.5391 38.648C83.5391 39.624 84.3231 40.328 85.4431 40.328C86.2911 40.328 87.1071 40.008 87.5711 39.368ZM91.1766 41V33.272H92.3766V34.52C93.0006 33.704 93.8966 33.112 94.9526 33.112V34.344C94.8086 34.312 94.6646 34.296 94.4726 34.296C93.7366 34.296 92.7286 34.904 92.3766 35.528V41H91.1766ZM97.0498 32.168C96.6178 32.168 96.2498 31.816 96.2498 31.368C96.2498 30.92 96.6178 30.552 97.0498 30.552C97.4978 30.552 97.8658 30.92 97.8658 31.368C97.8658 31.816 97.4978 32.168 97.0498 32.168ZM97.6578 33.272V41.752C97.6578 43.272 96.8418 44.136 95.3858 44.136C95.0498 44.136 94.7778 44.104 94.5218 44.024L94.6818 43.016C94.8418 43.08 95.0658 43.096 95.2578 43.096C95.9618 43.096 96.4578 42.728 96.4578 41.752V33.272H97.6578ZM104.884 41V40.12C104.244 40.824 103.364 41.192 102.324 41.192C101.012 41.192 99.6196 40.312 99.6196 38.632C99.6196 36.904 101.012 36.088 102.324 36.088C103.38 36.088 104.26 36.424 104.884 37.144V35.752C104.884 34.712 104.052 34.12 102.932 34.12C102.004 34.12 101.252 34.456 100.564 35.192L100.004 34.36C100.836 33.496 101.828 33.08 103.092 33.08C104.724 33.08 106.084 33.816 106.084 35.688V41H104.884ZM104.884 39.368V37.912C104.42 37.272 103.604 36.952 102.756 36.952C101.636 36.952 100.852 37.656 100.852 38.648C100.852 39.624 101.636 40.328 102.756 40.328C103.604 40.328 104.42 40.008 104.884 39.368ZM121.942 41V35.752C121.942 34.776 121.51 34.152 120.518 34.152C119.718 34.152 118.87 34.728 118.47 35.336V41H117.27V35.752C117.27 34.776 116.854 34.152 115.846 34.152C115.062 34.152 114.23 34.728 113.814 35.352V41H112.614V33.272H113.814V34.392C114.134 33.896 115.174 33.08 116.31 33.08C117.494 33.08 118.166 33.72 118.39 34.52C118.822 33.816 119.862 33.08 120.982 33.08C122.39 33.08 123.142 33.864 123.142 35.416V41H121.942ZM130.368 41V40.12C129.728 40.824 128.848 41.192 127.808 41.192C126.496 41.192 125.104 40.312 125.104 38.632C125.104 36.904 126.496 36.088 127.808 36.088C128.864 36.088 129.744 36.424 130.368 37.144V35.752C130.368 34.712 129.536 34.12 128.416 34.12C127.488 34.12 126.736 34.456 126.048 35.192L125.488 34.36C126.32 33.496 127.312 33.08 128.576 33.08C130.208 33.08 131.568 33.816 131.568 35.688V41H130.368ZM130.368 39.368V37.912C129.904 37.272 129.088 36.952 128.24 36.952C127.12 36.952 126.336 37.656 126.336 38.648C126.336 39.624 127.12 40.328 128.24 40.328C129.088 40.328 129.904 40.008 130.368 39.368ZM133.957 42.984L134.565 42.088C135.205 42.856 135.973 43.144 137.077 43.144C138.357 43.144 139.557 42.52 139.557 40.824V39.72C138.997 40.504 138.053 41.096 136.965 41.096C134.949 41.096 133.525 39.592 133.525 37.096C133.525 34.616 134.933 33.08 136.965 33.08C138.005 33.08 138.933 33.592 139.557 34.44V33.272H140.757V40.776C140.757 43.336 138.965 44.136 137.077 44.136C135.765 44.136 134.869 43.88 133.957 42.984ZM139.557 38.776V35.4C139.141 34.728 138.213 34.152 137.253 34.152C135.701 34.152 134.773 35.384 134.773 37.096C134.773 38.792 135.701 40.04 137.253 40.04C138.213 40.04 139.141 39.448 139.557 38.776ZM148.377 41V35.944C148.377 34.584 147.689 34.152 146.649 34.152C145.705 34.152 144.809 34.728 144.361 35.352V41H143.161V33.272H144.361V34.392C144.905 33.752 145.961 33.08 147.113 33.08C148.729 33.08 149.577 33.896 149.577 35.576V41H148.377ZM155.333 32.104H154.421L156.789 29.8H158.037L155.333 32.104ZM151.525 37.128C151.525 34.888 153.125 33.08 155.333 33.08C157.669 33.08 159.045 34.904 159.045 37.224V37.528H152.789C152.885 38.984 153.909 40.2 155.573 40.2C156.453 40.2 157.349 39.848 157.957 39.224L158.533 40.008C157.765 40.776 156.725 41.192 155.461 41.192C153.173 41.192 151.525 39.544 151.525 37.128ZM155.317 34.072C153.669 34.072 152.853 35.464 152.789 36.648H157.861C157.845 35.496 157.077 34.072 155.317 34.072ZM162.941 41.192C161.805 41.192 161.229 40.536 161.229 39.384V34.328H159.949V33.272H161.229V31.16H162.429V33.272H163.997V34.328H162.429V39.128C162.429 39.704 162.685 40.12 163.213 40.12C163.549 40.12 163.869 39.976 164.029 39.8L164.381 40.696C164.077 40.984 163.645 41.192 162.941 41.192ZM166.284 32.168C165.852 32.168 165.484 31.816 165.484 31.368C165.484 30.92 165.852 30.552 166.284 30.552C166.732 30.552 167.1 30.92 167.1 31.368C167.1 31.816 166.732 32.168 166.284 32.168ZM165.692 41V33.272H166.892V41H165.692ZM168.838 37.128C168.838 34.84 170.39 33.08 172.694 33.08C174.102 33.08 174.934 33.656 175.526 34.424L174.726 35.16C174.214 34.456 173.558 34.152 172.758 34.152C171.11 34.152 170.086 35.416 170.086 37.128C170.086 38.84 171.11 40.12 172.758 40.12C173.558 40.12 174.214 39.8 174.726 39.112L175.526 39.848C174.934 40.616 174.102 41.192 172.694 41.192C170.39 41.192 168.838 39.432 168.838 37.128ZM182.04 41V40.12C181.4 40.824 180.52 41.192 179.48 41.192C178.168 41.192 176.776 40.312 176.776 38.632C176.776 36.904 178.168 36.088 179.48 36.088C180.536 36.088 181.416 36.424 182.04 37.144V35.752C182.04 34.712 181.208 34.12 180.088 34.12C179.16 34.12 178.408 34.456 177.72 35.192L177.16 34.36C177.992 33.496 178.984 33.08 180.248 33.08C181.88 33.08 183.24 33.816 183.24 35.688V41H182.04ZM182.04 39.368V37.912C181.576 37.272 180.76 36.952 179.912 36.952C178.792 36.952 178.008 37.656 178.008 38.648C178.008 39.624 178.792 40.328 179.912 40.328C180.76 40.328 181.576 40.008 182.04 39.368Z" fill="black" fillOpacity="0.55"/>
    <path d="M107.078 103V103.5H107.578V103H107.078ZM16.4115 103C16.4115 104.473 17.6054 105.667 19.0781 105.667C20.5509 105.667 21.7448 104.473 21.7448 103C21.7448 101.527 20.5509 100.333 19.0781 100.333C17.6054 100.333 16.4115 101.527 16.4115 103ZM106.578 54V103H107.578V54H106.578ZM107.078 102.5H19.0781V103.5H107.078V102.5Z" fill="black" fillOpacity="0.25"/>
    </svg>
  ),

  Chip: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="237" height="20" viewBox="0 0 237 20" fill="none">
    <path d="M42.248 15V4.328H43.576V13.816H48.536V15H42.248ZM49.5645 11.128C49.5645 8.888 51.1645 7.08 53.3725 7.08C55.7085 7.08 57.0845 8.904 57.0845 11.224V11.528H50.8285C50.9245 12.984 51.9485 14.2 53.6125 14.2C54.4925 14.2 55.3885 13.848 55.9965 13.224L56.5725 14.008C55.8045 14.776 54.7645 15.192 53.5005 15.192C51.2125 15.192 49.5645 13.544 49.5645 11.128ZM53.3565 8.072C51.7085 8.072 50.8925 9.464 50.8285 10.648H55.9005C55.8845 9.496 55.1165 8.072 53.3565 8.072ZM59.6201 6.168C59.1881 6.168 58.8201 5.816 58.8201 5.368C58.8201 4.92 59.1881 4.552 59.6201 4.552C60.0681 4.552 60.4361 4.92 60.4361 5.368C60.4361 5.816 60.0681 6.168 59.6201 6.168ZM59.0281 15V7.272H60.2281V15H59.0281ZM64.5739 15.192C63.4379 15.192 62.8619 14.536 62.8619 13.384V8.328H61.5819V7.272H62.8619V5.16H64.0619V7.272H65.6299V8.328H64.0619V13.128C64.0619 13.704 64.3179 14.12 64.8459 14.12C65.1819 14.12 65.5019 13.976 65.6619 13.8L66.0139 14.696C65.7099 14.984 65.2779 15.192 64.5739 15.192ZM70.701 15.192C68.349 15.192 66.877 13.368 66.877 11.128C66.877 8.888 68.349 7.08 70.701 7.08C73.053 7.08 74.525 8.888 74.525 11.128C74.525 13.368 73.053 15.192 70.701 15.192ZM70.701 14.12C72.349 14.12 73.261 12.712 73.261 11.128C73.261 9.56 72.349 8.152 70.701 8.152C69.053 8.152 68.125 9.56 68.125 11.128C68.125 12.712 69.053 14.12 70.701 14.12ZM76.4813 15V7.272H77.6813V8.52C78.3053 7.704 79.2013 7.112 80.2573 7.112V8.344C80.1133 8.312 79.9693 8.296 79.7773 8.296C79.0413 8.296 78.0333 8.904 77.6813 9.528V15H76.4813ZM91.4875 15V13.848C90.9115 14.632 89.9675 15.192 88.8795 15.192C86.8635 15.192 85.4395 13.656 85.4395 11.144C85.4395 8.68 86.8475 7.08 88.8795 7.08C89.9195 7.08 90.8635 7.592 91.4875 8.44V4.328H92.6875V15H91.4875ZM91.4875 12.904V9.4C91.0555 8.728 90.1275 8.152 89.1675 8.152C87.6155 8.152 86.6875 9.432 86.6875 11.144C86.6875 12.856 87.6155 14.12 89.1675 14.12C90.1275 14.12 91.0555 13.576 91.4875 12.904ZM94.6426 11.128C94.6426 8.888 96.2426 7.08 98.4506 7.08C100.787 7.08 102.163 8.904 102.163 11.224V11.528H95.9066C96.0026 12.984 97.0266 14.2 98.6906 14.2C99.5706 14.2 100.467 13.848 101.075 13.224L101.651 14.008C100.883 14.776 99.8426 15.192 98.5786 15.192C96.2906 15.192 94.6426 13.544 94.6426 11.128ZM98.4346 8.072C96.7866 8.072 95.9706 9.464 95.9066 10.648H100.979C100.963 9.496 100.195 8.072 98.4346 8.072ZM107.783 11.128C107.783 8.84 109.335 7.08 111.639 7.08C113.047 7.08 113.879 7.656 114.471 8.424L113.671 9.16C113.159 8.456 112.503 8.152 111.703 8.152C110.055 8.152 109.031 9.416 109.031 11.128C109.031 12.84 110.055 14.12 111.703 14.12C112.503 14.12 113.159 13.8 113.671 13.112L114.471 13.848C113.879 14.616 113.047 15.192 111.639 15.192C109.335 15.192 107.783 13.432 107.783 11.128ZM120.985 15V14.12C120.345 14.824 119.465 15.192 118.425 15.192C117.113 15.192 115.721 14.312 115.721 12.632C115.721 10.904 117.113 10.088 118.425 10.088C119.481 10.088 120.361 10.424 120.985 11.144V9.752C120.985 8.712 120.153 8.12 119.033 8.12C118.105 8.12 117.353 8.456 116.665 9.192L116.105 8.36C116.937 7.496 117.929 7.08 119.193 7.08C120.825 7.08 122.185 7.816 122.185 9.688V15H120.985ZM120.985 13.368V11.912C120.521 11.272 119.705 10.952 118.857 10.952C117.737 10.952 116.953 11.656 116.953 12.648C116.953 13.624 117.737 14.328 118.857 14.328C119.705 14.328 120.521 14.008 120.985 13.368ZM124.591 15V7.272H125.791V8.52C126.415 7.704 127.311 7.112 128.367 7.112V8.344C128.223 8.312 128.079 8.296 127.887 8.296C127.151 8.296 126.143 8.904 125.791 9.528V15H124.591ZM131.824 15.192C130.688 15.192 130.112 14.536 130.112 13.384V8.328H128.832V7.272H130.112V5.16H131.312V7.272H132.88V8.328H131.312V13.128C131.312 13.704 131.568 14.12 132.096 14.12C132.432 14.12 132.752 13.976 132.912 13.8L133.264 14.696C132.96 14.984 132.528 15.192 131.824 15.192ZM137.695 5.288C137.487 4.968 137.279 4.664 136.943 4.664C136.511 4.664 136.159 5.08 136.159 6.04H135.455C135.455 4.792 135.999 3.896 137.007 3.896C137.631 3.896 137.935 4.344 138.207 4.744C138.431 5.064 138.623 5.368 138.959 5.368C139.391 5.368 139.727 4.952 139.727 3.992H140.463C140.463 5.24 139.919 6.136 138.911 6.136C138.255 6.136 137.967 5.688 137.695 5.288ZM137.951 15.192C135.599 15.192 134.127 13.368 134.127 11.128C134.127 8.888 135.599 7.08 137.951 7.08C140.303 7.08 141.775 8.888 141.775 11.128C141.775 13.368 140.303 15.192 137.951 15.192ZM137.951 14.12C139.599 14.12 140.511 12.712 140.511 11.128C140.511 9.56 139.599 8.152 137.951 8.152C136.303 8.152 135.375 9.56 135.375 11.128C135.375 12.712 136.303 14.12 137.951 14.12ZM143.283 11.128C143.283 8.888 144.883 7.08 147.091 7.08C149.427 7.08 150.803 8.904 150.803 11.224V11.528H144.547C144.643 12.984 145.667 14.2 147.331 14.2C148.211 14.2 149.107 13.848 149.715 13.224L150.291 14.008C149.523 14.776 148.483 15.192 147.219 15.192C144.931 15.192 143.283 13.544 143.283 11.128ZM147.075 8.072C145.427 8.072 144.611 9.464 144.547 10.648H149.619C149.603 9.496 148.835 8.072 147.075 8.072ZM152.075 13.976L152.699 13.112C153.211 13.704 154.187 14.216 155.243 14.216C156.427 14.216 157.067 13.656 157.067 12.888C157.067 12.04 156.123 11.816 155.083 11.56C153.771 11.256 152.283 10.904 152.283 9.304C152.283 8.104 153.323 7.08 155.163 7.08C156.475 7.08 157.403 7.576 158.027 8.2L157.467 9.032C157.003 8.472 156.155 8.056 155.163 8.056C154.107 8.056 153.451 8.584 153.451 9.272C153.451 10.008 154.331 10.216 155.339 10.456C156.683 10.76 158.235 11.144 158.235 12.856C158.235 14.152 157.195 15.192 155.195 15.192C153.931 15.192 152.859 14.808 152.075 13.976ZM163.861 11.128C163.861 8.84 165.413 7.08 167.717 7.08C169.125 7.08 169.957 7.656 170.549 8.424L169.749 9.16C169.237 8.456 168.581 8.152 167.781 8.152C166.133 8.152 165.109 9.416 165.109 11.128C165.109 12.84 166.133 14.12 167.781 14.12C168.581 14.12 169.237 13.8 169.749 13.112L170.549 13.848C169.957 14.616 169.125 15.192 167.717 15.192C165.413 15.192 163.861 13.432 163.861 11.128ZM175.607 15.192C173.255 15.192 171.783 13.368 171.783 11.128C171.783 8.888 173.255 7.08 175.607 7.08C177.959 7.08 179.431 8.888 179.431 11.128C179.431 13.368 177.959 15.192 175.607 15.192ZM175.607 14.12C177.255 14.12 178.167 12.712 178.167 11.128C178.167 9.56 177.255 8.152 175.607 8.152C173.959 8.152 173.031 9.56 173.031 11.128C173.031 12.712 173.959 14.12 175.607 14.12ZM190.716 15V9.752C190.716 8.776 190.284 8.152 189.292 8.152C188.492 8.152 187.644 8.728 187.244 9.336V15H186.044V9.752C186.044 8.776 185.628 8.152 184.62 8.152C183.836 8.152 183.004 8.728 182.588 9.352V15H181.388V7.272H182.588V8.392C182.908 7.896 183.948 7.08 185.084 7.08C186.268 7.08 186.94 7.72 187.164 8.52C187.596 7.816 188.635 7.08 189.756 7.08C191.164 7.08 191.916 7.864 191.916 9.416V15H190.716ZM197.986 11.128C197.986 8.84 199.538 7.08 201.842 7.08C203.25 7.08 204.082 7.656 204.674 8.424L203.874 9.16C203.362 8.456 202.706 8.152 201.906 8.152C200.258 8.152 199.234 9.416 199.234 11.128C199.234 12.84 200.258 14.12 201.906 14.12C202.706 14.12 203.362 13.8 203.874 13.112L204.674 13.848C204.082 14.616 203.25 15.192 201.842 15.192C199.538 15.192 197.986 13.432 197.986 11.128ZM211.588 15V9.912C211.588 8.552 210.884 8.152 209.844 8.152C208.916 8.152 208.02 8.728 207.556 9.352V15H206.356V4.328H207.556V8.392C208.1 7.752 209.156 7.08 210.324 7.08C211.94 7.08 212.788 7.864 212.788 9.544V15H211.588ZM215.776 6.168C215.344 6.168 214.976 5.816 214.976 5.368C214.976 4.92 215.344 4.552 215.776 4.552C216.224 4.552 216.592 4.92 216.592 5.368C216.592 5.816 216.224 6.168 215.776 6.168ZM215.184 15V7.272H216.384V15H215.184ZM219.978 17.944H218.778V7.272H219.978V8.424C220.538 7.64 221.498 7.08 222.586 7.08C224.618 7.08 226.026 8.616 226.026 11.128C226.026 13.624 224.618 15.192 222.586 15.192C221.53 15.192 220.602 14.696 219.978 13.832V17.944ZM224.762 11.128C224.762 9.416 223.834 8.152 222.282 8.152C221.338 8.152 220.394 8.712 219.978 9.384V12.872C220.394 13.544 221.338 14.12 222.282 14.12C223.834 14.12 224.762 12.84 224.762 11.128Z" fill="black" fillOpacity="0.55"/>
    <path d="M4.33333 10C4.33333 11.4728 5.52724 12.6667 7 12.6667C8.47276 12.6667 9.66667 11.4728 9.66667 10C9.66667 8.52724 8.47276 7.33333 7 7.33333C5.52724 7.33333 4.33333 8.52724 4.33333 10ZM37 9.5H7V10.5H37V9.5Z" fill="black" fillOpacity="0.25"/>
    </svg>
  ),

  OnOff: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="141" viewBox="0 0 220 141" fill="none">
    <path d="M10.7949 133V122.328H15.5469C17.4029 122.328 18.5389 123.448 18.5389 125.048C18.5389 126.392 17.6429 127.288 16.6669 127.496C17.8029 127.672 18.7469 128.84 18.7469 130.12C18.7469 131.832 17.6109 133 15.6589 133H10.7949ZM12.1229 126.952H15.3229C16.5229 126.952 17.1629 126.216 17.1629 125.24C17.1629 124.28 16.5229 123.512 15.3229 123.512H12.1229V126.952ZM12.1229 131.816H15.3869C16.6349 131.816 17.3709 131.112 17.3709 129.976C17.3709 129 16.6989 128.136 15.3869 128.136H12.1229V131.816ZM24.1854 133.192C21.8334 133.192 20.3614 131.368 20.3614 129.128C20.3614 126.888 21.8334 125.08 24.1854 125.08C26.5374 125.08 28.0094 126.888 28.0094 129.128C28.0094 131.368 26.5374 133.192 24.1854 133.192ZM24.1854 132.12C25.8334 132.12 26.7454 130.712 26.7454 129.128C26.7454 127.56 25.8334 126.152 24.1854 126.152C22.5374 126.152 21.6094 127.56 21.6094 129.128C21.6094 130.712 22.5374 132.12 24.1854 132.12ZM31.9176 133.192C30.7816 133.192 30.2056 132.536 30.2056 131.384V126.328H28.9256V125.272H30.2056V123.16H31.4056V125.272H32.9736V126.328H31.4056V131.128C31.4056 131.704 31.6616 132.12 32.1896 132.12C32.5256 132.12 32.8456 131.976 33.0056 131.8L33.3576 132.696C33.0536 132.984 32.6216 133.192 31.9176 133.192ZM37.4528 123.288C37.2448 122.968 37.0368 122.664 36.7008 122.664C36.2688 122.664 35.9168 123.08 35.9168 124.04H35.2128C35.2128 122.792 35.7568 121.896 36.7648 121.896C37.3888 121.896 37.6927 122.344 37.9648 122.744C38.1888 123.064 38.3808 123.368 38.7168 123.368C39.1488 123.368 39.4848 122.952 39.4848 121.992H40.2208C40.2208 123.24 39.6768 124.136 38.6688 124.136C38.0128 124.136 37.7248 123.688 37.4528 123.288ZM39.5008 133V132.12C38.8608 132.824 37.9808 133.192 36.9408 133.192C35.6288 133.192 34.2368 132.312 34.2368 130.632C34.2368 128.904 35.6288 128.088 36.9408 128.088C37.9968 128.088 38.8768 128.424 39.5008 129.144V127.752C39.5008 126.712 38.6688 126.12 37.5488 126.12C36.6208 126.12 35.8688 126.456 35.1808 127.192L34.6208 126.36C35.4528 125.496 36.4448 125.08 37.7088 125.08C39.3408 125.08 40.7008 125.816 40.7008 127.688V133H39.5008ZM39.5008 131.368V129.912C39.0368 129.272 38.2208 128.952 37.3728 128.952C36.2528 128.952 35.4688 129.656 35.4688 130.648C35.4688 131.624 36.2528 132.328 37.3728 132.328C38.2208 132.328 39.0368 132.008 39.5008 131.368ZM46.4823 133.192C44.1303 133.192 42.6583 131.368 42.6583 129.128C42.6583 126.888 44.1303 125.08 46.4823 125.08C48.8343 125.08 50.3063 126.888 50.3063 129.128C50.3063 131.368 48.8343 133.192 46.4823 133.192ZM46.4823 132.12C48.1303 132.12 49.0423 130.712 49.0423 129.128C49.0423 127.56 48.1303 126.152 46.4823 126.152C44.8343 126.152 43.9062 127.56 43.9062 129.128C43.9062 130.712 44.8343 132.12 46.4823 132.12ZM61.9875 133V131.848C61.4115 132.632 60.4675 133.192 59.3795 133.192C57.3635 133.192 55.9395 131.656 55.9395 129.144C55.9395 126.68 57.3475 125.08 59.3795 125.08C60.4195 125.08 61.3635 125.592 61.9875 126.44V122.328H63.1875V133H61.9875ZM61.9875 130.904V127.4C61.5555 126.728 60.6275 126.152 59.6675 126.152C58.1155 126.152 57.1875 127.432 57.1875 129.144C57.1875 130.856 58.1155 132.12 59.6675 132.12C60.6275 132.12 61.5555 131.576 61.9875 130.904ZM65.1426 129.128C65.1426 126.888 66.7426 125.08 68.9506 125.08C71.2866 125.08 72.6626 126.904 72.6626 129.224V129.528H66.4066C66.5026 130.984 67.5266 132.2 69.1906 132.2C70.0706 132.2 70.9666 131.848 71.5746 131.224L72.1506 132.008C71.3826 132.776 70.3426 133.192 69.0786 133.192C66.7906 133.192 65.1426 131.544 65.1426 129.128ZM68.9346 126.072C67.2866 126.072 66.4706 127.464 66.4066 128.648H71.4786C71.4626 127.496 70.6946 126.072 68.9346 126.072ZM78.7313 133V122.328H79.9313V133H78.7313ZM82.917 124.168C82.485 124.168 82.117 123.816 82.117 123.368C82.117 122.92 82.485 122.552 82.917 122.552C83.365 122.552 83.733 122.92 83.733 123.368C83.733 123.816 83.365 124.168 82.917 124.168ZM82.325 133V125.272H83.525V133H82.325ZM85.9028 134.984L86.5108 134.088C87.1508 134.856 87.9188 135.144 89.0228 135.144C90.3028 135.144 91.5028 134.52 91.5028 132.824V131.72C90.9428 132.504 89.9988 133.096 88.9108 133.096C86.8948 133.096 85.4708 131.592 85.4708 129.096C85.4708 126.616 86.8788 125.08 88.9108 125.08C89.9508 125.08 90.8788 125.592 91.5028 126.44V125.272H92.7028V132.776C92.7028 135.336 90.9108 136.136 89.0228 136.136C87.7108 136.136 86.8148 135.88 85.9028 134.984ZM91.5028 130.776V127.4C91.0868 126.728 90.1588 126.152 89.1988 126.152C87.6468 126.152 86.7188 127.384 86.7188 129.096C86.7188 130.792 87.6468 132.04 89.1988 132.04C90.1588 132.04 91.0868 131.448 91.5028 130.776ZM99.9383 133V132.12C99.2983 132.824 98.4183 133.192 97.3783 133.192C96.0663 133.192 94.6743 132.312 94.6743 130.632C94.6743 128.904 96.0663 128.088 97.3783 128.088C98.4343 128.088 99.3143 128.424 99.9383 129.144V127.752C99.9383 126.712 99.1063 126.12 97.9863 126.12C97.0583 126.12 96.3063 126.456 95.6183 127.192L95.0583 126.36C95.8903 125.496 96.8823 125.08 98.1463 125.08C99.7783 125.08 101.138 125.816 101.138 127.688V133H99.9383ZM99.9383 131.368V129.912C99.4743 129.272 98.6583 128.952 97.8103 128.952C96.6903 128.952 95.9062 129.656 95.9062 130.648C95.9062 131.624 96.6903 132.328 97.8103 132.328C98.6583 132.328 99.4743 132.008 99.9383 131.368ZM107.221 129.128C107.221 126.888 108.821 125.08 111.029 125.08C113.365 125.08 114.741 126.904 114.741 129.224V129.528H108.485C108.581 130.984 109.605 132.2 111.269 132.2C112.149 132.2 113.045 131.848 113.653 131.224L114.229 132.008C113.461 132.776 112.421 133.192 111.157 133.192C108.869 133.192 107.221 131.544 107.221 129.128ZM111.013 126.072C109.365 126.072 108.549 127.464 108.485 128.648H113.557C113.541 127.496 112.773 126.072 111.013 126.072ZM126.409 133V131.848C125.833 132.632 124.889 133.192 123.801 133.192C121.785 133.192 120.361 131.656 120.361 129.144C120.361 126.68 121.769 125.08 123.801 125.08C124.841 125.08 125.785 125.592 126.409 126.44V122.328H127.609V133H126.409ZM126.409 130.904V127.4C125.977 126.728 125.049 126.152 124.089 126.152C122.537 126.152 121.609 127.432 121.609 129.144C121.609 130.856 122.537 132.12 124.089 132.12C125.049 132.12 125.977 131.576 126.409 130.904ZM129.565 129.128C129.565 126.888 131.164 125.08 133.373 125.08C135.709 125.08 137.085 126.904 137.085 129.224V129.528H130.829C130.924 130.984 131.949 132.2 133.613 132.2C134.493 132.2 135.389 131.848 135.997 131.224L136.573 132.008C135.805 132.776 134.765 133.192 133.501 133.192C131.213 133.192 129.565 131.544 129.565 129.128ZM133.357 126.072C131.709 126.072 130.893 127.464 130.829 128.648H135.901C135.885 127.496 135.117 126.072 133.357 126.072ZM138.356 131.976L138.98 131.112C139.492 131.704 140.468 132.216 141.524 132.216C142.708 132.216 143.348 131.656 143.348 130.888C143.348 130.04 142.404 129.816 141.364 129.56C140.052 129.256 138.564 128.904 138.564 127.304C138.564 126.104 139.604 125.08 141.444 125.08C142.756 125.08 143.684 125.576 144.308 126.2L143.748 127.032C143.284 126.472 142.436 126.056 141.444 126.056C140.388 126.056 139.732 126.584 139.732 127.272C139.732 128.008 140.612 128.216 141.62 128.456C142.964 128.76 144.516 129.144 144.516 130.856C144.516 132.152 143.476 133.192 141.476 133.192C140.212 133.192 139.14 132.808 138.356 131.976ZM146.466 133V122.328H147.666V133H146.466ZM150.651 124.168C150.219 124.168 149.851 123.816 149.851 123.368C149.851 122.92 150.219 122.552 150.651 122.552C151.099 122.552 151.467 122.92 151.467 123.368C151.467 123.816 151.099 124.168 150.651 124.168ZM150.059 133V125.272H151.259V133H150.059ZM153.637 134.984L154.245 134.088C154.885 134.856 155.653 135.144 156.757 135.144C158.037 135.144 159.237 134.52 159.237 132.824V131.72C158.677 132.504 157.733 133.096 156.645 133.096C154.629 133.096 153.205 131.592 153.205 129.096C153.205 126.616 154.613 125.08 156.645 125.08C157.685 125.08 158.613 125.592 159.237 126.44V125.272H160.437V132.776C160.437 135.336 158.645 136.136 156.757 136.136C155.445 136.136 154.549 135.88 153.637 134.984ZM159.237 130.776V127.4C158.821 126.728 157.893 126.152 156.933 126.152C155.381 126.152 154.453 127.384 154.453 129.096C154.453 130.792 155.381 132.04 156.933 132.04C157.893 132.04 158.821 131.448 159.237 130.776ZM167.673 133V132.12C167.033 132.824 166.153 133.192 165.113 133.192C163.801 133.192 162.409 132.312 162.409 130.632C162.409 128.904 163.801 128.088 165.113 128.088C166.169 128.088 167.049 128.424 167.673 129.144V127.752C167.673 126.712 166.841 126.12 165.721 126.12C164.793 126.12 164.041 126.456 163.353 127.192L162.793 126.36C163.625 125.496 164.617 125.08 165.881 125.08C167.513 125.08 168.873 125.816 168.873 127.688V133H167.673ZM167.673 131.368V129.912C167.209 129.272 166.393 128.952 165.545 128.952C164.425 128.952 163.641 129.656 163.641 130.648C163.641 131.624 164.425 132.328 165.545 132.328C166.393 132.328 167.209 132.008 167.673 131.368Z" fill="black" fillOpacity="0.55"/>
    <path d="M208.911 6C208.911 7.47276 210.105 8.66667 211.578 8.66667C213.051 8.66667 214.245 7.47276 214.245 6C214.245 4.52724 213.051 3.33333 211.578 3.33333C210.105 3.33333 208.911 4.52724 208.911 6ZM211.578 133V133.5H212.078V133H211.578ZM211.078 6V133H212.078V6H211.078ZM211.578 132.5H178.078V133.5H211.578V132.5Z" fill="black" fillOpacity="0.25"/>
    </svg>
  )
};

export default SvgIcons;
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
### 📄 Arquivo: `src/constants/index.js`

```javascript
/**
 * Constantes globais do projeto
 * Centralize aqui valores que podem ser alterados ou reutilizados em várias partes do projeto
 */

// Navegação
export const NAVIGATION = {
  HOME: '/',
  COMPRAR: '#modelos',
}

// Nome do site e da empresa
export const SITE = {
  NAME: 'Enoc maquininha',
  TITLE: 'Enoc maquininha',
  DESCRIPTION: 'Soluções de pagamento para seu negócio',
}

// URLs para recursos
export const URLS = {
  MODELS_SECTION: '#modelos',
  TAXAS_SECTION: '#taxas-section',
}

// Textos reutilizáveis
export const TEXTS = {
  BUY_NOW: 'Comprar Agora',
  BUY: 'Comprar',
  LOADING: 'Carregando...',
  MODELS: 'Modelos',
  VIEW_MORE: 'Ver mais',
  PROMOTION_NOTICE: 'Promoção para novos usuários: Ao adquirir uma maquininha Point, o usuário aproveita taxas promocionais nos primeiros 30 dias ou até R$ 5.000 em vendas (o que ocorrer primeiro)',
}

// Estilos comuns reusáveis como classes Tailwind
export const STYLES = {
  PRIMARY_BUTTON: 'bg-brand hover:bg-brand-dark text-white rounded-md px-4 py-2 flex items-center gap-2',
  SECONDARY_BUTTON: 'bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-4 py-2',
  LINK: 'text-brand hover:text-brand-dark underline',
}

// Breakpoints responsivos
export const BREAKPOINTS = {
  MOBILE: 'md',
  TABLET: 'lg',
  DESKTOP: 'xl',
}
```


---
### 📄 Arquivo: `src/constants/taxasConstants.js`

```javascript
/**
 * Constantes relacionadas às taxas do serviço
 */

// Rótulos para as faixas de valores
export const RANGE_LABELS = [
  'Promo',
  'Até R$ 2 mil',
  'Até R$ 5 mil',
  '+ R$ 5 mil'
];

// Valores das taxas por faixa
export const TAX_RANGES = [
  // Taxa promocional
  { debito: '0,74', credito: '0,74', credito12x: '8,99' },
  // Até R$ 2 mil
  { debito: '1,99', credito: '4,98', credito12x: '22,59' },
  // Até R$ 5 mil
  { debito: '1,67', credito: '3,57', credito12x: '13,99' },
  // Acima de R$ 5 mil
  { debito: '1,65', credito: '3,55', credito12x: '13,79' },
];

// Rótulos para os tipos de taxas
export const TAX_TYPE_LABELS = ['DÉBITO', 'CRÉDITO', 'CRÉDITO 12x'];

// Taxas detalhadas para o modal
export const DETAILED_RATES = {
  pix: { promo: "0%", ate2mil: "0,49%", de2a5mil: "0,49%", de5a10mil: "0,49%", de10a15mil: "0,49%", acima15mil: "0,49%" },
  debito: { promo: "0,74%", ate2mil: "1,99%", de2a5mil: "1,67%", de5a10mil: "1,65%", de10a15mil: "1,61%", acima15mil: "1,41%" },
  credito: {
    vista: { promo: "0,74%", ate2mil: "4,98%", de2a5mil: "3,57%", de5a10mil: "3,55%", de10a15mil: "3,51%", acima15mil: "3,31%" },
    parcelas: [
      { desc: "Em 2x", promo: "3,99%", ate2mil: "9,90%", de2a5mil: "7,79%", de5a10mil: "7,59%", de10a15mil: "7,49%", acima15mil: "5,69%" },
      { desc: "Em 3x", promo: "4,99%", ate2mil: "11,28%", de2a5mil: "8,45%", de5a10mil: "8,26%", de10a15mil: "8,21%", acima15mil: "6,47%" },
      { desc: "Em 4x", promo: "5,99%", ate2mil: "12,64%", de2a5mil: "9,33%", de5a10mil: "9,14%", de10a15mil: "9,09%", acima15mil: "7,33%" },
      { desc: "Em 5x", promo: "6,99%", ate2mil: "13,97%", de2a5mil: "10,20%", de5a10mil: "10,01%", de10a15mil: "9,96%", acima15mil: "8,14%" },
      { desc: "Em 6x", promo: "7,99%", ate2mil: "15,27%", de2a5mil: "11,09%", de5a10mil: "10,89%", de10a15mil: "10,79%", acima15mil: "8,69%" },
      { desc: "Em 7x", promo: "8,99%", ate2mil: "16,55%", de2a5mil: "11,89%", de5a10mil: "11,70%", de10a15mil: "11,65%", acima15mil: "9,91%" },
      { desc: "Em 8x", promo: "8,99%", ate2mil: "17,81%", de2a5mil: "12,74%", de5a10mil: "12,55%", de10a15mil: "12,50%", acima15mil: "10,47%" },
      { desc: "Em 9x", promo: "8,99%", ate2mil: "19,04%", de2a5mil: "13,24%", de5a10mil: "13,05%", de10a15mil: "13,00%", acima15mil: "11,76%" },
      { desc: "Em 10x", promo: "8,99%", ate2mil: "20,24%", de2a5mil: "13,49%", de5a10mil: "13,29%", de10a15mil: "13,19%", acima15mil: "11,79%" },
      { desc: "Em 11x", promo: "8,99%", ate2mil: "21,43%", de2a5mil: "13,85%", de5a10mil: "13,66%", de10a15mil: "13,61%", acima15mil: "13,21%" },
      { desc: "Em 12x", promo: "8,99%", ate2mil: "22,59%", de2a5mil: "13,99%", de5a10mil: "13,79%", de10a15mil: "13,69%", acima15mil: "13,49%" }
    ]
  }
};

// Mapeamento e rótulos para faixas mobile
export const MOBILE_RANGE_MAPPING = ['ate2mil', 'de2a5mil', 'de5a10mil', 'de10a15mil', 'acima15mil'];
export const MOBILE_RANGE_LABELS = ['2 MIL', '2 A 5 MIL', '5 A 10 MIL', '10 A 15 MIL', 'ACIMA 15 MIL'];
```


---
### 📄 Arquivo: `src/contexts/AuthContext.js`

```javascript
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
```


---
### 📄 Arquivo: `src/contexts/TaxasModalContext.js`

```javascript
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

import { staticProductData } from './staticProductData';

export const fetchProductData = async () => {
  try {
    console.log('Iniciando fetchProductData...');
    
    // Definir URL base para a requisição API
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    console.log(`Buscando dados da API em: ${baseUrl}/api/products`);
    
    // Configuração para não usar cache do navegador
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    };
    
    // Tentar buscar dados da API
    const response = await fetch(`${baseUrl}/api/products`, fetchOptions);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar produtos da API: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Dados recebidos da API:', data);
    
    // Verificar se os dados estão na estrutura esperada
    if (!data || !data.products || !Array.isArray(data.products) || data.products.length === 0) {
      console.warn('Dados inválidos ou vazios da API, usando staticProductData como fallback');
      return staticProductData;
    }
    
    // Combinar dados estáticos com os dados do banco
    // Usamos os dados estáticos como base e atualizamos os campos específicos
    const combinedProducts = staticProductData.map(staticProduct => {
      // Procurar o produto correspondente no banco de dados
      const dbProduct = data.products.find(p => p.name === staticProduct.name);
      
      // Se encontrou o produto no banco, atualizar valores relevantes
      if (dbProduct) {
        // Importante: Para linkOperadoras, não usar o operador || para fallback
        // Se existir no banco de dados, usar SOMENTE os dados do banco
        // Se não existir no banco, só então usar os dados estáticos
        const linkOperadoras = dbProduct.linkOperadoras !== undefined 
          ? dbProduct.linkOperadoras 
          : staticProduct.linkOperadoras;
        
        return {
          ...staticProduct,                           // Manter a estrutura base do produto estático
          price: dbProduct.price || staticProduct.price, // Usar preço do banco ou manter o estático
          urlBuy: dbProduct.urlBuy || staticProduct.urlBuy, // Usar URL de compra do banco ou manter o estático
          linkOperadoras: linkOperadoras,             // Usar APENAS os dados de operadoras do banco
          linkPedido: dbProduct.linkPedido || staticProduct.linkPedido // Usar link de pedido do banco ou manter o estático
        };
      }
      
      // Se não encontrou no banco, retornar o produto estático original
      return staticProduct;
    });
    
    console.log(`${combinedProducts.length} produtos combinados com sucesso`);
    return combinedProducts;
    
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    console.warn('Usando dados estáticos como fallback devido a erro');
    return staticProductData;
  }
};
```


---
### 📄 Arquivo: `src/data/staticProductData.js`

```javascript
export const staticProductData = [
  {
    _id: "1",
    name: "Point Smart 2",
    normalPrice: "840,80",
    price: "239,99",
    urlBuy: "/comprar/point-smart-2",
    imageUrl: "/images/devices/device-smart.webp",
    urlInfo: "/maquininhas/point-smart-2",
    info: "A maquininha mais avançada",
    linkOperadoras: [
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
    _id: "2",
    name: "Point Pro 3",
    normalPrice: "718,80",
    price: "89,99",
    imageUrl: "/images/devices/device-pro.webp",
    urlBuy: "/comprar/point-pro-3",
    urlInfo: "/maquininhas/point-pro-3",
    info: "Bateria que dura o dia todo",
    linkOperadoras: [
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
    _id: "3",
    name: "Point Air",
    normalPrice: "358,80",
    price: "59,99",
    urlBuy: "/comprar/point-air",
    urlInfo: "/maquininhas/point-air",
    imageUrl: "/images/devices/device-air.webp",
    info: "Não precisa de celular",
    linkOperadoras: [
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
    _id: "4",
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
```


---
### 📄 Arquivo: `src/hooks/useProduct.js`

```javascript
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Hook personalizado para gerenciar o estado do produto
 * @param {string} productId - ID do produto
 * @returns {Object} - Estado e funções do produto
 */
export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;

      try {
        setIsLoading(true);
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data.product);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar produto:', err);
        setError('Falha ao carregar o produto');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const updateProduct = async (updatedData) => {
    try {
      setIsLoading(true);
      const response = await axios.put(`/api/products/${productId}`, updatedData);
      setProduct(response.data.product);
      setError(null);
      return true;
    } catch (err) {
      console.error('Erro ao atualizar produto:', err);
      setError('Falha ao atualizar o produto');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/products/${productId}`);
      setProduct(null);
      setError(null);
      return true;
    } catch (err) {
      console.error('Erro ao excluir produto:', err);
      setError('Falha ao excluir o produto');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    product,
    isLoading,
    error,
    updateProduct,
    deleteProduct
  };
};
```


---
### 📄 Arquivo: `src/hooks/useProductCard.js`

```javascript
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Hook para gerenciar o estado do produto no cliente
 * @param {string} productId - ID do produto
 * @returns {Object} - Estado e funções do produto
 */
export const useProductCard = (productId) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;

      try {
        setIsLoading(true);
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data.product);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar produto:', err);
        setError('Falha ao carregar o produto');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return {
    product,
    isLoading,
    error
  };
};
```


---
### 📄 Arquivo: `src/lib/mongodb.js`

```javascript
import { MongoClient } from 'mongodb';

// Debug de variáveis de ambiente
console.log('==== DEBUG ENV VARS ====');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('MONGODB_URI definido?', !!process.env.MONGODB_URI);
console.log('MONGODB_DB definido?', !!process.env.MONGODB_DB);
// Se precisar ver o valor real (cuidado com dados sensíveis):
// console.log('MONGODB_URI:', process.env.MONGODB_URI);
// console.log('MONGODB_DB:', process.env.MONGODB_DB);
console.log('========================');

// Variáveis de fallback para quando as vars de ambiente falham
const FALLBACK_MONGODB_URI = 'mongodb+srv://encmaquininhas:0OEuZVHbcuC2PUZk@cluster0.sgebrtm.mongodb.net';

// Variável para controlar se já mostramos o aviso sobre variáveis de ambiente
let missingEnvWarningShown = false;

// Verificar variáveis de ambiente obrigatórias
const mongoUri = process.env.MONGODB_URI || FALLBACK_MONGODB_URI;
if (!process.env.MONGODB_URI) {
  if (!missingEnvWarningShown) {
    console.warn('Aviso: variável de ambiente MONGODB_URI não definida. Usando URI de fallback.');
    missingEnvWarningShown = true;
  }
} else {
  console.log(`MongoDB URI encontrada: ${mongoUri.substring(0, 20)}...`);
}

// Definir nome do banco de dados (usar um nome padrão se não estiver definido)
const dbName = process.env.MONGODB_DB || 'maquininhas-point';
if (mongoUri) {
  console.log(`Usando banco de dados: ${dbName}`);
}

// Configuração de conexão do MongoDB
const options = {
  connectTimeoutMS: 30000, // 30 segundos de timeout
  socketTimeoutMS: 45000,  // 45 segundos
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // timeout para seleção de servidor
};

console.log('Opções de conexão configuradas:', JSON.stringify(options));

let client;
let clientPromise;

// Objeto de banco de dados mock para quando não temos MongoDB
const mockDb = {
  collection: (name) => ({
    find: () => ({ toArray: async () => [] }),
    findOne: async () => null,
    insertOne: async () => ({ insertedId: 'mock-id' }),
    insertMany: async (docs) => ({ insertedCount: docs.length, insertedIds: docs.map((_, i) => `mock-id-${i}`) }),
    updateOne: async () => ({ modifiedCount: 1 }),
    deleteOne: async () => ({ deletedCount: 1 }),
    deleteMany: async () => ({ deletedCount: 0 }),
    countDocuments: async () => 0,
  }),
  listCollections: () => ({ toArray: async () => [] }),
  createCollection: async (name) => ({ name }),
};

// Sempre inicializar cliente, mesmo com URI de fallback
console.log('Iniciando conexão com MongoDB usando URI:', mongoUri.substring(0, 20) + '...');

// Usar singleton em desenvolvimento para manter a conexão ao hot-reloading
if (process.env.NODE_ENV === 'development') {
  console.log('Modo de desenvolvimento detectado, usando singleton para conexão MongoDB');
  
  // Em desenvolvimento, use uma variável global para que o valor
  // seja preservado entre recarregamentos de módulo causados pelo HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    console.log('Criando nova conexão MongoDB (primeira vez)');
    client = new MongoClient(mongoUri, options);
    global._mongoClientPromise = client.connect()
      .then(client => {
        console.log('Conexão MongoDB estabelecida com sucesso (dev)');
        return client;
      })
      .catch(err => {
        console.error('Erro ao conectar ao MongoDB em desenvolvimento:', err);
        return { client: null, db: null };
      });
  } else {
    console.log('Reutilizando conexão MongoDB existente (global)');
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Em produção, é melhor não usar uma variável global.
  console.log('Modo de produção detectado, criando nova conexão MongoDB');
  client = new MongoClient(mongoUri, options);
  clientPromise = client.connect()
    .then(client => {
      console.log('Conexão MongoDB estabelecida com sucesso (prod)');
      return client;
    })
    .catch(err => {
      console.error('Erro ao conectar ao MongoDB em produção:', err);
      return { client: null, db: null };
    });
}

// Exporta a função para uso no servidor
export async function connectToDatabase() {
  try {
    if (typeof window !== 'undefined') {
      console.warn('Tentativa de conexão ao MongoDB no lado do cliente');
      throw new Error('Este módulo só pode ser usado no lado do servidor');
    }

    // Tentar conectar ao MongoDB
    console.log('Aguardando promessa de conexão MongoDB...');
    const client = await clientPromise;
    
    // Se falhou a conexão, usar mock
    if (!client || !client.db) {
      console.warn('Falha na conexão com MongoDB, usando banco de dados mock');
      return { client: null, db: mockDb };
    }
    
    console.log('Conexão MongoDB bem-sucedida, obtendo referência para banco de dados:', dbName);
    const db = client.db(dbName);
    
    // Verificar se podemos listar as coleções (teste de conexão)
    try {
      const collections = await db.listCollections().toArray();
      console.log(`Conexão verificada. Coleções disponíveis: ${collections.map(c => c.name).join(', ') || 'nenhuma'}`);
    } catch (verifyError) {
      console.error('Erro ao verificar conexão (listar coleções):', verifyError);
    }
    
    return { client, db };
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    console.warn('Usando banco de dados mock devido a erro de conexão');
    return { client: null, db: mockDb };
  }
}

// Função auxiliar para obter uma coleção específica
export async function getCollection(collectionName) {
  try {
    console.log(`Tentando obter coleção: ${collectionName}`);
    const { db } = await connectToDatabase();
    return db.collection(collectionName);
  } catch (error) {
    console.error(`Erro ao obter coleção ${collectionName}:`, error);
    return mockDb.collection(collectionName);
  }
}
```


---
### 📄 Arquivo: `src/lib/productCache.js`

```javascript
/**
 * Sistema de cache para produtos no lado do servidor
 * Evita requisições frequentes ao MongoDB
 */

// Armazenamento de cache - só existe no lado do servidor
let productsCache = null;
let cacheTimestamp = null;
let cacheValid = false;

// Tempo máximo de validade do cache em ms (15 minutos)
const CACHE_MAX_AGE = 15 * 60 * 1000;

/**
 * Verifica se o cache atual é válido
 * @returns {boolean} - true se o cache for válido, false caso contrário
 */
export function isCacheValid() {
  // Se não temos cache ou se ele não foi marcado como válido, retorna falso
  if (!productsCache || !cacheValid) {
    return false;
  }
  
  // Se temos cache mas não temos timestamp, considere inválido
  if (!cacheTimestamp) {
    return false;
  }
  
  // Verifica se o cache não expirou
  const now = Date.now();
  const age = now - cacheTimestamp;
  
  return age < CACHE_MAX_AGE;
}

/**
 * Obtém os produtos do cache
 * @returns {Array|null} - Array de produtos ou null se o cache não for válido
 */
export function getCachedProducts() {
  if (isCacheValid()) {
    console.log('Usando produtos do cache (idade: ' + ((Date.now() - cacheTimestamp) / 1000).toFixed(2) + 's)');
    return productsCache;
  }
  return null;
}

/**
 * Armazena produtos no cache
 * @param {Array} products - Array de produtos para armazenar
 */
export function setCachedProducts(products) {
  if (!products || !Array.isArray(products)) {
    console.warn('Tentativa de armazenar dados inválidos no cache');
    return;
  }
  
  console.log(`Atualizando cache com ${products.length} produtos`);
  productsCache = [...products]; // Clone para evitar referência direta
  cacheTimestamp = Date.now();
  cacheValid = true;
}

/**
 * Invalida o cache, forçando uma nova busca no banco na próxima requisição
 */
export function invalidateCache() {
  console.log('Cache de produtos invalidado');
  cacheValid = false;
}

/**
 * Obtém informações sobre o estado do cache
 * @returns {Object} - Informações sobre o cache
 */
export function getCacheInfo() {
  return {
    hasCache: !!productsCache,
    itemCount: productsCache ? productsCache.length : 0,
    isValid: cacheValid,
    age: cacheTimestamp ? Date.now() - cacheTimestamp : null,
    timestamp: cacheTimestamp,
    maxAge: CACHE_MAX_AGE
  };
}
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
### 📄 Arquivo: `src/pages/api/db-status.js`

```javascript
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    // Tentar conectar ao MongoDB
    console.log('Verificando conexão com MongoDB...');
    const { client, db } = await connectToDatabase();
    
    // Verificar se a conexão está ativa
    const isConnected = !!client && !!db && !!client.topology && client.topology.isConnected();
    
    if (!isConnected) {
      return res.status(500).json({
        status: 'error',
        message: 'Falha na conexão com o MongoDB',
        connected: false
      });
    }
    
    // Listar coleções
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);
    
    // Verificar se a coleção de produtos existe e quantos documentos tem
    let productsCount = 0;
    if (collectionNames.includes('products')) {
      productsCount = await db.collection('products').countDocuments();
    }
    
    // Buscar informações do servidor MongoDB
    const serverInfo = await db.command({ serverStatus: 1 });
    
    return res.status(200).json({
      status: 'success',
      connected: true,
      database: {
        name: db.databaseName,
        collections: collectionNames,
        productsCount
      },
      server: {
        version: serverInfo.version,
        uptime: serverInfo.uptime,
        connections: serverInfo.connections
      }
    });
  } catch (error) {
    console.error('Erro ao verificar status do MongoDB:', error);
    return res.status(500).json({
      status: 'error',
      message: `Erro ao conectar ao MongoDB: ${error.message}`,
      connected: false,
      error: error.stack
    });
  }
}

export const config = {
  runtime: 'nodejs'
};
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
### 📄 Arquivo: `src/scripts/create-admin.js`

```javascript
// Script para criar um usuário administrador no banco de dados
const { MongoClient } = require('mongodb');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

// Credenciais do usuário admin
const ADMIN_EMAIL = 'enoc@enocmaquinihas.com.br';
const ADMIN_PASSWORD = 'EnocHenrique12345678@';
const SALT_ROUNDS = 10;

// URL do MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://encmaquininhas:0OEuZVHbcuC2PUZk@cluster0.sgebrtm.mongodb.net';
const DB_NAME = process.env.MONGODB_DB || 'maquininhas-point';

async function createAdminUser() {
  // Opções de conexão
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  };

  let client;

  try {
    console.log('Conectando ao MongoDB...');
    client = new MongoClient(MONGODB_URI, options);
    await client.connect();
    console.log('Conexão com MongoDB estabelecida com sucesso!');

    const db = client.db(DB_NAME);
    const usersCollection = db.collection('users');

    // Verificar se o usuário já existe
    const existingUser = await usersCollection.findOne({ email: ADMIN_EMAIL });
    if (existingUser) {
      console.log(`Usuário ${ADMIN_EMAIL} já existe. Atualizando senha...`);
      
      // Encriptar a senha
      const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, SALT_ROUNDS);
      
      // Atualizar o usuário existente
      await usersCollection.updateOne(
        { email: ADMIN_EMAIL },
        { 
          $set: { 
            password: hashedPassword,
            role: 'admin',
            updatedAt: new Date()
          } 
        }
      );
      
      console.log(`Senha do usuário ${ADMIN_EMAIL} atualizada com sucesso!`);
    } else {
      // Encriptar a senha
      const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, SALT_ROUNDS);
      
      // Criar novo usuário
      await usersCollection.insertOne({
        email: ADMIN_EMAIL,
        password: hashedPassword,
        name: 'Administrador Enoc',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      console.log(`Usuário administrador ${ADMIN_EMAIL} criado com sucesso!`);
    }

  } catch (error) {
    console.error('Erro ao criar/atualizar usuário administrador:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('Conexão com MongoDB fechada.');
    }
  }
}

// Executar a função principal
createAdminUser()
  .then(() => console.log('Script concluído.'))
  .catch(err => console.error('Erro ao executar script:', err));
```


---
### 📄 Arquivo: `src/scripts/seed-database.js`

```javascript
// Script para popular o banco de dados com dados iniciais
import { connectToDatabase } from '../lib/mongodb';
import { fetchProductData } from '../data/productData';

async function seedDatabase() {
  try {
    console.log('Iniciando a importação de dados para o MongoDB...');
    
    // Conectar ao MongoDB
    const { db } = await connectToDatabase();
    
    // Obter coleção de produtos
    const productsCollection = db.collection('products');
    
    // Verificar se já existem produtos no banco
    const existingProductsCount = await productsCollection.countDocuments();
    
    if (existingProductsCount > 0) {
      console.log(`Já existem ${existingProductsCount} produtos no banco de dados.`);
      const shouldContinue = await confirmPrompt('Deseja limpar e reimportar os dados? (s/n): ');
      
      if (shouldContinue) {
        // Limpar coleção existente
        await productsCollection.deleteMany({});
        console.log('Coleção de produtos existente foi limpa.');
      } else {
        console.log('Operação cancelada.');
        process.exit(0);
      }
    }
    
    // Obter dados de produtos do arquivo estático
    const productData = fetchProductData();
    
    // Inserir produtos no MongoDB
    const result = await productsCollection.insertMany(productData);
    
    console.log(`Sucesso! ${result.insertedCount} produtos foram importados para o MongoDB.`);
    console.log('IDs dos produtos inseridos:');
    
    // Listar produtos inseridos
    const insertedProducts = await productsCollection.find({}).toArray();
    insertedProducts.forEach(product => {
      console.log(`- ${product._id}: ${product.name}`);
    });
    
    console.log('Importação concluída com sucesso!');
  } catch (error) {
    console.error('Erro durante a importação:', error);
  } finally {
    // Encerrar o processo
    process.exit(0);
  }
}

// Função auxiliar para simular confirmação por prompt (em ambiente Node.js real usaria readline)
async function confirmPrompt(message) {
  // Esta é uma função simples para simular prompt. 
  // Em um ambiente real, você usaria 'readline' ou outro módulo para obter input do usuário
  
  // Aqui estamos apenas simulando a resposta 'sim' para facilitar
  console.log(message);
  return true;
}

// Executar o script
seedDatabase();
```


---
### 📄 Arquivo: `src/types/product.ts`

```typescript
export interface Specification {
  type: string;
  text: string;
}

export interface LinkOperadora {
  name: string;
  url: string;
}

export interface Product {
  _id: string;
  name: string;
  normalPrice: string;
  price: string;
  urlBuy: string;
  urlInfo?: string;
  imageUrl: string;
  info?: string;
  specifications: Specification[];
  linkOperadoras: LinkOperadora[];
}

export interface ProductCardProps {
  product: Product;
  hideButton?: boolean;
}

export interface ProductComparisonProps {
  products: Product[];
}
```


---
### 📄 Arquivo: `src/utils/constants/icons.js`

```javascript
export const ICON_MAPPING = {
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
      <path d="M5 13a10 10 0 0 1 14 0"></path>
      <path d="M8.5 16.5a5 5 0 0 1 7 0"></path>
      <path d="M2 8.82a15 15 0 0 1 20 0"></path>
      <line x1="12" x2="12.01" y1="20" y2="20"></line>
    </svg>
  ),
  "débito, crédito, código QR e Pix": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card h-5 w-5 shrink-0 text-sky-500">
      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
      <line x1="2" x2="22" y1="10" y2="10"></line>
    </svg>
  ),
  "conta digital e cartão gratuito": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-5 w-5 shrink-0 text-sky-500">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
    </svg>
  ),
  "garantia": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-5 w-5 shrink-0 text-sky-500">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
    </svg>
  ),
  "Imprime o comprovante": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-printer h-5 w-5 shrink-0 text-sky-500">
      <polyline points="6 9 6 2 18 2 18 9"></polyline>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
      <rect width="12" height="8" x="6" y="14"></rect>
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
  "bluetooth": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bluetooth h-5 w-5 shrink-0 text-sky-500">
      <path d="m7 7 10 10-5 5V2l5 5L7 17"></path>
    </svg>
  ),
  "sms": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-5 w-5 shrink-0 text-sky-500">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  )
};
```


---
### 📄 Arquivo: `src/utils/helpers/format.js`

```javascript
/**
 * Formata um valor numérico para exibição em formato monetário brasileiro
 * @param {string|number} value - Valor a ser formatado
 * @returns {string} - Valor formatado como "R$ XX,XX"
 */
export const formatCurrency = (value) => {
  // Converte para número e garante que seja um número válido
  const numValue = typeof value === 'string' 
    ? parseFloat(value.replace(',', '.')) 
    : value;
  
  if (isNaN(numValue)) return 'R$ 0,00';
  
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(numValue);
};

/**
 * Converte uma string de preço para número
 * @param {string} price - Preço no formato "R$ XX,XX"
 * @returns {number} - Preço como número
 */
export const parsePrice = (price) => {
  if (!price) return 0;
  return parseFloat(price.replace('R$', '').replace(',', '.').trim());
};

/**
 * Calcula a porcentagem de desconto entre dois preços
 * @param {string} normalPrice - Preço normal no formato "R$ XX,XX"
 * @param {string} salePrice - Preço de venda no formato "R$ XX,XX"
 * @returns {number} - Porcentagem de desconto arredondada
 */
export const calculateDiscount = (normalPrice, salePrice) => {
  const normalPriceNum = parsePrice(normalPrice);
  const salePriceNum = parsePrice(salePrice);
  
  if (normalPriceNum === 0) return 0;
  
  const discount = ((normalPriceNum - salePriceNum) / normalPriceNum) * 100;
  return Math.round(discount);
};

/**
 * Converte uma string de nome de produto em um slug para URL
 * @param {string} name - Nome do produto
 * @returns {string} - Slug para URL
 */
export const nameToSlug = (name) => {
  if (!name) return '';
  return name.toLowerCase()
    .normalize('NFD') // Normaliza acentos
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\w\s]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-'); // Remove hífens duplicados
};

/**
 * Converte um slug para um nome provável de produto
 * @param {string} slug - Slug da URL
 * @returns {string} - Nome provável do produto
 */
export const slugToName = (slug) => {
  if (!slug) return '';
  return slug
    .replace(/-/g, ' ') // Substitui hífens por espaços
    .replace(/\b\w/g, l => l.toUpperCase()); // Capitaliza primeira letra de cada palavra
};
```


---
### 📄 Arquivo: `src/utils/formatters.js`

```javascript
/**
 * Formata um número para o formato de moeda brasileira
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado em reais (R$)
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

/**
 * Converte um nome para slug
 * @param {string} name - Nome a ser convertido
 * @returns {string} Slug gerado
 */
export const nameToSlug = (name) => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

/**
 * Converte um slug para nome
 * @param {string} slug - Slug a ser convertido
 * @returns {string} Nome gerado
 */
export const slugToName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
```


---
### 📄 Arquivo: `src/README-MONGODB.md`

```markdown
# Configuração do MongoDB para o Projeto

Para utilizar a API de produtos com o MongoDB, siga os passos abaixo:

## 1. Configuração das Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
# Conexão com o MongoDB
MONGODB_URI=mongodb+srv://seu_usuario:sua_senha@seu_cluster.mongodb.net/maquininhas-point?retryWrites=true&w=majority
MONGODB_DB=maquininhas-point

# Ambiente da aplicação
NODE_ENV=development

# API Token para integrações externas (Yampi)
NEXT_PUBLIC_SHOP_SLUG=seu-shop-slug
API_TOKEN=seu-api-token-yampi
```

## 2. Instalação de Dependências

Certifique-se de instalar as dependências do MongoDB:

```bash
npm install mongodb
# ou
yarn add mongodb
```

## 3. Importação Inicial de Dados

Para importar os dados iniciais dos produtos para o MongoDB, execute:

```bash
npm run seed
# ou
yarn seed
```

Este comando executará o script `src/scripts/seed-database.js` que importará os produtos do arquivo `src/data/productData.js` para o MongoDB.

## 4. Estrutura da API

A API de produtos está disponível nos seguintes endpoints:

- `GET /api/products`: Lista todos os produtos
- `GET /api/products/[id]`: Busca um produto específico por ID
- `POST /api/products`: Cria um novo produto
- `PUT /api/products/[id]`: Atualiza um produto existente
- `DELETE /api/products/[id]`: Remove um produto

## 5. Uso no Painel Administrativo

O painel administrativo em `/dashboard` já está configurado para utilizar esta API para gerenciar os produtos.

## 6. Migração do MongoDB

Para migrar de dados estáticos para o MongoDB:

1. Configure as variáveis de ambiente conforme descrito acima
2. Execute o script de seed para popular o banco de dados
3. Verifique se o painel administrativo está funcionando corretamente com os dados do MongoDB

Em caso de problemas com a conexão, verifique:
- Se a string de conexão está correta
- Se o IP da sua máquina está na lista de IPs permitidos no MongoDB Atlas
- Se o usuário e senha estão corretos
```


---
### 📄 Arquivo: `.eslintrc.json`

```json
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  "plugins": [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jsx-a11y"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```


---
### 📄 Arquivo: `create-produtos-updated.js`

```javascript
const fs = require('fs');
import { connectToDatabase } from './src/lib/mongodb';
import { fetchProductData } from './src/data/productData';
import ProductCard from './src/components/ui/ProductCard';

const content = `// Server Component para listar produtos
async function Produtos() {
  try {
    // Usar URL absoluta para Server Components
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 
                  (typeof window === 'undefined' ? 'http://localhost:3000' : '');
    
    const response = await fetch(\`\${apiUrl}/api/products\`, {
      next: { revalidate: 3600 } // Revalidar a cada hora
    });
    
    if (!response.ok) {
      throw new Error(\`Erro ao buscar produtos: \${response.status}\`);
    }

    const { products } = await response.json();

    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
        {products.map(product => (
          <div key={product._id} className="h-full">
            <ProductCard productId={product._id} />
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">Erro ao carregar produtos: {error.message}</p>
      </div>
    );
  }
}

export default Produtos;`;

fs.writeFileSync('src/components/Produtos.js', content, { encoding: 'utf8' });
console.log('Arquivo Produtos.js atualizado com sucesso!');
```


---
### 📄 Arquivo: `create-produtos.js`

```javascript
const fs = require('fs');
import { connectToDatabase } from './src/lib/mongodb';
import { fetchProductData } from './src/data/productData';
import ProductCard from './src/components/ui/ProductCard';

const content = `// Server Component para listar produtos
async function Produtos() {
  try {
    // Usar URL absoluta para Server Components
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 
                  (typeof window === 'undefined' ? 'http://localhost:3000' : '');
    
    const response = await fetch(\`\${apiUrl}/api/products\`, {
      next: { revalidate: 3600 } // Revalidar a cada hora
    });
    
    if (!response.ok) {
      throw new Error(\`Erro ao buscar produtos: \${response.status}\`);
    }

    const { products } = await response.json();

    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <ProductCard key={product._id} productId={product._id} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">Erro ao carregar produtos: {error.message}</p>
      </div>
    );
  }
}

export default Produtos;`;

fs.writeFileSync('src/components/Produtos.js', content, { encoding: 'utf8' });
console.log('Arquivo Produtos.js criado com sucesso!');
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
### 📄 Arquivo: `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  api: {
    bodyParser: true,
    externalResolver: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig
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
# Maquininhas Point

Este é um projeto de e-commerce para venda de maquininhas de cartão, desenvolvido com Next.js, React e TypeScript.

## 🚀 Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- MongoDB

## 📦 Estrutura do Projeto

```
src/
├── app/                 # Rotas e páginas da aplicação
├── components/         # Componentes React reutilizáveis
│   ├── ui/            # Componentes de UI básicos
│   └── layout/        # Componentes de layout
├── hooks/             # Hooks personalizados
├── services/          # Serviços e integrações
├── types/             # Definições de tipos TypeScript
└── utils/             # Funções utilitárias
    ├── constants/     # Constantes e configurações
    └── helpers/       # Funções auxiliares
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/maquininhas-point.git
cd maquininhas-point
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🏗️ Arquitetura

O projeto segue uma arquitetura baseada em componentes, com separação clara de responsabilidades:

- **Componentes**: Divididos em UI (básicos) e Layout (estruturais)
- **Hooks**: Lógica reutilizável e gerenciamento de estado
- **Serviços**: Integrações com APIs e serviços externos
- **Utils**: Funções utilitárias e constantes
- **Types**: Definições de tipos TypeScript

### Padrões de Código

- Componentes funcionais com hooks
- TypeScript para tipagem estática
- ESLint e Prettier para padronização
- Testes unitários com Jest
- Documentação com JSDoc

## 📝 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm start`: Inicia o servidor de produção
- `npm run lint`: Executa o linter
- `npm run format`: Formata o código
- `npm test`: Executa os testes

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

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
      animation: {
        float: 'float 8s ease-in-out infinite',
    },
    keyframes: {
        float: {
            '0%, 100%': { transform: 'translateY(0) ' },
            '50%': { transform: 'translateY(-10px) ' },
        },
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
      backgroundImage: {
        'gradient-28': 'linear-gradient(to bottom, #FFE600 0%, #FFD400 28%)',
      }
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