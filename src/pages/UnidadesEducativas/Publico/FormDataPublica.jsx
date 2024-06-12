import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jsPDF from "jspdf";

import "jspdf-autotable";
import MapaMostrar from "../Mapas/MapaMostrar";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const FormDataPublica = () => {
  const { id } = useParams();

  const [nombreUE, setNombreUE] = useState("");
  const [direccionUE, setDireccionUE] = useState("");
  const [descripcionHistoria, setDescripcionHistoria] = useState("");

  const [horaGestion, setHoraGestion] = useState("");
  const [nroGestion, setNroGestion] = useState("");
  const [nombreDirectorGestion, setNombreDirectorGestion] = useState("");
  const [imagenGestion, setImagenGestion] = useState(null);

  const [tipoColegio, setTipoColegio] = useState("");
  const [tipoInfraestructura, setTipoInfraestructura] = useState("");
  const [tipoTurno, setTipoTurno] = useState("");

  const [coordenadaX, setCoordenadaX] = useState(0);
  const [coordenadaY, setCoordenadaY] = useState(0);

  const [cantidadDesayuno, setCantidadDesayuno] = useState(0);
  const [nombreDesayuno, setNombreDesayuno] = useState("");
  const [fechaDesayuno, setFechaDesayuno] = useState(0);
  const [nombreEntregaDesayuno, setNombreEntregaDesayuno] = useState("");

  const [datoGeneralUE, setDatoGeneralUE] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchingExtraDatoId = async (id) => {
      try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + `/unidadeseducativas/+${id}`;
        const datosUE = await axios.get(url);
        // console.log(datosTipoColegio.data.nombre);
        setNombreUE(datosUE.data.nombre);
        setDireccionUE(datosUE.data.direccion);
        setCoordenadaX(datosUE.data.coordenada_x);
        setCoordenadaY(datosUE.data.coordenada_y);
        setDescripcionHistoria(datosUE.data.historia);
        setImagenGestion(datosUE.data.idGestion.juntaescolar);
        setNombreDirectorGestion(datosUE.data.idGestion.director);
        setHoraGestion(datosUE.data.idGestion.horario);
        setNroGestion(datosUE.data.idGestion.numero);
        console.log(datosUE.data);

        setTipoTurno(datosUE.data.idTurno.nombre);

        setTipoColegio(datosUE.data.idTipoColegio.nombre);
        setTipoInfraestructura(datosUE.data.idInfraestructura.nombre);

        console.log("------------------");
        console.log(datosUE.data.idTipoColegio.nombre);
        console.log(datosUE.data.idInfraestructura.nombre);

        // console.log(coordenadaX);
      } catch (error) {
        console.log("Error al cargar Datos de Formulario por Id", error);
      }
    };
    fetchingExtraDatoId(id);
  }, []);

  useEffect(() => {
    const fetchingDatosGeneralUE = async () => {
      try {
        const response = await getDatoGeneralUE();
        console.log(response);
        datoGeneralUE(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingDatosGeneralUE();
  }, []);

  const generarPDF = () => {
    const doc = new jsPDF();

    // doc.setMargins(1, 1); // Configurar los márgenes antes de agregar contenido al PDF
    doc.setFontSize(12);
    // doc.setTextColor('justify'); // Justificar el texto

    // const maxWidth = 175;
    // const lines = doc.splitTextToSize(`${descripcionHistoria}`, maxWidth);

    doc.text("Informe", 95, 20);

    //Crear una tabla para los detalles de los factura

    const columns1 = ["Nombre", "Direccion"];
    const data1 = [[nombreUE, direccionUE]];

    doc.autoTable({
      startY: 30,
      head: [columns1],
      body: data1,
    });

    const columns2 = ["Historia Unidad Educativa"];
    const data2 = [[descripcionHistoria]];

    doc.autoTable({
      startY: 50,
      head: [columns2],
      body: data2,
      styles: { fillColor: [17, 115, 0] },
    });

    const columns3 = ["Tipo Colegio", "Tipo Turno", "Tipo InfraEstructura"];
    const data3 = [[tipoColegio, tipoTurno, tipoInfraestructura]];

    doc.autoTable({
      startY: 30,
      head: [columns3],
      body: data3,
      styles: { fillColor: [17, 115, 0] },
    });

    const columns4 = ["Horario", "Numero", "Director"];
    const data4 = [[horaGestion, nroGestion, nombreDirectorGestion]];

    doc.autoTable({
      startY: 140,
      head: [columns4],
      body: data4,
      styles: { fillColor: [17, 115, 0] },
    });

    const columns5 = ["Nombre Comida", "Fecha", "Nombre Entrega", "Cantidad"];
    const data5 = [
      [nombreDesayuno, fechaDesayuno, nombreEntregaDesayuno, cantidadDesayuno],
    ];

    doc.autoTable({
      startY: 160,
      head: [columns5],
      body: data5,
      styles: { fillColor: [17, 115, 0] },
    });

    doc.save(`factura_${1}.pdf`);
  };

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600",
      thumbnail: "https://picsum.photos/id/1018/250/150",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600",
      thumbnail: "https://picsum.photos/id/1015/250/150",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600",
      thumbnail: "https://picsum.photos/id/1019/250/150",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <form className="bg-gray-100/50 rounded-xl shadow-xl w-[95%] p-8">
        {/* parte Superior */}
        <section className="w-full flex gap-5">
          {/* Parte Lateral angosto Izquierdp*/}
          <section className="w-[45%]">
            {/* F  O  T  O  G  R  A  F  I  A  */}
            <ImageGallery items={images} />
            {/* <FotosMultiple */}

            {/* // id={datoGeneralUE.fotos.id}
                        id={1}
                        // id
                    /> */}

            {/* Historia */}
            <div className="h-3/5">
              <p className="uppercase font-semibold text-gray-600 mt-1">
                Historia
              </p>
              <p
                className="w-full border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
                style={{ height: "430px" }}
              >
                {descripcionHistoria}
              </p>
            </div>
          </section>

          {/* Parte Lateral Ancha Derecho*/}
          <section className="w-[55%]">
            {/* Parte Superior*/}
            <section className="flex h-40 gap-5 ">
              <div className="w-3/5">
                <p className="uppercase font-semibold text-gray-600">Nombre</p>
                {/* <input
                                type='text'
                                className='py-1 rounded-xl pl-3 mb-4 w-full border-gray-400 border-2'
                                placeholder='Nombre de la UE'
                            /> */}

                <p className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1">
                  {nombreUE}
                </p>

                <p className="uppercase font-semibold text-gray-600">
                  Dirección
                </p>
                <p
                  className="py-1 rounded-xl pl-3 mb-4 w-full border-gray-400 border-2 bg-gray-200"
                  style={{ height: "60px" }}
                >
                  {direccionUE}
                </p>
              </div>

              <div className="w-2/5 flex flex-col">
                <div className="flex gap-3 mb-7">
                  <div className="w-1/2">
                    <p className="font-semibold text-gray-600 uppercase">
                      Tipo Colegio
                    </p>
                    <p className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200">
                      {/* {tipoColegio} */}
                      Privado
                    </p>
                  </div>

                  <div className="w-1/2">
                    <p className="font-semibold text-gray-600 uppercase">
                      Tipo Turno
                    </p>
                    <p className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200">
                      {tipoTurno}
                    </p>
                  </div>
                </div>

                <div className="">
                  <p className="font-semibold text-gray-600 uppercase">
                    Tipo Infraestrcutura
                  </p>
                  <p className="py-1 rounded-xl pl-3 mb-4 w-full border-gray-400 border-2 bg-gray-200">
                    {/* {tipoInfraestructura} */}
                    Convenio
                  </p>
                </div>
              </div>
            </section>

            <section className=" w-full">
              <div className="w-full">
                <p className="uppercase font-semibold text-gray-600 mt-3 mb-1 text-center">
                  Gestión
                </p>
                <section className="flex gap-8 border border-black/50 rounded-lg px-3 py-3">
                  <section className="flex-col gap-5 w-[40%] ">
                    <div className="w-full mt-1">
                      <p className="uppercase font-semibold text-gray-600 mt-1">
                        Horario
                      </p>
                      <p className="w-full border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100">
                        {horaGestion}
                      </p>
                    </div>
                    <div className="w-full mt-5">
                      <p className="uppercase font-semibold text-gray-600 mt-1">
                        Número
                      </p>
                      <p className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100">
                        {nroGestion}
                      </p>
                    </div>

                    <div className="w-full mt-5">
                      <p className="uppercase font-semibold text-gray-600 mt-1">
                        Director
                      </p>
                      <p className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100">
                        {nombreDirectorGestion}
                      </p>
                    </div>
                  </section>

                  <section className="w-[60%]">
                    <p className="uppercase font-semibold text-gray-600 mt-1">
                      Junta Escolar
                    </p>
                    <img
                      src={imagenGestion}
                      className="border-2 rounded-xl  border-gray-400 object-cover"
                      style={{ height: "230px" }}
                    />
                  </section>
                </section>
              </div>

              <div className="mt-1">
                <h3 className="uppercase font-semibold text-gray-600 mt-3 text-center">
                  Puntos (Cordenadas)
                </h3>
                <div className=" h-52 rounded-xl mt-1">
                  <MapaMostrar datoX={coordenadaX} datoY={coordenadaY} />
                </div>
              </div>
            </section>
          </section>
        </section>

        <section className="flex w-full mt-3 gap-5">
          <section className="w-1/2">

            <p className="uppercase font-semibold text-gray-600 mt-2 mb-1 text-center">
              Informacion de :
            </p>

            <div className="flex justify-around w-full border border-black/50 rounded-md mt-2 py-3">
              <button
                className="bg-primary-100 text-xl text-white font-semibold px-5 py-2 rounded-xl"
                onClick={() => navigate(`/unidadeducativa/desayuno/${id}`)}
              >
                Desayuno
              </button>

              <button
                className="bg-primary-100 text-xl text-white font-semibold px-5 py-2 rounded-xl"
                onClick={() => navigate(`/unidadeducativa/mantenimiento/${id}`)}
              >
                Mantenimiento
              </button>
            </div>
          </section>

          <section className="w-1/2">
            <p className="uppercase font-semibold text-gray-600 mt-2 mb-1 text-center">
              Tipo de Apoyo
            </p>
            <div className="flex justify-around w-full border border-black/50 rounded-md mt-2 py-3">
              <button
                className="bg-primary-100 text-xl text-white font-semibold px-5 py-2 rounded-xl"
                onClick={() => navigate(`/unidadeducativa/apoyo-social/${id}`)}
              >
                Social
              </button>

              <button
                className="bg-primary-100 text-xl text-white font-semibold px-5 py-2 rounded-xl"
                onClick={() =>
                  navigate(`/unidadeducativa/apoyo-gubernamental/${id}`)
                }
              >
                Gubernamental
              </button>
            </div>

          </section>

        </section>

        {/* Seleccion debajo */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/unidadeducativa")}
            type="submit"
            className="w-1/2 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold mt-5 hover:bg-primary-900/90"
          >
            Regresar
          </button>

          <button
            onClick={generarPDF}
            className="w-1/2 bg-red-600 rounded-xl text-white uppercase font-semibold text-2xl mt-5 py-3 hover:bg-red-900"
          >
            Generar PDF
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDataPublica;
