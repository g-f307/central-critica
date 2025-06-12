import React, { useState, useEffect, useCallback } from 'react';
import MediaCard from '../components/MediaCard';
import Pagination from '../components/Pagination';
import FilterControls from '../components/FilterControls';

const MoviesPage = ({ onOpenModal }) => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    sortBy: 'popularity.desc',
    genres: [],
  });

  const fetchMedia = useCallback(async () => {
    setLoading(true);
    const genreQuery = filters.genres.join(',');
    const url = `http://localhost:5000/api/discover/movie?sort_by=${filters.sortBy}&with_genres=${genreQuery}&page=${currentPage}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Falha na resposta da rede');
      const data = await response.json();
      setMedia(data.results);
      setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
      setMedia([]);
    } finally {
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, [currentPage, filters]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  const handleFilterChange = (newFilters) => {
    setCurrentPage(1); 
    setFilters({
        sortBy: newFilters.sortBy,
        genres: newFilters.genres
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-12 bg-gray-100 dark:bg-dark-bg-primary">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Página com Título e Filtros */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-gray-300 dark:border-slate-700 pb-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text-primary mb-4 sm:mb-0">
                Filmes
            </h2>
            <FilterControls type="movie" onFilterChange={handleFilterChange} />
        </div>
        
        {loading ? (
          <p className="text-center text-lg dark:text-white py-10">Carregando filmes...</p>
        ) : media.length === 0 ? (
          <div className="text-center py-10 px-6 bg-white dark:bg-dark-card rounded-lg shadow-md">
            <i className="fas fa-film text-5xl text-gray-400 dark:text-slate-500 mb-4"></i>
            <p className="text-xl text-gray-700 dark:text-dark-text-secondary">
              Nenhum filme encontrado com os filtros selecionados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {media.map(item => (
              <MediaCard key={item.id} media={item} type="movie" onOpenModal={onOpenModal} />
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default MoviesPage;