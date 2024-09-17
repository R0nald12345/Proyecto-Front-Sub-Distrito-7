import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { getDatoDenuncias } from "../../api/Denuncias";
import { getDatoGeneralUE } from "../../api/UnidadesEducativas";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

let misoptions = {
  responsive: true,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 30,
    },
    x: {
      ticks: { color: "rgba(0, 0, 0)" },
    },
  },
};

const BarsChart = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const colegiosPerPage = 10; // Cuántos colegios mostrar por página
  const [datosColegioDenuncia, setDatosColegioDenuncia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [responseUE, responseDenuncias] = await Promise.all([
          getDatoGeneralUE(),
          getDatoDenuncias(),
        ]);

        let colegiosMap = {};

        responseUE.forEach((dato) => {
          const idColegio = dato.id;
          const nombreColegio = dato.nombre;

          colegiosMap[idColegio] = {
            idColegio,
            nombreColegio,
            cantidadDenuncias: 0,
          };
        });

        responseDenuncias.forEach((denuncia) => {
          const idColegioDenuncia = denuncia.idUnidadeducativa.id;

          if (colegiosMap[idColegioDenuncia]) {
            colegiosMap[idColegioDenuncia].cantidadDenuncias += 1;
          }
        });

        const arrayColegios = Object.values(colegiosMap);
        setDatosColegioDenuncia(arrayColegios);
        setIsLoading(false); // Datos cargados
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * colegiosPerPage;
  const endIndex = startIndex + colegiosPerPage;

  // Aquí se usan los datos reales de los colegios y denuncias
  const currentColegios = datosColegioDenuncia.slice(startIndex, endIndex).map(
    (colegio) => colegio.nombreColegio
  );
  const currentDenuncias = datosColegioDenuncia.slice(startIndex, endIndex).map(
    (colegio) => colegio.cantidadDenuncias
  );

  const midata = {
    labels: currentColegios,
    datasets: [
      {
        label: "Denuncias",
        data: currentDenuncias,
        backgroundColor: "rgba(204, 205, 10, 5)",
      },
    ],
  };

  const totalPages = Math.ceil(datosColegioDenuncia.length / colegiosPerPage);

  if (isLoading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div>
      <Bar data={midata} options={misoptions} />

      <div className="pagination-buttons mt-3 flex-col">
        <div className="flex justify-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mr-2 p-2 bg-gray-300 rounded-lg"
          >
            Anterior
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="p-2 bg-gray-300 rounded-lg"
          >
            Siguiente
          </button>
        </div>
        <div className="flex justify-center">
          <p>
            Página {currentPage} de {totalPages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BarsChart;