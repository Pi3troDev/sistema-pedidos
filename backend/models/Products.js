'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const Products = sequelize.define('Products', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: { 
      type: DataTypes.STRING, 
      allowNull: true 
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    estoque: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false, 
  });

  return Products;
};