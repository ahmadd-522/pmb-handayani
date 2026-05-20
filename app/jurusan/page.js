'use client'

import Link from 'next/link'

const JURUSAN = [
  {
    nama: 'Teknik Informatika',
    singkatan: 'TI',
    color: 'from-blue-500 to-blue-700',
    light: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    akreditasi: 'A',
    durasi: '4 Tahun',
    gelar: 'S.Kom',
    kuota: '120 Mahasiswa',
    deskripsi:
      'Program studi yang memfokuskan pada pengembangan perangkat lunak, kecerdasan buatan, keamanan siber, dan teknologi informasi terkini yang dibutuhkan industri digital.',
    keahlian: ['Pemrograman Web & Mobile', 'Kecerdasan Buatan (AI)', 'Keamanan Siber', 'Cloud Computing', 'Data Science'],
    karir: ['Software Engineer', 'Data Scientist', 'AI Engineer', 'Cybersecurity Analyst', 'IT Consultant'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    nama: 'Sistem Informasi',
    singkatan: 'SI',
    color: 'from-violet-500 to-violet-700',
    light: 'bg-violet-50 border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    akreditasi: 'A',
    durasi: '4 Tahun',
    gelar: 'S.Kom',
    kuota: '100 Mahasiswa',
    deskripsi:
      'Mengintegrasikan teknologi informasi dengan proses bisnis untuk menciptakan sistem yang efektif dan efisien dalam mendukung pengambilan keputusan organisasi.',
    keahlian: ['Analisis Sistem Bisnis', 'Manajemen Database', 'ERP Systems', 'Business Intelligence', 'Project Management'],
    karir: ['System Analyst', 'Business Analyst', 'IT Manager', 'Database Administrator', 'ERP Consultant'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    nama: 'Manajemen',
    singkatan: 'MN',
    color: 'from-emerald-500 to-emerald-700',
    light: 'bg-emerald-50 border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    akreditasi: 'A',
    durasi: '4 Tahun',
    gelar: 'S.M',
    kuota: '150 Mahasiswa',
    deskripsi:
      'Program studi yang membekali mahasiswa dengan kemampuan manajerial, kepemimpinan, dan strategi bisnis untuk menghadapi tantangan dunia usaha yang dinamis.',
    keahlian: ['Manajemen Strategis', 'Pemasaran Digital', 'Keuangan Bisnis', 'SDM & Organisasi', 'Kewirausahaan'],
    karir: ['Marketing Manager', 'HR Manager', 'Business Development', 'Entrepreneur', 'Management Consultant'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    nama: 'Akuntansi',
    singkatan: 'AK',
    color: 'from-orange-500 to-orange-700',
    light: 'bg-orange-50 border-orange-200',
    badge: 'bg-orange-100 text-orange-700',
    akreditasi: 'B',
    durasi: '4 Tahun',
    gelar: 'S.Ak',
    kuota: '100 Mahasiswa',
    deskripsi:
      'Mempelajari ilmu akuntansi, perpajakan, audit, dan keuangan yang komprehensif sesuai standar nasional dan internasional untuk mencetak akuntan profesional.',
    keahlian: ['Akuntansi Keuangan', 'Perpajakan', 'Audit & Assurance', 'Akuntansi Manajemen', 'Sistem Informasi Akuntansi'],
    karir: ['Akuntan Publik', 'Auditor', 'Tax Consultant', 'Financial Analyst', 'CFO'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    nama: 'Hukum',
    singkatan: 'HK',
    color: 'from-red-500 to-red-700',
    light: 'bg-red-50 border-red-200',
    badge: 'bg-red-100 text-red-700',
    akreditasi: 'B',
    durasi: '4 Tahun',
    gelar: 'S.H',
    kuota: '80 Mahasiswa',
    deskripsi:
      'Program studi hukum yang mencetak sarjana hukum berkompeten dalam hukum perdata, pidana, bisnis, dan tata negara dengan wawasan global dan etika profesi tinggi.',
    keahlian: ['Hukum Perdata', 'Hukum Pidana', 'Hukum Bisnis', 'Hukum Tata Negara', 'Hukum Internasional'],
    karir: ['Pengacara / Advokat', 'Hakim / Jaksa', 'Notaris', 'Legal Corporate', 'Konsultan Hukum'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    nama: 'Kedokteran',
    singkatan: 'KD',
    color: 'from-teal-500 to-teal-700',
    light: 'bg-teal-50 border-teal-200',
    badge: 'bg-teal-100 text-teal-700',
    akreditasi: 'A',
    durasi: '6 Tahun',
    gelar: 'dr.',
    kuota: '60 Mahasiswa',
    deskripsi:
      'Program studi kedokteran dengan fasilitas laboratorium medis modern dan RS pendidikan, menghasilkan dokter yang kompeten, humanis, dan berdedikasi tinggi.',
    keahlian: ['Ilmu Kedokteran Dasar', 'Klinik & Bedah', 'Pediatri & Geriatri', 'Kedokteran Komunitas', 'Penelitian Medis'],
    karir: ['Dokter Umum', 'Dokter Spesialis', 'Peneliti Medis', 'Dokter Militer / TNI', 'Dosen Kedokteran'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm">UH</div>
            <div>
              <p className="font-bold text-green-700 text-sm leading-tight">Universitas Handayani</p>
              <p className="text-xs text-gray-500 leading-tight">Makassar</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/jurusan" className="text-green-700 font-semibold">Jurusan</Link>
            <Link href="/cara-daftar" className="hover:text-green-700 transition-colors">Cara Daftar</Link>
            <Link href="/pengumuman" className="hover:text-green-700 transition-colors">Pengumuman</Link>
            <Link href="/kontak" className="hover:text-green-700 transition-colors">Kontak</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="px-4 py-2 text-sm font-medium text-green-700 border border-green-600 rounded-lg hover:bg-green-50 transition-colors">Masuk</Link>
            <Link href="/register" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all shadow-sm">Daftar</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default function JurusanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Program Studi</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Pilih Jurusan Impianmu</h1>
          <p className="text-green-100 max-w-xl mx-auto">
            Universitas Handayani Makassar memiliki 6 program studi unggulan dengan akreditasi terbaik dan kurikulum relevan industri.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[['6', 'Program Studi'], ['4', 'Akreditasi A'], ['510', 'Total Kuota'], ['100%', 'Kerja dalam 1 Tahun']].map(([val, lbl]) => (
            <div key={lbl}>
              <p className="text-xl font-bold text-green-700">{val}</p>
              <p className="text-xs text-gray-500">{lbl}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {JURUSAN.map((j) => (
            <div key={j.nama} className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-2 ${j.light} overflow-hidden group`}>
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${j.color} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
                      {j.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{j.nama}</h2>
                      <p className="text-white/80 text-sm mt-0.5">Gelar: {j.gelar}</p>
                    </div>
                  </div>
                  <span className="bg-white/20 border border-white/30 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    Akreditasi {j.akreditasi}
                  </span>
                </div>
                <div className="flex gap-4 mt-4 text-sm text-white/90">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {j.durasi}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {j.kuota}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">{j.deskripsi}</p>

                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Keahlian yang Dipelajari</p>
                  <div className="flex flex-wrap gap-2">
                    {j.keahlian.map((k) => (
                      <span key={k} className={`text-xs font-medium px-2.5 py-1 rounded-full ${j.badge}`}>{k}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Prospek Karir</p>
                  <div className="flex flex-wrap gap-2">
                    {j.karir.map((k) => (
                      <span key={k} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{k}</span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/register"
                  className={`block w-full text-center py-2.5 bg-gradient-to-r ${j.color} text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity mt-2`}
                >
                  Daftar Jurusan Ini →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-3">Masih Bingung Pilih Jurusan?</h2>
        <p className="text-green-100 mb-6 max-w-md mx-auto text-sm">Konsultasikan pilihan jurusanmu dengan tim kami atau lihat panduan cara daftar.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/kontak" className="px-6 py-3 bg-white text-green-700 font-semibold rounded-xl hover:bg-green-50 transition-colors text-sm">Hubungi Kami</Link>
          <Link href="/cara-daftar" className="px-6 py-3 bg-emerald-500 border border-emerald-400 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-colors text-sm">Lihat Cara Daftar</Link>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-400 py-6 px-4 text-center text-sm">
        © {new Date().getFullYear()} Universitas Handayani Makassar. All rights reserved.
      </footer>
    </div>
  )
}
