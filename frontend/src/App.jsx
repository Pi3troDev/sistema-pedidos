import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';

// Importa nossas páginas
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx'; // Importa a página de cadastro
import ClientDashboard from './pages/ClientDashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          {/* AQUI ESTÁ A ROTA QUE FALTAVA */}
          <Route path="/register" element={<RegisterPage />} />
          
          <Route path="/dashboard" element={<ClientDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* Rota principal leva para o login */}
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;