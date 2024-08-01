import { useState } from "react";
import axios from "axios";

const Encabezado_Arreglo_CargarFotos = ({ foto, setFoto }) => {
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setFoto((prevImages) => [...prevImages, ...newImages]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      foto.forEach((image, index) => {
        // Para obtener el archivo original, necesitas hacer una referencia al archivo real
        formData.append(`file${index}`, image.file); // `image.file` debe ser el archivo real
      });

      const baseUrl = import.meta.env.VITE_BASE_URL;
      const url = `${baseUrl}/files/fotos`;

      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div>
      <h3 className="text-2xl text-center font-semibold">Cargar las Fotos</h3>

      <input
        className="w-full font-semibold mt-3"
        type="file"
        multiple
        onChange={handleImageUpload}
      />

      <div>
        <h3 className="text-center font-semibold">Imágenes cargadas:</h3>
        <ul className="h-32 overflow-y-auto">
          {foto && foto.map((image, index) => (
            <li className="bg-gray-100 my-2 rounded-xl px-2" key={index}>
              <img src={image} alt={`Uploaded preview ${index}`} className="h-16 w-auto" />
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Enviar Imágenes
      </button>
    </div>
  );
};

export default Encabezado_Arreglo_CargarFotos;
