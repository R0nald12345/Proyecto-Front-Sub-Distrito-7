import {useState,useEffect} from 'react'
import Lista_ApoyoSocial from '../../Listas/UnidadesEducativas/Lista_ApoyoSocial';
import { useParams } from 'react-router-dom';

const Encabezado_ApoyoSocial = () => {
  const { id } = useParams();

  const [datosDesayuno, setDatosDesayuno] = useState([]);
  const [datosDatoGeneralApoyoSocial, setDatoGeneralApoyoSocial] = useState([]);
  const [datoApoyoSocial, setDatoApoyoSocial] = useState([]);


  useEffect(() => {
      const fetchingDatoApoyoSocial = async () => {
          try {
              const baseUrl = import.meta.env.VITE_BASE_URL;
              const url = baseUrl + `/apoyosocial`;
              const datosApoyoSocial = await axios.get(url);

              setDatoGeneralApoyoSocial(datosApoyoSocial.data);

              const datosFiltrados = datosApoyoSocial.data.filter(
                  (dato) => dato.idUnidadeducativa == id
              );
              setDatoApoyoSocial(datosFiltrados);

          } catch (error) {
              console.log("Error al cargar los datos Apoyo Social" + error);
          }

      }
      fetchingDatoApoyoSocial();

  }, [id])


  return (
      <>
          <h3>Apoyo Social</h3>

          <section className='border border-black/50 rounded-lg px-2 py-3'>
              <section className='w-full'>
                  <ul className='grid grid-cols-11 bg-white gap-5 mb-3 rounded-xl shadow-lg'>
                      <li className=" font-semibold text-start col-span-3 px-3 py-2 ">Fecha</li>
                      <li className=" font-semibold text-start col-span-3 px-3 py-2 ">NombreEntrega</li>
                      <li className=" font-semibold text-start col-span-2 px-3 py-2 ">Nombre</li>
                      <li className=" font-semibold text-center col-span-3 px-2 py-2">Cantidad</li>
                  </ul>
              </section>

              <section className="w-full max-h-96 overflow-y-auto" style={{ "scrollbarWidth": "none" }}>
                  { datosDesayuno.map((element) => (
                          <Lista_ApoyoSocial
                              key={element.id}
                              fecha={element.fecha}
                              nombreEntrega={element.nombreEntrega}
                              nombre={element.nombre}
                              cantidad={element.cantidad}
                          />
                      ))
                  }
              </section>
          </section>
      </>
  )
}

export default Encabezado_ApoyoSocial