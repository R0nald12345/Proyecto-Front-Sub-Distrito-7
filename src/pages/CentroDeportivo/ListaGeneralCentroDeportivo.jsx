import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { getDatoCentroDeportivo } from "../../api/CentroDeportivo";
import Lista_CentroDeportivo from "../../components/Listas/CentroDeportivo/Lista_CentroDeportivo";

const ListaGeneralCentroDeportivo = () => {
  const navigate = useNavigate();

  const [datosCentroDeportivo, setDatosCentroDeportivo] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchingDatosCentrosDeportivos = async () => {
      try {
        const response = await getDatoCentroDeportivo();
        setDatosCentroDeportivo(response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneral fetchingDatosCentrosDeportivos",
          error
        );
      }
    };
    fetchingDatosCentrosDeportivos();
  }, []);

  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  };

  const listaFiltrada =
    filtro.trim() === ""
      ? datosCentroDeportivo
      : datosCentroDeportivo.filter((element) =>
          element.nombre.toLowerCase().includes(filtro.toLowerCase())
        );

  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white/50 w-[70%] mx-auto px-6">
      {/* Parte Superrior */}
      <section className="flex-col justify-center p-2 bg-red w-full">
        <h3 className="text-3xl font-bold text-center mt-3">
          Lista de Centro Deportivos
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
                onChange={handleFiltroCambio}
                className="w-full font-semibold rounded-xl py-1 bg-gray-300 px-1 outline-none"
              />
            </div>
          </div>

          <button
            onClick={() => navigate("/inicio/centro_deportivo/agregarnuevo")}
            className="text-white font-new-font font-new-bold bg-primary-900/90 rounded-lg py-3 px-2 bg-red"
          >
            Agregar Nuevo +
          </button>
        </section>
      </section>

      {/* //Parte de la Listas de Colegios */}
      <main className="flex flex-col justify-center w-full mt-5">
        <ul className="w-full flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
          <li className="font-semibold text-center w-[30%] px-3 py-2">Nombre</li>
          <li className="font-semibold text-center w-[55%] px-3 py-2 ">
            Direccion
          </li>
          <li className="font-semibold text-center w-[15%] px-3 py-2">
            Acciones
          </li>
        </ul>

        <section className="">
          {listaFiltrada.map((element) => (
            <Lista_CentroDeportivo
              key={element.id}
              datosDeportivos={element}
              datosCentroDeportivo={datosCentroDeportivo}
              setDatosCentroDeportivo={setDatosCentroDeportivo}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default ListaGeneralCentroDeportivo;
