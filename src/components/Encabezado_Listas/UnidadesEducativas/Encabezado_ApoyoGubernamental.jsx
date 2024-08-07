import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  deleteApoyoGubernamentalID,
  getApoyoGubernamentalListaGeneral,
  getCategoriaListaGeneral,
} from "../../../api/UnidadesEducativas";
import Swal from 'sweetalert2';
import Lista_ApoyoGubernamental from "../../Listas/UnidadesEducativas/Lista_ApoyoGubernamental.jsx";
import Modal_Agregar_ApoyoGubernamental from "../../modales/Modal_Agregar_ApoyoGubernamental.jsx";
import Modal_Crear_Categoria from "../../Modal/UnidadEducativa/Modal_Crear_Categoria.jsx";
// import Modal_Editar_ApoyoGubernamental from "../../modales/Modal_Editar_ApoyoGubernamental.jsx";
import Modal_Editar_Categoria from "../../Modal/UnidadEducativa/Modal_Editar_Categoria.jsx";


// Función para formatear la fecha
const formatearFecha = (fechaISO) => {
  const fecha = new Date(fechaISO);
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
  const año = fecha.getFullYear();
  return `${mes}/${dia}/${año}`;
};


const Encabezado_ApoyoGubernamental = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);

  const [openModalCreateCategoria, setOpenModalCreateCategoria] = useState(false);
  const [openModalSetCategoria, setOpenModalSetCategoria] = useState(false);

  const { id } = useParams();
  const [tipoCategoria, setTipoCategoria] = useState([]);
  const [listaGeneralApoyoGubernamental, setListaGeneralApoyoGubernamental] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchingListaCategoriaGeneral = async () => {
      try {
        const datosCategoria = await getCategoriaListaGeneral();
        setTipoCategoria(datosCategoria);
      } catch (error) {
        console.log(
          "Error en el Componente Encabezado_ApoyoGubernamental" + error
        );
      }
    };
    fetchingListaCategoriaGeneral();
  }, []);

  useEffect(() => {
    const fetchingDatoGubernamental = async () => {
      try {
        const datosGubernamentales = await getApoyoGubernamentalListaGeneral();
        setListaGeneralApoyoGubernamental(datosGubernamentales);
      } catch (error) {
        console.log(
          "Error en Componente Encabezado_ApoyoGubernamental" + error
        );
      }
    };
    fetchingDatoGubernamental(id);
  }, []);

  
  const handleEliminar = async (id) => {
    try{
      const result = await Swal.fire({
        title: 'Eliminar!',
        text: "Estas seguro de Eliminar?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
      if(result.isConfirmed){
        // console.log('id');
        // console.log(id);
        await deleteApoyoGubernamentalID(id);
        setListaGeneralApoyoGubernamental(listaGeneralApoyoGubernamental.filter((element) => element.id !== id));
        Swal.fire({
          title: 'Eliminado!',
          text: 'ha sido eliminado con exito',
          icon: 'success'
        });
        // Aquí puedes actualizar tu interfaz o recargar los datos necesarios
      }
    }catch(error){
      console.log('Error en el componente Lista_ApoyoGubernamental' + error);
    }

  }



  const listaFiltrada = listaGeneralApoyoGubernamental.filter((element) => {
    const matchFiltro =
      filtro.trim() === "" ||
      element.nombreEntrega.toLowerCase().includes(filtro.toLowerCase());
    const matchCategoria =
      selectedCategory === "" || element.categoria.nombre === selectedCategory;
    return matchFiltro && matchCategoria;
  });

  return (
    <>
      <Modal_Agregar_ApoyoGubernamental
        onClose={() => setOpenModalCreate(false)}
        open={openModalCreate}
        idUE={id}
        tipoCategoria={tipoCategoria}
        listaGeneralApoyoGubernamental={listaGeneralApoyoGubernamental}
        setListaGeneralApoyoGubernamental={setListaGeneralApoyoGubernamental}
      />

      <Modal_Crear_Categoria
        open={openModalCreateCategoria}
        onClose={() => setOpenModalCreateCategoria(false)}
        tipoCategoria={tipoCategoria}
        setTipoCategoria={setTipoCategoria}
      />

      <Modal_Editar_Categoria
        open={openModalSetCategoria}
        onClose={() => setOpenModalSetCategoria(false)}
        tipoCategoria={tipoCategoria}
        setTipoCategoria={setTipoCategoria}
      
      />

      <section className="md:w-[100%] lg:w-[80%]  bg-gray-200/70 mx-auto rounded-xl p-5 md:p-3 lg:p-5">
        <h3 className="text-center font-bold text-3xl">
          Lista Apoyo Gubernamental
        </h3>
        <div className="md:flex justify-between mt-5">
          <div className=" ">
            <label className="font-semibold text-xl mr-3">Buscar</label>
            <input
              className="border border-black/50 rounded-md py-1 pl-2"
              placeholder="Buscar..."
              onChange={(e) => setFiltro(e.target.value)}
              type="text"
            />
          </div>

          <button
            className="bg-green-500 hover:bg-green-700 w-full md:w-1/5 mt-5 md:mt-0 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => setOpenModalCreate(!openModalCreate)}
          >
            Agregar
          </button>
        </div>

        <div className="md:flex gap-3 mt-5">
          <div className="flex gap-5">
            <button 
              onClick={() => setOpenModalCreateCategoria(!openModalCreateCategoria)}
              className="md:w-[45%] bg-green-500 hover:bg-green-800 rounded-xl text-white font-bold px-3 py-2">
              Nueva Categoria +
            </button>

            <button 
              onClick={() => setOpenModalSetCategoria(!openModalSetCategoria)}
              className="md:w-[35%] bg-green-500 hover:bg-green-800 rounded-xl text-white font-bold px-3 py-2">
              Editar Categoria
            </button>
          </div>
          <select
            className="py-1 rounded-xl pl-3 w-full md:w-[65%] border-gray-400 border-2 bg-gray-200 mt-3"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todos</option>
            {tipoCategoria.map((option) => (
              <option value={option.nombre} key={option.id}>
                {option.nombre}
              </option>
            ))}
          </select>
        </div>

        <section className="hidden md:block border border-black/50 rounded-lg px-2 py-3 mt-5">
          <div className=" w-full">
            <ul className="w-full flex bg-white gap-3 mb-3 rounded-xl shadow-lg px-2">
              <li className="font-semibold text-start w-[15%] px-2 py-2">
                Fecha
              </li>
              <li className="font-semibold text-start w-[50%] px-2 py-2">
                Nombre Entrega
              </li>
              <li className="font-semibold text-start w-[15%] px-2 py-2">
                Cantidad
              </li>
              <li className="font-semibold text-start w-[20%] px-2 py-2">
                Acciones
              </li>
            </ul>

            <section
              className="hidden md:block w-full max-h-96 overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {listaFiltrada.map((element) => (
                <Lista_ApoyoGubernamental
                  key={element.id}
                  datoApoyoGubernamental={element}
                  listaGeneralApoyoGubernamental={listaGeneralApoyoGubernamental}
                  setListaGeneralApoyoGubernamental={setListaGeneralApoyoGubernamental}
                  

                />
              ))}
            </section>
          </div>
        </section>

        {/* Tarjetas para pantallas pequeñas */}
        <div className="md:hidden grid grid-cols-1 gap-4 mt-5">
          {listaFiltrada.map((element) => (
            <div key={element.id} className="bg-white p-4 rounded-xl shadow-lg">
              <h4 className="font-bold text-lg">Nombre Entrega:</h4>
              <p className="font-new-font ">{element.nombreEntrega}</p>

              <h4 className="font-bold text-lg">Nombre Desayuno:</h4>
              <p className="font-new-font">{element.nombre}</p>

              <h4 className="font-bold text-lg">Cantidad:</h4>
              <p className="font-new-font">{element.cantidad}</p>

              <h4 className="font-bold text-lg">Fecha:</h4>

              <p className="font-new-font">{formatearFecha(element.fecha)}</p>

              <div className="flex justify-end mt-3 gap-2">
                {/* Aquí puedes agregar los botones de acciones */}
                <button
                  className="bg-primary-900 w-1/2 text-white px-3 py-1 rounded-lg"
                  // onClick={() =>
                  //   navigate(`/inicio/centro_deportivo/editar/${element.id}`)
                  // }
                >
                  Editar
                </button>

                <button
                  onClick={() => handleEliminar(element.id)}
                  className="bg-red-500 w-1/2 text-white px-3 py-1 rounded-lg"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Encabezado_ApoyoGubernamental;
