Central Crítica - Aplicação Full-Stack<p align="center"><img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge"/></p><p align="center"><img loading="lazy" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"><img loading="lazy" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"><img loading="lazy" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"><img loading="lazy" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"><img loading="lazy" src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"><img loading="lazy" src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize"><img loading="lazy" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></p>Projeto desenvolvido na disciplina de Desenvolvimento WEB, do curso Análise e Desenvolvimento de Sistemas. O projeto evoluiu de uma landing page estática para uma aplicação web full-stack completa e interativa, demonstrando a aplicação de conceitos modernos de frontend, backend e banco de dados.❓ JustificativaO audiovisual é uma área que abrange diversos segmentos bastante complexos entre si. O que torna cada um tão rico é a diversidade de culturas, ideias e visões que são implementadas em obras e disseminadas publicamente. Portanto, uma plataforma web para o convívio social que reúna os segmentos mais vistosos globalmente (filmes e séries) é uma demanda super atual, com direcionamento diverso e um fator de inclusão que rompe barreiras de um gosto específico.👥 Público-AlvoO público-alvo do site é constituído por amantes da arte, entretenimento e cultura pop, que buscam aprofundar suas experiências com filmes e séries através de análises críticas e reflexivas. O conteúdo é pensado para abranger desde iniciantes até consumidores mais experientes que valorizam e discutem a produção cultural em suas diferentes formas.✨ Funcionalidades PrincipaisA aplicação "Central Crítica" oferece uma gama de funcionalidades para criar uma experiência rica e interativa:Navegação e Descoberta de ConteúdoConteúdo Dinâmico: Filmes e séries são buscados em tempo real da API do TMDB.Filtros e Ordenação: Páginas de listagem com controles para ordenar por popularidade, data de lançamento, etc., e para filtrar por múltiplos gêneros.Paginação: Navegação por páginas para explorar um catálogo extenso de mídias.Pesquisa Funcional: Barra de pesquisa na Navbar que leva a uma página de resultados.Modal de Detalhes: Exibição de informações completas de uma mídia, incluindo sinopse, elenco, trailer e críticas de usuários.Autenticação de UsuáriosCadastro e Login: Sistema completo com e-mail/senha.Login Social: Integração com o Login com Google (OAuth 2.0) para acesso rápido.Gerenciamento de Sessão: Utilização de Tokens JWT para autenticação segura.Navbar Dinâmica: Exibe o perfil do usuário logado com um submenu contendo links para "Minhas Críticas" e "Sair".Conteúdo Gerado pelo UsuárioSistema de Críticas: Usuários logados podem avaliar filmes e séries com estrelas (1-5) e um comentário.Sistema de Artigos ("Jornal"):Usuários logados podem criar artigos com um editor de texto rico (WYSIWYG), permitindo formatação de texto, links, imagens, etc.Verificação de Autoria: Apenas o autor de um artigo pode editá-lo ou excluí-lo.Experiência do Usuário (UX)Modo Claro e Escuro: Tema alternável para conforto visual.Feedback Visual: Notificações "toast" para ações como login, publicação de artigos e erros.Skeleton Loaders: "Esqueletos" de interface são exibidos enquanto os dados são carregados, melhorando a percepção de performance.Design Responsivo: Interface adaptada para desktops, tablets e dispositivos móveis.🚀 Tecnologias UtilizadasCategoriaTecnologiaDescriçãoFrontendReact (com Vite)Biblioteca para construção da interface de usuário com uma ferramenta de build moderna e rápida.React RouterPara gerenciamento de rotas do lado do cliente.Tailwind CSSFramework de CSS utilitário para estilização rápida e responsiva.React-QuillComponente de editor de texto rico (WYSIWYG) para a criação de artigos.React-ToastifyPara exibir notificações "toast" de feedback ao usuário.React-DropzonePara a interface de "arrastar e soltar" da imagem de perfil.BackendNode.jsAmbiente de execução para o JavaScript do lado do servidor.Express.jsFramework para a construção da API RESTful.SequelizeORM (Object-Relational Mapper) para interagir com o banco de dados de forma segura.SQLiteBanco de dados relacional baseado em arquivo, usado para desenvolvimento.JWT & Passport.jsPara autenticação baseada em token e gerenciamento do fluxo de Login Social.API ExternaTMDB APIFonte de todos os dados de filmes e séries.Controle de VersãoGit & GitHubPara versionamento e hospedagem do código-fonte.📂 Estrutura do ProjetoO projeto é um monorepo com duas pastas principais: frontend e backend.central-critica-fullstack/

