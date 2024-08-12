import { useContext, useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import Swal from "sweetalert2";
import {
  actualizarApoyoGubernamental,
  getApoyoGubernamentalID,
} from "../../../api/UnidadesEducativas";
import { DataContext } from "../../../context/DataProvider";

const Modal_Actualizar_Gubernamental = ({
  open,
  onClose,
  id,
  tipoCategoria,
  setListaGeneralApoyoGubernamental,
  listaGeneralApoyoGubernamental

}) => {
  // Definición de hooks al inicio del componente
  const [selectedOption, setSelectedOption] = useState({
    idCategoria: 0,
    nombreCategoria: "",
  });
  const [datoGubernamental, setDatoGubernamental] = useState([]);

  const [cantidad, setCantidad] = useState(0);
  const [nombreEntrega, setNombreEntrega] = useState("");
  const [fecha, setFecha] = useState("");

  // Verificación de la condición para retornar null si el modal no está abierto

  const { dataIdUE } = useContext(DataContext);

  // console.log("dataIdUE", dataIdUE);
  // console.log("tipoCategoria", tipoCategoria);

  // Uso de useEffect con la dependencia correcta
  useEffect(() => {
    const fetchingGetGubernamentalID = async () => {
      try {
        const response = await getApoyoGubernamentalID(id);
        setDatoGubernamental(response);
        console.log("response", response);
        setCantidad(response.cantidad);
        setNombreEntrega(response.nombreEntrega);
        setFecha(response.fecha);

      } catch (error) {
        console.log(
          "Error en el componente Modal_Actualizar_Gubernamental" + error
        );
      }
    };
    fetchingGetGubernamentalID();
  }, [id]); // Añadí `id` como dependencia

  // Función para manejar el cambio de selección
  const handleSelectChange = (e) => {
    const selectedId = Number(e.target.value); // Convertir a número
    const selectedNombre = tipoCategoria.find(
      (option) => option.id === selectedId
    )?.nombre;
    setSelectedOption({
      idCategoria: selectedId,
      nombreCategoria: selectedNombre || "", // Asegurarse de que no sea undefined
    });
    console.log("selectedOption", { idCategoria: selectedId, nombreCategoria: selectedNombre });
  };

  const handleActualizarGubernamental = async () => {
    try {
      console.log("id", id);
      console.log("cantidad", cantidad);
      console.log("nombreEntrega", nombreEntrega);
      console.log("fecha", fecha);
      console.log("dataIdUE", dataIdUE);
      console.log("selectedOption", selectedOption);
      const data = await actualizarApoyoGubernamental({
        id:id,
        cantidad: cantidad,
        nombreEntrega: nombreEntrega,
        fecha: fecha,
        idUnidadEducativa: dataIdUE,
        idCategoria: selectedOption.idCategoria,
      });

      setListaGeneralApoyoGubernamental([
        ...listaGeneralApoyoGubernamental,
        data,
      ]);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Apoyo Gubernamental exitosamente Actualizado",
        showConfirmButton: false,
        timer: 1500,
      });

      onClose(); // Cierra el modal después de actualizar el servicio
    } catch (e) {
      console.log(
        "Hubo un error en el Componente Modal_Actualizar_Gubernamental",
        e
      );
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
      <form
        className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleActualizarGubernamental(); // Asegúrate de llamar al método correcto aquí
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
          Actualizar Apoyo Gubernamental
        </h2>

        <div className="mt-5">
          <h3 className="font-semibold mt-2">Nombre Entrega</h3>
          <input
            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
            type="text"
            value={nombreEntrega}
            onChange={(e)=>setNombreEntrega(e.target.value)}
          />

          <h3 className="font-semibold mt-2">Cantidad</h3>
          <input
            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
            type="number"
            value={cantidad}
            onChange={(e)=>setCantidad(e.target.value)}
          />

          <h3 className="font-semibold mt-2">Fecha</h3>
          <input
            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
            type="date"
            value={fecha}
            onChange={(e)=>setFecha(e.target.value)}
          />
        </div>

        <div>
          <div>
            <p className="bg-red-600 text-center mt-3 py-2 text-xl text-white font-semibold rounded-md">Si el la categoria es la misma selecciona lo mismo</p>
          </div>
          <select
        className="py-1 mt-4 rounded-md pl-3 border-gray-400 border-2 bg-gray-200 w-full"
        value={selectedOption.idCategoria}
        onChange={handleSelectChange}
      >
        <option value="">Seleccione una categoría</option>
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
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal_Actualizar_Gubernamental;
