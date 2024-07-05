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


//************  TiposColegio ************

export const getDatoGeneralTiposColegio = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + '/tipocolegios';
        const datosTipoColegio = await axios.get(url);
        return datosTipoColegio.data;
    } catch (error) {
        console.log('Error no se pudo obtener los Datos de los Tipos Colegios', error);
    }
}


//************  TiposTunos ************



export const getDatoGeneralTiposTurno = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const url = baseUrl + '/turnos';
      const datosTipoTurno = await axios.get(url);
      return datosTipoTurno.data;
    } catch (error) {
      console.log('Error no se pudo obtener los Datos de los Tipos Turnos', error);
    }
  }
  
  
  //************ Tipos InfraEstrcutura ************
  
  
  export const getDatoGeneralTiposInfraestructura = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
          const url = baseUrl + '/infraestructuras';
          const datosTipoInfraestructura = await axios.get(url);
          return datosTipoInfraestructura.data;
      } catch (error) {
        console.log('Error no se pudo obtener los Datos de los Tipos Infraestructura', error);
      }
    }
  
  




//************ LOGIN ************!/
  


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
  



  // D  E  S  A  Y  U  N  O  S

  export const getDesayunosListaGeneral=async()=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + '/desayunos';
        const response = await axios.get(baseURL);
        return response.data;
    }catch(e){
        console.log('Error en el Api getDesayunoListaGeneral', e);
    }
  }

  export const crearNuevoDesayuno=async(nombre,cantidad, nombreEntrega,fecha, idUnidadEducativa )=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + `/desayunos`;
        const datos = {nombre,cantidad, nombreEntrega, fecha,idUnidadEducativa};
        const response = await axios.post(baseURL,datos);
        return response.data;
    }catch(e){
        console.log('Error en el Api newDesayuno', e);
    }
  }


  export const actualizarDesayuno = async (nombre, cantidad, nombreEntrega, fecha, idUnidadEducativa) => {
    try {
      const url = import.meta.env.VITE_BASE_URL;
      const baseURL = `${url}/desayunos/${idUnidadEducativa}`;
      const datos = { nombre, cantidad, nombreEntrega, fecha, idUnidadEducativa };
      const response = await axios.put(baseURL, datos);
      return response.data;
    } catch (e) {
      console.log('Error en el API actualizarDesayuno', e);
    }
  };

  export const deleteDesayunoID=async(id)=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + `/desayunos/${id}`;
        const response = await axios.delete(baseURL);
        return response.data;
    }catch(e){
        console.log('Error en el Api deleteDesayunoListaGeneral', e);
    }
  }


  // M  A  N  T  E  N  I  M  I  E  N  T  O  S

  export const getMantenimientosListaGeneral=async()=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + '/mantenimientos';
        const response = await axios.get(baseURL);
        return response.data;
    }catch(e){
        console.log('Error en el Api getMantenimientosListaGeneral', e);
    }
  }
  

