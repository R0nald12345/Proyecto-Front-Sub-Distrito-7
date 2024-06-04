import React from 'react'
import FormEditarTipos from './FormEditarTipos'
import FormEditarGestion from './FormEditarGestion'
import FormEditarDesayuno from './FormEditarDesayuno'
import { useParams,useNavigate } from 'react-router-dom'

const FormEditarUE = () => {
    const {id} = useParams();
    const navigate = useNavigate();


return (
        <div className='flex justify-center items-center'>
          <form className='bg-gray-100/50 rounded-xl shadow-xl w-[1000%] p-8'>

            {/* parte Superior */}
            <section className='w-full flex gap-5'>
                {/* Parte Lateral angosto Izquierdp*/}
                <section className='w-1/3'>
                    <div className='bg-red-200 w-full h-2/5'>
                        <img/>
                        foto
                    </div>

                     {/* Historia */}
                    <div className='h-3/5'>
                        <p className='uppercase font-semibold text-gray-600 mt-1'>Historia</p>
                        <textarea
                            className='w-full border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll'
                            style={{height:'408px'}}
                        >
                            
                        </textarea> 
                    </div>


                </section>  

                {/* Parte Lateral Ancha Derecho*/}
                <section className='w-2/3'>
                    {/* Parte Superior*/}
                    <section className='flex h-40 gap-5 '>
                        <div className='w-3/5'>
                            <p className='uppercase font-semibold text-gray-600'>Nombre</p>
                            {/* <input
                                type='text'
                                className='py-1 rounded-xl pl-3 mb-4 w-full border-gray-400 border-2'
                                placeholder='Nombre de la UE'
                            /> */}

                            <input
                                type='text'
                                placeholder='Introduce el nombre de la Unidad Educativa'
                                className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'

                            /> 
                                
            
                            <p className='uppercase font-semibold text-gray-600'>Dirección</p>

                            <input
                                type='text'
                                placeholder='Dirección de la Unidad Educativa'
                                className='py-1 rounded-xl pl-3 mb-4 w-full border-gray-400 border-2 bg-gray-200'
                                style={{height:'60px'}} 
                            />
                        </div>

                        <div className='w-2/5 flex flex-col'>
                           <FormEditarTipos/>
                        </div>
                        
                    </section>

                    <section className=' w-full flex gap-5'>
                        
                        <div className='w-1/3'>
                            <FormEditarGestion
                                id={id}
                            />

                        </div>



                        <div className='w-2/3 flex-col'>

                            <div className=''>
                                <FormEditarDesayuno
                                    id={id}
                                />
                            </div>

                            <div className=' '
                                 style={{height:'343px'}}
                            >
                                <div className=''
                                     style={{height:'287Px'}}
                                >
                                    <p className='uppercase font-semibold text-gray-600 mt-3'>
                                        Puntos (Cordenadas)
                                    </p>
                                    <div className=' h-64 rounded-xl mt-1'>
                                        {/* <Mapa
                                            datoX = {coordenadaX}
                                            datoY = {coordenadaY}
                                        /> */}
                                        jphdvjkh
                                    </div>
                                </div>

                                <div>
                                    <button className='bg-primary-100/80 text-white font-semibold w-full py-3 rounded-xl mt-2'>
                                        Observar mas Detalles
                                    </button>

                                </div>
                            </div>


                        </div>


                    </section>
            
                </section>

            </section>

    
            {/* Seleccion debajo */}
            <button
                onClick={()=>navigate('/unidadeducativa')}
                type='submit'
                className='w-full bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold mt-5 hover:bg-primary-900/90'
            >
                Actualizar Unidad Educativa
            </button>
          </form>
        </div>
      )
}

export default FormEditarUE
