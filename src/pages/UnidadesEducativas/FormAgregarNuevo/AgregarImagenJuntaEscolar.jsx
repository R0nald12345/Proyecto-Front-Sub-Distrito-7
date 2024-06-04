// import React, { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';

// const AgregarImagenJuntaEscolar = () => {
//   const onDrop = useCallback((acceptedFiles) => {
//     console.log(acceptedFiles[0]);
//     // Do something with the files
//   }, []);

//   const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
//     useDropzone({ onDrop });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("file", acceptedFiles[0]);
//     formData.append("upload_preset", "ufsxnkhr");
//     formData.append("api_key", "327959554798578");

//     const res = await fetch(
//       "https://api.cloudinary.com/v1_1/dnvnpkjp6/image/upload",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );
//     const data = await res.json();
//     console.log(data);
//     console.log('skejbfkjsbdcjkbsd');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="bg-red-400 h-1/6" {...getRootProps()}>
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p>Drop the files here ...</p>
//           ) : (
//             <p>Arrastre una Imagen</p>
//           )}
//         </div>

//         <div className=" h-5/6 flex justify-center">
//           {acceptedFiles[0] && (
//             <img
//               className='object-cover rounded-xl'
//               src={URL.createObjectURL(acceptedFiles[0])}
//               alt=""
//               style={{
//                 height: '208px'
//               }}
//             />
//           )}
//         </div>

//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// };

// export default AgregarImagenJuntaEscolar;


import {useState,useCallback} from 'react'
import { useDropzone } from 'react-dropzone';
import imagen from '../../../img/ImagenStandar.png'

const AgregarImagenJuntaEscolar = () => {



  return (

    <>
    </>
  )
}

export default AgregarImagenJuntaEscolar
