import Navegacion from './Navegacion'
import subalcaldiadistrito7 from '../ComponentsInitial/img/subalcaldiadistrito7.png'
import {Outlet} from 'react-router-dom'


const Principal = () => {

    return (
        <div>
            {/* flex items-center */}
            <header className='h-20 flex items-center  md:h-20 bg-green-700'>
                {/* Navegacion contenedor */}
                <Navegacion/>
            </header>  


            <main className='h-screen flex justify-center items-center bg-center bg-cover bg-blend-overlay bg-black/50'
                  style={{backgroundImage: `url(${subalcaldiadistrito7})`}}>
                        
                    <Outlet/>
            </main> 

        </div>
    )
}

export default Principal
