import React from 'react'
import Navegacion from '../ComponentsInitial/Navegacion'
import subalcaldiadistrito7 from '../ComponentsInitial/img/subalcaldiadistrito7.png'
import FormularioLogin from '../layout/FormularioLogin'
const VentanaLogin = () => {
    return (
        <div>
            <header className='flex items-center h-20 bg-primary-900'>
                {/* Navegacion contenedor */}
                <Navegacion/>
            </header>  


            {/* <main className='h-screen flex items-center bg-center bg-cover bg-blend-overlay bg-black/50' style={{backgroundImage: "url('https://source.unsplash.com/random/')"}}> */}
            <main className='h-screen flex justify-center items-center bg-center bg-cover bg-blend-overlay bg-black/50'
                  style={{backgroundImage: `url(${subalcaldiadistrito7})`}}>
                    <FormularioLogin/>
            </main> 

        </div>
    )
}

export default VentanaLogin
