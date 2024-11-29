const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');  // Middleware de autenticação
const { createUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/register', createUser);

// Rota para fazer login
router.post('/login', loginUser);

module.exports = router;
