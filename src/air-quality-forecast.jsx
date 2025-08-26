"use client"

import { useState } from "react"

export default function AirQualityForecast() {
  const [selectedPeriod, setSelectedPeriod] = useState("24 Hours")
  const [hoveredPoint, setHoveredPoint] = useState(null)

  const periods = ["24 Hours", "3 days", "By pollutant"]

  // Sample data points for the line chart
  const dataPoints = [
    { time: "6am", aqi: 25, category: "Good", temp: "68°F" },
    { time: "9am", aqi: 35, category: "Good", temp: "70°F" },
    { time: "12pm", aqi: 45, category: "Moderate", temp: "72°F" },
    { time: "3pm", aqi: 38, category: "Good", temp: "74°F" },
    { time: "6pm", aqi: 42, category: "Moderate", temp: "71°F" },
    { time: "9pm", aqi: 28, category: "Good", temp: "69°F" },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Air Quality Forecast</h1>
          <p className="text-slate-400">Predicted air quality levels with confidence intervals</p>
        </div>

        {/* Period Selection */}
        <div className="flex gap-6 mb-8">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                selectedPeriod === period
                  ? "text-blue-400 border-blue-400"
                  : "text-slate-400 border-transparent hover:text-white"
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Chart Area */}
        <div className="bg-slate-800 rounded-lg p-8 relative">
          <div className="h-80 relative">
            {/* Grid lines */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full border-t border-slate-700 opacity-30"
                  style={{ top: `${(i * 100) / 5}%` }}
                />
              ))}
            </div>

            {/* Chart line and points */}
            <svg className="absolute inset-0 w-full h-full">
              {/* Connect points with lines */}
              {dataPoints.map((point, index) => {
                if (index === dataPoints.length - 1) return null
                const nextPoint = dataPoints[index + 1]
                const x1 = (index / (dataPoints.length - 1)) * 100
                const x2 = ((index + 1) / (dataPoints.length - 1)) * 100
                const y1 = 100 - (point.aqi / 100) * 100
                const y2 = 100 - (nextPoint.aqi / 100) * 100

                return (
                  <line
                    key={index}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                )
              })}

              {/* Data points */}
              {dataPoints.map((point, index) => {
                const x = (index / (dataPoints.length - 1)) * 100
                const y = 100 - (point.aqi / 100) * 100

                return (
                  <circle
                    key={index}
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="4"
                    fill="#3b82f6"
                    className="cursor-pointer hover:r-6 transition-all"
                    onMouseEnter={() => setHoveredPoint({ ...point, index })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                )
              })}
            </svg>

            {/* Time labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-400 -mb-6">
              {dataPoints.map((point, index) => (
                <span key={index}>{point.time}</span>
              ))}
            </div>

            {/* Tooltip */}
            {hoveredPoint && (
              <div
                className="absolute bg-slate-700 rounded-lg p-3 text-sm shadow-lg z-10"
                style={{
                  left: `${(hoveredPoint.index / (dataPoints.length - 1)) * 100}%`,
                  top: `${100 - (hoveredPoint.aqi / 100) * 100}%`,
                  transform: "translate(-50%, -120%)",
                }}
              >
                <div className="text-blue-400 font-medium">{hoveredPoint.time}</div>
                <div>AQI: {hoveredPoint.aqi}</div>
                <div>Category: {hoveredPoint.category}</div>
                <div>Temperature: {hoveredPoint.temp}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
