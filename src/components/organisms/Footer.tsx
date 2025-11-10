import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-black">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-batik opacity-5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      {/* Content */}
      <div className="relative container mx-auto px-5 sm:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-gold-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-lg sm:text-xl font-bold">B</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold">BudayaConnect</span>
                <p className="text-sm text-black-400">Warisan Nusantara</p>
              </div>
            </div>

            <p className="text-black-300 mb-6 sm:mb-8 max-w-md leading-relaxed text-sm sm:text-base">
              Platform budaya Indonesia yang menghubungkan warisan budaya dengan
              generasi masa kini. Mari bersama melestarikan kekayaan nusantara
              untuk masa depan.
            </p>

            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-black text-base sm:text-lg">
                Newsletter Budaya
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-3 bg-secondary-700/50 border border-secondary-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:bg-secondary-700 transition-colors text-sm"
                />
                <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary-500 to-gold-500 text-black rounded-lg font-semibold hover:from-primary-600 hover:to-gold-600 transition-all duration-300 shadow-lg hover:shadow-gold text-sm sm:text-base">
                  Berlangganan
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-black-400 text-sm w-full sm:w-auto">Ikuti kami:</span>
              <div className="flex space-x-3">
                {[
                  {
                    name: "Facebook",
                    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                  },
                  {
                    name: "Twitter",
                    icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                  },
                  {
                    name: "Instagram",
                    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary-700/50 hover:bg-gold-500/20 border border-secondary-600 hover:border-gold-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black-400 group-hover:text-gold-400 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-5 sm:mb-6">Navigasi</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { to: ROUTES.HOME, label: "Beranda", icon: "🏠" },
                { to: ROUTES.CULTURE_DIRECTORY, label: "Direktori Budaya", icon: "🎭" },
                { to: ROUTES.MAP, label: "Peta Budaya", icon: "🗺️" },
                { to: ROUTES.EVENTS, label: "Acara", icon: "🎪" },
                { to: ROUTES.COMMUNITY, label: "Komunitas", icon: "👥" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 text-black-300 hover:text-gold-400 transition-colors group"
                  >
                    <span className="text-base group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-sm sm:text-base">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-5 sm:mb-6">Bantuan</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Tentang Kami", icon: "ℹ️" },
                { label: "Kontak", icon: "📧" },
                { label: "Kebijakan Privasi", icon: "🔒" },
                { label: "Syarat & Ketentuan", icon: "📋" },
                { label: "FAQ", icon: "❓" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-blackgray-300 hover:text-gold-400 transition-colors group"
                  >
                    <span className="text-base group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-sm sm:text-base">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-700 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-center sm:text-left">
            <div>
              <p className="text-black-400 text-sm sm:text-base">
                &copy; 2024 BudayaConnect. Hak Cipta Dilindungi.
              </p>
              <p className="text-xs sm:text-sm text-black-500 mt-1">
                Dibuat dengan ❤️ untuk melestarikan budaya Indonesia
              </p>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm text-black-400">
              <span>Devitra</span>
              <span>•</span>
              <span>🌏 UNESCO Heritage</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
