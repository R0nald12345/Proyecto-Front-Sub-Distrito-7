import {useState} from 'react'
import { useParams } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import Swal from 'sweetalert2';
import Modal_Editar_ApoyoGubernamental from "../../modales/Modal_Editar_ApoyoGubernamental";
import { deleteApoyoGubernamentalID, deleteMantenimientoID } from '../../../api/UnidadesEducativas';
import Modal_Actualizar_Categoria from '../../Modal/UnidadEducativa/Modal_Actualizar_Categoria';
import Modal_Actualizar_Gubernamental from '../../Modal/UnidadEducativa/Modal_Actualizar_Gubernamental';


const Lista_ApoyoGubernamental = ({datoApoyoGubernamental,tipoCategoria, listaGeneralApoyoGubernamental,setListaGeneralApoyoGubernamental}) => {

  // const { id } = useParams();

  const { fecha, nombreEntrega, cantidad,id } = datoApoyoGubernamental;
  // console.log('DatoApoyoGubernamental');


  const [openModalActualizar, setOpenModalActualizar] = useState(false);


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

      <Modal_Actualizar_Gubernamental
        open={openModalActualizar}
        onClose={() => setOpenModalActualizar(false)}
        id={id}
        tipoCategoria={tipoCategoria}
        listaGeneralApoyoGubernamental={listaGeneralApoyoGubernamental}
        setListaGeneralApoyoGubernamental={setListaGeneralApoyoGubernamental}
      />

      <ul className="bg-white gap-3 mb-3 rounded-xl shadow-lg flex px-2">
        <li className=" font-semibold text-start w-[15%] px-2 py-2 ">
          {formatearFecha(fecha)}
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
            onClick={() => setOpenModalActualizar(!openModalActualizar)}
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