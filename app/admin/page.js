'use client'

import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

function StatusBadge({ status }) {
  const styles = {
    pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    diterima: 'bg-green-100 text-green-700 border-green-200',
    ditolak: 'bg-red-100 text-red-700 border-red-200',
  }
  const labels = { pending: 'Pending', diterima: 'Diterima', ditolak: 'Ditolak' }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${styles[status] || styles.pending}`}>
      {labels[status] || 'Pending'}
    </span>
  )
}

function SummaryCard({ label, value, color }) {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-emerald-600',
    red: 'from-red-500 to-red-600',
    yellow: 'from-yellow-400 to-yellow-500',
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[color]} flex items-center justify-center shadow-sm`}>
        <span className="text-white font-bold text-lg">{value}</span>
      </div>
      <div>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const router = useRouter()
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [actionLoading, setActionLoading] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    async function checkAdminAndLoad() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
        return
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single()

      if (profile?.role !== 'admin') {
        router.push('/dashboard')
        return
      }

      await loadStudents()
    }
    checkAdminAndLoad()
  }, [router])

  async function loadStudents() {
    setLoading(true)
    const { data, error: fetchError } = await supabase
      .from('profiles')
      .select('*')
      .eq('role', 'mahasiswa')
      .order('created_at', { ascending: false })

    if (fetchError) {
      setError('Gagal memuat data mahasiswa.')
    } else {
      setStudents(data || [])
    }
    setLoading(false)
  }

  async function updateStatus(id, newStatus) {
    setActionLoading((prev) => ({ ...prev, [id]: newStatus }))
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ status: newStatus })
      .eq('id', id)

    if (updateError) {
      setError('Gagal memperbarui status.')
    } else {
      setStudents((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
      )
    }
    setActionLoading((prev) => ({ ...prev, [id]: null }))
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const filtered = useMemo(() => {
    if (!search.trim()) return students
    const q = search.toLowerCase()
    return students.filter(
      (s) =>
        s.full_name?.toLowerCase().includes(q) ||
        s.previous_school?.toLowerCase().includes(q) ||
        s.major_choice?.toLowerCase().includes(q)
    )
  }, [students, search])

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
          <p className="text-gray-500">Memuat data admin...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
              UH
            </div>
            <div>
              <p className="font-bold text-green-700 text-sm leading-tight">Universitas Handayani Makassar</p>
              <p className="text-xs text-gray-400 leading-tight">Panel Admin — Penerimaan Mahasiswa Baru</p>
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Admin</h1>
          <p className="text-gray-500 text-sm mt-1">Kelola dan verifikasi pendaftaran mahasiswa baru</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <SummaryCard label="Total Pendaftar" value={summary.total} color="blue" />
          <SummaryCard label="Diterima" value={summary.diterima} color="green" />
          <SummaryCard label="Ditolak" value={summary.ditolak} color="red" />
          <SummaryCard label="Pending" value={summary.pending} color="yellow" />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {/* Table Card */}
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
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama, sekolah, jurusan..."
                className="pl-9 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">No</th>
                  <th className="text-left px-6 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Nama</th>
                  <th className="text-left px-6 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Asal Sekolah</th>
                  <th className="text-left px-6 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Pilihan Jurusan</th>
                  <th className="text-left px-6 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Nilai</th>
                  <th className="text-left px-6 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Status</th>
                  <th className="text-center px-6 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Aksi</th>
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
                  filtered.map((student, idx) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-400 font-medium">{idx + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {student.full_name ? student.full_name.charAt(0).toUpperCase() : '?'}
                          </div>
                          <span className="font-medium text-gray-800">{student.full_name || <span className="text-gray-400 italic">Belum diisi</span>}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {student.previous_school || <span className="text-gray-400 italic">—</span>}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {student.major_choice || <span className="text-gray-400 italic">—</span>}
                      </td>
                      <td className="px-6 py-4">
                        {student.grades != null ? (
                          <span className="font-semibold text-gray-800">{parseFloat(student.grades).toFixed(2)}</span>
                        ) : (
                          <span className="text-gray-400 italic">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={student.status} />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => updateStatus(student.id, 'diterima')}
                            disabled={student.status === 'diterima' || !!actionLoading[student.id]}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                          >
                            {actionLoading[student.id] === 'diterima' ? (
                              <svg className="animate-spin h-3 w-3" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                            ) : (
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                            Terima
                          </button>
                          <button
                            onClick={() => updateStatus(student.id, 'ditolak')}
                            disabled={student.status === 'ditolak' || !!actionLoading[student.id]}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                          >
                            {actionLoading[student.id] === 'ditolak' ? (
                              <svg className="animate-spin h-3 w-3" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                            ) : (
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )}
                            Tolak
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
