import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Swal from "sweetalert2";

import { getDatoCentroDeportivo } from "../../api/CentroDeportivo";
import Lista_CentroDeportivo from "../../components/Listas/CentroDeportivo/Lista_CentroDeportivo";
import { deleteDatoCentroDeportivoId as deleteDatoCentroDeportivoIdApi } from "../../../src/api/CentroDeportivo";
import { deleteVisitas as deleteVisitasApi, getDatoVisitas } from "../../api/Visitas";
import Lista_Visita from "../../components/Listas/Visitas/Lista_Visita"
import Modal_Crear_Visita from "../../components/Modal/Visita/Modal_Crear_Visita";
import Modal_Detalle_Visita from "../../components/Modal/Visita/Modal_Detalle_Visita";
import Modal_Editar_Visita from "../../components/Modal/Visita/Modal_Editar_Visita";
import { TbRuler } from "react-icons/tb";
import Lista_Usuario from "../../components/Listas/Usuarios/Lista_Usuario";
import { deleteUsuarioId, getUsuarios } from "../../api/Usuario";
import Modal_Crear_Usuario from "../../components/Modal/Usuarios/Modal_Crear_Usuario";
import Modal_Actualizar_Usuario from "../../components/Modal/Usuarios/Modal_Actualizar_Usuario";
import Modal_Detalles_Usuario from "../../components/Modal/Usuarios/Modal_Detalles_Usuario";



