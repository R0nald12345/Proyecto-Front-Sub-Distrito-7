import React from "react";
import Swal from 'sweetalert2'; 
import useForm from "../../../src/hooks/useForm";
import { crearNuevoDesayuno } from "../../api/UnidadesEducativas";

const Modal_Agregar_Desayuno = ({ open, onClose, idUE, listaGeneralDesayuno, setListasGeneralDesayuno }) => {
  console.log(idUE);
  
  const { onInputChange,onResetForm, nombreEntrega, nombreDesayuno, cantidad, fecha } = useForm({
    nombreEntrega: "",
    nombreDesayuno: "",
    cantidad: "",
    fecha: "",
  });

  const handleNuevoDesayuno = async (e) => {
    e.preventDefault();
    try {
      const data = await crearNuevoDesayuno(
        nombreEntrega,
        cantidad,
        nombreDesayuno,
        fecha,
        idUE
      );
      setListasGeneralDesayuno([...listaGeneralDesayuno, data]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Desayuno creado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
      onResetForm(); // Resetea el formulario después de crear el servicio
      onClose(); // Cierra el modal después de crear el servicio
    } catch (error) {
      console.log("Error en el Componente Modal_Agregar_Desayuno: " + error);
    }
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
        <form
          className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/4 -translate-y-1/2"
          onSubmit={handleNuevoDesayuno}
        >
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <h2 className="text-3xl font-bold text-center">Agregar Entrega</h2>
          <div className="mt-5">
            <h3 className="font-semibold">Nombre Entrega</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              name="nombreDesayuno" // Agregar el atributo name
              value={nombreDesayuno}
              onChange={onInputChange}
            />
            <h3 className="font-semibold">Nombre Desayuno</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              name="nombreEntrega" // Agregar el atributo name
              value={nombreEntrega}
              onChange={onInputChange}
            />
            <h3 className="font-semibold">Cantidad</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="number"
              name="cantidad" // Agregar el atributo name
              value={cantidad}
              onChange={onInputChange}
            />
            <h3 className="font-semibold">Fecha</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="date"
              name="fecha" // Agregar el atributo name
              value={fecha}
              onChange={onInputChange}
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl"
              type="submit"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal_Agregar_Desayuno;
