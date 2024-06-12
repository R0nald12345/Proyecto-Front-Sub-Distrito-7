import React from 'react'

const Lista_Desayuno = ({fecha, nombreEntrega, nombre, cantidad}) => {
  return (
    <>
        <ul className='grid grid-cols-11 bg-white gap-5 mb-3 rounded-xl shadow-lg'>
                <li className=" font-semibold text-start col-span-3 px-3 py-2 ">{fecha}</li>
                <li className=" font-semibold text-start col-span-3 px-3 py-2 ">{nombreEntrega}</li>
                <li className=" font-semibold text-start col-span-2 px-3 py-2 ">{nombre}</li>
                <li className=" font-semibold text-center col-span-3 px-2 py-2">{cantidad}</li>
        </ul>
    </>
  )
}

export default Lista_Desayuno