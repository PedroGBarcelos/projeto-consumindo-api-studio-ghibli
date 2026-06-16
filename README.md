# Studio Ghibli - Catálogo de Filmes

Este projeto é uma aplicação web desenvolvida para listar e detalhar os filmes do renomado **Studio Ghibli**. A aplicação consome a API oficial do Studio Ghibli para exibir informações precisas sobre as obras, incluindo diretores, produtores, datas de lançamento e avaliações.

## 🚀 Tecnologias Utilizadas

- **React 19**: Biblioteca principal para construção da interface.
- **TypeScript**: Adição de tipagem estática para maior segurança e produtividade.
- **Vite**: Ferramenta de build e servidor de desenvolvimento extremamente rápido.
- **Tailwind CSS 4**: Framework utilitário para estilização moderna e responsiva.
- **React Router Dom 7**: Gerenciamento de rotas e navegação entre páginas.

## ✨ Funcionalidades

- **Lista de Filmes**: Exibição dos 10 primeiros filmes em ordem alfabética.
- **Cards Interativos**: Cada filme possui um card com título e imagem de capa.
- **Detalhes do Filme**: Página dedicada com informações completas:
    - Banner do filme.
    - Descrição detalhada.
    - Nome do Diretor e Produtor.
    - Ano de lançamento.
    - Avaliação do **Rotten Tomatoes** com ícones temáticos (Fresh, Certified Fresh ou Rotten).
- **Design Temático**: Interface inspirada na estética do Studio Ghibli, com fontes personalizadas e fundo estilizado.

## 📦 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/consumindo-api-studio-ghibli.git
   ```

2. Entre no diretório do projeto:
   ```bash
   cd consumindo-api-studio-ghibli
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

### Execução

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`.

## 📂 Estrutura de Pastas

```text
src/
├── assets/          # Imagens, ícones e fontes
├── components/      # Componentes reutilizáveis (Header, Card, etc.)
├── pages/           # Páginas principais (Home e FilmDetails)
├── routes/          # Configuração das rotas da aplicação
├── services/        # Consumo da API (Axios ou Fetch)
├── types/           # Definições de tipos TypeScript
└── App.tsx          # Componente raiz
```

## 🌐 API

Este projeto utiliza a [Studio Ghibli API](https://ghibliapi.vercel.app/), uma API pública que fornece dados sobre os filmes, personagens, locais e espécies dos filmes do Studio Ghibli.

---
Desenvolvido como parte do aprendizado de consumo de APIs e React Avançado.