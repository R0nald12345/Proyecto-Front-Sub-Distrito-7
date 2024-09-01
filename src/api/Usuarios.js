import axios from "axios";


export const createUsuario = async ( name, email, password, roles ) => {
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
    const url = baseUrl + `/usuarios/+${id}`;
    const datoUsuario = await axios.get(url);
    return datoColegio.data;
  } catch (error) {
    console.log(
      "Error Api getDatoGeneralUEid",
      error
    );
  }
};

export const createDatoGeneralUE = async ({
  nombre,
  coordenada_x,
  coordenada_y,
  direccion,
  historia,
  video,
  slug,
  fotos,
  idInfraestructura,
  idTipoColegio,
  idTurno,
  numero,
  horario,
  director,
  juntaescolar
}) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/unidadeseducativas`;

    const body = {
      nombre,
      coordenada_x,
      coordenada_y,
      direccion,
      historia,
      video,
      slug,
      fotos,
      idInfraestructura,
      idTipoColegio,
      idTurno,
      gestion: {
        numero,
        horario,
        director,
        juntaescolar
      }
    };

    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos", error.response.data);
    throw error;
  }
};



export const ActualizarlUE = async (
  id,
  nombre,
  coordenada_x,
  coordenada_y,
  direccion,
  historia,
  video,
  slug,
  fotos,
  idInfraestructura,
  idTipoColegio,
  idTurno,
  numero,
  horario,
  director,
  juntaescolar
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/unidadeseducativas/${id}`;

    const body = {
      nombre,
      coordenada_x,
      coordenada_y,
      direccion,
      historia,
      video,
      slug,
      fotos,
      idInfraestructura,
      idTipoColegio,
      idTurno,
      gestion: {
        numero,
        horario,
        director,
        juntaescolar
      }
    };

    const response = await axios.patch(url, body);

    return response.data;
  } catch (error) {
    console.log("Error Api ActualizarlUE", error.response.data);
    throw error;
  }
};



export const deleteUsuarioId = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/unidadeseducativas/+${id}`;
    const datosTipoColegio = await axios.delete(url);
    return datosTipoColegio.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/DeleteUEidid",
      error
    );
  }
};

