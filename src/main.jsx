import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'animate.css/animate.min.css'; // Import Animate.css
import wow from 'wowjs'; 
import App from './App.jsx';
import './index.css';

// Initialize WOW.js wowjs
if (typeof window !== 'undefined') {
  new wow.WOW().init();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
