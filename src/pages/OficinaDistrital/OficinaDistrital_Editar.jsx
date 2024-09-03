import { useEffect, useState } from "react";
import MapaEditar from "../UnidadesEducativas/Mapas/MapaEditar";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getDatoOficinaDistrital, updateDatoDistritoOficial } from "../../api/OficinaDistrital";
import Lista_ServicioPublico from "../../components/Listas/CentroPolicial/Lista_ServicioPublico";
import Modal_Actualizar_ServicioPublico from "../../components/Modal/CentroPolicial/Modal_Actualizar_ServicioPublico";
import Modal_Crear_ServicioPublico from "../../components/Modal/CentroPolicial/Modal_Crear_ServicioPublico";
import { createURLFotos } from "../../api/ArchivoFotos";

const OficinaDistrital_Editar = () => {
  // const { id } = useParams();

  const navigate = useNavigate();

  const [id,SetId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [encargado, setEncargado] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [coordenada_x, setCoordenada_x] = useState(0);
  const [coordenada_y, setCoordenada_y] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [uv, setUv] = useState("");
  const [horario, sethorario] = useState("");
  // const [fotoUrl, setFotoUrl] = useState("");
  const [serviciosPublicos, setServiciosPublicos] = useState([]);

  const [juntaEscolarFoto, setJuntaEscolarFoto] = useState([]);


   const [juntaEscolar, setJuntaEscolar] = useState(null);


  const [openModalCreateServicioPublico, setOpenModalCreateServicioPublico] =
    useState(false);
  const [
    openModalActualizarServicioPublico,
    setOpenModalActualizarServicioPublico,
  ] = useState(false);
  const [selectedServicioPublico, setSelectedServicioPublico] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  //Para le manejo de cambio del Mapa

  const [showMapaEditar, setShowMapaEditar] = useState(false);

  useEffect(() => {
    const convertirCloudinary = async () => {
      if (juntaEscolarFoto && typeof juntaEscolarFoto !== "string") {
        try {
          const formData = new FormData();
          formData.append("files", juntaEscolarFoto);
          console.log("DataFoto before sending to API:", formData);
          const response = await createURLFotos(formData);

          console.log('responseeeeeeeeeeeeeeeeeeeeeeee',response);

          setJuntaEscolar( response.imageUrls[0] );

        } catch (error) {
          console.error("Error", error);
        }
      }
    };
    convertirCloudinary();
  }, [juntaEscolarFoto]);




  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMapaEditar(true);
    }, 2000); // Cambia el tiempo de retraso según sea necesario

    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonte
  }, []);

  const handleAddServicioPublico = (descripcion) => {
    setServiciosPublicos([...serviciosPublicos, descripcion]);
  };

  const handleDeleteServicioPublico = async (index) => {
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

  const handleUpdateServicioPublico = (index, descripcion) => {
    const updatedServicios = [...serviciosPublicos];
    updatedServicios[index] = descripcion;
    setServiciosPublicos(updatedServicios);
  };


  useEffect(() => {
    const fetchingCentroPolicial = async () => {
      try {
        const response = await getDatoOficinaDistrital();
        console.log("response", response);

        // setNombre(response.nombre);

        SetId(response.id);
        setEncargado(response.encargado);
        sethorario(response.horario);
        setCoordenada_x(response.coordenada_x);
        setCoordenada_y(response.coordenada_y);
        setDireccion(response.direccion);
        setJuntaEscolar(response.fotoUrl);
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



  const updateDistritoOficial=async(e)=>{
    e.preventDefault();
    try {

      console.log("juntaEscolarrrrrrr", juntaEscolar);
      // setFotoUrl(juntaEscolar);

      let fotoUrl = juntaEscolar;

      const response = await updateDatoDistritoOficial(
        encargado,
        horario,
        coordenada_x,
        coordenada_y,
        direccion,
        fotoUrl,
        numeroTelefono,
        serviciosPublicos
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Oficina Distrital Actualizado Exitosamente!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/inicio/servicioDistrital");


    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error!",
      });
      console.error("Error al Actualizar Oficina Distrital", error);
    }
  }
  


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
        onSubmit={(e)=>updateDistritoOficial(e)}
        className="bg-gray-100/50 rounded-xl shadow-xl w-[100%] lg:w-[85%] p-4 md:px-8">
        <h2 className="text-center font-bold text-3xl text-gray-700">
          Editar Oficinal Distrital
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
                  onChange={(e) => setEncargado(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <p className="mt-3 uppercase font-semibold text-gray-600">
                  Direccion
                </p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                />

                <p className="mt-3 uppercase font-semibold text-gray-600">
                  Horario
                </p>

                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  value={horario}
                  onChange={(e) => sethorario(e.target.value)}
                />

                <div className="">
                  <div className="w-full mt-1"></div>
                  <div className="w-full mt-3">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Número Teléfono
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      value={numeroTelefono}
                      onChange={(e) => setNumeroTelefono(e.target.value)}
                    />
                  </div>

                  <p className="uppercase font-semibold text-gray-600 mt-3">
                    FotoUrl
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
                          setJuntaEscolar(null);
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


                    </div>
              </div>
            </div>
          </section>

          <section className="w-full sm:w-[55%] xl:w-[60%]">
            <div className="lg:w-full rounded-xl px-2">
              <button
                type="button"
                onClick={() =>
                  setOpenModalCreateServicioPublico(
                    !openModalCreateServicioPublico
                  )
                }
                className="w-full mt-1 bg-primary-300 rounded-xl text-white uppercase py-1 text-xl font-semibold hover:bg-primary-900/90"
              >
                + Agregar Servicio Público
              </button>
              <div className="flex bg-white mt-2 py-2 rounded-md">
                <h4 className=" w-[70%] text-start lg:text-center px-2  uppercase font-semibold ">
                  Descripcion
                </h4>
                <h4 className="w-[30%] hidden  lg:block text-center uppercase font-semibold">
                  Acciones
                </h4>
              </div>
              <div className=" mt-3 max-h-28 md:max-h-28  overflow-y-auto scrollbar-hide">
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

            <div className="h-60 lg:w-full text-center">
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
          Actualizar Oficina Distrital
        </button>
      </form>
    </div>
  );
};

export default OficinaDistrital_Editar;
