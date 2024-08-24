import { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Asigna tu token de Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9uYWxkdWFncm0iLCJhIjoiY2x0dnB0ZGRqMXBmODJqc3lmODVrdWdrYyJ9.neqEa6j7_rpPpNaj49I5iA';

const MapaEditar = ({datoX,datoY, setCoordenada_x, setCoordenada_y }) => {
    
    console.log("coordenada_x1", datoX);
    console.log("coordenada_y1", datoY);
    
    const [markerCoords, setMarkerCoords] = useState({ lng: datoX, lat: datoY });
    const mapaDiv = useRef(null);
    const [mapa, setMapa] = useState();
    const [marcador, setMarcador] = useState(null);
    const [editMode, setEditMode] = useState(false); // Estado para controlar el modo de edición del marcador

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [markerCoords.lng, markerCoords.lat],
            zoom: 13,
        });
    
        setMapa(map);
    
        const marker = new mapboxgl.Marker({ color: '#FF0000', draggable: true })
        .setLngLat([markerCoords.lng, markerCoords.lat])
        .addTo(map);
        console.log("markerCoords.lng", markerCoords.lng);
        console.log("markerCoords.lat",markerCoords.lat);
    
        setMarcador(marker);
    
        // Escucha el evento 'dragend' del marcador
        marker.on('dragend', () => {
            // Obtiene las nuevas coordenadas del marcador
            const newCoords = marker.getLngLat();
    
            // Actualiza markerCoords con las nuevas coordenadas
            setMarkerCoords({
                lng: newCoords.lng.toFixed(4),
                lat: newCoords.lat.toFixed(4),
            });
        });
    
        return () => {
            // No es necesario quitar el evento 'mousemove' ya que ya no lo estamos utilizando
            marker.off('dragend');
            map.remove();
        };
    }, []); 
    // Evento de clic en el marcador para alternar el modo de edición
    useEffect(() => {
        if (marcador) {
            marcador.getElement().addEventListener('click', () => {
                setEditMode((prevMode) => !prevMode);
            });
    
            // Escucha el evento 'dragend' del marcador
            marcador.on('dragend', () => {
                // Obtiene las nuevas coordenadas del marcador
                const newCoords = marcador.getLngLat();
    
                // Actualiza markerCoords con las nuevas coordenadas
                setMarkerCoords({
                    lng: newCoords.lng.toFixed(4),
                    lat: newCoords.lat.toFixed(4),
                });
            });
        }
    }, [marcador]);

    // Actualiza la posición del marcador cuando cambian sus coordenadas o el modo de edición
    useEffect(() => {
        if (marcador && !editMode) {
            marcador.setLngLat([markerCoords.lng, markerCoords.lat]);
            setCoordenada_x(markerCoords.lng);
            setCoordenada_y(markerCoords.lat);
        }
    }, [editMode, markerCoords]);

    return (
        <>
            <div className='bg-black/40 rounded-tl-xl rounded-tr-xl text-white text-center'>
                Lng:{markerCoords.lng} | Lat: {markerCoords.lat} | Zoom: {13}
            </div>
            <div className='h-[140%] rounded-br-xl rounded-bl-xl w-full bg-red-600' ref={mapaDiv} />
        </>
    );
}

export default MapaEditar;
