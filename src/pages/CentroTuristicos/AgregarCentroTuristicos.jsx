import { useState } from "react";
import Encabezado_Arreglo_CargarFotos from "../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Arreglo_CargarFotos";
import MapaAgregar from "../UnidadesEducativas/Mapas/MapaAgregar";
import { createDatoCentroTuristico } from "../../api/CentroTuristicos";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ArregloFotos from "../../components/Encabezado_Listas/UnidadesEducativas/ArregloFotos";
import Lista_ServicioPublico from "../../components/Listas/CentroPolicial/Lista_ServicioPublico";
import Modal_Actualizar_ServicioPublico from "../../components/Modal/CentroPolicial/Modal_Actualizar_ServicioPublico";
import Modal_Crear_ServicioPublico from "../../components/Modal/CentroPolicial/Modal_Crear_ServicioPublico";

const AgregarCentroTuristicos = () => {
  const {
    onResetForm,
    onInputChange,
    nombre,
    direccion,
    historia,
    videoUrl,
    uv,
  } = useForm({
    nombre: "",
    direccion: "",
    historia: "",
    uv: "",
    videoUrl: "",
  });

  const navigate = useNavigate();

  const [foto, setFoto] = useState([]);
  const [coordenada_x, setCoordenada_x] = useState(0);
  const [coordenada_y, setCoordenada_y] = useState(0);

  const [openModalCreateServicioPublico, setOpenModalCreateServicioPublico] = useState(false);
  const [openModalActualizarServicioPublico, setOpenModalActualizarServicioPublico] = useState(false);
  const [serviciosPublicos, setServiciosPublicos] = useState([]);
  const [selectedServicioPublico, setSelectedServicioPublico] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleAddServicioPublico = (descripcion) => {
    setServiciosPublicos([...serviciosPublicos, descripcion]);
  };

  const handleUpdateServicioPublico = (index, descripcion) => {
    const updatedServicios = [...serviciosPublicos];
    updatedServicios[index] = descripcion;
    setServiciosPublicos(updatedServicios);
  };


  const handleDeleteServicioPublico = async(index) => {

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
      setServiciosPublicos(serviciosPublicos.filter((_, i) => i !== index));
      // onDelete(id);
      Swal.fire({
        title: "Eliminado!",
        text: "Eliminado Correctamente.",
        icon: "success",
      });
    }

  };


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
        serviciosPublicos
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

      <Modal_Crear_ServicioPublico
        open={openModalCreateServicioPublico}
        onClose={() => setOpenModalCreateServicioPublico(false)}
        onAddServicioPublico={handleAddServicioPublico}
      />
      
      
       <Modal_Actualizar_ServicioPublico
        open={openModalActualizarServicioPublico}
        onClose={() => setOpenModalActualizarServicioPublico(false)}
        datoNombre={selectedServicioPublico}
        onUpdateServicioPublico={handleUpdateServicioPublico}
        index={selectedIndex}
      />
      
      
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

            <div className="lg:w-full rounded-xl px-2">
                  <button 
                    type="button"
                    onClick={() => setOpenModalCreateServicioPublico(!openModalCreateServicioPublico)}
                    className="w-full mt-2 bg-primary-300 rounded-xl text-white uppercase py-1 text-xl font-semibold hover:bg-primary-900/90">
                    
                    + Agregar Servicio Público
                  </button>
                  <div className="flex bg-white mt-2 py-2 rounded-md">
                    <h4 className=" w-[70%] text-start lg:text-center px-2  uppercase font-semibold ">Descripcion</h4>
                    <h4 className="w-[30%] hidden lg:block text-center uppercase font-semibold">Acciones</h4>
                  </div>
                  <div className=" mt-3 max-h-28 md:max-h-32  overflow-y-auto scrollbar-hide">
                    {serviciosPublicos.map((element, index) => (
                      <Lista_ServicioPublico
                        key={index}
                        id={index}
                        descripcion={element}
                        onDelete={handleDeleteServicioPublico}
                        onEdit={() => {
                          setSelectedServicioPublico(element);
                          setSelectedIndex(index);
                          setOpenModalActualizarServicioPublico(true);
                        }}
                      />
                    ))}
                  </div>
                </div>

            <section className="block mt-3 border-2 rounded-xl md:flex h-60 gap-5 ">
              <div className="w-full ">
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
          Crear Centro Turísticos
        </button>
      </form>
    </div>
  );
};

export default AgregarCentroTuristicos;
