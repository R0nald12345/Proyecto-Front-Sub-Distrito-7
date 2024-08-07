import { useState, useEffect } from "react";
import Encabezado_Arreglo_CargarFotos from "../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Arreglo_CargarFotos";
import MapaAgregar from "../UnidadesEducativas/Mapas/MapaAgregar";
import ImageGallery from "react-image-gallery";
import {
  createDatoCentroTuristico,
  deleteCentroTuristico,
  getDatoCentroTuristicosID,
} from "../../api/CentroTuristicos";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import MapaMostrar from "../UnidadesEducativas/Mapas/MapaMostrar";

const DetallesCentroTuristicos = () => {
  const id = useParams();

  console.log(id);

  const navigate = useNavigate();
  const [fotos, setFotos] = useState([]);
  const [datoIDCentroTuristico, setDatoIDCentroTuristico] = useState([]);
  const [coordenadaX, setCoordenadaX] = useState(0);
  const [coordenadaY, setCoordenadaY] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchingDatosCentrosTuristicos = async () => {
      try {
        const response = await getDatoCentroTuristicosID(id);
        console.log(response);
        setDatoIDCentroTuristico(response);
        setCoordenadaX(response.coordenada_x);
        setCoordenadaY(response.coordenada_y);

        const formattedIamges = response.fotos.map( photo => ({
          original: `${photo.url}`,
          thumbnail: `${photo.url}`,
        }) );

        setImages(formattedIamges);

      } catch (error) {
        console.log(
          "Error en Componente ListaGeneral fetchingDatosGeneralUE",
          error
        );
      }
    };
    fetchingDatosCentrosTuristicos();
  }, []);

  // const {coordenada_x, coordenada_y} = datoIDCentroTuristico;

  return (
    <div className="flex justify-center items-center">
      <form
        // onSubmit={handleSubmit}
        className="bg-gray-100/50 rounded-xl shadow-xl w-[95%] xl:w-[85%] p-4 xl:p-8"
      >
        {/* parte Derecho */}
        {/* <h2 className='text-center font-bold text-3xl text-gray-700'>Agregar Nuevo Centro Turistico</h2> */}
        <h2 className="text-3xl font-bold text-center">
          Datos Centro Turisticos
        </h2>
        <section className="xl:flex gap-5 ">

          <section className="xl:w-[40%] md:flex lg:block">

{/* -------------------------------------------------- */}

            <section className="w-full  lg:h-[87%]">


              <div className="md:flex xl:flex-col gap-3">

                <div className="w-full md:w-1/2 xl:w-full mt-3">
                  <h3 className="uppercase font-semibold text-gray-600">Nombre</h3>
                  <input
                    className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                    type="text"
                    value={datoIDCentroTuristico.nombre}
                  />
                </div>


                <div className="w-full md:w-1/2 xl:w-full mt-3">
                  <p className="uppercase font-semibold text-gray-600">Dirección</p>
                  <input
                    className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                    type="text"
                    value={datoIDCentroTuristico.direccion}
                  />
                </div>
              </div>




              <div className="md:flex xl:flex-col gap-3">

                <div className="w-full md:w-1/2 xl:w-full mt-3">
                  <p className="uppercase font-semibold text-gray-600">Uv</p>
                  <input
                    className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                    type="text"
                    value={datoIDCentroTuristico.uv}
                  />


                </div>

                <div className="w-full md:w-1/2 xl:w-full mt-3">
                  <p className="uppercase font-semibold text-gray-600">
                    Link De Video
                  </p>
                  <input
                    className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                    type="text"
                    value={datoIDCentroTuristico.videoUrl}
                  />

                </div>


              </div>

                <h3 className="uppercase font-semibold text-gray-600 mt-3">
                  Historia
                </h3>
                <textarea
                  className="w-full mt-1 lg:h-[50%] border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
                  value={datoIDCentroTuristico.historia}
                ></textarea>



            </section>

{/* ---------------------------------------------------------- */}

            
          </section>

          {/* Parte Derecho Superior*/}
          <section className="w-full xl:w-[60%] mt-5">
            {/* Parte Superior*/}
            <section className="block border-2 rounded-xl md:flex gap-5 bg-black">
              <div className="w-full">


                <div className=" lg:w-full rounded-xl p-2">
                  <div className="max-w-md mx-auto">
                    <ImageGallery
                      items={images}
                    />

                  </div>
                  
                </div>
              </div>
            </section>

            <div className=" h-60 w-full lg:w-full text-center ">
              <h3 className="uppercase font-semibold text-gray-600 mt-3 ">
                Puntos (Cordenadas)
              </h3>

              <div
                className=" rounded-xl mt-1 h-[60%]"
                // style={{height:''}}
              >
                <MapaMostrar datoX={coordenadaX} datoY={coordenadaY} />
              </div>
            </div>
          </section>
        </section>

      </form>
    </div>
  );
};

export default DetallesCentroTuristicos;
