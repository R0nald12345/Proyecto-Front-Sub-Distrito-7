import {useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getDatoCentroTuristicos } from "../../api/CentroTuristicos";
import Lista_CentroTuristicos from "../../components/Listas/CentroTuristicos/Lista_CentroTuristicos";

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

//   const changeRutaNuevoFormulario = () => {
//     navigate("/inicio/unidadeducativa/agregarnuevo");
//   };

//   const handleFiltroCambio = (e) => {
//     setFiltro(e.target.value);
//   };

  const listaFiltrada =
    filtro.trim() === ""
      ? datosCentroTuristicos
      : datosCentroTuristicos.filter((element) =>
          element.nombre.toLowerCase().includes(filtro.toLowerCase())
        );

  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white/50 w-[70%] mx-auto px-6">
      {/* Parte Superrior */}
      <section className="flex-col justify-center p-2 bg-red w-full">
        <h3 className="text-3xl font-bold text-center mt-3">
          Lista de Centro Turisticos
        </h3>

        <section className="flex justify-between px-2 bg-red mt-5">
          {/* Boton */}

          <div className="col-span-4  flex items-center justify-end gap-3">
            <p className="font-new-font font-new-bold text-white">Nombre</p>
            <div className="w-full flex bg-gray-300 border border-black rounded-xl px-2 bg-red">
              <FaMagnifyingGlass className="mt-2 bg-red" />
              <input
                type="text"
                placeholder="Buscar"
                // onChange={handleFiltroCambio}
                className="w-full font-semibold  rounded-xl py-1 bg-gray-300  px-1 outline-none"
              />
            </div>
          </div>

          <button
            onClick={()=>navigate("/inicio/centro_turisticos/agregarnuevo")}
            className="text-white font-new-font font-new-bold bg-primary-900/90 rounded-lg py-3 px-2 bg-red"
          >
            Agregar Nuevo +
          </button>
        </section>
      </section>

      {/* //Parte de la Listas de Colegios */}
      <main className="flex flex-col justify-center w-full mt-5">
        <ul className="w-full flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
          
          <li className=" font-semibold text-center w-[30%] px-3 py-2">
            Nombre
          </li>

          <li className=" font-semibold text-center w-[55%] px-3 py-2 ">
            Direccion
          </li>

          <li className=" font-semibold text-center w-[15%] px-3 py-2">
            Acciones
          </li>
        </ul>

        <section className="">
          {listaFiltrada.map((element) => {
            return (
              <Lista_CentroTuristicos
                key={element.id}
                datosTuristicos={element}
                // nombreUE={element.nombre}
                // nombreDirector={element.idGestion.director}
                // turno={element.idTurno.nombre}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};
export default ListaGeneralCentroTuristicos;
