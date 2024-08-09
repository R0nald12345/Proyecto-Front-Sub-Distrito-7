import React, { useState } from "react";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { deleteCategoriaID } from "../../../api/UnidadesEducativas";
import Modal_Actualizar_Categoria from "../../../components/Modal/UnidadEducativa/Modal_Actualizar_Categoria";

const ListaCategoria_Gubernamental = ({
  datoCategoria,
  tipoCategoria,
  setTipoCategoria,
}) => {
  const [openActualizarCategoria, setActualizarCategoria] = useState(false);
  const { id, nombre } = datoCategoria || {};

  const handleDeleteCategoria = async () => {
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
        await deleteCategoriaID(id);
        setTipoCategoria(tipoCategoria.filter((element) => element.id !== id));
        Swal.fire({
          title: "Eliminado!",
          text: "Eliminado Correctamente.",
          icon: "success",
        });
      }
    } catch (error) {
      console.log("Error en el Componente Lista_CentroTuristicos", error);
    }
  };

  return (
    <>

      <Modal_Actualizar_Categoria
        open={openActualizarCategoria}
        onClose={() => setActualizarCategoria(false)}
        tipoCategoria={tipoCategoria}
        setTipoCategoria={setTipoCategoria}
        id={id}
        nombre={nombre}
      />

      <ul className="bg-white gap-3 mb-3 rounded-xl shadow-lg flex px-2">
        <li className=" font-semibold text-start w-[70%] px-2 py-2 ">
          {nombre}
        </li>

        <li className=" font-semibold text-center w-[30%] px-2 py-2 flex justify-around gap-3 ">
          <BiEditAlt
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer"
            onClick={() => setActualizarCategoria(!openActualizarCategoria)}
          />

          <RiDeleteBin5Line
            onClick={handleDeleteCategoria}
            className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer"
          />
        </li>
      </ul>
    </>
  );
};

export default ListaCategoria_Gubernamental;
