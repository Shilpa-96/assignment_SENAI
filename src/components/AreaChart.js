import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { BsSun } from "react-icons/bs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const AreaChart = () => {
  const data = {
    labels: ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "47%"],
    datasets: [
      {
        fill: true,
        labels: "ygygy",
        data: [3, 3.5, 4.5, 5.5, 4, 2.8, 5.2, 3.3],
        backgroundColor: "#4070f4",
        borderColor: "#4070f4",
        pointRadius: 0,
      },
    ],
  };

  const topLabels = {
    id: "topLabels",
    afterDatasetDraw(chart, args, pluinOptions) {
      const {
        ctx,
        scales: { x, y },
      } = chart;
      ctx.font = "bold 15px sans-serif";
      ctx.fillStyle = "rgba(0, 0, 0, .8)";
      ctx.textAlign = "center";
      const xaxis = ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "47%"];

      ctx.fillText(
        "27\u00B0",
        x.getPixelForValue("23%"),
        y.getPixelForValue(10) - 5
      );
      ctx.fillText(
        "Now",
        x.getPixelForValue("23%"),
        y.getPixelForValue(10) - 30
      );

      ctx.fillText(
        "28\u00B0",
        x.getPixelForValue("29%"),
        y.getPixelForValue(10) - 5
      );
      ctx.fillText(
        "11:00",
        x.getPixelForValue("29%"),
        y.getPixelForValue(10) - 30
      );

      ctx.fillText(
        "28\u00B0",
        x.getPixelForValue("58%"),
        y.getPixelForValue(10) - 5
      );
      ctx.fillText(
        "12:00",
        x.getPixelForValue("58%"),
        y.getPixelForValue(10) - 30
      );

      ctx.fillText(
        "29\u00B0",
        x.getPixelForValue("75%"),
        y.getPixelForValue(10) - 5
      );
      ctx.fillText(
        "13:00",
        x.getPixelForValue("75%"),
        y.getPixelForValue(10) - 30
      );

      ctx.fillText(
        "30\u00B0",
        x.getPixelForValue("33%"),
        y.getPixelForValue(10) - 5
      );
      ctx.fillText(
        "14:00",
        x.getPixelForValue("33%"),
        y.getPixelForValue(10) - 30
      );

      ctx.fillText(
        "29\u00B0",
        x.getPixelForValue("20%"),
        y.getPixelForValue(10) - 5
      );
      ctx.fillText(
        "15:00",
        x.getPixelForValue("20%"),
        y.getPixelForValue(10) - 30
      );

      ctx.fillText(
        "29\u00B0",
        x.getPixelForValue("73%"),
        y.getPixelForValue(10) - 5
      );
      ctx.fillText(
        "16:00",
        x.getPixelForValue("73%"),
        y.getPixelForValue(10) - 30
      );

      ctx.fillText(
        "28\u00B0",
        x.getPixelForValue("47%"),
        y.getPixelForValue(10) - 5
      );
      ctx.fillText(
        "17:00",
        x.getPixelForValue("47%") - 5,
        y.getPixelForValue(10) - 30
      );
    },
  };

  const drawIcons = {
    id: "drawIcons",
    afterDatasetDraw(chart, args, pluinOptions) {
      const {
        ctx,
        scales: { x, y },
      } = chart;
      ctx.font = "bold 25px sans-serif";
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.textAlign = "center";
      ctx.fillText(
        "\u263C",
        x.getPixelForValue("23%") + 32,
        y.getPixelForValue(11)
      );
      ctx.fillText(
        "\u263C",
        x.getPixelForValue("29%") + 32,
        y.getPixelForValue(11)
      );
      ctx.fillText(
        "\u2601",
        x.getPixelForValue("58%") + 32,
        y.getPixelForValue(11)
      );
      ctx.fillText(
        "\u2601",
        x.getPixelForValue("75%") + 32,
        y.getPixelForValue(11)
      );
      ctx.fillText(
        "\u263C",
        x.getPixelForValue("33%") + 32,
        y.getPixelForValue(11)
      );
      ctx.fillText(
        "\u2601",
        x.getPixelForValue("20%") + 32,
        y.getPixelForValue(11)
      );
      ctx.fillText(
        "\u2601",
        x.getPixelForValue("73%") + 32,
        y.getPixelForValue(11)
      );
      ctx.fillText(
        "\u263C",
        x.getPixelForValue("47%") - 30,
        y.getPixelForValue(11)
      );
    },
  };
  const drawLines = {
    id: "drawLines",
    beforeDatasetDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
        scales: { x, y },
      } = chart;
      ctx.save();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
      ctx.beginPath();
      // ctx.moveTo(top + 20, x.getPixelForValue(10));
      ctx.moveTo(x.getPixelForValue("23%"), y.getPixelForValue(0) - 10);
      ctx.lineTo(x.getPixelForValue("23%"), y.getPixelForValue(10));

      ctx.moveTo(x.getPixelForValue("29%"), y.getPixelForValue(0) - 10);
      ctx.lineTo(x.getPixelForValue("29%"), y.getPixelForValue(10));

      ctx.moveTo(x.getPixelForValue("58%"), y.getPixelForValue(0) - 10);
      ctx.lineTo(x.getPixelForValue("58%"), y.getPixelForValue(10));

      ctx.moveTo(x.getPixelForValue("75%"), y.getPixelForValue(0) - 10);
      ctx.lineTo(x.getPixelForValue("75%"), y.getPixelForValue(10));

      ctx.moveTo(x.getPixelForValue("33%"), y.getPixelForValue(0) - 10);
      ctx.lineTo(x.getPixelForValue("33%"), y.getPixelForValue(10));

      ctx.moveTo(x.getPixelForValue("20%"), y.getPixelForValue(0) - 10);
      ctx.lineTo(x.getPixelForValue("20%"), y.getPixelForValue(10));

      ctx.moveTo(x.getPixelForValue("73%"), y.getPixelForValue(0) - 10);
      ctx.lineTo(x.getPixelForValue("73%"), y.getPixelForValue(10));

      ctx.moveTo(x.getPixelForValue("47%"), y.getPixelForValue(0) - 10);
      ctx.lineTo(x.getPixelForValue("47%"), y.getPixelForValue(10));

      // ctx.lineTo(x.getPixelForValue("23%"), y.getPixelForValue(5));
      ctx.stroke();
    },
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "gray",
          display: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        min: 2,
        max: 15,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <div
      className="areachart"
      style={{
        backgroundColor: "white",
        height: "400px",
        borderRadius: "40px",
        width: "90%",
        margin: "auto",
      }}
    >
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 30px",
        }}
      >
        <p style={{ color: "rgba(0, 0, 0, 0.8)" }}>Upcoming hours</p>
        <div style={{ display: "flex", margin: "14px" }}>
          <div style={{ margin: "0 30px" }}>
            <select
              name="pets"
              id="pet-select"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                padding: "4px",
                color: "rgba(0, 0, 0, 0.5)",
                border: "none",
              }}
            >
              <option value="Rain">Rain precipitation</option>
              <option value="dog">Dog</option>
            </select>
          </div>
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              height: "25px",
              textAlign: "center",
              borderRadius: "15px",
              padding: "2px 10px",
              fontSize: "12px",
            }}
          >
            Next Days <span style={{ fontWeight: "900" }}>&gt;</span>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "30px 10px 15px 10px",
          height: "300px",
          padding: "30px 25px 0px 10px",
        }}
      >
        <Line
          data={data}
          options={options}
          width={"1000px"}
          height={"300px"}
          plugins={[topLabels, drawLines, drawIcons]}
        ></Line>
      </div>
    </div>
  );
};

export default AreaChart;
