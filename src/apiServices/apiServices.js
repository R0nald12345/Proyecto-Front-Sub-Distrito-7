import axios from "axios";


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

 //Tipos: Colegios, InfraEstructura, Turno

  export const TiposColegio = async()=>{
      try{
          const baseUrl = import.meta.env.VITE_BASE_URL;
          const url = baseUrl + '/tipocolegios';
          const datosTipoColegio = await axios.get(url);
          return datosTipoColegio.data;
      }catch(error){
          console.log('Error no se pude ontener los Datos de los Tipos Colegios', error);
      }
  }

  export const TiposInfraEstrcutura = async()=>{
      try{
          const baseUrl = import.meta.env.VITE_BASE_URL;
          const url = baseUrl + '/infraestructuras';
          const datosTipoColegio = await axios.get(url);
          return datosTipoColegio.data;
      }catch(error){
          console.log('Error no se pude ontener los Datos de los Tipo InfraEstructura', error);
      }
  }

  export const TiposTurno = async()=>{
      try{
          const baseUrl = import.meta.env.VITE_BASE_URL;
          const url = baseUrl + '/turnos';
          const datosTipoColegio = await axios.get(url);
          setTipoColegio(datosTipoColegio.data);
      }catch(error){
          console.log('Error no se pude ontener los Datos de los Tipos Turnos', error);
      }
  }