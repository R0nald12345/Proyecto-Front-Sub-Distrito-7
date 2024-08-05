import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { deleteCentroTuristico } from "../../../api/CentroTuristicos";
import Swal from "sweetalert2";

const Lista_CentroTuristicos = ({ id,datosTuristicos,datosCentroTuristicos,setDatosCentroTuristicos }) => {
    const {nombre, direccion} = datosTuristicos;
    console.log('Datos Turisticos');
    console.log(id);

  const navigate = useNavigate();


  const changeFormDetails = (id) => {
    navigate(`/inicio/centro_turisticos/detalles/${id}`);
}
  const handleDeleteCentroTuristico = async (id) => {
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
        const responde = await deleteCentroTuristico(id);
        // setDatosCentroTuristicos( 
        //   datosCentroTuristicos.filter((element) => element.id !== id)
        // );
        
        setDatosCentroTuristicos(prevState => prevState.filter((element) => element.id !== id));

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
    <>
      {/* <Modal_Editar_ApoyoGubernamental
      open={openModalEdit}
      onClose={() => setOpenModalEdit(false)}
      datoApoyoGubernamental={datoApoyoGubernamental}
    
    /> */}
      <ul className="bg-white gap-3 mb-3 rounded-xl shadow-lg flex">
        
        <li className=" font-semibold text-center w-[30%] px-2 py-2  ">
          {nombre}
        </li>
        
        <li className=" font-semibold text-center w-[50%] px-2 py-2">
          {direccion}
        </li>

        <li className=" font-semibold text-center w-[20%] px-2 py-2 flex justify-around gap-3">
          <BiEditAlt
            className="bg-green-700 text-white text-3xl rounded-md p-1 cursor-pointer"
            //   onClick={() => setOpenModalEdit(!openModalEdit)}
          />
          <IoEyeSharp
            className=" bg-black text-white text-3xl rounded-md p-1 cursor-pointer"
            onClick={()=>changeFormDetails(id)}
          />

          <RiDeleteBin5Line 
            className="bg-red-700 text-white text-3xl rounded-md p-1 cursor-pointer" 
            onClick={()=>handleDeleteCentroTuristico(id)}
          />
        </li>
      </ul>
    </>
  );
};

export default Lista_CentroTuristicos;
