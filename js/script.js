// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Media details data
const mediaData = {
    'movie': {
        'Oppenheimer': {
            title: 'Oppenheimer',
            type: 'Filme',
            year: '2023',
            duration: '3h',
            director: 'Christopher Nolan',
            cast: 'Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.',
            synopsis: 'O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.',
            cover: 'https://image.tmdb.org/t/p/w500/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg',
            audienceRating: '4.5',
            criticRating: '4.8',
            reviews: [
                {user: 'Carlos Silva', rating: 5, comment: 'Nolan no seu ápice. A performance de Cillian Murphy é de tirar o fôlego.', date: '2 dias atrás'},
                {user: 'Ana Paula', rating: 4, comment: 'Fotografia e trilha sonora incríveis, mas o ritmo poderia ser mais dinâmico em alguns momentos.', date: '1 semana atrás'},
                {user: 'Roberto Almeida', rating: 5, comment: 'Um filme que fica na mente por dias. A cena da explosão é cinematograficamente perfeita.', date: '3 dias atrás'}
            ]
        },
        'Barbie': {
            title: 'Barbie',
            type: 'Filme',
            year: '2023',
            duration: '1h54m',
            director: 'Greta Gerwig',
            cast: 'Margot Robbie, Ryan Gosling, America Ferrera, Kate McKinnon',
            synopsis: 'Barbie começa a ter pensamentos existenciais e viaja para o mundo real para encontrar verdadeira felicidade.',
            cover: 'https://image.tmdb.org/t/p/w500/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg',
            audienceRating: '4.0',
            criticRating: '4.2',
            reviews: [
                {user: 'Juliana Costa', rating: 5, comment: 'Divertido, inteligente e visualmente deslumbrante. Margot Robbie é perfeita como Barbie!', date: '1 dia atrás'},
                {user: 'Marcos Vinicius', rating: 3, comment: 'Bom filme, mas esperava mais profundidade na crítica social.', date: '5 dias atrás'},
                {user: 'Fernanda Lima', rating: 4, comment: 'Ryan Gosling rouba a cena como Ken. O filme equilibra bem comédia e mensagem.', date: '3 dias atrás'}
            ]
        }
    },
    'series': {
        'The Last of Us': {
            title: 'The Last of Us',
            type: 'Série',
            year: '2023',
            seasons: '1 temporada',
            episodes: '9 episódios',
            creators: 'Craig Mazin, Neil Druckmann',
            cast: 'Pedro Pascal, Bella Ramsey, Gabriel Luna',
            synopsis: 'Vinte anos após a destruição da civilização moderna, Joel é contratado para contrabandear Ellie, uma menina de 14 anos, para fora de uma zona de quarentena opressiva. O que começa como um pequeno trabalho logo se torna uma jornada brutal e de partir o coração.',
            cover: 'https://image.tmdb.org/t/p/w500/9GvhICFMiRQA82vS6ydkXxeEkrd.jpg',
            audienceRating: '4.5',
            criticRating: '4.7',
            reviews: [
                {user: 'Tiago Mendes', rating: 5, comment: 'A melhor adaptação de videogame já feita. Fiel ao espírito do jogo mas com novas camadas narrativas.', date: '2 dias atrás'},
                {user: 'Patricia Souza', rating: 5, comment: 'O episódio 3 é uma das coisas mais lindas já feitas para TV. Choramos muito.', date: '1 semana atrás'},
                {user: 'Rafael Gonçalves', rating: 4, comment: 'Excelente série, mas alguns momentos do jogo foram perdidos na adaptação.', date: '4 dias atrás'}
            ]
        },
        'Succession': {
            title: 'Succession',
            type: 'Série',
            year: '2018-2023',
            seasons: '4 temporadas',
            episodes: '39 episódios',
            creators: 'Jesse Armstrong',
            cast: 'Brian Cox, Jeremy Strong, Sarah Snook, Kieran Culkin',
            synopsis: 'A série acompanha os Roy, uma família disfuncional que controla um dos maiores conglomerados de mídia e entretenimento do mundo. A trama explora temas de poder, família e lealdade enquanto os filhos do patriarca Logan Roy competem pelo controle da empresa.',
            cover: 'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsTZUHgq3jK.jpg',
            audienceRating: '4.5',
            criticRating: '4.9',
            reviews: [
                {user: 'Luiza Fernandes', rating: 5, comment: 'O diálogo mais afiado da TV atual. Cada personagem é complexo e fascinante.', date: '3 dias atrás'},
                {user: 'Gustavo Henrique', rating: 5, comment: 'A temporada final foi perfeita. Um final digno dessa obra-prima.', date: '1 semana atrás'},
                {user: 'Camila Rocha', rating: 4, comment: 'Demorei a engrenar, mas quando peguei o ritmo, viciei completamente.', date: '2 semanas atrás'}
            ]
        }
    },
    'music': {
        'Flowers - Miley Cyrus': {
            title: 'Flowers',
            artist: 'Miley Cyrus',
            type: 'Música',
            year: '2023',
            album: 'Endless Summer Vacation',
            duration: '3:20',
            genre: 'Pop, Disco',
            synopsis: '"Flowers" é uma música de empoderamento sobre superar um término e encontrar a felicidade em si mesma. A faixa apresenta influências disco e pop dos anos 70/80, com letras que celebram a auto-suficiência.',
            cover: 'https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96',
            audienceRating: '4.8',
            criticRating: '4.5',
            reviews: [
                {user: 'Mariana Santos', rating: 5, comment: 'Hino de auto-estima! Miley nunca esteve tão bem. A batida é viciante.', date: '1 dia atrás'},
                {user: 'Rodrigo Martins', rating: 4, comment: 'Ótima música, mas esperava algo mais ousado depois de Plastic Hearts.', date: '3 dias atrás'},
                {user: 'Isabela Cardoso', rating: 5, comment: 'Não consigo parar de ouvir! A letra é perfeita para quem está se recuperando de um término.', date: '1 semana atrás'}
            ]
        },
        'Kill Bill - SZA': {
            title: 'Kill Bill',
            artist: 'SZA',
            type: 'Música',
            year: '2022',
            album: 'SOS',
            duration: '2:33',
            genre: 'R&B, Pop',
            synopsis: 'Inspirada no filme de Quentin Tarantino, "Kill Bill" explora temas de ciúme, obsessão e vingança em um relacionamento terminado. A faixa combina o estilo único de R&B de SZA com uma produção minimalista e letras impactantes.',
            cover: 'https://i.scdn.co/image/ab67616d00001e02a435d5c3c1fb1e94b4e9a27d',
            audienceRating: '4.7',
            criticRating: '4.6',
            reviews: [
                {user: 'Bruno Oliveira', rating: 5, comment: 'SZA nunca erra. Essa música é a combinação perfeita de letra inteligente e batida cativante.', date: '2 dias atrás'},
                {user: 'Carla Mendonça', rating: 4, comment: 'Adoro a vibe da música, mas acho que poderia ser um pouco mais longa.', date: '5 dias atrás'},
                {user: 'Diego Ramos', rating: 5, comment: 'A referência ao filme é genial. SZA transformou uma cena violenta em uma metáfora emocional poderosa.', date: '1 semana atrás'}
            ]
        }
    }
};

