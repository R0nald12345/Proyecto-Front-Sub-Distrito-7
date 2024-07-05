// apiServices.js
import axios from "axios";

export const getDatoCentroTuristicos = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + '/centrosturisticos';
        const datosCentroTuristicos= await axios.get(url);
        return datosCentroTuristicos.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos Backend ApiServices/entroTuristicos', error);
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