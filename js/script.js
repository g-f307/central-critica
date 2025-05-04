// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Media details data
const mediaData = {
    'movie': {
        'Scott Pilgrim': {
            title: 'Oppenheimer',
            type: 'Filme',
            year: '2010',
            duration: '1h52m',
            director: 'Edgar Wright',
            cast: 'Michael Cera, Mary Elizabeth Winstead, Aubrey Plaza',
            synopsis: 'Guitarrista de uma banda de rock do colégio, o jovem Scott Pilgrim nunca teve problemas para conseguir namorada. O problema sempre foi se livrar delas. Mas com Ramona Flowers é diferente, pois ele se apaixona perdidamente por ela e não será nada fácil conquistar seu amor. Ela tem o maior de todos os problemas: um exército de ex-namorados que não medem esforços para eliminar Scott da lista de interessados.',
            cover: 'https://www.themoviedb.org/t/p/w1280/wTNLBphcAXZW45CP9yXP3794FD3.jpg',
            audienceRating: '4.5',
            criticRating: '5.0',
            reviews: [
                {user: 'Gabriel Fernandes', rating: 5, comment: 'Edgar Wright, com um rico material em mãos, mostra o porquê de ser um dos melhores diretores de sua geração. Sua condução, estilo e direção de atores fazem de Scott Pilgrim vs. the World minha adaptação de HQs favorita.', date: '2 dias atrás'},
                {user: 'Ana Maria', rating: 4, comment: 'Ritmo dinâmico, personagens excêntricos e muita comédia ao estilo bem peculiar do diretor. Adorei.', date: '1 semana atrás'},
                {user: 'Rebecca Xavier', rating: 5, comment: 'Um filme que fica na mente por dias. As adaptações de quadrinhos hoje em dia deveriam se inspirar neste.', date: '3 dias atrás'}
            ]
        },
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
            cover: 'https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg',
            audienceRating: '4.0',
            criticRating: '4.2',
            reviews: [
                {user: 'Juliana Costa', rating: 5, comment: 'Divertido, inteligente e visualmente deslumbrante. Margot Robbie é perfeita como Barbie!', date: '1 dia atrás'},
                {user: 'Marcos Vinicius', rating: 3, comment: 'Bom filme, mas esperava mais profundidade na crítica social.', date: '5 dias atrás'},
                {user: 'Fernanda Lima', rating: 4, comment: 'Ryan Gosling rouba a cena como Ken. O filme equilibra bem comédia e mensagem.', date: '3 dias atrás'}
            ]
        },
        'Duna': {
            title: 'Duna',
            type: 'Filme',
            year: '2021',
            duration: '2h35m',
            director: 'Denis Villeneuve',
            cast: 'Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Zendaya',
            synopsis: 'O jovem Paul Atreides embarca em uma jornada pelo planeta mais perigoso do universo para garantir o futuro de sua família e seu povo.',
            cover: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/obhGsx4PE9OzsVGtIfoLAIIWGNb.jpg',
            audienceRating: '4.5',
            criticRating: '4.5',
            reviews: [
                {user: 'Rafael Gomes', rating: 5, comment: 'Visualmente deslumbrante e fiel ao espírito do livro. Villeneuve acertou em cheio.', date: '1 semana atrás'},
                {user: 'Patrícia Santos', rating: 4, comment: 'Ótima adaptação, mas fiquei com vontade de mais desenvolvimento para alguns personagens.', date: '3 dias atrás'},
                {user: 'Lucas Mendes', rating: 5, comment: 'A trilha sonora de Hans Zimmer é espetacular e complementa perfeitamente as imagens.', date: '5 dias atrás'}
            ]
        },
        'Interestelar': {
            title: 'Interestelar',
            type: 'Filme',
            year: '2014',
            duration: '2h49m',
            director: 'Christopher Nolan',
            cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine',
            synopsis: 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.',
            cover: 'https://image.tmdb.org/t/p/w500/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg',
            audienceRating: '4.7',
            criticRating: '4.7',
            reviews: [
                {user: 'Gabriel Oliveira', rating: 5, comment: 'Uma obra-prima da ficção científica que combina emoção e ciência de forma brilhante.', date: '2 semanas atrás'},
                {user: 'Camila Rocha', rating: 5, comment: 'O final é de tirar o fôlego. Um dos melhores filmes de Nolan, sem dúvida.', date: '1 semana atrás'},
                {user: 'Rodrigo Silva', rating: 4, comment: 'Visualmente impressionante, mas alguns conceitos científicos poderiam ser mais bem explicados.', date: '4 dias atrás'}
            ]
        }
    },
    'series': {
        'Better Call Saul': {
            title: 'Better Call Saul',
            type: 'Série',
            year: '2015-2022',
            seasons: '6 temporadas',
            episodes: '63 episódios',
            creators: 'Vince Gilligan, Peter Gould',
            cast: 'Bob Odenkirk, Jonathan Banks, Rhea Seehorn',
            synopsis: 'Esta prequela de "Breaking Bad" acompanha o advogado medíocre Jimmy McGill na sua transformação no moralmente ambíguo advogado Saul Goodman.',
            cover: 'https://www.themoviedb.org/t/p/w1280/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg',
            audienceRating: '5.0',
            criticRating: '5.0',
            reviews: [
                {user: 'Gabriel Fernandes', rating: 5, comment: 'A melhor prequel de séries já feita. Tudo o que Better Call Saul se propõe a fazer, executa com maestria. Ouso até dizer que chegou ao mesmo nível da sua antecessora.', date: '2 dias atrás'},
                {user: 'Patricia Souza', rating: 5, comment: 'Nunca vi uma série com uma fidelidade argumental tão boa quanto essa. Bob Odenkirk merecia um Emmy.', date: '1 semana atrás'},
                {user: 'Yasmim Frota', rating: 4, comment: 'Ainda prefiro Breaking Bad, mas foi muito bom matar a saudade desses personagens nesse universo tão rico construído por Vince Gilligan.', date: '4 dias atrás'}
            ]
        },
        'The Last of Us': {
            title: 'The Last of Us',
            type: 'Série',
            year: '2023',
            seasons: '1 temporada',
            episodes: '9 episódios',
            creators: 'Craig Mazin, Neil Druckmann',
            cast: 'Pedro Pascal, Bella Ramsey, Gabriel Luna',
            synopsis: 'Vinte anos após a destruição da civilização moderna, Joel é contratado para contrabandear Ellie, uma menina de 14 anos, para fora de uma zona de quarentena opressiva. O que começa como um pequeno trabalho logo se torna uma jornada brutal e de partir o coração.',
            cover: 'https://image.tmdb.org/t/p/w500/1Wtfucko1wQBAN4rJbRnqA6kqQQ.jpg',
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
            cover: 'https://image.tmdb.org/t/p/w500/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg',
            audienceRating: '4.5',
            criticRating: '4.9',
            reviews: [
                {user: 'Luiza Fernandes', rating: 5, comment: 'O diálogo mais afiado da TV atual. Cada personagem é complexo e fascinante.', date: '3 dias atrás'},
                {user: 'Gustavo Henrique', rating: 5, comment: 'A temporada final foi perfeita. Um final digno dessa obra-prima.', date: '1 semana atrás'},
                {user: 'Camila Rocha', rating: 4, comment: 'Demorei a engrenar, mas quando peguei o ritmo, viciei completamente.', date: '2 semanas atrás'}
            ]
        },
        'The Bear': {
            title: 'The Bear',
            type: 'Série',
            year: '2022',
            genre: 'Comédia, Drama',
            seasons: '2 temporadas',
            episodes: '18 episódios',
            creators: 'Christopher Storer',
            cast: 'Jeremy Allen White, Ayo Edebiri, Liza Colón-Zayas',
            network: 'FX',
            synopsis: 'The Bear segue Carmen "Carmy" Berzatto (Jeremy Allen White), um jovem chef de cozinha de elite que retorna a Chicago para administrar a lanchonete de sanduíches de sua família após a morte trágica de seu irmão. Enfrentando funcionários resistentes, dívidas crescentes e seu próprio trauma não resolvido, Carmy tenta transformar o estabelecimento decadente em um restaurante de alta qualidade, enquanto lida com as complexidades da família, do luto e da paixão pela gastronomia.',
            cover: 'https://image.tmdb.org/t/p/w500/oG4Zv3ioI3N3enFHCGeZDpYpRBQ.jpg',
            audienceRating: '4.6',
            criticRating: '4.7',
            reviews: [
                {user: 'Rafael Gomes', rating: 5, comment: 'Caótica, intensa e emocionante. Captura perfeitamente o estresse de uma cozinha profissional.', date: '1 semana atrás'},
                {user: 'Patrícia Santos', rating: 4, comment: 'Jeremy Allen White está fenomenal. A segunda temporada expande o universo de forma brilhante.', date: '3 dias atrás'},
                {user: 'Lucas Mendes', rating: 5, comment: 'A representação mais realista de uma cozinha de restaurante que já vi na TV. Episódio 7 da 2ª temporada é obra-prima!', date: '5 dias atrás'}
            ]
        },
        'Breaking Bad': {
            title: 'Breaking Bad',
            type: 'Série',
            year: '2008',
            genre: 'Drama, Crime',
            seasons: '5 temporadas',
            episodes: '62 episódios',
            creators: 'Vince Gilligan',
            cast: 'Bryan Cranston, Aaron Paul, Anna Gunn',
            network: 'AMC',
            synopsis: 'Breaking Bad acompanha Walter White (Bryan Cranston), um professor de química do ensino médio que, após ser diagnosticado com câncer terminal, começa a fabricar metanfetamina para garantir o futuro financeiro de sua família. Com a ajuda de Jesse Pinkman (Aaron Paul), um ex-aluno problemático, Walter mergulha no mundo do crime, transformando-se de um homem comum em um temido chefão das drogas conhecido como Heisenberg. A série é um estudo fascinante da transformação moral e das consequências imprevistas das escolhas de um homem.',
            cover: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            audienceRating: '4.9',
            criticRating: '4.9',
            reviews: [
                {user: 'Gabriel Oliveira', rating: 5, comment: 'A melhor série de todos os tempos. Bryan Cranston e Aaron Paul têm uma química inigualável.', date: '2 semanas atrás'},
                {user: 'Camila Rocha', rating: 5, comment: 'Arco de personagem mais bem executado da história da TV. Walter White é inesquecível.', date: '1 semana atrás'},
                {user: 'Rodrigo Silva', rating: 5, comment: 'Cada temporada supera a anterior. O episódio "Ozymandias" é perfeito em todos os aspectos.', date: '4 dias atrás'}
            ]
        },
        'Stranger Things': {
            title: 'Stranger Things',
            type: 'Série',
            year: '2016',
            genre: 'Terror, Ficção Científica',
            seasons: '4 temporadas',
            episodes: '34 episódios',
            creators: 'Matt Duffer, Ross Duffer',
            cast: 'Millie Bobby Brown, Finn Wolfhard, Noah Schnapp',
            network: 'Netflix',
            synopsis: 'Stranger Things se passa na pequena cidade de Hawkins, Indiana, nos anos 1980. Quando o jovem Will Byers desaparece misteriosamente, seus amigos - Mike, Dustin e Lucas - embarcam em uma busca para encontrá-lo, cruzando com Eleven, uma garota com poderes psicocinéticos que escapou de um laboratório secreto do governo. A série mistura elementos de terror, ficção científica e nostalgia dos anos 80, enquanto os personagens enfrentam criaturas do Mundo Invertido e conspirações governamentais.',
            cover: 'https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg',
            audienceRating: '4.5',
            criticRating: '4.6',
            reviews: [
                {user: 'Mariana Costa', rating: 5, comment: 'Nostalgia pura dos anos 80 com uma história original e personagens cativantes. Eleven é incrível!', date: '3 dias atrás'},
                {user: 'Pedro Henrique', rating: 4, comment: 'A quarta temporada elevou a série a novos patamares. Vecna é um vilão memorável.', date: '1 semana atrás'},
                {user: 'Luiza Fernandes', rating: 4, comment: 'Adoro a dinâmica entre os personagens. A trilha sonora é perfeita para a atmosfera da série.', date: '2 semanas atrás'}
            ]
        }
    },
    'music': {
        'Under The Bridge - Red Hot Chili Peppers': {
            title: 'Under The Bridge',
            artist: 'Red Hot Chili Peppers',
            type: 'Música',
            year: '1991',
            album: 'Blood Sugar Sex Magik',
            duration: '4:24',
            genre: 'Rock, Funk',
            synopsis: 'A canção "Under the Bridge" do Red Hot Chili Peppers narra a experiência do vocalista Anthony Kiedis com o vício em drogas e a solidão resultante, expressando seus sentimentos de isolamento e busca por conexão.',
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/5e/RHCP-BSSM.jpg',
            audienceRating: '4.8',
            criticRating: '4.5',
            reviews: [
                {user: 'Gabriel Fernandes', rating: 5, comment: 'Impossível enjoar dessa música. Uma das melhores letras já compostas da história do rock.', date: '1 dia atrás'},
                {user: 'Rebecca Xavier', rating: 4, comment: 'Ótima música, ótimos acordes de Frusciante na guitarra.', date: '3 dias atrás'},
                {user: 'Yasmim Frota', rating: 5, comment: 'Me faz refletir sobre a vida e nosso papel enquanto ser humano. Provavelmente a melhor balada que o red hot já fez.', date: '1 semana atrás'}
            ]
        },
        'Quixoticelixer - Red Hot Chili Peppers': {
            title: 'Quixoticelixer',
            artist: 'Red Hot Chili Peppers',
            type: 'Música',
            year: '1999',
            album: 'Californication',
            duration: '34:48',
            genre: 'Rock, Funk',
            synopsis: '"Quixoticelixer" é o nome de uma música da banda Red Hot Chili Peppers. A sinopse da música descreve uma reflexão poética sobre as emoções humanas, a busca por significado e a luta entre o desejo e a realidade.',
            cover: 'https://m.media-amazon.com/images/I/81x1drakpHS._UF1000,1000_QL80_.jpg',
            audienceRating: '4.8',
            criticRating: '4.5',
            reviews: [
                {user: 'Gabriel Fernandes', rating: 5, comment: 'Simplesmente não entendo o motivo dessa b-side não ter entrado na seleção ofical do álbum. Perfeita demais. ', date: '1 dia atrás'},
                {user: 'Yasmim Frota', rating: 4, comment: 'John  Frusciante dá uma aula de como fazer backing vocals.', date: '3 dias atrás'},
                {user: 'Rebecca Xavier', rating: 5, comment: 'Depois de um álbum bem sólido em sua proposta, sinto que Quixoticelixer seria uma boa adição.', date: '1 semana atrás'}
            ]
        },
        'Dosed - Red Hot Chili Peppers': {
            title: 'Dosed',
            artist: 'Red Hot Chili Peppers',
            type: 'Música',
            year: '2002',
            album: 'By the Way',
            duration: '5:12',
            genre: 'Rock, Balada',
            synopsis: 'A música "Dosed" do Red Hot Chili Peppers é uma balada que fala sobre perda e a permanência do amor após a morte de alguém querido. A letra sugere um diálogo interno do vocalista Anthony Kiedis, refletindo sobre a dor da perda e a necessidade de seguir em frente.',
            cover: 'https://i.scdn.co/image/ab67616d0000b273de1af2785a83cc660155a0c4',
            audienceRating: '4.8',
            criticRating: '4.5',
            reviews: [
                {user: 'Gabriel Fernandes', rating: 5, comment: 'Poucas músicas comunicam tanto em sua letra como essa. Uma harmonia sonora digna de prêmios.', date: '1 dia atrás'},
                {user: 'Rebecca Xavier', rating: 4, comment: 'Tenho que confessar: o red hot se superou nessa. Melhor música do álbum.', date: '3 dias atrás'},
                {user: 'Yasmim Frota', rating: 5, comment: 'Viciante, tocante e muito bem interpretada pela banda, em especial John Frusciante.', date: '1 semana atrás'}
            ]
        },
        'Flowers - Miley Cyrus': {
            title: 'Flowers',
            artist: 'Miley Cyrus',
            type: 'Música',
            year: '2023',
            album: 'Endless Summer Vacation',
            duration: '3:20',
            genre: 'Pop, Disco',
            synopsis: '"Flowers" é uma música de empoderamento sobre superar um término e encontrar a felicidade em si mesma. A faixa apresenta influências disco e pop dos anos 70/80, com letras que celebram a auto-suficiência.',
            cover: 'https://f4.bcbits.com/img/a0467213482_10.jpg',
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
            cover: 'https://preview.redd.it/kill-bill-cover-art-concept-i-made-v0-dict3cev4d7a1.jpg?width=640&crop=smart&auto=webp&s=bfb4fda5081828a22322d78e2e4f17c437bc4087',
            audienceRating: '4.7',
            criticRating: '4.6',
            reviews: [
                {user: 'Bruno Oliveira', rating: 5, comment: 'SZA nunca erra. Essa música é a combinação perfeita de letra inteligente e batida cativante.', date: '2 dias atrás'},
                {user: 'Carla Mendonça', rating: 4, comment: 'Adoro a vibe da música, mas acho que poderia ser um pouco mais longa.', date: '5 dias atrás'},
                {user: 'Diego Ramos', rating: 5, comment: 'A referência ao filme é genial. SZA transformou uma cena violenta em uma metáfora emocional poderosa.', date: '1 semana atrás'}
            ]
        },
        'Anti-Hero - Taylor Swift': {
            title: 'Anti-Hero',
            artist: 'Taylor Swift',
            type: 'Música',
            year: '2022',
            genre: 'Pop',
            duration: '3h20m',
            album: 'Midnights',
            label: 'Republic Records',
            synopsis: 'Reflexão introspectiva sobre inseguranças e falhas pessoais, com uma melodia pop cativante e letras profundas. Anti-Hero se tornou um dos maiores sucessos do álbum Midnights, com Taylor explorando suas próprias imperfeições de forma honesta e vulnerável.',
            cover: 'https://th.bing.com/th/id/R.a38addbd35c789e3870844ec846cc0e3?rik=jEx0CEKOPX3hPw&pid=ImgRaw&r=0',
            audienceRating: '4.7',
            criticRating: '4.8',
            reviews: [
                {user: 'Rafael Gomes', rating: 5, comment: 'Taylor no seu mais introspectivo. A letra é incrivelmente honesta e a melodia é viciante.', date: '1 semana atrás'},
                {user: 'Patrícia Santos', rating: 4, comment: 'Ótima música, mas esperava algo mais experimental do álbum Midnights.', date: '3 dias atrás'},
                {user: 'Lucas Mendes', rating: 5, comment: 'Hino da autoaceitação! Taylor nunca erra quando fala sobre suas inseguranças.', date: '5 dias atrás'}
            ]
        },
        'As It Was - Harry Styles': {
            title: 'As It Was',
            artist: 'Harry Styles',
            type: 'Música',
            year: '2022',
            genre: 'Pop',
            duration: '2h47m',
            album: "Harry's House",
            label: 'Columbia Records',
            synopsis: 'Canção nostálgica com batidas sintéticas dos anos 80, explorando mudanças pessoais e a passagem do tempo. As It Was foi o primeiro single do terceiro álbum de estúdio de Harry Styles e rapidamente se tornou um dos maiores hits de sua carreira.',
            cover: 'https://akamai.sscdn.co/uploadfile/letras/albuns/c/f/d/b/1801611685385276.jpg',
            audienceRating: '4.4',
            criticRating: '4.6',
            reviews: [
                {user: 'Gabriel Oliveira', rating: 5, comment: 'Harry Styles dominando o pop dos anos 80! A produção é impecável e a letra é emocionante.', date: '2 semanas atrás'},
                {user: 'Camila Rocha', rating: 4, comment: 'Música perfeita para dançar, mas esperava algo mais profundo liricamente.', date: '1 semana atrás'},
                {user: 'Rodrigo Silva', rating: 5, comment: 'A combinação de nostalgia e pop moderno é simplesmente perfeita!', date: '4 dias atrás'}
            ]
            },
        'Blinding Lights - The Weeknd': {
            title: 'Blinding Lights',
            artist: 'The Weeknd',
            type: 'Música',
            year: '2020',
            genre: 'Synth-pop',
            duration: '3h20m',
            album: 'After Hours',
            label: 'XO, Republic Records',
            synopsis: 'Hino synth-pop com influências dos anos 80 sobre desejo e solidão, com uma batida eletrônica irresistível. Blinding Lights se tornou uma das músicas mais bem-sucedidas comercialmente de todos os tempos, quebrando vários recordes nas paradas musicais globais.',
            cover: 'https://cdn-images.dzcdn.net/images/cover/fd00ebd6d30d7253f813dba3bb1c66a9/500x500-000000-80-0-0.jpg',
            audienceRating: '4.8',
            criticRating: '4.9',
            reviews: [
                {user: 'Mariana Costa', rating: 5, comment: 'Obra-prima do pop moderno! The Weeknd capturou perfeitamente a vibe dos anos 80.', date: '3 dias atrás'},
                {user: 'Pedro Henrique', rating: 5, comment: 'Música que nunca canso de ouvir. A produção é impecável e a voz do Abel é incrível.', date: '1 semana atrás'},
                {user: 'Luiza Fernandes', rating: 4, comment: 'Hit absoluto, mas depois de tantas vezes tocando no rádio, perdeu um pouco do encanto.', date: '2 semanas atrás'}
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