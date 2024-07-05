import React from "react";
import { newGestion } from "../../api/UnidadesEducativas";
import {useNavigate} from 'react-router-dom'

const Modal_AgregarGestion = ({ open, onClose }) => {

    const navigate =  useNavigate();

    const [ horaGestion,  setHoraGestion] = seState("");
    const [ nroGestion,  setNroGestion] = seState("");
    const [ nombreDirectorGestion,  setNombreDirectorGestion] = seState("");
    const [ image ,  setImage] = seState("");

  if (!open) return null;

  useEffect(() => {
    const fetchingCreateGestion = async()=>{
        try{
            await newGestion(nroGestion, horaGestion, nombreDirectorGestion, image);
            onClose();
            navigate('/inicio/unidadeducativa');

        }catch(e){
            console.log('Hubo error en el fetchingCreateGestion', e);
        }
    }
    fetchingCreateGestion();
  }, [])
  


  return (
    <>
      <div>
        <p className="uppercase font-semibold text-gray-600 mt-3 mb-1 text-center">
          Gestión
        </p>
        <section className="flex gap-8 border border-black/50 rounded-lg px-3 py-3">
          <section className="flex-col gap-5 w-[40%] ">
            <div className="w-full mt-1">
              <p className="uppercase font-semibold text-gray-600 mt-1">
                Horario
              </p>
              <p className="w-full border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100">
                {horaGestion} --
              </p>
            </div>
            <div className="w-full mt-5">
              <p className="uppercase font-semibold text-gray-600 mt-1">
                Número
              </p>
              <p className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100">
                {nroGestion}
              </p>
            </div>

            <div className="w-full mt-5">
              <p className="uppercase font-semibold text-gray-600 mt-1">
                Director
              </p>
              <p className="w-full  border-gray-400 border-2 rounded-xl py-1 px-2 bg-gray-100">
                {nombreDirectorGestion}
              </p>
            </div>
          </section>

          <section className="w-[60%]">
            <p className="uppercase font-semibold text-gray-600 mt-1">
              Junta Escolar
            </p>
            <img
            //   src={image}
              className="border-2 rounded-xl  border-gray-400 object-cover"
              style={{ height: "230px" }}
            />
          </section>
        </section>
      </div>
    </>
  );
};

export default Modal_AgregarGestion;
