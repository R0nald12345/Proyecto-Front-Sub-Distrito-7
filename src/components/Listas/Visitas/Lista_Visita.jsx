import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { deleteDatoCentroDeportivoId as deleteDatoCentroDeportivoIdApi } from "../../../api/CentroDeportivo";
import { deleteVisitas } from "../../../api/Visitas";
import Modal_Detalle_Visita from "../../Modal/Visita/Modal_Detalle_Visita";
import { useContext, useState } from "react";
import Modal_Editar_Visita from "../../Modal/Visita/Modal_Editar_Visita";
import { DataContext } from "../../../context/DataProvider";

const formatearFecha = (fecha) => {
  if (fecha.length > 0) {
    // Me indica que tengo una fecha
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

const Lista_Visita = ({
  datosVisita, 
  datosVisitas,
  setDatosVisitas,
}) => {
  const { id, titulo, fecha, visitantes } = datosVisita;

  const [openModalDetalles, setOpenModalDetalles] = useState(false);
  const [openModalEditar, setOpenModalEditar] = useState(false);

  const deleteVisita = async (id) => {
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
        await deleteVisitas(id);
        setDatosVisitas(
          datosVisitas.filter((element) => element.id !== id)
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
      <Modal_Detalle_Visita
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
      />

      <ul className="bg-white mb-3 gap-3 rounded-xl shadow-lg flex">
        <li className="font-semibold text-center w-[35%] px-2 py-2">
          {titulo}
        </li>

        <li className="font-semibold text-center w-[25%] px-2 py-2">
          {visitantes}
        </li>

        <li className="font-semibold text-center w-[20%] px-2 py-2">
          {fecha ? formatearFecha(fecha) : "Fecha no válida"}
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
            onClick={() => deleteVisita(id)}
          />
        </li>
      </ul>
    </>
  );
};

export default Lista_Visita;