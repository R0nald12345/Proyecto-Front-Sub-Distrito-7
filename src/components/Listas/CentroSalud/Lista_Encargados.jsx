import React, { useState,useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import Swal from "sweetalert2";

import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { deleteCentrosaludhasEspecialidades } from '../../../api/CentroSalud';
import Modal_Encargado_Editar from '../../Modal/CentroSalud/Modal_Encargado_Editar';

const Lista_Encargados = ({idCentroSalud,datoEncargadoEspecialidades,listaEncargadosEspecialidades,setListaEncargadosEspecialidades}) => {
    const navigate = useNavigate();

    const {id,encargado, idEspecialidad} = datoEncargadoEspecialidades;
    const {nombre} = idEspecialidad;

    const [openActualizar, setOpenActualizar] = useState(false);

    const changeFormDetails=(id)=>{
        navigate(`/unidadeducativa/detalles/${id}`);
    }

    const changeRutaEditarFormulario=(id)=>{
      navigate(`/unidadeducativa/modificar/${id}`);
    }

    const deleteDatoEncargadoEspecialidad = async (id) => {
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
          await deleteCentrosaludhasEspecialidades(id);
          setListaEncargadosEspecialidades(
            listaEncargadosEspecialidades.filter((element) => element.id !== id)
          );
          Swal.fire({
            title: "Eliminado!",
            text: "Eliminado Correctamente.",
            icon: "success",
          });
        }
      } catch (error) {
        console.log("Error en el Componente Lista_Encargados", error);
      }
    };

  return (
    <>
        <Modal_Encargado_Editar
             open={openActualizar}
             onClose={() => setOpenActualizar(!openActualizar)}

             idEspecialista={id}
             encargadoA={encargado}
             idCentroSalud={idCentroSalud}
             idEspecialidadA={idEspecialidad.id}

             
             listaEncargadosEspecialidades={listaEncargadosEspecialidades}
             setListaEncargadosEspecialidades={setListaEncargadosEspecialidades}
        />


        <ul className='bg-white mb-3 rounded-xl shadow-lg flex'>
           
        <li className="font-semibold text-start w-[45%] px-2 py-2">
          {encargado}
        </li>
        <li className="font-semibold text-start w-[30%] px-2 py-2">
          {nombre}
        </li>
        <li className="font-semibold text-start w-[25%] px-2 py-2 flex justify-around gap-3">

          <BiEditAlt 
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer" 
            onClick={() => setOpenActualizar(!openActualizar)}
          />

    
          <RiDeleteBin5Line
            className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer"
            onClick={() => deleteDatoEncargadoEspecialidad(id)}
          />
        </li>
        </ul>

    </>
  )
}


export default Lista_Encargados
