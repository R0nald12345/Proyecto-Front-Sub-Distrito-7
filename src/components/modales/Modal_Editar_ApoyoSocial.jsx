import {useState} from "react";

const Modal_Editar_ApoyoSocial = ({ open, onClose, listaGeneralApoyoSocial }) => {
  const { fecha, nombreEntrega, nombre, cantidad } = listaGeneralApoyoSocial;

  if (!open) return null;

  const [name, setName] = useState(nombreEntrega);
  const [breakfast, setBreakfast] = useState(nombre);
  const [count, setCount] = useState(cantidad);

  // // export const actualizarUsuario = async(id,usuario) =>
  // //   await axios.put(`/api/usuarios/${id}`,usuario);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log({id},'ID de MOdal Editar');
  //     console.log({nombre},'ID de MOdal Editar');

  //     const response = await actualizarUsuario(id, nombre);
  //     console.log(response.data, 'Respuesta de Editar');
  //     setListaServicio([...listaServicio, response.data]);
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "Servicio Editado exitosamente",
  //       showConfirmButton: false,
  //       timer: 1500
  //     });
  //     onClose(); // Cierra el modal después de crear el servicio
  //   } catch (e) {
  //     console.log("Hubo error en el Componente CreateModalEditar", e);
  //   }
  // };

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
          <h2 className="text-3xl font-bold text-center">Editar Apoyo Social</h2>
          <div className="mt-5">
            <h3 className="font-semibold mt-2">Nombre</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <h3 className="font-semibold mt-2">Nombre Entrega</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
              type="text"
              value={breakfast}
              onChange={(e) => setBreakfast(e.target.value)}
            />
            <h3 className="font-semibold mt-2">Cantidad</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <h3 className="font-semibold mt-2">Fecha</h3>
            <input
              className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
              type="date"
              value={fecha}
              onChange={(e) => setNombre(e.target.value)}
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

export default Modal_Editar_ApoyoSocial;
