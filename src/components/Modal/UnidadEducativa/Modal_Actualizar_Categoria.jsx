import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { actualizarCategoria } from "../../../api/UnidadesEducativas";

const Modal_Actualizar_Categoria = ({
  open,
  onClose,
  tipoCategoria,
  setTipoCategoria,
  id,
  nombre
}) => {

  if (!open) return null;

  console.log("nombreOriginal", nombre);
  console.log("idOriginal", id);

  const [nuevoNombre, setNuevoNombre] = useState(nombre);

  useEffect(() => {
    console.log("nombre", nuevoNombre);
  }, [nuevoNombre, setNuevoNombre])
  

  const handleActualizarCategoria = async () => {
    try {
        if (!id || !nuevoNombre) {
            console.error("ID o nombre inválido.");
            console.log("IDNuevo: ", id);
            console.log("NombreNuevo: ", nuevoNombre);
        }
        nombre = nuevoNombre;
      const data = await actualizarCategoria(id, nombre);
        setTipoCategoria(tipoCategoria.map((element) => (element.id === id ? data : element)));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Categoria, exitosamente Actualizado",
        showConfirmButton: false,
        timer: 2000,
      });
      onClose(); // Cierra el modal después de actualizar la categoría
    } catch (e) {
      console.log("Hubo error en el Componente Modal_Actualizar_Categoria", e);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
      <form
        className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleActualizarCategoria();
        }}
      >
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <h2 className="text-3xl font-bold text-center">
          Actualizar Categoria
        </h2>

        <div className="mt-5">
          <h3 className="font-semibold mt-2">Nombre Categoria</h3>
          <input
            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
            type="text"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal_Actualizar_Categoria;