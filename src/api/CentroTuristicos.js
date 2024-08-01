// apiServices.js
import axios from "axios";

export const getDatoCentroTuristicos = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/centrosturisticos";
    const datosCentroTuristicos = await axios.get(url);
    return datosCentroTuristicos.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/entroTuristicos",
      error
    );
  }
};

export const getDatoCentroTuristicosID = async (id) => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const url = baseUrl + `/centrosturisticos+${id}`;
      const datosCentroTuristicos = await axios.get(url);
      return datosCentroTuristicos.data;
    } catch (error) {
      console.log(
        "Error no se pudo obtener los Datos Backend ApiServices/getDatoCentroTuristicosID",
        error
      );
    }
  };

export const createDatoCentroTuristico = async ({
  nombre,
  coordenada_x,
  coordenada_y,
  direccion,
  uv,
  historia,
  videoUrl,
  fotos,
}) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/centrosturisticos";

    const body = {
        nombre,
        coordenada_x,
        coordenada_y,
        direccion,
        uv,
        historia,
        videoUrl,
        fotos,
    };
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos createDatoCentroTuristico", error);
  }
};

export const deleteCentroTuristico = async ({id}) => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const url = baseUrl + `/centrosturisticos/+${id}`;
      const datosCentroTuristico = await axios.delete(url);
      return datosCentroTuristico.data;
    } catch (error) {
      console.log(
        "Error no se pudo obtener los Datos Backend ApiServices/deleteCentroTuristico",
        error
      );
    }
  };