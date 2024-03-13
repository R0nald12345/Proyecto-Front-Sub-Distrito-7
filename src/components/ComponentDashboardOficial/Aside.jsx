import React from 'react'
import {Link} from 'react-router-dom'
const Aside = () => {
  return (
    <div className='m-5'>
        <section className='my-8 mx-5'>
            <div className='flex flex-col items-center'>
                <img 
                    src='https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207234.jpg'
                    className='w-20 h-20 object-cover rounded-full'
                />

                <h3 className='text-white font-semibold text-xl'>Pablo Sanchez</h3>
                <p className='text-white font-semibold bg-primary-300 rounded-lg py-2 px-5'>Administrador</p>

            </div>
                
        </section>

        {/* Nav */}
        <section className='bg-primary-300'>
            <nav className='flex flex-col'>
                <Link>
                    Inicio
                </Link>

                <Link>
                    Inid Educativa
                </Link>

                <Link>
                    Centro Medico
                </Link>

                <Link>
                    Reportes
                </Link>

                <Link>
                    Cerrar Sesion
                </Link>
                
            </nav>
        </section>
    </div>
  )
}

export default Aside
