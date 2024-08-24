import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImWhatsapp } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { deleteDatoCentroSalud } from '../../../api/CentroSalud';

const Lista_CentroSalud = ({ dateCentroSalud,datosCentroSalud,setDatosCentroSalud }) => {
  const { id, nombre, direccion, nivel, horario } = dateCentroSalud;
  const navigate = useNavigate();

  const changeRutaEditarFormulario = (id) => {
    navigate(`/inicio/centrosalud/editar/${id}`);
  };

  const handleDeleteCentroSalud = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Deseas Eliminar?",
        text: "Si eliminas no podrás recuperarlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, quiero Eliminar!",
      });

      if (result.isConfirmed) {
        const responde = await deleteDatoCentroSalud(id);
        // setDatosCentroTuristicos( 
        //   datosCentroTuristicos.filter((element) => element.id !== id)
        // );
        
        setDatosCentroSalud(prevState => prevState.filter((element) => element.id !== id));

        Swal.fire({
          title: "Eliminado!",
          text: "Eliminado Correctamente.",
          icon: "success",
        });
      }
    } catch (error) {
      console.log("Error en el Componente Lista_CentroTuristicos", error);
    }
  }


  return (
    <ul className='w-full flex gap-1 rounded-xl mb-3 bg-white shadow-xl'>
      <li className="w-[32%] font-semibold text-start px-3 py-2">
        {nombre}
      </li>
      <li className="w-[33%] font-semibold text-start px-3 py-2 flex items-center">
        {direccion}
      </li>
      <li className="w-[12%] font-semibold px-3 py-2 flex items-center justify-center">
        {horario}
      </li>
      <li className="w-[8%] font-semibold px-3 py-2 flex items-center justify-center">
        {nivel}
      </li>
      <li className='w-[15%] flex items-center'>
        <div className='flex justify-between w-full px-2 cursor-pointer'>
          <IoEyeSharp
            onClick={() => navigate(`/inicio/centrosalud/detalles/${id}`)}
            className="text-3xl p-1 rounded-lg bg-black text-white"
          />
          <BiEditAlt
            onClick={() => changeRutaEditarFormulario(id)}
            className="text-3xl p-1 rounded-xl bg-green-900 text-white"
          />
          <RiDeleteBin5Line
            onClick={() => handleDeleteCentroSalud(id)}
            className="text-3xl text-red-700"
          />
        </div>
      </li>
    </ul>
  );
};

export default Lista_CentroSalud;