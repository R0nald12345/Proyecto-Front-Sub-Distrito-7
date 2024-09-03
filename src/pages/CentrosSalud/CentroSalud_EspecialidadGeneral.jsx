import React, { useState, useEffect, useContext } from "react";
import { deleteEspecialidad, getDatoEspecialidades } from "../../api/CentroSalud";
import Lista_Especialidades from "../../components/Listas/CentroSalud/Lista_Especialidades";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { DataContext } from "../../context/DataProvider";
import Modal_Especialidad_Agregar from "../../components/Modal/CentroSalud/Modal_Especialidad_Agregar";
import Modal_Especialidad_Editar from "../../components/Modal/CentroSalud/Modal_Especialidad_Editar";

const CentroSalud_EspecialidadGeneral = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openActualizar, setOpenActualizar] = useState(false);

  const [nombreEspecialidad, setNombreEspecialidad] = useState("");
  const [idEspecialidad, setIdEspecialidad] = useState(0);



  const { nombreCentroSalud } = useContext(DataContext);

//   const { id } = useParams();

  const [listaEspecialidades, setListaEspecialidades] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchingListaEspecialidades = async () => {
      try {
        const datosEspecialidades = await getDatoEspecialidades();
        console.log("datosEspecialidades", datosEspecialidades);
        setListaEspecialidades(datosEspecialidades);
      } catch (error) {
        console.log(
          "Error en el Componente CentroSalud_EspecialidadGeneral" + error
        );
      }
    };
    fetchingListaEspecialidades();
  }, []);

  const { nombre } = listaEspecialidades;
  console.log("nombre", nombre);

  const handleFiltroCambio = (e) => {
    setFiltro(e.target.value);
  };

  const listaFiltrada =
    filtro.trim() === ""
      ? listaEspecialidades
      : listaEspecialidades.filter((element) =>
          element.nombre.toLowerCase().includes(filtro.toLowerCase())
        );


        const handleEliminar = async (id,nombre) => {
            try {
              const result = await Swal.fire({
                title: `Eliminar ${nombre}`,
                text: "Estas seguro de Eliminar!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              });
        
              if (result.isConfirmed) {
                await deleteEspecialidad(id);
                setListaEspecialidades(listaEspecialidades.filter((element) => element.id !== id));
                Swal.fire("Eliminado!", `El ${nombre} ha sido eliminado con exito`, "success");
              }
            } catch (error) {
              console.error("Error en Componente Lista_Especialidades", error);
            }
          };

          const handleActualizar=(idE,nombreE)=>{
            setIdEspecialidad(idE);
            setNombreEspecialidad(nombreE);
            setOpenActualizar(!openActualizar);
          }



  return (
    <>
      <Modal_Especialidad_Agregar
        open={openModalCreate}
        onClose={() => setOpenModalCreate(!openModalCreate)}
        listaEspecialidades={listaEspecialidades}
        setListaEspecialidades={setListaEspecialidades}
      />

      <Modal_Especialidad_Editar
        open={openActualizar}
        onClose={() => setOpenActualizar(!openActualizar)}
        idEspecialidad={idEspecialidad}
        nombreEspecialidad={nombreEspecialidad}
        setListaEspecialidades={setListaEspecialidades}
        listaEspecialidades={listaEspecialidades}
      />

      <section className="md:w-[80%] lg:w-[60%] bg-gray-200/70 mx-auto rounded-xl p-5 md:p-3 lg:p-5">
        <h3 className="text-center font-bold text-3xl">
          Especialidades en {nombreCentroSalud}
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
            <li className="font-semibold text-start w-[70%] px-1 py-2">
              Nombres
            </li>
            <li className="font-semibold text-center w-[30%] px-1 py-2">
              Acciones
            </li>
          </ul>
        </section>

        <section
          className="hidden md:block w-full max-h-96 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {listaFiltrada.map((element) => (
            <Lista_Especialidades
              key={element.id}
              id={element.id}
              nombre={element.nombre}
              listaEspecialidades={listaEspecialidades} // Cambio aquí: pasa el objeto individual
              setListaEspecialidades={setListaEspecialidades}
            />
          ))}
        </section>

        {/* Tarjetas para pantallas pequeñas */}
        <div className="md:hidden grid grid-cols-1 gap-4 mt-5">

          {listaFiltrada.map((element) => (
            <div key={element.id} className="bg-white p-4 rounded-xl shadow-lg">
              <h4 className="font-bold text-lg">Nombre:</h4>
              <p className="font-new-font ">{element.nombre}</p>
              <div className="flex justify-end mt-3 gap-2">
                {/* Aquí puedes agregar los botones de acciones */}
                <button
                  className="bg-primary-900 w-1/2 text-white px-3 py-1 rounded-lg"
                  onClick={() => handleActualizar(element.id,element.nombre)}
                >
                  Editar
                </button>
                <button
                  onClick={()=>handleEliminar(element.id,element.nombre) }
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

export default CentroSalud_EspecialidadGeneral;
