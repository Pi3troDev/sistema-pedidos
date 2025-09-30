require('dotenv').config();
const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');
const { sequelize } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.send('Backend rodando!');
});

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate(); 
    console.log('Conexão com o banco realizada com sucesso!');
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (err) {
    console.error('Erro ao conectar ao banco:', err);
  }
})();
