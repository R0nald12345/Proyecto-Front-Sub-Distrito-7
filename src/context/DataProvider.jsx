import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataIdUE, setDataIdUE] = useState(null);
  const [apoyoSocialID, setApoyoSocialID] = useState(0);
  const [datoTurno, setDatoTurno] = useState([]);
  const [datoInfraestructura, setDatoInfraestructura] = useState([]);
  const [datoTipoColegios, setTipoColegios] = useState([]);
  const [datoVisitaId, setDatoVisitaId] = useState([]);
  const [nombreCentroSalud, setNombreCentroSalud] = useState("");
  const [datoColegio, setDatoColegio] = useState({});
  
  const [nombreColegio, setNombreColegio] = useState("");
  // const [nombreCentroSalud, setNombreCentroSalud] = useState("");
  // const [nombreCentroSalud, setNombreCentroSalud] = useState("");
  // const [nombreCentroSalud, setNombreCentroSalud] = useState("");
  

  const actualizarDatoColegio = ({nuevoDatoColegio}) => {
    setDatoColegio((prevDatoColegio) => ({
      ...prevDatoColegio,
      ...nuevoDatoColegio,
    }));
  };
 
  // const actualizarDatoColegio = ({nuevoDatoColegio}) => {
  //   setDatoColegio(
  //     ...datoColegio,
  //     nuevoDatoColegio,
  //   );
  // };

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
      setNombreCentroSalud,
      datoColegio,
      setDatoColegio,
      actualizarDatoColegio,

      nombreColegio,
      setNombreColegio,
    }}>
      {children}
    </DataContext.Provider>
  );
};