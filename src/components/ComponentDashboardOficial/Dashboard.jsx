import React from 'react'
import subalcaldiadistrito7 from '../ComponentsInitial/img/subalcaldiadistrito7.png'
import Aside from '../ComponentDashboardOficial/Aside'
const Dashboard = () => {
  return (
    <>
        <div
            className=' md:flex bg-center bg-cover bg-blend-overlay bg-gray-400'
            // style={{backgroundImage: `url(${subalcaldiadistrito7})`}}
            >

            <aside className='min-h-screen md:w-1/4 bg-primary-900'>
                <Aside/>
            </aside>    

            <section className='md:w-3/4 md:h-screen'>
                
            </section>

        </div>
    
    </>
  )
}

export default Dashboard
