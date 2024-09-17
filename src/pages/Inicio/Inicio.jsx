// import Header from "../ComponentsDashboard/Header"
// import Sidebar from "../ComponentsDashboard/Sidebar"

import { useEffect, useState } from "react";
import BarsChart from "../../components/Graficos/BarsChart";
import LinesChart from "../../components/Graficos/LinesChart";
import PiesChart from "../../components/Graficos/PiesChart";
import { getCentroPolicialListaGeneral } from "../../api/CentroPolicial";
import { getDatoCentroSalud } from "../../api/CentroSalud";
import { getDatoGeneralUE } from "../../api/UnidadesEducativas";

const Inicio = () => {

  const [cantCentroPolicial,setCantCentroPolicial] = useState(0);
  const [cantCentroMedico, setCantCentroMedico] = useState(0);
  
  const [CantColegio, setCantColegio] = useState(0);


  useEffect(() => {
    const fetchingDatoUE = async () => {
      try {
        const response = await getDatoGeneralUE();
        setCantColegio(response.length);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingDatoUE();
  }, []);


  useEffect(() => {
    const fetchingDatoUE = async () => {
      try {
        const response = await getCentroPolicialListaGeneral();
        setCantCentroPolicial(response.length);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingDatoUE();
  }, []);

  useEffect(() => {
    const fetchingDatoUE = async () => {
      try {
        const response = await getDatoCentroSalud();
        setCantCentroMedico(response.length);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingDatoUE();
  }, []);


  return (
    //  <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
    <div>
      {/* <Sidebar/> */}
      <main className=" bg-gray-200/80 p-5 rounded-md">
        <h2 className="text-4xl text-center font-semi-bold text-red-700">
          Bienvenido al Sistema Administrativo{" "}
        </h2>

        <section className="md:flex gap-3 mt-5">
          <section className=" md:w-1/3 mt-3 bg-yellow-500 hover:bg-yellow-600 border-2 border-gray-500 rounded-lg p-2">
            <p className="text-xl font-semi-bold">Unidades Educativas</p>

            <p className="font-new-font">Total de Unidades Educativas:{CantColegio}</p>
          </section>
          <section className=" md:w-1/3 mt-3 border-2 bg-gray-400 hover:bg-gray-500 border-gray-500 rounded-lg p-2">
            <p className="text-xl font-semi-bold">Centro Salud</p>
            <p className="font-new-font">Total Centro Salud:{cantCentroMedico}</p>
            {/* <LinesChart/> */}
            {/* <BarsChart/>
          <PiesChart/> */}
          </section>
          <section className=" md:w-1/3 mt-3 border-2 bg-green-600 hover:bg-green-700 border-gray-500 rounded-lg p-2">
            <p className="text-xl font-semi-bold">Centro Policiales</p>
          <p className="font-new-font">Total de Centro Policial:{cantCentroPolicial}</p>
            {/* <LinesChart/> */}
            {/* <BarsChart/>
          <PiesChart/> */}
          </section>
        </section>

        <section className="md:flex gap-3 mt-5">
          <section className="md:w-2/3 border-2 border-gray-500 rounded-lg p-2">
            <p className="text-xl font-semibold ">Denuncias en Colegios</p>


            {/* <LinesChart/> */}


            <BarsChart />
            {/* <PiesChart/> */}
          </section>
          <section className=" md:w-1/3 border-2 border-gray-500 rounded-lg p-2">
            <p className="text-xl font-semibold">Cantidad de Centros</p>
            <PiesChart/>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Inicio;
