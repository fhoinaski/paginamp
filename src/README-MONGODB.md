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