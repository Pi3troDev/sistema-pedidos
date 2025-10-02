import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL base da sua API
});

// Função de Login atualizada para enviar 'password'
export const login = async (email, password) => {
  try {
    // AQUI ESTÁ A MUDANÇA: Agora enviamos 'password'
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Erro na chamada de login:', error.response?.data || error.message);
    throw error.response?.data || { error: 'Erro de conexão' };
  }
};

// Função de Cadastro
export const register = async (userData) => {
  try {
    // A rota do backend para criar usuário é a raiz '/users' com o método POST
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Erro na chamada de registro:', error.response?.data || error.message);
    throw error.response?.data || { error: 'Erro de conexão' };
  }
};

export default api;

