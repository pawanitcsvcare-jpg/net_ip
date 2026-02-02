"use client";

import { useEffect, useRef } from "react";

export default function WorldMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current && !mapInstance.current) {
      // Dynamically import jsVectorMap and world map
      Promise.all([
        import("jsvectormap"),
        import("jsvectormap/dist/maps/world-merc")
      ]).then(([jsVectorMapModule]) => {
        const jsVectorMap = (jsVectorMapModule as any).default;
        
        if (mapRef.current && typeof jsVectorMap !== "undefined") {
          mapInstance.current = new jsVectorMap({
            map: "world_merc",
            selector: mapRef.current,
            zoomOnScroll: false,
            zoomButtons: false,
            markerStyle: {
              initial: { fill: "#0c768a" },
              selected: { fill: "#0c768a" },
            },
            markers: [
              { name: "Greenland", coords: [72, -42] },
              { name: "Canada", coords: [56.1304, -106.3468] },
              { name: "Brazil", coords: [-14.235, -51.9253] },
              { name: "Egypt", coords: [26.8206, 30.8025] },
              { name: "Russia", coords: [61, 105] },
              { name: "China", coords: [35.8617, 104.1954] },
              { name: "United States", coords: [37.0902, -95.7129] },
              { name: "Norway", coords: [60.472024, 8.468946] },
              { name: "Ukraine", coords: [48.379433, 31.16558] },
            ],
            lines: [
              { from: "Canada", to: "Egypt" },
              { from: "Russia", to: "Egypt" },
              { from: "Greenland", to: "Egypt" },
              { from: "Brazil", to: "Egypt" },
              { from: "United States", to: "Egypt" },
              { from: "China", to: "Egypt" },
              { from: "Norway", to: "Egypt" },
              { from: "Ukraine", to: "Egypt" },
            ],
            regionStyle: {
              initial: {
                stroke: "#daeaee",
                strokeWidth: 0.25,
                fill: "#daeaee",
                fillOpacity: 1,
              },
            },
            lineStyle: { 
              animation: true, 
              strokeDasharray: "6 3 6" 
            },
          });
        }
      }).catch((error) => {
        console.error("Error loading jsVectorMap:", error);
      });
    }

    return () => {
      if (mapInstance.current) {
        // Cleanup if needed
        mapInstance.current = null;
      }
    };
  }, []);

  return <div id="world-map-markers" ref={mapRef} style={{ height: "400px", width: "100%" }}></div>;
}
