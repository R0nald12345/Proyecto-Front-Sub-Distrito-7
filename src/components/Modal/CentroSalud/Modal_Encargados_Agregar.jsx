import React, { useState,useEffect } from "react";
import { getDatoEspecialidades, nuevaCentroSaludHasEspecialidades } from "../../../api/CentroSalud";
import Swal from "sweetalert2";

const Modal_Encargados_Agregar = ({
  onClose,
  open,
  idCentroSalud,
  listaEncargadosEspecialidades,
  setListaEncargadosEspecialidades,
}) => {
  if (!open) return null;

  const [encargado, setEncargado] = useState("");
  const [idEspecialidad, setIdEspecialidad] = useState(0);
  const [tipoEspecialidad, setTipoEspecialidad] = useState([]);


  const handleNuevoEncargadoEspecialidad = async () => {
    try {
      const data = await nuevaCentroSaludHasEspecialidades(
        encargado,
        idCentroSalud,
        idEspecialidad

    );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Nueva especialista creado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
      setListaEncargadosEspecialidades([...listaEncargadosEspecialidades, data]);
      onClose();
    } catch (error) {
      console.error("Error al crear el nuevoi Especialista: ", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal al crear el nuevo Especialista!",
      });
    }
  };

  useEffect(() => {
    const fetchingEspecialidades = async () => {
      try {
        const datoTipoEspecialidades = await getDatoEspecialidades();
        setTipoEspecialidad(datoTipoEspecialidades);
      } catch (error) {
        console.log(
          "Error al Obtener Datos desde Componente fetchingEspecialidades",
          error
        );
      }
    };
    fetchingEspecialidades();
  }, []);

  const handleTipoEspecialidad = (event) => {
    const selectedId = event.target.value;
    // console.log(selectedId);
    setIdEspecialidad(selectedId);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
        <form
          className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/2 -translate-y-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            handleNuevoEncargadoEspecialidad();
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
          <h2 className="text-3xl font-bold text-center">
            Crear Nuevo Especialista
          </h2>
          <div className="mt-5">
            <h3 className="font-semibold">Encargado</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
              type="text"
              value={encargado}
              onChange={(e) => setEncargado(e.target.value)}
            />
            <h3 className="font-semibold mt-3">Especialidades</h3>

            <select
              className="py-1 mt-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
              onChange={handleTipoEspecialidad}
              defaultValue=""
            >
              <option value="">Seleccionar</option>
              {tipoEspecialidad.map((option) => (
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

export default Modal_Encargados_Agregar;
