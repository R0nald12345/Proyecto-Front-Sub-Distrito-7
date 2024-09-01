import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { deleteDatoCentroDeportivoId as deleteDatoCentroDeportivoIdApi } from "../../../api/CentroDeportivo";

const Lista_CentroDeportivo = ({
  datosDeportivos,
  datosCentroDeportivo,
  setDatosCentroDeportivo,
}) => {
  const { id, nombre, direccion } = datosDeportivos;
  const navigate = useNavigate();

  const deleteDatoCentroDeportivo = async (id) => {
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
        await deleteDatoCentroDeportivoIdApi(id);
        setDatosCentroDeportivo(
          datosCentroDeportivo.filter((element) => element.id !== id)
        );
        Swal.fire({
          title: "Eliminado!",
          text: "Eliminado Correctamente.",
          icon: "success",
        });
      }
    } catch (error) {
      console.log("Error en el Componente Lista_CentroDeportivo", error);
    }
  };

  return (
    <>
      <ul className="bg-white mb-3 rounded-xl shadow-lg flex">
        <li className="font-semibold text-center w-[30%] px-2 py-2">
          {nombre}
        </li>
        <li className="font-semibold text-center w-[50%] px-2 py-2">
          {direccion}
        </li>
        <li className="font-semibold text-center w-[20%] px-2 py-2 flex justify-around gap-3">

          <BiEditAlt 
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer" 
            onClick={() => navigate(`/inicio/centro_deportivo/actualizar/${id}`)}
          />

          <IoEyeSharp
            className="bg-black text-white text-3xl rounded-md p-1 cursor-pointer"
            onClick={() => navigate(`/inicio/centro_deportivo/detalles/${id}`)}
          />
          <RiDeleteBin5Line
            className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer"
            onClick={() => deleteDatoCentroDeportivo(id)}
          />
        </li>
      </ul>
    </>
  );
};

export default Lista_CentroDeportivo;
