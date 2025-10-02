const { Sequelize, DataTypes } = require('sequelize');
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

const User = require('./User')(sequelize, DataTypes);
const Products = require('./Products')(sequelize, DataTypes);
const Order = require('./Order')(sequelize, DataTypes);
const OrderItem = require('./OrderItem')(sequelize, DataTypes);

const models = { User, Products, Order, OrderItem };
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, ...models };
