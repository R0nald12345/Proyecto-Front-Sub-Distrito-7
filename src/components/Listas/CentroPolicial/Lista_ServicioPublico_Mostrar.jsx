import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { deleteCentroPolicialID } from "../../../api/CentroPolicial";

const Lista_ServicioPublico_Mostrar = ({ descripcion }) => {

  const deleteDatoCentroPolicial = async (id) => {
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
        onDelete(id);
        Swal.fire({
          title: "Eliminado!",
          text: "Eliminado Correctamente.",
          icon: "success",
        });
      }
    } catch (error) {
      console.log("Error en el Componente Lista_CentroPolicial", error);
    }
  };

  return (
    <>
      <ul className="bg-white mb-3 rounded-xl shadow-lg flex">
        
        <li className=" font-semibold lg:text-center w-[70%] lg:w-[80%] px-2 py-2">
          {descripcion}
        </li>

        {/* <li className=" font-semibold text-center w-[30%] lg:w-[20%] px-2 py-2 flex justify-around gap-3">
          <BiEditAlt 
            onClick={onEdit}
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer" />
         
          <RiDeleteBin5Line
            onClick={()=>onDelete(id)}
            className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer"
          />
        </li> */}

      </ul>
    </>
  );
};

export default Lista_ServicioPublico_Mostrar;