const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware');
const { createOrder, getOrders, updateOrderStatus } = require('../controllers/ordersController');

router.post('/', authenticate, createOrder);       // criar pedido
router.get('/', authenticate, getOrders);          // listar pedidos
router.put('/:id', authenticate, updateOrderStatus); // atualizar status (admin)

module.exports = router;