import React from 'react'

const FormAgregarDesayuno = () => {
  return (
    <>
        <p className='uppercase font-semibold text-gray-600 mt-6 mb-1 text-center'>Desayuno</p>
        <section className='border border-black/50 rounded-lg px-5 py-3'>
            <div className='flex justify-between gap-1'>
                <div className='w-1/2'>
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Nombre</p>
                    <input 
                        type='text'
                        placeholder='Nombre del Desayuno'
                        className='w-full border border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                    />
                    {/* {nombreDesayuno} */} 
                  
                </div>

                <div className='w-1/2'>

                    <p className='uppercase font-semibold text-gray-600 mt-1'>Fecha</p>
                    <input
                        type='date' 
                        className='w-full border border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                    />

                </div>
            </div>

            <div className='flex'>
                <div className='w-3/4'>
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Nombre Entrega</p>
                    <input
                        type='text'
                        className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2 bg-gray-100'
                        placeholder='Nombre de la Entrega'
                                            
                    /> 
                                            
                </div>

                    <div className='w-1/4'>
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Cantidad</p>
                    <input 
                        type='number'
                        placeholder='Nro'
                        className='w-full border border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                    />

                </div>

            </div>

        </section> 
    </>
  )
}

export default FormAgregarDesayuno
