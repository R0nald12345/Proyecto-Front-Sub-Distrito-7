import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { actualizarApoyoSocial, getApoyoSocialID } from '../../../api/UnidadesEducativas';

const Modal_Actualizar_Social = ({ open, onClose, idUE, idApoyoSocial, listaGeneralApoyoSocial, setListasGeneralApoyoSocial }) => {
  if (!open) return null;

  // const { id, fecha, nombreEntrega, nombre, cantidad } = datosApoyoSocial;

  const [id, setId] = useState(0);
  const [nombres, setNombres] = useState("");
  const [nombreEntregas, setNombreEntregas] = useState("");
  const [cantidads, setCantidads] = useState(0);
  const [fechas, setFechas] = useState("");

  useEffect(() => {
    const fetchingDatoMantenimientoID = async () => {
      try{
        const response = await getApoyoSocialID(idApoyoSocial);
        console.log("responseeeeee", response);
        setId(response.id);
        setNombres(response.nombre);
        setNombreEntregas(response.nombreEntrega);
        setCantidads(response.cantidad);
        setFechas(response.fecha);
      }catch(error){
        console.log("Error en el componente Modal_Actualizar_Social" + error);
      }
    }
    fetchingDatoMantenimientoID();
  }, [])
  

  const handleActualizarApoyoSocial = async () => {
    if (!id) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'ID no definido!',
      });
      return;
    }

    try {
      const updatedFecha = new Date(fechas).toISOString(); // Convertir la fecha al formato ISO 8601
      const updatedNombreEntrega = nombreEntregas;
      const updatedNombre = nombres;
      const updatedCantidad = cantidads;
      const idUnidadEducativa = idUE;

      const data = await actualizarApoyoSocial(
        id,
        updatedNombre,
        updatedCantidad,
        updatedNombreEntrega,
        updatedFecha,
        idUnidadEducativa
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Apoyo Social Actualizado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });

      const updatedList = listaGeneralApoyoSocial.map(item =>
        item.id === id ? data : item
      );

      setListasGeneralApoyoSocial(updatedList);
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
            handleActualizarApoyoSocial();
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
          <h2 className="text-3xl font-bold text-center">Actualizar Apoyo Social</h2>
          <div className="mt-5">
            <h3 className="font-semibold">Nombre</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
            />

            <h3 className="font-semibold">Nombre Entrega</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              value={nombreEntregas}
              onChange={(e) => setNombreEntregas(e.target.value)}
            />

            <h3 className="font-semibold">Cantidad</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="number"
              value={cantidads}
              onChange={(e) => setCantidads(e.target.value)}
            />
            
            <h3 className="font-semibold">Fecha</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="date"
              value={fechas}
              onChange={(e) => setFechas(e.target.value)}
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
    </>
  );
};
export default Modal_Actualizar_Social;