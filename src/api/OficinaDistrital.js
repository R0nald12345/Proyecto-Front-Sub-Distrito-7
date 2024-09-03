// apiServices.js
import axios from "axios";

export const getDatoOficinaDistrital = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/oficinadistrital";
    const datosOficinaDistrital = await axios.get(url);
    return datosOficinaDistrital.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/getDatoOficinaDistrital",
      error
    );
  }
};




export const updateDatoDistritoOficial = async (
  
  encargado,
  horario,
  coordenada_x,
  coordenada_y,
  direccion,
  fotoUrl,
  numeroTelefono,
  serviciosPublicos
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/oficinadistrital`;

    const body = {
      encargado,
      horario,
      coordenada_x,
      coordenada_y,
      direccion,
      fotoUrl,
      numeroTelefono,
      serviciosPublicos
    };

    console.log("body", body);
    const response = await axios.patch(url, body);
    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos updateDatoDistritoOficial", error);
  }
};

export const deleteCentroTuristico = async (id) => {
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