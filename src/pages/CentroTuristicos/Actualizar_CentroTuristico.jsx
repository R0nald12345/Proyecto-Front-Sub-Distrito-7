import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  getDatoCentroTuristicosID, updateDatoCentroTuristico } from "../../api/CentroTuristicos";
import Swal from "sweetalert2";
import EditarFotos from "../../components/Fotos/EditarFotos";
import MapaEditar from "../UnidadesEducativas/Mapas/MapaEditar";
import Modal_Crear_ServicioPublico from "../../components/Modal/CentroPolicial/Modal_Crear_ServicioPublico";
import Modal_Actualizar_ServicioPublico from "../../components/Modal/CentroPolicial/Modal_Actualizar_ServicioPublico";
import Lista_ServicioPublico from "../../components/Listas/CentroPolicial/Lista_ServicioPublico";

const Actualizar_CentroTuristicos = () => {
  



  const navigate = useNavigate();
  const { id } = useParams();

  const [datoCentroDeportivoId, setDatoCentroDeportivoId] = useState({});
  
  const [images, setImages] = useState([]);
  
  
  const [nombre, setNombre] = useState("");
  const [coordenada_x, setCoordenada_x] = useState(0);
  const [coordenada_y, setCoordenada_y] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [uv, setUv] = useState("");
  const [historia, setHistoria] = useState("");
  const [videoUrl, setVideoUrl] = useState("");


  const [serviciosPublicos, setServiciosPublicos] = useState([]);
  
  const [fotoActualizado, setFotoActualizado] = useState([]);

  const [openModalCreateServicioPublico, setOpenModalCreateServicioPublico] = useState(false);
  const [openModalActualizarServicioPublico, setOpenModalActualizarServicioPublico] = useState(false);
  const [selectedServicioPublico, setSelectedServicioPublico] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);





  useEffect(() => {
    const fetchingDatoCetroTuristicosId = async () => {
      try {
        const response = await getDatoCentroTuristicosID({id});
        setNombre(response.nombre);
        setCoordenada_x(response.coordenada_x);
        setCoordenada_y(response.coordenada_y);
        setDireccion(response.direccion);
        setUv(response.uv);
        setHistoria(response.historia);
        setVideoUrl(response.videoUrl);
        setImages(response.fotos);
        setServiciosPublicos(response.serviciosPublicos);
      } catch (error) {
        console.log("Error en Componente fetchingDatoCetroTuristicosId", error);
      }
    };
    fetchingDatoCetroTuristicosId();
  }, []);


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

  const updateCentroDeportivo=async(e)=>{
    e.preventDefault();
    try {

      let fotos = fotoActualizado;

      const response = await updateDatoCentroTuristico(
        id,
        nombre,
        coordenada_x,
        coordenada_y,
        direccion,
        uv,
        historia,
        videoUrl,
        fotos,
        serviciosPublicos
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Centro Deportivo Actualizado Exitosamente!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/inicio/centro_deportivo");


    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error!",
      });
      console.error("Error al Actualizar la Centro Deportivo: ", error);
    }
  }
  

  
  //Para le manejo de cambio del Mapa

  const [showMapaEditar, setShowMapaEditar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMapaEditar(true);
    }, 2000); // Cambia el tiempo de retraso según sea necesario

    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonte
  }, []);





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
        onSubmit={ (e)=> updateCentroDeportivo(e)}
        className="bg-gray-100/50 rounded-xl shadow-xl xl:w-[80%] md:w-[80%] p-6"
      >
        <h2 className="text-center font-bold text-3xl text-gray-700">
          Actualizar Nuevo Centro Deportivo
        </h2>
        <section className="xl:flex gap-5 mt-5">
          <section className="xl:w-[40%] flex-col md:flex lg:block ">
            <div>
              <h3 className="uppercase font-semibold text-gray-600">Nombre</h3>
              <input
                className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <p className="uppercase font-semibold text-gray-600">Dirección</p>
              <input
                className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>

            <div>
              <p className="uppercase font-semibold text-gray-600">Uv</p>
              <input
                className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                type="text"
                value={uv}
                onChange={(e) => setUv(e.target.value)}
              />
              <p className="uppercase font-semibold text-gray-600">
                Link De Video
              </p>
              <input
                className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </div>

            <h3 className="uppercase font-semibold text-gray-600 mt-1">
              Historia
            </h3>
            <textarea
              className=" w-full mt-1 h-[15%] border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
              type="text"
              value={historia}
                onChange={(e) => setHistoria(e.target.value)}
            ></textarea>

            <div className="mt-1">
                  <button 
                    type="button"
                    onClick={() => setOpenModalCreateServicioPublico(!openModalCreateServicioPublico)}
                    className="w-full mt-2 bg-primary-300 rounded-xl text-white uppercase py-1 text-xl font-semibold hover:bg-primary-900/90">
                    
                    + Agregar Servicio Público
                  </button>
              <div className="mb-4 mt-1 max-h-28 md:max-h-24  overflow-y-auto scrollbar-hide">
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
          </section>

          <section className="w-full xl:w-[60%]">

            <section className="mt-3 block border-2 rounded-xl md:flex h-80 md:h-52 gap-5 ">
              <div className="w-full">
                <div className="lg:w-full rounded-xl px-2">

                    <EditarFotos
                        fotos={images}
                        setFotos={setImages}
                        setFotoActualizado={setFotoActualizado}
                    />
                    {/* <ImageGallery items={images} /> */}
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
              <h3 className="uppercase text-xl font-semibold text-gray-600 mt-3">
                Puntos (Coordenadas)
              </h3>
              <div className="rounded-xl mt-1 h-[60%]">
              {showMapaEditar && (
                <MapaEditar
                  datoX={coordenada_x}
                  datoY={coordenada_y}
                  setCoordenada_x={setCoordenada_x}
                  setCoordenada_y={setCoordenada_y}
                />
              )}
              </div>
            </div>
          </section>
        </section>
        <button
          type="submit"
          className="w-full mt-14 md:mt-6 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold hover:bg-primary-900/90"
        >
          Actualizar Centro Turísticos
        </button>
      </form>
    </div>
  );
};

export default Actualizar_CentroTuristicos;
