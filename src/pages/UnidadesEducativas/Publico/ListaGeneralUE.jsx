import React from 'react'

import { ImWhatsapp } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";

import {useNavigate} from 'react-router-dom'

const ListaGeneralUE = () => {
    const navigate = useNavigate();

    const changeRutaNuevoFormulario=()=>{
        navigate('/unidadeducativa/agregarnuevo');
    }


    const changeFormDetails=()=>{
      navigate('/unidadeducativa/detalles');
    }

    const opctionBusqueda = [
      {label: 'Ascendente', value: 1},
      {label: 'Descende', value: 2},
    ];

    const opctionTipoInfraEstructura = [
        {label: 'Modulo', value: 1},
        {label: 'Escuela', value: 2},
    ];

  const opctionTurno = [
      {label: 'Mañana', value: 1},
      {label: 'Turno', value: 2},
      {label: 'Noche', value: 3},
  ];

    return (
        <div className='flex flex-col items-center justify-center'>
          
          {/* Parte Superrior */}
          <section className='grid grid-cols-12 flex justify-center p-2 mb-10'>
    
            <section className='col-span-4 flex gap-12 pl-2 pr-3'>
              {/* Boton */}
              <div className='flex col-span-1'>
                <button 
                    onClick={changeRutaNuevoFormulario}
                    className='text-white font-new-font font-new-bold bg-primary-900/90 rounded-lg py-3 px-2'>
                        Agregar Nuevo
                </button>

              </div>
    
              <div className='col-span-3 flex items-center gap-2'>
                <p className='font-new-font font-new-bold text-white'>Ordenar por</p>
                {/* <span className='bg-gray-300 rounded-xl py-1 px-2 border border-1 border-black'>NombreDrop</span> */}
                <select className="w-full rounded-xl py-1 pl-2 font-semibold bg-gray-300">
                    {opctionBusqueda.map(option =>(
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
              </div>
    
            </section>
    
            <section className='col-span-4 flex justify-center items-center gap-12 '>
            <div className='col-span-2 flex items-center gap-2'>
                <p className=' font-new-font font-new-bold text-white'>Tipo</p>
                {/* <span className=' bg-gray-300 rounded-xl py-1 px-2 border border-1 border-black'>NombreDrop</span> */}
                <select className="w-full rounded-xl py-1 pl-2 font-semibold bg-gray-300">
                    {opctionTipoInfraEstructura.map(option =>(
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
              </div>
    
              <div className='col-span-2 flex items-center gap-2'>
                <p className='font-new-font font-new-bold text-white'>Turno</p>
                {/* <span className='bg-gray-300 rounded-xl py-1 px-2 border border-1 border-black'>NombreDrop</span> */}
                <select className="w-full rounded-xl py-1 pl-2 font-semibold bg-gray-300">
                    {opctionTurno.map(option =>(
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
              </div>
            </section>
    
            <section className='col-span-4  flex items-center justify-end px-3 gap-3'>
              <p className='font-new-font font-new-bold text-white'>Nombre</p>
              <div className='w-full flex bg-gray-300 border border-black rounded-xl px-2'>
                <FaMagnifyingGlass className='mt-2' />
                <input
                  type='text'
                  placeholder='Buscar'
                  className='w-full font-semibold  rounded-xl py-1 bg-gray-300  px-1 outline-none'
                />
              </div>
            </section>
    
          </section>
    
          {/* //Parte de la Listas de Colegios */}
          <main className="flex flex-col justify-center mt-10 w-3/5 ">
            <section className='w-full'>
                <ul className='grid grid-cols-11 bg-white gap-5 mb-3 rounded-xl shadow-lg'>
                  <li className=" font-semibold text-start col-span-3 px-3 py-2 ">Nombre</li>
                  <li className=" font-semibold text-start col-span-3 px-3 py-2 ">Nombre Director</li>
                  <li className=" font-semibold text-start col-span-2 px-3 py-2 ">Turno</li>
                  <li className=" font-semibold text-center col-span-3 px-2 py-2">Acciones</li>
                </ul>
            </section>
    
            <section className='w-full'>




              <ul className='grid grid-cols-11 gap-5 rounded-xl mb-3 bg-white shadow-xl'>
                <li className=" font-semibold text-start col-span-3 px-3 py-2">
                    <div className='flex items-center gap-3'>
                      <img 
                        src='https://img.freepik.com/vector-gratis/escuela-diseno-ilustracion-vectorial_24640-45977.jpg'
                        className='w-9 h-8 rounded-full object-cover'
                      />
                      Paz Union
    
                    </div>
                </li>
                <li className=" font-semibold text-start col-span-3 px-3 py-2 flex items-center ">Juan David Lopez</li>
                <li className=" font-semibold text-start col-span-2 px-3 py-2 flex items-center ">Tarde</li>
                <li className='col-span-3 flex justify-between items-center '>
                  <div className='flex justify-between w-full px-2'>
                    <div className='w-1/2 flex gap-3 '>
                      <IoEyeSharp 
                        onClick={changeFormDetails}
                        className="text-3xl p-1 rounded-lg bg-black text-white" />
                      <BiEditAlt className="text-3xl p-1 rounded-xl bg-green-900 text-white" />
    
                    </div>
    
                    <div className='w-1/2 flex justify-end gap-3'>
                      <ImWhatsapp className="text-3xl text-green-600" />
                      <RiDeleteBin5Line className="text-3xl text-red-700" />
    
                    </div>
                  </div>
                </li>
              </ul>
              <ul className='grid grid-cols-11 gap-5 rounded-xl mb-3 bg-white shadow-xl'>
                <li className=" font-semibold text-start col-span-3 px-3 py-2">
                    <div className='flex items-center gap-3'>
                      <img 
                        src='https://img.freepik.com/vector-gratis/escuela-diseno-ilustracion-vectorial_24640-45977.jpg'
                        className='w-9 h-8 rounded-full object-cover'
                      />
                      Paz Union
    
                    </div>
                </li>
                <li className=" font-semibold text-start col-span-3 px-3 py-2 flex items-center ">Juan David Lopez</li>
                <li className=" font-semibold text-start col-span-2 px-3 py-2 flex items-center ">Tarde</li>
                <li className='col-span-3 flex justify-between items-center '>
                  <div className='flex justify-between w-full px-2'>
                    <div className='w-1/2 flex gap-3 '>
                      <IoEyeSharp 
                        onClick={changeFormDetails}
                        className="text-3xl p-1 rounded-lg bg-black text-white" />
                      <BiEditAlt className="text-3xl p-1 rounded-xl bg-green-900 text-white" />
    
                    </div>
    
                    <div className='w-1/2 flex justify-end gap-3'>
                      <ImWhatsapp className="text-3xl text-green-600" />
                      <RiDeleteBin5Line className="text-3xl text-red-700" />
    
                    </div>
                  </div>
                </li>
              </ul>
              <ul className='grid grid-cols-11 gap-5 rounded-xl mb-3 bg-white shadow-xl'>
                <li className=" font-semibold text-start col-span-3 px-3 py-2">
                    <div className='flex items-center gap-3'>
                      <img 
                        src='https://img.freepik.com/vector-gratis/escuela-diseno-ilustracion-vectorial_24640-45977.jpg'
                        className='w-9 h-8 rounded-full object-cover'
                      />
                      Paz Union
    
                    </div>
                </li>
                <li className=" font-semibold text-start col-span-3 px-3 py-2 flex items-center ">Juan David Lopez</li>
                <li className=" font-semibold text-start col-span-2 px-3 py-2 flex items-center ">Tarde</li>
                <li className='col-span-3 flex justify-between items-center '>
                  <div className='flex justify-between w-full px-2'>
                    <div className='w-1/2 flex gap-3 '>
                      <IoEyeSharp 
                        onClick={changeFormDetails}
                        className="text-3xl p-1 rounded-lg bg-black text-white" />
                      <BiEditAlt className="text-3xl p-1 rounded-xl bg-green-900 text-white" />
    
                    </div>
    
                    <div className='w-1/2 flex justify-end gap-3'>
                      <ImWhatsapp className="text-3xl text-green-600" />
                      <RiDeleteBin5Line className="text-3xl text-red-700" />
    
                    </div>
                  </div>
                </li>
              </ul>
              
            </section>
    
          </main>
        </div>
      )
}

export default ListaGeneralUE
