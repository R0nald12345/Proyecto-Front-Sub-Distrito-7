import {useEffect, useState} from 'react'
import FormVistaMantenimiento from './FormVistaMantenimiento';
import FormVistaApoyoGubernamental from './FormVistaApoyoGubernamental';
import FormVistaDesayunoApoyoSocial from './FormVistaDesayunoApoyoSocial';
import {useParams} from 'react-router-dom'

const FormDataPublicaExtra = () => {
  const { id } = useParams();


  return (
    <>
      <form className='bg-gray-100/50 rounded-xl shadow-xl w-[100%] p-8 flex-col'>
        <section className='flex justify-between gap-5'>

          <section className='w-[40%]'>
            <div className=''>
              <h4 className='uppercase font-semibold text-gray-600'>nombre</h4>
              <p className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'>
                nombreUE
              </p>
            </div>

            <div className=''>
              <h4 className='uppercase font-semibold text-gray-600'>direccion</h4>
              <p className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'>
                nombreUE
              </p>
            </div>

          </section>

          <section className='w-[60%]'>
            
            <FormVistaApoyoGubernamental
              id = {id}
            />
          </section>

        </section>

        
        <section className='mt-5'>
          <FormVistaDesayunoApoyoSocial
            id={id}
          />
        </section>



        <section className='mt-5'>
          <FormVistaMantenimiento
            id={id}
          />
        </section>

      </form>
      
    </>
  )
}

export default FormDataPublicaExtra
