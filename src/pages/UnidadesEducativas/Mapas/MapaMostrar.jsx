import { useEffect, useState, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9uYWxkdWFncm0iLCJhIjoiY2x0dnB0ZGRqMXBmODJqc3lmODVrdWdrYyJ9.neqEa6j7_rpPpNaj49I5iA';




const MapaMostrar = ({datoX, datoY}) => {

    const puntoInitial = {
        lng: datoX,
        lat: datoY,
        zoom: 14
    }

    const mapaDiv = useRef(null);
    const [mapa, setMapa] = useState();
    const [coords, setCoords] = useState(puntoInitial);
    const [marcador, setMarcador] = useState(null); 


    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapaDiv.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            
            center: [datoX, datoY], // starting position [lng, lat]
        	zoom: 13, // starting zoom

        });
        
        setMapa(map);

        
        // Crear el marcador al inicializar el mapa
        const marker = new mapboxgl.Marker({color: '#FF0000'}).setLngLat([datoX, datoY]).addTo(map);
        setMarcador(marker);

        return () => map.remove(); // Limpiar el mapa al desmontar el componente


    }, [datoX,datoY])


    //Para cuando se mueve le mapa
    useEffect(() => {
       mapa?.on('move',()=>{
          const{lng, lat} = mapa.getCenter(); 
          setCoords({
            lng: lng.toFixed(4),
            lat: lat.toFixed(4),
            zoom: mapa.getZoom().toFixed(4),
          })
       }); 
    }, [mapa])
    


    return (
        <>
        <div className='bg-black/40 rounded-tl-xl rounded-tr-xl text-white text-center'>
            {/* Lng:{coords.lng}| lat: {coords.lat} | zoom:{coords.zoom} */}
            Lng:{datoX}| lat: {datoY} | zoom:{13}
        </div>
            <div
                className='h-[128%] w-full rounded-bl-xl rounded-br-xl' 
                ref={mapaDiv}
            />

            

        </>
    )
}

export default MapaMostrar
