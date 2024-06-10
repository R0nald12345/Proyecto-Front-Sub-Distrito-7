import {Link} from 'react-router-dom';

const MainBienvenida = ( ) => {
  return (
    <>
            <div className='text-center mx-auto text-white'>
              <h1 className='text-7xl font-bold'>Bienvenido</h1>
              <p className='font-medium text-3xl mt-5'>Al mejor distrito</p>
              <div className='mt-10'>
                <Link className='bg-green-600 px-8 py-3 rounded-lg font-semibold' to="auth">Login</Link>
              </div>
              {/* <a className='px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors mt-10'>
                  Comenzar como Invitado
              </a> */}
            </div>
    </>
  );
};

export default MainBienvenida;
