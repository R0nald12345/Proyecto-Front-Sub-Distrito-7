import {useEffect, useState} from 'react'
import FormVistaMantenimiento from './FormVistaMantenimiento';
import FormVistaApoyoGubernamental from './FormVistaApoyoGubernamental';
import FormVistaDesayunoApoyoSocial from './FormVistaDesayunoApoyoSocial';
import {useParams} from 'react-router-dom'

const FormDataPublicaExtra = () => {
  const { id } = useParams();


  return (
    <>
      <form className='bg-gray-100/50 rounded-xl shadow-xl w-[100%] px-5 py-3 flex-col'>
        <section className='flex justify-between gap-5'>

          <section className='w-[50%]'>
            <FormVistaApoyoGubernamental
              id = {id}
            />           
          </section>

          <section className='w-[50%]'>
            
          </section>

        </section>

        <section className='flex'>

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
        </section>

        

      </form>
      
    </>
  )
}

export default FormDataPublicaExtra
