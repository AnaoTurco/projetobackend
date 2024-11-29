const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./taskapi/routes/userRoutes');

app.use(bodyParser.json()); // Para ler JSON no corpo da requisição
app.use('/api/users', userRoutes); // Registra as rotas do usuário

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
