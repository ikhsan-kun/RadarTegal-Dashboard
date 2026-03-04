import React, { useState } from "react";
import {
  Check,
  Star,
  Crown,
  Zap,
  Award,
  ChevronRight,
  Sparkles,
  Clock,
  Shield,
} from "lucide-react";

function SubscriptionPlan() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      id: "basic",
      title: "Basic",
      subtitle: "Sempurna untuk pembaca pemula",
      price: "110.000",
      originalPrice: "150.000",
      durationLabel: "30 hari",
      duration: "1 Bulan",
      description: "Akses penuh konten premium selama 30 hari",
      status: "Popular",
      icon: Star,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      features: [
        "Akses semua berita premium",
        "Baca tanpa iklan",
        "Arsip 30 hari terakhir",
        "Mobile & Desktop access",
      ],
      badge: null,
      discount: "27%",
    },
    {
      id: "regular",
      title: "Regular",
      subtitle: "Pilihan terbaik untuk pembaca setia",
      price: "330.000",
      originalPrice: "450.000",
      durationLabel: "90 hari",
      duration: "3 Bulan",
      description: "Akses konten premium selama 90 hari dengan benefit lebih",
      status: "Best Value",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      features: [
        "Semua fitur Basic",
        "Arsip lengkap unlimited",
        "Download artikel (PDF)",
        "Newsletter eksklusif",
        "Priority support",
      ],
      badge: "Hemat 26%",
      discount: "27%",
      popular: true,
    },
    {
      id: "expert",
      title: "Expert",
      subtitle: "Akses ultimate untuk profesional",
      price: "1.320.000",
      originalPrice: "1.800.000",
      durationLabel: "360 hari",
      duration: "12 Bulan",
      description: "Paket lengkap dengan semua fitur premium sepanjang tahun",
      status: "Premium",
      icon: Award,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      features: [
        "Semua fitur Regular",
        "Akses early news",
        "Webinar eksklusif bulanan",
        "Konsultasi dengan editor",
        "Merchandise eksklusif",
        "VIP support 24/7",
      ],
      badge: "Hemat 27%",
      discount: "27%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Penawaran Terbatas</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Paket Langganan
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Pilih paket yang sesuai untuk mengakses konten premium dan nikmati
              berita berkualitas tanpa batas
            </p>
          </div>
        </div>

        {/* Benefits Banner */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Shield, text: "Bebas Iklan", desc: "Baca tanpa gangguan" },
            { icon: Zap, text: "Update Real-time", desc: "Berita tercepat" },
            {
              icon: Clock,
              text: "Akses 24/7",
              desc: "Kapan saja, dimana saja",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{benefit.text}</h3>
              <p className="text-sm text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 mb-12">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-500 flex flex-col ${
                  plan.popular
                    ? "border-purple-500 lg:scale-105 lg:-translate-y-4"
                    : "border-slate-200 hover:border-blue-300"
                } ${hoveredPlan === plan.id ? "shadow-2xl scale-105" : ""}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                    {/* <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2">
                      <Crown className="h-4 w-4" />
                      <span>PALING POPULER</span>
                    </div> */}
                  </div>
                )}

                {/* Discount Badge */}
                {plan.discount && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      HEMAT {plan.discount}
                    </div>
                  </div>
                )}

                {/* Header */}
                <div
                  className={`bg-gradient-to-r ${plan.color} p-8 ${plan.popular ? "pt-12" : ""}`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white text-center mb-2">
                    {plan.title}
                  </h2>
                  <p className="text-sm text-white/80 text-center mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-white/60 text-lg line-through">
                        Rp {plan.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-white text-2xl font-semibold">
                        Rp
                      </span>
                      <span className="text-white text-5xl font-extrabold mx-2">
                        {plan.price}
                      </span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm inline-block px-4 py-2 rounded-full mt-4">
                      <div className="flex items-center space-x-2 text-white">
                        <Clock className="h-4 w-4" />
                        <span className="font-semibold">{plan.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-slate-600 text-center mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div
                          className={`bg-gradient-to-br ${plan.color} w-6 h-6 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}
                        >
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/6281952672000?text=Halo%20saya%20ingin%20berlangganan%20koran%20digital%20radar%20tegal`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-full bg-gradient-to-r ${plan.color} text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                      hoveredPlan === plan.id ? "scale-105" : ""
                    }`}
                  >
                    <span>Berlangganan Sekarang</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* <button className="w-full mt-3 px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition-all duration-300 font-semibold">
                    Lihat Detail
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
            Pertanyaan Umum
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Bagaimana cara berlangganan?",
                a: "Pilih paket yang sesuai, klik tombol 'Berlangganan Sekarang', lalu ikuti proses pembayaran yang tersedia.",
              },
              {
                q: "Apakah bisa dibatalkan?",
                a: "Ya, Anda dapat membatalkan langganan kapan saja. Akses akan tetap aktif hingga periode berlangganan berakhir.",
              },
              {
                q: "Metode pembayaran apa saja?",
                a: "Kami menerima transfer bank, e-wallet, dan kartu kredit untuk kemudahan transaksi Anda.",
              },
              {
                q: "Apakah ada trial gratis?",
                a: "Saat ini belum ada trial gratis, namun Anda bisa memulai dengan paket Basic untuk mencoba layanan kami.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
              >
                <h4 className="font-bold text-slate-800 mb-2 flex items-center">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  {faq.q}
                </h4>
                <p className="text-slate-600 ml-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Butuh Bantuan Memilih Paket?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Tim kami siap membantu Anda menemukan paket yang paling sesuai
            dengan kebutuhan
          </p>
          <a  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-2xl"
            href="https://wa.me/6281952672000"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hubungi Customer Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPlan;
