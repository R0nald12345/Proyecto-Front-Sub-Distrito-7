import React,{useState} from 'react'

const Modal_Detalles_Usuario = ({open, onClose, nameU, emailU, passwordU}) => {
  if (!open) return null;


  
  const [name, setName] = useState(nameU);
  const [password, setPassword] = useState(passwordU);
  const [email, setEmail] = useState(emailU);


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
      <form
        className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5"
      >
        <div className="flex justify-end">

          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <h2 className="text-3xl font-bold text-center">
          Detalles Usuario
        </h2>

        <div className="mt-5">
          <h3 className="font-semibold mt-2">Nombre</h3>
          <input
            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
            type="text"
            value={name}
          />

          <h3 className="font-semibold mt-2">Correo</h3>
          <input
            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
            type="text"
            value={email}
          />

          <h3 className="font-semibold mt-2">Contraseña</h3>
          <input
            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
            type="text"
            value={password}
          />
        </div>

        
      </form>
    </div>
  );
};


export default Modal_Detalles_Usuario
