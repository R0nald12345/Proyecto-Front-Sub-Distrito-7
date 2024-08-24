import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import useForm from "../../../hooks/useForm";
import {
  getDatoGeneralUE,
  getDatoGeneralUEid,
} from "../../../api/UnidadesEducativas";
import { createDatoVisitas, getDatoVisitasID } from "../../../api/Visitas";
import { DataContext } from "../../../context/DataProvider";
// import { crearNuevoDesayuno } from "../../api/UnidadesEducativas";
// import {Modal_Crear_Visita} from "../../components/Modal/Visita/Modal_Crear_Visita";
// const formatearFecha = (fecha) => {
//   if (fecha.length > 0) {
//     // Me indica que tengo una fecha
//     let fechaFormateada = "";
//     for (let i = 0; i < fecha.length; i++) {
//       if (fecha[i] == "T") {
//         fechaFormateada = fecha.substring(0, i);
//         break;
//       }
//     }
//     const [year, month, day] = fechaFormateada.split("-");
//     return `${day}-${month}-${year}`;
//   } else {
//     return "Fecha no válida";
//   }
// };

const Modal_Editar_Visita = ({ open, onClose, idVisita, idUnidadEducativa }) => {
  
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [visitantes, setVisitantes] = useState("");
  const [motivo, setMotivo] = useState("");

  const {dataIdUE,setDataIdUE }= useContext(DataContext);


  useEffect(() => {
    const fetchingVisitas = async () => {
      try {
        let id = idVisita; 

        const data = await getDatoVisitasID(id);
        console.log("dataaaaaaa", data);
        setTitulo(data.titulo);
        console.log("tituloooo", data.titulo);
        setFecha(data.fecha);
        setVisitantes(data.visitantes);
        setMotivo(data.motivo);
      } catch (error) {
        console.log("Error en Componente Modal_Detalle_Visita", error);
      }
    };
    fetchingVisitas();
  }, [idVisita]);

  const handleActualizar=async()=>{
    try{
        id: idVisita;
        const response = updateDatoVisitas(
            id,
            titulo,
            fecha,
            motivo,
            visitantes,
            dataIdUE,
        )
        


    }catch(e){
        console.log('Salio un error en handleActualizar',e);
    } 
  }


  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <form className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5"
           onSubmit={handleActualizar} 
        >
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <h2 className="text-3xl font-bold text-center">Editar Visitas</h2>
          <div className="mt-5">
            <h3 className="font-semibold mt-3">Título</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              value={titulo}
              type="text"
              onChange={(e)=>setTitulo(e.target.value)}
              />

            <h3 className="font-semibold mt-3">Visitantes</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              value={visitantes}
              type="text"
              onChange={(e)=>setVisitantes(e.target.value)}
              />

            <h3 className="font-semibold mt-3">Motivo</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              value={motivo}
              type="text"
              onChange={(e)=>setMotivo(e.target.value)}
              
              />

            <h3 className="font-semibold mt-3">Fecha</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              value={fecha}
              type="date"
              onChange={(e)=>setFecha(e.target.value)}
              
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl"
                type="submit"
            >
              Actualizar
            </button>
          </div>

        </form>
      </div>
    </>
  );
};

export default Modal_Editar_Visita;
