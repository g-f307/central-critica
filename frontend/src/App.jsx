import React, { useState } from 'react';
// O BrowserRouter as Router está no main.jsx
import { Route, Routes } from 'react-router-dom';

// Componentes de Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MediaModal from './components/MediaModal';

// Páginas
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import SeriesPage from './pages/SeriesPage';
import JornalPage from './pages/JornalPage';
import AboutPage from './pages/AboutPage';
import SearchResultsPage from './pages/SearchResultsPage';
import AuthPage from './pages/AuthPage';
import AuthCallbackPage from './pages/AuthCallbackPage'; // Página para callback do login social
import UserReviewsPage from './pages/UserReviewsPage';
import WriteArticlePage from './pages/WriteArticlePage';
import ArticlePage from './pages/ArticlePage';

function App() {
  // Estado para controlar a visibilidade e os dados do modal de detalhes da mídia
  const [selectedMedia, setSelectedMedia] = useState(null); // Ex: { id: 123, type: 'movie' }

  // Função para abrir o modal com os dados da mídia selecionada
  const handleOpenModal = (id, type) => {
    setSelectedMedia({ id, type });
    document.body.style.overflow = 'hidden'; // Impede o scroll da página principal quando o modal está aberto
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto'; // Restaura o scroll da página principal
  };

  return (
    // A tag <Router> foi removida daqui, pois agora está no main.jsx
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          {/* Passa a função onOpenModal para as páginas que podem disparar o modal */}
          <Route path="/" element={<HomePage onOpenModal={handleOpenModal} />} />
          <Route path="/filmes" element={<MoviesPage onOpenModal={handleOpenModal} />} />
          <Route path="/series" element={<SeriesPage onOpenModal={handleOpenModal} />} />
          
          {/* Rotas para o Jornal/Artigos */}
          <Route path="/jornal" element={<JornalPage />} />
          <Route path="/jornal/:slug" element={<ArticlePage />} />
          <Route path="/jornal/editar/:slug" element={<WriteArticlePage />} />
          <Route path="/escrever-artigo" element={<WriteArticlePage />} />

          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/search" element={<SearchResultsPage onOpenModal={handleOpenModal} />} />
          
          {/* Rotas de Autenticação e Usuário */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth/callback" element={<AuthCallbackPage />} />
          <Route path="/minhas-criticas" element={<UserReviewsPage onOpenModal={handleOpenModal} />} />
        </Routes>
      </main>
      
      <Footer />

      {/* Renderiza o Modal de Detalhes se uma mídia estiver selecionada */}
      {selectedMedia && selectedMedia.id && (
        <MediaModal 
          mediaId={selectedMedia.id} 
          mediaType={selectedMedia.type} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;