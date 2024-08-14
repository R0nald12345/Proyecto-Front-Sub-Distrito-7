import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Modal_Actualizar_ServicioPublico = ({
  open,
  onClose,
  datoNombre,
  onUpdateServicioPublico,
  index
}) => {

  if (!open) return null;

  const [nombre, setNombre] = useState(datoNombre);

  useEffect(() => {
    setNombre(datoNombre);
  }, [datoNombre]);

  const handleEditarServicioPublico = async () => {
    try {
      await onUpdateServicioPublico(index, nombre);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Servicio Público Actualizado Exitosamente!",
        showConfirmButton: false,
        timer: 1500,
      });
      onClose(); // Cierra el modal después de actualizar el servicio
    } catch (e) {
      console.log("Hubo error en el Componente Modal_Actualizar_ServicioPublico", e);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
      <form
        className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleEditarServicioPublico();
        }}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <h2 className="text-3xl font-bold text-center">
          Actualizar Servicio Público
        </h2>

        <div className="mt-5">
          <h3 className="font-semibold mt-2">Nombre Servicio Público</h3>
          <input
            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl"
          >
            Actualizar Servicio Público
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal_Actualizar_ServicioPublico;