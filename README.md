# Central Crítica - Aplicação Full-Stack

<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"
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

## ❓ JUSTIFICATIVA

* O audiovisual é uma área que abrange diversos segmentos bastante complexos entre si. O que torna cada um tão rico é a diversidade de culturas, ideias e visões que são implementadas em obras e disseminadas publicamente. Portanto, uma plataforma web para o convívio social que reúna os segmentos mais vistosos globalmente (filmes e séries) é uma demanda super atual, com direcionamento diverso e um fator de inclusão que rompe barreiras de um gosto específico.

---

## 👥 PÚBLICO-ALVO

* Amantes da arte, entretenimento e cultura pop que buscam aprofundar suas experiências com filmes e séries através de análises críticas e reflexivas. O conteúdo abrange desde iniciantes até consumidores mais experientes.

---

## ✨ FUNCIONALIDADES PRINCIPAIS

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

## 🚀 TECNOLOGIAS UTILIZADAS

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

## 📂 ESTRUTURA DO PROJETO

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

## 🔌 ENDPOINTS DA API BACKEND

### Autenticação (`/auth`)

| Método | Endpoint           | Protegido? | Descrição                          |
|--------|--------------------|------------|------------------------------------|
| POST   | /register          | Não        | Registra usuário                   |
| POST   | /login             | Não        | Login com JWT                      |
| GET    | /google            | Não        | Início OAuth                       |
| GET    | /google/callback   | Não        | Callback do Google                 |

### Críticas (`/reviews`)

| Método | Endpoint                        | Protegido? | Descrição                             |
|--------|----------------------------------|------------|----------------------------------------|
| POST   | /                                | Sim        | Nova crítica                           |
| GET    | /:mediaType/:mediaId             | Não        | Críticas de uma mídia específica       |
| GET    | /my-reviews/all                  | Sim        | Críticas do usuário logado             |

### Artigos (`/articles`)

| Método | Endpoint        | Protegido? | Descrição                     |
|--------|------------------|------------|-------------------------------|
| POST   | /                | Sim        | Publica novo artigo           |
| GET    | /                | Não        | Lista todos os artigos        |
| GET    | /:slug           | Não        | Exibe artigo específico       |
| PUT    | /:slug           | Sim        | Edita artigo (autor)          |
| DELETE | /:slug           | Sim        | Exclui artigo (autor)         |

### Proxy para API do TMDB

| Método | Endpoint                         | Protegido? | Descrição                          |
|--------|-----------------------------------|------------|-------------------------------------|
| GET    | /discover/movie                  | Não        | Lista de filmes com filtros        |
| GET    | /discover/tv                     | Não        | Lista de séries com filtros        |
| GET    | /details/:mediaType/:mediaId     | Não        | Detalhes de uma mídia              |
| GET    | /genres/movie                    | Não        | Gêneros de filmes                  |
| GET    | /genres/tv                       | Não        | Gêneros de séries                  |
| GET    | /search                          | Não        | Pesquisa geral por mídia           |

---

## 🛠 COMO RODAR O PROJETO LOCALMENTE

### Pré-requisitos

- Node.js 18+  
- Git  
- Chave de API do TMDB  
- OAuth (Google): Client ID + Client Secret

### 1. Clonar o Repositório

```bash
git clone https://github.com/g-f307/central-critica.git
cd central-critica
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

## 🖼 SCREENSHOTS

<p align="center">
  <img src="https://github.com/user-attachments/assets/e023b65b-c185-4219-ba48-383177b4a6f4" width="45%"/>
  <img src="https://github.com/user-attachments/assets/5b289409-62e1-4c9b-8fe3-11b0b37f1077" width="45%"/>
  
</p>
<p align="center"><i>Página Inicial e alternância para o modo escuro</i></p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/e20c7a19-64c7-4299-8ccc-69a0d70a8042" width="45%"/>
  <img src="https://github.com/user-attachments/assets/803c16c9-44c7-405a-b6c0-5fa221e77e13" width="45%"/>
</p>
<p align="center"><i>Segmento em alta com opção de alternância</i></p>

<p align="center">
 <img src="https://github.com/user-attachments/assets/2fc1652f-ee80-40ae-9baf-778edd6d99f0" width="45%"/>
 <img src="https://github.com/user-attachments/assets/3ff9f055-d124-488a-b08e-3d609d396acd" width="45%"/>
</p>
<p align="center"><i>Tela de Autenticação</i></p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/2ea63c46-0568-4c37-bebc-24e310753812" width="45%"/>
  <img src="https://github.com/user-attachments/assets/cdc1a040-c14e-4f70-93c7-e9e783b53a94" width="45%"/>
</p>
<p align="center"><i>Visualização de página dedicada por tipo de mídia (Filmes como exemplar)</i></p>

<p align="center">
 <img src="https://github.com/user-attachments/assets/dfc994cd-3649-4db0-a615-7b70819efafe" width="45%"/>
 <img src="https://github.com/user-attachments/assets/8dbb124f-c8f1-4c1a-a451-df7a1a936d0d" width="45%"/>
</p>
<p align="center"><i>Página de Artigos e Visualização de Artigo</i></p>

<p align="center">
 <img src="https://github.com/user-attachments/assets/c23f64bc-b146-4647-a18a-d52ea90d99a1" width="45%"/>
 <img src="https://github.com/user-attachments/assets/59b26f4d-7bdd-4ff6-b63a-ab68960385c3" width="45%"/>
</p>
<p align="center"><i>Editor de texto para criação de artigos</i></p>

---

## 📚 REFERÊNCIAS

- [Google Identity Overview](https://developers.google.com/identity/gsi/web/guides/overview)
- [TMDB API Documentation](https://developer.themoviedb.org/docs)
