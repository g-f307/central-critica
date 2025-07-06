import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Precisaremos de uma nova função aqui

const AuthCallbackPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleSocialAuth } = useAuth(); // Nova função no AuthContext

  useEffect(() => {
    // Pega os parâmetros da URL
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const error = params.get('error');

    if (token && handleSocialAuth) {
      // Se encontramos um token, usamos a função do AuthContext para processá-lo
      handleSocialAuth(token);
      // Redireciona para a home após o processamento bem-sucedido
      navigate('/');
    } else if (error) {
      // Se o backend redirecionou com um erro
      console.error("Erro no login com Google:", error);
      // Redireciona para a página de autenticação com uma mensagem de erro
      navigate('/auth', { state: { message: 'Falha no login com Google. Tente novamente.' } });
    } else {
        // Se chegou aqui sem token nem erro, é uma situação inesperada. Redireciona para a home.
        navigate('/');
    }

  }, [location, navigate, handleSocialAuth]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-dark-bg-primary">
      <div className="text-center">
        <p className="text-lg text-gray-700 dark:text-dark-text-secondary">
          Processando sua autenticação...
        </p>
        {/* Adicionar um spinner/loader aqui seria uma boa melhoria visual */}
      </div>
    </div>
  );
};

export default AuthCallbackPage;