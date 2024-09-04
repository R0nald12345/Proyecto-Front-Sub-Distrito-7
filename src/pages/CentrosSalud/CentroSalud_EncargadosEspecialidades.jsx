import Swal from "sweetalert2";
import React, { useState, useEffect, useContext } from "react";
import { deleteCentrosaludhasEspecialidades, getDatoCentroSaludHasEspecialidades } from '../../api/CentroSalud';
import { DataContext } from "../../context/DataProvider";
import Lista_Encargados from "../../components/Listas/CentroSalud/Lista_Encargados";
import { useParams } from "react-router-dom";
import Modal_Encargados_Agregar from "../../components/Modal/CentroSalud/Modal_Encargados_Agregar";
import Modal_Encargado_Editar from "../../components/Modal/CentroSalud/Modal_Encargado_Editar";

const CentroSalud_EncargadosEspecialidades = () => {

    const {id} = useParams();
    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [openActualizar, setOpenActualizar] = useState(false);
  
    const [encargado, setEncargado] = useState("");
    const [idEspecialidad, setIdEspecialidad] = useState(0);
  
  
  
    const { nombreCentroSalud } = useContext(DataContext);
  
  //   const { id } = useParams();
  
    const [listaEncargadosEspecialidades, setListaEncargadosEspecialidades] = useState([]);

    const [filtro, setFiltro] = useState("");
  
    useEffect(() => {
      const fetchingListaEspecialidades = async () => {
        try {
          const datosEspecialidades = await getDatoCentroSaludHasEspecialidades();
        //   console.log("datosEspecialidades", datosEspecialidades);
        setListaEncargadosEspecialidades(datosEspecialidades);
        } catch (error) {
          console.log(
            "Error en el Componente CentroSalud_EspecialidadGeneral" + error
          );
        }
      };
      fetchingListaEspecialidades();
    }, []);
  
    // const { nombre } = listaEspecialidades;
    // console.log("nombre", nombre);
  
    const handleFiltroCambio = (e) => {
      setFiltro(e.target.value);
    };
  
    const listaFiltrada =
      filtro.trim() === ""
        ? listaEncargadosEspecialidades
        : listaEncargadosEspecialidades.filter((element) =>
            element.encargado.toLowerCase().includes(filtro.toLowerCase())
          );
  
  
          const deleteDatoEncargadoEspecialidad = async (id) => {
            try {
              const result = await Swal.fire({
                title: "Deseas Eliminar?",
                text: "Si eliminas no podrás recuperarlo!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, quiero Eliminar!",
              });
        
              if (result.isConfirmed) {
                await deleteCentrosaludhasEspecialidades(id);
                setListaEncargadosEspecialidades(
                  listaEncargadosEspecialidades.filter((element) => element.id !== id)
                );
                Swal.fire({
                  title: "Eliminado!",
                  text: "Eliminado Correctamente.",
                  icon: "success",
                });
              }
            } catch (error) {
              console.log("Error en el Componente Lista_Encargados", error);
            }
          };
      
  
  const [idEspecialista,setIdEspecialista] = useState(0);


  const handleActualizar = (idEspecialista,encargado, idEspecialidadDato) => {
      setOpenActualizar(!openActualizar);
    setIdEspecialista(idEspecialista);

    setEncargado(encargado);

    setIdEspecialidad(idEspecialidadDato);
    }
  
    return (
      <>
    
        <Modal_Encargados_Agregar
             open={openModalCreate}
             idCentroSalud={id}
             onClose={() => setOpenModalCreate(!openModalCreate)}
                listaEncargadosEspecialidades={listaEncargadosEspecialidades}
                setListaEncargadosEspecialidades={setListaEncargadosEspecialidades}

        />

        <Modal_Encargado_Editar
             open={openActualizar}
             onClose={() => setOpenActualizar(!openActualizar)}

             idEspecialista={idEspecialista}
             encargadoA={encargado}
             idCentroSalud={id}
             idEspecialidadA={idEspecialidad}

             
             listaEncargadosEspecialidades={listaEncargadosEspecialidades}
             setListaEncargadosEspecialidades={setListaEncargadosEspecialidades}


        />

        <section className="md:w-[80%] lg:w-[60%] bg-gray-200/70 mx-auto rounded-xl p-5 md:p-3 lg:p-5">
          <h3 className="text-center font-bold text-3xl">
             Encargados Especialistas <hr/>
            {nombreCentroSalud}
          </h3>
  
          <div className="md:flex justify-between mt-5">
            <div className="">
              <label className="font-semibold text-xl mr-3">Buscar</label>
              <input
                className="border border-black/50 rounded-md py-1 pl-2"
                placeholder="Buscar..."
                onChange={handleFiltroCambio}
                type="text"
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
            <ul className="bg-white gap-2 mb-3 rounded-xl shadow-lg flex px-2">
              <li className="font-semibold text-start w-[45%] px-1 py-2">
                Nombres
              </li>
              <li className="font-semibold text-start w-[30%] px-1 py-2">
                Especialidades
              </li>
              <li className="font-semibold text-center w-[25%] px-1 py-2">
                Acciones
              </li>
            </ul>
          </section>
  
          <section
            className="hidden md:block w-full max-h-72 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {listaFiltrada.map((element) => (
              <Lista_Encargados
                key={element.id}
                idCentroSalud={id}
                // nombre={element.nombre}
                datoEncargadoEspecialidades = {element} // Cambio aquí: pasa el objeto individual
                listaEncargadosEspecialidades={listaEncargadosEspecialidades} // Cambio aquí: pasa el objeto individual
                setListaEncargadosEspecialidades={setListaEncargadosEspecialidades}
              />
            ))}
          </section>
  
          {/* Tarjetas para pantallas pequeñas */}
          <div className="md:hidden grid grid-cols-1 max-h-96 overflow-y-auto gap-4 mt-5">

            {listaFiltrada.map((element) => (
              <div key={element.id} className="bg-white p-4 rounded-xl shadow-lg">
                <h4 className="font-bold text-lg">Nombre:</h4>
                <p className="font-new-font ">{element.encargado}</p>
                <h4 className="font-bold text-lg">Especialidad:</h4>
                <p className="font-new-font ">{element.idEspecialidad.nombre}</p>
                <div className="flex justify-end mt-3 gap-2">
                  {/* Aquí puedes agregar los botones de acciones */}
                   <button
                    className="bg-primary-900 w-1/2 text-white px-3 py-1 rounded-lg"
                    onClick={() => handleActualizar(element.id,element.encargado, element.idEspecialidad.id)}
                  >
                    Editar
                  </button>
                  <button
                    onClick={()=>deleteDatoEncargadoEspecialidad(element.id) }
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
  
export default CentroSalud_EncargadosEspecialidades
