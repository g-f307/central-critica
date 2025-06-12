import express from 'express';
import db from '../models/index.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
const { Article, User } = db;

// ROTA POST: Criar um novo artigo (Protegida)
router.post('/', authMiddleware, async (req, res) => {
  const { title, content, slug } = req.body;
  const userId = req.user.id; 

  if (!title || !content) {
    return res.status(400).json({ message: 'Título e conteúdo são obrigatórios.' });
  }

  try {
    const newArticle = await Article.create({
      userId,
      title,
      content,
      slug: slug || null,
    });

    const articleWithAuthor = await Article.findByPk(newArticle.id, {
        include: [{
            model: User,
            as: 'author',
            attributes: ['id', 'firstName', 'lastName', 'profileImageUrl']
        }]
    });

    res.status(201).json({ message: 'Artigo criado com sucesso!', article: articleWithAuthor });
  } catch (error) {
    console.error('Erro ao criar artigo:', error);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
        const messages = error.errors.map(e => e.message);
        return res.status(400).json({ message: 'Erro de validação', errors: messages });
    }
    res.status(500).json({ message: 'Erro interno do servidor ao tentar criar artigo.' });
  }
});

// ROTA PUT: Atualizar um artigo existente (Protegida e com verificação de autoria)
router.put('/:slug', authMiddleware, async (req, res) => {
    const { slug } = req.params;
    const { title, content } = req.body;
    const userId = req.user.id;

    if (!title || !content) {
        return res.status(400).json({ message: 'Título e conteúdo são obrigatórios.' });
    }

    try {
        const article = await Article.findOne({ where: { slug } });

        if (!article) {
            return res.status(404).json({ message: 'Artigo não encontrado.' });
        }

        // Verificação de autoria
        if (article.userId !== userId) {
            return res.status(403).json({ message: 'Acesso negado. Você não é o autor deste artigo.' });
        }

        // Atualiza o artigo
        article.title = title;
        article.content = content;
        // O slug não será alterado na edição para manter a URL estável.
        // Se o título mudar, o slug permanece o mesmo.

        await article.save();

        res.json({ message: 'Artigo atualizado com sucesso!', article });

    } catch (error) {
        console.error(`Erro ao atualizar artigo com slug ${slug}:`, error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});


// ROTA DELETE: Excluir um artigo (Protegida e com verificação de autoria)
router.delete('/:slug', authMiddleware, async (req, res) => {
    const { slug } = req.params;
    const userId = req.user.id;

    try {
        const article = await Article.findOne({ where: { slug } });

        if (!article) {
            return res.status(404).json({ message: 'Artigo não encontrado.' });
        }

        // Verificação de autoria
        if (article.userId !== userId) {
            return res.status(403).json({ message: 'Acesso negado. Você não é o autor deste artigo.' });
        }

        // Exclui o artigo
        await article.destroy();

        res.json({ message: 'Artigo excluído com sucesso.' });

    } catch (error) {
        console.error(`Erro ao excluir artigo com slug ${slug}:`, error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});


// ROTA GET: Buscar todos os artigos (para a página Jornal)
router.get('/', async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: [{
        model: User,
        as: 'author',
        attributes: ['id', 'firstName', 'lastName', 'profileImageUrl'],
      }],
      order: [['createdAt', 'DESC']],
    });
    res.json(articles);
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    res.status(500).json({ message: 'Erro interno do servidor ao tentar buscar artigos.' });
  }
});

// ROTA GET: Buscar um artigo específico pelo slug (para leitura individual)
router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    try {
        const article = await Article.findOne({
            where: { slug },
            include: [{
                model: User,
                as: 'author',
                attributes: ['id', 'firstName', 'lastName', 'profileImageUrl'],
            }],
        });
        if (!article) {
            return res.status(404).json({ message: 'Artigo não encontrado.' });
        }
        res.json(article);
    } catch (error) {
        console.error(`Erro ao buscar artigo com slug ${slug}:`, error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});
    
export default router;