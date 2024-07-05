import {useState} from 'react'
import Encabezado_Arreglo_CargarFotos from '../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Arreglo_CargarFotos';
import MapaAgregar from '../UnidadesEducativas/Mapas/MapaAgregar';

const AgregarCentroTuristicos = () => {

    const [fotoArreglo, setFotoArreglo] = useState([])
    const [coorX, setCoorX] = useState(0);
    const [coorY, setCoorY] = useState(0);

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          await createCentroDeportivo({
              nombre,
              coordenada_x,
              coordenada_y,
              direccion,
              uv,
              historia,
              videoUrl,
              foto,
          });
          onResetForm();
          Swal.fire({
              position: "center",
              icon: "success",
              title: "Centro Deportivo creado exitosamente",
              showConfirmButton: false,
              timer: 1500,
          });
          navigate('/inicio/centro_deportivo');
      } catch (error) {
          console.log("Error en el Componente AgregarCentroDeportivo: " + error);
      }
  };
    
    return (
        <div className="flex justify-center items-center">    
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100/50 rounded-xl shadow-xl w-[80%] p-8"
          >
            {/* parte Derecho */}
            <h2 className='text-center font-bold text-3xl text-gray-700'>Agregar Nuevo Centro Turistico</h2>
            <section className="xl:flex gap-5 mt-5">
              <section className="xl:w-[40%] md:flex lg:block ">

    
                <h3 className="uppercase font-semibold text-gray-600">Nombre</h3>
    
                <input
                  type="text"
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1"
                //   value={nombre}
                //   onChange={(e) => setNombre(e.target.value)}
                />
    
                <p className="uppercase font-semibold text-gray-600">Dirección</p>
    
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                //   value={direccion}
                //   onChange={(e) => setDireccion(e.target.value)}
                />
                <p className="uppercase font-semibold text-gray-600">Uv</p>
    
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                //   value={direccion}
                //   onChange={(e) => setDireccion(e.target.value)}
                />
                <p className="uppercase font-semibold text-gray-600">Link De Video</p>
    
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                //   value={direccion}
                //   onChange={(e) => setDireccion(e.target.value)}
                />
                <h3 className="uppercase font-semibold text-gray-600 mt-1">
                  Historia
                </h3>
                <textarea
                  className="w-full mt-1 h-[48%] border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
                //   onChange={() => setHistoria()}
                ></textarea>
    
    
              </section>
    
              {/* Parte Derecho Superior*/}
              <section className="w-full xl:w-[60%] ">
                {/* Parte Superior*/}
                <section className="block border-2 rounded-xl md:flex h-60 gap-5 ">
                  <div className="w-full">
                    <div className=" lg:w-full rounded-xl p-2">
                      <Encabezado_Arreglo_CargarFotos 
                        fotoArreglo={fotoArreglo}
                        setFotoArreglo={setFotoArreglo}                    
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
                      setCoordenada_x={coorX}
                      setCoordenada_y={coorY}
                    //   setCoordenada_x={setCoordenada_x}
                    //   setCoordenada_y={setCoordenada_y}
                    />
                  </div>
                </div>
    
         
              </section>
            </section>
    
            {/* Seleccion debajo */}
            <button
            //   type="submit"
            //   onClick={() => handleSubmit}
              className="w-full mt-12 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold hover:bg-primary-900/90"
            >
              Crear
            </button>
          </form>
        </div>
      );
    };

export default AgregarCentroTuristicos