const ListaGeneralUsuarios = () => {

  // const {id} = useParams();

  const navigate = useNavigate();
  const [datosUsuarios, setDatosUsuarios] = useState([]);
  const [filtro, setFiltro] = useState("");


  const [idVisita, setIdVisita] = useState(0);

  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalDetails, setOpenModalDetails] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  
  useEffect(() => {
    const fetchingVisitas = async () => {
      try {
        const response = await getUsuarios();
        setDatosUsuarios(response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneralUsuarios",
          error
        );
      }
    };
    fetchingVisitas();
  }, []);


  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Obtener el valor de localStorage
    const userData = sessionStorage.getItem('userData');
    // console.log("userDataaaaaaaaaaaaa", userData);
    if (userData) {
      // Parsear el valor JSON
      const parsedUserData = JSON.parse(userData);
      // Acceder al campo email
      setUserEmail(parsedUserData.email);
      // console.log("Email del Usuario", parsedUserData.email);
    } else {
      console.log("No se encontró la clave 'userData' en el localStorage.");
    }
  }, []);

  
  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  };

  const handleDeleteUsuario = async (id,email) => {
    try {
      if(userEmail === email){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No puedes eliminar tu propia cuenta!',
        });
        return;

      }
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
        console.log("iddddddd",id); 
        await deleteUsuarioId(id);
        setDatosUsuarios(
          datosUsuarios.filter((element) => element.id !== id)
        );
        Swal.fire({
          title: "Eliminado!",
          text: "Eliminado Correctamente.",
          icon: "success",
        });
      }
    } catch (error) {
      console.log("Error en el Componente Lista_Usuario", error);
    }
  };

  console.log("openModalCreate", openModalCreate);


  // const changeDatails=(id)=>{
  //   setIdVisita(id);
  //   setOpenModalDetails(true);
  // }


  // const changeUpdate=(id)=>{
  //   setIdVisita(id);
  //   setOpenModalUpdate(!openModalUpdate);
  // }


  const listaFiltrada =
    filtro.trim() === ""
      ? datosUsuarios
      : datosUsuarios.filter((element) =>
          element.name.toLowerCase().includes(filtro.toLowerCase())
        );

        
      const [id, setId] = useState(0);
      const [nameU, setNameU] = useState("");
      const [emailU, setEmailU] = useState("");
      const [passwordU, setPasswordU] = useState("");

      const [nameUD, setNameUD] = useState("");
      const [emailUD, setEmailUD] = useState("");
      const [passwordUD, setPasswordUD] = useState("");

        const hadleOpenModalUpdate = (idU, nombre,correo, contra) => {
          setId(idU);
          setNameU(nombre);
          setEmailU(correo);
          setPasswordU(contra);
          setOpenModalUpdate(true);
        }

        const changeDetalles = (nombre,correo, contra) => {
          setNameUD(nombre);
          setEmailUD(correo);
          setPasswordUD(contra);
          setOpenModalDetails(true);
        }
  return (
    <>



      <Modal_Crear_Usuario
        open={openModalCreate}
        onClose={() => setOpenModalCreate(false)}
        listaUsuarios={datosUsuarios}
        setListaUsuarios={setDatosUsuarios}
      />

      <Modal_Actualizar_Usuario
        open={openModalUpdate}
        onClose={() => setOpenModalUpdate(false)}
        id = {id} 
        nameU = {nameU} 
        emailU = {emailU} 
        passwordU = {passwordU}
        listaUsuarios = {datosUsuarios}
        setListaUsuarios = {setDatosUsuarios}
      />

      <Modal_Detalles_Usuario
        open={openModalDetails}
        onClose={() => setOpenModalDetails(false)}
        // id = {id} 
        nameU = {nameUD} 
        emailU = {emailUD} 
        passwordU = {passwordUD}
      />
    
      <div className="flex flex-col items-center bg-red-600 justify-center  rounded-xl bg-white/50 md:w-[90%] lg:w-[75%]  mx-auto px-4 md:px-6 pb-6 md:pb-2">
        {/* Parte Superrior */}
        <section className="flex-col justify-center  p-2 bg-red w-full">
          <h3 className="text-3xl font-bold text-center  mt-3">
            Lista de Usuarios
          </h3>

          <section className="md:flex md:justify-between md:px-2 bg-red ">

            <div className=" mt-5 col-span-4 flex items-center  justify-end gap-1 md:gap-3">
              <p className="font-new-font font-new-bold text-white">Nombre</p>
              <div className="w-full flex bg-gray-300 border border-black rounded-xl px-2 bg-red">
                <FaMagnifyingGlass className="mt-2 bg-red" />
                <input
                  type="text"
                  placeholder="Buscar"
                  onChange={handleFiltroCambio}
                  className="w-full font-semibold rounded-xl py-1 bg-gray-300 px-1 outline-none"
                />
              </div>
            </div>

            {/* Boton */}
            <button
              className="mt-5 md:w-[30%] text-white font-new-font font-new-bold bg-primary-900/90 rounded-lg py-3 px-2 w-full"
              onClick={() => setOpenModalCreate(!openModalCreate)}
            >
              Agregar Nuevo +
            </button>
          </section>
        </section>

        {/* Lista de Centros Deportivos */}
        <main className="w-full mt-5">
          {/* Lista para pantallas grandes */}
          <div className="hidden md:flex flex-col justify-center w-full">
            <ul className="w-full flex bg-white gap-2 mb-3 rounded-xl shadow-lg">
              <li className="font-semibold text-center w-[40%] px-3 py-2">
                nombre
              </li>
              <li className="font-semibold text-center w-[40%] px-3 py-2">
                Correo
              </li>
              
              <li className="font-semibold text-center w-[20%] px-3 py-2">
                Acciones
              </li>
            </ul>

            <section className="max-h-56 overflow-y-auto scrollbar-hide">
              {listaFiltrada.map((element) => (
                <Lista_Usuario
                  key={element.id}
                  datosUsuario={element}
                  datosUsuarios={datosUsuarios}
                  setDatosUsuarios={setDatosUsuarios}
                />
              ))}
            </section>
          </div>


          {/* Tarjetas para pantallas pequeñas */}
          <div className="md:hidden grid grid-cols-1 gap-4 max-h-96 overflow-y-auto scrollbar-hide">
            {listaFiltrada.map((element) => (
              <div key={element.id} className="bg-white p-4 rounded-xl shadow-lg">
                <h4 className="font-bold text-lg">{element.nombre}</h4>
                <p className="text-gray-600">{element.email}</p>
                {/* <p className="text-gray-600">{ formatearFecha(element.fecha)}</p>d  */}

                <div className="flex justify-end mt-3 gap-2">
                  {/* Aquí puedes agregar los botones de acciones */}
                   <button 
                    className="bg-primary-900 text-white px-3 py-1 rounded-lg"
                    onClick={()=>hadleOpenModalUpdate(element.id, element.name, element.email, element.password)}
                    >
                    Editar
                  </button>

                  <button 
                    className="bg-blue-950 text-white px-3 py-1 rounded-lg"
                    onClick={() => changeDetalles(element.name, element.email, element.password)}
                   
                  >
                    Detalles
                  </button>
                  <button 
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    onClick={ ()=>handleDeleteUsuario(element.id,element.email) }
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>   
        </main>
      </div>
    </>
  );
};


export default ListaGeneralUsuarios;