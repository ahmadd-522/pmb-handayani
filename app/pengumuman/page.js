'use client'

import { useState } from 'react'
import Link from 'next/link'

const PENGUMUMAN = [
  {
    id: 1,
    kategori: 'Penerimaan',
    kategoriColor: 'bg-green-100 text-green-700 border-green-200',
    judul: 'Pendaftaran Gelombang 2 Resmi Dibuka — PMB 2025/2026',
    tanggal: '1 April 2026',
    ringkasan: 'Universitas Handayani Makassar dengan bangga mengumumkan pembukaan pendaftaran mahasiswa baru Gelombang 2 Tahun Akademik 2025/2026. Pendaftaran dibuka mulai 1 April hingga 30 Juni 2026.',
    isi: 'Pendaftaran dilakukan secara online melalui website resmi PMB. Calon mahasiswa diharapkan melengkapi data diri dengan lengkap dan memilih jurusan sesuai minat. Kuota terbatas — daftarkan dirimu sekarang!',
    penting: true,
  },
  {
    id: 2,
    kategori: 'Pengumuman',
    kategoriColor: 'bg-blue-100 text-blue-700 border-blue-200',
    judul: 'Hasil Seleksi Gelombang 1 Telah Diumumkan',
    tanggal: '5 April 2026',
    ringkasan: 'Selamat kepada 480 calon mahasiswa yang dinyatakan DITERIMA pada seleksi Gelombang 1. Silakan cek status di dashboard masing-masing dan segera lakukan herregistrasi.',
    isi: 'Batas waktu herregistrasi adalah 15 April 2026. Mahasiswa yang diterima wajib membawa dokumen asli untuk verifikasi. Bagi yang belum diterima, dapat mendaftar kembali di Gelombang 2.',
    penting: true,
  },
  {
    id: 3,
    kategori: 'Beasiswa',
    kategoriColor: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    judul: 'Beasiswa Prestasi 2025/2026 — Diskon SPP Hingga 100%',
    tanggal: '20 Maret 2026',
    ringkasan: 'Universitas Handayani Makassar membuka program beasiswa prestasi bagi calon mahasiswa baru dengan nilai rapor rata-rata di atas 85. Beasiswa mencakup potongan SPP 50% hingga 100%.',
    isi: 'Syarat: nilai rapor ≥ 85, tidak sedang menerima beasiswa lain, mengisi formulir beasiswa. Kuota beasiswa terbatas. Daftar segera melalui menu pendaftaran online.',
    penting: false,
  },
  {
    id: 4,
    kategori: 'Akademik',
    kategoriColor: 'bg-violet-100 text-violet-700 border-violet-200',
    judul: 'Kalender Akademik Tahun 2025/2026 Telah Ditetapkan',
    tanggal: '15 Maret 2026',
    ringkasan: 'Rektor Universitas Handayani Makassar telah menetapkan kalender akademik tahun 2025/2026. Perkuliahan semester ganjil akan dimulai pada 10 Agustus 2026.',
    isi: 'Kalender akademik lengkap dapat diakses di website universitas. Mahasiswa baru diwajibkan mengikuti Orientasi Mahasiswa Baru (OSMB) yang akan dilaksanakan 1-7 Agustus 2026.',
    penting: false,
  },
  {
    id: 5,
    kategori: 'Fasilitas',
    kategoriColor: 'bg-teal-100 text-teal-700 border-teal-200',
    judul: 'Gedung Laboratorium Terpadu Baru Siap Digunakan',
    tanggal: '10 Maret 2026',
    ringkasan: 'Gedung Laboratorium Terpadu senilai Rp 15 Miliar telah selesai dibangun dan siap digunakan mulai tahun akademik 2025/2026 untuk mendukung kegiatan praktikum mahasiswa.',
    isi: 'Laboratorium dilengkapi peralatan modern untuk jurusan Teknik Informatika, Sistem Informasi, dan Kedokteran. Total 12 ruang laboratorium dengan kapasitas 1.200 mahasiswa per hari.',
    penting: false,
  },
  {
    id: 6,
    kategori: 'Kerjasama',
    kategoriColor: 'bg-orange-100 text-orange-700 border-orange-200',
    judul: 'MoU dengan 15 Perusahaan Nasional untuk Magang & Rekrutmen',
    tanggal: '1 Maret 2026',
    ringkasan: 'Universitas Handayani Makassar menandatangani MoU dengan 15 perusahaan nasional terkemuka untuk program magang, rekrutmen langsung, dan pengembangan kurikulum berbasis industri.',
    isi: 'Perusahaan mitra meliputi sektor IT, perbankan, kesehatan, dan hukum. Mahasiswa aktif akan mendapat akses prioritas ke program magang berbayar dan jalur fast-track rekrutmen.',
    penting: false,
  },
]

const KATEGORI_LIST = ['Semua', 'Penerimaan', 'Pengumuman', 'Beasiswa', 'Akademik', 'Fasilitas', 'Kerjasama']

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
            <Link href="/cara-daftar" className="hover:text-green-700 transition-colors">Cara Daftar</Link>
            <Link href="/pengumuman" className="text-green-700 font-semibold">Pengumuman</Link>
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

export default function PengumumanPage() {
  const [aktif, setAktif] = useState('Semua')
  const [expanded, setExpanded] = useState(null)

  const filtered = aktif === 'Semua' ? PENGUMUMAN : PENGUMUMAN.filter((p) => p.kategori === aktif)
  const penting = PENGUMUMAN.filter((p) => p.penting)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Info Terkini</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Pengumuman & Berita</h1>
          <p className="text-green-100">Informasi terbaru seputar penerimaan mahasiswa baru, beasiswa, dan kegiatan akademik.</p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex-1 space-y-8">

        {/* Pengumuman Penting */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            <h2 className="font-bold text-yellow-800">Pengumuman Penting</h2>
          </div>
          <div className="space-y-3">
            {penting.map((p) => (
              <div key={p.id} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-yellow-200">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0 animate-pulse" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{p.judul}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{p.tanggal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Kategori */}
        <div>
          <div className="flex flex-wrap gap-2">
            {KATEGORI_LIST.map((k) => (
              <button
                key={k}
                onClick={() => setAktif(k)}
                className={`px-4 py-2 text-sm font-medium rounded-xl border transition-all ${
                  aktif === k
                    ? 'bg-green-600 text-white border-green-600 shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-700'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        {/* List Pengumuman */}
        <div className="space-y-4">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.kategoriColor}`}>
                      {item.kategori}
                    </span>
                    {item.penting && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-700 border border-red-200">
                        Penting
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 flex-shrink-0">{item.tanggal}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2 leading-snug">{item.judul}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.ringkasan}</p>

                {expanded === item.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.isi}</p>
                  </div>
                )}

                <button
                  onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                  className="mt-4 text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1 transition-colors"
                >
                  {expanded === item.id ? 'Sembunyikan' : 'Baca Selengkapnya'}
                  <svg className={`w-4 h-4 transition-transform ${expanded === item.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* CTA */}
      <section className="bg-white border-t border-gray-100 py-10 px-4 text-center">
        <p className="text-gray-500 text-sm mb-4">Ingin mendapat notifikasi pengumuman terbaru?</p>
        <Link href="/register" className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all shadow-lg text-sm">
          Daftar Sekarang & Pantau Status
        </Link>
      </section>

      <footer className="bg-gray-800 text-gray-400 py-6 px-4 text-center text-sm">
        © {new Date().getFullYear()} Universitas Handayani Makassar. All rights reserved.
      </footer>
    </div>
  )
}
