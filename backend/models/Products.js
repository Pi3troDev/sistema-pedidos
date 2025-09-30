'use strict';
const { DataTypes } = require('sequelize');

// 1. Exporte uma função que recebe 'sequelize' como argumento
module.exports = (sequelize) => {

  // 2. Agora 'sequelize' está definido aqui dentro e pode ser usado
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