// import { useState } from 'react'

import { Link } from "react-router-dom"

const Navegacion = () => {

  // const [showMenu, setShowMenu] = useState(false)
  return (
    <>
        <div className=' mx-auto relative px-5 max-w-screen-xl w-full flex items-center justify-end'>
            <h3 className='text-white  uppercase text-4xl absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 font-serif' >Página de Administración</h3>
            {/* Navegacion Menu */}
            <nav className='text-white flex gap-5'>
                <Link to="/">Home</Link>
                <Link to="auth">Login</Link>
                <Link to="/">Signup</Link>
            </nav>
        </div>
    </>
  )
}

export default Navegacion
