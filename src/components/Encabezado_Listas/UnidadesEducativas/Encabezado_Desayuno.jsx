import { useState, useEffect, useContext } from "react";
import Lista_Desayuno from "../../Listas/UnidadesEducativas/Lista_Desayuno";
import { getDesayunosListaGeneral } from "../../../api/UnidadesEducativas";
import Modal_Agregar_Desayuno from "../../modales/Modal_Agregar_Desayuno";
import { useParams } from "react-router-dom";

const Encabezado_Desayuno = () => {

  // const { listaGeneralDesayuno, setListasGeneralDesayuno } = useContext(DesayunoContext);
  // console.log(listaGeneralDesayuno);
  const {id} = useParams();
  const [listaGeneralDesayuno, setListasGeneralDesayuno] = useState([]);
  const [openModalAgregar, setOpenModalAgregar] = useState(false);
  const [filtro, setFiltro] = useState("");



  useEffect(() => {
    const fetchingListaDesayunoGeneral = async () => {
      try {
        const datosDesayuno = await getDesayunosListaGeneral();
        setListasGeneralDesayuno(datosDesayuno);
        
      } catch (error) {
        console.log("Error en el Componente Encabezado Desayuno" + error);
      }
    };
    fetchingListaDesayunoGeneral();
  }, []);

  // console.log(listaGeneralDesayuno);

  //Funcion para actualizar el Filtro basdado en el input
  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  }

  const listaFiltrada = filtro.trim() === "" ? listaGeneralDesayuno : listaGeneralDesayuno.filter((element)=>
    element.nombre.toLowerCase().includes(filtro.toLowerCase())
   );


  return (
    <>
      <Modal_Agregar_Desayuno
        open = {openModalAgregar}
        onClose={() => setOpenModalAgregar(false)}
        idUE = {id}
        listaGeneralDesayuno={  listaGeneralDesayuno }
        setListasGeneralDesayuno={setListasGeneralDesayuno}
      />

      <section className="w-[85%] bg-gray-200/70 mx-auto rounded-xl p-5">
        <h3 className="text-center font-bold text-3xl">Lista Desayuno</h3>

        <div className="flex justify-between mt-5">
          <div className="">
            <label className="font-semibold text-xl mr-3">Buscar</label>
            <input
              className="border border-black/50 rounded-md py-1 pl-2"
              placeholder="Buscar..."
              type="text"
              onChange={handleFiltroCambio}
            />
          </div>
          <button 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => setOpenModalAgregar(!openModalAgregar)}
          >
            Agregar
          </button>
        </div>
        <section className="w-full mt-6">
          <ul className=" bg-white gap-3 mb-3 rounded-xl shadow-lg flex px-2">
            <li className=" font-semibold text-start w-[10%] px-2 py-2 ">
              Fecha
            </li>
            <li className=" font-semibold text-start w-[30%] px-2 py-2">
              NombreEntrega
            </li>
            <li className=" font-semibold text-start w-[40%] px-2 py-2">
              Nombre Desayuno
            </li>
            <li className=" font-semibold text-center w-[10%] px-2 py-2">
              Cantidad
            </li>
            <li className=" font-semibold text-center w-[10%] px-2 py-2">
              Acciones
            </li>
          </ul>
        </section>

        <section
          className="w-full max-h-96 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {listaFiltrada.map((element) => (
            <Lista_Desayuno
              key={element.id}
              idDesayuno={element.id}
              datosDesayuno={element}
              listaGeneralDesayuno={listaGeneralDesayuno}
              setListasGeneralDesayuno={setListasGeneralDesayuno}
              // fecha={element.fecha}
              // nombreEntrega={element.nombreEntrega}
              // nombre={element.nombre}
              // cantidad={element.cantidad}
            />
          ))}
        </section>
      </section>
    </>
  );
};

export default Encabezado_Desayuno;
