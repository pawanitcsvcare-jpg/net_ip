"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import Chart to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function SubscribeChart() {
  const options: ApexOptions = {
    labels: ["Active", "Deactivated", "Rejected"],
    series: [38, 24, 16],
    chart: { 
      height: 418, 
      type: "donut" 
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
        donut: { 
          size: "75%" 
        },
      },
    },
    colors: ["#0c768a", "#e96a6aff", "#a5d2ddff"],
    grid: { 
      padding: { 
        bottom: -190 
      } 
    },
    legend: { 
      show: false 
    },
    responsive: [
      {
        breakpoint: 320,
        options: { 
          chart: { 
            width: 180 
          }, 
          legend: { 
            position: "bottom" 
          } 
        },
      },
    ],
  };

  return (
    <Chart
      options={options}
      series={options.series}
      type="donut"
      height={418}
    />
  );
}
