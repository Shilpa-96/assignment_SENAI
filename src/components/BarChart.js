import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: [5, 5, 5, 5, 5],
        backgroundColor: [
          "#4070f4",
          "#4070f4",
          "rgba(0, 0, 0, 0.1)",
          "rgba(0, 0, 0, 0.1)",
          "rgba(0, 0, 0, 0.1)",
        ],
        borderColor: "aliceblue",
        borderWidth: 4,
        circumference: 180,
        rotation: 270,
        needlevalue: 9,
        cutout: "80%",
        borderRadius: 10,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  // config
  // const config = {
  //   type: "bar",
  //   data,
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  // };

  const gaugeNeedle = {
    id: "gaugeNeedle",
    afterDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;
      ctx.save();
      const needleValue = data.datasets[0].needlevalue;
      const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);
      const angle = Math.PI + (1 / dataTotal) * needleValue * Math.PI;
      const cx = width / 2;
      const cy = chart._metasets[0].data[0].y;

      //needle
      ctx.translate(cx - 7, cy - 25);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -2);
      ctx.lineTo(height - 105, 0);
      ctx.lineTo(0, 3);
      ctx.fillStyle = "#4070f4";
      ctx.fill();
      ctx.restore();

      //needledot
      ctx.beginPath();
      ctx.arc(cx - 2, cy - 15, 5, 0, 10);
      ctx.fillStyle = "#4070f4";
      ctx.fill();
      ctx.restore();

      ctx.font = "20px Helvetica";
      ctx.fillStyle = "black";
      ctx.fillText("8 Km/h", cx, cy + 10);
      ctx.textAlign = "center";
      ctx.restore();

      //
    },
  };

  return (
    <div style={{ height: "130px", width: "60%", alignItems: "center" }}>
      <Doughnut data={data} options={options} plugins={[gaugeNeedle]} />
    </div>
  );
};

export default BarChart;
