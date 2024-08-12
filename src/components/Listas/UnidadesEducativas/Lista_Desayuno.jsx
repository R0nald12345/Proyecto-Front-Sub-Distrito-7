import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from 'sweetalert2';
import { BiEditAlt } from "react-icons/bi";
import Modal_Editar_Desayuno from "../../modales/Modal_Editar_Desayuno";
import Modal_Agregar_Desayuno from "../../modales/Modal_Agregar_Desayuno";
import { actualizarDesayuno, deleteDesayunoID } from "../../../api/UnidadesEducativas";
import Modal_Actualizar_Desayuno from "../../Modal/UnidadEducativa/Modal_Actualizar_Desayuno";

// const Lista_Desayuno = ({ fecha, nombreEntrega, nombre, cantidad }) => {
  // console.log('DatosDesayuno');
  const Lista_Desayuno = ({idUE, idDesayuno,datosDesayuno,listaGeneralDesayuno,setListasGeneralDesayuno}) => {

    console.log('IdDesayunoooooo', idDesayuno);
  const { fecha, nombreEntrega, nombre, cantidad } = datosDesayuno;
  
  const [openActualizar, setOpenActualizar] = useState(false);

  // Convertir la fecha a un objeto Date
  const formatearFecha = (fecha) => {
    if (fecha.length > 0) { // Me indica que tengo una fecha
      let fechaFormateada = ""; 
      for (let i = 0; i < fecha.length; i++) {
        if (fecha[i] == "T") {
          fechaFormateada = fecha.substring(0, i);
          break;
        }
      }
      const [year, month, day] = fechaFormateada.split("-");
      return `${day}-${month}-${year}`;
    } else {
      return "Fecha no válida";
    }
  };
  // console.log(fechaFormateada); // Imprime la fecha en el formato dia/mes/año
  const handleDeleteDesayuno = async() => {
    try{
      const result = await Swal.fire({
        title: 'Eliminar Mantenimiento?',
        text: "Estas seguro de Eliminar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
      if(result.isConfirmed){
        await actualizarDesayuno(idDesayuno);
        setListasGeneralDesayuno(
            listaGeneralDesayuno.filter((element) => element.id !== idDesayuno));
        Swal.fire({
          title: 'Eliminado!',
          text: 'El Desayuno ha sido eliminado con exito',
          icon: 'success'
        });
      }
    }catch(error){
      console.log('Error en el componente Lista_Desayuno' + error);
    }
  }



  return (
    <>
      <Modal_Actualizar_Desayuno
        open={openActualizar}
        onClose={() => setOpenActualizar(false)}
        idUE={  idUE  }
        idDesayuno={  idDesayuno }
        listaGeneralDesayuno={listaGeneralDesayuno}
        setListasGeneralDesayuno={setListasGeneralDesayuno}
      />

      
      {/* <Modal_Agregar_Desayuno/> */}
      <ul className="flex bg-white md:gap-2 lg:gap-5 mb-3 rounded-xl shadow-lg px-2">
        <li className=" font-semibold text-start w-[15%] px-1 py-2 ">
          {formatearFecha(fecha)}
        </li>
        <li className=" font-semibold text-start w-[30%] px-2 py-2 ">
          {nombreEntrega}
        </li>
        <li className=" font-semibold text-start w-[33%] px-2 py-2 ">
          {nombre}
        </li>
        <li className=" font-semibold text-center w-[12%] px-1 py-2">
          {cantidad} 
        </li>
        <li className=" font-semibold text-center w-[10%] py-2 flex gap-3">
          <BiEditAlt 
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer" 
            onClick={() => setOpenActualizar(!openActualizar)}
          />
          <RiDeleteBin5Line 
            className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer"
            onClick={handleDeleteDesayuno} 
          />
        </li>
      </ul>
    </>
  );
};

export default Lista_Desayuno;
