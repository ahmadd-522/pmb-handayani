'use client'

import Link from 'next/link'

const S1 = [
  {
    nama: 'Sistem Komputer',
    singkatan: 'SK',
    color: 'from-blue-600 to-blue-800',
    light: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    durasi: '4 Tahun',
    gelar: 'S.Kom',
    deskripsi:
      'Program studi unggulan UHM yang mempelajari perancangan dan pemrograman sistem berbasis komputer, embedded system, jaringan komputer, dan IoT sesuai kebutuhan industri digital.',
    keahlian: ['Pemrograman Sistem', 'Jaringan Komputer', 'Embedded Systems', 'IoT & Robotika', 'Keamanan Sistem'],
    karir: ['System Engineer', 'Network Engineer', 'IoT Developer', 'Embedded Programmer', 'IT Infrastructure'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    nama: 'Teknik Informatika',
    singkatan: 'TI',
    color: 'from-green-600 to-emerald-700',
    light: 'bg-green-50 border-green-200',
    badge: 'bg-green-100 text-green-700',
    durasi: '4 Tahun',
    gelar: 'S.Kom',
    deskripsi:
      'Memfokuskan pada pengembangan perangkat lunak, kecerdasan buatan, dan rekayasa sistem informasi yang mendukung transformasi digital di berbagai sektor industri.',
    keahlian: ['Rekayasa Perangkat Lunak', 'Kecerdasan Buatan', 'Mobile Development', 'Data Science', 'Cloud Computing'],
    karir: ['Software Engineer', 'AI Engineer', 'Mobile Developer', 'Data Analyst', 'DevOps Engineer'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    nama: 'Sistem Informasi',
    singkatan: 'SI',
    color: 'from-violet-600 to-violet-800',
    light: 'bg-violet-50 border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    durasi: '4 Tahun',
    gelar: 'S.Kom',
    deskripsi:
      'Mengintegrasikan teknologi informasi dengan proses bisnis organisasi, menciptakan sistem yang efektif untuk mendukung pengambilan keputusan strategis perusahaan.',
    keahlian: ['Analisis Bisnis', 'Database Management', 'ERP Systems', 'Business Intelligence', 'IT Governance'],
    karir: ['System Analyst', 'Business Analyst', 'IT Manager', 'Database Admin', 'ERP Consultant'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    nama: 'Pendidikan Teknologi Informasi',
    singkatan: 'PTI',
    color: 'from-teal-600 to-teal-800',
    light: 'bg-teal-50 border-teal-200',
    badge: 'bg-teal-100 text-teal-700',
    durasi: '4 Tahun',
    gelar: 'S.Pd',
    deskripsi:
      'Mencetak tenaga pendidik profesional di bidang teknologi informasi yang mampu mengintegrasikan teknologi dalam proses pembelajaran di era digital.',
    keahlian: ['Pedagogi Digital', 'Kurikulum TI', 'Media Pembelajaran', 'E-Learning Development', 'Teknologi Pendidikan'],
    karir: ['Guru TI', 'Dosen / Instruktur', 'Pengembang Kurikulum', 'E-Learning Designer', 'Edtech Specialist'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    nama: 'Kewirausahaan',
    singkatan: 'KWU',
    color: 'from-orange-500 to-orange-700',
    light: 'bg-orange-50 border-orange-200',
    badge: 'bg-orange-100 text-orange-700',
    durasi: '4 Tahun',
    gelar: 'S.E',
    deskripsi:
      'Sejalan dengan identitas "Technopreneurship Campus", program ini membekali mahasiswa kemampuan membangun dan mengelola startup serta bisnis berbasis teknologi.',
    keahlian: ['Business Model Canvas', 'Digital Marketing', 'Startup Development', 'Manajemen Keuangan', 'Product Management'],
    karir: ['Entrepreneur / Founder', 'Startup Co-founder', 'Business Development', 'Product Manager', 'Marketing Strategist'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    nama: 'Hukum',
    singkatan: 'HK',
    color: 'from-red-600 to-red-800',
    light: 'bg-red-50 border-red-200',
    badge: 'bg-red-100 text-red-700',
    durasi: '4 Tahun',
    gelar: 'S.H',
    deskripsi:
      'Program studi hukum yang mencetak sarjana hukum kompeten dalam hukum perdata, pidana, bisnis, dan tata negara dengan wawasan global dan etika profesi tinggi.',
    keahlian: ['Hukum Perdata', 'Hukum Pidana', 'Hukum Bisnis & Siber', 'Hukum Tata Negara', 'Hukum Internasional'],
    karir: ['Pengacara / Advokat', 'Hakim / Jaksa', 'Notaris', 'Legal Corporate', 'Konsultan Hukum'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    nama: 'Ilmu Sosial',
    singkatan: 'IS',
    color: 'from-pink-600 to-pink-800',
    light: 'bg-pink-50 border-pink-200',
    badge: 'bg-pink-100 text-pink-700',
    durasi: '4 Tahun',
    gelar: 'S.Sos',
    deskripsi:
      'Mengkaji fenomena sosial, komunikasi, dan hubungan masyarakat di era digital, dengan pendekatan interdisiplin yang relevan dengan dinamika sosial kontemporer.',
    keahlian: ['Sosiologi Digital', 'Komunikasi Massa', 'Hubungan Masyarakat', 'Penelitian Sosial', 'Kebijakan Publik'],
    karir: ['Peneliti Sosial', 'Jurnalis / Content Creator', 'Humas / PR', 'Konsultan Kebijakan', 'NGO Worker'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Program Studi Resmi</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Pilih Jurusan Impianmu</h1>
          <p className="text-green-100 max-w-2xl mx-auto">
            Universitas Handayani Makassar — <span className="font-semibold">A Technopreneurship Campus</span> — menawarkan program studi S1, S2, dan D3 yang terakreditasi dan relevan dengan industri digital.
          </p>
        </div>
      </section>

      {/* Jenjang Tabs Info */}
      <div className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 text-center text-sm">
          {[
            { jenjang: 'S2', label: 'Pascasarjana', count: '1 Prodi', color: 'bg-purple-100 text-purple-700' },
            { jenjang: 'S1', label: 'Sarjana', count: '7 Prodi', color: 'bg-green-100 text-green-700' },
            { jenjang: 'D3', label: 'Diploma', count: '2 Prodi', color: 'bg-blue-100 text-blue-700' },
          ].map((j) => (
            <div key={j.jenjang} className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium ${j.color}`}>
              <span className="font-bold">{j.jenjang}</span>
              <span>·</span>
              <span>{j.label}</span>
              <span>·</span>
              <span>{j.count}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1 space-y-12">

        {/* S2 Highlight */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="bg-white/20 border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full">S2 Pascasarjana</span>
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">Pertama di Indonesia Timur</span>
              </div>
              <h2 className="text-2xl font-extrabold mb-2">Magister Sistem Komputer (M.Kom)</h2>
              <p className="text-purple-100 text-sm max-w-2xl">
                Diselenggarakan sejak 2013, program S2 Sistem Komputer UHM adalah yang <strong>pertama di Indonesia Timur</strong>. Dirancang untuk profesional dan akademisi yang ingin mendalami riset komputer, AI, dan sistem cerdas.
              </p>
            </div>
            <Link href="/register" className="flex-shrink-0 px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-colors text-sm shadow">
              Daftar S2 →
            </Link>
          </div>
        </div>

        {/* S1 Programs */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full">S1 Sarjana</span>
            <h2 className="text-xl font-bold text-gray-800">7 Program Studi Sarjana</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {S1.map((j) => (
              <div key={j.nama} className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-2 ${j.light} overflow-hidden`}>
                <div className={`bg-gradient-to-r ${j.color} p-5 text-white`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur flex-shrink-0">
                        {j.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold leading-snug">{j.nama}</h3>
                        <p className="text-white/80 text-xs mt-0.5">Gelar: {j.gelar} · {j.durasi}</p>
                      </div>
                    </div>
                    <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-lg flex-shrink-0">S1</span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">{j.deskripsi}</p>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Keahlian</p>
                    <div className="flex flex-wrap gap-1.5">
                      {j.keahlian.map((k) => (
                        <span key={k} className={`text-xs font-medium px-2.5 py-1 rounded-full ${j.badge}`}>{k}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Prospek Karir</p>
                    <div className="flex flex-wrap gap-1.5">
                      {j.karir.map((k) => (
                        <span key={k} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{k}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/register" className={`block w-full text-center py-2.5 bg-gradient-to-r ${j.color} text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity`}>
                    Daftar Jurusan Ini →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* D3 Programs */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded-full">D3 Diploma</span>
            <h2 className="text-xl font-bold text-gray-800">2 Program Studi Diploma</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                nama: 'Manajemen Informatika',
                gelar: 'A.Md',
                color: 'from-cyan-500 to-cyan-700',
                light: 'bg-cyan-50 border-cyan-200',
                badge: 'bg-cyan-100 text-cyan-700',
                desc: 'Menghasilkan tenaga ahli madya yang terampil dalam pengelolaan sistem informasi, basis data, dan aplikasi bisnis berbasis komputer siap kerja dalam 3 tahun.',
                skills: ['Pemrograman Web', 'Database', 'Jaringan Dasar', 'Sistem Informasi Bisnis'],
              },
              {
                nama: 'Komputerisasi Akuntansi',
                gelar: 'A.Md',
                color: 'from-amber-500 to-amber-700',
                light: 'bg-amber-50 border-amber-200',
                badge: 'bg-amber-100 text-amber-700',
                desc: 'Menggabungkan ilmu akuntansi dengan teknologi komputer untuk menghasilkan tenaga ahli sistem akuntansi digital yang dibutuhkan perusahaan modern.',
                skills: ['Akuntansi Digital', 'Software Akuntansi', 'Perpajakan', 'Laporan Keuangan'],
              },
            ].map((d) => (
              <div key={d.nama} className={`bg-white rounded-2xl shadow-md border-2 ${d.light} overflow-hidden hover:shadow-lg transition-shadow`}>
                <div className={`bg-gradient-to-r ${d.color} p-5 text-white flex items-center gap-4`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center font-bold text-lg">D3</div>
                  <div>
                    <h3 className="font-bold">{d.nama}</h3>
                    <p className="text-white/80 text-xs">Gelar: {d.gelar} · 3 Tahun</p>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {d.skills.map((s) => (
                      <span key={s} className={`text-xs font-medium px-2.5 py-1 rounded-full ${d.badge}`}>{s}</span>
                    ))}
                  </div>
                  <Link href="/register" className={`block w-full text-center py-2.5 bg-gradient-to-r ${d.color} text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity`}>
                    Daftar Jurusan Ini →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-3">Masih Bingung Pilih Jurusan?</h2>
        <p className="text-green-100 mb-6 text-sm max-w-md mx-auto">Hubungi tim konselor kami atau lihat panduan cara daftar untuk informasi lebih lanjut.</p>
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
