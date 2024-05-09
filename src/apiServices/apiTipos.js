import React from 'react'

const apiTipos = () => {
    
    useEffect(() => {
        const fetchingTiposColegio = async()=>{
            try{
                const baseUrl = import.meta.env.VITE_BASE_URL;
                const url = baseUrl + '/tipocolegios';
                const datosTipoColegio = await axios.get(url);
                setTipoColegio(datosTipoColegio.data);
            }catch(error){
                console.log('Error no se pude ontener los Datos de los Tipos Colegios', error);
            }
        }
        fetchingTiposColegio();
    }, [])

    useEffect(() => {
        const fetchingTiposInfraEstrcutura = async()=>{
            try{
                const baseUrl = import.meta.env.VITE_BASE_URL;
                const url = baseUrl + '/infraestructuras';
                const datosTipoColegio = await axios.get(url);
                setTipoColegio(datosTipoColegio.data);
            }catch(error){
                console.log('Error no se pude ontener los Datos de los Tipo InfraEstructura', error);
            }
        }
        fetchingTiposInfraEstrcutura();
    }, [])

    useEffect(() => {
        const fetchingTiposTurno = async()=>{
            try{
                const baseUrl = import.meta.env.VITE_BASE_URL;
                const url = baseUrl + '/turnos';
                const datosTipoColegio = await axios.get(url);
                setTipoColegio(datosTipoColegio.data);
            }catch(error){
                console.log('Error no se pude ontener los Datos de los Tipos Turnos', error);
            }
        }
        fetchingTiposTurno();
    }, [])
    
  return {
    fetchingTiposColegio(),
    fetchingTiposInfraEstrcutura(),
    fetchingTiposTurno(),

  }
    
      
    
  
}

export default apiTipos
