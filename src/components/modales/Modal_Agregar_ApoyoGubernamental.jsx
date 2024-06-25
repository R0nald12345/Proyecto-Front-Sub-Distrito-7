import { useState } from "react";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";
import { newApoyoGubernamental } from "../../api/UnidadesEducativas";

const Modal_Agregar_ApoyoGubernamental = ({
  open,
  onClose,
  idUE,
  tipoCategoria,
  listaGeneralApoyoGubernamental,
  setListaGeneralApoyoGubernamental
}) => {

  if (!open) return null;

  const { onInputChange, onResetForm, fecha, nombreEntrega, cantidad } =
    useForm({
      fecha: "",
      nombreEntrega: "",
      cantidad: 0,
    });

  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const handleNuevoApoyoGubernamental = async () => {
    try {
      const data = await newApoyoGubernamental(cantidad, nombreEntrega, fecha, idUE, selectedCategoryId);
      setListaGeneralApoyoGubernamental([...listaGeneralApoyoGubernamental, data]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Apoyo Gubernamental exitosamente Creado",
        showConfirmButton: false,
        timer: 1500,
      });
      onClose(); // Cierra el modal después de crear el servicio
    } catch (e) {
      console.log("Hubo error en el Componente Modal_Agregar_ApoyoGubernamental", e);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
        <form
          className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/4 -translate-y-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            handleNuevoApoyoGubernamental();
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
            Crear Apoyo Gubernamental
          </h2>

          <div className="mt-5">
            <h3 className="font-semibold mt-2">Nombre Entrega</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
              type="text"
              name="nombreEntrega"
              value={nombreEntrega}
              onChange={onInputChange}
            ></input>

            <h3 className="font-semibold mt-2">Cantidad</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
              type="number"
              name="cantidad"
              value={cantidad}
              onChange={onInputChange}
            />

            <h3 className="font-semibold mt-2">Fecha</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
              type="date"
              name="fecha"
              value={fecha}
              onChange={onInputChange}
            />
          </div>

          <div>
            <select
              className="py-1 mt-4 rounded-md pl-3 border-gray-400 border-2 bg-gray-200 w-full"
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
            >
              {/* <option value="">Seleccione una categoría</option> */}
              {tipoCategoria.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>
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
    </>
  );
};

export default Modal_Agregar_ApoyoGubernamental;
