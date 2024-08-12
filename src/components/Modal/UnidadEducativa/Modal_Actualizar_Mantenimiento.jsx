import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // Asegúrate de importar Swal
import { actualizarApoyoSocial, actualizarMantenimiento, crearNuevoMantenimiento, getMantenimientoID } from '../../../api/UnidadesEducativas';
import { v4 as uuidv4 } from 'uuid'; // Importa uuidv4

const Modal_Actualizar_Mantenimiento = ({ open, onClose, idUE,idMantenimiento, listaGeneralMantenimiento,setListasGeneralMantenimiento }) => {
  if (!open) return null;

  const [id, setId] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [encargado, setEncargado] = useState("");
  const [empresa, setEmpresa] = useState('');


  useEffect(() => {
    const fetchingDatoMantenimientoID = async () => {
      console.log("idMantenimientoooooo", idMantenimiento);
      try{
        const response = await getMantenimientoID(idMantenimiento);
        setId(response.id);
        setTitulo(response.titulo);
        setFecha(response.fecha);
        setEncargado(response.encargado);
        setEmpresa(response.empresa);
      }catch(error){
        console.log("Error en el componente Modal_Actualizar_Mantenimiento" + error);
      }
    }
    fetchingDatoMantenimientoID();
  }, [])
  

  const handleActualizarMantenimiento = async () => {
    if (!idMantenimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'ID no definido!',
      });
      return;
    }

    try {
      const updatedFecha = new Date(fecha).toISOString(); // Convertir la fecha al formato ISO 8601
      

      const data = await actualizarMantenimiento(
        idMantenimiento,
        titulo,
        updatedFecha,
        encargado,
        empresa,
        idUE
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mantenimiento Actualizado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });

      const updatedList = listaGeneralMantenimiento.map(item =>
        item.id === id ? data : item
      );

      setListasGeneralMantenimiento(updatedList);
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
            handleActualizarMantenimiento();
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
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <h3 className="font-semibold">Encargado</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              value={encargado}
              onChange={(e) => setEncargado(e.target.value)}
            />
            <h3 className="font-semibold">Empresa</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
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

export default Modal_Actualizar_Mantenimiento;