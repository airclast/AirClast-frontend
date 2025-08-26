

import { X, MapPin, Heart, BarChart3, LayoutDashboard, FileText } from "lucide-react"
import { Link } from "react-router-dom"

export function Sidebar({ isOpen, onClose }) {
    return (
        <>
            {/* Backdrop */}
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />}

            {/* Sidebar */}
            <div
                className={`fixed left-0 top-0 h-full  w-64 bg-slate-800 z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-white text-xl font-semibold">Weather wise</h2>
                        <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-200 transition-colors">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="space-y-2">
                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                        >
                            <MapPin className="h-5 w-5" />
                            <span>Map</span>
                        </a>

                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                        >
                            <Heart className="h-5 w-5" />
                            <span>Health</span>
                        </a>

                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                        >
                            <BarChart3 className="h-5 w-5" />
                            <span>Forecast</span>
                        </a>

                        <Link to={`dashboard`}
                            className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                        >
                            <LayoutDashboard className="h-5 w-5" />
                            <span>Dashboard</span>
                        </Link>

                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                        >
                            <FileText className="h-5 w-5" />
                            <span>Policy Dashboard</span>
                        </a>
                    </nav>

                    {/* Sign up button */}
                    <div className="mt-8">
                        
                        <Link to={`/signup`} className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-md hover:from-blue-700 hover:to-blue-600 transition-colors">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
