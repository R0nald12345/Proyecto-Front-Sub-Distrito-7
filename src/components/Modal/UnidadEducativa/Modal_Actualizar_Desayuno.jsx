import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { actualizarApoyoSocial, actualizarDesayuno, getDesayunosID } from '../../../api/UnidadesEducativas';

const Modal_Actualizar_Desayuno = ({ open, onClose, idUE, idDesayuno, listaGeneralDesayuno, setListasGeneralDesayuno }) => {
  
 
  if (!open) return null;

  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [nombreEntrega, setNombreEntrega] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const fetchingDatoDesayunoID = async () => {
      try {
        const response = await getDesayunosID(idDesayuno);
        console.log("responseeeeee", response);
        setId(response.id);
        setNombre(response.nombre);
        setNombreEntrega(response.nombreEntrega);
        setCantidad(response.cantidad);
        setFecha(response.fecha);
      } catch (error) {
        console.log("Error en el componente Modal_Actualizar_Desayuno" + error);
      }
    }
    fetchingDatoDesayunoID();
  }, [idDesayuno]);

  const handleActualizarDesayuno = async () => {
    if (!id) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'ID no definido!',
      });
      return;
    }

    try {
      const updatedFecha = new Date(fecha).toISOString(); // Convertir la fecha al formato ISO 8601
    
      const data = await actualizarDesayuno(
        id,
        nombre,
        updatedFecha,
        nombreEntrega,
        cantidad,
        idUE
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Desayuno Actualizado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });

      const updatedList = listaGeneralDesayuno.map(item =>
        item.id === id ? data : item
      );

      setListasGeneralDesayuno(updatedList);
      onClose();
    } catch (error) {
      console.error("Error al actualizar el Desayuno: ", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal al actualizar el Desayuno!',
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
      <form
        className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/2 -translate-y-1/2"
        onSubmit={(e) => {
          e.preventDefault();
          handleActualizarDesayuno();
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
        <h2 className="text-3xl font-bold text-center">Actualizar Desayuno</h2>
        <div className="mt-5">
          <h3 className="font-semibold">Nombre</h3>
          <input
            className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <h3 className="font-semibold">Nombre Entrega</h3>
          <input
            className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
            type="text"
            value={nombreEntrega}
            onChange={(e) => setNombreEntrega(e.target.value)}
          />

          <h3 className="font-semibold">Cantidad</h3>
          <input
            className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
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
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal_Actualizar_Desayuno;