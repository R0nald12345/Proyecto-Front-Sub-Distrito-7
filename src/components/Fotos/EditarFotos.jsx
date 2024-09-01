import { FcStackOfPhotos } from "react-icons/fc";
import EditarFotos_Listado from "./EditarFotos_Listado";
import "../../../src/styles.css";
import { useState, useEffect } from "react";
import { createURLFotos } from "../../api/ArchivoFotos";

const EditarFotos = ({ fotos, setFotos, setFotoActualizado }) => {
  const [fotoNueva, setFotoNueva] = useState(null);

//   let arregloUrl = fotos.map(foto => foto.url);

  // Actualizar setFotoActualizado con las URLs de las fotos proporcionadas a través de las props
  useEffect(() => {
    let arregloUrl = fotos.map(foto => foto.url);
    setFotoActualizado(arregloUrl);
  }, [fotos, setFotoActualizado]);
   

  const handleDelete = (id) => {
    // Filtra las imágenes para eliminar la que tiene el id correspondiente
  const updatedImages = fotos.filter((image) => image.id !== id);
  setFotos(updatedImages); // Actualiza el estado en el componente padre

  // Extraer solo las URLs de las imágenes actualizadas
  const updatedUrls = updatedImages.map((image) => image.url);
  setFotoActualizado(updatedUrls); // Actualiza el estado con las URLs
  };

  // Función para convertir fotos usando Cloudinary
  const convertirCloudinary = async (e) => {
    try {
      const fileFoto = e.currentTarget.files;
      const formData = new FormData();

      // Agregar archivos a FormData
      for (let i = 0; i < fileFoto.length; i++) {
        formData.append("files", fileFoto[i]);
      }
      console.log("formData", formData);

      const response = await createURLFotos(formData); // Llama a la API para subir las fotos
      const imageUrls = response.imageUrls;

      // Crear un arreglo de objetos con id y url
      const newPhotos = imageUrls.map((url, index) => ({
        id: fotos.length + index + 1, // Generar un nuevo id
        url: url
      }));

      return newPhotos;
    } catch (error) {
      console.error("Error en el componente EditarFotos", error);
    }
  };

  // Maneja el cambio en el input de archivos
  const changeInput = async (e) => {
    // Obtengo la foto convertida de Cloudinary
    let newImgsToState = await convertirCloudinary(e);

    let newImgsState = [...fotos, ...newImgsToState];
    console.log("newImgsStateeeeeee", newImgsState);
    setFotos(newImgsState);

    // setFotos(...fotos, newImgsToState);
      // Extraer solo las URLs de las fotos
  let urls = newImgsState.map(foto => foto.url);
  console.log("URLs", urls);

  // Actualizar el estado con las URLs
  setFotoActualizado(urls);
  };

  return (
    <>
      <section>
        <br />
        <label className="btn btn-warning bg-yellow-500 text-white px-4 rounded cursor-pointer inline-block">
          <span>Seleccionar archivos</span>
          <input hidden type="file" multiple onChange={changeInput} />{" "}
          {/* Input para seleccionar múltiples archivos */}
        </label>
        <div className="flex flex-wrap gap-2 mt-3 max-h-60 md:max-h-32  overflow-y-auto scrollbar-hide">
          {fotos && fotos.length > 0 ? (
            fotos.map((foto, index) => (
              <div key={index} className="relative">
                <img
                  src={foto.url}
                  alt="imagen"
                  className="w-[100px] h-[100px] bg-gray-200 rounded-lg m-2 flex items-center justify-center"
                />
                <button
                  className="absolute top-2 right-0 bg-red-600 font-bold text-white px-2 rounded"
                  onClick={() => handleDelete(foto.id)}
                >
                  x
                </button>
              </div>
            ))
          ) : (
            <p>No hay suficientes imágenes para mostrar.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default EditarFotos; // Exporta el componente