import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getApoyoGubernamentalListaGeneral, getCategoriaListaGeneral } from "../../../api/UnidadesEducativas";
import Lista_ApoyoGubernamental from "../../Listas/UnidadesEducativas/Lista_ApoyoGubernamental.jsx";
import Modal_Agregar_ApoyoGubernamental from "../../modales/Modal_Agregar_ApoyoGubernamental.jsx";

const Encabezado_ApoyoGubernamental = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { id } = useParams();
  const [tipoCategoria, setTipoCategoria] = useState([]);
  const [listaGeneralApoyoGubernamental, setListaGeneralApoyoGubernamental] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchingListaCategoriaGeneral = async () => {
      try {
        const datosCategoria = await getCategoriaListaGeneral();
        setTipoCategoria(datosCategoria);
      } catch (error) {
        console.log("Error en el Componente Encabezado_ApoyoGubernamental" + error);
      }
    };
    fetchingListaCategoriaGeneral();
  }, []);

  useEffect(() => {
    const fetchingDatoGubernamental = async () => {
      try {
        const datosGubernamentales = await getApoyoGubernamentalListaGeneral();
        setListaGeneralApoyoGubernamental(datosGubernamentales);
      } catch (error) {
        console.log("Error en Componente Encabezado_ApoyoGubernamental" + error);
      }
    };
    fetchingDatoGubernamental(id);
  }, []);

  const listaFiltrada = listaGeneralApoyoGubernamental.filter((element) => {
    const matchFiltro = filtro.trim() === "" || element.nombreEntrega.toLowerCase().includes(filtro.toLowerCase());
    const matchCategoria = selectedCategory === "" || element.categoria.nombre === selectedCategory;
    return matchFiltro && matchCategoria;
  });

  return (
    <>
      <Modal_Agregar_ApoyoGubernamental
        onClose={() => setOpenModalCreate(false)}
        open={openModalCreate}
        idUE = {id}
        tipoCategoria ={tipoCategoria}
        listaGeneralApoyoGubernamental={listaGeneralApoyoGubernamental}
        setListaGeneralApoyoGubernamental={setListaGeneralApoyoGubernamental}
      />
      <section className="w-[60%] bg-gray-200/70 mx-auto rounded-xl p-5">
        <h3 className="text-center font-bold text-3xl">Lista Apoyo Gubernamental</h3>
        <div className="flex justify-between mt-6">
          <div className="">
            <label className="font-semibold text-xl mr-3">Buscar</label>
            <input
              className="border border-black/50 rounded-md py-1 pl-2"
              placeholder="Buscar..."
              onChange={(e) => setFiltro(e.target.value)}
              type="text"
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => setOpenModalCreate(!openModalCreate)}
          >
            Agregar
          </button>
        </div>

        <div className="flex my-5 gap-5">
          <button className="w-[35%] bg-green-500 hover:bg-green-800 rounded-xl text-white font-bold px-3">
            Nueva Categoria +
          </button>
          <button className="w-[35%] bg-green-500 hover:bg-green-800 rounded-xl text-white font-bold px-3">
            Editar Categoria
          </button>
          <select
            className="py-1 rounded-xl pl-3 w-[65%] border-gray-400 border-2 bg-gray-200"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todos</option>
            {tipoCategoria.map((option) => (
              <option value={option.nombre} key={option.id}>
                {option.nombre}
              </option>
            ))}
          </select>
        </div>

        <section className="border border-black/50 rounded-lg px-2 py-3">
          <div className="w-full">
            <ul className="w-full flex bg-white gap-3 mb-3 rounded-xl shadow-lg px-2">
              <li className="font-semibold text-start w-[15%] px-2 py-2">Fecha</li>
              <li className="font-semibold text-start w-[50%] px-2 py-2">Nombre Entrega</li>
              <li className="font-semibold text-start w-[15%] px-2 py-2">Cantidad</li>
              <li className="font-semibold text-start w-[20%] px-2 py-2">Acciones</li>
            </ul>

            <section
              className="w-full max-h-96 overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {listaFiltrada.map((element) => (
                <Lista_ApoyoGubernamental
                  key={element.id}
                  datoApoyoGubernamental={element}
                />
              ))}
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default Encabezado_ApoyoGubernamental;
