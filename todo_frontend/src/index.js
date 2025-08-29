import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { mountAuthRoutes } from './authRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AuthRoutes = mountAuthRoutes();
if (AuthRoutes) {
  root.render(
    <React.StrictMode>
      {AuthRoutes}
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
