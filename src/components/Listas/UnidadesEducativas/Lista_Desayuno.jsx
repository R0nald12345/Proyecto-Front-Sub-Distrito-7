import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from 'sweetalert2';
import { BiEditAlt } from "react-icons/bi";
import Modal_Editar_Desayuno from "../../modales/Modal_Editar_Desayuno";
import Modal_Agregar_Desayuno from "../../modales/Modal_Agregar_Desayuno";
import { actualizarDesayuno, deleteDesayunoID } from "../../../api/UnidadesEducativas";

// const Lista_Desayuno = ({ fecha, nombreEntrega, nombre, cantidad }) => {
  console.log('DatosDesayuno');
  const Lista_Desayuno = ({datosDesayuno,idDesayuno,listaGeneralDesayuno,setListasGeneralDesayuno}) => {

  const { fecha, nombreEntrega, nombre, cantidad } = datosDesayuno;
  
  
  const [openModalEditar, setOpenModalEditar] = useState(false);

  // Convertir la fecha a un objeto Date
  const fechaObj = new Date(fecha);

  // Convertir el objeto Date al formato deseado (dia/mes/año)
  const fechaFormateada = fechaObj.toLocaleDateString("es-ES", {
    day: "2-digit", // Día en dos dígitos
    month: "2-digit", // Mes en dos dígitos
    year: "numeric", // Año en formato numérico
  });

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
      <Modal_Editar_Desayuno
        open={openModalEditar}
        onClose={() => setOpenModalEditar(false)}
        listaGeneralDesayuno={listaGeneralDesayuno}
        setListasGeneralDesayuno={setListasGeneralDesayuno}

      />

      
      {/* <Modal_Agregar_Desayuno/> */}
      <ul className="flex bg-white md:gap-2 lg:gap-5 mb-3 rounded-xl shadow-lg px-2">
        <li className=" font-semibold text-start w-[15%] px-1 py-2 ">
          {fechaFormateada}
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
            onClick={() => setOpenModalEditar(!openModalEditar)}
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
