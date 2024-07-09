import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDatoCentroDeportivoId } from "../../api/CentroDeportivo";
import Encabezado_Arreglo_CargarFotos from "../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Arreglo_CargarFotos";
import MapaAgregar from "../UnidadesEducativas/Mapas/MapaAgregar";
import MapaMostrar from "../UnidadesEducativas/Mapas/MapaMostrar";
import ImageGallery from "react-image-gallery";

const DetallesCentroDeportivo = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [datoCentroDeportivoId, setDatoCentroDeportivoId] = useState({});

  useEffect(() => {
    const fetchingDatoCetroDeportivoId = async () => {
      try {
        const response = await getDatoCentroDeportivoId(id);
        setDatoCentroDeportivoId(response);
      } catch (error) {
        console.log("Error en Componente DetallesCentroDeportivo", error);
      }
    };
    fetchingDatoCetroDeportivoId();
  }, []);

  const {
    nombre = "",
    coordenada_x = -17.796372,
    coordenada_y = -63.1838,
    direccion = "",
    uv = "",
    historia = "",
    videoUrl = "",
    fotos = [],
  } = datoCentroDeportivoId;

  //   console.log(coordenada_x);
  //   console.log(coordenada_y);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600",
      thumbnail: "https://picsum.photos/id/1018/250/150",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600",
      thumbnail: "https://picsum.photos/id/1015/250/150",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600",
      thumbnail: "https://picsum.photos/id/1019/250/150",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <form className="bg-gray-100/50 rounded-xl shadow-xl xl:w-[80%] md:w-[80%] p-6">
        <h2 className="text-center font-bold text-3xl text-gray-700">
          Agregar Nuevo Centro Deportivo
        </h2>
        <section className="xl:flex gap-5 mt-5">
          <section className="xl:w-[40%] flex-col md:flex lg:block ">
            <div>
              <h3 className="uppercase font-semibold text-gray-600">Nombre</h3>
              <input
                className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1"
                type="text"
                value={nombre}
              />
              <p className="uppercase font-semibold text-gray-600">Dirección</p>
              <input
                className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                type="text"
                value={direccion}
              />
            </div>

            <div>
              <p className="uppercase font-semibold text-gray-600">Uv</p>
              <input
                className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                type="text"
                value={uv}
              />
              <p className="uppercase font-semibold text-gray-600">
                Link De Video
              </p>
              <input
                className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                type="text"
                value={videoUrl}
              />
            </div>

            <h3 className="uppercase font-semibold text-gray-600 mt-1">
              Historia
            </h3>
            <textarea
              className="mb-5 w-full mt-1 h-[48%] border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
              type="text"
              value={historia}
            ></textarea>
          </section>
          <section className="w-full xl:w-[60%]">
            <section className="block border-2 rounded-xl md:flex h-60 gap-5">
              <div className="w-full">
                <div className="lg:w-full rounded-xl p-2">
                  {/* <ImageGallery
                    items={images}
                    // items={fotos}
                  // foto={foto}
                  // setFoto={setFoto}
                  /> */}
                </div>
              </div>
            </section>
            <div className="xs:w-1/2 h-60 lg:w-full text-center mb-6 xl:mb-5">
              <h3 className="uppercase font-semibold text-gray-600 mt-3">
                Puntos (Coordenadas)
              </h3>
              <div className="rounded-xl mt-1 h-[60%]">
                {coordenada_x !== null && coordenada_y !== null ? (
                  <MapaMostrar datoX={coordenada_x} datoY={coordenada_y} />
                ) : (
                  <p>No hay coordenadas disponibles</p>
                )}
              </div>
            </div>
          </section>
        </section>
      </form>
    </div>
  );
};

export default DetallesCentroDeportivo;
