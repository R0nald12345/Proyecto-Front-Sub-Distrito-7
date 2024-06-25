import { useState } from "react";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import Modal_Editar_ApoyoSocial from "../../modales/Modal_Editar_ApoyoSocial";
import { deleteApoyoSocialID } from "../../../api/UnidadesEducativas";

const Lista_ApoyoSocial = ({ idUE,apoyoSocialId, datosApoyoSocial, listaGeneralApoyoSocial, setListasGeneralApoyoSocial }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);

  console.log("Lista General Apoyo Social");
  console.log(listaGeneralApoyoSocial);
  // Destructuring para extraer los datos necesarios de listaGeneralApoyoSocial
  const { fecha, nombreEntrega, nombre, cantidad } = datosApoyoSocial;

 console.log('fecha eDestrcuturing');
 console.log(fecha);
  // Función para formatear la fecha
  const formatearFecha = (fecha) => {
    const fechaObj = new Date(fecha);
    if (!isNaN(fechaObj.getTime())) {
      return fechaObj.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } else {
      return "Fecha no válida";
    }
  };

  const fechaFormateada = formatearFecha(fecha);

  const handleEliminar = async () => {
    try {
      const result = await Swal.fire({
        title: `Eliminar ${nombre}`,
        text: "Estas seguro de Eliminar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await deleteApoyoSocialID(apoyoSocialId);
        setListasGeneralApoyoSocial(listaGeneralApoyoSocial.filter((element) => element.id !== apoyoSocialId));
        Swal.fire("Eliminado!", `El ${nombre} ha sido eliminado con exito`, "success");
      }
    } catch (error) {
      console.error("Error en Componente ListaGeneral", error);
    }
  };

  return (
    <>
      {/* <Modal_Editar_ApoyoSocial
        open={openModalEdit}
        onClose={() => setOpenModalEdit(false)}
      /> */}
      <ul className="bg-white gap-3 mb-3 rounded-xl shadow-lg flex px-2">
        <li className="font-semibold text-start w-[10%] px-3 py-2">{fechaFormateada}</li>
        <li className="font-semibold text-start w-[35%] px-3 py-2">{nombre}</li>
        <li className="font-semibold text-start w-[35%] px-3 py-2">{nombreEntrega}</li>
        <li className="font-semibold text-center w-[10%] px-2 py-2">{cantidad}</li>
        <li className="font-semibold text-center w-[10%] px-2 py-2 flex gap-3">
          <BiEditAlt
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer"
            onClick={() => setOpenModalEdit(!openModalEdit)}
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

export default Lista_ApoyoSocial;