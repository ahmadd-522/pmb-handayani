'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const JURUSAN_OPTIONS = [
  'S1 - Sistem Komputer',
  'S1 - Teknik Informatika',
  'S1 - Sistem Informasi',
  'S1 - Pendidikan Teknologi Informasi',
  'S1 - Hukum',
  'S1 - Kewirausahaan',
  'S1 - Ilmu Sosial',
  'S2 - Sistem Komputer',
  'D3 - Manajemen Informatika',
  'D3 - Komputerisasi Akuntansi',
]

const BERKAS_LIST = [
  { key: 'foto_url',         label: 'Foto Diri (3×4)',      accept: 'image/*',       icon: '🖼️', hint: 'JPG/PNG, latar merah' },
  { key: 'berkas_ktp_url',   label: 'KTP / Kartu Keluarga', accept: 'image/*,.pdf',  icon: '🪪', hint: 'JPG, PNG, atau PDF' },
  { key: 'berkas_ijazah_url',label: 'Ijazah / SKL',         accept: 'image/*,.pdf',  icon: '📜', hint: 'JPG, PNG, atau PDF' },
  { key: 'berkas_rapor_url', label: 'Rapor Semester 1–5',   accept: 'image/*,.pdf',  icon: '📋', hint: 'JPG, PNG, atau PDF' },
]

function StatusCard({ status }) {
  const config = {
    pending: {
      bg: 'bg-yellow-50 border-yellow-300',
      icon: 'bg-yellow-100 text-yellow-600',
      title: 'Menunggu Verifikasi',
      desc: 'Berkas pendaftaran Anda sedang ditinjau tim admisi. Pastikan semua berkas sudah diupload.',
      badge: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      label: 'Pending',
    },
    diterima: {
      bg: 'bg-green-50 border-green-300',
      icon: 'bg-green-100 text-green-600',
      title: 'Selamat! Anda Diterima 🎉',
      desc: 'Anda telah diterima sebagai mahasiswa baru Universitas Handayani Makassar. Silakan lakukan herregistrasi.',
      badge: 'bg-green-100 text-green-700 border-green-200',
      label: 'Diterima',
    },
    ditolak: {
      bg: 'bg-red-50 border-red-300',
      icon: 'bg-red-100 text-red-600',
      title: 'Pendaftaran Tidak Diterima',
      desc: 'Mohon maaf, pendaftaran Anda tidak dapat diterima. Anda dapat mendaftar kembali di periode berikutnya.',
      badge: 'bg-red-100 text-red-700 border-red-200',
      label: 'Ditolak',
    },
  }
  const c = config[status] || config.pending
  const icons = {
    diterima: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    pending:  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    ditolak:  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  }
  return (
    <div className={`rounded-2xl border-2 ${c.bg} p-5 flex items-start gap-4`}>
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${c.icon}`}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icons[status] || icons.pending}</svg>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-bold text-gray-800">{c.title}</h3>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${c.badge}`}>{c.label}</span>
        </div>
        <p className="text-sm text-gray-600">{c.desc}</p>
      </div>
    </div>
  )
}

