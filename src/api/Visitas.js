// apiServices.js
import axios from "axios";

export const getDatoVisitas = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/visitas";
    const datosCentroTuristicos = await axios.get(url);
    return datosCentroTuristicos.data;
  } catch (error) {
    console.log(
      "Error getDatoVisitas",
      error
    );
  }
};

export const getDatoVisitasID = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/visitas/${id}`;
    const datosVisita = await axios.get(url);
    return datosVisita.data;
  } catch (error) {
    console.log(
      "Error getDatoVisitasID",
      error
    );
  }
};

export const createDatoVisitas = async (
  titulo,
  fecha,
  motivo,
  visitantes,
  idUnidadEducativa
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/visitas";

    const body = {
      titulo,
      fecha,
      motivo,
      visitantes,
      idUnidadEducativa,
    };
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.log(
      "Error createDatoVisitas",
      error
    );
  }
};

export const updateDatoVisitas = async (
  id,
  titulo,
  fecha,
  motivo,
  visitantes,
  dataIdUE
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/visitas/${id}`;

    const body = {
      titulo,
      fecha,
      motivo,
      visitantes,
      idUnidadEducativa: dataIdUE,
    };
    const response = await axios.patch(url, body);
    return response.data;
  } catch (error) {
    console.log(
      "Error  updateDatoVisitas",
      error
    );
  }
};

export const deleteVisitas = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/visitas/${id}`;
    const datosVisitas = await axios.delete(url);
    return datosVisitas.data;
  } catch (error) {
    console.log(
      "Error deleteVisitas",
      error
    );
  }
};
