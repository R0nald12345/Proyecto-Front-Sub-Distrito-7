
// C E N T R O      P O L I C I A L 

import axios from "axios";

export const getCentroPolicialListaGeneral = async () => {
    try {
      const url = import.meta.env.VITE_BASE_URL;
      const baseURL = url + "/centrospoliciales";
      const response = await axios.get(baseURL);
      return response.data;
    } catch (e) {
      console.log("Error en el Api getCentroPolicialListaGeneral", e);
    }
  };
  
  
  export const getCentroPolicialID = async (id) => {
    try {
      const url = import.meta.env.VITE_BASE_URL;
      const baseURL = url + `/centrospoliciales/${id}`;
      const response = await axios.get(baseURL);
      return response.data;
    } catch (e) {
      console.log("Error en el Api getApoyoGubernamentalID", e);
    }
  };
  
  
  export const crearCentroPolicial = async (
    nombre,
    encargado,
    coordenada_x,
    coordenada_y,
    direccion,
    uv, 
    horario, 
    fotoUrl,
    numeroTelefono,
    serviciosPublicos
  ) => {
    try {
      const url = import.meta.env.VITE_BASE_URL;
      const baseURL = url + `/centrospoliciales`;
      const datos = {
        nombre,
        encargado,
        coordenada_x,
        coordenada_y,
        direccion,
        uv, 
        horario, 
        fotoUrl,
        numeroTelefono,
        serviciosPublicos
      };
      const response = await axios.post(baseURL, datos);
      return response.data;
    } catch (e) {
      console.log("Error en el Api crearCentroPolicial", e);
    }
  };
  
  
  export const actualizarCentroPolicial = async (
    id,
    nombre,
    encargado,
    coordenada_x,
    coordenada_y,
    direccion,
    uv, 
    horario, 
    fotoUrl,
    numeroTelefono,
    serviciosPublicos
  ) => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const url = `${baseUrl}/centrospoliciales/${id}`;

      const datos = {
        nombre,
        encargado,
        coordenada_x,
        coordenada_y,
        direccion,
        uv, 
        horario, 
        fotoUrl,
        numeroTelefono,
        serviciosPublicos
      };

      console.log("URL:", url);
      console.log("Datos enviados:", datos);
      const response = await axios.patch(url, datos);
      return response.data;
    } catch (e) {
      console.log("Error en el actualizarCentroPolicial", e);
    }
  };
  
  export const deleteCentroPolicialID = async (id) => {
    try {
      const url = import.meta.env.VITE_BASE_URL;
      const baseURL = url + `/centrospoliciales/${id}`;
      const response = await axios.delete(baseURL);
      return response.data;
    } catch (e) {
      console.log("Error en el Api deleteCentroPolicialID", e);
    }
  };
  