import { createClient } from '@supabase/supabase-js'
import { getEnv } from '../utils/env'

const supabaseUrl = getEnv('SUPABASE_URL')
const supabaseAnonKey = getEnv('SUPABASE_ANON_KEY')

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltan SUPABASE_URL/SUPABASE_ANON_KEY (también acepta VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY)')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
