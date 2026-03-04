import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-9xl font-bold text-slate-800 mb-4">404</h1>
      <p className="text-2xl text-slate-600 mb-8">Halaman tidak ditemukan</p>
      <Link 
        to="/" 
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition"
      >
        <Home className="mr-2 h-5 w-5" />
        Kembali ke Dashboard
      </Link>
    </div>
  </div>
);

export default NotFound;