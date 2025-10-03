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
    },
    // --- AQUI ESTÁ A CORREÇÃO ---
    // Adicionamos a coluna que faltava para que o backend a reconheça
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
    // --- FIM DA CORREÇÃO ---
  }, {
    timestamps: false, 
  });

  return Products;
};
