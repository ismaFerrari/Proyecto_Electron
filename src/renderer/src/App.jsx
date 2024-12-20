import React, { useState } from 'react';
import Login from './components/login/login';
import { Navbar } from './components/navbar/navbar';
import ContainerProductos from './components/Products/products-container';

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (credentials) => {
    if (credentials.username === 'admin' && credentials.password === '1234') {
      setIsAuthenticated(true); 
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Navbar />
          <ContainerProductos />
        </>
      )}
    </>
  );
};
