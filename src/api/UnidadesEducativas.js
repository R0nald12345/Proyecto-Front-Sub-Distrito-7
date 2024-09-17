// apiServices.js
import axios from "axios";

// export const getDatoGeneralUE = async () => {
//   try {
//     const baseUrl = import.meta.env.VITE_BASE_URL;
//     const url = baseUrl + "/unidadeseducativas";
//     const datosTipoColegio = await axios.get(url);
//     return datosTipoColegio.data;
//   } catch (error) {
//     console.log(
//       "Error no se pudo obtener los Datos Backend ApiServices/UnidadesEducativass",
//       error
//     );
//   }
// };


export const getDatoGeneralUE = async (limit) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/unidadeseducativas";
    const params = limit ? { limit } : {};
    const datosTipoColegio = await axios.get(url, { params });
    return datosTipoColegio.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiServices/UnidadesEducativas",
      error
    );
  }
};



export const getDatoGeneralUEid = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + `/unidadeseducativas/+${id}`;
    const datoColegio = await axios.get(url);
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
  juntaescolar,
  serviciosPublicos
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
      },
      serviciosPublicos
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
  uv,
  slug,
  fotos,

  idInfraestructura,
  idTipoColegio,
  idTurno,

  numero,
  horario,
  director,
  juntaescolar,
  serviciosPublicos
  
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
      uv,
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
      },
      serviciosPublicos
    };

    const response = await axios.patch(url, body);

    return response.data;
  } catch (error) {
    console.log("Error Api ActualizarlUE", error.response.data);
    throw error;
  }
};



export const deleteUEid = async (id) => {
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


//***************** G E S T I O N ********************


export const createGestion = async ({ horario, numero, director, juntaescolar }) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/gestiones";

    const body = {
      numero,
      horario,
      director,
      juntaescolar,
    };
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.log("Error no se pudo obtener los Datos createGestion", error);
  }
};
//************  TiposColegio ************************

export const getDatoGeneralTiposColegio = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/tipocolegios";
    const datosTipoColegio = await axios.get(url);
    return datosTipoColegio.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos de los Tipos Colegios",
      error
    );
  }
};



export const getTipoColegioID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/tipocolegios/${id}`;
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getTipoColegioID", e);
  }
};


export const crearTipoColegio = async (
  nombre,
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/tipocolegios`;
    const datos = { nombre };
    const response = await axios.post(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api crearTipoColegio", e);
  }
};


export const actualizarTipoColegio = async (
  id,
  nombre,
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = `${url}/tipocolegios/${id}`;
    const datos = { 
        nombre, 
    };
    const response = await axios.patch(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el API actualizarTipoColegio", e);
  }
};



export const deleteTipoColegioID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/tipocolegios/${id}`;
    const response = await axios.delete(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api deleteTipoColegioID", e);
  }
};




//************  TiposTunos ************

export const getDatoGeneralTiposTurno = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/turnos";
    const datosTipoTurno = await axios.get(url);
    return datosTipoTurno.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos de los Tipos Turnos",
      error
    );
  }
};


export const getTurnoID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/turnos/${id}`;
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getTurnoID", e);
  }
};


export const crearTurno = async (
  nombre,
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/turnos`;
    const datos = { nombre };
    const response = await axios.post(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api crearTurno", e);
  }
};


export const actualizarTurno = async (
  id,
  nombre,
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = `${url}/turnos/${id}`;
    const datos = { 
        nombre, 
    };
    const response = await axios.patch(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el API actualizarTurno", e);
  }
};



export const deleteTurnoID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/turnos/${id}`;
    const response = await axios.delete(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api deleteTurnoID", e);
  }
};




















//************ Tipos InfraEstrcutura ************

export const getDatoGeneralTiposInfraestructura = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/infraestructuras";
    const datosTipoInfraestructura = await axios.get(url);
    return datosTipoInfraestructura.data;
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos de los Tipos Infraestructura",
      error
    );
  }
};



