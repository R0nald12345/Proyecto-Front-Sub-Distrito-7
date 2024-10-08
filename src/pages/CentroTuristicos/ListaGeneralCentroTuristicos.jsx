import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { deleteCentroTuristico, getDatoCentroTuristicos } from "../../api/CentroTuristicos";
import Lista_CentroTuristicos from "../../components/Listas/CentroTuristicos/Lista_CentroTuristicos";
import Swal from "sweetalert2";

const ListaGeneralCentroTuristicos = () => {
  const navigate = useNavigate();

  const [datosCentroTuristicos, setDatosCentroTuristicos] = useState([]);

  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchingDatosCentrosTuristicos = async () => {
      try {
        const response = await getDatoCentroTuristicos();
        setDatosCentroTuristicos(response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneral fetchingDatosGeneralUE",
          error
        );
      }
    };
    fetchingDatosCentrosTuristicos();
  }, []);

  const handleDeleteCentroTuristico = async (id) => {
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
        await deleteCentroTuristico(id);
        setDatosCentroTuristicos(
          datosCentroTuristicos.filter((element) => element.id !== id)
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
  }

  //   const changeRutaNuevoFormulario = () => {
  //     navigate("/inicio/unidadeducativa/agregarnuevo");
  //   };

  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  };

  const listaFiltrada =
    filtro.trim() === ""
      ? datosCentroTuristicos
      : datosCentroTuristicos.filter((element) =>
          element.nombre.toLowerCase().includes(filtro.toLowerCase())
        );

  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white/50 w-[95%] xl:w-[70%] mx-auto px-4 md:px-6 pb-6 md:pb-2">
      {/* Parte Superrior */}
      <section className="flex-col justify-center p-2 bg-red w-full">
        <h3 className="text-3xl font-bold text-center mt-3">
          Lista de Centro Turisticos
        </h3>

        <section className="md:flex md:justify-between md:px-2 bg-red">
          {/* Boton */}

          <div className="mt-5 col-span-4  flex items-center justify-end gap-3">
            <p className="font-new-font font-new-bold text-white">Nombre</p>
            <div className="w-full flex bg-gray-300 border border-black rounded-xl px-2 bg-red">
              <FaMagnifyingGlass className="mt-2 bg-red" />
              <input
                type="text"
                placeholder="Buscar"
                onChange={handleFiltroCambio}
                className="w-full font-semibold  rounded-xl py-1 bg-gray-300  px-1 outline-none"
              />
            </div>
          </div>

          <button
            className="mt-5 md:w-[30%] text-white font-new-font font-new-bold bg-primary-900/90 rounded-lg py-3 px-2 w-full"
            onClick={() => navigate("/inicio/centro_turisticos/agregarnuevo")}
          >
            Agregar Nuevo +
          </button>
        </section>
      </section>

      {/* //Parte de la Listas de Colegios */}
      <main className="flex flex-col justify-center w-full mt-5">
        <div className="hidden md:flex flex-col justify-center w-full">
          <ul className="w-full flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
            <li className=" font-semibold text-center w-[30%] px-3 py-2">
              Nombre
            </li>

            <li className=" font-semibold text-center w-[50%] px-3 py-2 ">
              Direccion
            </li>

            <li className=" font-semibold text-center w-[20%] px-3 py-2">
              Acciones
            </li>
          </ul>

          <section className="mt-3 max-h-28 md:max-h-80  overflow-y-auto scrollbar-hide">
            {listaFiltrada.map((element) => {
              return (
                <Lista_CentroTuristicos
                  key={element.id}
                  id={element.id}
                  datosTuristicos={element}
                  datosCentroTuristicos={datosCentroTuristicos}
                  setDatosCentroTuristicos={setDatosCentroTuristicos}

                  // nombreUE={element.nombre}
                  // nombreDirector={element.idGestion.director}
                  // turno={element.idTurno.nombre}
                />
              );
            })}
          </section>
        </div>
      </main>

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
                onClick={() => navigate(`/inicio/centro_turisticos/actualizar/${element.id}`)}
              >
                Editar
              </button>
              <button
                className="bg-blue-950 text-white px-3 py-1 rounded-lg"
                onClick={() =>
                  navigate(`/inicio/centro_turisticos/detalles/${element.id}`)
                }
              >
                Detalles
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
                onClick={() => handleDeleteCentroTuristico(element.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListaGeneralCentroTuristicos;
