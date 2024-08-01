import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useForm from "../../../hooks/useForm";
import { createGestion } from "../../../api/UnidadesEducativas";

const FormAgregarGestion = ({ open, OnClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const { onInputChange, horario, numero, director } = useForm({
    horario: "",
    numero: 0,
    director: "",
  });

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const juntaescolar = imagePreviewUrl;
      const response = await createGestion({
        horario,
        numero,
        director,
        juntaescolar,
      });
      
      // Verifica que la respuesta contiene el ID esperado antes de almacenarlo
      if (response && response.id) {
        sessionStorage.setItem("idGestion", response.id);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Nueva Gestión creada exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/inicio/unidadeducativa/agregarnuevo");
        console.log("Nueva Gestión creada: ", response);
      } else {
        // Manejo de error si la respuesta no contiene el ID
        throw new Error("La respuesta no contiene un ID válido.");
      }
    } catch (error) {
      console.error("Error al enviar formulario: ", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error al crear la gestión",
        text: error.message,
        showConfirmButton: true,
      });
    }

    OnClose(); // Cierra el modal después de enviar el formulario
  };

  if (!open) {
    return null;
  }

  const clickButton = () => {
    OnClose();
    setImagePreviewUrl(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form className="bg-white rounded-lg p-5 w-[25%]" onSubmit={handleSubmit}>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-red-700 hover:bg-red-800 text-white text-xl px-3 rounded-full py-1"
            onClick={clickButton}
          >
            X
          </button>
        </div>
        <h3 className="uppercase font-semibold text-gray-600 mt-2 mb-1 text-center text-2xl">
          Gestión
        </h3>
        <h2 className="bg-yellow-300 text-gray-500 font-semibold text-center text-xl rounded-lg my-2 px-1">
          Primero rellene estos datos, si no tiene datos puede dejarlos en vacío
        </h2>
        <section className="border border-black/50 rounded-lg px-5 py-3">
          <div>
            <p className="uppercase font-semibold text-gray-600 mt-1">Horario</p>
            <input
              name="horario"
              type="text"
              value={horario}
              onChange={onInputChange}
              className="w-full border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
            />
          </div>
          <div className="w-full">
            <p className="uppercase font-semibold text-gray-600 mt-1">Número</p>
            <input
              name="numero"
              type="text"
              value={numero}
              onChange={onInputChange}
              className="w-full border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
              placeholder="Introduce Número"
            />
          </div>
          <div>
            <p className="uppercase font-semibold text-gray-600 mt-1">Director</p>
            <input
              name="director"
              type="text"
              value={director}
              onChange={onInputChange}
              placeholder="Nombre Director"
              className="w-full border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100"
            />
          </div>
          <div>
            <p className="uppercase font-semibold text-gray-600 mt-1">Junta Escolar</p>
            <div>
              <input type="file" onChange={handleFileChange} />
            </div>
            <div className="w-full border-2 rounded-xl border-gray-400" style={{ height: "260px" }}>
              {imagePreviewUrl && (
                <img
                  src={imagePreviewUrl}
                  alt="Imagen de la junta escolar"
                  className="w-full h-full object-cover bg-cover bg-blend-overlay mt-2 rounded-xl"
                />
              )}
            </div>
          </div>
        </section>
        <input
          type="submit"
          value="Enviar"
          className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg py-2 mt-3 text-xl font-semibold cursor-pointer"
        />
      </form>
    </div>
  );
};

export default FormAgregarGestion;
