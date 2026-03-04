import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Newspaper } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-lg bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className=" p-2 rounded-xl shadow-lg">
              <img src="logo.png" className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Radar Tegal
              </h1>
              <p className="text-xs text-blue-200">Digital News Platform</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                isActive("/")
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50 scale-105"
                  : "hover:bg-white/10 hover:scale-105"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/privacy"
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                isActive("/privacy")
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50 scale-105"
                  : "hover:bg-white/10 hover:scale-105"
              }`}
            >
              Privacy
            </Link>
            <Link
              to="/subscription"
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                isActive("/subscription")
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50 scale-105"
                  : "hover:bg-white/10 hover:scale-105"
              }`}
            >
              <Newspaper className="h-4 w-4" />
              Langganan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition ${
                isActive("/")
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                  : "hover:bg-white/10"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/privacy"
              onClick={() => setMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition ${
                isActive("/privacy")
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                  : "hover:bg-white/10"
              }`}
            >
              Privacy
            </Link>
            <Link
              to="/subscription"
              onClick={() => setMenuOpen(false)}
              className={`flex w-full items-center px-4 py-3 rounded-xl font-medium transition gap-2 ${
                isActive("/subscription")
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                  : "hover:bg-white/10"
              }`}
            >
              <Newspaper className="h-4 w-4" />
              Langganan
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
