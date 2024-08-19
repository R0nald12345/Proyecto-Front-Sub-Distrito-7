import { useState } from "react";
import useForm from "../../../hooks/useForm";
import Swal from "sweetalert2";
import { crearTipoColegio } from "../../../api/UnidadesEducativas";
// import { newCategoria } from "../../../api/UnidadesEducativas";
// import { newApoyoGubernamental } from "../../api/UnidadesEducativas";

const Modal_Crear_TipoColegio = ({
  open,
  onClose,
  tipoColegio,
  setTipoColegio
}) => {

  if (!open) return null;

  const { onInputChange, onResetForm, nombre } = useForm({nombre: "" });

  const handleNuevoTipoColegio = async () => {
    try {
      const data = await crearTipoColegio(nombre);
      setTipoColegio([...tipoColegio, data]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Nueva Categoria, exitosamente Creado",
        showConfirmButton: false,
        timer: 1500,
      });
      onResetForm();
      onClose(); // Cierra el modal después de crear el servicio
    } catch (e) {
      console.log("Hubo error en el Componente Modal_Agregar_ApoyoGubernamental", e);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <div className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5">
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
              onClick={onClose}
            >
              X
            </button>
          </div>

          <h2 className="text-3xl font-bold text-center">
            Crear Nuevo Tipo Colegio
          </h2>

          <form
            className="mt-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleNuevoTipoColegio();
            }}
          >
            <div>
              <h3 className="font-semibold mt-2">Nombre de Tipo Colegio</h3>
              <input
                className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
                type="text"
                name="nombre"
                value={nombre}
                onChange={onInputChange}
              ></input>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl"
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Modal_Crear_TipoColegio;
