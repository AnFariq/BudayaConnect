import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100 sticky top-0 z-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo dengan sentuhan budaya */}
          <Link to={ROUTES.HOME} className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-gold-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-gold transition-all duration-300 transform group-hover:rotate-3">
                <span className="text-black font-bold text-xl">B</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-gradient-primary">
                BudayaConnect
              </span>
              <p className="text-xs text-gray-500 font-medium">
                Warisan Nusantara
              </p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { to: ROUTES.HOME, label: "Beranda", className: "font-medium", icon: "🏠" },
              {
                to: ROUTES.CULTURE_DIRECTORY,
                label: "Direktori Budaya",
                className: "font-medium",
                icon: "🎭",
              },
              { to: ROUTES.MAP, label: "Peta Budaya", className: "font-medium", icon: "🗺️" },
              { to: ROUTES.EVENTS, label: "Acara", className: "font-medium", icon: "🎪" },
              { to: ROUTES.COMMUNITY, label: "Komunitas", className: "font-medium", icon: "👥" },
              { to: ROUTES.LOGIN, label: "Login", className: "px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-300 border border-primary-200 hover:border-primary-300" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-4 py-2 text-gray-700 hover:text-primary-600 transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className={item.className}>{item.label}</span>
                </span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl hover:bg-primary-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-center space-y-1">
              <div
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></div>
              <div
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              ></div>
              <div
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}
        >
          <nav className="py-4 space-y-2 overflow-y-auto max-h-96">
            {[
              { to: ROUTES.HOME, label: "Beranda", className: "font-medium", icon: "🏠" },
              {
                to: ROUTES.CULTURE_DIRECTORY,
                label: "Direktori Budaya",
                className: "font-medium",
                icon: "🎭",
              },
              { to: ROUTES.MAP, label: "Peta Budaya", className: "font-medium", icon: "🗺️" },
              { to: ROUTES.EVENTS, label: "Acara", className: "font-medium", icon: "🎪" },
              { to: ROUTES.COMMUNITY, label: "Komunitas", className: "font-medium", icon: "👥" },
              { to: ROUTES.LOGIN, label: "Login", className: "px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-300 border border-primary-200 hover:border-primary-300" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                <span className={item.className}>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
