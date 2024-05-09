import {Outlet} from 'react-router-dom'
import Sidebar from '../components/components/Sidebar'
import Header from '../components/components/Header'
import subalcaldiadistrito7 from '../components/ComponentsInitial/img/subalcaldiadistrito7.png'

const LayoutAdmin = () => {
    return (
        // <div className='min-h-screen grid grid-cols-1 md:grid-cols-6 bg-slate-200'>
        <div className='min-h-screen grid grid-cols-1 xl:grid-cols-6 flex justify-center items-center bg-center bg-cover bg-blend-overlay bg-black/50'
                  style={{backgroundImage: `url(${subalcaldiadistrito7})`}}>
        {/* <div className='h-screen flex justify-center items-center bg-center bg-cover bg-blend-overlay bg-black/50'
                  style={{backgroundImage: `url(${subalcaldiadistrito7})`}}> */}

          {/* Parte izquierdo */}
          <Sidebar/>  
    
          {/* Parte Derecho (Superior y principal) */}
          <div className='xl:col-span-5'>
            <Header/>
    
            <div className='h-[90vh] overflow-y-scroll p-8 '>

              {/* <div className='h-screen flex justify-center items-center bg-center bg-cover bg-blend-overlay bg-black/50'
                  style={{backgroundImage: `url(${subalcaldiadistrito7})`}}> */}
              <Outlet/>
            </div>
    
          </div>
        </div>
      )
}

export default LayoutAdmin
