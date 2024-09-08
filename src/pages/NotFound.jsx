import React from 'react';

const NotFound = () => {
  return (
    <div className=' flex justify-center items-center h-screen w-screen bg-gray-800'>
      <div className='text-center'>
        <h1 className='text-white font-extrabold text-4xl'>Error 404 - Página no encontrada</h1>
        <p className='text-white font-medium text-2xl'>La página que estás buscando no existe.</p>
      </div>
    </div>
  );
};

export default NotFound;