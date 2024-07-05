// FormTipos.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import {
  getDatoGeneralTiposColegio,
  getDatoGeneralTiposInfraestructura,
  getDatoGeneralTiposTurno,
} from "../../../api/UnidadesEducativas";

const FormTipos = ({
  setIdTipoColegio = 1,
  setIdTurno = 1,
  setIdInfraestructura = 1,
}) => {
  const [tipoColegio, setTipoColegio] = useState([]);
  const [tipoTurno, setTipoTurno] = useState([]);
  const [tipoInfraestructura, setTipoInfraestructura] = useState([]);

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
    const fetchingTiposTurnos = async () => {
      try {
        const datosTipoInfraEstructura =await getDatoGeneralTiposInfraestructura();
        setTipoInfraestructura(datosTipoInfraEstructura);
      } catch (error) {
        console.log(
          "Error no se pude obtener los Datos de fetchingTiposTurnos",
          error
        );
      }
    };
    fetchingTiposTurnos();
  }, []);

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
      <div className="flex gap-3">
        <div className="w-1/2">
          <p className="font-semibold text-gray-600 uppercase">Tipo Colegio</p>
          <select
            className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
            onChange={handleTipoColegioChange}
          >
            {tipoColegio.map((option) => (
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
          >
            {tipoTurno.map((option) => (
              <option value={option.id} key={option.id}>
                {option.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="">
        <p className="font-semibold text-gray-600 uppercase">
          Tipo Infraestrcutura
        </p>
        <select
          className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
          onChange={handleTipoInfraestructuraChange}
        >
          {tipoInfraestructura.map((option) => (
            <option value={option.id} key={option.id}>
              {option.nombre}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FormTipos;
