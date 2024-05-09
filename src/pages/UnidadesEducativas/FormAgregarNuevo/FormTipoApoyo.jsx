import {useState} from 'react'

const FormTipoApoyo = () => {
  const [tipoApoyo, setTipoApoyo] = useState([]);

  useState(() => {
    setTipoApoyo([
      { id: 1, nombre: 'Apoyo Gubernamental' },
      { id: 2, nombre: 'Apoyo Social' }
    ]);
  }, []);
  
  return (
    <>
      <h3 className='uppercase font-semibold text-gray-600 mt-6 mb-1 text-center'>Mantenimiento</h3>
          <select className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-3'>
              {tipoApoyo.map(option =>(
                  <option value={option.nombre} key={option.id}>{option.nombre}</option>
                                        ))}
          </select>

          <section className='xl:flex border border-black/50 rounded-lg px-5 py-3 gap-5'>
                                
            <div className='xl:w-2/3'>
                              
              <h4 className='uppercase font-semibold text-gray-600'>Nombre</h4>
              <input
                type='text'
                className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'
              />

              <h4 className='uppercase font-semibold text-gray-600'>Nombre Entrega</h4>
              <input
                type='text'
                className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'
              />


            </div>

            <div className='xl:w-1/3'>
                <h4 className='uppercase font-semibold text-gray-600'>Fecha</h4>
                                    
                <input
                  type='date'
                  className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'
                />

                <h4 className='uppercase font-semibold text-gray-600'>Cantidad</h4>
                <input
                  type='text'
                  className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1'
                />

            </div>
          </section>
    </>
  )
}

export default FormTipoApoyo
