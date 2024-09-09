import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ActualizarlUE, getDatoGeneralUEid } from "../../../api/UnidadesEducativas";
import FormTipos from "../FormAgregarNuevo/FormTipos";
import ArregloFotos from "../../../components/Encabezado_Listas/UnidadesEducativas/ArregloFotos";
import MapaAgregar from "../Mapas/MapaAgregar";


const FormEditarUE = () => {

    const {id} = useParams();

  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [coordenada_x, setCoordenada_x] = useState(0);
  const [coordenada_y, setCoordenada_y] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [video, setVideo] = useState("");
  const [slug, setSlug] = useState("");
  const [fotos, setFotos] = useState([]);
  const [idInfraestructura, setIdInfraestructura] = useState(0);
  const [idTipoColegio, setIdTipoColegio] = useState(0);
  const [idTurno, setIdTurno] = useState(0);

  const [idGestion, setIdGestion] = useState(0);
  const [openModalCreateGestion, setOpenModalCreateGestion] = useState(false);

  const [horario, sethorario] = useState("");
  const [director, setDirector] = useState("");
  const [numero, setNumero] = useState("");
  const [juntaEscolarFoto, setJuntaEscolarFoto] = useState([]);
  const [juntaEscolar, setJuntaEscolar] = useState("");

  const [juntaEscolarCloudinary, setJuntaEscolarCloudinary] = useState([]);
  

  const handleActualizar = async (e) => {
    // try {
    //   // const juntaEscolarNombre = juntaescolar ? juntaescolar.name : "";
    //   // setJuntaEscolar(juntaEscolarCloudinary);
    //   // console.log("Junta Escolar: ", juntaEscolarCloudinary);

    //   // console.log("State API:", juntaEscolarCloudinary);
  
    //   const response = await createDatoGeneralUE({
    //     nombre,
    //     coordenada_x,
    //     coordenada_y,
    //     direccion,
    //     historia,
    //     video,
    //     slug,
    //     fotos, // Asegúrate de que fotos sea un arreglo de cadenas
    //     idInfraestructura,
    //     idTipoColegio,
    //     idTurno,
    //     numero,
    //     horario,
    //     director,
    //     // juntaescolar : juntaEscolar
    //     juntaescolar:juntaEscolar
    //     // juntaescolar : juntaEscolarCloudinary
    //   });
  
    //   Swal.fire({
    //     position: "center",
    //     icon: "success",
    //     title: "UE Creado Exitosamente!",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
  
      navigate("/inicio/unidadeducativa");
    //   console.log("UE Creado: ", response);
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Hubo un error!",
    //   });
    //   console.error("Error al crear la Unidad Educativa: ", error);
    // }
  };


  useEffect(() => {
    const fetchingDataUE = async () => {
        try {
            const response = await getDatoGeneralUEid(id);
            console.log("Response from API:", response);
            setNombre(response.nombre);
            setCoordenada_x(response.coordenada_x);
            setCoordenada_y(response.coordenada_y);
            setDireccion(response.direccion);
            setHistoria(response.historia);
            setVideo(response.video);
            setSlug(response.slug);
            setFotos(response.fotos);
            setIdInfraestructura(response.idInfraestructura);
            setIdTipoColegio(response.idTipoColegio);
            setIdTurno(response.idTurno);
            setIdGestion(response.idGestion);
            sethorario(response.horario);
            setDirector(response.director);
            setNumero(response.numero);
            setJuntaEscolar(response.juntaescolar);
        } catch (error) {
            console.error("Error", error);
        }
    }
    fetchingDataUE();
  }, [])
  

  useEffect(() => {
    const convertirCloudinary = async () => {
      if (juntaEscolarFoto && typeof juntaEscolarFoto !== "string") {
        try {
          const formData = new FormData();
          formData.append("files", juntaEscolarFoto);
          console.log("DataFoto before sending to API:", formData);
          const response = await createURLFotos(formData);

          setJuntaEscolar( response.imageUrls[0] );

          // console.log("Response from API Junta Escolar:", response.imageUrls[0]);
          // console.log("Response from API Junta Escolar:", juntaEscolar);
          // console.log("Response tipo :", typeof juntaEscolar);

          // setJuntaEscolarCloudinary(response.imageUrls);
          // console.log("Response from API:", response.imageUrls);

          // console.log("State API:", juntaEscolarCloudinary);
        } catch (error) {
          console.error("Error", error);
        }
      }
    };
    convertirCloudinary();
  }, [juntaEscolarFoto]);

  return (
    <div className="flex justify-center items-center">

      <form
        onSubmit={handleActualizar}
        className="bg-gray-100/50 rounded-xl shadow-xl w-[100%] lg:w-[85%] p-4 md:px-8"
      >
        <h2 className="text-center font-bold text-3xl text-gray-700">
          Agregar Nueva Unidad Educativa
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
                //   onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <FormTipos
                //   setIdTipoColegio={setIdTipoColegio}
                //   setIdTurno={setIdTurno}
                //   setIdInfraestructura={setIdInfraestructura}
                />
                <p className="mt-3 uppercase font-semibold text-gray-600">
                  Dirección
                </p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  value={direccion}
                //   onChange={(e) => setDireccion(e.target.value)}
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
                        // onChange={(e) => sethorario(e.target.value)}
                      />
                    </div>
                    <div className="w-full mt-3">
                      <p className="uppercase font-semibold text-gray-600 mt-1">
                        Número
                      </p>
                      <input
                        className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                        value={numero}
                        // onChange={(e) => setNumero(e.target.value)}
                      />
                    </div>

                    <div className="w-full mt-3">
                      <p className="uppercase font-semibold text-gray-600 mt-1">
                        Director
                      </p>
                      <input
                        className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                        value={director}
                        // onChange={(e) => setDirector(e.target.value)}
                      />
                    </div>

                    <p className="uppercase font-semibold text-gray-600 mt-3">
                      Junta Escolar
                    </p>
                    <input
                      className="border-2 rounded-xl border-gray-400 w-[59%] md:w-full"
                      type="file"
                    //   onChange={(e) => setJuntaEscolarFoto(e.target.files[0])} // Actualiza el estado con el archivo seleccionado
                    />
                    {/* <div>
                      <ArregloFotos
                        setFoto={setJuntaEscolar}
                      />





                    </div> */}
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
              className="w-full mt-1 h-16 border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
              value={historia}
              onChange={(e) => setHistoria(e.target.value)}
            ></textarea>

            <section className="mt-3 block border-2 rounded-xl md:flex h-60 gap-5 ">
              <div className="w-full">
                <div className="lg:w-full rounded-xl px-2">

                  {/* <ArregloFotos
                    foto={fotos}
                    setFoto={setFotos}
                  /> */}


                  
                </div>
              </div>
            </section>

            <div className=" h-60 lg:w-full text-center">
              <h3 className="uppercase font-semibold text-gray-600 mt-3">
                Puntos (Cordenadas)
              </h3>
              <div className="rounded-xl mt-1 h-[60%]">
                {/* <MapaAgregar
                  setCoordenada_x={setCoordenada_x}
                  setCoordenada_y={setCoordenada_y}
                /> */}
              </div>
            </div>
          </section>
        </section>
        <button
          type="submit"
          className="w-full mt-14 md:mt-6 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold hover:bg-primary-900/90"
        >
          Crear nueva Unidad Educativa
        </button>
      </form>
    </div>
  );
};

export default FormEditarUE;
