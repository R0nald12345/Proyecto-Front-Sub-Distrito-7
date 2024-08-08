// src/context/AuthContext.jsx

// Importamos las funciones necesarias desde React
import React, { createContext, useContext, useState } from 'react';

// Creamos un nuevo contexto llamado AuthContext
const AuthContext = createContext();

// Definimos el componente proveedor AuthProvider
export const AuthProvider = ({ children }) => {
  // Definimos una variable de estado isAuthenticated y una función para actualizarla, iniciando como false
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Definimos una función login que actualiza isAuthenticated a true
  const login = () => {
    setIsAuthenticated(true);
  };

  // Definimos una función logout que actualiza isAuthenticated a false
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Retornamos el AuthContext.Provider para envolver a los componentes hijos
  // Pasamos isAuthenticated, login y logout como valores del contexto
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children} {/* Renderizamos los componentes hijos que reciben el contexto */}
    </AuthContext.Provider>
  );
};

// Creamos un hook personalizado useAuth para acceder fácilmente al contexto AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
