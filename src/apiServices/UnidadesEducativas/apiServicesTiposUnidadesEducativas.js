// apiServices.js
import axios from "axios";

export const getDatoGeneralUE = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + '/unidadeseducativas';
        const datosTipoColegio = await axios.get(url);
        return datosTipoColegio.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos Backend ApiServices/UnidadesEducativass', error);
    }
}

export const createDatoGeneralUE = async ({
    nombre,
    coordenada_x,
    coordenada_y,
    direccion,
    historia, 
    video, 
    fotos, 
    idInfraestructura,
    idTipoColegio,
    idTurno,
    idGestion,
}) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + '/unidadeseducativas';

        const body = {
            nombre,
            coordenada_x,
            coordenada_y,
            direccion,
            historia, 
            video, 
            fotos, 
            idInfraestructura,
            idTipoColegio,
            idTurno,
            idGestion,
        };
        const response = await axios.post(url,body );
        return response.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos', error);
    }
}


// export const deleteDatoGeneral = async () => {
//     try {
//         const baseUrl = import.meta.env.VITE_BASE_URL;
//         const url = baseUrl + '/unidadeseducativas';
//         const datosTipoColegio = await axios.get(url);
//         return datosTipoColegio.data;
//     } catch (error) {
//         console.log('Error no se pudo obtener los Datos', error);
//     }
// }

//----------


export const TiposColegio = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + '/tipocolegios';
        const datosTipoColegio = await axios.get(url);
        return datosTipoColegio.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos de los Tipos Colegios', error);
    }
}

export const TiposInfraestructura = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + '/infraestructuras';
        const datosTipoInfraestructura = await axios.get(url);
        return datosTipoInfraestructura.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos de los Tipos Infraestructura', error);
    }
}

export const TiposTurno = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + '/turnos';
        const datosTipoTurno = await axios.get(url);
        console.log(datosTipoTurno.data);
        return datosTipoTurno.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos de los Tipos Turnos', error);
    }
}

////////// Login //////////////


export const login = async (email, password) => {
    try {
      const baseURL = import.meta.env.VITE_BASE_URL;
      const url = baseURL + '/auth/login';
      
      // Objeto con los datos del usuario a enviar en la solicitud POST
      const userData = {
        email: email,
        password: password
      };
  
      // Realizar la solicitud POST usando Axios
      const response = await axios.post(url, userData);
  
      // Aquí puedes manejar la respuesta según sea necesario
      console.log(response.data); // Por ejemplo, imprimir la respuesta del servidor
  
      // Devolver la respuesta para que pueda ser manejada en el componente
      return response.data;
    } catch (error) {
      // Manejar el error adecuadamente
      console.error('Error al intentar Logearse:', error.message);
  
      // Devolver un objeto con información sobre el error
      return { error: 'Error al intentar iniciar sesión' };
    }
  };
  