const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Order = sequelize.define('Order',{
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
    },
      {
        timestamps: false
      }
);

module.exports = Order;