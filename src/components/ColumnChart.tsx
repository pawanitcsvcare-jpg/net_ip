"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import Chart to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ColumnChart() {
  const options: ApexOptions = {
    series: [
      {
        name: "Activation",
        data: [19, 36, 24, 20, 34, 24, 11, 36, 24, 15, 21, 28],
      },
      { 
        name: "Deactivation", 
        data: [7, 12, 10, 12, 11, 10, 13, 10, 12, 8, 13, 13] 
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: { show: false },
      zoom: { enabled: true },
    },
    plotOptions: { 
      bar: { 
        horizontal: false, 
        columnWidth: "42%" 
      } 
    },
    dataLabels: { enabled: false },
    legend: { show: true },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    colors: ["#0c768a", "#d3edf3ff"],
    fill: { opacity: 1 },
  };

  return (
    <Chart
      options={options}
      series={options.series}
      type="bar"
      height={350}
    />
  );
}
