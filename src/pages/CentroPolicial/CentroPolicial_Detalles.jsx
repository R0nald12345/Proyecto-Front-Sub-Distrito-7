import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import {
  getCentroPolicialID,
  getCentroPolicialListaGeneral,
} from "../../api/UnidadesEducativas";
import MapaAgregar from "../UnidadesEducativas/Mapas/MapaAgregar";
import Lista_CentroPolicial_ServicioPublico from "../../components/Listas/CentroPolicial/Lista_CentroPolicial";
import Lista_ServicioPublico from "../../components/Listas/CentroPolicial/Lista_ServicioPublico";
import MapaMostrar from "../UnidadesEducativas/Mapas/MapaMostrar";
import Lista_ServicioPublico_Mostrar from "../../components/Listas/CentroPolicial/Lista_ServicioPublico_Mostrar";

const CentroPolicial_Detalles = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [nombre, setNombre] = useState("");
  const [encargado, setEncargado] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [coordenada_x, setCoordenada_x] = useState(0);
  const [coordenada_y, setCoordenada_y] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [uv, setUv] = useState("");
  const [horario, sethorario] = useState("");
  const [fotoUrl, setFotoUrl] = useState("");
  const [serviciosPublicos, setServiciosPublicos] = useState([]);

  useEffect(() => {
    const fetchingCentroPolicial = async () => {
      try {
        const response = await getCentroPolicialID(id);
        console.log("response", response);
        setNombre(response.nombre);
          setEncargado(response.encargado);
          setNumeroTelefono(response.numeroTelefono);
          setCoordenada_x(response.coordenada_x);
          setCoordenada_y(response.coordenada_y);
          setDireccion(response.direccion);
          setUv(response.uv);
          sethorario(response.horario);
          setFotoUrl(response.fotoUrl);

          // setServiciosPublicos(JSON.parse(response.serviciosPublicos));
           // Limpia y parsea la cadena JSON
        let servicios = response.serviciosPublicos;
        if (typeof servicios === 'string') {
          servicios = servicios.replace(/'/g, '"'); // Reemplaza comillas simples por comillas dobles
          servicios = servicios.replace(/(\w+)(?=:)/g, '"$1"'); // Añade comillas a las claves
          servicios = JSON.parse(servicios);
        }
        setServiciosPublicos(servicios);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchingCentroPolicial();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <form className="bg-gray-100/50 rounded-xl shadow-xl w-[100%] lg:w-[85%] p-4 md:px-8">
        <h2 className="text-center font-bold text-3xl text-gray-700">
          Agregar Nuevo Centro Policial
        </h2>
        <section className="md:flex gap-5">
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
                <p className="mt-3 uppercase font-semibold text-gray-600">
                  Encargado
                </p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  value={direccion}
                />

                <p className="mt-3 uppercase font-semibold text-gray-600">
                  Horario
                </p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  value={horario}
                />

                <div className="">
                  <div className="w-full mt-1">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Uv
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      value={uv}
                    />
                  </div>
                  <div className="w-full mt-3">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Número Teléfono
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      value={numeroTelefono}
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
                  </div>

                  <p className="uppercase font-semibold text-gray-600 mt-3">
                    FotoUrl
                  </p>
                  <input
                    className="border-2 rounded-xl border-gray-400 w-[59%] md:w-full px-2"
                    // type="file"
                    value={fotoUrl}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="w-full sm:w-[55%] xl:w-[60%]">
            <section className="mt-3 block border-2 rounded-xl md:flex h-60 gap-5 ">
              <div className="w-full">
                <div className="lg:w-full rounded-xl px-2">
                  <h3 className="w-full mt-2 text-center rounded-xl text-gray-600 font-bold uppercase py-1 text-xl ">
                    Lista Servicio Servicio Público
                  </h3>
                  {/* <Lista_CentroPolicial_ServicioPublico/> */}
                  <div className="flex bg-white mt-3">
                    <h4 className="w-[60%]">Descripcion</h4>
                  </div>
                  <div>
                    {serviciosPublicos.map((element) => (
                      <Lista_ServicioPublico_Mostrar
                        key={element.id}
                        descripcion={element.descripcion}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className=" h-60 lg:w-full text-center">
              <h3 className="uppercase font-semibold text-gray-600 mt-3">
                Puntos (Cordenadas)
              </h3>
              <div className="rounded-xl mt-1 h-[60%]">
                <MapaMostrar datoX={coordenada_x} datoY={coordenada_y} />
              </div>
            </div>
          </section>
        </section>
      </form>
    </div>
  );
};

export default CentroPolicial_Detalles;
