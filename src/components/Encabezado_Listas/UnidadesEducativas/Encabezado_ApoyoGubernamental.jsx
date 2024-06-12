import {useState,useEffect} from "react";
import {useParams} from 'react-router-dom';

const Encabezado_ApoyoGubernamental = () => {
  const { id } = useParams();
  const [cantidad, setCantidad] = useState(0);
  const [nombreEntrega, setNombreEntrega] = useState("");
  const [fecha, setFecha] = useState("");

  const [tipoApoyo, setTipoApoyo] = useState([]);

  useEffect(() => {
    setTipoApoyo([
      { id: 1, nombre: "Pupitre" },
      { id: 2, nombre: "Camara" },
      { id: 3, nombre: "Fumigación" },
      { id: 4, nombre: "Talleres" },
    ]);
  }, []);

  useEffect(() => {
    const fetchingDatoGubernamental = async (id) => {
      try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + `/apoyogubernamental/+${id}`;
        const datosGubernamentales = await axios.get(url);
        //console.log(datosGubernamentales.data); Esta Correcto
      } catch (error) {
        console.log("Error al cargar los datos Gubernamentales" + error);
      }
    };
    fetchingDatoGubernamental(id);
  }, []);

  return (
    <>
      <h4>Apoyo Gubernamental</h4>

      <select className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-3">
        {tipoApoyo.map((option) => (
          <option value={option.nombre} key={option.id}>
            {option.nombre}
          </option>
        ))}
      </select>

      <section className="border border-black/50 rounded-lg px-2 py-3">
        <div className="w-full">
          <ul className="w-full flex bg-white gap-5 mb-3 rounded-xl shadow-lg">
            <li className=" font-semibold text-start w-1/3  px-3 py-2 ">
              Fecha
            </li>
            <li className=" font-semibold text-start w-1/3 px-3 py-2 ">
              Nombre Entrega
            </li>
            <li className=" font-semibold text-start w-1/3 px-3 py-2 ">
              Cantidad
            </li>
          </ul>

          <section
            className="w-full max-h-96 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <ul className="w-full flex bg-white gap-5 mb-3 rounded-xl shadow-lg">
              <li className=" font-semibold text-start w-1/3 px-3 py-2 ">
                03/04/2024
              </li>
              <li className=" font-semibold text-start w-1/3 px-3 py-2 ">
                Ronald Camino Puma
              </li>
              <li className=" font-semibold text-start w-1/3 px-3 py-2 ">
                40 Sillas
              </li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
};

export default Encabezado_ApoyoGubernamental;