export const getInfraestructuraID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/infraestructuras/${id}`;
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getInfraestructuraID", e);
  }
};


export const crearInfraestructura = async (
  nombre,
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/infraestructuras`;
    const datos = { nombre };
    const response = await axios.post(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api crearInfraestructura", e);
  }
};


export const actualizarInfraestructura = async (
  id,
  nombre,
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = `${url}/infraestructuras/${id}`;
    const datos = { 
        nombre, 
    };
    const response = await axios.patch(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el API actualizarInfraestructura", e);
  }
};



export const deleteInfraestructuraID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/infraestructuras/${id}`;
    const response = await axios.delete(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api deleteInfraestructuraID", e);
  }
};







//************ LOGIN ************!/

export const login = async (email, password) => {
  try {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = baseURL + "/auth/login";

    // Objeto con los datos del usuario a enviar en la solicitud POST
    const userData = {
      email: email,
      password: password,
    };

    // Realizar la solicitud POST usando Axios
    const response = await axios.post(url, userData);

    // Aquí puedes manejar la respuesta según sea necesario
    console.log(response.data); // Por ejemplo, imprimir la respuesta del servidor

    // Devolver la respuesta para que pueda ser manejada en el componente
    return response.data;
  } catch (error) {
    // Manejar el error adecuadamente
    console.error("Error al intentar Logearse:", error.message);

    // Devolver un objeto con información sobre el error
    return { error: "Error al intentar iniciar sesión" };
  }
};

// D  E  S  A  Y  U  N  O  S

export const getDesayunosListaGeneral = async () => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + "/desayunos";
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getDesayunoListaGeneral", e);
  }
};

export const getDesayunosID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/desayunos/${id}`;
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getDesayunosID", e);
  }
};

export const crearNuevoDesayuno = async (
  nombre,
  cantidad,
  nombreEntrega,
  fecha,
  idUnidadEducativa
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/desayunos`;
    const datos = { nombre, cantidad, nombreEntrega, fecha, idUnidadEducativa };
    const response = await axios.post(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api newDesayuno", e);
  }
};

export const actualizarDesayuno = async (
  id,
  nombre,
  updatedFecha,
  nombreEntrega,
  cantidad,
  idUE
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = `${url}/desayunos/${id}`;
    const datos = { 
        nombre, 
        cantidad, 
        nombreEntrega, 
        fecha:updatedFecha, 
        idUnidadEducativa : idUE
    };
    const response = await axios.patch(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el API actualizarDesayuno", e);
  }
};

export const deleteDesayunoID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/desayunos/${id}`;
    const response = await axios.delete(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api deleteDesayunoListaGeneral", e);
  }
};

// M  A  N  T  E  N  I  M  I  E  N  T  O  S

export const getMantenimientosListaGeneral = async () => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + "/mantenimientos";
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getMantenimientosListaGeneral", e);
  }
};

export const getMantenimientoID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/mantenimientos/${id}`;
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getMantenimientosListaGeneral", e);
  }
};

export const crearNuevoMantenimiento = async (
  titulo,
  encargado,
  empresa,
  fecha,
  idUnidadEducativa
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = `${url}/mantenimientos`;
    const datos = { titulo, fecha, encargado, empresa, idUnidadEducativa };
    const response = await axios.post(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el API crearNuevoMantenimiento", e);
  }
};

export const actualizarMantenimiento = async (
  idMantenimiento,
  titulo,
  updatedFecha,
  encargado,
  empresa,
  idUE
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/mantenimientos/${idMantenimiento}`;
    const datos = { 
      titulo, 
      fecha:updatedFecha, 
      encargado, 
      empresa,  
      idUnidadEducativa : idUE
    };
    const response = await axios.patch(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el API modificarMantenimiento", e);
    throw e; // Vuelve a lanzar el error para que pueda ser manejado por el código que llama a esta función
  }
};

