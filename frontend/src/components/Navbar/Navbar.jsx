import React from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const { user, logoutAction } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAction();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/dashboard">🍽️ Pedidos Online</a>
        </div>
        <div className="navbar-menu">
          <span className="navbar-user">Olá, {user?.username || user?.email}</span>
          <button onClick={handleLogout} className="logout-button">Sair</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;