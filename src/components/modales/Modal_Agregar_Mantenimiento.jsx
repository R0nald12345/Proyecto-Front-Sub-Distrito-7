import { useState } from 'react';
import Swal from 'sweetalert2'; // Asegúrate de importar Swal
import { crearNuevoMantenimiento } from '../../api/UnidadesEducativas';
import { v4 as uuidv4 } from 'uuid'; // Importa uuidv4

const Modal_Agregar_Mantenimiento = ({ id, open, onClose,listaGeneralMantenimiento,setListasGeneralMantenimiento }) => {
  if (!open) return null;

  const [title, setTitle] = useState('');
  const [encargo, setEncargado] = useState('');
  const [company, setCompany] = useState('');
  const [fecha, setFecha] = useState('');


  const handleNuevoMantenimiento = async () => {
    try {
      // const id = uuidv4(); // Genera un UUID
      const data = await crearNuevoMantenimiento( title, encargo, company, fecha, id );
      setListasGeneralMantenimiento([...listaGeneralMantenimiento, data]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mantenimiento creado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
      onClose(); // Cierra el modal después de crear el mantenimiento
    } catch (error) {
      console.log("Error en el Componente Modal_Agregar_Mantenimiento: " + error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
        <form
          className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/2 -translate-y-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            handleNuevoMantenimiento();
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
          <h2 className="text-3xl font-bold text-center">Crear Nuevo Mantenimiento</h2>
          <div className="mt-5">
            <h3 className="font-semibold">Título</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h3 className="font-semibold">Encargado</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              value={encargo}
              onChange={(e) => setEncargado(e.target.value)}
            />
            <h3 className="font-semibold">Empresa</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <h3 className="font-semibold">Fecha</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
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

export default Modal_Agregar_Mantenimiento;