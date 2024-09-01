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

// U    S   U   A    R    I   O    S


export const getUsuarios = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/usuarios";
    const datosUsuario = await axios.get(url);
    return datosUsuario.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/getUsuarios",
      error
    );
  }
};


export const getUsuariosId = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/usuarios/${id}`;
    const datoUsuario = await axios.get(url);
    return datoUsuario.data;
  } catch (error) {
    console.log(
      "Error Api getDatoGeneralUEid",
      error
    );
  }
};

export const createUsuarios = async ( name, email, password, roles ) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/usuarios";
    const body = {
      name,
      email,
      password,
      roles
    };
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos createUsuario", error);
  }
};




export const updateUsuarios = async (
  id,
  name,
  email, 
  password, 
  roles 
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/usuarios/${id}`;

    const body = {
      name,
      email, 
      password, 
      roles 
    };

    const response = await axios.patch(url, body);

    return response.data;
  } catch (error) {
    console.log("Error Api updateUsuarios", error.response.data);
    throw error;
  }
};



export const deleteUsuarioId = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/usuarios/+${id}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/deleteUsuarioId",
      error
    );
  }
};

