import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
// import FormTipoApoyo from "./FormTipoApoyo";
import MapaAgregar from "../UnidadesEducativas/Mapas/MapaAgregar";
import Swal from "sweetalert2";
import ArregloFotos from "../../components/Encabezado_Listas/UnidadesEducativas/ArregloFotos";
import { nuevoCentroSalud } from "../../api/CentroSalud";
// import { createURLFotos } from "../../../api/ArchivoFotos";

const CentroSalud_Crear = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [coordenada_x, setCoordenada_x] = useState(-63.1351584);
  const [coordenada_y, setCoordenada_y] = useState(-17.8008285);
  const [direccion, setDireccion] = useState("");
  const [uv, setUv] = useState("");
  const [horario, setHorario] = useState("");
  const [nivel, setNivel] = useState(0);

  const [videoUrl, setVideoUrl] = useState("");
  const [paginawebUrl, setPaginawebUrl] = useState("");
  const [fotos, setFotos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      const response = await nuevoCentroSalud(
        nombre,
        coordenada_x,
        coordenada_y,
        direccion,
        uv,
        horario,
        nivel,
        videoUrl,
        paginawebUrl,
        fotos,
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Centro Salud Creado Exitosamente!",
        showConfirmButton: false,
        timer: 2500,
      });

      navigate("/inicio/centrosalud");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error!",
      });
      console.error("Error al crear Centro Salud: ", error);
    }
  };


  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100/50 rounded-xl shadow-xl w-[100%] lg:w-[85%] p-4 md:px-8"
      >
        <h2 className="text-center font-bold text-3xl text-gray-700">
          Agregar Centro Salud
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
                <p className="mt-3 uppercase font-semibold text-gray-600">Uv</p>
                <input
                  className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                  type="text"
                  value={uv}
                  onChange={(e) => setUv(e.target.value)}
                />

                <div className="">
                  <div className="w-full mt-1">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Video
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      type="text"
                      onChange={(e) => setVideoUrl(e.target.value)}
                    />
                  </div>
                  <div className="w-full mt-3">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Horario
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      type="text"
                      onChange={(e) => setHorario(e.target.value)}
                    />
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Nivel
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      type="number"
                      onChange={(e) => setNivel(e.target.value)}
                    />
                  </div>

                  <div className="w-full mt-3">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Direccion
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      type="text"
                      onChange={(e) => setDireccion(e.target.value)}
                    />

                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      pagina Web
                    </p>
                    <input
                      className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
                      type="text"
                      onChange={(e) => setPaginawebUrl(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full sm:w-[55%] xl:w-[60%]">
            <section className="mt-3 block border-2 rounded-xl md:flex h-60 gap-5 ">
              <div className="w-full">
                <div className="lg:w-full rounded-xl px-2">
                  <ArregloFotos foto={fotos} setFoto={setFotos} />
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
          Crear Nuevo Centro Salud
        </button>
      </form>
    </div>
  );
};

export default CentroSalud_Crear;
