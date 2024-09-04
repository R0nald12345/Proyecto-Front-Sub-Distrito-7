import React, {useState} from 'react'
import { updateUsuarios } from '../../../api/Usuario';
import Swal from "sweetalert2";


const Modal_Actualizar_Usuario = ({open, onClose, id, nameU, emailU, passwordU, listaUsuarios,setListaUsuarios}) => {
    if (!open) return null;


  
    const [name, setName] = useState(nameU);
    const [password, setPassword] = useState(passwordU);
    const [email, setEmail] = useState(emailU);
  
      
    
      const handleActualizar = async () => {
        if (!id) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'ID no definido!',
          });
          return;
        }
    
        try {
    
    
          const data = await updateUsuarios(
            id,
            name,
            email,
            password,
          );
    
          Swal.fire({
            position: "center",
            icon: "success",
            title: "UsuarioActualizado exitosamente",
            showConfirmButton: false,
            timer: 1500,
          });
    
          const updatedList = listaUsuarios.map(item =>
            item.id === id ? data : item
          );
    
          setListaUsuarios(updatedList);
          onClose();
        } catch (error) {
          console.error("Error al crear el Apoyo Social: ", error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal al crear al actualizar usuario!',
          });
        }
      };
    


  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <form
          className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleActualizar();
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
  
          <h2 className="text-3xl font-bold text-center">
            Actualizar Usuario
          </h2>
  
          <div className="mt-5">
            <h3 className="font-semibold mt-2">Nombre</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <h3 className="font-semibold mt-2">Correo</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h3 className="font-semibold mt-2">Contraseña</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
    );
  };

export default Modal_Actualizar_Usuario
