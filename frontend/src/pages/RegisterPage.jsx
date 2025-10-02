import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/api.js'; // Importa a função de registro
import './LoginPage.css'; // Reutilizando o mesmo estilo do login

function RegisterPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (senha.length < 3) {
      setError('A senha deve ter pelo menos 3 caracteres.');
      return;
    }

    try {
      const userData = {
        username: nome,
        email: email,
        password: senha,
      };

      await register(userData);

      setMessage('Cadastro realizado com sucesso! Você será redirecionado para o login.');
      
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      // **AQUI ESTÁ A MELHORIA!**
      const serverError = err?.error || '';
      // Verifica se o erro do servidor é sobre email duplicado
      if (typeof serverError === 'string' && serverError.toLowerCase().includes('unique')) {
        setError('Já existe um usuário com este email.');
      } else {
        setError('Não foi possível realizar o cadastro.');
      }
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <h2>Criar Conta</h2>
        <p>Preencha os campos para se cadastrar</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Seu nome completo"
            />
          </div>
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
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              placeholder="Pelo menos 3 caracteres"
            />
          </div>
          
          <button type="submit" className="login-button">Cadastrar</button>
        </form>

        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

        <div className="signup-link">
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

