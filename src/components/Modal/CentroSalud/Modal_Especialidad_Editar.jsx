import React,{useState} from 'react'
import Swal from "sweetalert2";
import { updateEspecialidad } from '../../../api/CentroSalud';

const Modal_Especialidad_Editar = ({onClose, open,  idEspecialidad,nombreEspecialidad,
  setListaEspecialidades, listaEspecialidades
 }) => {

  if (!open) return null;

  const [nombre,setNombre] = useState(nombreEspecialidad);



  const handleUpdateEspecialidad = async () => {
    try {
      let id  = idEspecialidad;
      const data = await updateEspecialidad(
        id,
        nombre,
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Especialidad Actualizado Exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
      setListaEspecialidades(listaEspecialidades.map(item => 
        item.id === data.id ? data : item
      ));
      onClose();
    } catch (error) {
      console.error("Error al Actualziar: ", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal al Actualizar!',
      });
    }
  };

  return (
    <>
    
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
        <form
          className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/2 -translate-y-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateEspecialidad();
          }}
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <h2 className="text-3xl font-bold text-center">Actualizar Especialidad</h2>
          <div className="mt-5">
            <h3 className="font-semibold">Nombre</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              value={nombre}
              onChange={ (e)=>setNombre(e.target.value)}
            />

          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl"
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </>
  );
  };

export default Modal_Especialidad_Editar
