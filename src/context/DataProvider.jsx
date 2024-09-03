// Importación de módulos de React necesarios para crear el contexto y manejar el estado
import React, { createContext, useState } from 'react';

// Creación del contexto llamado DataContext
// Este contexto se utilizará para compartir datos a través del árbol de componentes
export const DataContext = createContext();

// Creación del componente DataProvider que servirá como proveedor del contexto
export const DataProvider = ({ children }) => {
  
  // Declaración de una variable de estado llamada "data" con su función "setData" para actualizar el estado
  // El estado se inicializa como "null"
  const [dataIdUE, setDataIdUE] = useState(null);
  const [apoyoSocialID, setApoyoSocialID] = useState(0);

  const [datoTurno,setDatoTurno] = useState([]);
  const [datoInfraestructura,setDatoInfraestructura] = useState([]);
  const [datoTipoColegios,setTipoColegios] = useState([]);
  const [datoVisitaId,setDatoVisitaId] = useState([]);

  const [nombreCentroSalud ,setNombreCentroSalud] = useState("");

  

  // El componente DataProvider retorna un componente Provider del contexto DataContext
  // Todos los componentes hijos (children) dentro de este Provider podrán acceder al valor del contexto
  return (
    <DataContext.Provider value={{ 
        dataIdUE, 
        setDataIdUE, 
        apoyoSocialID, 
        setApoyoSocialID,
        datoTurno,
        setDatoTurno,
        datoInfraestructura,
        setDatoInfraestructura,
        datoTipoColegios,
        setTipoColegios,

        datoVisitaId,
        setDatoVisitaId,
        nombreCentroSalud,
        setNombreCentroSalud

      

    }}>
      {/* Aquí se renderizan los componentes hijos que estén dentro de DataProvider */}
      {children}
    </DataContext.Provider>
  );
};
