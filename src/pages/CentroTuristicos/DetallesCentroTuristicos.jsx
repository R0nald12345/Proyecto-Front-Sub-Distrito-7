import {useState,useEffect} from 'react'
import Encabezado_Arreglo_CargarFotos from '../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Arreglo_CargarFotos';
import MapaAgregar from '../UnidadesEducativas/Mapas/MapaAgregar';
import { createDatoCentroTuristico, deleteCentroTuristico, getDatoCentroTuristicosID } from '../../api/CentroTuristicos';
import useForm from '../../hooks/useForm';
import Swal from "sweetalert2";
import { useNavigate,useParams } from "react-router-dom";
import MapaMostrar from '../UnidadesEducativas/Mapas/MapaMostrar';

const DetallesCentroTuristicos = () => {

    const id = useParams();

    console.log(id);
   

    const navigate = useNavigate();
    const [fotos, setFotos] = useState([]);
    const [datoIDCentroTuristico, setDatoIDCentroTuristico] = useState([]);
    const [coordenadaX, setCoordenadaX] = useState(0);
  const [coordenadaY, setCoordenadaY] = useState(0);

    useEffect(() => {
        const fetchingDatosCentrosTuristicos = async () => {
          try {
            const response = await getDatoCentroTuristicosID(id);
            setDatoIDCentroTuristico(response);
            setCoordenadaX(response.coordenada_x);
            setCoordenadaY(response.coordenada_y);
          } catch (error) {
            console.log(
              "Error en Componente ListaGeneral fetchingDatosGeneralUE",
              error
            );
          }
        };
        fetchingDatosCentrosTuristicos();
      
    
    }, [])
    
    const {coordenada_x, coordenada_y} = datoIDCentroTuristico;

   
    
    return (
        <div className="flex justify-center items-center">    
          <form
            // onSubmit={handleSubmit}
            className="bg-gray-100/50 rounded-xl shadow-xl w-[80%] p-8"
          >
            {/* parte Derecho */}
            <h2 className='text-center font-bold text-3xl text-gray-700'>Agregar Nuevo Centro Turistico</h2>
            <section className="xl:flex gap-5 mt-5">
              <section className="xl:w-[40%] md:flex lg:block ">

                <h3 className="uppercase font-semibold text-gray-600">Nombre</h3>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1"
                  type="text"
                  value={datoIDCentroTuristico.nombre}
                />
    
                <p className="uppercase font-semibold text-gray-600">Dirección</p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  type='text'
                  value={datoIDCentroTuristico.direccion}
                />

                <p className="uppercase font-semibold text-gray-600">Uv</p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  type='text'
                  value={datoIDCentroTuristico.uv}
                />

                <p className="uppercase font-semibold text-gray-600">Link De Video</p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  type='text'
                  value={datoIDCentroTuristico.videoUrl}
                />

                <h3 className="uppercase font-semibold text-gray-600 mt-1">
                  Historia
                </h3>
                <textarea
                  className="w-full mt-1 h-[48%] border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
                  value={datoIDCentroTuristico.historia}
                ></textarea>
    
              </section>
    
              {/* Parte Derecho Superior*/}
              <section className="w-full xl:w-[60%] ">
                {/* Parte Superior*/}
                <section className="block border-2 rounded-xl md:flex h-60 gap-5 ">
                  <div className="w-full">
                    <div className=" lg:w-full rounded-xl p-2">
                      <Encabezado_Arreglo_CargarFotos 
                        foto={fotos}
                        setFoto={setFotos}                   
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
                    <MapaMostrar
                      datoX={coordenadaX} 
                      datoY={coordenadaY}
                    />
                  </div>
                </div>
    
         
              </section>
            </section>
    
            {/* Seleccion debajo */}
            <button
            //   onClick={() => handleSubmit}
              className="w-full mt-12 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold hover:bg-primary-900/90"
            >
              Crear
            </button>
          </form>
        </div>
      );
    };

export default DetallesCentroTuristicos