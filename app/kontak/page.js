'use client'

import { useState } from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo UHM" className="w-9 h-9 object-contain" />
            <div>
              <p className="font-bold text-green-700 text-sm leading-tight">Universitas Handayani</p>
              <p className="text-xs text-gray-500 leading-tight">Makassar</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/jurusan" className="hover:text-green-700 transition-colors">Jurusan</Link>
            <Link href="/cara-daftar" className="hover:text-green-700 transition-colors">Cara Daftar</Link>
            <Link href="/pengumuman" className="hover:text-green-700 transition-colors">Pengumuman</Link>
            <Link href="/kontak" className="text-green-700 font-semibold">Kontak</Link>
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

const FAQ = [
  {
    q: 'Apakah pendaftaran PMB bisa dilakukan secara online?',
    a: 'Ya, seluruh proses pendaftaran dilakukan secara online melalui website resmi PMB ini. Tidak perlu datang langsung ke kampus untuk mendaftar.',
  },
  {
    q: 'Berapa biaya pendaftaran PMB Universitas Handayani?',
    a: 'Pendaftaran PMB tidak dipungut biaya (GRATIS). Calon mahasiswa hanya perlu menyiapkan dokumen yang diperlukan.',
  },
  {
    q: 'Kapan pengumuman hasil seleksi dikeluarkan?',
    a: 'Hasil seleksi diumumkan maksimal 7 hari kerja setelah data pendaftaran lengkap. Notifikasi akan muncul di dashboard akun Anda.',
  },
  {
    q: 'Apakah bisa mendaftar lebih dari satu jurusan?',
    a: 'Untuk satu periode pendaftaran, calon mahasiswa hanya bisa memilih satu jurusan. Jika tidak diterima, bisa mendaftar ulang di gelombang berikutnya.',
  },
  {
    q: 'Bagaimana cara mendapatkan beasiswa?',
    a: 'Beasiswa prestasi tersedia bagi pendaftar dengan nilai rapor rata-rata ≥ 85. Isi data nilai rapor dengan benar di formulir pendaftaran untuk dipertimbangkan.',
  },
  {
    q: 'Apakah ada jalur khusus untuk lulusan SMK?',
    a: 'Ya, lulusan SMK bisa mendaftar di semua jurusan. Jurusan Teknik Informatika dan Sistem Informasi sangat cocok untuk lulusan SMK jurusan IT/Rekayasa Perangkat Lunak.',
  },
]

export default function KontakPage() {
  const [form, setForm] = useState({ nama: '', email: '', subjek: '', pesan: '' })
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setForm({ nama: '', email: '', subjek: '', pesan: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Hubungi Kami</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Ada Pertanyaan?</h1>
          <p className="text-green-100">Tim admisi kami siap membantu Anda setiap hari Senin–Sabtu, pukul 08.00–16.00 WITA.</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex-1 space-y-12">

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
              label: 'Alamat',
              value: 'Jl. Adhyaksa Baru No. 1, Makassar, Sulawesi Selatan, Indonesia',
            },
            {
              icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
              label: 'Telepon',
              value: '(0411) 4673395',
            },
            {
              icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
              label: 'Email',
              value: 'info@handayani.ac.id',
            },
            {
              icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              label: 'Jam Layanan',
              value: 'Senin – Jumat\n08.00 – 16.00 WITA\nSabtu 08.00 – 12.00',
            },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm">
                {item.icon}
              </div>
              <p className="font-bold text-gray-700 text-sm mb-1">{item.label}</p>
              <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Kirim Pesan</h2>
            <p className="text-gray-500 text-sm mb-6">Kami akan membalas dalam 1×24 jam kerja.</p>

            {sent && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 mb-5 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pesan berhasil dikirim! Kami akan menghubungi Anda segera.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@contoh.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Subjek</label>
                <select
                  required
                  value={form.subjek}
                  onChange={(e) => setForm({ ...form, subjek: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white transition-all"
                >
                  <option value="">-- Pilih Subjek --</option>
                  <option>Informasi Pendaftaran</option>
                  <option>Informasi Jurusan</option>
                  <option>Informasi Beasiswa</option>
                  <option>Masalah Teknis Website</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Pesan</label>
                <textarea
                  required
                  value={form.pesan}
                  onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                  placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Map + Social */}
          <div className="lg:col-span-2 space-y-5">
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 h-56 flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-bold text-green-800">Universitas Handayani</p>
                <p className="text-green-700 text-xs mt-1">Jl. Adhyaksa Baru No. 1</p>
                <p className="text-green-700 text-xs">Panakkukang, Makassar</p>
              </div>
              <div className="p-4">
                <a
                  href="https://maps.google.com/?q=Makassar,Sulawesi+Selatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 border-2 border-green-600 text-green-700 font-semibold rounded-xl hover:bg-green-50 transition-colors text-sm"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-4">Media Sosial</h3>
              <div className="space-y-3">
                {[
                  { label: 'Instagram', handle: '@univ.handayani', color: 'bg-pink-100 text-pink-600' },
                  { label: 'Facebook', handle: 'Universitas Handayani Makassar', color: 'bg-blue-100 text-blue-600' },
                  { label: 'YouTube', handle: 'Handayani University', color: 'bg-red-100 text-red-600' },
                  { label: 'WhatsApp', handle: '+62 812-3456-7890', color: 'bg-green-100 text-green-600' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${s.color}`}>
                      {s.label.charAt(0)}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-700 text-sm">{s.label}</p>
                      <p className="text-gray-400 text-xs">{s.handle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-gray-500 text-sm mb-6">Temukan jawaban untuk pertanyaan umum seputar pendaftaran.</p>
          <div className="divide-y divide-gray-100">
            {FAQ.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left gap-4 hover:text-green-700 transition-colors"
                >
                  <span className="font-semibold text-gray-800 text-sm">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-green-600' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </main>

      <footer className="bg-gray-800 text-gray-400 py-6 px-4 text-center text-sm">
        © {new Date().getFullYear()} Universitas Handayani Makassar. All rights reserved.
      </footer>
    </div>
  )
}
