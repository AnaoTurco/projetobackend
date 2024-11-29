const Task = require('../models/taskModel');  // Certifique-se de que o caminho do modelo está correto

// Função para obter todas as tarefas
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para criar uma nova tarefa
exports.createTask = async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  
  try {
    const newTask = new Task({
      title,
      description,
      status,
      dueDate
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Função para atualizar uma tarefa existente
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, dueDate } = req.body;
  
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, status, dueDate },
      { new: true }
    );
    
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Função para deletar uma tarefa
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  
  try {
    await Task.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
