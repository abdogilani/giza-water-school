
/* Supabase public client configuration */
window.SUPABASE_URL = 'https://cghbvfllsxfuutppmmqq.supabase.co';

window.SUPABASE_ANON_KEY = 'sb_publishable_lrSTHbt7ryEilr9yxl03_w_SEg3wf_T';

window.schoolSupabase = null;

if (
  window.supabase &&
  window.SUPABASE_URL.startsWith('https://') &&
  window.SUPABASE_ANON_KEY.startsWith('sb_publishable_')
) {
  window.schoolSupabase = window.supabase.createClient(
    window.SUPABASE_URL,
    window.SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    }
  );
}
