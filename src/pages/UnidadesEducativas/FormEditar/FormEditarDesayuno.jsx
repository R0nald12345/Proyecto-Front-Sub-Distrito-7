import {useState,useEffect} from 'react'
import axios from 'axios'

const FormEditarDesayuno = ({id}) => {

    const [cantidadDesayuno, setCantidadDesayuno] = useState(0);
    const [nombreDesayuno, setNombreDesayuno] = useState("");
    const [fechaDesayuno, setFechaDesayuno] = useState(0);
    const [nombreEntregaDesayuno, setNombreEntregaDesayuno] = useState("");
  
    useEffect(() => {
        const fetchingExtraerDatosDesayuno=async(id)=>{
            try{
                const baseUrl = import.meta.env.VITE_BASE_URL;
                const url = baseUrl + '/desayunos';
                const datosDesayuno = await axios.get(url);
                setCantidadDesayuno(datosDesayuno.data[id].cantidad);
                setFechaDesayuno(datosDesayuno.data[id].fecha);
                setNombreEntregaDesayuno(datosDesayuno.data[id].nombreEntrega);
                setNombreDesayuno(datosDesayuno.data[id].nombre);

                // console.log(datosDesayuno.data[1].nombre);
                
            }catch(error){  
                console.log('Sucedio un error al extraer datos de  Desayunos ', error);
            }

        }

        fetchingExtraerDatosDesayuno(id);
    }, [ ])
      
    const handleNombreDesayuno = (e) => {
        setNombreDesayuno(e.target.value);
    }
    const handleNombreEntregaDesayuno = (e) => {
        setNombreEntregaDesayuno(e.target.value);
    }
    const handleCantidadDesayuno = (e) => {
        setCantidadDesayuno(e.target.value);
    }
    const handleFechaDesayuno = (e) => {
        setFechaDesayuno(e.target.value);
    }
    
  return (
    <div>
       <p className='uppercase font-semibold text-gray-600 mt-6 mb-1 text-center'>Desayuno</p>
        <section className='border border-black/50 rounded-lg px-5 py-3'>
            <div className='flex justify-between gap-1'>
                <div className='w-1/2'>
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Nombre</p>
                    <input 
                        type='text'
                        className='w-full border border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                        value={nombreDesayuno}
                        onChange={handleNombreDesayuno}
                    />
                </div>

                <div className='w-1/2'>

                    <p className='uppercase font-semibold text-gray-600 mt-1'>Fecha</p>
                    <input
                        className='w-full border border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                        value={fechaDesayuno}
                        onChange={handleFechaDesayuno}
                    />

                </div>
            </div>

            <div className='flex'>
                <div className='w-3/4'>
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Nombre Entrega</p>
                    <input
                        type='text'
                        className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2 bg-gray-100'
                        value={nombreEntregaDesayuno}
                        onChange={handleNombreEntregaDesayuno}
                                            
                    /> 
                                            
                </div>

                    <div className='w-1/4'>
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Cantidad</p>
                    <input 
                        className='w-full border border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                        type='number'
                        value={cantidadDesayuno}
                        onChange={handleCantidadDesayuno}
                        
                    />

                </div>

            </div>

        </section> 
    </div>
  )
}

export default FormEditarDesayuno
