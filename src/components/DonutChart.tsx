"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import Chart to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DonutChart() {
  const options: ApexOptions = {
    series: [40405, 15552, 19824],
    labels: ["Subscriber", "Companies", "Vendor/MVNO"],
    chart: { 
      type: "donut", 
      height: 350 
    },
    plotOptions: {
      pie: {
        size: 100,
        offsetX: 0,
        offsetY: 0,
        donut: {
          size: "77%",
          labels: {
            show: true,
            name: { 
              show: true, 
              fontSize: "18px", 
              offsetY: -5 
            },
            value: {
              show: true,
              fontSize: "24px",
              color: "#343a40",
              fontWeight: 500,
              offsetY: 10,
              formatter: function (val: string) {
                return "" + val;
              },
            },
            total: {
              show: true,
              fontSize: "16px",
              label: "Total",
              color: "#9599ad",
              fontWeight: 400,
              formatter: function (w: any) {
                return (
                  "" +
                  w.globals.seriesTotals.reduce(function (a: number, b: number) {
                    return a + b;
                  }, 0)
                );
              },
            },
          },
        },
      },
    },
    dataLabels: { enabled: false },
    legend: { show: true, position: "bottom" },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return "" + val;
        },
      },
    },
    stroke: { lineCap: "round", width: 2 },
    colors: ["#0c768a", "#83b9c4", "#aed5ddff"],
  };

  return (
    <Chart
      options={options}
      series={options.series}
      type="donut"
      height={350}
    />
  );
}
