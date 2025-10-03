import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useCart } from '../../context/CartContext.jsx'; // Importa o hook do carrinho
import { useNavigate } from 'react-router-dom';
import CartModal from '../Cart/CartModal.jsx'; // Importa o modal do carrinho
import './Navbar.css';

function Navbar() {
  const { user, logoutAction } = useAuth();
  const { cartCount } = useCart(); // Pega a contagem de itens do carrinho
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar o modal

  const handleLogout = () => {
    logoutAction();
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="/dashboard">🍽️ Pedidos Online</a>
          </div>
          <div className="navbar-menu">
            <span className="navbar-user">Olá, {user?.username || user?.email}</span>
            {/* Botão do carrinho */}
            <div className="cart-button-container" onClick={() => setIsCartOpen(true)}>
              <span>🛒 Carrinho</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
            <button onClick={handleLogout} className="logout-button">Sair</button>
          </div>
        </div>
      </nav>
      {/* Renderiza o modal do carrinho */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default Navbar;

