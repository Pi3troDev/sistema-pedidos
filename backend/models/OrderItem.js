const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const OrderItem = sequelize.define('OrderItem', {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'orders', key: 'id' }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'products', key: 'id' }
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    preco: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    tableName: 'orderitems',
    timestamps: false
  });

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Order, { foreignKey: 'orderId' });
    OrderItem.belongsTo(models.Products, { foreignKey: 'productId' });
  };

  return OrderItem;
};
