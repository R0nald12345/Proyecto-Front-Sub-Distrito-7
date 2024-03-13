import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { IoCardSharp } from "react-icons/io5";

import { FaLock } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";

const FormularioLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const cambiarRuta=()=>{
    navigate('/');
  }

  return (
    <div className='w-1/2 bg-white/50 flex justify-center rounded-lg'>
        <form className=' rounded-lg w-1/2 p-5'>
          
          
          <p className='font-bold text-4xl text-center mb-5'>Iniciar Sesión</p>

          <p className='font-bold text-xl'>Correo Electrónico</p>

          <div className="relative mb-4">
          
            <IoCardSharp className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Correo electrónico"
            />
          </div>


          <p className='font-bold text-xl'>Contraseña</p>
          <div className="relative mb-8">
            <FaLock className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
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

          <p className='text-center font-semibold mb-2'>Olvidaste tu contraseña</p>

          <input type='submit' className='bg-primary-300 text-white w-full font-semibold uppercase rounded-lg py-3' onClick={cambiarRuta}/>

        </form>

        <div className='bg-primary-100/80 w-1/2 flex justify-center items-center px-10 rounded-lg rounded-tl-[100px]  rounded-bl-[100px]' >
          <div className='flex flex-col items-center'>
            <h2 className='text-white font-extrabold text-3xl mb-3'>Hola!</h2>
            <p className='text-white mb-3 text-center'>Registrate con tus datos personales para usar todas las funciones del sitio</p>
            <button className='text-white border border-2 py-3 px-10 rounded-xl'>Registrarse</button>

          </div>
        </div>
    </div>
  )
}

export default FormularioLogin
