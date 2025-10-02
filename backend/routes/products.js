const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware');
const ProductsController = require('../controllers/productsController');

router.get('/', ProductsController.getAll);            // listar produtos
router.post('/', authenticate, ProductsController.create);  // criar produto (precisa login)
router.put('/:id', authenticate, ProductsController.update); // atualizar produto
router.delete('/:id', authenticate, ProductsController.remove); // deletar produto

module.exports = router;