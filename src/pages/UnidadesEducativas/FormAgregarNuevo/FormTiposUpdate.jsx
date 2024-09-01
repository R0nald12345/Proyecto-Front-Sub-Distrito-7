import { useContext, useEffect, useState } from "react";
import { getDatoGeneralTiposColegio, getDatoGeneralTiposInfraestructura, getDatoGeneralTiposTurno, getInfraestructuraID, getTipoColegioID, getTurnoID } from '../../../api/UnidadesEducativas';

import { FaEdit } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { DataContext } from "../../../context/DataProvider";

const FormTiposUpdate = ({
    idInfraestructura,
    idTipoColegio,
    idTurno,
    setIdTipoColegio = 1,
    setIdTurno = 1,
    setIdInfraestructura = 1,
  }) => {

    console.log("IDCOLEGIO",idTipoColegio);
    console.log("IDTURNO",idTurno);
    console.log("IDINFRAESTRUCTURA",idInfraestructura);
    
    const [tipoColegio, setTipoColegio] = useState([]);
    const [tipoTurno, setTipoTurno] = useState([]);
    const [tipoInfraestructura, setTipoInfraestructura] = useState([]);
    
    const [nombreColegio, setNombreColegio] = useState("");
    const [nombreTurno, setNombreTurno] = useState("");
    const [nombreInfraestructura, setNombreInfraestructura] = useState("");    

  
    useEffect(() => {
      const fetchingTipoColegio = async () => {
        try {
          const datoTipoColegio = await getDatoGeneralTiposColegio();
          setTipoColegio(datoTipoColegio);
        } catch (error) {
          console.log(
            "Error al Obtener Datos desde Componente fetchingTipoColegio",
            error
          );
        }
      };
      fetchingTipoColegio();
    }, []);



  
    
    useEffect(() => {
      const fetchingTiposTurnos = async () => {
        try {
          const datosTipoTurno = await getDatoGeneralTiposTurno();
          setTipoTurno(datosTipoTurno);
        } catch (error) {
          console.log(
            "Error no se pude obtener los Datos de fetchingTiposTurnos",
            error
          );
        }
      };
      fetchingTiposTurnos();
    }, []);
  
    useEffect(() => {
      const fetchingTiposInfraestructuras = async () => {
        try {
          const datosTipoInfraEstructura =await getDatoGeneralTiposInfraestructura();
          setTipoInfraestructura(datosTipoInfraEstructura);
        } catch (error) {
          console.log(
            "Error no se pude obtener los Datos de fetchingTiposInfraestructuras",
            error
          );
        }
      };
      fetchingTiposInfraestructuras();
    }, []);


    useEffect(() => {
        const fetchingNombreColegio = async () => {
          try {
            const datoTipoColegio = await getTipoColegioID(idTipoColegio);
            setNombreColegio(datoTipoColegio.nombre); // Asegúrate de que sea una cadena de texto
          } catch (error) {
            console.log(
              "Error al Obtener Datos desde Componente fetchingNombreColegio",
              error
            );
          }
        };
        fetchingNombreColegio();
      }, [idTipoColegio]);


    useEffect(() => {
        const fetchingNombreTurno = async () => {
          try {
            const datoTipoTurno = await getTurnoID(idTurno);
            setNombreTurno(datoTipoTurno.nombre); // Asegúrate de que sea una cadena de texto
          } catch (error) {
            console.log(
              "Error al Obtener Datos desde Componente fetchingNombreTurno",
              error
            );
          }
        };
        fetchingNombreTurno();
      }, [idTurno]);

    useEffect(() => {
        const fetchingNombreInfraestructura = async () => {
          try {
            const datoTipoInfraestructura = await getInfraestructuraID(idInfraestructura);
            setNombreInfraestructura(datoTipoInfraestructura.nombre); // Asegúrate de que sea una cadena de texto
          } catch (error) {
            console.log(
              "Error al Obtener Datos desde Componente fetchingNombreInfraestructura",
              error
            );
          }
        };
        fetchingNombreInfraestructura();
      }, [idInfraestructura]);

      console.log("nombreColegio",nombreColegio);
    console.log("nombreTurno",nombreTurno);
    console.log("nombreInfraestructura",nombreInfraestructura);

  
    const {setDatoTurno,setDatoInfraestructura, setTipoColegios} = useContext(DataContext);
  
    setDatoTurno(tipoTurno);
    setDatoInfraestructura(tipoInfraestructura);
    setTipoColegios(tipoColegio);
    
  
    // Manejadores de eventos para cada dropdown
    const handleTipoColegioChange = (event) => {
      const selectedId = event.target.value;
      setIdTipoColegio(selectedId);
    };
  
    const handleTipoTurnoChange = (event) => {
      const selectedId = event.target.value;
      console.log(selectedId);
      setIdTurno(selectedId);
    };
  
    const handleTipoInfraestructuraChange = (event) => {
      const selectedId = event.target.value;
      setIdInfraestructura(selectedId);
    };
  
    return (
      <>
       
  
        {/* <Modal_Crear_TipoColegio/>
        <Modal_Crear_TipoTurno/> */}
        
        <div className="flex gap-3 mt-3">
          <div className="w-1/2">
            <p className="font-semibold text-gray-600 uppercase">Tipo Colegio</p>
          
           
            <select
              className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
              onChange={handleTipoColegioChange}
              value={idTipoColegio}
            >

              <option value={idTipoColegio}>{nombreColegio}</option>
              {tipoColegio
                .filter((option) => option.id !== idTipoColegio)
                .map((option) => (
                  <option value={option.id} key={option.id}>
                    {option.nombre}
                  </option>
                ))}
            </select>
          </div>
  
          <div className="w-1/2">
            <p className="font-semibold text-gray-600 uppercase">Tipo Turno</p>
         
            <select
              className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
              onChange={handleTipoTurnoChange}
              value={idTurno}
            >
              <option value={idTurno}>{nombreTurno}</option>
              {tipoTurno
                .filter((option) => option.id !== idTurno)
                .map((option) => (
                  <option value={option.id} key={option.id}>
                    {option.nombre}
                  </option>
                ))}
            </select>
          </div>
        </div>
  
        <div className="mt-3">
          <p className="font-semibold text-gray-600 uppercase">Tipo Infraestructura</p>
     
          <select
            className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
            onChange={handleTipoInfraestructuraChange}
            value={idInfraestructura}
          >
            <option value={idInfraestructura}>{nombreInfraestructura}</option>
            {tipoInfraestructura
              .filter((option) => option.id !== idInfraestructura)
              .map((option) => (
                <option value={option.id} key={option.id}>
                  {option.nombre}
                </option>
              ))}
          </select>
        </div>
      </>
    );
}

export default FormTiposUpdate;