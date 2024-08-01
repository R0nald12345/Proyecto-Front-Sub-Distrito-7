import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

import { ImWhatsapp } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";

const Lista_CentroSalud = ({dateCentroSalud,datosCentroSalud,setDatosCentroSalud}) => {

    const {nombre,direccion, nivel, horario  } = dateCentroSalud;
    const navigate = useNavigate();

    const changeFormDetails=(id)=>{
        navigate(`/unidadeducativa/detalles/${id}`);
    }

    const changeRutaEditarFormulario=(id)=>{
      navigate(`/unidadeducativa/modificar/${id}`);
    }


  return (
    <>
        <ul className='w-full flex gap-1 rounded-xl mb-3 bg-white shadow-xl'>
            <li className="w-[32%] font-semibold text-start px-3 py-2">
                    {nombre}
                
            </li>

            <li className="w-[33%]  font-semibold text-start  px-3 py-2 flex items-center ">
                {direccion}
                
            </li>

            <li className="w-[12%]  font-semibold  px-3 py-2 flex items-center justify-center">
                {horario}
                {/* 12:00 - 14:00 */}
            </li>


            <li className="w-[8%]  font-semibold  px-3 py-2 flex items-center justify-center">
                {/* {nivel} */}
                2
            </li>

            <li className='w-[15%]  flex items-center '>
                <div className='flex justify-between w-full  px-2'>
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

export default Lista_CentroSalud