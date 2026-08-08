// Farmbnc configuration
// -----------------------------------------------------------------------------
// 1. Copy this file to `config.js` (same folder as index.html).
// 2. Replace the placeholder values below with your Supabase project's
//    URL and public anon key (Project Settings -> API in the Supabase dashboard).
// 3. Do NOT commit your real config.js if the key should stay private.
//    (The anon key is safe to expose in client-side code, but keep this habit
//     so you don't accidentally commit other secrets later.)
//
// Until config.js exists with real values, the site runs in demo mode:
// it shows sample farm stays and disables sign-in / booking.
// -----------------------------------------------------------------------------

window.FARMBNC_CONFIG = {
  supabaseUrl: "https://YOUR_PROJECT_REF.supabase.co",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY"
};
