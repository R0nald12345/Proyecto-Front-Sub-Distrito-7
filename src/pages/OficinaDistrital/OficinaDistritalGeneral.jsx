import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDatoOficinaDistrital } from '../../api/OficinaDistrital';
import MapaMostrar from "../UnidadesEducativas/Mapas/MapaMostrar";
import Lista_ServicioPublicoGeneral from "../../components/ServicioPublicos/Lista_ServicioPublicoGeneral";

const OficinaDistritalGeneral = () => {

 
  const { id } = useParams();
  const navigate = useNavigate();

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
        const response = await getDatoOficinaDistrital();
        console.log("response", response);
          // setNombre(response.nombre);
          setEncargado(response.encargado);
          sethorario(response.horario);
          setCoordenada_x(response.coordenada_x);
          setCoordenada_y(response.coordenada_y);
          setDireccion(response.direccion);
          setFotoUrl(response.fotoUrl);
          setNumeroTelefono(response.numeroTelefono);
          setServiciosPublicos(response.serviciosPublicos);

          // setUv(response.uv);

          // setServiciosPublicos(JSON.parse(response.serviciosPublicos));
           // Limpia y parsea la cadena JSON
        // let servicios = response.serviciosPublicos;
        // if (typeof servicios === 'string') {
        //   servicios = servicios.replace(/'/g, '"'); // Reemplaza comillas simples por comillas dobles
        //   servicios = servicios.replace(/(\w+)(?=:)/g, '"$1"'); // Añade comillas a las claves
        //   servicios = JSON.parse(servicios);
        // }
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
          Detalle Oficinal Distrital 
        </h2>
        <section className="md:flex gap-5">
          <section className="sm:w-[45%] xl:w-[40%]  md:flex lg:block ">
            <div className="sm:flex-col w-full">
              <div>
                <h3 className="uppercase font-semibold text-gray-600">
                  Encargado
                </h3>
                <input
                  type="text"
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1"
                  value={encargado}
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
                  
                  
                  <img
                    src={fotoUrl}
                    className="bg-black border-2 rounded-xl w-full  border-gray-400 object-contain bg-blend-overlay"
                    style={{ height: "220px" }}
                  />
                  {/* <input
                    className="border-2 rounded-xl border-gray-400 w-full px-2"
                    // type="file"
                    value={fotoUrl}
                  /> */}
                </div>
              </div>
            </div>
          </section>

          <section className="w-full sm:w-[55%] xl:w-[60%]">

            <div className="mt-1">
                <h3 className="text-gray-600 text-xl uppercase font-semibold text-center">
                  Servicios Publicos
                </h3>
                <div className="mb-4 mt-1 max-h-28 md:max-h-52  overflow-y-auto scrollbar-hide">
                  {serviciosPublicos.map((element, index) => (
                    <Lista_ServicioPublicoGeneral
                      key={index}
                      descripcion={element}
                    />
                  ))}
                </div>
              </div>

            <div className=" h-60 lg:w-full text-center">
              <h3 className="uppercase font-semibold text-gray-600 mt-3">
                Puntos (Cordenadas)
              </h3>
              <div className="rounded-xl mt-1 h-[95%]">
                <MapaMostrar datoX={coordenada_x} datoY={coordenada_y} />
              </div>
            </div>

          </section>
        </section>

            <button 
                type="button"
                onClick={(e) =>{
                  e.preventDefault();
                  navigate(`/inicio/servicioDistrital/actualizar`)
                }}              
                  
               className="w-full mt-14 md:mt-6 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold hover:bg-primary-900/90"
            >
              Actualizar
            </button>

      </form>
    </div>
  );
};



export default OficinaDistritalGeneral
