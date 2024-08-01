// apiServices.js
import axios from "axios";


export const getDatoCentroSalud = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + '/centrossaluds';
        const datosCentroSalud = await axios.get(url);
        return datosCentroSalud.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos Backend ApiServices/CentroSalud', error);
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
        const url = baseUrl + '/centrossaluds';

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


export const deleteDatoCentroSalud = async ({id}) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + `/centrossaluds/${id}`;
        const datosCentroSalud = await axios.delete(url);
        return datosCentroSalud.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos Backend ApiServices/CentroSalud', error);
    }
}