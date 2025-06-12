import React from 'react';
import { useGenres } from '../contexts/GenreContext';

const MediaCard = ({ media, type, onOpenModal }) => {
  const { getGenreNamesByIds, loadingGenres } = useGenres();

  const imageUrl = media.poster_path
    ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
    : `https://via.placeholder.com/500x750.png/E2E8F0/4A5568?text=${encodeURIComponent(media.title || media.name || 'Mídia')}`;

  const title = type === 'movie' ? media.title : media.name;
  const releaseDate = type === 'movie' ? media.release_date : media.first_air_date;
  const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
  const voteAverage = media.vote_average ? media.vote_average.toFixed(1) : 'N/A';

  const displayGenres = loadingGenres 
    ? [] 
    : (media.genres ? media.genres.slice(0, 2).map(g => g.name) : getGenreNamesByIds(media.genre_ids || [], type));
  
  const handleCardClick = () => {
    if (onOpenModal) {
      onOpenModal(media.id, type);
    }
  };
  
  const getGenreTagClass = (genreName = "") => {
    const normalizedGenre = genreName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    switch (normalizedGenre) {
      case 'Acao': case 'action': return 'action';
      case 'Aventura': case 'adventure': return 'adventure';
      case 'Ficcao-cientifica': case 'science-fiction': return 'scifi';
      case 'Drama': return 'drama';
      case 'Crime': return 'crime';
      case 'Animacao': case 'animation': return 'animation';
      case 'Fantasia': case 'fantasy': return 'fantasy';
      case 'Comedia': case 'comedy': return 'comedy';
      case 'Terror': return 'terror';
      case 'Misterio': case 'mystery': return 'misterio';
      case 'Familia': case 'family': return 'familia';
      default: return 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200';
    }
  };


  return (
    <div 
      onClick={handleCardClick}
      className="bg-white dark:bg-dark-card rounded-xl shadow-lg dark:shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex flex-col h-full cursor-pointer card-hover group"
      role="button"
      tabIndex="0"
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick()}
      aria-label={`Ver detalhes de ${title}`}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105 bg-gray-200 dark:bg-slate-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-2 left-2 text-white text-xs flex items-center bg-black/50 p-1 rounded">
             <i className="fas fa-star text-yellow-400 mr-1"></i>
             <span className="font-bold">{voteAverage}</span>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-1 truncate text-light-text-primary dark:text-dark-text-primary">{title}</h3>
        
        <div className="flex items-center text-xs text-gray-500 dark:text-dark-text-muted mb-2">
            <span>{year}</span>
            {displayGenres.length > 0 && <span className="mx-2">•</span>}
            <div className="flex flex-wrap gap-1 truncate">
              {displayGenres.map((genreName, index) => (
                // As classes de tamanho extra (!text-[10px] etc.) foram removidas daqui
                <span key={index} className={`genre-tag ${getGenreTagClass(genreName)}`}>
                  {genreName}
                </span>
              ))}
            </div>
        </div>
        
        <p className="text-sm flex-grow h-[60px] overflow-hidden text-light-text-secondary dark:text-dark-text-secondary line-clamp-3">
            {media.overview || 'Sinopse não disponível.'}
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
          <div className="text-center font-semibold text-purple-600 dark:text-dark-cyan group-hover:text-purple-800 dark:group-hover:text-cyan-300 transition-colors">
            Ver detalhes
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;