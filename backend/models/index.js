const { Sequelize } = require('sequelize');
require('dotenv').config();

// Sua conexão original, está perfeita
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

const db = {};


db.sequelize = sequelize;

db.User = require("./User")(sequelize, Sequelize);
db.Products = require("./Products")(sequelize, Sequelize);
db.Order = require("./Order")(sequelize, Sequelize);
db.OrderItem = require("./OrderItem")(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;