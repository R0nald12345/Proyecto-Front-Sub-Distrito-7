import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ListaUE from "../ListaUE";

import { getDatoGeneralUE } from "../../../api/UnidadesEducativas";

const ListaGeneralUE = () => {
  const navigate = useNavigate();

  const [datosUnidadEducativa, setDatosUnidadEducativa] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchingDatosGeneralUE = async () => {
      try {
        const response = await getDatoGeneralUE();
        setDatosUnidadEducativa(response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneral fetchingDatosGeneralUE",
          error
        );
      }
    };
    fetchingDatosGeneralUE();
  }, []);

  const changeRutaNuevoFormulario = () => {
    navigate("/inicio/unidadeducativa/agregarnuevo");
  };

  const handleFiltroCambio = (e)=>{
    setFiltro(e.target.value);
  }

  const listaFiltrada =  filtro.trim() === "" ? datosUnidadEducativa : datosUnidadEducativa.filter((element) =>
    element.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white/50 w-[85%] mx-auto">
      {/* Parte Superrior */}
      <section className="flex-col justify-center p-2 bg-red w-[95%] ">
        <h3 className="text-3xl font-bold text-center mt-3">
          Lista de Unidades Educativas
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
                className="w-full font-semibold  rounded-xl py-1 bg-gray-300  px-1 outline-none"
              />
            </div>
          </div>

          <button
            onClick={changeRutaNuevoFormulario}
            className="text-white font-new-font font-new-bold bg-primary-900/90 rounded-lg py-3 px-2 bg-red"
          >
            Agregar Nuevo +
          </button>
        </section>
      </section>

      {/* //Parte de la Listas de Colegios */}
      <main className="flex flex-col justify-center w-[95%] mt-5">
        <ul className="w-full flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
          <li className=" font-semibold text-start w-[35%] px-3 py-2">
            Nombre
          </li>
          <li className=" font-semibold text-start w-[35%] px-3 py-2 ">
            Nombre Director
          </li>
          <li className=" font-semibold text-center w-[10%] px-3 py-2">
            Turno
          </li>
          <li className=" font-semibold text-center w-[20%] px-3 py-2">
            Acciones
          </li>
          
        </ul>

        <section className="">
          {listaFiltrada.map((element) => {
            return (
              <ListaUE
                // key={element.id}
                id={element.id}
                nombreUE={element.nombre}
                // nombreDirector={element.idGestion.director}
                turno={element.idTurno.nombre}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default ListaGeneralUE;
