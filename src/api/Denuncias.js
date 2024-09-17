// apiServices.js
import axios from "axios";

export const getDatoDenuncias = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + '/denuncias';
        const datosDenuncias= await axios.get(url);
        return datosDenuncias.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos Backend ApiServices/Denuncias', error);
    }
}
