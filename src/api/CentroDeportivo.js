// apiServices.js
import axios from "axios";

export const getDatoCentroDeportivo = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + '/centrosdeportivos';
        const datosCentroDeportivo= await axios.get(url);
        return datosCentroDeportivo.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos Backend ApiServices/CentroDeportivo', error);
    }
}


export const createCentroDeportivo = async ({
    nombre,
    coordenada_x,
    coordenada_y,
    direccion,
    uv,
    historia, 
    videoUrl, 
    fotos, 
    serviciosPublicos
}) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + '/centrosdeportivos';

        const body = {
            nombre,
            coordenada_x,
            coordenada_y,
            direccion,
            uv,
            historia, 
            videoUrl, 
            fotos,
            serviciosPublicos
        };
        const response = await axios.post(url,body);
        return response.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos', error);
    }
}

export const updateCentroDeportivos = async (
    id,
    nombre,
    coordenada_x,
    coordenada_y,
    direccion,
    uv,
    historia, 
    videoUrl, 
    fotos, 
    serviciosPublicos
) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + `/centrosdeportivos/${id}`; 

        const body = {
            nombre,
            coordenada_x,
            coordenada_y,
            direccion,
            uv,
            historia, 
            videoUrl, 
            fotos,
            serviciosPublicos
        };
        const response = await axios.patch(url,body);
        return response.data;
    } catch (error) {
        console.log('Error no se pudo Actualizar Api/Centro Deportivo', error);
    }
}

export const getDatoCentroDeportivoId = async (id) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + `/centrosdeportivos/${id}`;
        const datosCentroDeportivoId= await axios.get(url);
        return datosCentroDeportivoId.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos Backend ApiServices/CentroDeportivo', error);
    }
}

export const deleteDatoCentroDeportivoId = async (id) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + `/centrosdeportivos/${id}`;
        const datosCentroDeportivoId= await axios.delete(url);
        return datosCentroDeportivoId.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos Backend ApiServices/CentroDeportivo', error);
    }
}