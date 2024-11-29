const mongoose = require('mongoose');

// Definindo o esquema para a tarefa
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ['pendente', 'em progresso', 'concluída'],  // Valores permitidos
    default: 'pendente',
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Relacionamento com o usuário (se necessário)
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

// Criando o modelo a partir do esquema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
