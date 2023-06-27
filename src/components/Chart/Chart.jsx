import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart = () => {
  const data = {
    labels: [
      "May 12",
      "",
      "May 13",
      "",
      "May 14",
      "",
      "May 15",
      "",
      "May 16",
      "",
      "May 17",
      "",
    ],
    datasets: [
      {
        data: [8, 9, 7.8, 7.9, 6, 7, 8, 6, 7, 5, 6],
        backgroundColor: "transparent",
        borderColor: "#E9A0A0",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: { display: false },
      },
    },
    y: {
      min: 2,
      max: 10,
      ticks: {
        stepSize: 2,
        callback: (value) => value + "K",
      },
      grid: {
        borderDash: [10],
      },
    },
  };
  return (
    <div style={{ width: "1000px", height: "500px", marginLeft: "20px" }}>
      {/* <Line data={data} options={options}></Line> */}
    </div>
  );
};

export default Chart;
