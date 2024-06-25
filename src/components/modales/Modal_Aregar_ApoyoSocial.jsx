import { useState } from 'react';
import Swal from 'sweetalert2';
import { newApoyoSocial } from '../../api/UnidadesEducativas';
import useForm from '../../hooks/useForm';

const Modal_Agregar_ApoyoSocial = ({ onClose, open, id, listaGeneralApoyoSocial, setListasGeneralApoyoSocial }) => {
  if (!open) return null;


  const { onInputChange, onResetForm, nombre, nombreEntrega, cantidad, fecha } = useForm({
    nombre: "",
    nombreEntrega: "",
    cantidad: 0,
    fecha: "",
  });

  const handleNuevoApoyoSocial = async () => {
    if (!id) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'ID no definido!',
      });
      return;
    }

    try {
      const data = await newApoyoSocial(
        nombre,
        cantidad,
        nombreEntrega,
        fecha,
        id
      );

      console.log('dato nuevo');
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Nuevo Apoyo Social creado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
      setListasGeneralApoyoSocial([...listaGeneralApoyoSocial, data]);
      // onResetForm();
      onClose();
    } catch (error) {
      console.error("Error al crear el Apoyo Social: ", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal al crear el Apoyo Social!',
      });
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
        <form
          className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/2 -translate-y-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            handleNuevoApoyoSocial();
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
          <h2 className="text-3xl font-bold text-center">Crear Nuevo Apoyo Social</h2>
          <div className="mt-5">
            <h3 className="font-semibold">Nombre</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              name='nombre'
              value={nombre}
              onChange={onInputChange}
            />

            <h3 className="font-semibold">Nombre Entrega</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              name='nombreEntrega'
              value={nombreEntrega}
              onChange={onInputChange}
            />

            <h3 className="font-semibold">Cantidad</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="number"
              name='cantidad'
              value={cantidad}
              onChange={onInputChange}
            />
            <h3 className="font-semibold">Fecha</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="date"
              name='fecha'
              value={fecha}
              onChange={onInputChange}
            />
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
export default Modal_Agregar_ApoyoSocial;
