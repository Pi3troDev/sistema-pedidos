const { Products } = require('../models');

// Listar todos os produtos
async function getAll(req, res) {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Criar produto
async function create(req, res) {
  try {
    const { nome, descricao, preco, estoque } = req.body;
    const product = await Products.create({ nome, descricao, preco, estoque });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Atualizar produto
async function update(req, res) {
  try {
    const { id } = req.params;
    const [updated] = await Products.update(req.body, { where: { id } });
    if (!updated) return res.status(404).json({ error: 'Produto não encontrado' });
    const product = await Products.findByPk(id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Deletar produto
async function remove(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Products.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAll, create, update, remove };
