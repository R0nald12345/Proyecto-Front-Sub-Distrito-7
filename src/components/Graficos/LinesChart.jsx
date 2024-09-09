import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LinesChart = () => {
  const beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const midata = {
    labels: meses,
    datasets: [
      {
        label: 'Beneficios',
        data: beneficios,
        tension: 0.5,
        fill: true,
        borderColor: 'rgb(0, 100, 0)',
        backgroundColor: 'rgba(0, 100, 0, 0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgba(0, 100, 0)',
        pointBackgroundColor: 'rgba(0, 100, 0)',
      },
      {
        label: 'Otra línea',
        data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
      },
    ],
  };

  const misoptions = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: 'rgb(255, 99, 132)' },
      },
    },
  };

  return (
    <div className="relative w-full h-72 flex justify-center">
        <Line data={midata} options={misoptions} />
    </div>
  );
};

export default LinesChart;