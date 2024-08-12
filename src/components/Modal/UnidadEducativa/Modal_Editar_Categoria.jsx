import { useState,useEffect } from "react";
// import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";
import ListaCategoria_Gubernamental from "../../../pages/UnidadesEducativas/Publico/ListaCategoria_Gubernamental";
import { getApoyoGubernamentalListaGeneral, getCategoriaListaGeneral } from "../../../api/UnidadesEducativas";
import Modal_Actualizar_Categoria from "./Modal_Actualizar_Categoria";
// import { newApoyoGubernamental } from "../../api/UnidadesEducativas";
// import { getApoyoGubernamentalListaGeneral } from "../../../api/UnidadesEducativas";

const Modal_Editar_Categoria = ({
  open,
  onClose,
  tipoCategoria,
  setTipoCategoria,
}) => {
 
  useEffect(() => {
    const fetchingDatoCategoria = async () => {
      try {
        const datosCategorias = await getCategoriaListaGeneral();
        setTipoCategoria(datosCategorias);
      } catch (error) {
        console.log(
          "Error en Componente Encabezado_ModalEditarCategoria" + error
        );
      }
    };
    fetchingDatoCategoria();
  }, [open, setTipoCategoria]);

    if (!open) return null;

  return (
    <>
     
    
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <section className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5">

              <div className="flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
                  onClick={onClose}
                >
                  X
              </button>
            </div>

          <h3 className="text-3xl font-bold text-center">
            Listado de Categorias
          </h3>
          
          <section className="border border-black/50 rounded-lg px-2 py-3 mt-5">
            <div className=" w-full">
              <ul className="w-full flex bg-gray-500/30 gap-3 mb-3 rounded-xl shadow-lg px-2">
                
                <li className="font-semibold text-start w-[70%] px-2 py-2">
                  Nombre
                </li>
                
                <li className="font-semibold text-start w-[30%] px-2 py-2">
                  Acciones
                </li>

              </ul>

              <section
                className="w-full max-h-96 overflow-y-auto"
                style={{ scrollbarWidth: "none" }}
              >
                {tipoCategoria.map((element) => (
                  <ListaCategoria_Gubernamental
                    key={element.id}
                    datoCategoria={element}
                    tipoCategoria={tipoCategoria}
                    setTipoCategoria={setTipoCategoria}
                   
                  />
                ))}
              </section>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Modal_Editar_Categoria;
