import { useState, useEffect, useContext } from "react";
import Lista_ApoyoSocial from "../../Listas/UnidadesEducativas/Lista_ApoyoSocial";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteApoyoSocialID, getApoyoSocialID, getApoyoSocialListaGeneral } from "../../../api/UnidadesEducativas";
import Modal_Aregar_ApoyoSocial from "../../modales/Modal_Aregar_ApoyoSocial";
// import Modal_Agregar_ApoyoSocial from "../../modales/Modal_Aregar_ApoyoSocial";
import Modal_Actualizar_Social from "../../Modal/UnidadEducativa/Modal_Actualizar_Social";
import { DataContext } from "../../../context/DataProvider";

// Función para formatear la fecha
const formatearFecha = (fecha) => {
  if (fecha.length > 0) { // Me indica que tengo una fecha
    let fechaFormateada = ""; 
    for (let i = 0; i < fecha.length; i++) {
      if (fecha[i] == "T") {
        fechaFormateada = fecha.substring(0, i);
        break;
      }
    }
    const [year, month, day] = fechaFormateada.split("-");
    return `${day}-${month}-${year}`;
  } else {
    return "Fecha no válida";
  }
};



const Encabezado_ApoyoSocial = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openActualizar, setOpenActualizar] = useState(false);
  const { id } = useParams();

  const [listaGeneralApoyoSocial, setListasGeneralApoyoSocial] = useState([]);
  const [datosApoyoSocial, setDatosApoyoSocial] = useState([]);
  const [idS, setidS] = useState(0)

  const [filtro, setFiltro] = useState("");

  
  useEffect(() => {
    const fetchingListaDesayunoGeneral = async () => {
      try {
        const datosApoyoSocial = await getApoyoSocialListaGeneral();
        console.log(datosApoyoSocial);
        setListasGeneralApoyoSocial(datosApoyoSocial);
      } catch (error) {
        console.log("Error en el Componente Encabezado Desayuno" + error);
      }
    };
    fetchingListaDesayunoGeneral();
  }, []);

  
  const handleEliminar = async (nombre, id) => {
    try {
      const result = await Swal.fire({
        title: `Eliminar ${nombre}`,
        text: "Estas seguro de Eliminar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      
      if (result.isConfirmed) {
        await deleteApoyoSocialID(id);
        setListasGeneralApoyoSocial(listaGeneralApoyoSocial.filter((element) => element.id !== id));
        Swal.fire("Eliminado!", `El ${nombre} ha sido eliminado con exito`, "success");
      }
    } catch (error) {
      console.error("Error en Componente EncabezadoApoyoSocial", error);
    }
  };
  
  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  }
  
  const listaFiltrada = filtro.trim() === "" ? listaGeneralApoyoSocial : listaGeneralApoyoSocial.filter((element) =>
    element.nombre.toLowerCase().includes(filtro.toLowerCase())
);

// const idSocial = 0;


const handleActualizar=(idSocial)=>{
  // const {apoyoSocialID,setApoyoSocialID} = useContext(DataContext);
  // setApoyoSocialID(idSocial);
  setidS(idSocial);
  setOpenActualizar(!openActualizar);
}


  return (
    <>
      <Modal_Aregar_ApoyoSocial
        onClose={() => setOpenModalCreate(false)}
        open={openModalCreate}
        id={id}
        listaGeneralApoyoSocial={listaGeneralApoyoSocial}
        setListasGeneralApoyoSocial={setListasGeneralApoyoSocial}
      />

      <Modal_Actualizar_Social
        open={openActualizar}
        onClose={() => setOpenActualizar(false)}
        idUE={id}
        idApoyoSocial={idS}
        listaGeneralApoyoSocial={listaGeneralApoyoSocial}
        setListasGeneralApoyoSocial={setListasGeneralApoyoSocial}
      />

      <section className="md:w-[100%] lg:w-[80%]  bg-gray-200/70 mx-auto rounded-xl p-5 md:p-3 lg:p-5">
        <h3 className="text-center font-bold text-3xl">Lista Apoyo Social</h3>

        <div className="md:flex justify-between mt-5">
          <div className="">
            <label className="font-semibold  text-xl mr-3">Buscar</label>
            <input
              className="border border-black/50 rounded-md py-1 pl-2"
              placeholder="Buscar..."
              onChange={handleFiltroCambio}
              type="text"
            />
          </div>
          <button
            className="bg-green-500 w-full md:w-1/5 mt-5 md:mt-0 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => setOpenModalCreate(!openModalCreate)}
          >
            Agregar
          </button>
        </div>
        <section className="hidden md:block w-full mt-6">
          <ul className="bg-white gap-2 mb-3 rounded-xl shadow-lg flex px-2">
            <li className="font-semibold  text-start w-[15%] px-1 py-2">
              Fecha
            </li>
            <li className="font-semibold  text-start w-[28%] px-1 py-2">
              Nombre
            </li>
            <li className="font-semibold  text-start w-[33%] px-1 py-2">
              Nombre Entrega
            </li>
            <li className="font-semibold  text-center w-[12%] px-1 py-2">
              Cantidad
            </li>
            <li className="font-semibold  text-center w-[12%] px-1 py-2">
              Acciones
            </li>
          </ul>
        </section>

        <section
          className="hidden md:block w-full max-h-96 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {listaFiltrada.map((element) => (
            <Lista_ApoyoSocial
              key={element.id}
              idUE={id}
              idApoyoSocial = {element.id}
              datosApoyoSocial={element}
              listaGeneralApoyoSocial={listaGeneralApoyoSocial} // Cambio aquí: pasa el objeto individual
              setListasGeneralApoyoSocial={setListasGeneralApoyoSocial}
            />
          ))}
        </section>

               {/* Tarjetas para pantallas pequeñas */}
        <div className="md:hidden grid grid-cols-1 gap-4 mt-5">
          {listaFiltrada.map((element) => (
            <div key={element.id} className="bg-white p-4 rounded-xl shadow-lg">

              <h4 className="font-bold text-lg">Nombre:</h4>
              <p className="font-new-font ">{element.nombre}</p>

              <h4 className="font-bold text-lg">Nombre Entrega:</h4>
              <p className="font-new-font">{element.nombreEntrega}</p>

              <h4 className="font-bold text-lg">Cantidad:</h4>
              <p className="font-new-font">{element.cantidad}</p>

              <h4 className="font-bold text-lg">Fecha:</h4>
              
              <p className="font-new-font">{formatearFecha(element.fecha)}</p>

              <div className="flex justify-end mt-3 gap-2">
                {/* Aquí puedes agregar los botones de acciones */}
                <button
                  className="bg-primary-900 w-1/2 text-white px-3 py-1 rounded-lg"
                  onClick={()=>handleActualizar(element.id)} 
                >
                  Editar
                </button>

                <button
                  onClick={() => handleEliminar(element.nombre, element.id)}
                  className="bg-red-500 w-1/2 text-white px-3 py-1 rounded-lg"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
};
export default Encabezado_ApoyoSocial;
