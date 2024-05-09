import { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Asigna tu token de Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9uYWxkdWFncm0iLCJhIjoiY2x0dnB0ZGRqMXBmODJqc3lmODVrdWdrYyJ9.neqEa6j7_rpPpNaj49I5iA';

const MapaAgregar = ({ datoX = -63.1351584, datoY = -17.8008285 }) => {
    const [markerCoords, setMarkerCoords] = useState({ lng: datoX, lat: datoY });
    const mapaDiv = useRef(null);
    const [mapa, setMapa] = useState();
    const [marcador, setMarcador] = useState(null);
    const [editMode, setEditMode] = useState(false); // Estado para controlar el modo de edición del marcador

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [datoX, datoY],
            zoom: 13,
        });

        setMapa(map);

        const marker = new mapboxgl.Marker({ color: '#FF0000' }).setLngLat([datoX, datoY]).addTo(map);
        setMarcador(marker);

        // Función para actualizar las coordenadas del marcador y del cursor al mover el cursor
        const updateMarkerCoords = (e) => {
            const { lng, lat } = e.lngLat;
            if (!editMode) {
                setMarkerCoords({ lng: lng.toFixed(4), lat: lat.toFixed(4) });
            }
        };

        map.on('mousemove', updateMarkerCoords);

        return () => {
            map.off('mousemove', updateMarkerCoords);
            map.remove();
        };
    }, [datoX, datoY, editMode]);

    // Evento de clic en el marcador para alternar el modo de edición
    useEffect(() => {
        if (marcador) {
            marcador.getElement().addEventListener('click', () => {
                setEditMode((prevMode) => !prevMode);
            });
        }
    }, [marcador]);

    // Actualiza la posición del marcador cuando cambian sus coordenadas o el modo de edición
    useEffect(() => {
        if (marcador && !editMode) {
            marcador.setLngLat([markerCoords.lng, markerCoords.lat]);
        }
    }, [editMode, markerCoords]);

    return (
        <>
            <div className='bg-black/40 rounded-xl text-white text-center'>
                Lng:{markerCoords.lng} | Lat: {markerCoords.lat} | Zoom: {13}
            </div>
            <div className='h-[140%] w-full bg-red-600' ref={mapaDiv} />
        </>
    );
}

export default MapaAgregar;
