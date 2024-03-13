import axios from "axios";


// Unidades Educativas


  
  
  export const obtenerDatosUnidadEducativa = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const url = baseUrl + "/unidadeseducativas";
      const datosUnidadEducativas = await axios.get(url);
      return datosUnidadEducativas.data;
    } catch (error) {
      console.log(error);
    }
  };
  

 export const obtenerTipoColegio = async()=>{
    try{
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const url = baseUrl + "/tipocolegios"
      const datosTipoColegio = await axios.get(url);
      // console.log(datosTipoColegio.data);
      return datosTipoColegio.data;
    }catch(error){
      console.log(error);
    }
 };

 export const obtenerDatosUnidadEducativasPublicas = async()=>{
    try{
      const baseUrl = import.meta.env.VITE_BASE_URL;


    }catch(error){
      console.log(error);
    }
 };