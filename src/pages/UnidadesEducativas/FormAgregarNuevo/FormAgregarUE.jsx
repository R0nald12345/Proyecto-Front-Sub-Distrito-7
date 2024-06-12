import {useState,useCallback} from 'react'
import FormTipos from './FormTipos'
import FormAgregarGestion from './FormAgregarGestion'
import FormAgregarDesayuno from './FormAgregarDesayuno'
import {Form, useNavigate} from 'react-router-dom'

import {useDropzone} from 'react-dropzone'
import FormMantenimiento from './FormMantenimiento'
import FormTipoApoyo from './FormTipoApoyo'
import MapaAgregar from '../Mapas/MapaAgregar'
import { useEffect } from 'react'
import { createDatoGeneralUE } from '../../../api/UnidadesEducativas'
// import FormApoyo from './FormApoyo'

const FormAgregarUE = () => {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState("")
    const [coordenada_x, setCoordenada_x] = useState(0);
    const [coordenada_y, setCoordenada_y] = useState(0);
    const [direccion, setDireccion] = useState("");	
    const [historia, setHistoria] = useState("");
    const [video, setVideo] = useState("");
    const [fotos, setFotos] = useState([]);

    const [idInfraestructura, setIdInfraestructura] = useState(0);
    const [idTipoColegio, setIdTipoColegio] = useState(0);
    const [idTurno, setIdTurno] = useState(0);
    const [idGestion, setIdGestion] = useState(0);



    const onDrop = useCallback(acceptedFiles => {
        // console.log(acceptedFiles[0]);
      }, [])
    const {getRootProps, getInputProps, isDragActive,acceptedFiles } = useDropzone({onDrop})


    const handleNombre=(e)=>{
        setNombre(e.target.value)
    } 

    const handleDireccion=(e)=>{
        setNombre(e.target.value)
    } 

    const handleSubmit=async(e)=>{
        // e.preventDefault();

        const formData = new FormData();
        formData.append('file',acceptedFiles[0]);
        formData.append('upload_preset','ml_default');
        formData.append('api_key','327959554798578');

        const resp = await fetch('https://api.cloudinary.com/v1_1/dnvnpkjp6/image/upload',{
            method:'POST',
            body: formData
        });
        const data = await resp.json();
        console.log(data);
    }

    useEffect(() => {
        const createDatosUE = async () => {
            await createDatoGeneralUE({
                nombre,
                coordenada_x,
                coordenada_y,
                direccion,
                historia, 
                video, 
                fotos: [], // Asegúrate de tener un estado para las fotos
                idInfraestructura,
                idTipoColegio,
                idTurno,
                idGestion,
            });
        }
          
        createDatosUE();
    }, [])
    

    return (
        <div className='flex justify-center items-center'>
          <form 
            // onSubmit={}   
            className='bg-gray-100/50 rounded-xl shadow-xl w-[100%] p-8'>

            {/* parte Superior */}
            <section className='w-full block gap-5'>
               

                <section className='xl:flex mb-4 gap-5'>
                    <section className='xl:w-1/3 md:flex lg:block'>

                        <div className='md:w-1/2 md:h-2/5 lg:w-full'>

                            <div
                                className='bg-red-400 h-1/6' 
                                {...getRootProps()}>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                    <p>Drop the files here ...</p> :
                                    <p>Arrastre una Imagen</p>
                                }
                            </div>

                            <div className='md:h-5/6'>
                                {
                                    acceptedFiles[0] && (
                                        <img
                                            className='object-contain w-full h-full'
                                            src= {URL.createObjectURL(acceptedFiles[0])} alt=''/>
                                    )
                                }

                            </div>

                        </div>

                        <div className='md:w-1/2 md:h-3/5 lg:w-full text-center'>
                            <h3 className='uppercase font-semibold text-gray-600 mt-3'>
                                Puntos (Cordenadas)
                            </h3>
                            <div className=' rounded-xl mt-1 h-[60%]'
                                // style={{height:''}}
                            >
                                <MapaAgregar
                                    setCoordenada_x={setCoordenada_x}
                                    setCoordenada_y={setCoordenada_y}
                                />
                            
                             </div>
                            
                        </div>


                    </section>  




                    {/* Parte Lateral Ancha Derecho*/}
                    <section className='w-full xl:w-2/3'>
                        {/* Parte Superior*/}
                        <section className='block md:flex h-40 gap-5 '>
                            <div className='w-3/5'>
                                <p className='uppercase font-semibold text-gray-600'>Nombre</p>
                           

                                <input
                                    type='text'
                                    className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'
                                    value={nombre}
                                    onChange={()=>setNombre()}
                                /> 
                                    
                
                                <p className='uppercase font-semibold text-gray-600'>Dirección</p>

                                <input
                                    className='py-1 rounded-xl pl-3 mb-4 w-full border-gray-400 border-2 bg-gray-200'
                                    value={direccion}
                                    style={{height:'60px'}} 
                                    onChange={()=>setDireccion()}
                                />
                            </div>

                            <div className='w-2/5 flex flex-col'>
                            <FormTipos/>
                            </div>
                            
                        </section>

                        <section className=' w-full block md:flex gap-5'>
                            
                            <div className='w-1/2'>
                                <FormAgregarGestion/>

                            </div>



                            <div className='w-1/2 flex-col'>

                                {/* <div className=''>
                                    <FormTipoApoyo/>
                                </div> */}

                                <div className='mt-5 '
                                    style={{height:'343px'}}
                                >
                                    <div className='text-center'
                                        style={{height:'287Px'}}
                                    >
                                    <h3 className='uppercase font-semibold text-gray-600 mt-1'>Historia</h3>
                                    <textarea
                                        className='w-full mt-1 border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll'
                                        onChange={()=>setHistoria()}
                                    >
                                        
                                    </textarea>                                         
                                    </div>

                                   
                                </div>


                            </div>


                        </section>
                
                    </section>

                </section>

            </section>

    
            {/* Seleccion debajo */}
            <button
                onClick={()=>navigate('/unidadeducativa')}
                type='submit'
                className='w-full bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold mt-5 hover:bg-primary-900/90'
            >
                Crear nueva Unidad Educativa
            </button>
          </form>
        </div>
      )
}

export default FormAgregarUE
