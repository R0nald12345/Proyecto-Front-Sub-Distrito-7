import {useState,useEffect} from 'react'
import axios from 'axios'
// import { obtenerDatosUnidadEducativa } from '../../../apiServices/apiServices';

const FormEditarGestion = ({id}) => {
    const [horaGestion, setHoraGestion] = useState("");
    const [nroGestion, setNroGestion] = useState("");
    const [nombreDirectorGestion, setNombreDirectorGestion] = useState("");
    const [imagenGestion, setImagenGestion] = useState(null);
    const [datoGeneral, setDatoGeneral] = useState([]);

    // useEffect(() => {
    //     const fetchingExtraDatoId= async(id)=>{
    //       try{
    //           const baseUrl = import.meta.env.VITE_BASE_URL;
    //           const url = baseUrl + `/unidadeseducativas/+${id}`;
    //           const datosUE = await axios.get(url);
    //           setImagenGestion(datosUE.data.gestion.juntaescolar);
    //           setNombreDirectorGestion(datosUE.data.gestion.director);
    //           setHoraGestion(datosUE.data.gestion.horario);
    //           setNroGestion(datosUE.data.gestion.numero);
    //       }catch(error){
    //           console.log('Error al cargar Datos de Formulario por Id',error);
    //       }
    //     }
    //     fetchingExtraDatoId(id);
    // }, [])

  
    const handleHoraChange = (e) => {
        setHoraGestion(e.target.value);
    }

    const handleNroChange = (e) => {
        setNroGestion(e.target.value);
    }

    const handleNombreDirectorChange = (e) => {
        setNombreDirectorGestion(e.target.value);
    }

    
  return (
    <div>
       <p className='uppercase font-semibold text-gray-600 mt-6 mb-1 text-center'>Gestión</p>
        <section className='border border-black/50 rounded-lg px-5 py-3'>
            <div className=''>
                <p className='uppercase font-semibold text-gray-600 mt-1'>Horario</p>
                <input 
                    className='w-full border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                    value={horaGestion}
                    onChange={handleHoraChange}
                />
            </div>

            <div className='w-full'>
                <p className='uppercase font-semibold text-gray-600 mt-1'>Número</p>
                <input
                    type='text'
                    className='w-full border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                    value={nroGestion}
                    onChange={handleNroChange}
                />
            </div>

            

            <div>
                <p className='uppercase font-semibold text-gray-600 mt-1'>Director</p>
                <input
                    type='text'
                    value={nombreDirectorGestion}
                    className='w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                    style={{height:'60px'}}
                    onChange={handleNombreDirectorChange}
                />
            </div>

            <div>

                <p className='uppercase font-semibold text-gray-600 mt-1'>Junta Escolar</p>
                <img
                                          // src={imagenGestion}
                    className='w-full border-2 rounded-xl border-gray-400 object-cover'
                    style={{ height: '260px' }}    
                /> 
            </div>
        </section>
    </div>
  )
}

export default FormEditarGestion
