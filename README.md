# Central Crítica - Aplicação Full-Stack

<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</p>

Projeto desenvolvido na disciplina de Desenvolvimento WEB, do curso Análise e Desenvolvimento de Sistemas. O projeto evoluiu de uma landing page estática para uma aplicação web full-stack completa e interativa, demonstrando a aplicação de conceitos modernos de frontend, backend e banco de dados.

---

## ❓ Justificativa

O audiovisual é uma área que abrange diversos segmentos bastante complexos entre si. O que torna cada um tão rico é a diversidade de culturas, ideias e visões que são implementadas em obras e disseminadas publicamente. Portanto, uma plataforma web para o convívio social que reúna os segmentos mais vistosos globalmente (filmes e séries) é uma demanda super atual, com direcionamento diverso e um fator de inclusão que rompe barreiras de um gosto específico.

---

## 👥 Público-Alvo

Amantes da arte, entretenimento e cultura pop que buscam aprofundar suas experiências com filmes e séries através de análises críticas e reflexivas. O conteúdo abrange desde iniciantes até consumidores mais experientes.

---

## ✨ Funcionalidades Principais

### Navegação e Descoberta de Conteúdo

- Conteúdo Dinâmico via API do TMDB
- Filtros e Ordenação por popularidade, data, gêneros
- Paginação
- Pesquisa com barra na navbar
- Modal de Detalhes (sinopse, elenco, trailer, críticas)

### Autenticação de Usuários

- Cadastro e Login com email/senha
- Login com Google (OAuth 2.0)
- Autenticação com JWT
- Navbar com submenu do usuário

### Conteúdo Gerado pelo Usuário

- Críticas com estrelas (1–5) + comentário
- Artigos (editor WYSIWYG), apenas autor pode editar/excluir

### Experiência do Usuário (UX)

- Modo claro e escuro
- Notificações "toast"
- Skeleton loaders
- Design responsivo

---

## 🚀 Tecnologias Utilizadas

<div align="center">

| Categoria  | Tecnologia           | Descrição |
|------------|----------------------|-----------|
| Frontend   | React (com Vite)     | Interface com build moderno |
|            | React Router         | Gerenciamento de rotas |
|            | Tailwind CSS         | CSS utilitário responsivo |
|            | React-Quill          | Editor de texto rico |
|            | React-Toastify       | Notificações toast |
|            | React-Dropzone       | Upload por arrastar e soltar |
| Backend    | Node.js              | Execução JS no servidor |
|            | Express.js           | Framework para API REST |
|            | Sequelize            | ORM para DB |
|            | SQLite               | Banco relacional leve |
|            | JWT & Passport.js    | Autenticação e OAuth |
| API Externa| TMDB API             | Dados de filmes e séries |
| Controle   | Git & GitHub         | Versionamento de código |

</div>

---

## 📂 Estrutura do Projeto

```
central-critica-fullstack/
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── contexts/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    ├── .env
    ├── tailwind.config.js
    └── vite.config.js
```

---

## 🔌 Endpoints da API Backend

### Autenticação (`/auth`)

<div align="center">

| Método | Endpoint           | Protegido? | Descrição                          |
|--------|--------------------|------------|------------------------------------|
| POST   | /register          | Não        | Registra usuário                   |
| POST   | /login             | Não        | Login com JWT                      |
| GET    | /google            | Não        | Início OAuth                       |
| GET    | /google/callback   | Não        | Callback do Google                 |

</div>

### Críticas (`/reviews`)

<div align="center">

| Método | Endpoint                        | Protegido? | Descrição                             |
|--------|----------------------------------|------------|----------------------------------------|
| POST   | /                                | Sim        | Nova crítica                           |
| GET    | /:mediaType/:mediaId             | Não        | Críticas de uma mídia específica       |
| GET    | /my-reviews/all                  | Sim        | Críticas do usuário logado             |

</div>

### Artigos (`/articles`)

<div align="center">

| Método | Endpoint        | Protegido? | Descrição                     |
|--------|------------------|------------|-------------------------------|
| POST   | /                | Sim        | Publica novo artigo           |
| GET    | /                | Não        | Lista todos os artigos        |
| GET    | /:slug           | Não        | Exibe artigo específico       |
| PUT    | /:slug           | Sim        | Edita artigo (autor)          |
| DELETE | /:slug           | Sim        | Exclui artigo (autor)         |

</div>

### Proxy para API do TMDB

<div align="center">

| Método | Endpoint                         | Protegido? | Descrição                          |
|--------|-----------------------------------|------------|-------------------------------------|
| GET    | /discover/movie                  | Não        | Lista de filmes com filtros        |
| GET    | /discover/tv                     | Não        | Lista de séries com filtros        |
| GET    | /details/:mediaType/:mediaId     | Não        | Detalhes de uma mídia              |
| GET    | /genres/movie                    | Não        | Gêneros de filmes                  |
| GET    | /genres/tv                       | Não        | Gêneros de séries                  |
| GET    | /search                          | Não        | Pesquisa geral por mídia           |

</div>

---

## 🛠 Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js 18+  
- Git  
- Chave de API do TMDB  
- OAuth (Google): Client ID + Client Secret

### 1. Clonar o Repositório

```bash
git clone <url_do_repositorio>
cd central-critica-fullstack
```

### 2. Configurar o Backend

```bash
cd backend
npm install
# cp .env.example .env (se existir)
```

Crie o `.env` com:

```
TMDB_API_KEY=...
JWT_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
PORT=5000
```

### 3. Configurar o Frontend

```bash
cd ../frontend
npm install
```

### 4. Rodar a Aplicação

- **Terminal 1 (Backend)**:
  ```bash
  cd backend
  npm run dev
  ```
  Acesse: http://localhost:5000

- **Terminal 2 (Frontend)**:
  ```bash
  cd frontend
  npm run dev
  ```
  Acesse: http://localhost:5173

---

## 🖼 Screenshots

> Adicione imagens aqui:

- Página Inicial
- Página de Filmes com Filtros
- Modal de Detalhes
- Página de Autenticação
- Editor de Artigos

---

## 📚 Referências

- [Google Identity Overview](https://developers.google.com/identity/gsi/web/guides/overview)
- [TMDB API Documentation](https://developer.themoviedb.org/docs)
