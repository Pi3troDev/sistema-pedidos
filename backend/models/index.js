const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    port: process.env.DB_PORT
  }
);

sequelize.authenticate()
  .then(() => console.log('Conexão MariaDB OK!'))
  .catch(err => console.error('Erro na conexão:', err));

module.exports = { sequelize };
