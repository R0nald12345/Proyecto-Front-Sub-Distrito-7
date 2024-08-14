import { Link } from "react-router-dom";
import DatosContactos from "../footer/DatosContactos";


const MainBienvenida = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <div className="text-center mx-auto text-white mt-64">
        <h1 className="text-7xl font-bold">Bienvenido</h1>
        <p className="font-medium text-3xl mt-5">Al mejor distrito</p>
        <div className="mt-10">
          <Link
            className="bg-green-600 px-8 py-3 rounded-lg font-semibold"
            to="auth"
          >
            Login
          </Link>
        </div>
      </div>

      <DatosContactos/>
      
    </div>
  );
};

export default MainBienvenida;
