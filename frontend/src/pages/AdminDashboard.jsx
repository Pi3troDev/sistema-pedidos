import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Estilo para a página

function AdminDashboard() {
  const { user, logoutAction } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAction();
    navigate('/login');
  };

  return (
    <div className="admin-dashboard-container">
      <header className="admin-header">
        <h1>Painel do Administrador</h1>
        <div className="admin-user-info">
          {user && <span>Bem-vindo, {user.email}</span>}
          <button onClick={handleLogout} className="logout-button-admin">Sair</button>
        </div>
      </header>
      <main className="admin-content">
        <h2>Gerenciamento do Sistema</h2>
        <p>Aqui você poderá gerenciar usuários, produtos e pedidos.</p>
        {/* No futuro, aqui entrarão os componentes de gerenciamento */}
      </main>
    </div>
  );
}

export default AdminDashboard;
