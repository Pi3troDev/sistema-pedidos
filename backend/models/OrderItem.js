const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const OrderItem = sequelize.define('OrderItem', 
    {
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
        type: DataTypes.FLOAT,
        allowNull: false
    }
    },
      {
        timestamps: false
      }
);

module.exports = OrderItem;