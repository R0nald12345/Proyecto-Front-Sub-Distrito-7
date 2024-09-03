import React,{useState} from 'react'
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { deleteEspecialidad } from '../../../api/CentroSalud';
import Modal_Especialidad_Agregar from '../../Modal/CentroSalud/Modal_Especialidad_Agregar';
import Modal_Especialidad_Editar from '../../Modal/CentroSalud/Modal_Especialidad_Editar';

const Lista_Especialidades = ({id,nombre, listaEspecialidades, setListaEspecialidades}) => {

    const [openActualizar, setOpenActualizar] = useState(false);

    const handleEliminar = async () => {
      try {
        const result = await Swal.fire({
          title: `Eliminar ${nombre}`,
          text: "Estas seguro de Eliminar!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        });
  
        if (result.isConfirmed) {
          await deleteEspecialidad(id);
          setListaEspecialidades(listaEspecialidades.filter((element) => element.id !== id));
          Swal.fire("Eliminado!", `El ${nombre} ha sido eliminado con exito`, "success");
        }
      } catch (error) {
        console.error("Error en Componente Lista_Especialidades", error);
      }
    };
  
    return (
      <>

        {/* <Modal_Especialidad_Agregar
            open={openActualizar}
            onClose={() => setOpenActualizar(!openActualizar)}
            listaEspecialidades={listaEspecialidades}
            setListaEspecialidades={setListaEspecialidades}        
        /> */}


      <Modal_Especialidad_Editar
        open={openActualizar}
        onClose={() => setOpenActualizar(!openActualizar)}
        idEspecialidad={id}
        nombreEspecialidad={nombre}
        setListaEspecialidades={setListaEspecialidades}
        listaEspecialidades={listaEspecialidades}
      />
  
        <ul className="bg-white gap-2 mb-3 rounded-xl shadow-lg flex px-2">
          <li className="font-semibold text-start w-[78%] px-1 py-2">{nombre}</li>

          <li className="font-semibold text-center w-[30%] py-2 flex justify-around gap-3"> 
            <BiEditAlt
              className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer"
              onClick={() => setOpenActualizar(!openActualizar)}
            />
            <RiDeleteBin5Line
              className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer"
              onClick={handleEliminar}
            />
          </li>
        </ul>
      </>
    );
  };

export default Lista_Especialidades
