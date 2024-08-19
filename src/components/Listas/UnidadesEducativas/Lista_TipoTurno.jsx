import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import {  deleteTurnoID } from "../../../api/UnidadesEducativas";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataProvider";
import Modal_Editar_Turno from "../../Modal/UnidadEducativa/Modal_Editar_Turno";

const Lista_TipoTurno = ({ id, nombre}) => {

    const {datoTurno, setDatoTurno} = useContext(DataContext);
    const [openModalEditar, setOpenModalEditar] = useState(false);

  const deleteDatoTipoTurno = async () => {
    try {
      const result = await Swal.fire({
        title: "Deseas Eliminar?",
        text: "Si eliminas no podrás recuperarlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, quiero Eliminar!",
      });

      if (result.isConfirmed) {
        deleteTurnoID(id);
        setDatoTurno(datoTurno.filter((dato) => dato.id !== id));
        Swal.fire({
          title: "Eliminado!",
          text: "Eliminado Correctamente.",
          icon: "success",
        });
      }
    } catch (error) {
      console.log("Error en el Componente Lista_TipoTurno", error);
    }
  };


  return (
    <>
      
      <Modal_Editar_Turno
        open={openModalEditar}
        onClose={() => setOpenModalEditar(!openModalEditar)}
        idTurno={id}
        nombreTurno={nombre}

      />  
      <ul className="bg-white mb-3 rounded-xl shadow-xl flex">
        
        <li className=" font-semibold  w-[70%] lg:w-[80%] px-2 py-2">
          {nombre}
        </li>

        <li className=" font-semibold text-center w-[30%] px-2 py-2 flex justify-around gap-3">
          <BiEditAlt 
            onClick={()=>setOpenModalEditar(!openModalEditar)}
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer" />
         
          <RiDeleteBin5Line
            onClick={deleteDatoTipoTurno}
            className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer"
          />
        </li>

      </ul>
    </>
  );
};

export default Lista_TipoTurno;