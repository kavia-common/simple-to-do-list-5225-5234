import { useEffect } from 'react';
import { supabase } from '../utils/supabase';

export default function AuthCallback() {
  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSessionFromUrl({ storeSession: true });
        if (error) {
          // eslint-disable-next-line no-console
          console.error('Auth callback error:', error);
          window.location.assign('/auth/error');
          return;
        }
        if (data?.session) {
          window.location.assign('/'); // send to home or dashboard
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Auth callback processing failed:', e);
        window.location.assign('/auth/error');
      }
    };

    handleAuthCallback();
  }, []);

  return (
    <div style={{ padding: 24 }}>Processing authentication...</div>
  );
}
