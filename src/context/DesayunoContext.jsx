// DesayunoContext.js
import React, { createContext, useState } from 'react';

export const DesayunoContext = createContext();

export const DesayunoProvider = ({ children }) => {
  const [listaGeneralDesayuno, setListaGeneralDesayuno] = useState([]);

  return (
    <DesayunoContext.Provider value={{ listaGeneralDesayuno, setListaGeneralDesayuno }}>
      {children}
    </DesayunoContext.Provider>
  );
};
