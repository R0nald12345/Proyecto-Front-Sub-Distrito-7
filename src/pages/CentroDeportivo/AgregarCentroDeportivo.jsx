import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Encabezado_Arreglo_CargarFotos from '../../components/Encabezado_Listas/UnidadesEducativas/Encabezado_Arreglo_CargarFotos';
import MapaAgregar from '../UnidadesEducativas/Mapas/MapaAgregar';
import useForm from '../../hooks/useForm';
import { createCentroDeportivo } from '../../api/CentroDeportivo';

const AgregarCentroDeportivo = () => {
    const navigate = useNavigate();

    const [foto, setFoto] = useState([]);
    const [coordenada_x, setCoordenada_x] = useState(0);
    const [coordenada_y, setCoordenada_y] = useState(0);

    const { onInputChange, onResetForm, nombre, direccion, uv, historia, videoUrl } = useForm({
        nombre: "",
        direccion: "",
        uv: "",
        historia: "",
        videoUrl: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createCentroDeportivo({
                nombre,
                coordenada_x,
                coordenada_y,
                direccion,
                uv,
                historia,
                videoUrl,
                foto,
            });
            onResetForm();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Centro Deportivo creado exitosamente",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate('/inicio/centro_deportivo');
        } catch (error) {
            console.log("Error en el Componente AgregarCentroDeportivo: " + error);
        }
    };

    return (
        <div className="flex justify-center items-center">    
            <form
                onSubmit={handleSubmit}
                className="bg-gray-100/50 rounded-xl shadow-xl w-[80%] p-8"
            >
                <h2 className='text-center font-bold text-3xl text-gray-700'>Agregar Nuevo Centro Deportivo</h2>
                <section className="xl:flex gap-5 mt-5">
                    <section className="xl:w-[40%] md:flex lg:block ">
                        <h3 className="uppercase font-semibold text-gray-600">Nombre</h3>
                        <input
                            className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200 mb-1"
                            type="text"
                            name='nombre'
                            value={nombre}
                            onChange={onInputChange}
                        />
                        <p className="uppercase font-semibold text-gray-600">Dirección</p>
                        <input
                            className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                            type="text"
                            name='direccion'
                            value={direccion}
                            onChange={onInputChange}
                        />
                        <p className="uppercase font-semibold text-gray-600">Uv</p>
                        <input
                            className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                            type="text"
                            name='uv'
                            value={uv}
                            onChange={onInputChange}
                        />
                        <p className="uppercase font-semibold text-gray-600">Link De Video</p>
                        <input
                            className="py-1 rounded-xl pl-3 w-full border-gray-400 border-2 bg-gray-200"
                            type="text"
                            name='videoUrl'
                            value={videoUrl}
                            onChange={onInputChange}
                        />
                        <h3 className="uppercase font-semibold text-gray-600 mt-1">Historia</h3>
                        <textarea
                            className="w-full mt-1 h-[48%] border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-200 overflow-y-scroll"
                            type="text"
                            name='historia'
                            value={historia}
                            onChange={onInputChange}
                        ></textarea>
                    </section>
                    <section className="w-full xl:w-[60%]">
                        <section className="block border-2 rounded-xl md:flex h-60 gap-5">
                            <div className="w-full">
                                <div className="lg:w-full rounded-xl p-2">
                                    <Encabezado_Arreglo_CargarFotos 
                                        foto={foto}
                                        setFoto={setFoto}
                                    />
                                </div>
                            </div>
                        </section>
                        <div className="md:w-1/2 h-60 lg:w-full text-center">
                            <h3 className="uppercase font-semibold text-gray-600 mt-3">Puntos (Coordenadas)</h3>
                            <div className="rounded-xl mt-1 h-[60%]">
                                <MapaAgregar
                                    setCoordenada_x={setCoordenada_x}
                                    setCoordenada_y={setCoordenada_y}
                                />
                            </div>
                        </div>
                    </section>
                </section>
                <button
                    type="submit"
                    className="w-full mt-12 bg-primary-300 rounded-xl text-white uppercase py-3 text-2xl font-semibold hover:bg-primary-900/90"
                >
                    Crear
                </button>
            </form>
        </div>
    );
};

export default AgregarCentroDeportivo;
