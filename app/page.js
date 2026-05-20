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
              <img src="/logo.png" alt="Logo UHM" className="w-10 h-10 object-contain" />
              <div>
                <p className="font-bold text-green-700 text-sm leading-tight">Universitas Handayani</p>
                <p className="text-xs text-gray-500 leading-tight">Makassar</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link href="/jurusan" className="hover:text-green-700 transition-colors">Jurusan</Link>
              <Link href="/cara-daftar" className="hover:text-green-700 transition-colors">Cara Daftar</Link>
              <Link href="/pengumuman" className="hover:text-green-700 transition-colors">Pengumuman</Link>
              <Link href="/kontak" className="hover:text-green-700 transition-colors">Kontak</Link>
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
          <img src="/logo.png" alt="Logo UHM" className="w-28 h-28 object-contain mx-auto mb-5 drop-shadow-xl" />
          <span className="inline-block bg-white/20 border border-white/30 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            A Technopreneurship Campus
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Universitas Handayani
            <span className="block text-emerald-200">Makassar</span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-emerald-100 mb-4">
            Wujudkan Masa Depanmu Bersama Kami
          </p>
          <p className="text-green-100 text-base sm:text-lg max-w-2xl mx-auto mb-10">
            Berdiri sejak 1996, Universitas Handayani Makassar hadir sebagai kampus teknologi & kewirausahaan terdepan di Indonesia Timur. Raih ilmu, kembangkan potensi, bangun karir gemilang.
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">Kampus Technopreneurship</h3>
              <p className="text-gray-600 leading-relaxed">
                Satu-satunya kampus di Makassar yang menggabungkan pendidikan teknologi informasi dengan jiwa kewirausahaan untuk mencetak inovator masa depan.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Digital Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Dilengkapi e-learning, Google Classroom, perpustakaan digital, SIAKAD, dan repositori institusional untuk pengalaman belajar serba digital.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pelopor di Indonesia Timur</h3>
              <p className="text-gray-600 leading-relaxed">
                Pertama menyelenggarakan S2 Sistem Komputer di Indonesia Timur sejak 2013. Terdaftar di Kopertis Wilayah IX sebagai kampus teknologi terpercaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: 'Sejak 1996', label: 'Berdiri di Makassar' },
            { number: '10+', label: 'Program Studi' },
            { number: 'S1, S2, D3', label: 'Jenjang Pendidikan' },
            { number: '#1', label: 'S2 Komputer Indonesia Timur' },
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
      <footer className="bg-gray-800 text-gray-300 py-12 px-4 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">UH</div>
                <span className="font-bold text-white text-lg">Universitas Handayani</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Wujudkan masa depanmu bersama kami. Universitas Handayani Makassar, mencetak generasi unggul Indonesia.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-3 text-sm">Menu</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/jurusan" className="hover:text-green-400 transition-colors">Program Studi</Link></li>
                <li><Link href="/cara-daftar" className="hover:text-green-400 transition-colors">Cara Daftar</Link></li>
                <li><Link href="/pengumuman" className="hover:text-green-400 transition-colors">Pengumuman</Link></li>
                <li><Link href="/kontak" className="hover:text-green-400 transition-colors">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-3 text-sm">Akun</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/register" className="hover:text-green-400 transition-colors">Daftar Sekarang</Link></li>
                <li><Link href="/login" className="hover:text-green-400 transition-colors">Masuk</Link></li>
                <li><Link href="/dashboard" className="hover:text-green-400 transition-colors">Dashboard</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Universitas Handayani Makassar. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">Jl. Adhyaksa Baru No.1, Panakkukang, Makassar 90231</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
