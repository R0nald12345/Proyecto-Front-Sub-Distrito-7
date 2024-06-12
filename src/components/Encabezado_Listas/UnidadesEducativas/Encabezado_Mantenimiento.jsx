import {useState,useEffect} from "react";
import {useParams} from 'react-router-dom'

const Encabezado_Mantenimiento = () => {
  const { id } = useParams();
  
  const [datosGeneralMantenimiento, setDatosGeneralMantenimiento] = useState(
    []
  );
  const [datosMantenimiento, setDatosMantenimiento] = useState([]);

  // const [titulo, setTitulo] = useState("");
  // const [fecha, setFecha] = useState("");
  // const [encargado, setEncargado] = useState("");
  // const [empresa, setEmpresa] = useState("");

  useEffect(() => {
    const fetchingDatosMantenimiento = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + `/mantenimiento`;
        const datosMantenimiento = await axios.get(url);
        console.log(datosMantenimiento.data);

        setDatosGeneralMantenimiento(datosMantenimiento.data);

        // Filtrar los datos según el idUnidadeducativa igual al id pasado como prop
        const datosFiltrados = datosMantenimiento.data.filter(
          (dato) => dato.idUnidadeducativa == id
        );
        console.log(datosFiltrados);
        setDatosMantenimiento(datosFiltrados);
      } catch (error) {
        console.log("Error al cargar los datos Mantenimiento" + error);
      }
    };
    fetchingDatosMantenimiento();
  }, [id]);

  return (
    <>
      <h4>Mantenimiento</h4>
      <section className="border border-black/50 rounded-lg px-2 py-3">
        <div className="w-full">
          <ul className="grid grid-cols-11 bg-white gap-5 mb-3 rounded-xl shadow-lg">
            <li className=" font-semibold text-start col-span-3 px-3 py-2 ">
              Fecha
            </li>
            <li className=" font-semibold text-start col-span-3 px-3 py-2 ">
              Titulo
            </li>
            <li className=" font-semibold text-start col-span-2 px-3 py-2 ">
              Encargado
            </li>
            <li className=" font-semibold text-center col-span-3 px-2 py-2">
              Empresa
            </li>
          </ul>
        </div>

        <section
          className="w-full max-h-96 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {datosMantenimiento.map((element) => {
            return (
              <ListaVistaMantenimiento
                key={element.id}
                fecha={element.fecha}
                titulo={element.titulo}
                encargado={element.encargado}
                empresa={element.empresa}
              />
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Encabezado_Mantenimiento;
