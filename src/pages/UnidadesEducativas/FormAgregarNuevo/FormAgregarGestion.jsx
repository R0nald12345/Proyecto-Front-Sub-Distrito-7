import AgregarImagenJuntaEscolar from "./AgregarImagenJuntaEscolar"

const FormAgregarGestion = () => {
  return (
    <>
        <h3 className='uppercase font-semibold text-gray-600 mt-6 mb-1 text-center'>Gestión</h3>
        <section className='border border-black/50 rounded-lg px-5 py-3'>
            <div className=''>
                <p className='uppercase font-semibold text-gray-600 mt-1'>Horario</p>
                <input 
                    type='time'
                    className='w-full border border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                />
            </div>

            <div className='w-full'>
                <p className='uppercase font-semibold text-gray-600 mt-1'>Número</p>
                <input
                    type='text'
                    className='w-full border border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                    placeholder='Introduce Numero'
                />
            </div>

            <div>
                <p className='uppercase font-semibold text-gray-600 mt-1'>Director</p>
                <input
                    type='text'
                    placeholder='Nombre Director'
                    className='w-full border border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100'
                    style={{height:'60px'}}
                />
            </div>

            <div>

                <p className='uppercase font-semibold text-gray-600 mt-1'>Junta Escolar</p>
                <div
                    className='w-full  border-2 rounded-xl  border-gray-400 object-cover'
                    style={{ height: '260px' }}    
                >
                   <AgregarImagenJuntaEscolar/>
                </div>
                                          {/* // src={imagenGestion} */}
                {/* />  */}
            </div>
        </section>
    </>
  )
}

export default FormAgregarGestion
