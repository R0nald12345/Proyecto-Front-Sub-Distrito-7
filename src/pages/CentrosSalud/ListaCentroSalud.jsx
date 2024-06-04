// import axios from 'axios'

import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

import { ImWhatsapp } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
// import { fetchModule } from 'vite';

const ListaCentroSalud = ({id,nombre,direccion,nivel,hora}) => {

    const navigate = useNavigate();

    const changeFormDetails=(id)=>{
        navigate(`/unidadeducativa/detalles/${id}`);
    }

    const changeRutaEditarFormulario=(id)=>{
      navigate(`/unidadeducativa/modificar/${id}`);
    }


  return (
    <>
        <ul className='grid grid-cols-12 gap-5 rounded-xl mb-3 bg-white shadow-xl'>
            <li className=" font-semibold text-start col-span-3 px-3 py-2">
                <div className='flex items-center gap-3'>
                    <img 
                        src='https://img.freepik.com/vector-gratis/escuela-diseno-ilustracion-vectorial_24640-45977.jpg'
                        className='w-9 h-8 rounded-full object-cover'
                    />
                    {nombre}
                </div>
            </li>
            <li className=" font-semibold text-start col-span-3 px-3 py-2 flex items-center ">{direccion}</li>
            <li className=" font-semibold col-span-1 px-3 py-2 flex items-center justify-center">{nivel}</li>
            <li className=" font-semibold col-span-2 px-3 py-2 flex items-center justify-center">{hora}</li>
            <li className=' col-span-3 flex items-center '>
                <div className='flex justify-between w-full px-2'>
                      <IoEyeSharp 
                        onClick={()=>changeFormDetails(id)}
                        className="text-3xl p-1 rounded-lg bg-black text-white" />
                        
                      <BiEditAlt 
                        onClick={()=>changeRutaEditarFormulario(id)}
                        className="text-3xl p-1 rounded-xl bg-green-900 text-white" />
        
                      {/* <ImWhatsapp className="text-3xl text-green-600" /> */}
                      <RiDeleteBin5Line 
                        // onClick={handleEliminar(id)}
                        className="text-3xl text-red-700" />
    
                </div>
            </li>
        </ul>

    </>
  )
}

export default ListaCentroSalud
