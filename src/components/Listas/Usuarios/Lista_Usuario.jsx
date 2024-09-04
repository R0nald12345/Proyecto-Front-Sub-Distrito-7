import {useState,useEffect} from 'react'
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { deleteUsuarioId } from '../../../api/Usuario';
import Modal_Actualizar_Usuario from '../../Modal/Usuarios/Modal_Actualizar_Usuario';
import Modal_Detalles_Usuario from '../../Modal/Usuarios/Modal_Detalles_Usuario';

const Lista_Usuario = ({datosUsuario,datosUsuarios,setDatosUsuarios}) => {

    const { id, name, email,password } = datosUsuario;

    const [openModalDetalles, setOpenModalDetalles] = useState(false);
    const [openModalEditar, setOpenModalEditar] = useState(false);
  
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
      // Obtener el valor de localStorage
      const userData = sessionStorage.getItem('userData');
      // console.log("userDataaaaaaaaaaaaa", userData);
      if (userData) {
        // Parsear el valor JSON
        const parsedUserData = JSON.parse(userData);
        // Acceder al campo email
        setUserEmail(parsedUserData.email);
        // console.log("Email del Usuario", parsedUserData.email);
      } else {
        console.log("No se encontró la clave 'userData' en el localStorage.");
      }
    }, []);

    // console.log("Email del Usuario", userEmail);
  
    const deleteUsuario = async () => {
      try {
        if(userEmail === email){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puedes eliminar tu propia cuenta!',
          });
          return;

        }
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
        console.log("Error en el Componente Lista_Usuario", error);
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

        <Modal_Actualizar_Usuario
          open={openModalEditar}
          onClose={() => setOpenModalEditar(false)}
          id={id}
          nameU={name}
          emailU={email}
          passwordU={password}
          listaUsuarios={datosUsuarios}
          setListaUsuarios={setDatosUsuarios}
        />

        <Modal_Detalles_Usuario
          open={openModalDetalles}
          onClose={() => setOpenModalDetalles(false)}
          id={id}
          nameU={name}
          emailU={email}
          passwordU={password}
    
        
        />
  
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
              onClick={() => setOpenModalEditar(!openModalEditar)}
            />
  
            <IoEyeSharp
              className="bg-black text-white text-3xl rounded-md p-1 cursor-pointer"
              onClick={() => setOpenModalDetalles(!openModalDetalles)}
            />
  
            <RiDeleteBin5Line
              className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer"
              onClick={deleteUsuario}
            />
          </li>
        </ul>
      </>
    );
  };

export default Lista_Usuario