function UploadCard({ label, hint, accept, fieldKey, currentUrl, userId, isImage, onDone }) {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef()

  async function handleFile(e) {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    setError('')
    setProgress('Mengupload...')

    try {
      const ext = file.name.split('.').pop().toLowerCase()
      const path = `${userId}/${fieldKey}.${ext}`

      const { error: upErr } = await supabase.storage
        .from('pmb-uploads')
        .upload(path, file, { upsert: true, contentType: file.type })

      if (upErr) throw upErr

      const { data: { publicUrl } } = supabase.storage
        .from('pmb-uploads')
        .getPublicUrl(path)

      const { error: dbErr } = await supabase
        .from('profiles')
        .update({ [fieldKey]: publicUrl })
        .eq('id', userId)

      if (dbErr) throw dbErr

      setProgress('')
      onDone(fieldKey, publicUrl)
    } catch (err) {
      setError(err.message || 'Upload gagal, coba lagi.')
      setProgress('')
    }
    setUploading(false)
    e.target.value = ''
  }

  const isUploaded = !!currentUrl
  const isImg = isImage || (currentUrl && /\.(jpg|jpeg|png|webp|gif)$/i.test(currentUrl))

  return (
    <div className={`rounded-xl border-2 p-4 transition-all ${isUploaded ? 'border-green-300 bg-green-50' : 'border-dashed border-gray-300 bg-gray-50'}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <p className="font-semibold text-sm text-gray-800">{label}</p>
          <p className="text-xs text-gray-400 mt-0.5">{hint}</p>
        </div>
        {isUploaded && (
          <span className="flex-shrink-0 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full border border-green-200">✓ Terupload</span>
        )}
      </div>

      {/* Preview */}
      {currentUrl && (
        <div className="mb-3">
          {isImg ? (
            <a href={currentUrl} target="_blank" rel="noopener noreferrer">
              <img src={currentUrl} alt={label} className="h-24 w-full object-cover rounded-lg border border-green-200 hover:opacity-90 transition-opacity" />
            </a>
          ) : (
            <a href={currentUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Lihat Berkas (klik untuk buka)
            </a>
          )}
        </div>
      )}

      {error && <p className="text-xs text-red-600 mb-2">{error}</p>}

      <input ref={inputRef} type="file" accept={accept} onChange={handleFile} className="hidden" />
      <button
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className={`w-full py-2 text-sm font-medium rounded-lg border transition-all ${
          isUploaded
            ? 'border-green-400 text-green-700 bg-white hover:bg-green-50'
            : 'border-gray-300 text-gray-600 bg-white hover:border-green-400 hover:text-green-700'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {uploading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {progress}
          </span>
        ) : isUploaded ? '🔄 Ganti File' : '📎 Upload File'}
      </button>
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
    full_name: '', birth_place: '', birth_date: '',
    address: '', phone: '', previous_school: '',
    major_choice: '', grades: '',
  })

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/login'); return }
      setUser(session.user)
      const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).single()
      if (data) {
        setProfile(data)
        setForm({
          full_name: data.full_name || '',
          birth_place: data.birth_place || '',
          birth_date: data.birth_date || '',
          address: data.address || '',
          phone: data.phone || '',
          previous_school: data.previous_school || '',
          major_choice: data.major_choice || '',
          grades: data.grades || '',
        })
      }
      setLoading(false)
    }
    load()
  }, [router])

  async function handleSave(e) {
    e.preventDefault()
    setSaving(true); setError(''); setSuccess('')
    const { error: err } = await supabase.from('profiles').update({
      full_name: form.full_name,
      birth_place: form.birth_place,
      birth_date: form.birth_date || null,
      address: form.address,
      phone: form.phone,
      previous_school: form.previous_school,
      major_choice: form.major_choice,
      grades: form.grades ? parseFloat(form.grades) : null,
    }).eq('id', user.id)

    if (err) { setError('Gagal menyimpan data.') }
    else {
      setProfile((p) => ({ ...p, ...form }))
      setSuccess('Profil berhasil disimpan!')
      setEditing(false)
      setTimeout(() => setSuccess(''), 3000)
    }
    setSaving(false)
  }

  function handleUploadDone(fieldKey, url) {
    setProfile((p) => ({ ...p, [fieldKey]: url }))
    setSuccess('Berkas berhasil diupload!')
    setTimeout(() => setSuccess(''), 3000)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const uploadedCount = BERKAS_LIST.filter((b) => profile?.[b.key]).length

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo UHM" className="w-10 h-10 object-contain" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full items-center justify-center text-white font-bold text-sm hidden">UH</div>
            <div>
              <p className="font-bold text-green-700 text-sm leading-tight">Universitas Handayani Makassar</p>
              <p className="text-xs text-gray-400 leading-tight">Dashboard Mahasiswa</p>
            </div>
          </div>
          <button onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-600 border border-gray-200 hover:border-red-300 rounded-lg transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Keluar
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Selamat datang, {profile?.full_name || user?.email?.split('@')[0]}! 👋
          </h1>
          <p className="text-gray-500 text-sm mt-1">Lengkapi profil dan upload seluruh berkas untuk memproses pendaftaranmu.</p>
        </div>

        <StatusCard status={profile?.status || 'pending'} />

        {/* Progress Berkas */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-gray-700 text-sm">Kelengkapan Berkas</p>
            <p className="text-sm font-bold text-green-700">{uploadedCount}/{BERKAS_LIST.length} berkas</p>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${(uploadedCount / BERKAS_LIST.length) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {uploadedCount === BERKAS_LIST.length
              ? '✅ Semua berkas sudah diupload. Menunggu verifikasi admin.'
              : `Upload ${BERKAS_LIST.length - uploadedCount} berkas lagi untuk melengkapi pendaftaran.`}
          </p>
        </div>

        {(error || success) && (
          <div className={`rounded-lg px-4 py-3 text-sm flex items-center gap-2 ${error ? 'bg-red-50 border border-red-200 text-red-700' : 'bg-green-50 border border-green-200 text-green-700'}`}>
            {success && <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
            {error || success}
          </div>
        )}

        {/* Upload Berkas */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="font-bold text-gray-800">Upload Foto & Berkas</h2>
            <p className="text-xs text-gray-400 mt-0.5">Admin akan memeriksa berkas ini untuk verifikasi pendaftaran Anda</p>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BERKAS_LIST.map((b) => (
              <UploadCard
                key={b.key}
                label={b.label}
                hint={b.hint}
                accept={b.accept}
                fieldKey={b.key}
                currentUrl={profile?.[b.key]}
                userId={user?.id}
                isImage={b.key === 'foto_url'}
                onDone={handleUploadDone}
              />
            ))}
          </div>
        </div>

        {/* Profile Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-gray-800">Data Diri Pendaftar</h2>
              <p className="text-xs text-gray-400 mt-0.5">Pastikan data sesuai dokumen resmi</p>
            </div>
            {!editing && (
              <button onClick={() => setEditing(true)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
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
                <input type="text" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                  disabled={!editing} placeholder="Nama lengkap sesuai KTP"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm disabled:bg-gray-50 disabled:text-gray-500 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tempat Lahir</label>
                <input type="text" value={form.birth_place} onChange={(e) => setForm({ ...form, birth_place: e.target.value })}
                  disabled={!editing} placeholder="Kota kelahiran"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm disabled:bg-gray-50 disabled:text-gray-500 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tanggal Lahir</label>
                <input type="date" value={form.birth_date} onChange={(e) => setForm({ ...form, birth_date: e.target.value })}
                  disabled={!editing}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm disabled:bg-gray-50 disabled:text-gray-500 transition-all" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Alamat Lengkap</label>
                <textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                  disabled={!editing} rows={3} placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota, Provinsi"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm disabled:bg-gray-50 disabled:text-gray-500 resize-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">No. HP / WhatsApp</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  disabled={!editing} placeholder="08xxxxxxxxxx"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm disabled:bg-gray-50 disabled:text-gray-500 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Asal Sekolah (SMA/SMK/MA)</label>
                <input type="text" value={form.previous_school} onChange={(e) => setForm({ ...form, previous_school: e.target.value })}
                  disabled={!editing} placeholder="Nama sekolah asal"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm disabled:bg-gray-50 disabled:text-gray-500 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Pilihan Jurusan</label>
                <select value={form.major_choice} onChange={(e) => setForm({ ...form, major_choice: e.target.value })}
                  disabled={!editing}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm disabled:bg-gray-50 disabled:text-gray-500 bg-white transition-all">
                  <option value="">-- Pilih Jurusan --</option>
                  {JURUSAN_OPTIONS.map((j) => <option key={j} value={j}>{j}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nilai Rata-rata Rapor</label>
                <input type="number" min="0" max="100" step="0.01" value={form.grades}
                  onChange={(e) => setForm({ ...form, grades: e.target.value })}
                  disabled={!editing} placeholder="Contoh: 85.50"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm disabled:bg-gray-50 disabled:text-gray-500 transition-all" />
              </div>
            </div>

            {editing && (
              <div className="flex gap-3 mt-6 pt-5 border-t border-gray-100">
                <button type="submit" disabled={saving}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed">
                  {saving ? (
                    <><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Menyimpan...</>
                  ) : (
                    <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Simpan Perubahan</>
                  )}
                </button>
                <button type="button" onClick={() => { setEditing(false); setError('') }}
                  className="px-6 py-3 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
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
