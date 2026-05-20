'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const JURUSAN_OPTIONS = [
  // S1
  'S1 - Sistem Komputer',
  'S1 - Teknik Informatika',
  'S1 - Sistem Informasi',
  'S1 - Pendidikan Teknologi Informasi',
  'S1 - Hukum',
  'S1 - Kewirausahaan',
  'S1 - Ilmu Sosial',
  // S2
  'S2 - Sistem Komputer',
  // D3
  'D3 - Manajemen Informatika',
  'D3 - Komputerisasi Akuntansi',
]

function StatusCard({ status }) {
  const config = {
    pending: {
      bg: 'bg-yellow-50 border-yellow-200',
      icon: 'bg-yellow-100 text-yellow-600',
      title: 'Menunggu Verifikasi',
      desc: 'Berkas pendaftaran Anda sedang ditinjau oleh tim admisi. Harap lengkapi profil Anda dan tunggu konfirmasi.',
      badge: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      label: 'Pending',
    },
    diterima: {
      bg: 'bg-green-50 border-green-200',
      icon: 'bg-green-100 text-green-600',
      title: 'Selamat! Anda Diterima',
      desc: 'Anda telah diterima sebagai mahasiswa baru Universitas Handayani Makassar. Silakan ikuti langkah registrasi ulang.',
      badge: 'bg-green-100 text-green-700 border-green-200',
      label: 'Diterima',
    },
    ditolak: {
      bg: 'bg-red-50 border-red-200',
      icon: 'bg-red-100 text-red-600',
      title: 'Pendaftaran Tidak Diterima',
      desc: 'Mohon maaf, pendaftaran Anda tidak dapat diterima pada periode ini. Anda dapat mendaftar kembali pada periode berikutnya.',
      badge: 'bg-red-100 text-red-700 border-red-200',
      label: 'Ditolak',
    },
  }

  const c = config[status] || config.pending

  return (
    <div className={`rounded-2xl border-2 ${c.bg} p-6 flex items-start gap-4`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c.icon}`}>
        {status === 'diterima' && (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        {status === 'pending' && (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        {status === 'ditolak' && (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-bold text-gray-800">{c.title}</h3>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${c.badge}`}>
            {c.label}
          </span>
        </div>
        <p className="text-sm text-gray-600">{c.desc}</p>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editing, setEditing] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [form, setForm] = useState({
    full_name: '',
    birth_place: '',
    birth_date: '',
    address: '',
    phone: '',
    previous_school: '',
    major_choice: '',
    grades: '',
  })

  useEffect(() => {
    async function loadData() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
        return
      }
      setUser(session.user)

      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()

      if (profileData) {
        setProfile(profileData)
        setForm({
          full_name: profileData.full_name || '',
          birth_place: profileData.birth_place || '',
          birth_date: profileData.birth_date || '',
          address: profileData.address || '',
          phone: profileData.phone || '',
          previous_school: profileData.previous_school || '',
          major_choice: profileData.major_choice || '',
          grades: profileData.grades || '',
        })
      }
      setLoading(false)
    }
    loadData()
  }, [router])

  async function handleSave(e) {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSuccess('')

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        full_name: form.full_name,
        birth_place: form.birth_place,
        birth_date: form.birth_date || null,
        address: form.address,
        phone: form.phone,
        previous_school: form.previous_school,
        major_choice: form.major_choice,
        grades: form.grades ? parseFloat(form.grades) : null,
      })
      .eq('id', user.id)

    if (updateError) {
      setError('Gagal menyimpan data. Silakan coba lagi.')
    } else {
      setProfile({ ...profile, ...form })
      setSuccess('Profil berhasil disimpan!')
      setEditing(false)
      setTimeout(() => setSuccess(''), 3000)
    }
    setSaving(false)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-green-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-gray-500">Memuat dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
              UH
            </div>
            <div>
              <p className="font-bold text-green-700 text-sm leading-tight">Universitas Handayani</p>
              <p className="text-xs text-gray-400 leading-tight">Dashboard Mahasiswa</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-600 border border-gray-200 hover:border-red-300 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Keluar
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Welcome */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Selamat datang, {profile?.full_name || user?.email?.split('@')[0]}! 👋
          </h1>
          <p className="text-gray-500 text-sm mt-1">Lengkapi profilmu untuk melanjutkan proses pendaftaran.</p>
        </div>

        {/* Status Card */}
        <StatusCard status={profile?.status || 'pending'} />

        {/* Alerts */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {success}
          </div>
        )}

        {/* Profile Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-gray-800">Data Diri Pendaftar</h2>
              <p className="text-xs text-gray-400 mt-0.5">Pastikan data yang diisi sesuai dengan dokumen resmi</p>
            </div>
            {!editing && (
              <button
                onClick={() => setEditing(true)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Profil
              </button>
            )}
          </div>

          <form onSubmit={handleSave} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap</label>
                <input
                  type="text"
                  value={form.full_name}
                  onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                  disabled={!editing}
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tempat Lahir</label>
                <input
                  type="text"
                  value={form.birth_place}
                  onChange={(e) => setForm({ ...form, birth_place: e.target.value })}
                  disabled={!editing}
                  placeholder="Kota kelahiran"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tanggal Lahir</label>
                <input
                  type="date"
                  value={form.birth_date}
                  onChange={(e) => setForm({ ...form, birth_date: e.target.value })}
                  disabled={!editing}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Alamat Lengkap</label>
                <textarea
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  disabled={!editing}
                  placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota/Kabupaten, Provinsi"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">No. HP / WhatsApp</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  disabled={!editing}
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Asal Sekolah (SMA/SMK)</label>
                <input
                  type="text"
                  value={form.previous_school}
                  onChange={(e) => setForm({ ...form, previous_school: e.target.value })}
                  disabled={!editing}
                  placeholder="Nama sekolah asal"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Pilihan Jurusan</label>
                <select
                  value={form.major_choice}
                  onChange={(e) => setForm({ ...form, major_choice: e.target.value })}
                  disabled={!editing}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500 bg-white"
                >
                  <option value="">-- Pilih Jurusan --</option>
                  {JURUSAN_OPTIONS.map((j) => (
                    <option key={j} value={j}>{j}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nilai Rata-rata Rapor</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={form.grades}
                  onChange={(e) => setForm({ ...form, grades: e.target.value })}
                  disabled={!editing}
                  placeholder="Contoh: 85.50"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            </div>

            {editing && (
              <div className="flex gap-3 mt-6 pt-5 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {saving ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Menyimpan...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Simpan Perubahan
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditing(false)
                    setError('')
                    setForm({
                      full_name: profile?.full_name || '',
                      birth_place: profile?.birth_place || '',
                      birth_date: profile?.birth_date || '',
                      address: profile?.address || '',
                      phone: profile?.phone || '',
                      previous_school: profile?.previous_school || '',
                      major_choice: profile?.major_choice || '',
                      grades: profile?.grades || '',
                    })
                  }}
                  className="px-6 py-3 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Batal
                </button>
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  )
}
