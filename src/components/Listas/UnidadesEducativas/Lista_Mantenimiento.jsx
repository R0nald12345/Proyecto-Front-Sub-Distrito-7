import React from "react";

const Lista_Mantenimiento = ({ fecha, titulo, encargado, empresa }) => {
    
  // Convertir la fecha en un objeto Date
  const fechaObj = new Date(fecha);

  // Obtener el día, mes y año de la fecha
  const dia = fechaObj.getDate();
  const mes = fechaObj.getMonth() + 1; // El mes se indexa desde 0 (enero es 0)
  const año = fechaObj.getFullYear();

  // Formatear la fecha como día/mes/año
  const fechaFormateada = `${dia}/${mes}/${año}`;

  return (
    <>
      <ul className="grid grid-cols-11 bg-white gap-5 mb-3 rounded-xl shadow-lg">
        <li className=" font-semibold text-start col-span-3 px-3 py-2 ">
          {fechaFormateada}
        </li>
        <li className=" font-semibold text-start col-span-3 px-3 py-2 ">
          {titulo}
        </li>
        <li className=" font-semibold text-start col-span-2 px-3 py-2 ">
          {encargado}
        </li>
        <li className=" font-semibold text-center col-span-3 px-2 py-2">
          {empresa}
        </li>
      </ul>
    </>
  );
};

export default Lista_Mantenimiento;
