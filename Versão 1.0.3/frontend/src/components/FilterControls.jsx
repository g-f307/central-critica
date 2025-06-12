import React, { useState, useEffect, useRef } from 'react';
import { useGenres } from '../contexts/GenreContext';

const FilterControls = ({ type, onFilterChange }) => {
  const { movieGenres, tvGenres, loadingGenres } = useGenres();
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [showGenres, setShowGenres] = useState(false);
  const genreDropdownRef = useRef(null);

  const genres = type === 'movie' ? movieGenres : tvGenres;

  const sortOptions = {
    movie: [
      { value: 'popularity.desc', label: 'Mais Populares' },
      { value: 'release_date.desc', label: 'Lançamentos Recentes' },
      { value: 'vote_average.desc', label: 'Melhores Avaliações' },
      { value: 'revenue.desc', label: 'Maior Bilheteria' },
    ],
    tv: [
      { value: 'popularity.desc', label: 'Mais Populares' },
      { value: 'first_air_date.desc', label: 'Lançamentos Recentes' },
      { value: 'vote_average.desc', label: 'Melhores Avaliações' },
    ],
  };
  
  // Efeito para fechar o dropdown de gêneros ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (genreDropdownRef.current && !genreDropdownRef.current.contains(event.target)) {
        setShowGenres(false);
      }
    };
    if (showGenres) {
        document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showGenres]);

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    onFilterChange({ sortBy: newSortBy, genres: selectedGenres });
  };

  const handleGenreToggle = (genreId) => {
    const newSelectedGenres = selectedGenres.includes(genreId)
      ? selectedGenres.filter(id => id !== genreId)
      : [...selectedGenres, genreId];
    setSelectedGenres(newSelectedGenres);
    // Não chama onFilterChange aqui, o usuário aplicará com um botão
  };

  const applyGenreFilter = () => {
      onFilterChange({ sortBy, genres: selectedGenres });
      setShowGenres(false); // Fecha o dropdown após aplicar
  }

  return (
    // Os controles agora estão agrupados à direita
    <div className="flex flex-col md:flex-row items-center justify-end gap-4">
      {/* Dropdown de Ordenação */}
      <div className="flex items-center space-x-2">
        <label htmlFor="sort-by" className="text-sm font-medium text-gray-600 dark:text-dark-text-secondary whitespace-nowrap">
          Ordenar por:
        </label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={handleSortChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-cyan dark:focus:border-dark-cyan"
        >
          {sortOptions[type].map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      {/* Botão para mostrar/esconder gêneros */}
      <div className="relative" ref={genreDropdownRef}>
        <button
          onClick={() => setShowGenres(!showGenres)}
          className="px-4 py-2.5 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-800 dark:text-dark-text-secondary hover:bg-gray-200 dark:hover:bg-slate-600 w-full md:w-auto flex items-center justify-center"
        >
          Filtrar Gêneros
          {selectedGenres.length > 0 && <span className="ml-2 bg-purple-600 dark:bg-dark-cyan text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{selectedGenres.length}</span>}
          <i className={`fas fa-chevron-down ml-2 text-xs transition-transform ${showGenres ? 'rotate-180' : ''}`}></i>
        </button>
        {/* Dropdown de Gêneros */}
        {showGenres && (
          <div className="absolute top-full right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white dark:bg-dark-card rounded-lg shadow-2xl z-20 custom-scrollbar border dark:border-slate-700">
            <div className='p-4'>
                <h4 className="font-semibold mb-3 text-gray-800 dark:text-dark-text-primary">Gêneros</h4>
                {loadingGenres ? (
                <p className="text-sm text-gray-500">Carregando...</p>
                ) : (
                <div className="flex flex-wrap gap-2">
                    {genres.map(genre => (
                    <button
                        key={genre.id}
                        onClick={() => handleGenreToggle(genre.id)}
                        className={`px-3 py-1 text-xs font-semibold rounded-full transition ${
                        selectedGenres.includes(genre.id)
                            ? 'bg-purple-600 dark:bg-dark-cyan text-white dark:text-dark-bg-primary ring-2 ring-offset-2 ring-offset-white dark:ring-offset-dark-card ring-purple-500 dark:ring-dark-cyan'
                            : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-dark-text-secondary hover:bg-gray-300 dark:hover:bg-slate-600'
                        }`}
                    >
                        {genre.name}
                    </button>
                    ))}
                </div>
                )}
            </div>
            <div className="sticky bottom-0 bg-white dark:bg-dark-card p-3 border-t dark:border-slate-700">
                <button
                    onClick={applyGenreFilter}
                    className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-dark-cyan dark:hover:bg-cyan-700 text-white font-semibold rounded-md transition"
                >
                    Aplicar Filtros
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterControls;