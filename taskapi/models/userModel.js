const mongoose = require('mongoose');

// Definindo o esquema para o usuário
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // outros campos conforme necessário
});

// Criando o modelo a partir do esquema
const User = mongoose.model('User', userSchema);

module.exports = User;
