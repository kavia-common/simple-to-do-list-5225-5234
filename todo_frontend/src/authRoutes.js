import React from 'react';
import AuthCallback from './components/AuthCallback';

// This is a simple example to mount the callback route without adding a router lib.
// In real apps, prefer react-router and add a Route path="/auth/callback".
export const mountAuthRoutes = () => {
  const path = window.location.pathname;
  if (path === '/auth/callback') {
    return <AuthCallback />;
  }
  return null;
};
