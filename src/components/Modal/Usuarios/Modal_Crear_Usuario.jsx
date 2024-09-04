import React,{useState} from 'react'
import Swal from 'sweetalert2';
import { createUsuario, createUsuarios } from '../../../api/Usuario';

const Modal_Crear_Usuario = ({ open, onClose, listaUsuarios, setListaUsuarios, }) => {
  
    if (!open) return null;
  
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  


    const handleNuevoUsuario = async () => {
        try {
           const data = await createUsuarios(
                name,
                email,
                password,
            );
            setListaUsuarios([ ...listaUsuarios, data ]);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Nuevo Usuario Creado Exitosamente!",
            showConfirmButton: false,
            timer: 1500,
          });
          onClose(); // Cierra el modal después de crear el servicio
        } catch (e) {
          console.log("Hubo error en el Componente Modal_Crear_Usuario", e);
        }
      };


    // useEffect(() => {
    //     const fetchingDatoMantenimientoID = async () => {
    //       try{
    //         const response = await getApoyoSocialID(idApoyoSocial);
    //         console.log("responseeeeee", response);
    //         setId(response.id);
    //         setNombres(response.nombre);
    //         setNombreEntregas(response.nombreEntrega);
    //         setCantidads(response.cantidad);
    //         setFechas(response.fecha);
    //       }catch(error){
    //         console.log("Error en el componente Modal_Actualizar_Social" + error);
    //       }
    //     }
    //     fetchingDatoMantenimientoID();
    //   }, [])
      
    
    //   const handleActualizarApoyoSocial = async () => {
    //     if (!id) {
    //       Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'ID no definido!',
    //       });
    //       return;
    //     }
    
    //     try {
    //       const updatedFecha = new Date(fechas).toISOString(); // Convertir la fecha al formato ISO 8601
    //       const updatedNombreEntrega = nombreEntregas;
    //       const updatedNombre = nombres;
    //       const updatedCantidad = cantidads;
    //       const idUnidadEducativa = idUE;
    
    //       const data = await actualizarApoyoSocial(
    //         id,
    //         updatedNombre,
    //         updatedCantidad,
    //         updatedNombreEntrega,
    //         updatedFecha,
    //         idUnidadEducativa
    //       );
    
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Apoyo Social Actualizado exitosamente",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    
    //       const updatedList = listaGeneralApoyoSocial.map(item =>
    //         item.id === id ? data : item
    //       );
    
    //       setListasGeneralApoyoSocial(updatedList);
    //       onClose();
    //     } catch (error) {
    //       console.error("Error al crear el Apoyo Social: ", error);
    //       Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'Algo salió mal al crear el Apoyo Social!',
    //       });
    //     }
    //   };
    


  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <form
          className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleNuevoUsuario();
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
            Crear Nuevo Usuario
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
              Agregar Nuevo Usuario
            </button>
          </div>
        </form>
      </div>
    );
  };

export default Modal_Crear_Usuario