export const crearNuevoMantenimiento = async ( titulo, encargado, empresa, fecha, idUnidadEducativa) => {
  try {
    const url = import.meta.env.VITE_BASE_URL;
    const baseURL = `${url}/mantenimientos`;
    const datos = {titulo, fecha, encargado, empresa ,idUnidadEducativa};
    const response = await axios.post(baseURL, datos);
    return response.data;
  } catch (e) {
    console.log('Error en el API crearNuevoMantenimiento', e);
  }
};

 

  export const modificarMantenimiento = async (id, titulo, encargado, empresa, fecha,idUnidadEducativa) => {
    try {
      const url = import.meta.env.VITE_BASE_URL;
      const baseURL = url + `/mantenimientos/${id}`;
      const datos = { titulo, encargado, empresa, fecha,idUnidadEducativa };
      const response = await axios.put(baseURL, datos);
      return response.data;
    } catch (e) {
      console.log('Error en el API modificarMantenimiento', e);
      throw e; // Vuelve a lanzar el error para que pueda ser manejado por el código que llama a esta función
    }
  };
  
  export const deleteMantenimientoID=async(id)=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + `/mantenimientos/${id}`;
        const response = await axios.delete(baseURL);
        return response.data;
    }catch(e){
        console.log('Error en el Api deleteMantenimientosListaGeneral', e);
    }
  }


  
  // A  P  O  Y  O    S  O  C  I  A  L

  export const getApoyoSocialListaGeneral=async()=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + '/apoyossociales';
        const response = await axios.get(baseURL);
        return response.data;
    }catch(e){
        console.log('Error en el Api getApoyoSocialListaGeneral', e);
    }
  }

  export const newApoyoSocial=async(nombre,cantidad, nombreEntrega, fecha,idUnidadEducativa)=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + `/apoyossociales`;
        const datos = {nombre,cantidad, nombreEntrega, fecha,idUnidadEducativa};
        const response = await axios.post(baseURL,datos);
        return response.data;
    }catch(e){
        console.log('Error en el Api newApoyoSocial',e);
    }
  }

  export const actualizarApoyoSocial=async(id,datos)=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + `/apoyossociales/${id}`;
        const response = await axios.put(baseURL,datos);
        return response.data;
    }catch(e){
        console.log('Error en el Api actualizarApoyoSocial', e);
    }
  }


  export const deleteApoyoSocialID=async(id)=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + `/apoyossociales/${id}`;
        const response = await axios.delete(baseURL);
        return response.data;
    }catch(e){
        console.log('Error en el Api deleteApoyoSocialListaGeneral', e);
    }
  }


  // A  P  O  Y  O    G  U  B  E  R  N  A  M  E  N  T  A  L
  export const getCategoriaListaGeneral=async()=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + '/categorias';
        const response = await axios.get(baseURL);
        return response.data;
    }catch(e){
        console.log('Error en el Api getApoyoGubernamentalListaGeneral', e);
    }
  }


  export const getApoyoGubernamentalListaGeneral=async()=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + '/apoyosgubernamentales';
        const response = await axios.get(baseURL);
        return response.data;
    }catch(e){
        console.log('Error en el Api getApoyoGubernamentalListaGeneral', e);
    }
  }

  export const newApoyoGubernamental = async( cantidad, nombreEntrega, fecha, idUnidadEducativa,  idCategoria )=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + `/apoyosgubernamentales`;
        const datos = {cantidad, nombreEntrega, fecha, idUnidadEducativa, idCategoria}
        const response = await axios.post(baseURL,datos);
        return response.data;
    }catch(e){
        console.log('Error en el Api newApoyoGubernamental', e);
    }
  }



  export const actualizarApoyoGubernamental=async(id,datos)=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + `/apoyosgubernamentales/${id}`;
        const response = await axios.put(baseURL,datos);
        return response.data;
    }catch(e){
        console.log('Error en el Api actualizarApoyoGubernamental', e);
    }
  }

  export const deleteApoyoGubernamentalID=async(id)=>{  
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + `/apoyosgubernamentales/${id}`;
        const response = await axios.delete(baseURL);
        return response.data;
    }catch(e){
        console.log('Error en el Api deleteApoyoGubernamentalListaGeneral', e);
    }
  }


  // G E S T I O N E S

  export const newGestion = async( numero, horario, director, juntaescolar)=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + `/gestiones`;
        const datos = { numero, horario, director, juntaescolar}
        const response = await axios.post(baseURL, datos);
        return response.data;
    }catch(e){
        console.log('Error en el Api newGestion', e);
    }
  }


  export const actualizarGestion =async(id,datos )=>{
    try{
        const url = import.meta.env.VITE_BASE_URL;
        const baseURL =  url + '/gestiones';
        const response = await axios.put(id, datos);
        return response.data;
    }catch(e){
        console.log('Error en el Api actualizarGestion', e);
    }
  }

