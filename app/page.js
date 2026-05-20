'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              {/* Logo placeholder */}
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                UH
              </div>
              <div>
                <p className="font-bold text-green-700 text-sm leading-tight">Universitas Handayani</p>
                <p className="text-xs text-gray-500 leading-tight">Makassar</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-green-700 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all shadow-sm"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 border-2 border-white/30">
            UH
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Universitas Handayani
            <span className="block text-emerald-200">Makassar</span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-emerald-100 mb-4">
            Wujudkan Masa Depanmu Bersama Kami
          </p>
          <p className="text-green-100 text-base sm:text-lg max-w-2xl mx-auto mb-10">
            Bergabunglah dengan ribuan mahasiswa berprestasi di Universitas Handayani Makassar.
            Raih ilmu, kembangkan potensi, dan bangun karir gemilang bersama kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-3 text-base font-semibold bg-white text-green-700 rounded-xl hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
            >
              Masuk Akun
            </Link>
            <Link
              href="/register"
              className="px-8 py-3 text-base font-semibold bg-emerald-500 text-white border-2 border-emerald-400 rounded-xl hover:bg-emerald-400 transition-all shadow-lg hover:shadow-xl"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Mengapa Universitas Handayani Makassar?
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Kami berkomitmen memberikan pendidikan terbaik untuk mempersiapkan generasi unggul Indonesia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Akademik Berkualitas</h3>
              <p className="text-gray-600 leading-relaxed">
                Program studi terakreditasi dengan kurikulum modern yang relevan dengan kebutuhan industri masa kini dan masa depan.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fasilitas Modern</h3>
              <p className="text-gray-600 leading-relaxed">
                Kampus dilengkapi laboratorium canggih, perpustakaan digital, ruang kuliah ber-AC, dan berbagai fasilitas penunjang akademik.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Karir Terjamin</h3>
              <p className="text-gray-600 leading-relaxed">
                Jaringan alumni luas dan kemitraan dengan ratusan perusahaan terkemuka memastikan lulusan siap memasuki dunia kerja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: '10.000+', label: 'Mahasiswa Aktif' },
            { number: '50+', label: 'Program Studi' },
            { number: '500+', label: 'Dosen Berpengalaman' },
            { number: '25 Tahun', label: 'Pengalaman' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-extrabold text-white">{stat.number}</p>
              <p className="text-emerald-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Siap Bergabung Bersama Kami?
          </h2>
          <p className="text-gray-500 mb-8">
            Pendaftaran mahasiswa baru sudah dibuka. Jangan lewatkan kesempatan emasmu!
          </p>
          <Link
            href="/register"
            className="inline-block px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all shadow-lg hover:shadow-xl"
          >
            Daftar Sekarang — Gratis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
              UH
            </div>
            <span className="font-semibold text-white">Universitas Handayani Makassar</span>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Universitas Handayani Makassar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
