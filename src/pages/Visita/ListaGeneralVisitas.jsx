import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Swal from "sweetalert2";

import { getDatoCentroDeportivo } from "../../api/CentroDeportivo";
import Lista_CentroDeportivo from "../../components/Listas/CentroDeportivo/Lista_CentroDeportivo";
import { deleteDatoCentroDeportivoId as deleteDatoCentroDeportivoIdApi } from "../../../src/api/CentroDeportivo";
import { deleteVisitas as deleteVisitasApi, getDatoVisitas } from "../../api/Visitas";
import Lista_Visita from "../../components/Listas/Visitas/Lista_Visita"
import Modal_Crear_Visita from "../../components/Modal/Visita/Modal_Crear_Visita";
import Modal_Detalle_Visita from "../../components/Modal/Visita/Modal_Detalle_Visita";
import Modal_Editar_Visita from "../../components/Modal/Visita/Modal_Editar_Visita";
import { TbRuler } from "react-icons/tb";

const formatearFecha = (fecha) => {
  if (fecha.length > 0) {
    // Me indica que tengo una fecha
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


const ListaGeneralVisitas = () => {

  const {id} = useParams();

  const navigate = useNavigate();
  const [datosVisitas, setDatosVisitas] = useState([]);
  const [filtro, setFiltro] = useState("");

  const [idVisita, setIdVisita] = useState(0);

  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalDetails, setOpenModalDetails] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  
  useEffect(() => {
    const fetchingVisitas = async () => {
      try {
        const response = await getDatoVisitas();
        setDatosVisitas(response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneralVisitas",
          error
        );
      }
    };
    fetchingVisitas();
  }, []);


  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  };

  const handleDeleteVisita = async (id) => {
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
        await deleteVisitasApi(id);
        setDatosVisitas(
            datosVisitas.filter((element) => element.id !== id)
        );        
        Swal.fire({
          title: "Eliminado!",
          text: "Eliminado Correctamente.",
          icon: "success",
        });
      }
    } catch (error) {
      console.log("Error en el Componente ListaGeneralVisitas", error);
    }
  };


  const changeDatails=(id)=>{
    setIdVisita(id);
    setOpenModalDetails(true);
  }


  const changeUpdate=(id)=>{
    setIdVisita(id);
    setOpenModalUpdate(!openModalUpdate);
  }


  const listaFiltrada =
    filtro.trim() === ""
      ? datosVisitas
      : datosVisitas.filter((element) =>
          element.nombre.toLowerCase().includes(filtro.toLowerCase())
        );

  return (
    <>

      <Modal_Crear_Visita
        open={openModalCreate}
        onClose={() => setOpenModalCreate(false)}
        idUnidadEducativa = {id}
        listaVisita={datosVisitas}
        setListaVisita={setDatosVisitas}
      />

      <Modal_Detalle_Visita
        open={openModalDetails}
        onClose={() => setOpenModalDetails(false)}
        idVisita={idVisita}
      />

      <Modal_Editar_Visita
        open={openModalUpdate}
        onClose={()=> setOpenModalUpdate(false)}
        idVisita = {idVisita}
        datosVisitas={ datosVisitas}
        setDatosVisitas={ setDatosVisitas}

      
      />
    
      <div className="flex flex-col items-center justify-center rounded-xl bg-white/50 md:w-full lg:w-[75%]  mx-auto px-4 md:px-6 pb-6 md:pb-2">
        {/* Parte Superrior */}
        <section className="flex-col justify-center p-2 bg-red w-full">
          <h3 className="text-3xl font-bold text-center mt-3">
            Lista de Visitas
          </h3>

          <section className="md:flex md:justify-between md:px-2 bg-red ">

            <div className=" mt-5 col-span-4 flex items-center justify-end gap-1 md:gap-3">
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

            {/* Boton */}
            <button
              className="mt-5 md:w-[30%] text-white font-new-font font-new-bold bg-primary-900/90 rounded-lg py-3 px-2 w-full"
              onClick={() => setOpenModalCreate(!openModalCreate)}
            >
              Agregar Nuevo +
            </button>
          </section>
        </section>

        {/* Lista de Centros Deportivos */}
        <main className="w-full mt-5">
          {/* Lista para pantallas grandes */}
          <div className="hidden md:flex flex-col justify-center w-full">
            <ul className="w-full flex bg-white gap-3 mb-3 rounded-xl shadow-lg">
              <li className="font-semibold text-center w-[35%] px-3 py-2">
                Titulo
              </li>
              <li className="font-semibold text-center w-[25%] px-3 py-2">
                Visitantes
              </li>
              <li className="font-semibold text-center w-[20%] px-3 py-2">
                Fecha
              </li>
              <li className="font-semibold text-center w-[20%] px-3 py-2">
                Acciones
              </li>
            </ul>

            <section>
              {listaFiltrada.map((element) => (
                <Lista_Visita
                  key={element.id}
                  datosVisita={element}
                  datosVisitas={datosVisitas}
                  setDatosVisitas={setDatosVisitas}
                />
              ))}
            </section>
          </div>


          {/* Tarjetas para pantallas pequeñas */}
          <div className="md:hidden grid grid-cols-1 gap-4">
            {listaFiltrada.map((element) => (
              <div key={element.id} className="bg-white p-4 rounded-xl shadow-lg">
                <h4 className="font-bold text-lg">{element.titulo}</h4>
                <p className="text-gray-600">{element.visitantes}</p>
                <p className="text-gray-600">{ formatearFecha(element.fecha)}</p>d 

                <div className="flex justify-end mt-3 gap-2">
                  {/* Aquí puedes agregar los botones de acciones */}
                  <button 
                    className="bg-primary-900 text-white px-3 py-1 rounded-lg"
                    onClick={() => changeUpdate(element.id)}
                  >
                    Editar
                  </button>

                  <button 
                    className="bg-blue-950 text-white px-3 py-1 rounded-lg"
                    onClick={()=>changeDatails(element.id)}
                  >
                    Detalles
                  </button>
                  <button 
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    onClick={ ()=>handleDeleteVisita(element.id) }
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};


export default ListaGeneralVisitas;