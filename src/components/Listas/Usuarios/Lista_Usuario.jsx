import {useState} from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { deleteUsuarioId } from '../../../api/Usuario';

const Lista_Usuario = ({datosUsuario,datosUsuarios,setDatosUsuarios}) => {

    const { id, name, email } = datosUsuario;

    const [openModalDetalles, setOpenModalDetalles] = useState(false);
    const [openModalEditar, setOpenModalEditar] = useState(false);
  
    const deleteVisita = async (id) => {
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
          await deleteUsuarioId(id);
          setDatosUsuarios(
            datosUsuarios.filter((element) => element.id !== id)
          );
          Swal.fire({
            title: "Eliminado!",
            text: "Eliminado Correctamente.",
            icon: "success",
          });
        }
      } catch (error) {
        console.log("Error en el Componente Lista_CentroDeportivo", error);
      }
    };
  
    return (
      <>
        {/* <Modal_Detalle_Visita
          open={openModalDetalles}
          onClose={() => setOpenModalDetalles(false)}
          idVisita={id}
        />
  
        <Modal_Editar_Visita
          open={openModalEditar}
          onClose={() => setOpenModalEditar(false)}
          idVisita={id}
          datosVisitas={datosVisitas}
          setDatosVisitas={setDatosVisitas}
        /> */}
  
        <ul className="bg-white mb-3 gap-3 rounded-xl shadow-lg flex">
          <li className="font-semibold text-center w-[40%] px-2 py-2">
            {name}
          </li>
  
          <li className="font-semibold text-center w-[40%] px-2 py-2">
            {email}
          </li>
  
      
          <li className="font-semibold text-center w-[20%] px-2 py-2 flex justify-around gap-2">
            <BiEditAlt 
              className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer" 
            //   onClick={() => setOpenModalEditar(!openModalEditar)}
            />
  
            <IoEyeSharp
              className="bg-black text-white text-3xl rounded-md p-1 cursor-pointer"
            //   onClick={() => setOpenModalDetalles(!openModalDetalles)}
            />
  
            <RiDeleteBin5Line
              className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer"
            //   onClick={() => deleteVisita(id)}
            />
          </li>
        </ul>
      </>
    );
  };

export default Lista_Usuario
