import { useState } from "react";
import Encabezado_Arreglo_CargarFotos from "../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Arreglo_CargarFotos";
import MapaAgregar from "../UnidadesEducativas/Mapas/MapaAgregar";
import { createDatoCentroTuristico } from "../../api/CentroTuristicos";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ArregloFotos from "../../components/Encabezado_Listas/UnidadesEducativas/ArregloFotos";

const Actualizar_CentroTuristicos = () => {
  


    const [nombre, setNombre] = useState("");
    const [coordenada_x, setCoordenada_x] = useState(0);
    const [coordenada_y, setCoordenada_y] = useState(0);

    const [direccion, setDireccion] = useState("");
    const [uv, setUv] = useState("");
    const [historia, setHistoria] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [foto, setFoto] = useState([]);
    

  const navigate = useNavigate();


  //coorX

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createDatoCentroTuristico({
        nombre,
        coordenada_x,
        coordenada_y,
        direccion,
        uv,
        historia,
        videoUrl,
        fotos: foto,
      });
      onResetForm();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Centro Deportivo creado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/inicio/centro_turisticos");
    } catch (error) {
      console.log("Error en el Componente AgregarCentroTuristicos: " + error);
    }
  };

  
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100/50 rounded-xl shadow-xl w-[95%] xl:w-[85%] p-4 xl:p-8"
      >
        {/* parte Derecho */}
        <h2 className="text-center font-bold text-3xl text-gray-700">
          Agregar Nuevo Centro Turistico
        </h2>
        <section className="xl:flex gap-5">
          <section className="xl:w-[40%] md:flex lg:block ">

{/* ------------------------------------------------------------ */}
            <section className="w-full  lg:h-[87%]">
            
              <div className="md:flex xl:flex-col gap-3">
                <div className="w-full md:w-1/2 xl:w-full mt-1">
                  <h3 className="uppercase font-semibold text-gray-600">
                    Nombre
                  </h3>

                  <input
                    className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                    type="text"
                    value={nombre}
                    name="nombre"
                    onChange={onInputChange}
                  />
                </div>

                <div className="w-full md:w-1/2 xl:w-full mt-1">
                  <p className="uppercase font-semibold text-gray-600">
                    Dirección
                  </p>

                  <input
                    className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                    type="text"
                    name="direccion"
                    value={direccion}
                    onChange={onInputChange}
                    />
                </div>

              </div>

              
              <div className="md:flex xl:flex-col gap-3">


              <div className="w-full md:w-1/2 xl:w-full mt-1">
                  <p className="uppercase font-semibold text-gray-600">Uv</p>

                  <input
                    className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                    type="text"
                    value={uv}
                    name="uv"
                    onChange={onInputChange}
                    />

                </div>


                <div className="w-full md:w-1/2 xl:w-full mt-1">
                  <p className="uppercase font-semibold text-gray-600">
                    Link De Video
                  </p>

                  <input
                    className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                    type="text"
                    value={videoUrl}
                    name="videoUrl"
                    onChange={onInputChange}
                  />
                </div>

              </div>

              <h3 className="uppercase font-semibold text-gray-600 mt-1">
                Historia
              </h3>
              <textarea
                className="w-full mt-1 lg:h-[48%] border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
                value={historia}
                name="historia"
                onChange={onInputChange}
                ></textarea>

            </section>

{/* ------------------------------------------------------------ */}

          </section>

          {/* Parte Derecho Superior*/}
          <section className="w-full xl:w-[60%] mt-5">
            {/* Parte Superior*/}
            <section className="block border-2 rounded-xl md:flex h-60 gap-5 ">
              <div className="w-full">
                <div className=" lg:w-full rounded-xl p-2">
                  {/* <Encabezado_Arreglo_CargarFotos 
                        foto={fotos}
                        setFoto={setFotos}                   
                      /> */}

                  <ArregloFotos foto={foto} setFoto={setFoto} />
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
          //   onClick={() => handleSubmit}
          className="w-full mt-12 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold hover:bg-primary-900/90"
        >
          Crear
        </button>
      </form>
    </div>
  );
};

export default AgregarCentroTuristicos;
