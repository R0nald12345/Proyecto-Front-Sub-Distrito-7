import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { IoCardSharp } from "react-icons/io5";

import { FaLock } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { login } from '../api/UnidadesEducativas';
import Swal from 'sweetalert2';

const FormularioLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const navigate = useNavigate();

  const fetchingLogin = async (e) => {
    e.preventDefault();

    try {
      if (email === '' || password === '') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No insertó datos!",
        });
      }else{
        const data = await login(email, password);
        if (data && data.error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Error, Datos Incorrectos!",
            });
            console.log('Error en el inicio de sesión:', data.error); // Manejar el error de inicio de sesión
        } else {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Sesión Correcta",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/inicio');
        }
      }
    } catch (error) {
      console.log('Error en front para loging', error);
    }
  };
  
  return (
    <>
      <div className=' w-[80%] md:w-1/2 bg-white/50 block xl:flex justify-center rounded-lg'>
          <form 
            onSubmit={(e)=>fetchingLogin(e)}
            className=' rounded-lg xl:w-1/2 p-5'>
            <p className='font-bold text-4xl text-center mb-5'>Iniciar Sesión</p>
            <p className='font-bold text-xl'>Correo Electrónico</p>
            <div className="relative mb-4">
              <IoCardSharp className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
                placeholder="Correo electrónico"
              />
            </div>
            <p className='font-bold text-xl'>Contraseña</p>
            <div className="relative mb-8">
              <FaLock className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                onChange={(e)=>setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
                placeholder="Contraseña"
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary text-2xl"
                />
              ) : (
                <IoMdEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary text-2xl"
                />
              )}
            </div>
            <input 
              type='submit' 
              className='bg-primary-300 text-white w-full font-semibold uppercase rounded-lg py-3 cursor-pointer'
            />
          </form>

          <div className='bg-primary-100/80 xl:w-1/2 flex justify-center items-center px-10 rounded-lg rounded-tl-[100px] rounded-tr-[100px]  xl:rounded-tr-[0px] xl:rounded-bl-[100px] ' >
            <div className='flex flex-col items-center'>
              <h2 className='text-white font-extrabold text-3xl mb-3'>Hola!</h2>
              <p className='text-white mb-3 text-center'>Registrate con tus datos personales para usar todas las funciones del sitio</p>
              <input 
                className='text-white border-2 py-3 px-10 rounded-xl cursor-pointer'
                type='submit'
                value='Crear Cuenta'
              />

            </div>
          </div>
      </div>
    </>
  )
}

export default FormularioLogin
