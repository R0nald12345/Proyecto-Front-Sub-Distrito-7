import axios from "axios"

export const getListaGeneralCentroSalud = async() =>{
    try{
        const responsive = await axios.get( "http://localhost:3001/listaCentroSalud");
        // console.log('Datos de Json');
        // console.log(responsive.data);
        return responsive.data;
        
    }catch{
        console.log('Error al momento de extrar los Datos generales Api/apiServices/CentroSalud');
    }


}