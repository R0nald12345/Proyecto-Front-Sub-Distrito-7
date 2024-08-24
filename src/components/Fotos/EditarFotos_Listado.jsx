import React from 'react'
import { MdDelete } from "react-icons/md";

const EditarFotos_Listado = ({ foto, setFotos }) => {
  return (
    <>
        <div className='w-[60%] bg-red-500'>
        <ul className='flex'>
            <li className='w-[60%]'>
            <img
                src={foto.url}
                alt="imagen"
                className="w-[100px] h-[100px] bg-gray-200 rounded-lg m-2 flex items-center justify-center"
            />
            </li>
            <li className='w-[40%]'>
            <MdDelete />
            </li>
        </ul>
        </div>
    
    </>
  )
}

export default EditarFotos_Listado