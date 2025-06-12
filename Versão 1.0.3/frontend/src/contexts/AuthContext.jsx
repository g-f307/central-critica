import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loadingAuth, setLoadingAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      if (token) {
        try {
          const payloadBase64 = token.split('.')[1];
          if (payloadBase64) {
            const decodedPayload = JSON.parse(atob(payloadBase64));
            if (decodedPayload.user && decodedPayload.exp * 1000 > Date.now()) {
              setUser(decodedPayload.user);
            } else {
              localStorage.removeItem('token');
              setToken(null);
              setUser(null);
            }
          } else {
            localStorage.removeItem('token'); setToken(null); setUser(null);
          }
        } catch (error) {
          console.error("Erro ao decodificar token:", error);
          localStorage.removeItem('token'); setToken(null); setUser(null);
        }
      }
      setLoadingAuth(false);
    };
    validateToken();
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Erro ao fazer login');
      }
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      navigate('/');
      return { success: true };
    } catch (error) {
      console.error("Erro no login:", error);
      return { success: false, message: error.message };
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || data.errors?.join(', ') || 'Erro ao registrar');
      }
      return { success: true, message: data.message };
    } catch (error) {
      console.error("Erro no registro:", error);
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    navigate('/auth');
  };

  const handleSocialAuth = (receivedToken) => {
    if (receivedToken) {
      localStorage.setItem('token', receivedToken);
      try {
        const payloadBase64 = receivedToken.split('.')[1];
        const decodedPayload = JSON.parse(atob(payloadBase64));
        setUser(decodedPayload.user);
        setToken(receivedToken);
      } catch (error) {
        console.error("Erro ao processar token social:", error);
        logout();
      }
    }
  };

  const value = {
    user,
    token,
    loadingAuth,
    login,
    register,
    logout,
    handleSocialAuth, // Exporta a nova função
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};