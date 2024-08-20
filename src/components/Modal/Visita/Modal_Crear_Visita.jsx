import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useForm from "../../../hooks/useForm";
import { getDatoGeneralUE } from "../../../api/UnidadesEducativas";
import { createDatoVisitas } from "../../../api/Visitas";
// import { crearNuevoDesayuno } from "../../api/UnidadesEducativas";
// import {Modal_Crear_Visita} from "../../components/Modal/Visita/Modal_Crear_Visita";

const Modal_Crear_Visita = ({ open, onClose, listaVisita, setListaVisita }) => {
  //   console.log(idUE);

  const { onInputChange, onResetForm, titulo, fecha, visitantes, motivo } =
    useForm({
      titulo: "",
      fecha: "",
      visitantes: "",
      motivo: "",
    });

  const [datoColegio, setDatoColegio] = useState([]);
  const [datoColegioId, setDatoColegioId] = useState(0);

  useEffect(() => {
    const fetchingVisitas = async () => {
      try {
        const data = await getDatoGeneralUE();
        setDatoColegio(data);
      } catch (error) {
        console.log("Error en Componente Modal_Crear_Visita", error);
      }
    };
    fetchingVisitas();
  }, []);

  const handleColegioChange = (event) => {
    const selectedId = event.target.value;
    setDatoColegioId(selectedId);
  };

  const handleNuevaVisita = async (e) => {
    e.preventDefault();
    try {
      let idUnidadEducativa = datoColegioId;
      const data = await createDatoVisitas(
        titulo,
        fecha,
        motivo,
        visitantes,
        idUnidadEducativa
      );
      setListaVisita([...listaVisita, data]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Visita creado exitosamente",
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
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <form
          className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5"
            onSubmit={handleNuevaVisita}
        >
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <h2 className="text-3xl font-bold text-center">Agregar Visitas</h2>
          <div className="mt-5">
            <h3 className="font-semibold mt-3">Título</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              name="titulo" // Agregar el atributo name
              value={titulo}
              onChange={onInputChange}
            />

            <h3 className="font-semibold mt-3">Visitantes</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              name="visitantes" // Agregar el atributo name
              value={visitantes}
              onChange={onInputChange}
            />

            <h3 className="font-semibold mt-3">Nombre Colegio</h3>

            <select
              className="mt-2 py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
              onChange={handleColegioChange}
              defaultValue=""
            >
              <option value="">Seleccionar</option>
              {datoColegio.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>

            <h3 className="font-semibold mt-3">Motivo</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
              type="text"
              name="motivo" // Agregar el atributo name
              value={motivo}
              onChange={onInputChange}
            />

            <h3 className="font-semibold mt-3">Fecha</h3>
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
              className="bg-green-600 hover:bg-green-700 font-semibold mt-3 mt-5 text-white py-2 px-5 rounded-xl"
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

export default Modal_Crear_Visita;
