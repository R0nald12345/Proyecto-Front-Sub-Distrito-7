import React from "react";

const DatosContactos = () => {
  return (
    <footer className="w-full mt-auto p-3 bg-black/70">
      <div>
        <h4 className="text-center md:text-start text-white text-xl font-medium">
          Proyecto Desarrollado Por:
        </h4>
        <div className="text-center md:text-start md:flex justify-around mt-2">
          <p className="text-white font-medium">
            {" "}
            Salazar Vargas Guido - 72669261
          </p>
          <p className="text-white font-medium">
            Alejandro Sahonero - 78452415
          </p>
          <p className="text-white font-medium">
            Ronald Camino Puma - 69003180
          </p>
        </div>

        <p className="text-white text-center font-new-font mt-3 ">
          &copy; 2024 Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default DatosContactos;
