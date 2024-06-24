## Instruções de Instalação e Execução

### Requisitos

- Node.js (recomendado: versão 14 ou superior)
- PNPM (Package Manager)

### Passos para Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/mvpedro/xp-sarm.git
   cd SARM
   ```
2. **Instale as dependências:**
`pnpm install`

3. **Configure as variáveis de ambiente:**

Copie o arquivo .env.example para .env e preencha com as informações necessárias do Supabase:

### Executando o Projeto Localmente
4. **Inicie o servidor de desenvolvimento:**

```
pnpm dev
```

### Configurações Adicionais
Banco de Dados:
Certifique-se de que a instância do PostgreSQL no Supabase está corretamente configurada e acessível.

Lambda Functions na AWS:
Verifique se as Lambda Functions na AWS estão corretamente configuradas e as permissões estão devidamente ajustadas para o funcionamento do sistema.

Hospedagem
Este projeto está hospedado na Vercel. Certifique-se de que as configurações de ambiente na Vercel estão corretas, refletindo as mesmas variáveis de ambiente do arquivo .env.

Testes
Para executar os testes (se houver), utilize o comando:

```
pnpm test
```


## Arquitetura

### Aplicação Web

- ⚡️ Next.js 14 (App Router)
- 💚 Supabase com supabase-ssr
- ⚛️ React 18
- ⛑ TypeScript
- 📦 [pnpm](https://pnpm.io/) - Package manager
- 🎨 [Tailwind](https://tailwindcss.com/) - Estilização
- 🔌 [shadcn/ui](https://ui.shadcn.com/) - Componentes out-of-the-box para agilizar desenvolvimento
- 🧪 Jest w/SWC + React Testing Library - Testes unitários
- 🎛️ [MSW](https://mswjs.io/)v2 - Interceptador de Requests (essencial para rodar testes localmente)
- 🪝[TanStackQuery](https://tanstack.com/query/v5)v5 - Biblioteca de Data Fetching
- 📏 ESLint — Linter
- 💖 Prettier — Code Formatter
- 🐶 Husky — Pre-commit
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 🗂 Path Mapping — Importar componentes com prefixo `@`
- ⚪⚫ Dark mode - Com [next-themes](https://github.com/pacocoursey/next-themes)

Funções Serverless
- Node.js 18

### Requisitos

- Node.js >= 18.17.0
- pnpm 8

### Scripts

- `pnpm dev` — Inicia a aplicação em desenvolvimento `http://localhost:3000`.
- `pnpm build` — Cria uma buildotimizada para produção.
- `pnpm start` — Inicia a aplicação em modo de produção.
- `pnpm type-check` — Valida o código usando o compilador de TypeScript
- `pnpm lint` — Executa ESLint para todos os arquivos dentro de `src`.
- `pnpm format-check` — Executa Prettier.
- `pnpm format` — Executa Prettier e formata os arquivos.
- `pnpm test` — Executa todos os testes de Jest.

