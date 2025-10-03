import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx'; // Importa o CartProvider

// Importa nossas páginas
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ClientDashboard from './pages/ClientDashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

function App() {
  return (
    <AuthProvider>
      <CartProvider> {/* Adiciona o CartProvider aqui */}
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ClientDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

