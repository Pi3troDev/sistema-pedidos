import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL base da sua API
});

// Interceptor: Adiciona o token de autenticação em todas as requisições
api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('jwt_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


// Função de Login
export const login = async (email, password) => {
  try {
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
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Erro na chamada de registro:', error.response?.data || error.message);
    throw error.response?.data || { error: 'Erro de conexão' };
  }
};

// --- NOVA FUNÇÃO ---
// Função para buscar todos os produtos
export const getProducts = async () => {
  try {
    // A rota no backend para buscar produtos (precisaremos criá-la)
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error.response?.data || error.message);
    throw error.response?.data || { error: 'Erro ao conectar com o servidor' };
  }
};


export default api;

