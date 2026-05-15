import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Lazy load non-critical resources
const lazyLoadResources = () => {
  // Load any non-critical resources here
  // This could include analytics, chat widgets, etc.
};

// Create root and render app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Lazy load resources after main content is rendered
if (document.readyState === 'complete') {
  lazyLoadResources();
} else {
  window.addEventListener('load', lazyLoadResources);
}