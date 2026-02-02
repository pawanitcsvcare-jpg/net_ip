"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import Chart to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function LineColumnChart() {
  const options: ApexOptions = {
    series: [
      {
        name: "Total Subscribers",
        type: "column",
        data: [5439, 1242, 135],
      },
      {
        name: "Total Billable Days",
        type: "column",
        data: [8283, 4224, 414],
      },
      {
        name: "Total Charges",
        type: "line",
        data: [6803, 1380, 1290],
      },
    ],
    chart: {
      height: 380,
      type: "line",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "55%",
      },
    },
    stroke: {
      show: true,
      width: [1, 1, 4], // column, column, line
      colors: ["#ffffffff", "#ffffffff", "#2651e9"],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [2], // Only Total Charges
      formatter: function (val) {
        return "" + val;
      },
    },
    xaxis: {
      categories: ["TGO1", "TGO2", "ILD"],
    },
    yaxis: [
      {
        title: { text: "Subscribers / Charges" },
      },
      {
        opposite: true,
        title: { text: "Billable Days" },
      },
    ],
    colors: ["#086070", "#2fb7a4", "#2651e9"],
  };

  return (
    <Chart
      options={options}
      series={options.series}
      type="line"
      height={380}
    />
  );
}
