import React from "react";
import useForm from "../../../src/hooks/useForm";
import Swal from "sweetalert2";
import axios from "axios";
import { actualizarDesayuno } from "../../api/UnidadesEducativas";

const Modal_Editar_Desayuno = ({ open, onClose , listaGeneralDesayuno,setListasGeneralDesayuno }) => {
  const { id, nombreEntrega, nombre, cantidad, fecha, idUnidadEducativa } = listaGeneralDesayuno;

  const { onInputChange, formState, nombreEntrega: formNombreEntrega, nombreDesayuno: formNombreDesayuno, cantidad: formCantidad, fecha: formFecha } = useForm({
    nombreEntrega: nombreEntrega || "",
    nombreDesayuno: nombre || "",
    cantidad: cantidad || "",
    fecha: fecha || "",
  });

  const handleEditarDesayuno = async (e) => {
    e.preventDefault();
    try {
      const result = await Swal.fire({
        title: 'Editar Desayuno?',
        text: "Estas seguro de editarlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, quiero editar!'
      });
      if (result.isConfirmed) {
        const data = await actualizarDesayuno(formNombreDesayuno, formCantidad, formNombreEntrega, formFecha, idUnidadEducativa);
        const updatedList = listaGeneralDesayuno.map(desayuno =>
          desayuno.id === id ? { ...data, id } : desayuno
        );
        setListasGeneralDesayuno(updatedList);
        Swal.fire({
          title: 'Editado!',
          text: 'El desayuno ha sido editado con éxito',
          icon: 'success'
        });
        onClose(); // Cierra el modal después de editar el desayuno
      }
    } catch (error) {
      console.log('Error en el componente Modal_Editar_Desayuno', error);
    }
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
        <form
          className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/4 -translate-y-1/2"
          onSubmit={handleEditarDesayuno}
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
            Editar Desayuno
          </h2>
          <div className="mt-5">
            <h3 className="font-semibold">Nombre Entrega</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              name="nombreEntrega"
              value={formNombreEntrega}
              onChange={onInputChange}
            />
            <h3 className="font-semibold">Nombre Desayuno</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              name="nombreDesayuno"
              value={formNombreDesayuno}
              onChange={onInputChange}
            />
            <h3 className="font-semibold">Cantidad</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="number"
              name="cantidad"
              value={formCantidad}
              onChange={onInputChange}
            />
            <h3 className="font-semibold">Fecha</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="date"
              name="fecha"
              value={formFecha}
              onChange={onInputChange}
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl" type="submit">
              Editar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal_Editar_Desayuno;
