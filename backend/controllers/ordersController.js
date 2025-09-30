const { Order, OrderItem, Products, User } = require('../models'); // <- corrigido

// Criar um pedido
async function createOrder(req, res) {
  try {
    const userId = req.user.id; 
    const { items } = req.body; 

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Nenhum item enviado' });
    }

    // Cria o pedido com total inicial 0
    const order = await Order.create({ userId, total: 0, status: 'Em preparo' });

    let total = 0;

    for (const item of items) {
      const product = await Products.findByPk(item.productId); // <- corrigido
      if (!product) return res.status(404).json({ error: `Produto ${item.productId} não encontrado` });

      const subtotal = product.preco * item.quantidade;
      total += subtotal;

      await OrderItem.create({
        orderId: order.id,
        productId: product.id,
        quantidade: item.quantidade,
        preco: product.preco
      });

      // Atualiza estoque do produto
      if (product.estoque < item.quantidade) {
        return res.status(400).json({ error: `Estoque insuficiente para o produto ${product.nome}` });
      }
      await product.decrement('estoque', { by: item.quantidade });
    }

    // Atualiza total do pedido
    order.total = total;
    await order.save();

    res.status(201).json({ message: 'Pedido criado com sucesso', orderId: order.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Listar pedidos
async function getOrders(req, res) {
  try {
    const user = req.user;

    let orders;
    if (user.isAdmin) {
      // Admin vê todos os pedidos
      orders = await Order.findAll({ 
        include: [
          { model: OrderItem, include: [Products] }, // <- corrigido
          { model: User, attributes: ['id', 'username', 'email'] }
        ] 
      });
    } else {
      // Cliente vê só os seus pedidos
      orders = await Order.findAll({ 
        where: { userId: user.id }, 
        include: [{ model: OrderItem, include: [Products] }] // <- corrigido
      });
    }

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Atualizar status do pedido (admin)
async function updateOrderStatus(req, res) {
  try {
    const user = req.user;
    if (!user.isAdmin) return res.status(403).json({ error: 'Apenas admins podem atualizar pedidos' });

    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findByPk(id);
    if (!order) return res.status(404).json({ error: 'Pedido não encontrado' });

    order.status = status;
    await order.save();

    res.json({ message: 'Status do pedido atualizado', order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createOrder, getOrders, updateOrderStatus };
