const express = require('express');
const router = express.Router();

const { getUsers, createUser, getUserById, updateUser, deleteUser } = require('../controllers/userController');

router.get('/', getUsers);            // Listar todos os usuários
router.get('/:id', getUserById);      // Buscar usuário por ID
router.post('/', createUser);         // Criar usuário
router.put('/:id', updateUser);       // Atualizar usuário
router.delete('/:id', deleteUser);    // Deletar usuário

module.exports = router;
