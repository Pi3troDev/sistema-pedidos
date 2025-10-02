const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Credenciais inválidas' });

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { login };