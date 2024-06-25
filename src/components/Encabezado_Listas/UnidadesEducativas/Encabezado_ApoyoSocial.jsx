import { useState, useEffect } from "react";
import Lista_ApoyoSocial from "../../Listas/UnidadesEducativas/Lista_ApoyoSocial";
import { useParams } from "react-router-dom";
import { getApoyoSocialListaGeneral } from "../../../api/UnidadesEducativas";
import Modal_Aregar_ApoyoSocial from "../../modales/Modal_Aregar_ApoyoSocial";

const Encabezado_ApoyoSocial = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { id } = useParams();

  const [listaGeneralApoyoSocial, setListasGeneralApoyoSocial] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchingListaDesayunoGeneral = async () => {
      try {
        const datosApoyoSocial = await getApoyoSocialListaGeneral();
        // console.log(datosApoyoSocial);
        setListasGeneralApoyoSocial(datosApoyoSocial);
      } catch (error) {
        console.log("Error en el Componente Encabezado Desayuno" + error);
      }
    };
    fetchingListaDesayunoGeneral();
  }, []);

  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  }

  const listaFiltrada = filtro.trim() === "" ? listaGeneralApoyoSocial : listaGeneralApoyoSocial.filter((element) =>
    element.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <Modal_Aregar_ApoyoSocial
        onClose={() => setOpenModalCreate(false)}
        open={openModalCreate}
        id={id}
        listaGeneralApoyoSocial={listaGeneralApoyoSocial}
        setListasGeneralApoyoSocial={setListasGeneralApoyoSocial}
      />
      <section className="w-[80%] bg-gray-200/70 mx-auto rounded-xl p-5">
        <h3 className="text-center font-bold text-3xl">Lista Apoyo Social</h3>

        <div className="flex justify-between mt-5">
          <div className="">
            <label className="font-semibold text-xl mr-3">Buscar</label>
            <input
              className="border border-black/50 rounded-md py-1 pl-2"
              placeholder="Buscar..."
              onChange={handleFiltroCambio}
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
        <section className="w-full mt-6">
          <ul className="bg-white gap-3 mb-3 rounded-xl shadow-lg flex px-2">
            <li className="font-semibold text-start w-[10%] px-2 py-2">
              Fecha
            </li>
            <li className="font-semibold text-start w-[35%] px-2 py-2">
              Nombre
            </li>
            <li className="font-semibold text-start w-[35%] px-2 py-2">
              Nombre Entrega
            </li>
            <li className="font-semibold text-center w-[10%] px-2 py-2">
              Cantidad
            </li>
            <li className="font-semibold text-center w-[10%] px-2 py-2">
              Acciones
            </li>
          </ul>
        </section>

        <section
          className="w-full max-h-96 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {listaFiltrada.map((element) => (
            <Lista_ApoyoSocial
              key={element.id}
              idUE={id}
              apoyoSocialId={element.id} 
              datosApoyoSocial={element}
              listaGeneralApoyoSocial={listaGeneralApoyoSocial} // Cambio aquí: pasa el objeto individual
              setListasGeneralApoyoSocial={setListasGeneralApoyoSocial}
            />
          ))}
        </section>
      </section>
    </>
  );
};
export default Encabezado_ApoyoSocial;
