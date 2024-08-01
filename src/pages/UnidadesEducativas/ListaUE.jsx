import axios from 'axios'
import Swal from 'sweetalert2';


import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ImWhatsapp } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { deleteMantenimientoID, deleteUEid } from '../../api/UnidadesEducativas';
// import { fetchModule } from 'vite';

const ListaUE = ({ id, nombreUE, nombreDirector, turno, datosUnidadEducativa, setDatosUnidadEducativa }) => {

    const navigate = useNavigate();

    const changeFormDetails = (id) => {
        navigate(`/inicio/unidadeducativa/detalles/${id}`);
    }

    const changeRutaEditarFormulario = (id) => {
        navigate(`/inicio/unidadeducativa/modificar/${id}`);
    }

    const handleEliminar = async (id) => {
        try {
            const response = await deleteUEid(id);
            setDatosUnidadEducativa(datosUnidadEducativa.filter((element) => element.id !== id));
            // console.log(response);
            Swal.fire({
                icon: 'success',
                title: 'Eliminado',
                text: 'Se elimino correctamente'
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo eliminar'
            })
        }
    }

    return (
        <>
            <ul className='w-[full] flex gap-1 rounded-xl mb-3 bg-white shadow-xl'>
                <li className="w-[35%] font-semibold flex items-center  pl-3 py-">
                    {nombreUE}
                </li>
                <li className="w-[35%] font-semibold px-3 py-2 flex items-center">
                    {nombreDirector}
                </li>

                <li className="w-[10%] font-semibold px-2 py-2 text-center">
                    {turno}
                </li>

                <li className='w-[20%] flex justify-between items-center items-cente'>
                    <div className='flex justify-around w-full '>
                        {/* <div className='w-1/2 flex gap-2 '> */}
                        <IoEyeSharp
                            onClick={() => changeFormDetails(id)}
                            className="text-3xl p-1 rounded-lg bg-black text-white cursor-pointer" />

                        <BiEditAlt
                            onClick={() => changeRutaEditarFormulario(id)}
                            className="text-3xl p-1 rounded-xl bg-green-900 text-white cursor-pointer" />

                        {/* </div> */}

                        {/* <div className='w-1/2 flex justify-end gap-2'> */}
                        {/* <ImWhatsapp className="text-3xl text-green-600" /> */}
                        <RiDeleteBin5Line
                            onClick={() => handleEliminar(id)}
                            className="text-3xl text-red-700 cursor-pointer"
                        />

                        {/* </div> */}
                    </div>
                </li>
            </ul>

        </>
    )
}

export default ListaUE
