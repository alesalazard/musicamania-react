import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Renderiza las vistas según el routeo.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
