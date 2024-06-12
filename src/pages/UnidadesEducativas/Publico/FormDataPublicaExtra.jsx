import {useParams} from 'react-router-dom'
import Encabezado_Mantenimiento from '../../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Mantenimiento';
import Encabezado_ApoyoGubernamental from '../../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_ApoyoGubernamental';
import Encabezado_ApoyoSocial from '../../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_ApoyoSocial';
import Encabezado_Desayuno from '../../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Desayuno';

const FormDataPublicaExtra = () => {
  const { id } = useParams();


  return (
    <>
      <form className='bg-gray-100/50 rounded-xl shadow-xl w-[100%] px-5 py-3 flex-col'>
        <section className='flex justify-between gap-5'>

          <section className='w-[50%]'>
            <Encabezado_ApoyoGubernamental
              id = {id}
            />           
          </section>

          <section className='w-[50%]'>
            
          </section>

        </section>

        <section className='flex'>

          <section className='mt-5'>
            <Encabezado_ApoyoSocial
              id={id}
            />
          </section>

          <section className='mt-5'>
            <Encabezado_Desayuno
              id={id}
            />
          </section>



          <section className='mt-5'>
            <Encabezado_Mantenimiento
              id={id}
            />
          </section>
        </section>

        

      </form>
      
    </>
  )
}

export default FormDataPublicaExtra
