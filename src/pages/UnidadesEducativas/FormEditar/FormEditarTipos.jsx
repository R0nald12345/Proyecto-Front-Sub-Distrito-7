import { useEffect, useState } from 'react';
import axios from "axios";

const FormEditarTipos = () => {

    const [tipoColegio, setTipoColegio] = useState([]);
    const [tipoTurno, setTipoTurno] = useState([]);
    const [tipoInfraestructura, setTipoInfraestructura] = useState([]);
    
    useEffect(() => {
        const fetchingTiposTurnos = async()=>{
            try{
                const baseUrl = import.meta.env.VITE_BASE_URL;
                const url = baseUrl + '/turnos';
                const datosTipoTurno = await axios.get(url);
                setTipoTurno(datosTipoTurno.data);
                console.log(datosTipoTurno.data);
            }catch(error){
                console.log('Error no se pude obtener los Datos de Tipo Turno', error);
            }
        }
        fetchingTiposTurnos();
    }, [])

    useEffect(() => {
        const fetchingEstructura = async()=>{
          try{
            const baseUrl = import.meta.env.VITE_BASE_URL;
            const url = baseUrl + '/infraestructuras';
            const datosInfraEstructura =await axios.get(url);
            setTipoInfraestructura(datosInfraEstructura.data);
            console.log(datosInfraEstructura.data);
          }catch(error){
            console.log('Error al obtener Datos InfraEstructura', error);
          }
        }
        fetchingEstructura();
      }, [])

    useEffect(() => {
        const fetchingTiposColegio = async()=>{
            try{
                const baseUrl = import.meta.env.VITE_BASE_URL;
                const url = baseUrl + '/tipocolegios';
                const datosTipoColegio = await axios.get(url);
                setTipoColegio(datosTipoColegio.data);
                console.log(datosTipoColegio.data);
            }catch(error){
                console.log('Error no se pude obtener los Datos de colegio', error);
            }
        }
        fetchingTiposColegio();
    }, [])
    

  return (
    <div>
        <div className='flex gap-3 mb-7'>
                <div className="w-1/2">
                    <p className="font-semibold text-gray-600 uppercase">Tipo Colegio</p>
                    <select className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200'>
                        {tipoColegio.map(option =>(
                            <option value={option.nombre} key={option.id}>{option.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="w-1/2">
                    <p className="font-semibold text-gray-600 uppercase">Tipo Turno</p>
                    <select className='py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200'>
                        {tipoTurno.map(option =>(
                            <option value={option.nombre} key={option.id}>{option.nombre}</option>
                        ))}
                    </select>
                </div>
                                
        </div>

        <div className="">
            <p className="font-semibold text-gray-600 uppercase">Tipo Infraestrcutura</p>
            <select className='py-1 rounded-xl pl-3 mb-4 w-full border-gray-400 border-2 bg-gray-200'>
                {tipoInfraestructura.map(option =>(
                    <option value={option.nombre} key={option.id}>{option.nombre}</option>
                ))}
            </select>
        </div>
        
    </div>
  )
}

export default FormEditarTipos
