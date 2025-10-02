import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { loginAction } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      // A função loginAction retorna os dados do usuário logado
      const loggedInUser = await loginAction(email, password);

      // *** Lógica de direcionamento ***
      if (loggedInUser && loggedInUser.email === 'admin@email.com') {
        navigate('/admin'); // Se for o admin, vai para o painel de admin
      } else {
        navigate('/dashboard'); // Senão, vai para o painel de cliente
      }

    } catch (err) {
      setError('Email ou senha inválidos. Tente novamente.');
      console.error(err);
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <h2>Login</h2>
        <p>Acesse sua conta para continuar</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seuemail@exemplo.com"
            />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
            />
          </div>
          
          <button type="submit" className="login-button">Entrar</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        <div className="signup-link">
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

