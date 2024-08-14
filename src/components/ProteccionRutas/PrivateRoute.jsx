
// Importamos React, necesario para definir componentes en React
import React from 'react';

// Importamos el componente Navigate desde react-router-dom para manejar redirecciones
import { Navigate } from 'react-router-dom';

// Importamos el hook personalizado useAuth desde AuthContext para acceder al estado de autenticación
import { useAuth } from '../../components/ProteccionRutas/AuthContext';

// Definimos el componente PrivateRoute que recibe children como prop
const PrivateRoute = ({ children }) => {
  // Utilizamos el hook useAuth para obtener el valor de isAuthenticated desde el contexto de autenticación
  const { isAuthenticated } = useAuth();

  // Retornamos los children si el usuario está autenticado; de lo contrario, redirigimos a /auth
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

// Exportamos el componente PrivateRoute para que pueda ser utilizado en otras partes de la aplicación
export default PrivateRoute;