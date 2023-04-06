import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
function BarChart({ chartData }) {
  return (
    <>
      <Bar
        data={chartData}
        width={300}
        height={400}
        options={{
          plugins: {
            legend: {
              labels: {
                generateLabels: (chart) => {
                  console.log(chartData);
                  return chartData.labels.map((val, index) => ({
                    text: val,
                    strokeStyle: chartData.datasets[0].borderColor[index],
                    fillStyle: chartData.datasets[0].backgroundColor[index],
                    padding: 0,
                  }));
                },
              },
            },
          },
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },

            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </>
  );
}

export default BarChart;
