// import { useState } from 'react'

import { Link } from "react-router-dom"

const Navegacion = () => {

  // const [showMenu, setShowMenu] = useState(false)
  return (
    <>
        <div className='px-5 w-full block py-2 xl:flex items-center justify-center'>

            <h3 className='text-white uppercase text-2xl font-semibold text-center xl:w-3/5 mb-2'>
              Página de Administración
            </h3>  


            {/* Navegacion Menu */}
            <nav className='text-white flex justify-center gap-5'>
                <Link to="/">Home</Link>
                <Link to="auth">Login</Link>
                <Link to="/">Signup</Link>
            </nav>



        </div>
    </>
  )
}

export default Navegacion
