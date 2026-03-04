import React from 'react';
import { Newspaper } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-2 rounded-xl">
            <Newspaper className="h-6 w-6 text-slate-900" />
          </div>
          <div>
            <p className="font-bold text-lg">Radar Tegal</p>
            <p className="text-sm text-blue-200">Digital News Platform</p>
          </div>
        </div>
        <p className="text-blue-200 text-sm">
          &copy; 2025 Koran Digital Radar Tegal. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;