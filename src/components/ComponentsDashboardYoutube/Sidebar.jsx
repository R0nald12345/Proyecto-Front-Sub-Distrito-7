import React, { useState } from 'react'
// Icons
import { IoHome  } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";
import { RiMore2Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

import {Link} from 'react-router-dom'

const Sidebar = () => {

    const [showMenu, setShowMenu] = useState(false)

  return (
    <>
        <div className={` bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300
                         ${showMenu ? "left-0" :"-left-full"}`}
                        >
            {/* Profile */}
            <div className='flex justify-center p-8 flex flex-col items-center justify-center gap-2 h-[30vh]'>
                <img 
                    src='https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207234.jpg'
                    className='w-20 h-20 object-cover rounded-full ring-2 ring-yellow-200 '
                />
                <h1 className='text-white text-xl font-bold'> 
                    Ximena Fuentes
                </h1>
                <p className='bg-primary-100 py-1 px-3 rounded-full font-semibold text-white '>
                    Administradora
                </p>
            </div>

            {/* Nav */}
            <div className='bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8'>
                <nav className='flex flex-col gap-8' >
                    <Link   className='flex items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-primary-900/50'
                            to='/dashboard' 
                    >
                            <IoHome/>Colegio 
                    </Link>

                    <a 
                        href='#' 
                        className='flex items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-primary-900/50'
                    >
                            <FaRegCopy />Proyectos 
                    </a>

                    <a 
                        href='#' 
                        className='flex items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-primary-900/50'
                    >
                            <IoHome/>Centro Medicos
                    </a>

                    <a 
                        href='#' 
                        className='flex items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-primary-900/50'
                    >
                            <IoHome/>Reportes
                    </a>

                </nav>

                <div className='bg-primary-900/50 text-white p-4 rounded-lg'>
                    <p>Verificar Reclamos</p>
                    {/* <a href='#'>Pendientes</a> */}
                </div>
                
            </div>
        </div>

        <button onClick={()=>setShowMenu(!showMenu)} className='lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 rounded-full text-white p-1 z-50'>
            {showMenu ? <IoMdCloseCircle/> : <RiMore2Fill/>}
            
        </button>
    </>
  )
}

export default Sidebar
