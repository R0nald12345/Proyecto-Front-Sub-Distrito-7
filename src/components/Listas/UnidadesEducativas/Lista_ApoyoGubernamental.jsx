import {useState} from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import Swal from 'sweetalert2';
import Modal_Editar_ApoyoGubernamental from "../../modales/Modal_Editar_ApoyoGubernamental";
import { deleteApoyoGubernamentalID, deleteMantenimientoID } from '../../../api/UnidadesEducativas';


const Lista_ApoyoGubernamental = ({datoApoyoGubernamental,listaGeneralApoyoGubernamental,setListaGeneralApoyoGubernamental}) => {

  const { fecha, nombreEntrega, cantidad,id } = datoApoyoGubernamental;
  // console.log('DatoApoyoGubernamental');
  // console.log(datoApoyoGubernamental);

  const [openModalEdit, setOpenModalEdit] = useState(false);

  const fechaObj = new Date(fecha);

  // Obtener el día, mes y año de la fecha
  const dia = fechaObj.getDate();
  const mes = fechaObj.getMonth() + 1; // El mes se indexa desde 0 (enero es 0)
  const año = fechaObj.getFullYear();

  // Formatear la fecha como día/mes/año
  const fechaFormateada = `${dia}/${mes}/${año}`;

  const handleEliminar = async () => {
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
        console.log('id');
        console.log(id);
        await deleteApoyoGubernamentalID(id);
        setListaGeneralApoyoGubernamental(listaGeneralApoyoGubernamental.filter((element) => element.id !== id));
        Swal.fire({
          title: 'Eliminado!',
          text: 'ha sido eliminado con exito',
          icon: 'success'
        });
        // Aquí puedes actualizar tu interfaz o recargar los datos necesarios
      }
    }catch(error){
      console.log('Error en el componente Lista_ApoyoGubernamental' + error);
    }

  }

  return (
    <>
      <Modal_Editar_ApoyoGubernamental
        open={openModalEdit}
        onClose={() => setOpenModalEdit(false)}
        datoApoyoGubernamental={datoApoyoGubernamental}
      
      />
      <ul className="bg-white gap-3 mb-3 rounded-xl shadow-lg flex px-2">
        <li className=" font-semibold text-start w-[15%] px-2 py-2 ">
          {fechaFormateada}
        </li>
        <li className=" font-semibold text-start w-[50%] px-2 py-2 ">
          {nombreEntrega}
        </li>
        <li className=" font-semibold text-center w-[15%] px-2 py-2 ">
          {cantidad}
        </li>
        <li className=" font-semibold text-center w-[20%] px-2 py-2 flex justify-around gap-3 ">
          <BiEditAlt 
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer" 
            onClick={() => setOpenModalEdit(!openModalEdit)}
          />

          <RiDeleteBin5Line 
            onClick={handleEliminar}
            className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer" 
          />
        </li>
      </ul>
    </>
  );
};

export default Lista_ApoyoGubernamental