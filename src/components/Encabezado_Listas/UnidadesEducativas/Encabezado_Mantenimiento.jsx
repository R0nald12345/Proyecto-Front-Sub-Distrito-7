import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteMantenimientoID, getMantenimientosListaGeneral } from "../../../api/UnidadesEducativas";
import Lista_Mantenimiento from '../../Listas/UnidadesEducativas/Lista_Mantenimiento.jsx';
import Modal_Agregar_Mantenimiento from "../../Modal/UnidadEducativa/Modal_Agregar_Mantenimiento.jsx";
import Modal_Actualizar_Mantenimiento from "../../Modal/UnidadEducativa/Modal_Actualizar_Mantenimiento.jsx";


// Función para formatear la fecha
const formatearFecha = (fecha) => {
  if (fecha.length > 0) { // Me indica que tengo una fecha
    let fechaFormateada = ""; 
    for (let i = 0; i < fecha.length; i++) {
      if (fecha[i] == "T") {
        fechaFormateada = fecha.substring(0, i);
        break;
      }
    }
    const [year, month, day] = fechaFormateada.split("-");
    return `${day}-${month}-${year}`;
  } else {
    return "Fecha no válida";
  }
};

const Encabezado_Mantenimiento = () => {
  
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openActualizar, setOpenActualizar] = useState(false);
  const [idSocial,setIdSocial] = useState(0);

  const { id } = useParams();
  const [listaGeneralMantenimiento, setListasGeneralMantenimiento] = useState([]);
  const [filtro, setFiltro] = useState(""); // Estado para el filtro

  useEffect(() => {
    const fetchingListaDesayunoGeneral = async () => {
      try {
        const datosDesayuno = await getMantenimientosListaGeneral();
        setListasGeneralMantenimiento(datosDesayuno);
      } catch (error) {
        console.log("Error en el Componente Encabezado Desayuno" + error);
      }
    };
    fetchingListaDesayunoGeneral();
  }, []);

  const handleEliminar = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Eliminar Mantenimiento?',
        text: "Estas seguro de Eliminar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
  
      if (result.isConfirmed) {
        await deleteMantenimientoID(id);
        setListasGeneralMantenimiento(listaGeneralMantenimiento.filter((element) => element.id !== id));
        Swal.fire({
          title: 'Eliminado!',
          text: 'El Mantenimiento ha sido eliminado con exito',
          icon: 'success'
        });
        // Aquí puedes actualizar tu interfaz o recargar los datos necesarios
      }
    } catch (error) {
      console.log('Error en Componente Encabezado Mantenimiento', error);
    }
  };
  
  const handleActualizar = (idS) => {
    setOpenActualizar(!openActualizar);
    setIdSocial(idS);
  }


  // Función para actualizar el estado del filtro basado en el input
  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  };

  // Filtrar la lista basada en el filtro
  const listaFiltrada = filtro.trim() === "" ? listaGeneralMantenimiento : listaGeneralMantenimiento.filter((element) =>
    element.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <Modal_Agregar_Mantenimiento
        id={id}
        onClose={() => setOpenModalCreate(false)}
        open={openModalCreate}
        listaGeneralMantenimiento={listaGeneralMantenimiento}
        setListasGeneralMantenimiento = {setListasGeneralMantenimiento}
      />

      <Modal_Actualizar_Mantenimiento
        open={openActualizar}
        onClose={() => setOpenActualizar(false)}
        idUE={id}
        idMantenimiento = {idSocial}
        listaGeneralMantenimiento={listaGeneralMantenimiento}
        setListasGeneralMantenimiento = {setListasGeneralMantenimiento}

      />


      <section className="md:w-[100%] lg:w-[90%]  bg-gray-200/70 mx-auto rounded-xl p-5 md:p-3 lg:p-5">
        <h3 className="text-center font-bold text-3xl">Lista Mantenimiento</h3>

        <div className="md:flex justify-between mt-5">
          
          <div className="">
            <label className="font-semibold text-xl mr-3">Buscar</label>
            <input
              className="border border-black/50 rounded-md py-1 pl-2"
              placeholder="Buscar..."
              type="text"
              onChange={handleFiltroCambio} // Actualizar el filtro basado en el input
            />
          </div>

          <button
            className="bg-green-500 w-full md:w-1/5 mt-5 md:mt-0 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => setOpenModalCreate(!openModalCreate)}
          >
            Agregar
          </button>
        </div>
        <section className="hidden md:block w-full mt-6">
          <div className="">
            <ul className=" px-2 flex bg-white gap-2 mb-3 rounded-xl shadow-lg">
              {/* <ul className=" bg-white gap-3 mb-3 rounded-xl shadow-lg flex px-2"> */}
              <li className=" font-semibold text-start w-[15%] px-2 py-2 ">
                Fecha
              </li>
              <li className=" font-semibold text-start w-[28%] px-2 py-2">
                Titulo
              </li>
              <li className=" font-semibold text-start w-[25%] px-2 py-2">
                Encargado
              </li>
              <li className=" font-semibold text-start w-[20%] px-2 py-2">
                Empresa
              </li>
              <li className=" font-semibold text-center w-[12%] py-2 px-2">
                Acciones
              </li>
            </ul>
          </div>
        </section>

        <section
          className="hidden md:block  w-full max-h-96 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {listaFiltrada.map((element) => ( // Usar listaFiltrada para renderizar
            <Lista_Mantenimiento
              key={element.id}
              idUE={id}
              idMantenimiento = {element.id}
              datosMantenimiento={element}
              listaGeneralMantenimiento={listaGeneralMantenimiento}
              setListasGeneralMantenimiento = {setListasGeneralMantenimiento}
            />
          ))}
        </section>

        {/* Tarjetas para pantallas pequeñas */}
        <div className="md:hidden grid grid-cols-1 gap-4 mt-5">
              {listaFiltrada.map((element) => (
                <div key={element.id} className="bg-white p-4 rounded-xl shadow-lg">

                  <h4 className="font-bold text-lg">Encargado:</h4>
                  <p className="font-new-font ">{element.encargado}</p>

                  <h4 className="font-bold text-lg">Título:</h4>
                  <p className="font-new-font">{element.titulo}</p>

                  <h4 className="font-bold text-lg">Empresa:</h4>
                  <p className="font-new-font">{element.empresa}</p>

                  <h4 className="font-bold text-lg">Fecha:</h4>
                  
                  <p className="font-new-font">{formatearFecha(element.fecha)}</p>

                  <div className="flex justify-end mt-3 gap-2">
                    {/* Aquí puedes agregar los botones de acciones */}
                    <button
                      className="bg-primary-900 w-1/2 text-white px-3 py-1 rounded-lg"
                      onClick={() =>handleActualizar(element.id)}
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

export default Encabezado_Mantenimiento;