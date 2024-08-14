import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCardSharp } from "react-icons/io5";
import { FaLock, FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { login } from "../api/UnidadesEducativas";
import Swal from "sweetalert2";
import { useAuth } from "../components/ProteccionRutas/AuthContext";
import DatosContactos from "../components/footer/DatosContactos";

const FormularioLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login: authLogin } = useAuth(); // Obtén la función login del contexto de autenticación

  const fetchingLogin = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "¡No insertó datos!",
        });
      } else {
        const data = await login(email, password);

        if (data && data.error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Error, Datos Incorrectos!",
          });
          console.log("Error en el inicio de sesión:", data.error);
        } else {
          // Guardar la cadena JSON en el sessionStorage
          sessionStorage.setItem("userData", JSON.stringify(data));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sesión Correcta",
            showConfirmButton: false,
            timer: 1500,
          });
          authLogin(); // Llama a la función login del contexto de autenticación
          navigate("/inicio");
        }
      }
    } catch (error) {
      console.log("Error en front para login", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Error en el servidor!",
      });
    }
  };

  return (
    <>
      <div className="w-[80%] mt-24 md:mt-48 md:w-1/2 bg-white/50 block xl:flex justify-center rounded-lg">
        <form onSubmit={fetchingLogin} className="rounded-lg xl:w-1/2 p-5">
          <p className="font-bold text-4xl text-center mb-5">Iniciar Sesión</p>
          <p className="font-bold text-xl">Correo Electrónico</p>
          <div className="relative mb-4">
            <IoCardSharp className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Correo electrónico"
            />
          </div>
          <p className="font-bold text-xl">Contraseña</p>
          <div className="relative mb-8">
            <FaLock className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              onChange={(e) => setPassword(e.target.value)}
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
            type="submit"
            className="bg-primary-300 text-white w-full font-semibold uppercase rounded-lg py-3 cursor-pointer"
          />
        </form>

        <div className="bg-primary-100/80 xl:w-1/2 flex justify-center items-center px-10 rounded-lg rounded-tl-[100px] rounded-tr-[100px]  xl:rounded-tr-[0px] xl:rounded-bl-[100px] ">
          <div className="flex flex-col items-center">
            <h2 className="text-white font-extrabold text-3xl mb-3">Hola!</h2>
            <p className="text-white mb-3 text-center">
              Regístrate con tus datos personales para usar todas las funciones
              del sitio
            </p>

            {/* < button
            className="text-white border-2 py-3 px-10 rounded-xl cursor-pointer"
            // type="submit"
          > Crea <button/> */}
          </div>
        </div>
      </div>
      <DatosContactos />
    </>
  );
};

export default FormularioLogin;
