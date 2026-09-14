import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { SiteErrorBoundary } from './components/SiteErrorBoundary';
import './index.css';
import './brand.css';
import './media.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteErrorBoundary>
      <App />
    </SiteErrorBoundary>
  </StrictMode>,
);
