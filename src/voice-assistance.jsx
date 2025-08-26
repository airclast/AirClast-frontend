"use client"

import { useState, useEffect } from "react"

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false)
  const [pulseAnimation, setPulseAnimation] = useState(false)

  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setPulseAnimation((prev) => !prev)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isListening])

  const handleStartListening = () => {
    setIsListening(true)
    // Simulate listening for 3 seconds
    setTimeout(() => {
      setIsListening(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        {/* Circular Voice Interface */}
        <div className="relative mb-8 flex justify-center items-center">
          <div
            className={`w-64 h-64 rounded-full  border-2 border-cyan-400 relative transition-all duration-1000 ${
              isListening ? "shadow-lg shadow-cyan-400/50" : ""
            } ${pulseAnimation ? "scale-105" : "scale-100"}`}
          >
            {/* Inner glow effect */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20"></div>

            {/* Animated waveform */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="200"
                height="60"
                className={`transition-opacity duration-500 ${isListening ? "opacity-100" : "opacity-30"}`}
              >
                {/* Animated waveform bars */}
                {[...Array(12)].map((_, i) => (
                  <rect
                    key={i}
                    x={i * 16 + 10}
                    y="20"
                    width="3"
                    height="20"
                    fill="#06b6d4"
                    className={`${isListening ? "animate-pulse" : ""}`}
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      height: isListening ? `${Math.random() * 30 + 10}px` : "20px",
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Center microphone icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center transition-all duration-300 ${
                  isListening ? "scale-110 bg-cyan-300" : ""
                }`}
              >
                <svg width="20" height="20" fill="currentColor" className="text-slate-900">
                  <path d="M10 1a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
                  <path d="M6 10a4 4 0 0 0 8 0v-1h1a1 1 0 1 1 0 2v1a6 6 0 0 1-12 0v-1a1 1 0 1 1 0-2h1v1Z" />
                  <path d="M10 15a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Status Text */}
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-2">Ask about weather</h2>
          <p className="text-slate-400 text-lg">{isListening ? "Listening..." : "Listening"}</p>
        </div>

        {/* Action Button */}
        <button
          onClick={handleStartListening}
          disabled={isListening}
          className={`bg-slate-800 hover:bg-slate-700 disabled:bg-slate-800 disabled:opacity-50 
                     border border-slate-600 rounded-lg px-6 py-3 flex items-center gap-2 mx-auto
                     transition-all duration-200 ${isListening ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          <svg width="16" height="16" fill="currentColor" className="text-slate-400">
            <path d="M8 1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z" />
            <path d="M1 8a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V8Z" />
            <path d="M13 8a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V8Z" />
            <path d="M8 15a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Z" />
          </svg>
          <span className="text-slate-300">{isListening ? "Listening..." : "Ask about weather"}</span>
        </button>

        {/* Suggestions */}
        {!isListening && (
          <div className="mt-8 text-sm text-slate-500">
            <p>Try asking: "What's the weather like today?" or "Show me the air quality"</p>
          </div>
        )}
      </div>
    </div>
  )
}
