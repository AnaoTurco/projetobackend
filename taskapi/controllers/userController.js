const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Função para criar um novo usuário
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Verifica se os campos obrigatórios estão presentes
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    console.log('Recebendo dados:', req.body);

    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    // Hash da senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Senha criptografada:', hashedPassword);

    // Criação do novo usuário
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    // Salvando o novo usuário no banco de dados
    await newUser.save();
    console.log('Usuário criado:', newUser);

    // Retorna a resposta de sucesso
    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ message: 'Erro ao criar usuário', error });
  }
};

module.exports = { createUser };
