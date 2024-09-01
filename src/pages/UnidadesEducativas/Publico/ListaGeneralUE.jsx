import { useContext, useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ListaUE from "../ListaUE";
import { FaEdit } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import FormAgregarGestion from "../../UnidadesEducativas/FormAgregarNuevo/FormAgregarGestion"; // Importa el componente del formulario
import Swal from "sweetalert2";

import { deleteUEid, getDatoGeneralTiposColegio, getDatoGeneralTiposInfraestructura, getDatoGeneralTiposTurno, getDatoGeneralUE } from "../../../api/UnidadesEducativas";
import Modal_Crear_Turno from "../../../components/Modal/UnidadEducativa/Modal_Crear_Turno";
import Modal_Crear_Infraestructura from "../../../components/Modal/UnidadEducativa/Modal_Crear_Infraestructura";
import Modal_Crear_TipoColegio from "../../../components/Modal/UnidadEducativa/Modal_Crear_TipoColegio";
import { DataContext } from "../../../context/DataProvider";
import Modal_Actualizar_Turno from "../../../components/Modal/UnidadEducativa/Modal_Actualizar_Turno";
import Modal_Actualizar_Infraestructura from "../../../components/Modal/UnidadEducativa/Modal_Actualizar_Infraestructura";
import Modal_Actualizar_TipoColegio from "../../../components/Modal/UnidadEducativa/Modal_Actualizar_TipoColegio";


const ListaGeneralUE = () => {
  const navigate = useNavigate();

  const [datosUnidadEducativa, setDatosUnidadEducativa] = useState([]);
  const [filtro, setFiltro] = useState("");

  const [openModalCreateTipoColegios, setOpenModalCreateTipoColegios] = useState(false);
  const [openModalCreateInfraestructura, setOpenModalCreateInfraestructura] = useState(false);
  const [openModalCreateTurnos, setOpenModalCreateTurnos] = useState(false);

  const [openModalActualizarTipoColegios, setOpenModalActualizarTipoColegios] = useState(false);
  const [openModalActualizarInfraestructura, setOpenModalActualizarInfraestructura] = useState(false);
  const [openModalActualizarTurnos, setOpenModalActualizarTurnos] = useState(false);


  const {datoTurno,setDatoTurno, datoInfraestructura, setDatoInfraestructura, datoTipoColegios,setTipoColegios} = useContext(DataContext);

  useEffect(() => {
    const fetchingDatosGeneralUE = async () => {
      try {
        const response = await getDatoGeneralUE();
        setDatosUnidadEducativa(response);
        console.log("response", response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneral fetchingDatosGeneralUE",
          error
        );
      }
    };
    fetchingDatosGeneralUE();
  }, []);


  useEffect(() => {
    const fetchingDatoTurno = async () => {
      try {
        const response = await getDatoGeneralTiposTurno();
        setDatoTurno(response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneralUE",
          error
        );
      }
    };
    fetchingDatoTurno();
  }, []);


  useEffect(() => {
    const fetchingDatoInfraestructura = async () => {
      try {
        const response = await getDatoGeneralTiposInfraestructura();
        setDatoInfraestructura(response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneralUE",
          error
        );
      }
    };
    fetchingDatoInfraestructura();
  }, []);


  useEffect(() => {
    const fetchingDatoTipoColegio = async () => {
      try {
        const response = await getDatoGeneralTiposColegio();
        setTipoColegios(response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneralUE",
          error
        );
      }
    };
    fetchingDatoTipoColegio();
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


  return (
    <>
      <Modal_Crear_TipoColegio
        open = {openModalCreateTipoColegios}
        onClose = {() => setOpenModalCreateTipoColegios(!openModalCreateTipoColegios)}
        tipoColegio = {datoTipoColegios}
        setTipoColegio={setTipoColegios}
      />

      <Modal_Actualizar_TipoColegio
        open={openModalActualizarTipoColegios}
        onClose={() => setOpenModalActualizarTipoColegios(!openModalActualizarTipoColegios)}
      />



      <Modal_Crear_Infraestructura
        open = {openModalCreateInfraestructura}
        onClose = {() => setOpenModalCreateInfraestructura(!openModalCreateInfraestructura)}
        tipoInfraestructura = {datoInfraestructura}
        setTipoInfraestructura={setDatoInfraestructura}

      />

      <Modal_Actualizar_Infraestructura
        open={openModalActualizarInfraestructura}
        onClose={() => setOpenModalActualizarInfraestructura(!openModalActualizarInfraestructura)}
      />





      <Modal_Crear_Turno
        open = {openModalCreateTurnos}
        onClose = {() => setOpenModalCreateTurnos(!openModalCreateTurnos)}
        tipoTurno = {datoTurno}
        setTipoTurno={setDatoTurno}
      />

      <Modal_Actualizar_Turno
        open={openModalActualizarTurnos}
        onClose={() => setOpenModalActualizarTurnos(!openModalActualizarTurnos)}
      />

      
      {/* <Modal_Actualizar_Turno
        open={openModalActualizarTurnos}
        onClose={() => setOpenModalActualizarTurnos(!openModalActualizarTurnos)}
      /> */}
    
      <div className="flex flex-col items-center justify-center rounded-xl bg-white/50 w-[95%] xl:w-[70%] mx-auto px-4 md:px-6 pb-6 md:pb-2">
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
              + Agregar Nueva UE
            </button>
          </section>
        </section>

        <section className="md:flex w-full gap-8 mt-3">
          <section className="md:w-1/3">
            <h4 className="text-center font-semibold text-xl">Tipo Turno</h4>

            <div className="flex gap-3">
              <MdAddBox 
                className="w-1/2 bg-green-600 hover:bg-green-700 rounded-lg my-2 text-3xl text-white py-1"
                onClick={() => setOpenModalCreateTurnos(!openModalCreateTurnos)}
               />

              <FaEdit 
                className="w-1/2 bg-green-600 hover:bg-green-700  rounded-lg my-2 text-3xl text-white py-1" 
                onClick={() => setOpenModalActualizarTurnos(!openModalActualizarTurnos)}
              />
            </div>
          </section>

          <section className="md:w-1/3">
            <h4 className="text-center font-semibold text-xl">
              Tipo Infraestructura
            </h4>
            <div className="flex gap-3">
              <MdAddBox 
                className="w-1/2 bg-green-600 hover:bg-green-700 rounded-lg my-2 text-3xl text-white py-1" 
                onClick={() => setOpenModalCreateInfraestructura(!openModalCreateInfraestructura)}
              />

              <FaEdit 
                className="w-1/2 bg-green-600 hover:bg-green-700  rounded-lg my-2 text-3xl text-white py-1" 
                onClick={() => setOpenModalActualizarInfraestructura(!openModalActualizarInfraestructura)}
              />
            </div>
          </section>

          <section className="md:w-1/3">
          <h4 className="text-center font-semibold text-xl">
            Tipo Colegio
          </h4>
            <div className="flex gap-3">
              <MdAddBox 
                className="w-1/2 bg-green-600 hover:bg-green-700 rounded-lg my-2 text-3xl text-white py-1" 
                onClick={() => setOpenModalCreateTipoColegios(!openModalCreateTipoColegios)}  
              />

              <FaEdit 
                className="w-1/2 bg-green-600 hover:bg-green-700  rounded-lg my-2 text-3xl text-white py-1" 
                onClick={() => setOpenModalActualizarTipoColegios(!openModalActualizarTipoColegios)}
              />
            </div>
          </section>
        </section>

        {/* Parte de la Lista de Colegios */}
        <main className="flex flex-col justify-center w-[95%] mt-5">
          <div className="hidden md:flex flex-col justify-center w-full">
            <ul className="w-full flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
              <li className="font-semibold text-start w-[35%] px-3 py-2">
                Nombre
              </li>
              <li className="font-semibold text-start w-[35%] px-3 py-2">
                Nombre Director
              </li>
              <li className="font-semibold text-center w-[10%] px-3 py-2">
                Turno
              </li>
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
                  nombreDirector={element.gestion.director}
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
                  onClick={() =>
                    navigate(`/inicio/unidadeducativa/actualizar/${element.id}`)
                  }
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
    </>
  );
};

export default ListaGeneralUE;
