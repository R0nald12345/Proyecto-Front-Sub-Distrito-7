import { useState } from "react";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { deleteMantenimientoID } from "../../../api/UnidadesEducativas";
import Modal_Actualizar_Mantenimiento from "../../Modal/UnidadEducativa/Modal_Actualizar_Mantenimiento";

const Lista_Mantenimiento = ({
  idUE,
  idMantenimiento,
  datosMantenimiento,
  listaGeneralMantenimiento,
  setListasGeneralMantenimiento,
}) => {
  const { fecha, titulo, encargado, empresa } = datosMantenimiento;

  const [OpenModalEdit, setOpenModalEdit] = useState(false);
  // Convertir la fecha en un objeto Date
  // Función para formatear la fecha
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

  const handleEliminar = async () => {
    try {
      const result = await Swal.fire({
        title: "Eliminar Mantenimiento?",
        text: "Estas seguro de Eliminar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await deleteMantenimientoID(id);
        setListasGeneralMantenimiento(
          listaGeneralMantenimiento.filter((element) => element.id !== id)
        );
        Swal.fire({
          title: "Eliminado!",
          text: "El Mantenimiento ha sido eliminado con exito",
          icon: "success",
        });
        // Aquí puedes actualizar tu interfaz o recargar los datos necesarios
      }
    } catch (error) {
      console.log(
        "Error en Componente ListaGeneral fetchingDatosGeneralUE",
        error
      );
    }
  };

  return (
    <>
      <Modal_Actualizar_Mantenimiento
        open={OpenModalEdit}
        onClose={() => setOpenModalEdit(!OpenModalEdit)}
        idUE={idUE}
        idMantenimiento={idMantenimiento}
        listaGeneralMantenimiento={listaGeneralMantenimiento}
        setListasGeneralMantenimiento={setListasGeneralMantenimiento}
      />

      <ul className="bg-white gap-2 mb-3 rounded-xl shadow-lg flex px-2">
        <li className=" font-semibold   text-start w-[15%] px-2 py-2">
          {formatearFecha(fecha)}
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
