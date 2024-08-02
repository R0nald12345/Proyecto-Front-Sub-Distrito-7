import axios from "axios";


export const createURLFotos = async (formData) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/files/fotos`;
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error no se pudo obtener los Datos", error.response?.data || error.message);
    throw error;
  }
};
