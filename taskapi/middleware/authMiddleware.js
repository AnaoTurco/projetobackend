const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Extrair o token do cabeçalho Authorization (formato: "Bearer <token>")
  const token = req.header('123') && req.header('123').split(' ')[1];

  // Verifica se o token foi fornecido
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Nenhum token fornecido.' });
  }

  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Anexa o userId decodificado ao objeto req
    req.userId = decoded.userId;
    next();  // Passa o controle para o próximo middleware ou rota
  } catch (error) {
    // Caso o token seja inválido ou expirado
    res.status(400).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;
