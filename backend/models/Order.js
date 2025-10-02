const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Order = sequelize.define('Order', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' } // referencia tabela users
    },
    status: {
      type: DataTypes.ENUM('Em preparo','Pronto','Entregue'),
      allowNull: false,
      defaultValue: 'Em preparo'
    },
    total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'orders',
    timestamps: false // desativa createdAt/updatedAt
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: 'userId' });
    Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
  };

  return Order;
};