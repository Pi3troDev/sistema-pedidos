const {DataTypes, Model} = require('sequelize')
const { sequelize } = require('./index');

const Products = sequelize.define('Products',           
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    estoque: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false   
  }
);


module.exports = Products;