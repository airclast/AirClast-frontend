"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function AirQualityDashboard() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Moderate AQI Alert", location: "San Francisco, CA", time: "5 min ago", type: "moderate" },
    { id: 2, title: "Moderate AQI Alert", location: "San Francisco, CA", time: "15 min ago", type: "moderate" },
    { id: 3, title: "Moderate AQI Alert", location: "San Francisco, CA", time: "1 hour ago", type: "moderate" },
  ])

  const groundStations = [
    { name: "Downtown SF", status: "online", aqi: 78, pm25: 22.1, time: "2 min ago" },
    { name: "Downtown SF", status: "online", aqi: 78, pm25: 22.1, time: "2 min ago" },
    { name: "Downtown SF", status: "online", aqi: 78, pm25: 22.1, time: "2 min ago" },
    { name: "Downtown SF", status: "online", aqi: 78, pm25: 22.1, time: "2 min ago" },
  ]

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-xs font-bold">W</span>
          </div>
          <div>
            <div className="text-sm text-slate-400">Hi Billy</div>
            <div className="text-sm">Good Morning</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="San Francisco, CA"
              className="bg-slate-700 rounded-lg px-4 py-2 text-sm w-64"
            />
          </div>
          <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar Navigation */}
        <div className="w-16 bg-slate-800 flex flex-col items-center py-4 space-y-4">
          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 010-2h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>

          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" />
            </svg>
          </div>

          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>

          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 cursor-pointer">
            <Link to={`aibot`}><div className="text-xs font-bold">AI</div></Link>
          </div>

          <div className="flex-1"></div>

          <div className="w-8 h-8  bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372-.836 2.942.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* NASA TEMPO Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm">NASA TEMPO Satellite Data</span>
              <span className="text-xs text-slate-400">Real-time atmospheric composition measurements</span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="text-xs text-slate-400 mb-2">Current Readings</div>
                <div className="text-xs text-slate-400 mb-4">Nitrogen Dioxide (NO₂)</div>
                <div className="text-2xl font-bold mb-1">15.2</div>
                <div className="text-xs text-slate-400">× 10¹⁵ molecules/cm²</div>
                <div className="text-xs text-green-400 mt-2">High Quality</div>
              </div>

              <div className="bg-slate-800 rounded-lg p-4">
                <div className="text-xs text-slate-400 mb-6">Hourly Trends</div>
                <div className="text-xs text-slate-400 mb-4">Ozone (O₃)</div>
                <div className="text-2xl font-bold mb-1">285.4</div>
                <div className="text-xs text-slate-400">DU</div>
                <div className="text-xs text-green-400 mt-2">High Quality</div>
              </div>

              <div className="bg-slate-800 rounded-lg p-4">
                <div className="text-xs text-slate-400 mb-6"></div>
                <div className="text-xs text-slate-400 mb-4">Formaldehyde (HCHO)</div>
                <div className="text-2xl font-bold mb-1">8.7</div>
                <div className="text-xs text-slate-400">× 10¹⁵ molecules/cm²</div>
                <div className="text-xs text-yellow-400 mt-2">Medium Quality</div>
              </div>

              <div className="bg-slate-800 rounded-lg p-4">
                <div className="text-xs text-slate-400 mb-6"></div>
                <div className="text-xs text-slate-400 mb-4">Cloud Fraction</div>
                <div className="text-2xl font-bold mb-1">25%</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-4">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ground Stations */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Ground Stations</h3>
            <p className="text-sm text-slate-400 mb-4">Nearby monitoring stations and measurements</p>

            <div className="flex gap-8 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-xs text-slate-400">Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1</div>
                <div className="text-xs text-slate-400">Maintenance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2.4</div>
                <div className="text-xs text-slate-400">Avg Distance (mi)</div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="grid grid-cols-6 gap-4 p-4 text-xs text-slate-400 border-b border-slate-700">
                <div>STATION</div>
                <div>STATUS</div>
                <div>AQI</div>
                <div>PM2.5</div>
                <div>LAST</div>
                <div></div>
              </div>

              {groundStations.map((station, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 gap-4 p-4 text-sm border-b border-slate-700 last:border-b-0"
                >
                  <div>{station.name}</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs">{station.status}</span>
                  </div>
                  <div>{station.aqi}</div>
                  <div>{station.pm25} μg/m³</div>
                  <div className="text-slate-400">{station.time}</div>
                  <div></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-slate-800 p-4">
          <div className="mb-6">
            <h3 className="font-semibold mb-4">NASA TEMPO Satellite Data</h3>

            {/* Notifications */}
            <div className="space-y-3 mb-6">
              {notifications.map((notification) => (
                <div key={notification.id} className="bg-slate-700 rounded-lg p-3 relative">
                  <button
                    onClick={() => dismissNotification(notification.id)}
                    className="absolute top-2 right-2 text-slate-400 hover:text-white"
                  >
                    ×
                  </button>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium">{notification.title}</span>
                  </div>
                  <div className="text-xs text-slate-400 mb-1">{notification.location}</div>
                  <div className="text-xs text-slate-500">{notification.time}</div>
                </div>
              ))}
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-sm font-medium transition-colors">
              View All Notifications
            </button>
          </div>

          {/* Weather Conditions */}
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-sm font-medium">Weather Conditions</span>
            </div>
            <div className="text-xs text-slate-400 mb-4">Current meteorological data affecting air quality</div>

            <div className="text-center mb-4">
              <div className="text-2xl font-bold">72°F</div>
              <div className="text-sm text-slate-400">Partly Cloudy</div>
              <div className="text-xs text-slate-500">Feels like 75°F</div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <div className="text-slate-400">Humidity</div>
                <div className="font-medium">65%</div>
              </div>
              <div>
                <div className="text-slate-400">UV Index</div>
                <div className="font-medium">6</div>
              </div>
              <div>
                <div className="text-slate-400">Wind</div>
                <div className="font-medium">8.3 mph NW</div>
              </div>
              <div>
                <div className="text-slate-400">Visibility</div>
                <div className="font-medium">10 mi</div>
              </div>
              <div>
                <div className="text-slate-400">Pressure</div>
                <div className="font-medium">30.15 in</div>
              </div>
              <div>
                <div className="text-slate-400">Dew Point</div>
                <div className="font-medium">58°F</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
