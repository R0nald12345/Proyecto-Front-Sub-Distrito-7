import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { deleteApoyoSocialID } from "../../../api/UnidadesEducativas";
import Modal_Actualizar_Social from "../../Modal/UnidadEducativa/Modal_Actualizar_Social";
import { DataContext } from "../../../context/DataProvider";

const Lista_ApoyoSocial = ({ idUE, idApoyoSocial, datosApoyoSocial, listaGeneralApoyoSocial, setListasGeneralApoyoSocial }) => {
  const [openActualizar, setOpenActualizar] = useState(false);

  const { setApoyoSocialID } = useContext(DataContext);

  setApoyoSocialID(idApoyoSocial);


  const { fecha, nombreEntrega, nombre, cantidad } = datosApoyoSocial;

  console.log('fecha eDestrcuturing');
  console.log(fecha);

  // Función para formatear la fecha
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

  // const fechaFormateada = formatearFecha(fecha);

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
      <Modal_Actualizar_Social
        open={openActualizar}
        onClose={() => setOpenActualizar(false)}
        idUE={idUE}
        idApoyoSocial={idApoyoSocial}
        listaGeneralApoyoSocial={listaGeneralApoyoSocial}
        setListasGeneralApoyoSocial={setListasGeneralApoyoSocial}
      />

      <ul className="bg-white gap-2 mb-3 rounded-xl shadow-lg flex px-2">
        <li className="font-semibold text-start w-[15%] px-1 py-2">{formatearFecha(fecha)}</li>
        <li className="font-semibold text-start w-[28%] px-1 py-2">{nombre}</li>
        <li className="font-semibold text-start w-[33%] px-1 py-2">{nombreEntrega}</li>
        <li className="font-semibold text-center w-[12%] px-1 py-2">{cantidad}</li>
        <li className="font-semibold text-center w-[12%] py-2 flex justify-around gap-3">
          <BiEditAlt
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer"
            onClick={() => setOpenActualizar(!openActualizar)}
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