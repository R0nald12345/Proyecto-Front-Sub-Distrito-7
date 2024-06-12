import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { FaMagnifyingGlass } from "react-icons/fa6";
// import { getListaGeneralCentroSalud } from '../../apiServices/centroSalud/apiGeneralCentroSalud';
import ListaCentroSalud from './ListaCentroSalud';
// import { getListaGeneralCentroSalud } from '../../apiServices/CentroSalud/apiCentroSalud';

const CentroSaludGeneral = () => {
  const navigate = useNavigate();


  const [listaCentroSalud, setListaCentroSalud] = useState([]);
  
  // const [turno, setTurno] = useState([]);
  // const [turnoSeleccionado, setTurnoSeleccionado] = useState("");
  // const [infraEstructura, setInfraEstructura] = useState([]);
  

  // useEffect(() => {
  //   const getDatosListaCentroSalud=async()=>{
  //     try{
  //       const responsive = await getListaGeneralCentroSalud();
  //       console.log(listaCentroSalud);
  //       setListaCentroSalud(responsive);
  //     }catch{
  //       console.log('Error al Consumir en componente ApiGetDatoListaCentroSalud');
  //     }
  //   }
  //   getDatosListaCentroSalud();
  // }, [])
  
  
  const opctionBusqueda = [
    {label: 'Ascendente', value: 1},
    {label: 'Descende', value: 2},
  ];

  const opctionTipoInfraEstructura = [
      {label: 'Modulo', value: 1},
      {label: 'Escuela', value: 2},
  ];

  const opctionTurno = [
      {label: 'Mañana', value: 1},
      {label: 'Turno', value: 2},
      {label: 'Noche', value: 3},
  ];

  const handleTurno = (event)=>{
    setTurnoSeleccionado(event.target.value);
  }


  return (
      <div className='flex flex-col items-center justify-center '>
        
        {/* Parte Superrior */}
        <section className='w-[80%] flex justify-between p-2 mb-10'>
  
          <button 
            onClick={()=>navigate('/unidadeducativa/agregarnuevo')}
            className='text-white font-new-font font-new-bold bg-primary-900/90 rounded-lg py-3 px-2'>
              Agregar Nuevo
          </button>
         
  
          <section className='flex items-center justify-end gap-3'>
            <p className='font-new-font font-new-bold text-white'>Nombre</p>
            <div className='w-full flex bg-gray-300 border border-black rounded-xl px-2'>
              <FaMagnifyingGlass className='mt-2'/>
              <input
                type='text'
                placeholder='Buscar'
                className='w-full font-semibold  rounded-xl py-1 bg-gray-300  px-1 outline-none'
              />
            </div>
          </section>
  
        </section>
  
        {/* //Parte de la Listas de Colegios */}
        <main className="flex flex-col justify-center mt-10 w-[80%] ">
          <section className='w-full'>
              <ul className='grid grid-cols-12 bg-white gap-5 mb-3 rounded-xl shadow-lg'>
                <li className="font-semibold text-start col-span-3 px-3 py-2 ">Nombre</li>
                <li className="font-semibold  col-span-3 px-3 py-2 ">Direccion</li>
                <li className="font-semibold text-center col-span-1 px-1 py-2 ">Nivel</li>
                <li className="font-semibold text-center col-span-2 px-1 py-2 ">Hora</li>
                <li className="font-semibold text-center col-span-3 px-3 py-2">Acciones</li>
              </ul>
          </section>
  
          {/* <section className='w-full'>
            {
              listaCentroSalud.map((element)=>{
                return(
                  <ListaCentroSalud
                    // key={element.id}
                    id = {element.id}
                    nombre={element.nombre} 
                    direccion={element.direccion} 
                    nivel ={element.nivel}
                    hora = {element.horario}
                    // turno ={element.direccion}
                  />
                );
              })
            }
            
          </section> */}
          
  
        </main>
      </div>
    )
}

export default CentroSaludGeneral
