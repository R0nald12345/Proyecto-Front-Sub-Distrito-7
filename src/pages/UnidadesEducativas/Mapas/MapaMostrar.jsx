import { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Asumiendo que el token de acceso es correcto y no necesita ser modificado.
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9uYWxkdWFncm0iLCJhIjoiY2x0dnB0ZGRqMXBmODJqc3lmODVrdWdrYyJ9.neqEa6j7_rpPpNaj49I5iA';

const MapaMostrar = ({ datoX, datoY }) => {
    const mapaDiv = useRef(null);
    const [mapa, setMapa] = useState(null);
    const [marcador, setMarcador] = useState(null);
    const [coords, setCoords] = useState({ lng: datoX, lat: datoY, zoom: 14 });

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [datoX, datoY],
            zoom: 13,
        });

        const marker = new mapboxgl.Marker({ color: '#FF0000' }).setLngLat([datoX, datoY]).addTo(map);

        setMapa(map);
        setMarcador(marker);

        // Función para actualizar las coordenadas y el zoom en el estado
        const updateCoords = () => {
            const { lng, lat } = map.getCenter();
            setCoords({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2),
            });
        };

        map.on('move', updateCoords);

        return () => {
            map.off('move', updateCoords);
            map.remove();
        };
    }, [datoX, datoY]);

    useEffect(() => {
        if (mapa && marcador) {
            marcador.setLngLat([datoX, datoY]);
        }
    }, [mapa, marcador, datoX, datoY]);

    return (
        <>
            <div className='bg-black/40 rounded-tl-xl rounded-tr-xl text-white text-center'>
                Lng:{coords.lng} | lat: {coords.lat} | zoom:{coords.zoom}
            </div>
            <div
                className='h-[128%] w-full rounded-bl-xl rounded-br-xl'
                ref={mapaDiv}
            />
        </>
    );
};

export default MapaMostrar;