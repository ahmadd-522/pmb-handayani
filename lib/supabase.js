import { createClient } from '@supabase/supabase-js'

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabaseUrl = rawUrl.startsWith('https://') ? rawUrl : 'https://placeholder.supabase.co'
const supabaseAnonKey = rawKey.length > 20 ? rawKey : 'placeholder-anon-key-xxxxxxxxxxxxxxxx'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
