"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import Chart to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function UsageChart() {
  const options: ApexOptions = {
    chart: {
      height: 375,
      type: "bar",
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        endingShape: "rounded"
      }
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    series: [
      { name: "SMS", data: [46, 57, 59, 54, 62, 58, 64, 60, 66] },
      { name: "MMS", data: [40, 77, 50, 30, 70, 80, 93, 67, 94] },
      { name: "VOICE", data: [37, 42, 38, 26, 47, 50, 54, 55, 43] },
      { name: "DATA", data: [45, 65, 56, 90, 71, 106, 90, 84, 50] }
    ],
    colors: ["#ec7866ff", "#638bc9ff", "#51bbceff", "#0c768a"],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    },
    grid: {
      borderColor: "#f1f1f1"
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (val: number) {
          return val + " ";
        }
      }
    }
  };

  return (
    <Chart
      options={options}
      series={options.series}
      type="bar"
      height={375}
    />
  );
}
