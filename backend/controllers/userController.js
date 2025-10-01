const { User } = require("../models"); 

async function getUsers(req, res) {
  try {
    const users = await User.findAll(); 
    res.json(users);                     
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


async function getUserById(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


async function createUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


async function updateUser(req, res) {
  try {
    const userId = req.user.id;
    const [updated] = await User.update(req.body, { where: { id: userId } });
    if (!updated) return res.status(404).json({ error: "Usuário não encontrado" });
    const updatedUser = await User.findByPk(userId);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json({ message: "Usuário deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
