import { useState } from "react";

const Encabezado_Arreglo_CargarFotos = ({foto,setFoto}) => {
//   const [imageNames, setImageNames] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const names = files.map((file) => file.name);
    setFoto((prevNames) => [...prevNames, ...names]);
  };
  return (
    <div>
      
      <h3 className="text-2xl text-center font-semibold"> Cargar las Fotos</h3>

      <input className="w-full font-semibold mt-3" type="file" multiple onChange={handleImageUpload} />
      <div>
        <h3 className="text-center font-semibold ">Imagenes cargadas:</h3>
          <ul className=" h-32 overflow-y-auto ">
            {/* {foto.map((name, index) => (
              <li className="bg-gray-100 my-2 rounded-xl px-2" key={index}>
                {name}
              </li>
            ))} */}
          </ul>

        </div>
      </div>
  );
};

export default Encabezado_Arreglo_CargarFotos;
