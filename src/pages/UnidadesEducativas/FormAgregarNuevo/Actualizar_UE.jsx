import { useState, useEffect } from "react";
import FormTipos from "./FormTipos";
import FormAgregarGestion from "./FormAgregarGestion";
import FormAgregarDesayuno from "./FormAgregarDesayuno";
import { useNavigate, useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import FormTipoApoyo from "./FormTipoApoyo";
import MapaAgregar from "../Mapas/MapaAgregar";
import { ActualizarlUE, getDatoGeneralUEid } from "../../../api/UnidadesEducativas";
import Encabezado_Arreglo_CargarFotos from "../../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Arreglo_CargarFotos";
import Swal from "sweetalert2";
import Modal_AgregarGestion from "../../../components/modales/Modal_AgregarGestion";
import ArregloFotos from "../../../components/Encabezado_Listas/UnidadesEducativas/ArregloFotos";
import { createURLFotos } from "../../../api/ArchivoFotos";
import Lista_ServicioPublico from "../../../components/Listas/CentroPolicial/Lista_ServicioPublico";
import MapaEditar from "../Mapas/MapaEditar";
import EditarFotos from "../../../components/Fotos/EditarFotos";
import Modal_Actualizar_ServicioPublico from "../../../components/Modal/CentroPolicial/Modal_Actualizar_ServicioPublico";
import Modal_Crear_ServicioPublico from "../../../components/Modal/CentroPolicial/Modal_Crear_ServicioPublico";
import FormTiposUpdate from "./FormTiposUpdate";

const Actualizar_UE = () => {

    const {id} = useParams();
  const navigate = useNavigate();


  const [nombre, setNombre] = useState("");
  const [coordenada_x, setCoordenada_x] = useState(0);
  const [coordenada_y, setCoordenada_y] = useState(0);

  const [direccion, setDireccion] = useState("");
  const [historia, setHistoria] = useState("");

  const [video, setVideo] = useState("");


  const [uv, setUv] = useState("");


  const [fotos, setFotos] = useState([]);
  const [idInfraestructura, setIdInfraestructura] = useState(0);
  const [idTipoColegio, setIdTipoColegio] = useState(0);
  const [idTurno, setIdTurno] = useState(0);

  const [idGestion, setIdGestion] = useState(0);
  const [openModalCreateGestion, setOpenModalCreateGestion] = useState(false);

  const [horario, sethorario] = useState("");
  const [director, setDirector] = useState("");
  const [numero, setNumero] = useState("");
  const [juntaEscolar, setJuntaEscolar] = useState(null);

  const [slug, setSlug] = useState("");

  const [juntaEscolarFoto, setJuntaEscolarFoto] = useState([]);

  const [openModalCreateServicioPublico, setOpenModalCreateServicioPublico] = useState(false);
  const [openModalActualizarServicioPublico, setOpenModalActualizarServicioPublico] = useState(false);

  const [selectedServicioPublico, setSelectedServicioPublico] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);


  const [serviciosPublicos, setServiciosPublicos] = useState([]);

  const [fotoActualizado, setFotoActualizado] = useState([]);

  const [images, setImages] = useState([]);


  // console.log("Imagesss", juntaEscolarFoto);
  
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
  


  useEffect(() => {

    const fetchingDatosColegio = async () => {
      try {
        const response = await getDatoGeneralUEid(id);
       
        console.log('responseeeeee', response);

        setNombre(response.nombre);

        setIdTipoColegio(response.idTipoColegio.id);
        setIdTurno(response.idTurno.id);

        setIdInfraestructura(response.idInfraestructura.id);



        setDireccion(response.direccion);
        setVideo(response.video);
        setUv(response.uv);
        setSlug(response.slug);



        setHistoria(response.historia);
        setCoordenada_x(response.coordenada_x);
        setCoordenada_y(response.coordenada_y);


        setServiciosPublicos(response.serviciosPublicos);

  
        sethorario(response.gestion.horario);
        setNumero(response.gestion.numero);
        setDirector(response.gestion.director);
        setJuntaEscolar(response.gestion.juntaescolar);

        setImages(response.fotos);

      } catch (error) {
        console.log(
          "Error al Obtener Datos desde Componente fetchingDatosColegioId",
          error
        );
      }
    };
    fetchingDatosColegio();
  }, [])


  const updateColegio=async(e)=>{
    e.preventDefault();
    try {

      let juntaescolar = juntaEscolar;
      let fotos = fotoActualizado;

      const response = await ActualizarlUE(
        id,
        nombre,
        coordenada_x,
        coordenada_y,
        direccion,
        historia,
        video,
        uv,
        slug,
        fotos,

        idInfraestructura,
        idTipoColegio,
        idTurno,

        numero,
        horario,
        director,
        juntaescolar,
        serviciosPublicos
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "UE Actualizado Exitosamente!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/inicio/unidadeducativa");


    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error!",
      });
      console.error("Error al crear la Unidad Educativa: ", error);
    }
  }
  


  useEffect(() => {
    const convertirCloudinary = async () => {
      if (juntaEscolarFoto && typeof juntaEscolarFoto !== "string") {
        try {
          const formData = new FormData();
          formData.append("files", juntaEscolarFoto);
          console.log("DataFoto before sending to API:", formData);
          const response = await createURLFotos(formData);

          setJuntaEscolar( response.imageUrls[0] );

        } catch (error) {
          console.error("Error", error);
        }
      }
    };
    convertirCloudinary();
  }, [juntaEscolarFoto]);


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
        onSubmit={(e)=>updateColegio(e)}
        className="bg-gray-100/50 rounded-xl shadow-xl w-[100%] lg:w-[85%] p-4 md:px-8"
      >
        <h2 className="text-center font-bold text-3xl text-gray-700">
          Actualizar Unidad Educativa
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
                   onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                {/* {
                  showMapaEditar && ( */}
                    <FormTiposUpdate
                      idInfraestructura = {idInfraestructura}
                      idTipoColegio = {idTipoColegio}
                      idTurno = {idTurno}
                      setIdTipoColegio={setIdTipoColegio}
                      setIdTurno={setIdTurno}
                      setIdInfraestructura={setIdInfraestructura}
                    />
                {/* //   )
                // } */}
                <p className="mt-3 uppercase font-semibold text-gray-600">
                  Dirección
                </p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                />

                <p className="mt-3 uppercase font-semibold text-gray-600">
                  Video
                </p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  value={video}
                  onChange={(e) => setVideo(e.target.value)}
                />

                <p className="mt-3 uppercase font-semibold text-gray-600">
                  Uv
                </p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  value={uv}
                  onChange={(e) => setUv(e.target.value)}
                />

                <div className="">
                  <p className="uppercase font-semibold text-gray-600 mt-3 mb-1 text-center">
                    Gestión
                  </p>
                  <section className=" gap-8 border border-black/50 rounded-lg px-3 py-3">
                    <div className="w-full mt-1">
                      <p className="uppercase font-semibold text-gray-600 mt-1">
                        Horario
                      </p>
                      <input
                        className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                        value={horario}
                        onChange={(e) => sethorario(e.target.value)}
                      />
                    </div>
                    <div className="w-full mt-3">
                      <p className="uppercase font-semibold text-gray-600 mt-1">
                        Número
                      </p>
                      <input
                        className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                      />
                    </div>

                    <div className="w-full mt-3">
                      <p className="uppercase font-semibold text-gray-600 mt-1">
                        Director
                      </p>
                      <input
                        className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                      />
                    </div>

                    <p className="uppercase font-semibold text-gray-600 mt-3">
                      Junta Escolar
                    </p>
                    <input
                      className="border-2 rounded-xl border-gray-400 w-[59%] md:w-full"
                      type="file"
                      onChange={(e) => setJuntaEscolarFoto(e.target.files[0])} // Actualiza el estado con el archivo seleccionado
                    />
                    <div className="relative">
                      <button 
                        className="absolute top-3 right-3 bg-red-600 font-bold text-white px-2 rounded"
                        onClick={(event) => {
                          event.preventDefault();
                          setJuntaEscolar("");
                        }}
                      >
                        X
                      </button>
                      <img
                        src={juntaEscolar}
                        className="bg-black border-2 rounded-xl w-full  border-gray-400 object-contain bg-blend-overlay"
                        style={{ height: "230px" }}
                      />


                    </div>
                    

                  </section>
                </div>
              </div>
            </div>
          </section>


          <section className="w-full sm:w-[55%] xl:w-[60%]">
            <h3 className="uppercase font-semibold text-gray-600 mt-1">
              Historia
            </h3>
            <textarea
              className="w-full mt-1 h-16  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
              value={historia}
              onChange={(e) => setHistoria(e.target.value)}
            ></textarea>

            <section className="mt-3 block border-2 rounded-xl md:flex h-80 md:h-52 gap-5 ">
              <div className="w-full">
                <div className="lg:w-full rounded-xl px-2">
                
                  <EditarFotos
                    fotos={images} setFotos={setImages} 
                    setFotoActualizado = {setFotoActualizado}
                  />


                  
                </div>
              </div>
            </section>

            
            <div className="lg:w-full rounded-xl px-2">
                  <button 
                    type="button"
                    onClick={() => setOpenModalCreateServicioPublico(!openModalCreateServicioPublico)}
                    className="w-full mt-2 bg-primary-300 rounded-xl text-white uppercase py-1 text-xl font-semibold hover:bg-primary-900/90">
                    
                    + Agregar Servicio Público
                  </button>
                  <div className="flex bg-white mt-2 py-2 rounded-md">
                    <h4 className=" w-[80%] text-start lg:text-center px-2  uppercase font-semibold ">Descripcion</h4>
                    <h4 className="w-[20%] hidden lg:block text-center uppercase font-semibold">Acciones</h4>
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


            <div className=" h-60 lg:w-full text-center">
              <h3 className="uppercase font-semibold text-gray-600 mt-3">
                Puntos (Cordenadas)
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
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default Actualizar_UE;
