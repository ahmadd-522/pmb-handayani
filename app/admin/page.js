'use client'

import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

function StatusBadge({ status }) {
  const s = {
    pending:  'bg-yellow-100 text-yellow-700 border-yellow-200',
    diterima: 'bg-green-100 text-green-700 border-green-200',
    ditolak:  'bg-red-100 text-red-700 border-red-200',
  }
  const l = { pending: 'Pending', diterima: 'Diterima', ditolak: 'Ditolak' }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${s[status] || s.pending}`}>
      {l[status] || 'Pending'}
    </span>
  )
}

function BerkasItem({ label, url }) {
  if (!url) {
    return (
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-50 border border-gray-200">
        <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <div>
          <p className="text-xs font-medium text-gray-500">{label}</p>
          <p className="text-xs text-gray-400">Belum diupload</p>
        </div>
      </div>
    )
  }

  const isImg = /\.(jpg|jpeg|png|webp|gif)$/i.test(url)
  return (
    <div className="rounded-lg border border-green-200 overflow-hidden bg-green-50">
      {isImg && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={url} alt={label} className="w-full h-28 object-cover hover:opacity-90 transition-opacity" />
        </a>
      )}
      <div className="flex items-center justify-between px-3 py-2 gap-2">
        <div>
          <p className="text-xs font-semibold text-gray-700">{label}</p>
          <span className="text-xs text-green-600">✓ Terupload</span>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 bg-white border border-blue-200 px-2.5 py-1.5 rounded-lg transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Buka
        </a>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const router = useRouter()
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('semua')
  const [actionLoading, setActionLoading] = useState({})
  const [expanded, setExpanded] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    async function init() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/login'); return }
      const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single()
      if (profile?.role !== 'admin') { router.push('/dashboard'); return }
      await loadStudents()
    }
    init()
  }, [router])

  async function loadStudents() {
    setLoading(true)
    const { data, error: err } = await supabase
      .from('profiles')
      .select('*')
      .eq('role', 'mahasiswa')
      .order('created_at', { ascending: false })
    if (err) setError('Gagal memuat data.')
    else setStudents(data || [])
    setLoading(false)
  }

  async function updateStatus(id, newStatus) {
    setActionLoading((p) => ({ ...p, [id]: newStatus }))
    const { error: err } = await supabase.from('profiles').update({ status: newStatus }).eq('id', id)
    if (err) setError('Gagal update status.')
    else setStudents((prev) => prev.map((s) => s.id === id ? { ...s, status: newStatus } : s))
    setActionLoading((p) => ({ ...p, [id]: null }))
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const filtered = useMemo(() => {
    let list = students
    if (filterStatus !== 'semua') list = list.filter((s) => s.status === filterStatus)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter((s) =>
        s.full_name?.toLowerCase().includes(q) ||
        s.previous_school?.toLowerCase().includes(q) ||
        s.major_choice?.toLowerCase().includes(q)
      )
    }
    return list
  }, [students, search, filterStatus])

  const summary = useMemo(() => ({
    total: students.length,
    diterima: students.filter((s) => s.status === 'diterima').length,
    ditolak: students.filter((s) => s.status === 'ditolak').length,
    pending: students.filter((s) => s.status === 'pending').length,
  }), [students])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-green-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-gray-500">Memuat data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo UHM" className="w-10 h-10 object-contain"
              onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full items-center justify-center text-white font-bold text-sm hidden">UH</div>
            <div>
              <p className="font-bold text-green-700 text-sm leading-tight">Universitas Handayani Makassar</p>
              <p className="text-xs text-gray-400 leading-tight">Panel Admin — Penerimaan Mahasiswa Baru</p>
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Admin</h1>
          <p className="text-gray-500 text-sm mt-1">Kelola, verifikasi berkas, dan proses pendaftaran mahasiswa baru</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Pendaftar', value: summary.total, gradient: 'from-blue-500 to-blue-600', filter: 'semua' },
            { label: 'Diterima', value: summary.diterima, gradient: 'from-green-500 to-emerald-600', filter: 'diterima' },
            { label: 'Ditolak', value: summary.ditolak, gradient: 'from-red-500 to-red-600', filter: 'ditolak' },
            { label: 'Pending', value: summary.pending, gradient: 'from-yellow-400 to-yellow-500', filter: 'pending' },
          ].map((c) => (
            <button key={c.label} onClick={() => setFilterStatus(filterStatus === c.filter ? 'semua' : c.filter)}
              className={`bg-white rounded-2xl shadow-sm border-2 p-5 flex items-center gap-4 text-left transition-all hover:shadow-md ${filterStatus === c.filter ? 'border-green-400' : 'border-transparent'}`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-sm flex-shrink-0`}>
                <span className="text-white font-bold text-lg">{c.value}</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{c.label}</p>
                <p className="text-2xl font-bold text-gray-800">{c.value}</p>
              </div>
            </button>
          ))}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">{error}</div>
        )}

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-bold text-gray-800">Daftar Pendaftar</h2>
              <p className="text-xs text-gray-400 mt-0.5">{filtered.length} dari {students.length} pendaftar</p>
            </div>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama, sekolah, jurusan..."
                className="pl-9 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">No</th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Mahasiswa</th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Jurusan</th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Nilai</th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Berkas</th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Status</th>
                  <th className="text-center px-4 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-gray-400">
                      <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {search ? 'Tidak ada hasil pencarian' : 'Belum ada pendaftar'}
                    </td>
                  </tr>
                ) : (
                  filtered.map((student, idx) => {
                    const berkasCount = ['foto_url','berkas_ktp_url','berkas_ijazah_url','berkas_rapor_url'].filter((k) => student[k]).length
                    const isOpen = expanded === student.id
                    return (
                      <>
                        <tr key={student.id} className={`hover:bg-gray-50 transition-colors ${isOpen ? 'bg-green-50/50' : ''}`}>
                          <td className="px-4 py-3.5 text-gray-400 font-medium">{idx + 1}</td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center gap-3">
                              {student.foto_url ? (
                                <img src={student.foto_url} alt="" className="w-9 h-9 rounded-full object-cover border-2 border-green-200 flex-shrink-0" />
                              ) : (
                                <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                  {student.full_name?.charAt(0)?.toUpperCase() || '?'}
                                </div>
                              )}
                              <div>
                                <p className="font-semibold text-gray-800">{student.full_name || <span className="text-gray-400 italic text-xs">Belum diisi</span>}</p>
                                <p className="text-xs text-gray-400">{student.previous_school || '—'}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3.5 text-gray-600 text-xs max-w-[140px]">
                            {student.major_choice || <span className="text-gray-400 italic">—</span>}
                          </td>
                          <td className="px-4 py-3.5">
                            {student.grades != null
                              ? <span className="font-semibold text-gray-800">{parseFloat(student.grades).toFixed(2)}</span>
                              : <span className="text-gray-400 italic">—</span>}
                          </td>
                          <td className="px-4 py-3.5">
                            <button onClick={() => setExpanded(isOpen ? null : student.id)}
                              className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border transition-colors ${
                                berkasCount === 4
                                  ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'
                                  : berkasCount > 0
                                    ? 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100'
                                    : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'
                              }`}>
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                              </svg>
                              {berkasCount}/4
                              <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </td>
                          <td className="px-4 py-3.5"><StatusBadge status={student.status} /></td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center justify-center gap-2">
                              <button onClick={() => updateStatus(student.id, 'diterima')}
                                disabled={student.status === 'diterima' || !!actionLoading[student.id]}
                                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-colors">
                                {actionLoading[student.id] === 'diterima'
                                  ? <svg className="animate-spin h-3 w-3" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                  : <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>}
                                Terima
                              </button>
                              <button onClick={() => updateStatus(student.id, 'ditolak')}
                                disabled={student.status === 'ditolak' || !!actionLoading[student.id]}
                                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-colors">
                                {actionLoading[student.id] === 'ditolak'
                                  ? <svg className="animate-spin h-3 w-3" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                  : <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>}
                                Tolak
                              </button>
                            </div>
                          </td>
                        </tr>

                        {/* Expanded Berkas Row */}
                        {isOpen && (
                          <tr key={`${student.id}-berkas`}>
                            <td colSpan={7} className="px-6 py-5 bg-gray-50 border-b border-gray-100">
                              <div className="max-w-3xl">
                                <p className="text-sm font-bold text-gray-700 mb-3">
                                  Berkas Pendaftar: <span className="text-green-700">{student.full_name}</span>
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                  <BerkasItem label="Foto Diri (3×4)" url={student.foto_url} />
                                  <BerkasItem label="KTP / KK" url={student.berkas_ktp_url} />
                                  <BerkasItem label="Ijazah / SKL" url={student.berkas_ijazah_url} />
                                  <BerkasItem label="Rapor Sem. 1–5" url={student.berkas_rapor_url} />
                                </div>
                                {berkasCount < 4 && (
                                  <p className="text-xs text-yellow-600 mt-3 flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.072 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                    Pendaftar belum mengupload semua berkas ({4 - berkasCount} berkas belum lengkap)
                                  </p>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
