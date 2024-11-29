const express = require('express');
const router = express.Router();

// Certifique-se de que o controlador de tarefas foi importado corretamente
const taskController = require('../controllers/taskController');

// Definindo a rota GET para buscar tarefas
router.get('/', taskController.getTasks);  // Certifique-se de que getTasks esteja definido no controlador

// Definindo outras rotas como POST, PUT, DELETE
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
