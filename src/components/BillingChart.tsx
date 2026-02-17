"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import Chart to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function BillingChart() {
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
        borderRadius: 6
      }
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    series: [
      { name: "Total Subscribers", data: [46, 57, 59, 54, 62, 58, 64] },
      { name: "Total Billable Days", data: [40, 77, 50, 30, 70, 80, 93] },
      { name: "Total Charges", data: [37, 42, 38, 26, 47, 50, 54] },
    ],
    colors: ["#638bc9ff", "#51bbceff", "#0c768a"],
    xaxis: {
      categories: ["AttLiveTest", "AttLiveTestAbhi", "Rivertel", "powermobile", "Infiniti", "UNIDEMOT123", "TristanMobile"]
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
        formatter: function (val) {
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
