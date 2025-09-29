const {sequelize} = require('./index');
const Order = require('./Order');
const OrderItem = require('./OrderItem');

async function teste() {
   try {
    await sequelize.authenticate();
    console.log("Conexão OK!");

    await sequelize.sync({ force: false });
    console.log('Tabela Order criada ou já existente');

    //ORDER 
    const newOrder = await Order.create({
      userId: newUser.id,
      status: 'pendente',
      total: newProduct.preco
    });
    console.log('Pedido criado:', newOrder.toJSON());

    // Cria um item de pedido vinculado ao pedido e produto
    const newOrderItem = await OrderItem.create({
      orderId: newOrder.id,
      productId: newProduct.id,
      quantidade: 1,
      preco: newProduct.preco
    });
    console.log('Item do pedido criado:', newOrderItem.toJSON());

    const orders = await Order.findAll();
    console.log('Todos pedidos:', orders.map(o => o.toJSON()));

    const orderItems = await OrderItem.findAll();
    console.log('Todos itens de pedidos:', orderItems.map(oi => oi.toJSON()));

  } catch (err) {
    console.error('Deu um problema:', err);
  } finally {
    await sequelize.close();
    console.log('Conexão encerrada');
  }
}

teste();