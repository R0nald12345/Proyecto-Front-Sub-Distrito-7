import { useState } from "react"; // Importa el hook useState de React para manejar el estado.
import axios from "axios"; // Importa la librería axios para hacer peticiones HTTP.

const Encabezado_Arreglo_CargarFotos = ({ foto, setFoto }) => { // Define un componente funcional de React que recibe dos props: foto y setFoto.
  
  // Define una función asincrónica que se ejecuta cuando el usuario selecciona archivos.
  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files); // Convierte los archivos seleccionados a un array.
    
    // Usa Promise.all para esperar a que todas las promesas de subida de imágenes se completen.
    const newImages = await Promise.all(
      files.map(async (file) => { // Mapea cada archivo a una promesa de subida de imagen.
        const formData = new FormData(); // Crea un nuevo objeto FormData para enviar archivos en la petición.
        formData.append("file", file); // Añade el archivo al FormData.

        const baseUrl = import.meta.env.VITE_BASE_URL; // Obtiene la URL base del entorno de variables.
        const url = `${baseUrl}/files/fotos`; // Construye la URL completa para la petición de subida de imagen.

        try {
          // Intenta hacer una petición POST a la URL para subir la imagen.
          const response = await axios.post(url, formData, {
            headers: {
              'Content-Type': 'multipart/form-data' // Especifica que el contenido es de tipo multipart/form-data.
            }
          });
          return response.data.url; // Devuelve la URL de la imagen subida que el servidor responde.
        } catch (error) {
          console.error('Error uploading image:', error); // Muestra un mensaje de error si algo falla durante la subida.
          return null; // Devuelve null en caso de error.
        }
      })
    );

    const validImages = newImages.filter((image) => image !== null); // Filtra las imágenes válidas (que no son null).
    setFoto((prevImages) => [...prevImages, ...validImages]); // Actualiza el estado con las nuevas imágenes válidas.
  };

  return (
    <div>
      <h3 className="text-2xl text-center font-semibold">Cargar las Fotos</h3> {/* Título del componente */}
      <input
        className="w-full font-semibold mt-3" // Estilos del input.
        type="file" // Tipo de input para seleccionar archivos.
        multiple // Permite seleccionar múltiples archivos.
        onChange={handleImageUpload} // Maneja el evento de cambio (cuando se seleccionan archivos).
      />
      <div>
        <h3 className="text-center font-semibold">Imágenes cargadas:</h3> {/* Subtítulo para las imágenes cargadas */}
        <ul className="h-32 overflow-y-auto">
          {foto && foto.map((image, index) => ( // Mapea las URLs de las imágenes cargadas para mostrarlas.
            <li className="bg-gray-100 my-2 rounded-xl px-2" key={index}> {/* Estilos de los elementos de la lista */}
              <img src={image} alt={`Uploaded preview ${index}`} className="h-16 w-auto" /> {/* Muestra cada imagen */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Encabezado_Arreglo_CargarFotos; // Exporta el componente para su uso en otros archivos.
