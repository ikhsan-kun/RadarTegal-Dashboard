import {
  Newspaper,
  Users,
  Clock,
  Award,
  Download,
  ChevronRight,
  TrendingUp,
  Shield,
  Smartphone,
  BookOpen,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Dashboard = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className=" p-3 rounded-2xl">
              <img src="logo.png" className="h-8 w-8" />
            </div>
            <span className="px-4 py-1.5 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium">
              Platform Berita Digital
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Koran Digital
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Radar Tegal
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Berita terkini dan terpercaya dari Tegal dan sekitarnya. Akses
            informasi kapan saja, di mana saja.
          </p>
        </div>
      </div>

      {/* Stats Section
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {[
          { icon: Users, label: 'Pembaca Aktif', value: '50K+', color: 'from-blue-500 to-cyan-500' },
          { icon: Newspaper, label: 'Berita Harian', value: '100+', color: 'from-purple-500 to-pink-500' },
          { icon: Clock, label: 'Update Real-time', value: '24/7', color: 'from-orange-500 to-red-500' },
          { icon: Award, label: 'Rating App', value: '4.8★', color: 'from-green-500 to-emerald-500' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className={`bg-gradient-to-br ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <p className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</p>
            <p className="text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div> */}

      {/* Download Card */}
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 md:p-10 mb-12 border border-blue-100 hover:shadow-2xl transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-gradient-to-br from-white-500 to-white-500 rounded-3xl p-6 shadow-2xl">
            <img src="logo.png" className="h-12 w-12 " />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                NEW
              </span>
              <span className="text-slate-600 text-sm">Versi 1.0.1</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
              Download Aplikasi Android
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Akses koran digital langsung melalui aplikasi Android resmi.
              Dapatkan berita terbaru, notifikasi real-time, dan pengalaman
              membaca yang lebih baik.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=id.radartegal.korandigital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center font-semibold">
                  Download APK
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
        Fitur Unggulan
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: TrendingUp,
            title: "Berita Trending",
            desc: "Update berita terpopuler dan terkini setiap hari",
            color: "from-blue-500 to-cyan-500",
            bgColor: "from-blue-50 to-cyan-50",
          },
          {
            icon: Shield,
            title: "Terpercaya & Akurat",
            desc: "Sumber berita yang kredibel dengan verifikasi fakta",
            color: "from-purple-500 to-pink-500",
            bgColor: "from-purple-50 to-pink-50",
          },
          {
            icon: Smartphone,
            title: "Mobile Friendly",
            desc: "Interface responsif untuk semua perangkat",
            color: "from-orange-500 to-red-500",
            bgColor: "from-orange-50 to-red-50",
          },
          {
            icon: BookOpen,
            title: "Konten Berkualitas",
            desc: "Artikel mendalam dengan liputan komprehensif",
            color: "from-green-500 to-emerald-500",
            bgColor: "from-green-50 to-emerald-50",
          },
          {
            icon: Clock,
            title: "Real-time Update",
            desc: "Notifikasi berita penting langsung ke perangkat",
            color: "from-indigo-500 to-purple-500",
            bgColor: "from-indigo-50 to-purple-50",
          },
          {
            icon: Users,
            title: "Komunitas Aktif",
            desc: "Bergabung dengan ribuan pembaca lainnya",
            color: "from-pink-500 to-rose-500",
            bgColor: "from-pink-50 to-rose-50",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className={`group bg-gradient-to-br ${feature.bgColor} rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200`}
          >
            <div
              className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <feature.icon className="h-7 w-7 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-slate-800">
              {feature.title}
            </h4>
            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Contact Card */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl shadow-2xl p-8 md:p-10 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
          <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-3 rounded-2xl mr-4">
            <Mail className="h-6 w-6 text-slate-900" />
          </div>
          Hubungi Kami
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="bg-gradient-to-br from-yellow-500 to-green-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <p className="font-semibold mb-2 text-blue-200">whatsapp</p>
            <p className="text-white">0819 5267 2000</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <p className="font-semibold mb-2 text-blue-200">Telepon</p>
            <p className="text-white">(0283) 340900 </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <p className="font-semibold mb-2 text-blue-200">Alamat</p>
            <p className="text-white">Gedung graha Pena Radar TEgal, Jalan Perinits Kemerdekaan No. 32, Tegal, Jawa Tengah</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
