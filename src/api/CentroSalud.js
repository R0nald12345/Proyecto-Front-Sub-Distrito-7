// apiServices.js
import axios from "axios";

export const getDatoCentroSalud = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/centrossaluds";
    const datosCentroSalud = await axios.get(url);
    return datosCentroSalud.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/CentroSalud",
      error
    );
  }
};

export const nuevoCentroSalud = async (
  nombre,
  coordenada_x,
  coordenada_y,
  direccion,
  uv,
  horario,
  nivel,
  video,
  paginaweburl,
  fotos,
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/centrossaluds";

    const body = {
      nombre,
      coordenada_x,
      coordenada_y,
      direccion,
      uv,
      horario,
      nivel,
      video,
      paginaweburl,
      fotos,
    };

    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos", error);
  }
};

export const updateCentroSalud = async (
  id,
  nombre,
  coordenada_x,
  coordenada_y,
  direccion,
  uv,
  horario,
  nivel,
  video,
  paginaweburl,
  fotoActualizado,
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/centrossaluds/${id}`;

    const body = {
      nombre,
      coordenada_x,
      coordenada_y,
      direccion,
      uv,
      horario,
      nivel,
      video,
      paginaweburl,
      fotos:fotoActualizado,
    };

    const response = await axios.patch(url, body);
    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos", error);
  }
};



export const getDatoCentroSaludID = async (id) => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const url = baseUrl + `/centrossaluds/${id}`;
      const datosCentroSalud = await axios.get(url);
      return datosCentroSalud.data;
    } catch (error) {
      console.log(
        "Error no se pudo obtener los Datos Backend ApiServices/CentroSalud",
        error
      );
    }
  };


export const deleteDatoCentroSalud = async ( id ) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/centrossaluds/${id}`;
    const datosCentroSalud = await axios.delete(url);
    return datosCentroSalud.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/CentroSalud",
      error
    );
  }
};