export const deleteMantenimientoID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/mantenimientos/${id}`;
    const response = await axios.delete(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api deleteMantenimientosListaGeneral", e);
  }
};

// A  P  O  Y  O    S  O  C  I  A  L

export const getApoyoSocialListaGeneral = async () => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + "/apoyossociales";
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getApoyoSocialListaGeneral", e);
  }
};

export const getApoyoSocialID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/apoyossociales/${id}`;
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getApoyoSocialListaGeneral", e);
  }
};

export const newApoyoSocial = async (
  nombre,
  cantidad,
  nombreEntrega,
  fecha,
  idUnidadEducativa
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/apoyossociales`;
    const datos = { nombre, cantidad, nombreEntrega, fecha, idUnidadEducativa };
    const response = await axios.post(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api newApoyoSocial", e);
  }
};

export const actualizarApoyoSocial = async (
  id,
  updatedNombre,
  updatedCantidad,
  updatedNombreEntrega,
  updatedFecha,
  idUnidadEducativa
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/apoyossociales/${id}`;
    const datos = { 
      nombre : updatedNombre, 
      cantidad : updatedCantidad, 
      nombreEntrega : updatedNombreEntrega, 
      fecha : updatedFecha, 
      idUnidadEducativa : idUnidadEducativa 
    };
    const response = await axios.patch(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api actualizarApoyoSocial", e);
  }
};

export const deleteApoyoSocialID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/apoyossociales/${id}`;
    const response = await axios.delete(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api deleteApoyoSocialListaGeneral", e);
  }
};














// A  P  O  Y  O    G  U  B  E  R  N  A  M  E  N  T  A  L



export const getApoyoGubernamentalListaGeneral = async () => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + "/apoyosgubernamentales";
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getApoyoGubernamentalListaGeneral", e);
  }
};

export const getApoyoGubernamentalID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/apoyosgubernamentales/${id}`;
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getApoyoGubernamentalID", e);
  }
};


export const newApoyoGubernamental = async (
  cantidad,
  nombreEntrega,
  fecha,
  idUnidadEducativa,
  idCategoria
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/apoyosgubernamentales`;
    const datos = {
      cantidad,
      nombreEntrega,
      fecha,
      idUnidadEducativa,
      idCategoria,
    };
    const response = await axios.post(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api newApoyoGubernamental", e);
  }
};


export const actualizarApoyoGubernamental = async (
  id, 
  cantidad,
  nombreEntrega,
  fecha,
  idUnidadEducativa,
  idCategoria
) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/apoyosgubernamentales/${id}`;
    const datos = {
      cantidad,
      nombreEntrega,
      fecha,
      idUnidadEducativa,
      idCategoria,
    };
    const response = await axios.patch(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api actualizarApoyoGubernamental", e);
  }
};

export const deleteApoyoGubernamentalID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/apoyosgubernamentales/${id}`;
    const response = await axios.delete(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api deleteApoyoGubernamentalListaGeneral", e);
  }
};


//C  A  T  E  G  O  R  I  A  S 

export const getCategoriaListaGeneral = async () => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + "/categorias";
    const response = await axios.get(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api getApoyoGubernamentalListaGeneral", e);
  }
};


export const newCategoria = async (nombre ) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/categorias`;
    const datos = {
      nombre
    };
    const response = await axios.post(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api newCategoria", e);
  }
};

export const actualizarCategoria = async (id,nombre) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/categorias/${id}`;
    const datos = { nombre };
    const response = await axios.patch(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api actualizarApoyoGubernamental", e);
  }
};

export const deleteCategoriaID = async (id) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/categorias/${id}`;
    const response = await axios.delete(baseURL);
    return response.data;
  } catch (e) {
    console.log("Error en el Api deleteApoyoGubernamentalListaGeneral", e);
  }
};

// G E S T I O N E S

export const newGestion = async (numero, horario, director, juntaescolar) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + `/gestiones`;
    const datos = { numero, horario, director, juntaescolar };
    const response = await axios.post(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api newGestion", e);
  }
};

export const actualizarGestion = async (id, datos) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = url + "/gestiones";
    const response = await axios.put(id, datos);
    return response.data;
  } catch (e) {
    console.log("Error en el Api actualizarGestion", e);
  }
};

