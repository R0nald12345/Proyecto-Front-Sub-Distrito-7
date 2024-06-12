// import { obtenerTipoColegio } from "../../../apiServices/apiServices";

import {useState,useEffect} from 'react'


const FormularioAgregarPublica = () => {

    const [tipoColegio, setTipoColegio] = useState([])

    // useEffect(() => {
    //   setTipoColegio(obtenerTipoColegio());
    //   console.log(tipoColegio);
    // }, [])

    // const [api, setApi] = useState(data);

    const opctionTipoColegio = [
        {label: 'Convenio', value: 1},
        {label: 'Privado', value: 2},
        {label: 'Publico', value: 3},
    ];

    const opctionTipoInfraEstructura = [
        {label: 'Modulo', value: 1},
        {label: 'Escuela', value: 2},
    ];

    const opctionTurno = [
        {label: 'Mañana', value: 1},
        {label: 'Turno', value: 2},
        {label: 'Noche', value: 3},
    ];

  return (
    <div className='flex justify-center items-center'>
      
      <form className='bg-gray-100/50 rounded-xl shadow-xl w-[65%] p-8'>
        {/* Parte Superior */}
        <section className='flex h-40'>
            <div className='bg-red-200 w-1/4'>
                <img/>
                foto
            </div>

            <div className='w-1/2 mx-5'>
                <p className='uppercase font-semibold text-gray-600 mt-1'>Nombre</p>
                <input
                    type='text'
                    className='py-1 rounded-xl pl-3 mb-4 w-full border-gray-400 border-2'
                    placeholder='Nombre de la UE'
                />

                <p className='uppercase font-semibold text-gray-600'>Dirección</p>
                <input
                    type='text'
                    className='py-1 rounded-xl pl-3 mb-4 w-full border-gray-400 border-2'
                    placeholder='Indica la Direccion de la UE'
                />
            </div>
            <div className='bg-red-300 w-1/4 flex flex-col items-center p-1'>
                <p className='uppercase font-semibold text-gray-600 mt-1'>
                    Puntos (Cordenadas)
                </p>
                <section className='w-full flex flex-col justify-between'>
                    <div className='bg-green-400 h-20  rounded-xl'>
                        Mapa
                    </div>
                    <button className='bg-primary-100/80 text-white font-semibold w-full py-2 rounded-xl mt-2'>Ampliar</button>
                </section>

            </div>
        </section>

        {/* HIstoria y Gestion */}
        <section className='flex justify-center gap-5'>
            <section className='w-1/2'>
                <p className='uppercase font-semibold text-gray-600 mt-6 mb-1 text-center'>Historia</p>
                <section className='border border-black/50 rounded-lg px-5 py-3'>
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Nombre</p>
                    <input
                        type='text'
                        className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2'
                        placeholder='Título de la Historia'
                    />
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Fecha</p>
                    <input
                        type='date'
                        className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2'
                        placeholder='Título de la Historia'
                    />
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Descripcion</p>
                    <textarea 
                        className='w-full border-gray-400 border-2 rounded-xl py-1 px-2'
                        placeholder='Agerar un contexto de la Historia '
                    >

                    </textarea>

                </section>
            </section>
            <section className='w-1/2'>
                <p className='uppercase font-semibold text-gray-600 mt-6 mb-1 text-center'>Gestión</p>
                <section className='border border-black/50 rounded-lg px-5 py-3'>
                    <div className='flex justify-between gap-1'>
                        <div className='w-1/2'>
                            <p className='uppercase font-semibold text-gray-600 mt-1'>Horario</p>
                            <input
                                type='time'
                                className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2'
                            />

                        </div>
                        <div className='w-1/2'>
                            <p className='uppercase font-semibold text-gray-600 mt-1'>Número</p>
                            <input
                                type='number'
                                className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2'
                                placeholder='Introduce Nro'
                            />
                        </div>
                    </div>
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Director</p>
                    <input
                        type='text'
                        className='py-1 rounded-xl pl-3 mb-2 w-full border-gray-400 border-2'
                        placeholder='Nombre del Director'
                    />
                    <p className='uppercase font-semibold text-gray-600 mt-1'>Junta Escolar</p>
                    <textarea 
                        placeholder='Agrear un contexto sobre la junta escolar'
                        className='w-full border-gray-400 border-2 rounded-xl py-1 px-2'>

                    </textarea>

                </section>
            </section>

            
        </section>

        <section className="flex gap-8 mt-5">
            <div className="w-1/3">
                <p className="text-center mb-2 font-semibold">Tipo Colegio</p>

                <select className="w-full rounded-xl py-1 pl-2 font-semibold">
                    {opctionTipoColegio.map(option =>(
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>

                
            </div>

            <div className="w-1/3">
                <p className="text-center mb-2 font-semibold">Tipo Estructura</p>
                <select className="w-full rounded-xl py-1 pl-2 font-semibold">
                    {opctionTipoInfraEstructura.map(option =>(
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
            
            <div className="w-1/3">
                <p className="text-center mb-2 font-semibold">Tipo Turno</p>
                <select className="w-full rounded-xl py-1 pl-2 font-semibold">
                    {opctionTurno.map(option =>(
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
           
        </section>

        {/* Seleccion debajo */}
        <button
                // type='submit'
                className='w-full bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold mt-5 hover:bg-primary-900/90'
            >
                AGREGAR
        </button>
      </form>

    </div>
  )
}

export default FormularioAgregarPublica
