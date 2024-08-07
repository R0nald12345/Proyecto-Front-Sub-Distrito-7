import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ListaUE from "../ListaUE";
import FormAgregarGestion from "../../UnidadesEducativas/FormAgregarNuevo/FormAgregarGestion"; // Importa el componente del formulario
import Swal from "sweetalert2";

import { deleteUEid, getDatoGeneralUE } from "../../../api/UnidadesEducativas";

const ListaGeneralUE = () => {
  const navigate = useNavigate();

  const [datosUnidadEducativa, setDatosUnidadEducativa] = useState([]);
  const [filtro, setFiltro] = useState("");

  const [openModalCreateGestion, setOpenModalCreateGestion] = useState(false); // Estado para manejar el modal

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

  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  };


  const handleEliminar = async (id) => {
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
        const response = await deleteUEid(id);
        setDatosUnidadEducativa(
          datosUnidadEducativa.filter((element) => element.id !== id)
        );
        // console.log(response);
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "Se elimino correctamente",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar",
      });
    }
  };

  const listaFiltrada =
    filtro.trim() === ""
      ? datosUnidadEducativa
      : datosUnidadEducativa.filter((element) =>
          element.nombre.toLowerCase().includes(filtro.toLowerCase())
        );


  // const handleOpenModal = () => {
  //   setOpenModalCreateGestion(true); // Abre el modal
  // };

  // const handleCloseModal = () => {
  //   setOpenModalCreateGestion(false); // Cierra el modal
  // };

  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white/50 w-[95%] xl:w-[70%] mx-auto px-4 md:px-6 pb-6 md:pb-2">
      {/* Modal para agregar gestion */}
      {/* <FormAgregarGestion
        open={openModalCreateGestion}
        OnClose={handleCloseModal}
      /> */}

      {/* Parte Superior */}
      <section className="flex-col justify-center p-2 bg-red w-[95%] ">
        <h3 className="text-3xl font-bold text-center mt-3">
          Lista de Unidades Educativas
        </h3>

        <section className="md:flex md:justify-between px-2 bg-red mt-5">
          {/* Boton */}
          <div className="col-span-4 flex items-center justify-end gap-3">
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
            className="mt-5 md:w-[30%] text-white font-new-font font-new-bold bg-primary-900/90 rounded-lg py-3 px-2 w-full"
            onClick={() => navigate("agregarnuevo")}
          >
            Agregar Nuevo +
          </button>
        </section>
      </section>

      {/* Parte de la Lista de Colegios */}
      <main className="flex flex-col justify-center w-[95%] mt-5">
        <div  className="hidden md:flex flex-col justify-center w-full">

          <ul className="w-full flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
            <li className="font-semibold text-start w-[35%] px-3 py-2">Nombre</li>
            <li className="font-semibold text-start w-[35%] px-3 py-2">
              Nombre Director
            </li>
            <li className="font-semibold text-center w-[10%] px-3 py-2">Turno</li>
            <li className="font-semibold text-center w-[20%] px-3 py-2">
              Acciones
            </li>
          </ul>

          <section className="">
            {listaFiltrada.map((element) => (
              <ListaUE
                key={element.id}
                id={element.id}
                nombreUE={element.nombre}
                datosUnidadEducativa={datosUnidadEducativa}
                setDatosUnidadEducativa={setDatosUnidadEducativa}
                // nombreDirector={element.idGestion.director}
                turno={element.idTurno.nombre}
              />
            ))}
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
                // onClick={() =>
                //   navigate(`/inicio/centro_deportivo/editar/${element.id}`)
                // }
              >
                Editar
              </button>
              <button
                className="bg-blue-950 text-white px-3 py-1 rounded-lg"
                onClick={() =>
                  navigate(`/inicio/unidadeducativa/detalles/${element.id}`)
                }
              >
                Detalles
              </button>
              <button
                onClick={() => handleEliminar(element.id)}              
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
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

export default ListaGeneralUE;
