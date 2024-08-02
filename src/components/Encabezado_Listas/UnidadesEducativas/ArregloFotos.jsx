import { useState, useEffect } from "react"; // Importa useState y useEffect de React
import { createURLFotos } from "../../../api/ArchivoFotos"; // Importa una función de una API para subir fotos

const ArregloFotos = ({ foto = [], setFoto }) => {
  const [images, setimages] = useState([]); // Estado para almacenar las imágenes seleccionadas
  const [dataFoto, setDataFoto] = useState([]); // Estado para almacenar el FormData con las fotos

  // Maneja el cambio en el input de archivos
  const changeInput = (e) => {
    let indexImg;
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }
  
    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);
  
    // Crear un nuevo FormData
    const formData = new FormData();
    Object.keys(e.target.files).forEach((key) => {
      formData.append("files", e.target.files[key]);
    });
  
    // Actualizar el estado de dataFoto con el FormData
    setDataFoto(formData);
  
    console.log(newImgsState);
    console.log(formData);
  };

  // Función para leer múltiples archivos y crear objetos de imagen
  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files; // Obtiene los archivos del evento

    // El array con las imágenes nuevas
    const arrayImages = [];

    // Itera sobre los archivos y crea objetos de imagen
    Object.keys(files).forEach((i) => {
      const file = files[i];
      let url = URL.createObjectURL(file); // Crea una URL para mostrar la imagen

      // Agrega la imagen al array
      arrayImages.push({
        file,
        index: indexInicial,
        name: file.name,
        url,
      });

      // dataFoto.push(
      //   {
      //     name: "file",
      //     file: file
      //   }
      // ); // Agrega el archivo al FormData
     
      // console.log(dataFoto); // Log para depuración 

      indexInicial++; // Incrementa el índice para la siguiente imagen
    });

    // Después de haber concluido el ciclo retornamos las nuevas imágenes
    return arrayImages;
  }

  //cargar datos en el formData
   // Función para leer múltiples archivos y crear objetos de imagen
   function readmultifilesDATA(e, indexInicial) {
    const files = e.currentTarget.files; // Obtiene los archivos del evento

    // El array con las imágenes nuevas
    const arrayImages = [];

    // Itera sobre los archivos y crea objetos de imagen
    Object.keys(files).forEach((i) => {
      const file = files[i];
      // let url = URL.createObjectURL(file); // Crea una URL para mostrar la imagen

      // Agrega la imagen al array
      arrayImages.push({
        file,
        // index: indexInicial,
        // name: file.name,
        // url,
      });

      // dataFoto.push(
      //   {
      //     name: "file",
      //     file: file
      //   }
      // ); // Agrega el archivo al FormData
     
      // console.log(dataFoto); // Log para depuración 

      indexInicial++; // Incrementa el índice para la siguiente imagen
    });

    // Después de haber concluido el ciclo retornamos las nuevas imágenes
    return arrayImages;
  }

  // Función para eliminar una imagen
  function deleteImg(indice) {
    // Filtra las imágenes para eliminar la seleccionada
    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs); // Log para depuración
    // Actualiza el estado de imágenes
    setimages(newImgs);
  }

  
  useEffect(() => {
    const convertirCloudinary = async () => {
      if (dataFoto) {
        try {
          console.log("DataFoto before sending to API:", dataFoto);
          const response = await createURLFotos(dataFoto); // Llama a la API para subir las fotos
          setFoto(response.imageUrls); // Actualiza el estado de fotos con las URLs recibidas
          console.log("Response from API:", response.imageUrls);
        } catch (error) {
          console.error("Error en el componente ArregloFotos", error);
        }
      }
    };
    convertirCloudinary();
  }, [dataFoto, setFoto]);

  return (
    <div className="container mx-auto">
      <br />
      <label className="btn btn-warning bg-yellow-500 text-white px-4 rounded cursor-pointer inline-block">
        <span>Seleccionar archivos</span>
        <input hidden type="file" multiple onChange={changeInput} /> {/* Input para seleccionar múltiples archivos */}
      </label>

      <section className="overflow-auto h-44">
        <div className="flex flex-wrap">
          {images.map((imagen) => (
            <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-2" key={imagen.index}> {/* Muestra cada imagen */}
              <div className="relative">
                <button
                  className="absolute top-2 right-2 bg-red-600 text-white px-2 rounded"
                  onClick={() => deleteImg(imagen.index)} // Botón para eliminar la imagen
                >
                  x
                </button>
                <img
                  alt={imagen.name}
                  src={imagen.url}
                  className="w-full h-auto object-cover rounded" // Muestra la imagen
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArregloFotos; // Exporta el componente
