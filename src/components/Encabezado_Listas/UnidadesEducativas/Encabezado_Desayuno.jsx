import { useState, useEffect, useContext } from "react";
import Lista_Desayuno from "../../Listas/UnidadesEducativas/Lista_Desayuno";
import { actualizarDesayuno, deleteDesayunoID, getDesayunosListaGeneral } from "../../../api/UnidadesEducativas";
import Modal_Agregar_Desayuno from "../../modales/Modal_Agregar_Desayuno";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

// Función para formatear la fecha
const formatearFecha = (fechaISO) => {
  const fecha = new Date(fechaISO);
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
  const año = fecha.getFullYear();
  return `${mes}/${dia}/${año}`;
};

const Encabezado_Desayuno = () => {
  // const { listaGeneralDesayuno, setListasGeneralDesayuno } = useContext(DesayunoContext);
  // console.log(listaGeneralDesayuno);
  const { id } = useParams();
  const [listaGeneralDesayuno, setListasGeneralDesayuno] = useState([]);
  const [openModalAgregar, setOpenModalAgregar] = useState(false);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchingListaDesayunoGeneral = async () => {
      try {
        const datosDesayuno = await getDesayunosListaGeneral();
        setListasGeneralDesayuno(datosDesayuno);

          // Convertir la fecha a un objeto Date
       
      } catch (error) {
        console.log("Error en el Componente Encabezado Desayuno" + error);
      }
    };
    fetchingListaDesayunoGeneral();
  }, []);

  const handleDeleteDesayuno = async(id) => {
    try{
      const result = await Swal.fire({
        title: 'Eliminar Mantenimiento?',
        text: "Estas seguro de Eliminar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
      if(result.isConfirmed){
        await deleteDesayunoID(id);
        setListasGeneralDesayuno(
            listaGeneralDesayuno.filter((element) => element.id !== id));
        Swal.fire({
          title: 'Eliminado!',
          text: 'El Desayuno ha sido eliminado con exito',
          icon: 'success'
        });
      }
    }catch(error){
      console.log('Error en el componente Encabezado_Desayuno' + error);
    }
  }

  // console.log(listaGeneralDesayuno);

  //Funcion para actualizar el Filtro basdado en el input
  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  };

  const listaFiltrada =
    filtro.trim() === ""
      ? listaGeneralDesayuno
      : listaGeneralDesayuno.filter((element) =>
          element.nombre.toLowerCase().includes(filtro.toLowerCase())
        );

  return (
    <>
      <Modal_Agregar_Desayuno
        open={openModalAgregar}
        onClose={() => setOpenModalAgregar(false)}
        idUE={id}
        listaGeneralDesayuno={listaGeneralDesayuno}
        setListasGeneralDesayuno={setListasGeneralDesayuno}
      />

      <section className="md:w-[100%] lg:w-[80%]  bg-gray-200/70 mx-auto rounded-xl p-5 md:p-3 lg:p-5">
        <h3 className="text-center font-bold text-3xl">Lista Desayuno</h3>

        <div className="md:flex justify-between mt-5">
          <div className="">
            <label className="font-semibold text-xl mr-3">Buscar</label>
            <input
              className="border border-black/50 rounded-md py-1 pl-2"
              placeholder="Buscar..."
              type="text"
              onChange={handleFiltroCambio}
            />
          </div>

          <button
            className="bg-green-500 hover:bg-green-700 mt-5 md:mt-0 text-white w-full md:w-1/5 font-bold py-2 px-4 rounded-md"
            onClick={() => setOpenModalAgregar(!openModalAgregar)}
          >
            Agregar
          </button>
        </div>
        <section className="hidden md:block w-full mt-6">
          <div className="">
            <ul className=" px-2 flex bg-white gap-3 mb-3 rounded-xl shadow-lg">
              {/* <ul className=" bg-white gap-3 mb-3 rounded-xl shadow-lg flex px-2"> */}
              <li className=" font-semibold text-start w-[15%] px-1 py-2 ">
                Fecha
              </li>
              <li className=" font-semibold text-start w-[30%] px-2 py-2">
                NombreEntrega
              </li>
              <li className=" font-semibold text-start w-[33%] px-2 py-2">
                Nombre Desayuno
              </li>
              <li className=" font-semibold text-center w-[12%] px-1 py-2">
                Cantidad
              </li>
              <li className=" font-semibold text-center w-[10%] py-2">
                Acciones
              </li>
            </ul>
          </div>
        </section>

        <section
          className="hidden md:block w-full max-h-96 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {listaFiltrada.map((element) => (
            <Lista_Desayuno
              key={element.id}
              idDesayuno={element.id}
              datosDesayuno={element}
              listaGeneralDesayuno={listaGeneralDesayuno}
              setListasGeneralDesayuno={setListasGeneralDesayuno}
              // fecha={element.fecha}
              // nombreEntrega={element.nombreEntrega}
              // nombre={element.nombre}
              // cantidad={element.cantidad}
            />
          ))}
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
                  onClick={() => handleDeleteDesayuno(element.id)}
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

export default Encabezado_Desayuno;
