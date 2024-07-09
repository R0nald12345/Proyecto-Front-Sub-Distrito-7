import axios from "axios";


export const createUsuario = async ({ name, email, password }) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/auth/register";
    const body = {
      name,
      email,
      password,
    };
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos createUsuario", error);
  }
};
