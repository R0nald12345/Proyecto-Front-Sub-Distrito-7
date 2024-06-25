import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getMantenimientosListaGeneral } from "../../../api/UnidadesEducativas";
import Lista_Mantenimiento from '../../Listas/UnidadesEducativas/Lista_Mantenimiento.jsx';
import Modal_Agregar_Mantenimiento from "../../modales/Modal_Agregar_Mantenimiento.jsx";

const Encabezado_Mantenimiento = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { id } = useParams();
  const [listaGeneralMantenimiento, setListasGeneralMantenimiento] = useState([]);
  const [filtro, setFiltro] = useState(""); // Estado para el filtro

  useEffect(() => {
    const fetchingListaDesayunoGeneral = async () => {
      try {
        const datosDesayuno = await getMantenimientosListaGeneral();
        setListasGeneralMantenimiento(datosDesayuno);
      } catch (error) {
        console.log("Error en el Componente Encabezado Desayuno" + error);
      }
    };
    fetchingListaDesayunoGeneral();
  }, []);

  // Función para actualizar el estado del filtro basado en el input
  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  };

  // Filtrar la lista basada en el filtro
  const listaFiltrada = filtro.trim() === "" ? listaGeneralMantenimiento : listaGeneralMantenimiento.filter((element) =>
    element.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <Modal_Agregar_Mantenimiento
        id={id}
        onClose={() => setOpenModalCreate(false)}
        open={openModalCreate}
        listaGeneralMantenimiento={listaGeneralMantenimiento}
        setListasGeneralMantenimiento = {setListasGeneralMantenimiento}
      />
      <section className="w-[80%] bg-gray-200/70 mx-auto rounded-xl p-5">
        <h3 className="text-center font-bold text-3xl">Lista Mantenimiento</h3>

        <div className="flex justify-between mt-5">
          <div className="">
            <label className="font-semibold text-xl mr-3">Buscar</label>
            <input
              className="border border-black/50 rounded-md py-1 pl-2"
              placeholder="Buscar..."
              type="text"
              onChange={handleFiltroCambio} // Actualizar el filtro basado en el input
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => setOpenModalCreate(!openModalCreate)}
          >
            Agregar
          </button>
        </div>
        <section className="w-full mt-6">
          {/* Resto del código */}
        </section>

        <section
          className="w-full max-h-96 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {listaFiltrada.map((element) => ( // Usar listaFiltrada para renderizar
            <Lista_Mantenimiento
              key={element.id}
              id={element.id}
              datosMantenimiento={element}
              listaGeneralMantenimiento={listaGeneralMantenimiento}
              setListasGeneralMantenimiento = {setListasGeneralMantenimiento}
            />
          ))}
        </section>
      </section>
    </>
  );
};

export default Encabezado_Mantenimiento;