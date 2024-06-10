import { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Asigna tu token de Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9uYWxkdWFncm0iLCJhIjoiY2x0dnB0ZGRqMXBmODJqc3lmODVrdWdrYyJ9.neqEa6j7_rpPpNaj49I5iA';

<<<<<<< HEAD
const MapaAgregar = ({ setCoordenada_x, setCoordenada_y }) => {
    const [markerCoords, setMarkerCoords] = useState({ lng: -63.1351584, lat: -17.8008285 });
=======
const MapaAgregar = ({ datoX = -63.1351584, datoY = -17.8008285 }) => {
    const [markerCoords, setMarkerCoords] = useState({ lng: datoX, lat: datoY });
>>>>>>> 89dd2e3cdb5e5ae54d807149a70d02891a8f2999
    const mapaDiv = useRef(null);
    const [mapa, setMapa] = useState();
    const [marcador, setMarcador] = useState(null);
    const [editMode, setEditMode] = useState(false); // Estado para controlar el modo de edición del marcador

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v12',
<<<<<<< HEAD
            center: [markerCoords.lng, markerCoords.lat],
            zoom: 13,
        });
    
        setMapa(map);
    
        const marker = new mapboxgl.Marker({ color: '#FF0000', draggable: true })
            .setLngLat([markerCoords.lng, markerCoords.lat])
            .addTo(map);
    
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
=======
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

>>>>>>> 89dd2e3cdb5e5ae54d807149a70d02891a8f2999
    // Evento de clic en el marcador para alternar el modo de edición
    useEffect(() => {
        if (marcador) {
            marcador.getElement().addEventListener('click', () => {
                setEditMode((prevMode) => !prevMode);
            });
<<<<<<< HEAD
    
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
=======
>>>>>>> 89dd2e3cdb5e5ae54d807149a70d02891a8f2999
        }
    }, [marcador]);

    // Actualiza la posición del marcador cuando cambian sus coordenadas o el modo de edición
    useEffect(() => {
        if (marcador && !editMode) {
            marcador.setLngLat([markerCoords.lng, markerCoords.lat]);
<<<<<<< HEAD
            setCoordenada_x(markerCoords.lng);
            setCoordenada_y(markerCoords.lat);
=======
>>>>>>> 89dd2e3cdb5e5ae54d807149a70d02891a8f2999
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
