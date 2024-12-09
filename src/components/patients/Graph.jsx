import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "../index";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function BloodPressureGraph() {
  const { pData, pName } = useSelector((state) => state.patientData);

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 30,
        },
        grid: {
          color: "#e2e8f0",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        borderColor: "#e2e8f0",
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y}`;
          },
        },
      },
    },
  };

  const labels =
    pData &&
    pData.length > 0 &&
    pData
      .filter((data) => pName === data.name) // Filter relevant data
      .flatMap((data) =>
        data.diagnosis_history.map((entry) => `${entry.month} ${entry.year}`)
      );

  const systolicData =
    pData &&
    pData.length > 0 &&
    pData
      .filter((data) => pName === data.name)
      .flatMap((data) =>
        data.diagnosis_history.map(
          (entry) => entry.blood_pressure.systolic.value
        )
      );

  const diastolicData =
    pData &&
    pData.length > 0 &&
    pData
      .filter((data) => pName === data.name)
      .flatMap((data) =>
        data.diagnosis_history.map(
          (entry) => entry.blood_pressure.diastolic.value
        )
      );

  const data = {
    labels, // Flattened array of months and years
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#ec4899",
        backgroundColor: "#ec4899",
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#8b5cf6",
        backgroundColor: "#8b5cf6",
        tension: 0.4,
      },
    ],
  };

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Blood Pressure</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <Line options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  );
}
