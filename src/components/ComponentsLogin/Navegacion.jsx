import React from 'react'

const Navegacion = () => {
  return (
    <>
        <div className=' mx-auto relative px-5 max-w-screen-xl w-full flex items-center justify-end'>
            <h3 className='text-white font-thin uppercase text-4xl absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2' >My site</h3>
            {/* Navegacion Menu */}
            <nav className='text-white flex gap-5'>
                <a href='#'>Home</a>
                <a href='#'>Login</a>
                <a href='#'>Signup</a>
            </nav>
        </div>
    </>
  )
}

export default Navegacion
