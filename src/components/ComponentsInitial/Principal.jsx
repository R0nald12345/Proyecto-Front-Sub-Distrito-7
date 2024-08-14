import Navegacion from './Navegacion';
import subalcaldiadistrito7 from '../ComponentsInitial/img/subalcaldiadistrito7.png';
import { Outlet } from 'react-router-dom';

const Principal = () => {
  return (
    <div>
        {/* <header className='h-20 flex items-center md:h-20 bg-green-700'>
        <Navegacion />
      </header> */}
      

      <main
        className='min-h-screen flex flex-col justify-center items-center bg-center bg-cover bg-blend-overlay bg-black/50'
        style={{ backgroundImage: `url(${subalcaldiadistrito7})` }}
      >

        <Outlet />
      </main>
    </div>
  );
};

export default Principal;