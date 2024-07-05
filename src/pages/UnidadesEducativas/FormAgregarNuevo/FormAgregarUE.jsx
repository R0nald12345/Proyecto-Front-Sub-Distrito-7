import { useState, useCallback } from "react";
import FormTipos from "./FormTipos";
import FormAgregarGestion from "./FormAgregarGestion";
import FormAgregarDesayuno from "./FormAgregarDesayuno";
import { Form, useNavigate } from "react-router-dom";

import { useDropzone } from "react-dropzone";
import FormTipoApoyo from "./FormTipoApoyo";
import MapaAgregar from "../Mapas/MapaAgregar";
import { useEffect } from "react";
import { createDatoGeneralUE } from "../../../api/UnidadesEducativas";
import Encabezado_Arreglo_CargarFotos from "../../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Arreglo_CargarFotos";
import Swal from "sweetalert2";
import Modal_AgregarGestion from "../../../components/modales/Modal_AgregarGestion";
// import FormApoyo from './FormApoyo'

const FormAgregarUE = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [coordenada_x, setCoordenada_x] = useState(0);
  const [coordenada_y, setCoordenada_y] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [video, setVideo] = useState("");
  const [slug, setSlug] = useState("");
  const [fotos, setFotos] = useState([]);

  const [idInfraestructura, setIdInfraestructura] = useState(0);

  const [idTipoColegio, setIdTipoColegio] = useState(0);
  const [idTurno, setIdTurno] = useState(0);
  const [idGestion, setIdGestion] = useState(0);

  const [openModalCreateGestion, setOpenModalCreateGestion ] = useState(false);


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createDatoGeneralUE({
        nombre,
        coordenada_x,
        coordenada_y,
        direccion,
        historia,
        video,
        slug,
        fotos,
        idInfraestructura,
        idTipoColegio,
        idTurno,
        idGestion,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "UE Creado Exitosamente!",
        showConfirmButton: false,
        timer: 1500,
      });
      // navigate("/unidadeducativa");
      setOpenModalCreateGestion(!openModalCreateGestion);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error!",
      });
      console.error("Error al crear la Unidad Educativa: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center">

      <Modal_AgregarGestion
        open={openModalCreateGestion}
        onClose={()=>setOpenModalCreateGestion(false)}
      />

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100/50 rounded-xl shadow-xl w-[80%] p-8"
      >
        {/* parte Derecho */}

        <section className="xl:flex gap-5">
          <section className="xl:w-[40%] md:flex lg:block ">
            {/* Componente Arreglo Imagen */}

            <h3 className="uppercase font-semibold text-gray-600">Nombre</h3>

            <input
              type="text"
              className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <div className="flex flex-col">
              <FormTipos
                setIdTipoColegio={setIdTipoColegio}
                setIdTurno={setIdTurno}
                setIdInfraestructura={setIdInfraestructura}
              />
            </div>
            <p className="uppercase font-semibold text-gray-600">Dirección</p>

            <input
              className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
            <h3 className="uppercase font-semibold text-gray-600 mt-1">
              Historia
            </h3>
            <textarea
              className="w-full mt-1 h-[48%] border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
              onChange={() => setHistoria()}
            ></textarea>


          </section>

          {/* Parte Derecho Superior*/}
          <section className="w-full xl:w-[60%] ">
            {/* Parte Superior*/}
            <section className="block border-2 rounded-xl md:flex h-60 gap-5 ">
              <div className="w-full">
                <div className=" lg:w-full rounded-xl p-2">
                  <Encabezado_Arreglo_CargarFotos
                    fotos={fotos}
                    setFotos={setFotos}
                  />
                </div>
              </div>
            </section>

            <div className="md:w-1/2 h-60 lg:w-full text-center">
              <h3 className="uppercase font-semibold text-gray-600 mt-3">
                Puntos (Cordenadas)
              </h3>

              <div
                className=" rounded-xl mt-1 h-[60%]"
                // style={{height:''}}
              >
                <MapaAgregar
                  setCoordenada_x={setCoordenada_x}
                  setCoordenada_y={setCoordenada_y}
                />
              </div>
            </div>

     
          </section>
        </section>

        {/* Seleccion debajo */}
        <button
          type="submit"
          onClick={() => handleSubmit}
          className="w-full mt-6 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold hover:bg-primary-900/90"
        >
          Crear nueva Unidad Educativa
        </button>
      </form>
    </div>
  );
};

export default FormAgregarUE;
