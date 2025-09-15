import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.REACT_APP_SUPABASE_ANON_KEY

console.log('[Supabase Client] Environment check:', {
  hasUrl: !!supabaseUrl,
  hasKey: !!supabaseAnonKey,
  url: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'undefined',
  keyLength: supabaseAnonKey ? supabaseAnonKey.length : 0
})

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('[Supabase] Missing environment variables!')
  console.error('Required variables:')
  console.error('- NEXT_PUBLIC_SUPABASE_URL:', !!supabaseUrl)
  console.error('- NEXT_PUBLIC_SUPABASE_ANON_KEY:', !!supabaseAnonKey)
  console.error('Create a .env.local file in the main-website directory with these variables.')
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    })
  : null

// Test the connection
if (supabase) {
  console.log('[Supabase] Client created successfully')
} else {
  console.error('[Supabase] Client creation failed - missing environment variables')
} 