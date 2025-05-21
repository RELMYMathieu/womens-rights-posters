import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './animations.css'; // Import our custom animations
import App from './App';

// Make sure the page starts at the top
if (typeof window !== 'undefined') {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);