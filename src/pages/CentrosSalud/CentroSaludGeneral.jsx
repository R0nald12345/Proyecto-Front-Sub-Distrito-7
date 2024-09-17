import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Lista_CentroSalud from "../../components/Encabezado_Listas/CentroSalud/Lista_CentroSalud";
import {
  getDatoCentroSalud,
  deleteDatoCentroSalud,
} from "../../api/CentroSalud";
import Swal from "sweetalert2";
// import { deleteDatoCentroSalud } from '../../api/CentroSalud';

const CentroSaludGeneral = () => {
  const navigate = useNavigate();

  const [datosCentroSalud, setDatosCentroSalud] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchingDatosCentroSalud = async () => {
      try {
        const response = await getDatoCentroSalud();
        setDatosCentroSalud(response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneral fetchingDatosCentrosDeportivos",
          error
        );
      }
    };
    fetchingDatosCentroSalud();
  }, []);

  const handleDeleteCentroSalud = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Deseas Eliminar?",
        text: "Si eliminas no podrás recuperarlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, quiero Eliminar!",
      });

      if (result.isConfirmed) {
        const response = await deleteDatoCentroSalud(id);

        setDatosCentroSalud((prevState) =>
          prevState.filter((element) => element.id !== id)
        );

        Swal.fire({
          title: "Eliminado!",
          text: "Eliminado Correctamente.",
          icon: "success",
        });
      }
    } catch (error) {
      console.log("Error en el Componente Lista_CentroTuristicos", error);
    }
  };

  
  const handleDireccionEspecialidad = (e) => {
    e.preventDefault();
    navigate(`/inicio/centrosalud/especialidades/${id}`);
  }

  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  };

  const listaFiltrada =
    filtro.trim() === ""
      ? datosCentroSalud
      : datosCentroSalud.filter((element) =>
          element.nombre.toLowerCase().includes(filtro.toLowerCase())
        );

  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white/50 w-[95%] xl:w-[80%] mx-auto px-4 md:px-6 pb-6 md:pb-2">
      {/* Parte Superrior */}
      <section className="flex-col justify-center  p-2 bg-red w-full">
        <h3 className="text-3xl font-bold text-center  mt-3">
          Lista de Centro Saluds
        </h3>

        <section className="md:flex md:justify-between md:px-2 bg-red gap-3 ">
          <div className=" mt-5 col-span-4 flex items-center  justify-end gap-1 md:gap-3">
            <p className="font-new-font font-new-bold text-white">Nombre</p>
            <div className="w-full flex bg-gray-300 border border-black rounded-xl px-2 bg-red">
              <FaMagnifyingGlass className="mt-2 bg-red" />
              <input
                type="text"
                placeholder="Buscar"
                // onChange={handleFiltroCambio}
                className="w-full font-semibold rounded-xl py-1 bg-gray-300 px-1 outline-none"
              />
            </div>
          </div>

          <section className="md:flex md:justify-around md:w-[60%]  gap-3" >
            <button
              type="button"
              className="w-full md:w-2/3  mt-14 md:mt-6 bg-green-600 rounded-xl text-white uppercase py-3 text-xl font-semibold hover:bg-primary-900/90"
              onClick={(e) => handleDireccionEspecialidad(e)}
            >
              Especialidades
            </button>

            <button
              className="mt-5 md:w-1/3 text-white font-new-font font-new-bold bg-primary-900/90 rounded-lg py-3 px-2 w-full"
              onClick={() => navigate("/inicio/centrosalud/agregarnuevo")}
            >
              Agregar Nuevo +
            </button>

          </section>

         
        </section>
      </section>

      {/* Lista de Centros Deportivos */}
      <main className="w-full mt-5">
        {/* Lista para pantallas grandes */}
        <div className="hidden md:flex flex-col justify-center w-full">
          <ul className="w-full flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
            <li className="font-semibold text-start w-[32%] px-3 py-2">
              Nombre
            </li>

            <li className="font-semibold text-start w-[33%] px-3 py-2">
              Direccion
            </li>

            <li className="font-semibold text-center w-[12%] px-3 py-2">
              Horario
            </li>

            <li className="font-semibold text-center w-[8%] px-3 py-2">
              Nivel
            </li>

            <li className="font-semibold text-center w-[15%] px-3 py-2">
              Acciones
            </li>
          </ul>

          <section className="mt-3 max-h-28 md:max-h-80  overflow-y-auto scrollbar-hide">
            {listaFiltrada.map((element) => (
              <Lista_CentroSalud
                key={element.id}
                dateCentroSalud={element}
                datosCentroSalud={datosCentroSalud}
                setDatosCentroSalud={setDatosCentroSalud}
              />
            ))}
          </section>
        </div>

        {/* Tarjetas para pantallas pequeñas */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {listaFiltrada.map((element) => (
            <div key={element.id} className="bg-white p-4 rounded-xl shadow-lg">
              <h4 className="font-bold text-lg">{element.nombre}</h4>
              <p className="text-gray-600">{element.direccion}</p>
              <div className="flex justify-end mt-3 gap-2">
                {/* Aquí puedes agregar los botones de acciones */}
                <button
                  className="bg-primary-900 text-white px-3 py-1 rounded-lg"
                  onClick={() =>
                    navigate(`/inicio/centrosalud/editar/${element.id}`)
                  }
                >
                  Editar
                </button>
                <button
                  className="bg-blue-950 text-white px-3 py-1 rounded-lg"
                  onClick={() =>
                    navigate(`/inicio/centrosalud/detalles/${element.id}`)
                  }
                >
                  Detalles
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  onClick={() => handleDeleteCentroSalud(element.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CentroSaludGeneral;
