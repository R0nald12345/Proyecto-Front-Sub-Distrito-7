import React from 'react'
import useForm from '../../hooks/useForm';
import Swal from 'sweetalert2'
import { createUsuario } from '../../api/Usuario';

const NuevoUsuario = () => {

    // const [nombre, setNombre] = useState(second)

    const { onInputChange, onResetForm, name, email, password } = useForm({
        name: "",
        email: "",
        password: "",
      });


    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            const response = createUsuario({ name, email, password });
            onResetForm();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Se creó correctamente el Usuario",
                showConfirmButton: false,
                timer: 1500
              });
        }catch(e){
            console.log('Error al intentar, crear Usuario', e)
        }

    }
    



  return (
    <>
        <form 
            className='bg-white/50 rounded-lg md:w-[60%] xl:w-[40%] mx-auto p-5 mt-32'
            onSubmit={handleSubmit}
            >
            <h2 className='text-center text-3xl font-bold'>Agregar Nuevo Usuario</h2>
            <div className=''>
                <h3 className='mt-3 text-xl font-semibold'>Nombre</h3>

                <input 
                    className='w-full p-2 rounded-lg'
                    type='text'
                    name='name'
                    value={name}
                    onChange={onInputChange}
                />

                <h3 className='mt-3 text-xl font-semibold'>Email</h3>
                <input 
                    className='w-full p-2 rounded-lg'
                    type='email'
                    name='email'
                    value={email}
                    onChange={onInputChange}    
                />
                <h3 className='mt-3 text-xl font-semibold'>Contraseña</h3>

                <input 
                    className='w-full p-2 rounded-lg'
                    type='password'
                    name='password'
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            
            <div className='flex justify-center mt-5'>
                <input
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full '
                    type='submit'
                />

            </div>
        </form>
    </>
  )
}

export default NuevoUsuario