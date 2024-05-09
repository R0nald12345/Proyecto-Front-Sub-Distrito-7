import { useState, useEffect } from 'react';
import axios from 'axios';

const FotosMultiple = ({ id }) => {
    const [fotoGeneral, setFotoGeneral] = useState([]);
    const [fotosSeleciondas, setFotosSeleccionadas] = useState([]);

    const [foto, setFoto] = useState('');
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const fetchingFotos = async () => {
            try {
                const baseURl = import.meta.env.VITE_BASE_URL;
                const url = baseURl + '/fotos';
                const res = await axios.get(url);
                setFotoGeneral(res.data);
            } catch (error) {
                console.log('No se pudo obtener las fotos');
            }
        };

        fetchingFotos();
    }, []);

    useEffect(() => {
        const fotoFiltrados = fotoGeneral.filter(
            (dato) => dato.idUnidadeducativa == id
        );

        setFotosSeleccionadas(fotoFiltrados);
        console.log('Foto Filtrados:', fotosSeleciondas);
    }, [fotoGeneral, id]);


    const cambiarIndiceFoto = (direccion) => {
        if (indice < fotosSeleciondas.length) {
            if (direccion === 'avanzar') {
                if (indice + 1 < fotosSeleciondas.length) { // Cambio aquí: uso "<" en lugar de "<="
                    setIndice(indice+1 );
                } else {
                    setIndice(0);
                }
            } else if (direccion === 'atrasar') {
                if (indice - 1 === -1) {
                    setIndice(fotosSeleciondas.length - 1);
                } else {
                    setIndice(indice - 1);
                }
            }
        } else {
            setIndice(0);
        }
    };

    useEffect(() => {
        console.log('Nuevo índice:', indice);
        if (fotosSeleciondas.length > 0) {
            console.log('Cambiando foto:', fotosSeleciondas[indice].url);
            setFoto(fotosSeleciondas[indice].url);
        }
    }, [fotosSeleciondas, indice]);

    return (
        <>
            <div className='bg-red-200 w-full h-2/5 flex flex-col justify-between'>
                <div className=''>
                    <img src={foto} alt='Foto' />

                </div>

                <div className='flex'>
                    <button
                        type='button'
                        onClick={() => cambiarIndiceFoto('atrasar')}
                        className='w-1/2 bg-blue-400 font-semibold py-1'>
                        Anterior
                    </button>

                    <div>
                        {indice}
                    </div>

                    <button
                        type='button'
                        onClick={() => cambiarIndiceFoto('avanzar')}
                        className='w-1/2 bg-blue-500 font-semibold py-1'>
                        Siguiente
                    </button>
                </div>
            </div>
        </>
    );
};

export default FotosMultiple;
