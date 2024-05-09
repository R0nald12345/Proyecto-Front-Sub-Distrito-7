import axios from "axios";

export const obtnerDatosUnidadEducativa= async(id)=>{
    try{
        const baseurl = import.meta.env.VITE_BASE_URL;
        const url = baseurl + `/unidadeseducativas/+${id}`;
        const datosUE = await axios.get(url);
        return datosUE.data;
    }catch(error){
        console.log(error);
    }
}