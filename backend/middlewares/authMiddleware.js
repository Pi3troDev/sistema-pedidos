const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'sua_chave_secreta';

function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user; // dados do usuário disponíveis na requisição
    next();
  });
}

module.exports = authenticate;