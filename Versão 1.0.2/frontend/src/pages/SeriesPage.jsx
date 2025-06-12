import React, { useState, useEffect, useCallback } from 'react';
import MediaCard from '../components/MediaCard';
import Pagination from '../components/Pagination';
import FilterControls from '../components/FilterControls';

const SeriesPage = ({ onOpenModal }) => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    sortBy: 'popularity.desc',
    genres: [],
  });

  // Função para buscar os dados, envolvida em useCallback para otimização
  const fetchMedia = useCallback(async () => {
    setLoading(true);
    const genreQuery = filters.genres.join(','); // Transforma o array de IDs de gênero em uma string
    const url = `http://localhost:5000/api/discover/tv?sort_by=${filters.sortBy}&with_genres=${genreQuery}&page=${currentPage}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Falha na resposta da rede ao buscar séries.');
      const data = await response.json();
      setSeries(data.results);
      // A API do TMDB limita a resposta a um máximo de 500 páginas
      setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
    } catch (err) {
      console.error("Erro ao buscar séries:", err);
      setSeries([]); // Limpa os resultados em caso de erro
    } finally {
      setLoading(false);
      window.scrollTo(0, 0); // Rola a página para o topo a cada nova busca
    }
  }, [currentPage, filters]); // Dependências da função de busca

  // useEffect que chama a função de busca sempre que as dependências mudarem
  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  // Função chamada pelo componente FilterControls quando um filtro ou ordenação muda
  const handleFilterChange = (newFilters) => {
    // Quando um filtro muda, sempre voltamos para a primeira página
    setCurrentPage(1); 
    setFilters({
        sortBy: newFilters.sortBy,
        genres: newFilters.genres
    });
  };

  // Função chamada pelo componente Pagination quando a página muda
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-12 bg-gray-100 dark:bg-dark-bg-primary">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Página com Título e Filtros */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-gray-300 dark:border-slate-700 pb-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text-primary mb-4 sm:mb-0">
                Séries
            </h2>
            <FilterControls type="tv" onFilterChange={handleFilterChange} />
        </div>
        
        {loading ? (
          <p className="text-center text-lg dark:text-white py-10">Carregando séries...</p>
        ) : series.length === 0 ? (
          <div className="text-center py-10 px-6 bg-white dark:bg-dark-card rounded-lg shadow-md">
            <i className="fas fa-tv text-5xl text-gray-400 dark:text-slate-500 mb-4"></i>
            <p className="text-xl text-gray-700 dark:text-dark-text-secondary">
              Nenhuma série encontrada com os filtros selecionados.
            </p>
            <p className="text-gray-600 dark:text-dark-text-muted mt-2">
              Tente ajustar sua busca ou limpar os filtros.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {series.map(item => (
              <MediaCard key={item.id} media={item} type="tv" onOpenModal={onOpenModal} />
            ))}
          </div>
        )}

        {/* Componente de Paginação */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default SeriesPage;