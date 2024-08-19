import { useState,useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { getDatoGeneralTiposTurno } from "../../../api/UnidadesEducativas";
import { ImInsertTemplate } from "react-icons/im";
import Lista_TipoTurno from "../../Listas/UnidadesEducativas/Lista_TipoTurno";
import { DataContext } from "../../../context/DataProvider";

import "../../../../src/Styles.css";
import Lista_TipoInfraestructura from "../../Listas/UnidadesEducativas/Lista_TipoInfraestructura";

const Modal_Actualizar_Infraestructura = ({
  open,
  onClose,
}) => {

  if (!open) return null;

  const {datoInfraestructura, setDatoInfraestructura} = useContext(DataContext);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <div className="max-w-lg w-11/12 max-h-[90vh] bg-white/60 shadow-2xl rounded-2xl p-5">
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
              onClick={onClose}
            >
              X
            </button>
          </div>

          <h2 className="text-3xl font-bold text-center">Lista Tipo Infraestructura</h2>

          <section
            className="mt-5"
          >
            <div className="flex rounded-md bg-white">
                <h4 className="w-[70%] font-semibold px-2 text-xl">Nombre</h4>
                <h4 className="w-[30%] font-semibold text-center text-xl">Acciones</h4>
            </div>
            <div className="mt-3 max-h-48  overflow-y-auto scrollbar-hide">
              
                {
                    datoInfraestructura.map( item =>(
                        <Lista_TipoInfraestructura
                            key={item.id}
                            id={item.id}
                            nombre={item.nombre}
                            // onDelete={setDatoturno}
                            // onEdit={setDatoturno}
                        />

                    ))
                }
            </div>

            
          </section>
        </div>
      </div>
    </>
  );
};
export default Modal_Actualizar_Infraestructura;
