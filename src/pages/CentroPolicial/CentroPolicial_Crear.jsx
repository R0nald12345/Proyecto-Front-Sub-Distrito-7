import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearCentroPolicial } from "../../api/CentroPolicial";
import MapaAgregar from "../UnidadesEducativas/Mapas/MapaAgregar";
import Lista_ServicioPublico from "../../components/Listas/CentroPolicial/Lista_ServicioPublico";
import Modal_Crear_ServicioPublico from "../../components/Modal/CentroPolicial/Modal_Crear_ServicioPublico";
import Modal_Actualizar_ServicioPublico from "../../components/Modal/CentroPolicial/Modal_Actualizar_ServicioPublico";
import "../../../src/styles.css";
import { createURLFotos } from "../../api/ArchivoFotos";

const CentroPolicial_Crear = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [encargado, setEncargado] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [coordenada_x, setCoordenada_x] = useState(0);
  const [coordenada_y, setCoordenada_y] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [uv, setUv] = useState("");
  const [horario, setHorario] = useState("");
  const [fotoUrl, setFotoUrl] = useState("");
  const [serviciosPublicos, setServiciosPublicos] = useState([]);


  const [openModalCreateServicioPublico, setOpenModalCreateServicioPublico] =
    useState(false);
  const [
    openModalActualizarServicioPublico,
    setOpenModalActualizarServicioPublico,
  ] = useState(false);
  const [selectedServicioPublico, setSelectedServicioPublico] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await crearCentroPolicial(
        nombre,
        encargado,
        coordenada_x,
        coordenada_y,
        direccion,
        uv,
        horario,
        fotoUrl,
        numeroTelefono,
        serviciosPublicos
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Centro Policial Creado Exitosamente!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/inicio/centro_policial");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error!",
      });
      console.error("Error al crear el Centro Policial: ", error);
    }
  };

  useEffect(() => {
    const convertirCloudinary = async () => {
      if (fotoUrl && typeof fotoUrl !== "string") {
        try {
          const formData = new FormData();
          formData.append("files", fotoUrl);
          console.log("DataFoto before sending to API:", formData);
          const response = await createURLFotos(formData);

          setFotoUrl( response.imageUrls[0] );

        } catch (error) {
          console.error("Error", error);
        }
      }
    };
    convertirCloudinary();
  }, [fotoUrl]);


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
        className="bg-gray-100/50 rounded-xl shadow-xl w-[100%] lg:w-[65%] p-4 md:px-8"
      >
        <h2 className="text-center font-bold text-3xl text-gray-700">
          Agregar Nuevo Centro Policial
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
                <p className="mt-3 uppercase font-semibold text-gray-600">
                  Encargado
                </p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  value={encargado}
                  onChange={(e) => setEncargado(e.target.value)}
                />

                <p className="mt-3 uppercase font-semibold text-gray-600">
                  Horario
                </p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  type="text"
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                />

                <div className="">
                  <div className="w-full mt-1">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Uv
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      onChange={(e) => setUv(e.target.value)}
                    />
                  </div>
                  <div className="w-full mt-3">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Número Teléfono
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      type="number"
                      onChange={(e) => setNumeroTelefono(e.target.value)}
                    />
                  </div>

                  <div className="w-full mt-3">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Direccion
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      onChange={(e) => setDireccion(e.target.value)}
                    />
                  </div>

                  <p className="uppercase font-semibold text-gray-600 mt-3">
                    Foto Url
                  </p>

                  <input
                    className="border-2 rounded-xl border-gray-400 w-[59%] md:w-full"
                    type="file"
                    onChange={(e) => setFotoUrl(e.target.files[0])} // Actualiza el estado con el archivo seleccionado
                  />

                </div>
              </div>
            </div>
          </section>

          <section className="w-full sm:w-[55%] xl:w-[60%]">
            <section className="mt-3 flex justify-center  border-2 rounded-xl md:flex  gap-5 ">
              <div className="w-[100%]">
                <div className="lg:w-full rounded-xl px-2">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenModalCreateServicioPublico(
                        !openModalCreateServicioPublico
                      )
                    }
                    className="w-full mt-2 bg-primary-300 rounded-xl text-white uppercase py-1 text-xl font-semibold hover:bg-primary-900/90"
                  >
                    + Agregar Servicio Público
                  </button>
                  <div className="flex bg-white mt-2 py-2 rounded-md">
                    <h4 className=" w-[80%] text-start lg:text-center px-2  uppercase font-semibold ">
                      Descripcion
                    </h4>
                    <h4 className="w-[20%] hidden lg:block text-center uppercase font-semibold">
                      Acciones
                    </h4>
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
              </div>
            </section>

            <div className=" h-60 lg:w-full text-center">
              <h3 className="uppercase font-semibold text-gray-600 mt-3">
                Puntos (Cordenadas)
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
          className="w-full mt-14 md:mt-6 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold hover:bg-primary-900/90"
        >
          Crear Centro Policial
        </button>
      </form>
    </div>
  );
};

export default CentroPolicial_Crear;
