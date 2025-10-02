import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import './ClientDashboard.css';

// Dados de exemplo com imagens
const mockProducts = [
  { id: 1, nome: 'Hambúrguer Clássico', descricao: 'Pão, carne, queijo, alface e tomate.', preco: '25.50', imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.F1xAp0MYJy0c24s-Hg74nAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 2, nome: 'Pizza Margherita', descricao: 'Molho de tomate, mussarela e manjericão.', preco: '40.00', imageUrl: 'https://laticiniosbomdestino.com.br/2016/wp-content/uploads/2023/03/pizza-marguerita-com-mozzarella-de-bufala-bom-destino-scaled.jpg' },
  { id: 3, nome: 'Batata Frita', descricao: 'Porção generosa de batatas crocantes.', preco: '15.00', imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.WTIKAK-INJSpNMV_mtV9nQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 4, nome: 'Refrigerante Lata', descricao: 'Coca-Cola, Guaraná ou Fanta.', preco: '6.00', imageUrl: 'https://static.paodeacucar.com/img/uploads/1/740/12059740.jpeg' },
  { id: 5, nome: 'Suco Natural', descricao: 'Laranja, abacaxi ou morango.', preco: '8.00', imageUrl: 'https://nutricionistacamille.com/wp-content/uploads/2024/04/imagem-ilustrativa-de-sucos-naturais-com-laranja.webp' },
  { id: 6, nome: 'Brownie de Chocolate', descricao: 'Delicioso brownie com nozes.', preco: '12.00', imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.uGAOc3XmB1q-1L0bkX0yxgHaE6?rs=1&pid=ImgDetMain&o=7&rm=3' },
];

function ClientDashboard() {
  const products = mockProducts;

  return (
    <div className="client-dashboard">
      <Navbar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Nossos Produtos</h1>
          <p>Escolha seus itens favoritos e monte seu pedido!</p>
        </header>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={`Imagem de ${product.nome}`} className="product-image" />
              <div className="product-info">
                <h3>{product.nome}</h3>
                <p className="product-description">{product.descricao}</p>
                <div className="product-footer">
                  <span className="product-price">R$ {product.preco}</span>
                  <button className="add-to-cart-button">Adicionar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ClientDashboard;

