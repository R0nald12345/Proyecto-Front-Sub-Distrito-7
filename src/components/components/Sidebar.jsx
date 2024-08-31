import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import { IoCloseSharp } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { RxCaretRight } from "react-icons/rx";
import { FaRegChartBar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { GiJumpAcross } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { PiMountainsFill } from "react-icons/pi";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { FaPersonShelter } from "react-icons/fa6";
import { BsBusFrontFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaCalendarPlus } from "react-icons/fa";
import { useAuth } from "../ProteccionRutas/AuthContext";
import { RiFindReplaceFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";

const Sidebar = () => {
  const navigate = useNavigate();

  const [showMenu, setshowMenu] = useState(false);
  const { logout } = useAuth(); // Obtener la función logout del contexto de autenticación
  const [showSubMenu, setShowSubMenu] = useState(false);

  const rutaCentroRecreativo = () => {
    navigate("centrorecreativo");
  };

  const rutaCentroSalud = () => {
    navigate("centrosalud");
  };

  const rutaUnidadEducativaConvenio = () => {
    navigate("/inicio/unidadeducativa");
  };

  const rutaOficinaDistrital = () => {
    navigate("oficinadistrital");
  };

  const rutatelefonoUrgencia = () => {
    navigate("telefonourgencia");
  };


  const handleLogout = () => {
    logout(); // Llamar a la función logout del contexto de autenticación
}

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full  top-0 bg-green-800
                        p-4 flex flex-col justify-between z-50 ${
                          showMenu ? "left-0" : "-left-full"
                        } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            Administración
          </h1>

          <ul className="text-white">
            <li className="mb-3">
              <Link
                to="/inicio"
                className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors
                                    ${
                                      location.pathname === "/" &&
                                      "bg-primary-900/50 text-white"
                                    }`}
              >
                <FaRegChartBar className="text-primary" /> Inicio
              </Link>
            </li>

            {/* <li 
                        onClick={rutaOficinaDistrital}
                        className='mb-3'>
                        <Link to="/" 
                        className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors
                                    ${ location.pathname ==='/oficinadistrital' && 'bg-primary-900/50 text-white'}`}>
                            <FaRegChartBar className='text-primary'/> Oficina Distrital
                        </Link>

                    </li> */}

            {/* <li 
                        onClick={rutatelefonoUrgencia}
                        className='mb-3'>
                        <Link to="/" 
                        className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors
                                    ${ location.pathname ==='/telefonourgencia' && 'bg-primary-900/50 text-white'}`}>
                            <FaRegChartBar className='text-primary'/>Telefono de Urgencia
                        </Link>

                    </li> */}

            <li onClick={rutaUnidadEducativaConvenio} className="mb-3">
              <Link
                to="/"
                className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors
                                    ${
                                      location.pathname ===
                                        "/unidadeducativa" &&
                                      "bg-primary-900/50 text-white"
                                    }`}
              >
                <FaRegChartBar className="text-primary" />
                Unidades Educativas
              </Link>
            </li>

            {/* Unidades Educativas con Drop Down */}
            {/* <li className='mb-3'>
                        <button className={`w-full flex items-center justify-between gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors
                                        `}
                                onClick={()=>setShowSubMenu(!showSubMenu)}
                            >
                            <span className='flex items-center text-start gap-4'>
                                <FaHome className='text-primary'/> Unidades Educativas
                            </span>
                            <RxCaretRight className={`mt-1 ${showSubMenu && 'rotate-90'} transition-all`}/>
                        </button>
                        <ul className={`my-2 ${!showSubMenu && 'hidden'}`}>
                            <li>
                                <div 
                                    style={{cursor:'pointer'}}
                                    onClick={rutaUnidadEducativaConvenio}
                                    className={`py-2 px-6 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 
                                                before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2
                                                before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors
                                                ${location.pathname === '/unidad/educativa/convenio'&& 'bg-primary-900/50 rounded-full text-white'}`}>
                                    Convenio
                                </div>
                            </li>

                            <li>
                                <div 
                                    style={{cursor:'pointer'}}
                                    onClick={rutaUnidadEducativaPublica}
                                    className={`py-2 px-6 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 
                                                before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2
                                                before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors
                                                ${location.pathname === '/unidad/educativa/publica'&& 'bg-primary-900/50 rounded-full text-white'}`}>
                                    Públicos
                                </div>
                            </li>

                            <li>
                                <div 
                                    style={{cursor:'pointer'}}
                                    onClick={rutaUnidadEducativaPrivada}
                                    className={`py-2 px-6 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 
                                                before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2
                                                before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors
                                                ${location.pathname ==='/unidad/educativa/privada'&& 'bg-primary-900/50 rounded-full text-white' }`}>
                                    Privados
                                </div>
                            </li>
                           
                        </ul>
                    </li> */}

            {/* <li className='mb-3' onClick={rutaCentroRecreativo}>
                        <Link to="/" 
                              className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors
                                            ${location.pathname === '/centrorecreativo' && 'bg-primary-900/50 text-white'}`}
                        >
                            <GiJumpAcross className='text-primary'/> Centros Recreativos
                        </Link>
                    </li> */}

            <li className="mb-3" onClick={rutaCentroSalud}>
              <Link
                to="/"
                className={`flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors
                                        ${
                                          location.pathname ===
                                            "/centrosalud" &&
                                          "bg-primary-900/50 text-white"
                                        }`}
              >
                <MdHealthAndSafety className="text-primary" /> Centros Salud
              </Link>
            </li>
            <li className="mb-3" onClick={() => navigate("centro_deportivo")}>
              <Link
                to="/"
                className=" flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors"
              >
                <MdOutlineSportsKabaddi className="text-primary" /> Centros
                Deportivos
              </Link>
            </li>
            <li className="mb-3" onClick={() => navigate("centro_turisticos")}>
              <Link
                to="/"
                className=" flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors"
              >
                <PiMountainsFill className="text-primary" /> Puntos Turísticos
              </Link>
            </li>

            <li className="mb-3" onClick={() => navigate("centro_policial")}>
              <Link
                to="/"
                className=" flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors"
              >
                <PiMountainsFill className="text-primary" /> Centros Policiales
              </Link>
            </li>

            {/* <li className='mb-3'
                        onClick={rutaCentroSalud}
                    >
                        <Link to="/" className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors'>
                            <FaCalendarPlus   className='text-primary text-xl'/> Centros de Salud
                        </Link>
                    </li> */}

            {/* <li className='mb-3'>
                        <Link to="/" className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors'>
                            <FaPersonShelter className='text-primary'/> Zona Vecinales
                        </Link>
                    </li> */}

            {/* <li className='mb-3'> 
                        <Link to="/" className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors'>
                            <BsBusFrontFill className='text-primary'/> Parada Micros
                        </Link>
                    </li> */}

            <li className="mb-3" onClick={() => navigate("agregarUsuario")}>
              <Link
                to="/"
                className=" flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors"
              >
                <FaPersonCirclePlus className="text-primary" /> Registrar
                Usuario
              </Link>
            </li>

            <li className="mb-3" onClick={() => navigate("visitas")}>
              <Link
                to="/"
                className=" flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors"
              >
                <RiFindReplaceFill className="text-primary" /> Visitas
                
              </Link>
            </li>

            <li className="mb-3" onClick={() => navigate("visitas")}>
              <Link
                to="/"
                className=" flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors"
              >
                <RiCustomerService2Fill  className="text-primary" /> Servicio Distrital            
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <button
            onClick={handleLogout}
            className="text-white flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 transition-colors text-1xl font-semibold"
          >
            <CiLogout className="text-primary" /> Cerrar Sesion
          </button>
        </nav>
      </div>

      <button
        onClick={() => setshowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-green-900 text-black p-3 rounded-full z-50"
      >
        {showMenu ? <IoCloseSharp /> : <SlMenu />}
      </button>
    </>
  );
};

export default Sidebar;
