import React from 'react'

const Lista_ServicioPublicoGeneral = ({descripcion}) => {
  return (
    <>
     <ul className="bg-white mb-3 rounded-xl shadow-lg flex">
        <li className=" font-semibold text-center w-full px-2 py-2">
          {descripcion}
        </li>
      </ul> 
    </>
  )
}

export default Lista_ServicioPublicoGeneral
