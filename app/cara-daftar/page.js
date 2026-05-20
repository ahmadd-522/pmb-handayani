'use client'

import Link from 'next/link'

const STEPS = [
  {
    no: '01',
    title: 'Buat Akun',
    desc: 'Daftarkan dirimu dengan mengisi nama lengkap, email aktif, dan password. Akun akan langsung aktif tanpa perlu verifikasi email.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    detail: ['Klik tombol "Daftar Sekarang"', 'Isi nama lengkap sesuai KTP', 'Masukkan email aktif', 'Buat password minimal 6 karakter'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    no: '02',
    title: 'Lengkapi Data Diri',
    desc: 'Masuk ke Dashboard dan isi seluruh data diri dengan lengkap dan benar sesuai dokumen resmi yang kamu miliki.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    detail: ['Tempat & tanggal lahir', 'Alamat lengkap domisili', 'Nomor HP/WhatsApp aktif', 'Nama asal sekolah (SMA/SMK/MA)'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    no: '03',
    title: 'Pilih Jurusan',
    desc: 'Pilih program studi yang sesuai dengan minat, bakat, dan cita-citamu dari 6 jurusan unggulan yang tersedia.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    detail: ['Teknik Informatika', 'Sistem Informasi', 'Manajemen / Akuntansi', 'Hukum / Kedokteran'],
    color: 'from-violet-500 to-violet-600',
  },
  {
    no: '04',
    title: 'Isi Nilai Rapor',
    desc: 'Masukkan nilai rata-rata rapor semester 1-5 sebagai salah satu pertimbangan seleksi masuk program studi pilihanmu.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    detail: ['Nilai rata-rata minimal 65', 'Nilai Kedokteran minimal 80', 'Skala penilaian 0-100', 'Diisi dengan jujur sesuai rapor'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    no: '05',
    title: 'Tunggu Verifikasi',
    desc: 'Tim admisi kami akan meninjau berkas pendaftaranmu dalam 3-7 hari kerja. Pantau status pendaftaran di dashboard kamu.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    detail: ['Proses 3-7 hari kerja', 'Status tampil di dashboard', 'Notifikasi via email', 'Tim siap dihubungi jika ada pertanyaan'],
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    no: '06',
    title: 'Pengumuman Hasil',
    desc: 'Hasil seleksi akan diumumkan melalui dashboard pendaftar dan halaman pengumuman resmi. Selamat bergabung jika diterima!',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    detail: ['Cek status di dashboard', 'Lihat halaman pengumuman', 'Jika diterima: lakukan herregistrasi', 'Jika ditolak: bisa daftar periode berikutnya'],
    color: 'from-teal-500 to-teal-600',
  },
]

const SYARAT = [
  { label: 'Ijazah / SKL', desc: 'Surat Keterangan Lulus atau Ijazah SMA/SMK/MA sederajat' },
  { label: 'Rapor', desc: 'Fotokopi rapor semester 1-5 yang telah dilegalisir sekolah' },
  { label: 'KTP / KK', desc: 'Kartu Tanda Penduduk atau Kartu Keluarga yang masih berlaku' },
  { label: 'Foto 3x4', desc: 'Pas foto terbaru latar merah ukuran 3x4 cm (2 lembar)' },
  { label: 'SKCK', desc: 'Khusus jurusan Hukum dan Kedokteran (bisa menyusul)' },
  { label: 'Surat Sehat', desc: 'Surat keterangan sehat dari dokter/puskesmas (untuk Kedokteran)' },
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
            <Link href="/jurusan" className="hover:text-green-700 transition-colors">Jurusan</Link>
            <Link href="/cara-daftar" className="text-green-700 font-semibold">Cara Daftar</Link>
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

export default function CaraDaftarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Panduan Pendaftaran</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Cara Daftar PMB 2025/2026</h1>
          <p className="text-green-100">Ikuti 6 langkah mudah berikut untuk menyelesaikan proses pendaftaran mahasiswa baru.</p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 flex-1 space-y-12">

        {/* Timeline Steps */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Alur Pendaftaran</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-emerald-600 ml-px" />

            <div className="space-y-6">
              {STEPS.map((step, idx) => (
                <div key={step.no} className="relative flex gap-6 items-start">
                  {/* Step circle */}
                  <div className={`hidden md:flex w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white items-center justify-center flex-shrink-0 shadow-lg z-10`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`md:hidden w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center flex-shrink-0 shadow`}>
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Langkah {step.no}</span>
                          <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                        </div>
                      </div>
                      {idx === 0 && (
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-200">Mulai Di Sini</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{step.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {step.detail.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-gray-500">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Persyaratan */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Persyaratan Dokumen</h2>
          <p className="text-gray-500 text-sm mb-6">Siapkan dokumen berikut sebelum melakukan pendaftaran.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SYARAT.map((s, i) => (
              <div key={s.label} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{s.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jadwal */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Jadwal Penerimaan 2025/2026</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Pendaftaran Gelombang 1', date: '1 Feb — 31 Mar 2026', status: 'Selesai' },
              { label: 'Pendaftaran Gelombang 2', date: '1 Apr — 30 Jun 2026', status: 'Berlangsung' },
              { label: 'Pengumuman Hasil', date: '15 Jul 2026', status: 'Mendatang' },
              { label: 'Daftar Ulang (Herregistrasi)', date: '16 — 31 Jul 2026', status: 'Mendatang' },
              { label: 'Orientasi Mahasiswa Baru', date: '1 — 7 Agustus 2026', status: 'Mendatang' },
              { label: 'Awal Perkuliahan', date: '10 Agustus 2026', status: 'Mendatang' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between bg-white/15 backdrop-blur rounded-xl px-4 py-3">
                <div>
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-green-200 text-xs mt-0.5">{item.date}</p>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  item.status === 'Berlangsung' ? 'bg-yellow-400 text-yellow-900' :
                  item.status === 'Selesai' ? 'bg-white/20 text-white' :
                  'bg-white/10 text-white/80'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="py-12 px-4 bg-white text-center border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Siap Memulai Pendaftaran?</h2>
        <p className="text-gray-500 mb-6 text-sm">Gelombang 2 masih dibuka. Jangan sampai kehabisan kuota!</p>
        <Link href="/register" className="inline-block px-8 py-3.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all shadow-lg hover:shadow-xl">
          Daftar Sekarang — Gratis
        </Link>
      </section>

      <footer className="bg-gray-800 text-gray-400 py-6 px-4 text-center text-sm">
        © {new Date().getFullYear()} Universitas Handayani Makassar. All rights reserved.
      </footer>
    </div>
  )
}
