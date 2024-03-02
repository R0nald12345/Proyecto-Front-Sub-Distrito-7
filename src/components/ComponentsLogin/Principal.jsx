import React from 'react'
import Navegacion from './Navegacion'
import subalcaldiadistrito7 from '../ComponentsLogin/img/subalcaldiadistrito7.png'

const Principal = () => {
  return (
    <>
        <header className='flex items-center h-20 bg-green-800'>
            {/* Navegacion contenedor */}
            <Navegacion/>
        </header>  

        {/* <seccion>

        </seccion> */}

        {/* <main className='h-screen flex items-center bg-center bg-cover bg-blend-overlay bg-black/50' style={{backgroundImage: "url('https://source.unsplash.com/random/')"}}> */}
        <main className='h-screen flex items-center bg-center bg-cover bg-blend-overlay bg-black/50' style={{backgroundImage: `url(${subalcaldiadistrito7})`}}>
            <div className='text-center mx-auto text-white'>
                <h1 className='text-7xl'>Welcome to my site!</h1>
                <p className='font-light text-3xl mt-5'>The land of opportunity</p>
                <a className='px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors mt-10'>
                    Get started
                </a>
            </div>

        </main>
    </>
  )
}

export default Principal
