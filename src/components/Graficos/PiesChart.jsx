import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getDatoGeneralUE } from '../../api/UnidadesEducativas';
import { getCentroPolicialListaGeneral } from '../../api/CentroPolicial';
import { getDatoCentroSalud } from '../../api/CentroSalud';
import { getDatoCentroTuristicos } from '../../api/CentroTuristicos';
import { getDatoCentroDeportivo } from '../../api/CentroDeportivo';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    maintainAspectRatio: false,
};



const PiesChart = () => {

    const [cantColegio, setCantColegio] = useState(0);
    const [cantCentroPolicial,setCantCentroPolicial] = useState(0);
    const [cantCentroMedico, setCantCentroMedico] = useState(0);

    const [cantCentroDeportivo, setCantCentroDeportivo] = useState(0);
    const [cantCentroTuristicos, setCantCentroTuristicos] = useState(0);
  
  
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





      useEffect(() => {
        const fetchingDatoDeportivos = async () => {
          try {
            const response = await getDatoCentroDeportivo();
            setCantCentroDeportivo(response.length);
          } catch (error) {
            console.log(error);
          }
        }
        fetchingDatoDeportivos();
      }, []);


      useEffect(() => {
        const fetchingDatoTuristicos = async () => {
          try {
            const response = await getDatoCentroTuristicos();
            setCantCentroTuristicos(response.length);
          } catch (error) {
            console.log(error);
          }
        }
        fetchingDatoTuristicos();
      }, []);

      const data = {
        labels: [ 'Salud','Unidad Educativa', 'Policial', 'Deportivo', 'Turisticos'],
        datasets: [
            {
                label: 'Cantidad',
                data: [ cantCentroMedico ,cantColegio, cantCentroPolicial, cantCentroDeportivo, cantCentroTuristicos],
                backgroundColor: [
                    'rgba(255, 99, 132, 2)',
                    'rgba(255, 206, 86, 2)',
                    'rgba(54, 162, 235, 2)',
                    'rgba(75, 192, 192, 2)',
                    'rgba(153, 102, 255, 2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="relative w-full h-64">
            <Pie data={data} options={options} />
        </div>
    );
};

export default PiesChart;