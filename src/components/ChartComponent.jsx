import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const BloodPressureChart = ({ diagnosisHistory, selectedTimeRange }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (diagnosisHistory.length > 0) {
      const filteredData = diagnosisHistory.slice(0, selectedTimeRange).reverse(); 

      const labels = filteredData.map((entry) => `${entry.month}, ${entry.year}`);
      const systolicData = filteredData.map((entry) => entry.blood_pressure.systolic.value);
      const diastolicData = filteredData.map((entry) => entry.blood_pressure.diastolic.value);

      setChartData({
        labels,
        datasets: [
          {
            label: "Systolic",
            data: systolicData,
            borderColor: "#E35B8D",
            backgroundColor: "rgba(227, 91, 141, 0.2)",
            pointBorderColor: "#E35B8D",
            pointBackgroundColor: "#E35B8D",
            tension: 0.4,
          },
          {
            label: "Diastolic",
            data: diastolicData,
            borderColor: "#7B61FF",
            backgroundColor: "rgba(123, 97, 255, 0.2)",
            pointBorderColor: "#7B61FF",
            pointBackgroundColor: "#7B61FF",
            tension: 0.4,
          },
        ],
      });
    }
  }, [diagnosisHistory, selectedTimeRange]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: false },
    },
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default BloodPressureChart;
