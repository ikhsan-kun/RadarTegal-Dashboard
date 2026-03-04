import { Shield, Database, TrendingUp, Lock, Eye, FileText, Mail, ChevronRight, Newspaper } from 'lucide-react';
import React from 'react';


const Privacy = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-4 rounded-2xl shadow-lg">
            <Shield className="h-10 w-10 text-slate-900" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Kebijakan Privasi</h1>
            <p className="text-blue-200 mt-1">Terakhir diperbarui: November 2025</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-blue-100">
        <p className="text-slate-700 leading-relaxed text-lg">
          Aplikasi <strong className="text-slate-900">Koran Digital Radar Tegal</strong> berkomitmen 
          melindungi data dan privasi pengguna. Dokumen ini menjelaskan informasi apa saja yang 
          dikumpulkan dan bagaimana digunakan.
        </p>
      </div>

      {/* Privacy Sections */}
      <div className="space-y-6">
        {[
          {
            icon: Database,
            title: 'Informasi yang Dikumpulkan',
            color: 'from-blue-500 to-cyan-500',
            content: 'Aplikasi dapat mengumpulkan data berikut:',
            items: [
              'Data perangkat (jenis perangkat, sistem operasi)',
              'Data penggunaan aplikasi',
              'Informasi yang diberikan pengguna secara sukarela'
            ]
          },
          {
            icon: TrendingUp,
            title: 'Penggunaan Informasi',
            color: 'from-purple-500 to-pink-500',
            content: 'Data digunakan untuk:',
            items: [
              'Meningkatkan kualitas layanan',
              'Mengoptimalkan performa aplikasi',
              'Analitik dan pemecahan masalah teknis'
            ]
          },
          {
            icon: Lock,
            title: 'Keamanan Data',
            color: 'from-orange-500 to-red-500',
            content: 'Data disimpan dengan langkah keamanan yang wajar dan tidak dibagikan kepada pihak ketiga tanpa izin, kecuali jika diwajibkan oleh hukum.',
            items: []
          },
          {
            icon: Eye,
            title: 'Izin Aplikasi',
            color: 'from-green-500 to-emerald-500',
            content: 'Jika aplikasi memerlukan izin tertentu (misalnya penyimpanan atau internet), izin tersebut hanya digunakan untuk menjalankan fitur aplikasi.',
            items: []
          },
          {
            icon: FileText,
            title: 'Perubahan Kebijakan',
            color: 'from-indigo-500 to-purple-500',
            content: 'Kebijakan dapat diperbarui sewaktu-waktu. Perubahan akan ditampilkan pada halaman ini.',
            items: []
          },
        ].map((section, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200">
            <div className={`bg-gradient-to-r ${section.color} p-6`}>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {idx + 1}. {section.title}
                </h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-700 leading-relaxed mb-4">{section.content}</p>
              {section.items.length > 0 && (
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className={`bg-gradient-to-br ${section.color} w-6 h-6 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                        <ChevronRight className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl shadow-2xl p-8 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-3 rounded-xl">
              <Mail className="h-6 w-6 text-slate-900" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">6. Kontak</h2>
          </div>
          <p className="text-blue-100 leading-relaxed">
            Untuk pertanyaan terkait kebijakan privasi, silakan hubungi: 
            <span className="block mt-2 text-white font-semibold text-lg">
              korandigitalradartegal@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Privacy;