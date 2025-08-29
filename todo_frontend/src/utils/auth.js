import { supabase } from './supabase';
import { getURL } from './getURL';

export const handleAuthError = (error, routerPush) => {
  // eslint-disable-next-line no-console
  console.error('Authentication error:', error);
  const push = routerPush || ((path) => { window.location.assign(path); });

  if (!error) return;

  const msg = (error.message || '').toLowerCase();
  if (msg.includes('redirect')) {
    push('/auth/error?type=redirect');
  } else if (msg.includes('email')) {
    push('/auth/error?type=email');
  } else {
    push('/auth/error');
  }
};

export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${getURL()}auth/callback`,
    },
  });
  return { data, error };
};

export const signInWithPassword = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signInWithMagicLink = async (email) => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${getURL()}auth/callback`,
    },
  });
  return { data, error };
};

export const signInWithOAuth = async (provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${getURL()}auth/callback`,
    },
  });
  return { data, error };
};

export const resetPassword = async (email) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${getURL()}auth/reset-password`,
  });
  return { data, error };
};

export const signOut = () => supabase.auth.signOut();