'''
├── backend/
│   ├── config/          # Configurações do Sequelize
│   ├── middleware/      # Middlewares do Express (ex: authMiddleware)
│   ├── models/          # Modelos do Sequelize (User, Review, Article)
│   ├── routes/          # Definição das rotas da API (auth, reviews, articles)
│   ├── .env             # Arquivo de variáveis de ambiente
│   └── server.js        # Ponto de entrada do servidor Express
│
└── frontend/
    ├── src/
    │   ├── components/  # Componentes React reutilizáveis
    │   ├── contexts/    # Contextos React (AuthContext, GenreContext)
    │   ├── pages/       # Componentes que representam as páginas da aplicação
    │   ├── App.jsx      # Configuração principal de rotas
    │   └── main.jsx     # Ponto de entrada da aplicação React
    ├── .env             # Variáveis de ambiente do frontend (opcional)
    ├── tailwind.config.js # Configuração do Tailwind CSS
    └── vite.config.js   # Configuração do Vite
'''
    
🛠️ Como Rodar o Projeto LocalmenteSiga os passos abaixo para configurar e executar a aplicação no seu ambiente de desenvolvimento.Pré-requisitosNode.js: Versão 18 LTS ou superior.Git: Para clonar o repositório.Chave de API do TMDB: Crie uma conta no The Movie Database para obter sua chave de API.Credenciais OAuth do Google: Crie um projeto no Google Cloud Console para obter um Client ID e Client Secret para o login social.1. Clonar o Repositóriogit clone <url_do_seu_repositorio_no_github>
cd central-critica-fullstack
2. Configurar o Backend# Navegue para a pasta do backend
cd backend

# Instale as dependências
npm install

# Crie o arquivo de variáveis de ambiente
cp .env.example .env
Abra o arquivo .env recém-criado e preencha com suas chaves:TMDB_API_KEY=SUA_CHAVE_DA_API_DO_TMDB
JWT_SECRET=SUA_CHAVE_SECRETA_FORTE_PARA_JWT
GOOGLE_CLIENT_ID=SEU_ID_DE_CLIENTE_DO_GOOGLE
GOOGLE_CLIENT_SECRET=SUA_CHAVE_SECRETA_DO_CLIENTE_DO_GOOGLE
PORT=5000
3. Configurar o Frontend# Navegue para a pasta do frontend
cd ../frontend

# Instale as dependências
npm install
4. Rodar a AplicaçãoVocê precisará de dois terminais abertos simultaneamente.Terminal 1 (Backend):cd backend
npm run dev
O servidor backend estará rodando em http://localhost:5000.Terminal 2 (Frontend):cd frontend
npm run dev
A aplicação frontend estará acessível em http://localhost:5173 (ou a porta indicada pelo Vite).Abra http://localhost:5173 no seu navegador para ver a aplicação.🖼️ Screenshots(Esta seção pode ser preenchida com imagens da sua aplicação)Página Inicial[Imagem da Página Inicial]Página de Filmes com Filtros[Imagem da Página de Filmes]Modal de Detalhes da Mídia[Imagem do Modal de Detalhes]Página de Autenticação com Carrossel[Imagem da Página de Autenticação]Página de Criação de Artigo com Editor de Texto[Imagem da Página de Criação de Artigo]📚 ReferênciasGOOGLE. Google Identity: Sign In With Google for Web. Mountain View: Google LLC, 2024. Disponível em: https://developers.google.com/identity/gsi/web/guides/overview. Acesso em: 05 jul. 2025.THE MOVIE DATABASE (TMDB). TMDB API Documentation. TMDb, 2025. Disponível em: https://developer.themoviedb.org/docs. Acesso em: 05 jul. 2025.
