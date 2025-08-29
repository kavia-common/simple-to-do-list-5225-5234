import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const EnvWarning = () => {
  const url = process.env.REACT_APP_SUPABASE_URL;
  const key = process.env.REACT_APP_SUPABASE_ANON_KEY;
  if (url && key) return null;
  return (
    <div style={{
      position: 'absolute',
      top: 60,
      right: 20,
      left: 20,
      margin: '0 auto',
      maxWidth: 800,
      background: '#fff8e1',
      color: '#5d4037',
      border: '1px solid #ffecb3',
      borderRadius: 8,
      padding: 12,
      fontSize: 14,
      boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
    }}>
      Supabase is not configured. Set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY in your environment. See SUPABASE_SETUP.md.
    </div>
  );
};

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <EnvWarning />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
