const express = require('express');
const router = express.Router();

// Controlador de categorias
const { createCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');

// Rota para criar uma nova categoria
router.post('/', createCategory);

// Rota para listar todas as categorias
router.get('/', getCategories);

// Rota para atualizar uma categoria
router.put('/:categoryId', updateCategory);

// Rota para excluir uma categoria
router.delete('/:categoryId', deleteCategory);

module.exports = router;
