const express = require('express');
const router = express.Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');

router.get('/', authenticate, getUsers);       // precisa de login
router.get('/:id', authenticate, getUserById); // precisa de login
router.post('/', createUser);                  // criar usuário não precisa de login
router.put('/:id', authenticate, updateUser); // precisa de login
router.delete('/:id', authenticate, deleteUser); // precisa de login


module.exports = router;