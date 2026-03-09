import React from 'react';
import { Newspaper, Mail, MapPin, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }} className="relative bg-slate-950 text-white overflow-hidden">
      
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 border-b border-slate-800">

          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <div className="bg-blue-600 p-2.5 rounded-lg shadow-lg shadow-blue-900/40">
                <Newspaper className="h-6 w-6 text-white" />
              </div>
              <div>
                <p style={{ fontFamily: "'Georgia', serif", letterSpacing: '0.04em' }} className="font-bold text-xl text-white">Radar Tegal</p>
                <p className="text-xs text-blue-400 uppercase tracking-widest">Digital News Platform</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Portal berita digital terpercaya yang menyajikan informasi aktual dan terkini seputar Tegal Raya dan sekitarnya.
            </p>
            <div className="border border-slate-700 rounded-lg p-3 bg-slate-900/60">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Diterbitkan oleh</p>
              <p className="text-sm font-semibold text-blue-300">PT. Wahana Semesta Tegal</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-blue-400 mb-5 font-semibold">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Gedung Graha Pena Radar Tegal,<br />
                  Jalan Perintis Kemerdekaan No. 32,<br />
                  Tegal, Jawa Tengah, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">(0283) 340900</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">contact@korandigitalradartegal.id</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">www.korandigitalradartegal.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-xs">
              &copy; 2025 <span className="text-slate-400 font-medium">Koran Digital Radar Tegal</span>. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs mt-0.5">
              Bagian dari <span className="text-slate-500">PT. Wahana Semesta Tegal</span>
            </p>
          </div>
          <div className="flex items-center space-x-5">
            {['Kebijakan Privasi', 'Syarat & Ketentuan', 'Redaksi'].map(item => (
              <a key={item} href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;