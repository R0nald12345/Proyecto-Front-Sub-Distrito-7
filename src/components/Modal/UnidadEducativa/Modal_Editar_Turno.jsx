import { useContext, useState } from "react";
import useForm from "../../../hooks/useForm";
import Swal from "sweetalert2";
import { actualizarTurno } from "../../../api/UnidadesEducativas";
import { DataContext } from "../../../context/DataProvider";

const Modal_Editar_Turno = ({
  open,
  onClose,
  idTurno,
  nombreTurno,
}) => {

  if (!open) return null;

  const {datoTurno,setDatoTurno} = useContext(DataContext);

  const [nombre, setNombre] = useState(nombreTurno);

  const updateTurno = async () => {
    try {
      let id = idTurno;
    
      const data = await actualizarTurno(id, nombre ); // Asegúrate de que la API espera un objeto
      setDatoTurno( datoTurno.map( dato => (dato.id === id) ? data : dato ) );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Turno, exitosamente Actualizado",
        showConfirmButton: false,
        timer: 1500,
      });
      onClose(); // Cierra el modal después de crear el turno
    } catch (e) {
      console.log("Hubo error en el Componente Modal_Crear_Turno", e);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <div className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5">
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
              onClick={onClose}
            >
              X
            </button>
          </div>

          <h2 className="text-3xl font-bold text-center">
            Actualizar Turno
          </h2>

          <form
            className="mt-5"
            onSubmit={(e) => {
              e.preventDefault();
              updateTurno();
            }}
          >
            <div>
              <h3 className="font-semibold mt-2">Nombre de Turno</h3>
              <input
                className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
                type="text"
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)}
              ></input>
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
      </div>
    </>
  );
};

export default Modal_Editar_Turno;