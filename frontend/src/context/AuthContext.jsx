import React, { createContext, useState, useContext } from 'react';
// IMPORTANTE: Verifique se o caminho para o api.js está correto.
import { login as apiLogin } from '../services/api.js'; 
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedToken = localStorage.getItem('jwt_token');
    if (storedToken) {
      try {
        return jwtDecode(storedToken);
      } catch (error) {
        console.error("Token inválido no localStorage:", error);
        localStorage.removeItem('jwt_token');
        return null;
      }
    }
    return null;
  });

  const loginAction = async (email, password) => {
    try {
      const data = await apiLogin(email, password);
      if (data.token) {
        localStorage.setItem('jwt_token', data.token);
        const decodedUser = jwtDecode(data.token);
        setUser(decodedUser);
        return decodedUser;
      }
    } catch (error) {
      console.error("Falha no loginAction:", error);
      throw error;
    }
  };

  const logoutAction = () => {
    localStorage.removeItem('jwt_token');
    setUser(null);
  };

  const authContextValue = {
    user,
    loginAction,
    logoutAction,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
