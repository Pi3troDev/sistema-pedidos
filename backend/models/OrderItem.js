'use strict';
const { Model } = require('sequelize');

// Exporte uma função que recebe 'sequelize' e 'DataTypes'
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    // Defina as associações aqui
    static associate(models) {
      // Um item de pedido (OrderItem) pertence a um pedido (Order)
      this.belongsTo(models.Order, { foreignKey: 'orderId' });
      // Um item de pedido (OrderItem) pertence a um produto (Product)
      this.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }

  // Inicialize o modelo com suas colunas
  OrderItem.init({
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2), // Preço no momento da compra
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OrderItem',
    tableName: 'orderitems'
  });

  return OrderItem;
};