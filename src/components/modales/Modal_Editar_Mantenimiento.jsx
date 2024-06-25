import {useState} from 'react'

const Modal_Editar_Mantenimiento = ({open,onClose, datosMantenimiento}) => {
    const { fecha, titulo, encargado, empresa } = datosMantenimiento;

    if (!open) return null;

    
    const [title, setTitle] = useState(titulo);
    const [encargo, setEncargado] = useState(encargado);
    const [company, setCompany] = useState(empresa);    
  
    return (
      <>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
          <form
              className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/4 -translate-y-1/2"
            //   onSubmit={handleSubmit}
            >
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
                onClick={onClose}
              >
                X
              </button>
            </div>
            <h2 className="text-3xl font-bold text-center">
              Editar Mantenimiento
            </h2>
            <div className="mt-5">
              <h3 className="font-semibold">Titulo</h3>
              <input
                className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                
              ></input>  
              <h3 className="font-semibold">Encargado</h3>
              <input
                className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
                type="text"
                value={encargo}
                onChange={(e) => setEncargado(e.target.value)}
              />
              <h3 className="font-semibold">Empresa</h3>
              <input
                className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <h3 className="font-semibold">Fecha</h3>
              <input
                className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
                type="date"
                // value={fecha}
                // onChange={(e) => setNombre(e.target.value)}
              />
            </div>
  
            <div className="flex justify-center">
              <button className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl">
                Editar
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
export default Modal_Editar_Mantenimiento