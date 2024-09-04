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
  videoUrl,
  paginawebUrl,
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
      videoUrl,
      paginawebUrl,
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
  videoUrl,
  paginawebUrl,
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
      videoUrl,
      paginawebUrl,
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


// E  S  P  E  C  I  A  L  I  D  A  D  E  S

export const getDatoEspecialidades = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/especialidades";
    const datosCentroSalud = await axios.get(url);
    return datosCentroSalud.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/CentroSalud",
      error
    );
  }
};

export const nuevaEspecialidad = async (
  nombre,
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/especialidades";

    const body = {
      nombre,
      
    };

    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos", error);
  }
};

export const updateEspecialidad = async (
  id,
  nombre,

) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/especialidades/${id}`;

    const body = {
      nombre
    };

    const response = await axios.patch(url, body);
    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos", error);
  }
};



export const getDatoEspecialidadID = async (id) => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const url = baseUrl + `/especialidades/${id}`;
      const datosCentroSalud = await axios.get(url);
      return datosCentroSalud.data;
    } catch (error) {
      console.log(
        "Error no se pudo obtener los Datos Backend ApiServices/CentroSalud",
        error
      );
    }
  };


export const deleteEspecialidad = async ( id ) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/especialidades/${id}`;
    const datosCentroSalud = await axios.delete(url);
    return datosCentroSalud.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/CentroSalud",
      error
    );
  }
};









// E  N  C  A  R  G  A  D  O  S   D E    E  S  P  E  C  I  A  L  I  D  A  D  E  S

export const getDatoCentroSaludHasEspecialidades   = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/centrosaludhasespecialidades";
    const datosCentroSalud = await axios.get(url);
    return datosCentroSalud.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/getDatoCentroSaludHasEspecialidades",
      error
    );
  }
};

export const nuevaCentroSaludHasEspecialidades = async (
  encargado,
  idCentroSalud,
  idEspecialidad

) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/centrosaludhasespecialidades";

    const body = {
      encargado,
      idCentroSalud,
      idEspecialidad
      
    };

    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos", error);
  }
};

export const updateCentroSaludHasEspecialidades = async (
  id,
  encargado,
  idCentroSalud,
  idEspecialidad

) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/centrosaludhasespecialidades/${id}`;

    const body = {
      encargado,
      idCentroSalud,
      idEspecialidad
    };

    const response = await axios.patch(url, body);
    console.log('responseeeeee',response.data);
    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos", error);
  }
};



export const getDatoCentrosaludHasEspecialidadeID = async (id) => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const url = baseUrl + `/centrosaludhasespecialidades/${id}`;
      const datosCentroSalud = await axios.get(url);
      return datosCentroSalud.data;
    } catch (error) {
      console.log(
        "Error no se pudo obtener los Datos Backend ApiServices/getDatoCentrosaludHasEspecialidadeID",
        error
      );
    }
  };


export const deleteCentrosaludhasEspecialidades = async ( id ) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/centrosaludhasespecialidades/${id}`;
    const datosCentroSalud = await axios.delete(url);
    return datosCentroSalud.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/deleteCentrosaludhasEspecialidades",
      error
    );
  }
};



