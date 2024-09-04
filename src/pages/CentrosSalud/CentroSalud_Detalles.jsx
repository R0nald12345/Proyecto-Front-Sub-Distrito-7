import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
// import FormTipoApoyo from "./FormTipoApoyo";
import ImageGallery from "react-image-gallery";
import MapaAgregar from "../UnidadesEducativas/Mapas/MapaAgregar";
import Swal from "sweetalert2";
import ArregloFotos from "../../components/Encabezado_Listas/UnidadesEducativas/ArregloFotos";
import { getDatoCentroSaludID, nuevoCentroSalud } from "../../api/CentroSalud";
import MapaMostrar from "../UnidadesEducativas/Mapas/MapaMostrar";
import { DataContext } from "../../context/DataProvider";
// import { createURLFotos } from "../../../api/ArchivoFotos";

const CentroSalud_Detalles = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [datoCentroSalud, setDatoCentroSalud] = useState([]);
  const [nombre, setNombre] = useState("");
  const [coordenada_x, setCoordenada_x] = useState(0);
  const [coordenada_y, setCoordenada_y] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [uv, setUv] = useState("");
  const [horario, setHorario] = useState("");
  const [nivel, setNivel] = useState(0);
  const [video, setVideo] = useState("");
  const [paginaweburl, setPaginaweburl] = useState("");
  const [fotos, setFotos] = useState([]);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchingDatosCentroSalud = async () => {
      try {
        const response = await getDatoCentroSaludID(id);
        console.log("response", response);
        setDatoCentroSalud(response);
        setCoordenada_x(response.coordenada_x);
        setCoordenada_y(response.coordenada_y);
        setDireccion(response.direccion);
        setNombre(response.nombre);
        setUv(response.uv);
        setHorario(response.horario);
        setNivel(response.nivel);
        setVideo(response.videoUrl);
        setPaginaweburl(response.paginawebUrl);

        const formattedImages = response.fotos.map((photo) => ({
          original: `${photo.url}`,
          thumbnail: `${photo.url}`,
        }));

        setImages(formattedImages);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchingDatosCentroSalud();
  }, []);

  const {setNombreCentroSalud} =useContext(DataContext);

  setNombreCentroSalud(nombre);


  const handleDireccionEspecialidad = (e) => {
    e.preventDefault();
    navigate(`/inicio/centrosalud/especialidades/${id}`);
  }

  const handleDireccionEncargadosEspecialidad = (e) => {
    e.preventDefault();
    navigate(`/inicio/centrosalud/encargados/${id}`);
  }

  return (
    <div className="flex justify-center items-center">
      <form className="bg-gray-100/50 rounded-xl shadow-xl w-[100%] lg:w-[85%] p-4 md:px-8">
        <h2 className="text-center font-bold text-3xl text-gray-700">
          Detalles Centro Salud {nombre}
        </h2>
        <section className="md:flex gap-5 mt-7">
          <section className="sm:w-[45%] xl:w-[40%]  md:flex lg:block ">
            <div className="sm:flex-col w-full">
              <div>
                <h3 className="uppercase font-semibold text-gray-600">
                  Nombre
                </h3>
                <input
                  type="text"
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1"
                  value={nombre}
                />
              </div>

              <div className="flex flex-col">
                <p className="mt-3 uppercase font-semibold text-gray-600">Uv</p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  value={uv}
                />

                <div className="">
                  <div className="w-full mt-1">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Video
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      value={video}
                    />
                  </div>
                  <div className="w-full mt-3">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Horario
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      value={horario}
                    />
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Nivel
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      value={nivel}
                    />
                  </div>

                  <div className="w-full mt-3">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Direccion
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      value={direccion}
                    />

                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      pagina Web
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      value={paginaweburl}
                    />

                    <button 
                      type="button"
                      className="w-full mt-14 md:mt-6 bg-green-600 rounded-xl text-white uppercase py-3 text-xl font-semibold hover:bg-primary-900/90"
                      onClick={(e) => handleDireccionEspecialidad(e)}
                    >
                      Especialidades
                    </button>

                    <button 
                      type="button"
                      className="w-full mt-14 md:mt-6 bg-green-600 rounded-xl text-white uppercase py-3 text-xl font-semibold hover:bg-primary-900/90"
                      onClick={(e) => handleDireccionEncargadosEspecialidad(e)}
                    >
                      Encargados de Especialidades
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full sm:w-[55%] xl:w-[60%]">
            <div className="w-full">
              <div className="lg:w-full rounded-xl px-2">
                <div className="max-w-md mx-auto">
                  <ImageGallery items={images} />
                </div>
                {/* <ArregloFotos foto={fotos} setFoto={setFotos} /> */}
              </div>
            </div>
          </section>

          
        </section>
          <div className="h-60 mt-5 lg:w-full text-center">
            
            
            <h3 className="uppercase font-semibold text-gray-600 mt-3">
              Puntos (Cordenadas)
            </h3>
            <div className="rounded-xl  h-[60%]">
              <MapaMostrar datoX={coordenada_x} datoY={coordenada_y} />
            </div>

            
          </div>
        <button
          onClick={() => navigate("/inicio/centrosalud")}
          className="w-full mt-14 md:mt-6 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold hover:bg-primary-900/90"
        >
          Regresar
        </button>
      </form>
    </div>
  );
};

export default CentroSalud_Detalles;
