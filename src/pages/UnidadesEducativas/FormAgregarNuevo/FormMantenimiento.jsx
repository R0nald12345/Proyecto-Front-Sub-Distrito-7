import React from 'react'

const FormMantenimiento = () => {
  return (
    <>
      <h3 className='uppercase font-semibold text-gray-600 mt-6 mb-1 text-center'>Mantenimiento</h3>
      <section className='xl:flex grid grid-cols-4 border border-black/50 rounded-lg px-5 py-3 gap-5'>
        

        <div className='w-11/12 xl:flex gap-5'>
          <div className='w-1/3'>
            <h4 className='uppercase font-semibold text-gray-600'>Titulo</h4>
            <input
              type='text'
              className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'
            />  
          </div>     

          <div className='w-1/3'>
            <h4 className='uppercase font-semibold text-gray-600'>Encargo</h4>
            <input
              type='text'
              className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'
            />
          </div>

          

          <div className='w-1/3'>
            <h4 className='uppercase font-semibold text-gray-600'>Empresa</h4>
            <input
              type='text'
              className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'
            />
          </div>

        </div>

        <div className='w-1/12'>
          <h4 className='uppercase font-semibold text-gray-600'>Fecha</h4>
          <input
            type='date'
            className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'
          />
        </div>

      </section>
    </>
  )
}

export default FormMantenimiento
