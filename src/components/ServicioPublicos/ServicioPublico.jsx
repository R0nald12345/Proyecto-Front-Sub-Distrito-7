import React from "react";

const ServicioPublico = () => {
  return (
    <>
      <div className="lg:w-full rounded-xl px-2">
        <button
          type="button"
          // onClick={() => setOpenModalCreateServicioPublico(!openModalCreateServicioPublico)}
          className="w-full mt-2 bg-primary-300 rounded-xl text-white uppercase py-1 text-xl font-semibold hover:bg-primary-900/90"
        >
          + Agregar Servicio Público
        </button>
        <div className="flex bg-white mt-2 py-2 rounded-md">
          <h4 className=" w-[80%] text-start lg:text-center px-2  uppercase font-semibold ">
            Descripcion
          </h4>
          <h4 className="w-[20%] hidden lg:block text-center uppercase font-semibold">
            Acciones
          </h4>
        </div>
        <div className=" mt-3 max-h-28 md:max-h-32  overflow-y-auto scrollbar-hide">
          {/* {serviciosPublicos.map((element, index) => (
                      <Lista_ServicioPublico
                        key={index}
                        id={index}
                        descripcion={element}
                        onDelete={handleDeleteServicioPublico}
                        onEdit={() => {
                          setSelectedServicioPublico(element);
                          setSelectedIndex(index);
                          setOpenModalActualizarServicioPublico(true);
                        }}
                      />
                    ))} */}
        </div>
      </div>
    </>
  );
};

export default ServicioPublico;
