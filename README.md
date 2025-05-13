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
