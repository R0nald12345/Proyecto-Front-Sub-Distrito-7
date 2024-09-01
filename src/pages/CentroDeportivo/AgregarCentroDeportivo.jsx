import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Encabezado_Arreglo_CargarFotos from "../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Arreglo_CargarFotos";
import MapaAgregar from "../UnidadesEducativas/Mapas/MapaAgregar";
import useForm from "../../hooks/useForm";
import { createCentroDeportivo } from "../../api/CentroDeportivo";
import ArregloFotos from "../../components/Encabezado_Listas/UnidadesEducativas/ArregloFotos";
import Modal_Crear_ServicioPublico from "../../components/Modal/CentroPolicial/Modal_Crear_ServicioPublico";
import Modal_Actualizar_ServicioPublico from "../../components/Modal/CentroPolicial/Modal_Actualizar_ServicioPublico";
import Lista_ServicioPublico from "../../components/Listas/CentroPolicial/Lista_ServicioPublico";

const AgregarCentroDeportivo = () => {
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



  const {
    onInputChange,
    onResetForm,
    nombre,
    direccion,
    uv,
    historia,
    videoUrl,
  } = useForm({
    nombre: "",
    direccion: "",
    uv: "",
    historia: "",
    videoUrl: "",
  });

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
      navigate("/inicio/centro_deportivo");
    } catch (error) {
      console.log("Error en el Componente AgregarCentroDeportivo: " + error);
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
        className="bg-gray-100/50 rounded-xl shadow-xl  xl:w-[80%] md:w-[80%] p-6"
      >
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
                name="nombre"
                value={nombre}
                onChange={onInputChange}
              />

              <p className="uppercase font-semibold text-gray-600">Dirección</p>
              <input
                className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                type="text"
                name="direccion"
                value={direccion}
                onChange={onInputChange}
              />
            </div>

            <div>
              <p className="uppercase font-semibold text-gray-600">Uv</p>
              <input
                className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                type="text"
                name="uv"
                value={uv}
                onChange={onInputChange}
              />
              <p className="uppercase font-semibold text-gray-600">
                Link De Video
              </p>
              <input
                className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                type="text"
                name="videoUrl"
                value={videoUrl}
                onChange={onInputChange}
              />
            </div>

            <h3 className="uppercase font-semibold text-gray-600 mt-1">
              Historia
            </h3>
            <textarea
              className=" mb-5 w-full mt-1 h-[63%] border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
              type="text"
              name="historia"
              value={historia}
              onChange={onInputChange}
            ></textarea>
          </section>

          <section className="w-full xl:w-[60%] ">

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
            <section className="mt-5 block border-2 rounded-xl md:flex h-60 gap-5">
              <div className="w-full">
                <div className="lg:w-full rounded-xl p-2">
                  {/* <Encabezado_Arreglo_CargarFotos
                    foto={foto}
                    setFoto={setFoto}
                    /> */}

                  <ArregloFotos
                    foto={foto}
                    setFoto={setFoto}
                  />
                </div>
              </div>
            </section>

            <div className="xs:w-1/2 h-60 lg:w-full text-center mb-5">
              <h3 className="uppercase font-semibold text-gray-600 mt-3">
                Puntos (Coordenadas)
              </h3>
              <div className="rounded-xl mt-1 h-[60%]">
                <MapaAgregar
                  setCoordenada_x={setCoordenada_x}
                  setCoordenada_y={setCoordenada_y}
                />
              </div>
            </div>
          </section>
        </section>
        <button
          type="submit"
          className="w-full mt-8 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold hover:bg-primary-900/90"
        >
          Crear Centro Deportivo
        </button>
      </form>
    </div>
  );
};

export default AgregarCentroDeportivo;
