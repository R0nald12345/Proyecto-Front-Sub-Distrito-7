import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useForm from "../../../hooks/useForm";
import {
  getDatoGeneralUE,
  getDatoGeneralUEid,
} from "../../../api/UnidadesEducativas";
import { createDatoVisitas, getDatoVisitasID } from "../../../api/Visitas";
// import { crearNuevoDesayuno } from "../../api/UnidadesEducativas";
// import {Modal_Crear_Visita} from "../../components/Modal/Visita/Modal_Crear_Visita";
const formatearFecha = (fecha) => {
  if (fecha.length > 0) {
    // Me indica que tengo una fecha
    let fechaFormateada = "";
    for (let i = 0; i < fecha.length; i++) {
      if (fecha[i] == "T") {
        fechaFormateada = fecha.substring(0, i);
        break;
      }
    }
    const [year, month, day] = fechaFormateada.split("-");
    return `${day}-${month}-${year}`;
  } else {
    return "Fecha no válida";
  }
};

const Modal_Detalle_Visita = ({ open, onClose, idVisita }) => {

  console.log('idVisitaaaaaaaaaa',idVisita);
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [visitantes, setVisitantes] = useState("");
  const [motivo, setMotivo] = useState("");
  const [idColegio, setIdColegio] = useState(0);
  const [nombreColegio, setNombreColegio] = useState("");

  useEffect(() => {
    const fetchingVisitas = async () => {
      try {
        const data = await getDatoVisitasID(idVisita);
        console.log("dataaaaaaa", data);
        setTitulo(data.titulo);
        setFecha(data.fecha);
        setVisitantes(data.visitantes);
        setMotivo(data.motivo);
        // setIdColegio(data.idUnidadEducativa);
      } catch (error) {
        console.log("Error en Componente Modal_Detalle_Visita", error);
      }
    };
    fetchingVisitas();
  }, [idVisita]);

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <form className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5">
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <h2 className="text-3xl font-bold text-center">Detalle Visitas</h2>
          <div className="mt-5">
            <h3 className="font-semibold mt-3">Título</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              value={titulo}
            />

            <h3 className="font-semibold mt-3">Visitantes</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              value={visitantes}
            />

            <h3 className="font-semibold mt-3">Motivo</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              value={motivo}
            />

            <h3 className="font-semibold mt-3">Fecha</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              value={formatearFecha(fecha)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal_Detalle_Visita;
