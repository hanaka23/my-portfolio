"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillRadarCharts = () => {
  const frontendData = {
    labels: ["HTML/CSS", "Tailwind CSS", "JavaScript", "React", "TypeScript", "Next.js"],
    datasets: [
      {
        label: "フロントエンド",
        data: [4, 3, 4, 3, 3, 3],
        backgroundColor: "rgba(34, 202, 236, 0.2)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
      },
    ],
  };

  const mobileData = {
    labels: ["UI設計", "PS/Figma", "DB設計", "Flutter", "Riverpod", "Swift"],
    datasets: [
      {
        label: "モバイルアプリ",
        data: [2, 3, 2, 2, 2, 2],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const backendData = {
    labels: ["C言語", "Python", "Linuxコマンド", "Git", "npm", "Firebase"],
    datasets: [
      {
        label: "バックエンド / サーバー",
        data: [2, 2, 3, 4, 3, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // 親の正方形いっぱいに描画
    layout: { padding: 30 },    // ラベル長に依存せずサイズを確保
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: { stepSize: 1 },
        pointLabels: {
          font: { size: 10 },
          padding: 0, // ラベル長の差による半径縮小を防ぐ
          callback: (label: string) => label.length > 12 ? label.slice(0, 12) + "…" : label,
        },
      },
    },
    plugins: {
      legend: { labels: { font: { size: 14 } } },
    },
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900 text-white">
      {/* 親幅を固定しつつレスポンシブ対応 */}
      <div className="w-full sm:w-[32%] max-w-[400px] aspect-square">
        <Radar data={frontendData} options={options} />
      </div>
      <div className="w-full sm:w-[32%] max-w-[400px] aspect-square">
        <Radar data={mobileData} options={options} />
      </div>
      <div className="w-full sm:w-[32%] max-w-[400px] aspect-square">
        <Radar data={backendData} options={options} />
      </div>
    </div>
  );
};

export default SkillRadarCharts;
