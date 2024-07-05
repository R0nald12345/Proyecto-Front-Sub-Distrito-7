import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

const Lista_CentroTuristicos = ({ datosTuristicos }) => {
    const {nombre, direccion} = datosTuristicos;

  const navigate = useNavigate();
  return (
    <>
      {/* <Modal_Editar_ApoyoGubernamental
      open={openModalEdit}
      onClose={() => setOpenModalEdit(false)}
      datoApoyoGubernamental={datoApoyoGubernamental}
    
    /> */}
      <ul className="bg-white gap-3 mb-3 rounded-xl shadow-lg flex">
        
        <li className=" font-semibold text-center w-[30%] px-2 py-2 bg-red-300 ">
          {nombre}
        </li>
        
        <li className=" font-semibold text-center w-[55%] px-2 py-2 bg-red-300">
          {direccion}
        </li>

        <li className=" font-semibold text-center w-[15%] px-2 py-2 flex justify-around gap-3 bg-red-300">
          <BiEditAlt
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer"
            //   onClick={() => setOpenModalEdit(!openModalEdit)}
          />

          <RiDeleteBin5Line className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer" />
        </li>
      </ul>
    </>
  );
};

export default Lista_CentroTuristicos;
