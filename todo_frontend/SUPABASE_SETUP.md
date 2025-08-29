# IMPORTANT: Supabase Configuration Required

1) Set these environment variables (Create React App):
- REACT_APP_SUPABASE_URL=https://yzbcnnjuzfuhtvsxazhn.supabase.co
- REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
- REACT_APP_SITE_URL=http://localhost:3000

2) In Supabase Dashboard:
- Authentication > URL Configuration
  - Site URL: your dev/prod base URL
  - Redirect URLs:
    * http://localhost:3000/**
    * https://your-production-domain.com/**
- (Optional) Update Email Templates

3) Database schema:
The automation will create a todos table and policies. See assets/supabase.md for the exact SQL.

4) Run the app:
- npm install
- npm start

If you change environment variables, restart the dev server.
