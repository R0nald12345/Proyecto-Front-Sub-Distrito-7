import { useState } from "react";
import Swal from 'sweetalert2';
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import Modal_Editar_Mantenimiento from "../../modales/Modal_Editar_Mantenimiento";
import { deleteMantenimientoID } from "../../../api/UnidadesEducativas";

const Lista_Mantenimiento = ({id, datosMantenimiento,listaGeneralMantenimiento,setListasGeneralMantenimiento}) => {

  const { fecha, titulo, encargado, empresa } = datosMantenimiento;

    const [OpenModalEdit, setOpenModalEdit] = useState(false);
  // Convertir la fecha en un objeto Date
  const fechaObj = new Date(fecha);

  // Obtener el día, mes y año de la fecha
  const dia = fechaObj.getDate();
  const mes = fechaObj.getMonth() + 1; // El mes se indexa desde 0 (enero es 0)
  const año = fechaObj.getFullYear();

  // Formatear la fecha como día/mes/año
  const fechaFormateada = `${dia}/${mes}/${año}`;

    
  const handleEliminar = async () => {
    try {
      const result = await Swal.fire({
        title: 'Eliminar Mantenimiento?',
        text: "Estas seguro de Eliminar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
  
      if (result.isConfirmed) {
        await deleteMantenimientoID(id);
        setListasGeneralMantenimiento(listaGeneralMantenimiento.filter((element) => element.id !== id));
        Swal.fire({
          title: 'Eliminado!',
          text: 'El Mantenimiento ha sido eliminado con exito',
          icon: 'success'
        });
        // Aquí puedes actualizar tu interfaz o recargar los datos necesarios
      }
    } catch (error) {
      console.log('Error en Componente ListaGeneral fetchingDatosGeneralUE', error);
    }
  };
  



  return (
    <>
      <Modal_Editar_Mantenimiento
        onClose = {() => setOpenModalEdit(false)}
        open = {OpenModalEdit}
        datosMantenimiento = {datosMantenimiento}
      />
      <ul className="bg-white gap-2 mb-3 rounded-xl shadow-lg flex px-2">
        <li className=" font-semibold   text-start w-[15%] px-2 py-2">
          {fechaFormateada}
        </li>
        <li className=" font-semibold  text-start w-[28%] px-2 py-2">
          {titulo}
        </li>
        <li className=" font-semibold  text-start w-[25%] px-2 py-2">
          {encargado}
        </li>
        <li className=" font-semibold  text-start w-[20%] px-2 py-2">
          {empresa}
        </li>
        <li className=" font-semibold  text-center w-[12%] py-2 flex justify-around gap-3 ">
          <BiEditAlt 
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer" 
            onClick={() => setOpenModalEdit(!OpenModalEdit)}
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

export default Lista_Mantenimiento;
