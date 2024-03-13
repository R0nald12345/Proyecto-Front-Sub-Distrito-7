import axios from 'axios'
import {useState,useEffect} from 'react'
import { obtenerDatosUnidadEducativa, obtenerTipoColegio } from '../../../apiServices/apiServices'
import { useNavigate } from 'react-router-dom'


const FormDataPublica = () => {

    const [tipoColegio, setTipoColegio] = useState([]);
    const [colegiosPublicos, setColegiosPublicos] = useState([]);

    const navigate = useNavigate();

    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await obtenerTipoColegio();
            setTipoColegio(data);
            } catch (error) {
                console.error("Error al obtener datos del tipo de colegio:", error);
                // Aquí podrías realizar alguna acción de manejo de errores, como mostrar un mensaje al usuario
            }
        };
    
    fetchData();
    }, []);


    useEffect(() => {
      const seleccionUnidadEducativa = async()=>{
            try{
                const datos = await obtenerDatosUnidadEducativa()
                setColegiosPublicos(datos);
            }catch(error){
                console.log("Error al obtener datos de los Colegios",error);
            }
      }
      seleccionUnidadEducativa();
      
    }, [])

    const colegiosPublicosFiltrados = colegiosPublicos.filter(colegio => colegio.idTipocolegio === 1);
 
    // useEffect(() => {
    //     const seleccionUnidadPublica = async () => {
    //         try {
    //             // Filtrar los colegios que son públicos
    //             const colegiosPublicos = tipoColegio.filter(colegio => colegio. === "Publico");
                
    //             // Actualizar el estado con los colegios públicos
    //             setColegiosPublicos(colegiosPublicos);
    //           } catch(error) {
    //               console.error("Error al filtrar colegios públicos:", error);
    //               // Aquí podrías realizar alguna acción de manejo de errores, como mostrar un mensaje al usuario
    //           }
    //     };
      
    
    // }, [])
    

      
    // seleccionUnidadEducativa();
    
    console.log(tipoColegio);
    console.log('----------------');
    console.log(colegiosPublicosFiltrados);

    
    return (
        <div className='flex justify-center items-center'>
          <form className='bg-gray-100/50 rounded-xl shadow-xl w-[65%] p-8'>
            {/* Parte Superior */}
            <section className='flex h-40'>
                <div className='bg-red-200 w-1/4'>
                    <img/>
                    foto
                </div>
    
                <div className='w-1/2 mx-5'>
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Nombre</p>
                    <input
                        type='text'
                        className='py-1 rounded-xl pl-3 mb-4 w-full border-gray-400 border-2'
                        placeholder='Nombre de la UE'
                    />
    
                    <p className='uppercase font-semibold text-gray-600'>Dirección</p>
                    <input
                        type='text'
                        className='py-1 rounded-xl pl-3 mb-4 w-full border border-gray-400 border-2'
                        placeholder='Indica la Direccion de la UE'
                    />
                </div>
                <div className='bg-red-300 w-1/4 flex flex-col items-center p-1'>
                    <p className='uppercase font-semibold text-gray-600 mt-1'>
                        Puntos (Cordenadas)
                    </p>
                    <section className='w-full flex flex-col justify-between'>
                        <div className='bg-green-400 h-20  rounded-xl'>
                            Mapa
                        </div>
                        <button className='bg-primary-100/80 text-white font-semibold w-full py-2 rounded-xl mt-2'>Ampliar</button>
                    </section>
    
                </div>
            </section>
    
            {/* HIstoria y Gestio */}
            <section className='flex justify-center gap-5'>
                <section className='w-1/2'>
                    <p className='uppercase font-semibold text-gray-600 mt-6 mb-1 text-center'>Historia</p>
                    <section className='border border-black/50 rounded-lg px-5 py-3'>
                        <p className='uppercase font-semibold text-gray-600 mt-1'>Nombre</p>
                        <input
                            type='text'
                            className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2'
                            placeholder='Título de la Historia'
                        />
                        <p className='uppercase font-semibold text-gray-600 mt-1'>Fecha</p>
                        <input
                            type='date'
                            className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2'
                            placeholder='Título de la Historia'
                        />
                        <p className='uppercase font-semibold text-gray-600 mt-1'>Descripcion</p>
                        <textarea 
                            className='w-full border border-gray-400 border-2 rounded-xl py-1 px-2'
                            placeholder='Agerar un contexto de la Historia '
                        >
    
                        </textarea>
    
                    </section>
                </section>
                <section className='w-1/2'>
                <p className='uppercase font-semibold text-gray-600 mt-6 mb-1 text-center'>Gestión</p>
                <section className='border border-black/50 rounded-lg px-5 py-3'>
                    <div className='flex justify-between gap-1'>
                        <div className='w-1/2'>
                            <p className='uppercase font-semibold text-gray-600 mt-1'>Horario</p>
                            <input
                                type='time'
                                className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2'
                            />

                        </div>
                        <div className='w-1/2'>
                            <p className='uppercase font-semibold text-gray-600 mt-1'>Número</p>
                            <input
                                type='number'
                                className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2'
                                placeholder='Introduce Nro'
                            />
                        </div>
                    </div>
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Director</p>
                    <input
                        type='text'
                        className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2'
                        placeholder='Nombre del Director'
                    />
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Junta Escolar</p>
                    <textarea 
                        placeholder='Agrear un contexto sobre la junta escolar'
                        className='w-full border border-gray-400 border-2 rounded-xl py-1 px-2'>

                    </textarea>

                </section>
            </section>
    
                
            </section>

            <section className="flex gap-8 mt-5">
            <div className="w-1/3">
                <p className="text-center mb-2 font-semibold">Tipo Colegio</p>
                <p className='w-full rounded-xl py-1 pl-2 font-semibold   bg-white'>Privado</p>
            </div>

            <div className="w-1/3">
                <p className="text-center mb-2 font-semibold">Tipo Infraestrcutura</p>
                <p className='w-full rounded-xl py-1 pl-2 font-semibold bg-white'>Escuela</p>
            </div>
            
            <div className="w-1/3">
                <p className="text-center mb-2 font-semibold">Tipo Turno</p>
                <p className='w-full rounded-xl py-1 pl-2 font-semibold bg-white'>Noche</p>
            </div>
           
        </section>

    
            {/* Seleccion debajo */}
            <button
                onClick={()=>navigate('/unidadeducativa')}
                type='submit'
                className='w-full bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold mt-5 hover:bg-primary-900/90'
            >
                Regresar
            </button>
          </form>
        </div>
      )
}

export default FormDataPublica