// Show media details modal
function showMediaDetails(type, title) {
    const modal = document.getElementById('mediaModal');
    const modalTitle = document.getElementById('mediaModalTitle');
    const modalContent = document.getElementById('mediaModalContent');
    
    modalTitle.textContent = title;
    
    const media = mediaData[type][title];
    
    let content = `
        <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/3">
                <img src="${media.cover}" alt="${title}" class="w-full rounded-lg shadow-md">
                <div class="mt-4 bg-gray-50 p-4 rounded-lg">
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-semibold">Avaliação do público:</span>
                        <div class="flex items-center">
                            <div class="rating-stars">
                                ${generateStars(media.audienceRating)}
                            </div>
                            <span class="ml-2">${media.audienceRating}</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="font-semibold">Avaliação da crítica:</span>
                        <div class="flex items-center">
                            <div class="rating-stars">
                                ${generateStars(media.criticRating)}
                            </div>
                            <span class="ml-2">${media.criticRating}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:w-2/3">
                <h4 class="text-lg font-semibold mb-2">Sinopse</h4>
                <p class="text-gray-700 mb-4">${media.synopsis}</p>
                
                <div class="grid grid-cols-2 gap-4 mb-6">
    `;
    
    if (type === 'movie') {
        content += `
                    <div>
                        <h5 class="font-semibold">Diretor</h5>
                        <p>${media.director}</p>
                    </div>
                    <div>
                        <h5 class="font-semibold">Elenco</h5>
                        <p>${media.cast}</p>
                    </div>
                    <div>
                        <h5 class="font-semibold">Ano</h5>
                        <p>${media.year}</p>
                    </div>
                    <div>
                        <h5 class="font-semibold">Duração</h5>
                        <p>${media.duration}</p>
                    </div>
        `;
    } else if (type === 'series') {
        content += `
                    <div>
                        <h5 class="font-semibold">Criadores</h5>
                        <p>${media.creators}</p>
                    </div>
                    <div>
                        <h5 class="font-semibold">Elenco</h5>
                        <p>${media.cast}</p>
                    </div>
                    <div>
                        <h5 class="font-semibold">Temporadas</h5>
                        <p>${media.seasons}</p>
                    </div>
                    <div>
                        <h5 class="font-semibold">Episódios</h5>
                        <p>${media.episodes}</p>
                    </div>
        `;
    } else if (type === 'music') {
        content += `
                    <div>
                        <h5 class="font-semibold">Artista</h5>
                        <p>${media.artist}</p>
                    </div>
                    <div>
                        <h5 class="font-semibold">Álbum</h5>
                        <p>${media.album}</p>
                    </div>
                    <div>
                        <h5 class="font-semibold">Gênero</h5>
                        <p>${media.genre}</p>
                    </div>
                    <div>
                        <h5 class="font-semibold">Duração</h5>
                        <p>${media.duration}</p>
                    </div>
        `;
    }
    
    content += `
                </div>
                
                <div class="border-t pt-6">
                    <h4 class="text-lg font-semibold mb-4">Críticas</h4>
                    <div class="space-y-4">
    `;
    
    media.reviews.forEach(review => {
        content += `
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <h5 class="font-semibold">${review.user}</h5>
                                    <p class="text-sm text-gray-500">${review.date}</p>
                                </div>
                                <div class="rating-stars">
                                    ${generateStars(review.rating)}
                                </div>
                            </div>
                            <p class="text-gray-700">${review.comment}</p>
                        </div>
        `;
    });
    
    content += `
                    </div>
                    
                    <div class="mt-6">
                        <h4 class="text-lg font-semibold mb-4">Deixe sua crítica</h4>
                        <form>
                            <div class="mb-4">
                                <label class="block text-gray-700 mb-2">Sua avaliação</label>
                                <div class="rating-stars text-2xl mb-2" id="userRating">
                                    <i class="far fa-star cursor-pointer" data-rating="1"></i>
                                    <i class="far fa-star cursor-pointer" data-rating="2"></i>
                                    <i class="far fa-star cursor-pointer" data-rating="3"></i>
                                    <i class="far fa-star cursor-pointer" data-rating="4"></i>
                                    <i class="far fa-star cursor-pointer" data-rating="5"></i>
                                </div>
                                <input type="hidden" id="selectedRating" value="0">
                            </div>
                            <div class="mb-4">
                                <label for="reviewText" class="block text-gray-700 mb-2">Seu comentário</label>
                                <textarea id="reviewText" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
                            </div>
                            <button type="button" onclick="submitReview('${type}', '${title}')" class="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition">Enviar crítica</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = content;
    
    // Add star rating interaction
    const stars = modalContent.querySelectorAll('#userRating .fa-star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            document.getElementById('selectedRating').value = rating;
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
    });
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// Close media modal
function closeMediaModal() {
    const modal = document.getElementById('mediaModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Submit review
function submitReview(type, title) {
    const rating = document.getElementById('selectedRating').value;
    const comment = document.getElementById('reviewText').value;
    
    if (rating === '0') {
        alert('Por favor, selecione uma avaliação com as estrelas.');
        return;
    }
    
    if (!comment.trim()) {
        alert('Por favor, escreva seu comentário antes de enviar.');
        return;
    }
    
    // In a real app, you would send this data to a server
    alert(`Obrigado por sua crítica! Avaliação: ${rating} estrelas\nComentário: ${comment}`);
    
    // Reset form
    document.getElementById('selectedRating').value = '0';
    document.getElementById('reviewText').value = '';
    
    const stars = document.querySelectorAll('#userRating .fa-star');
    stars.forEach(star => {
        star.classList.remove('fas');
        star.classList.add('far');
    });
    
    // Simulate adding the review to the list
    const media = mediaData[type][title];
    const newReview = {
        user: 'Você',
        rating: parseInt(rating),
        comment: comment,
        date: 'Agora mesmo'
    };
    
    media.reviews.unshift(newReview);
    
    // Update the modal content
    showMediaDetails(type, title);
}