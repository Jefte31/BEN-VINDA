import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateExpeditions: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome, onNavigateExpeditions }) => {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <span className="brand-wordmark footer-wordmark">Benviva</span>
          <p>Expedições para viver o mundo de um jeito diferente.</p>
        </div>
        <div className="footer-links">
          <span>Navegue</span>
          <button onClick={onNavigateHome}>Início</button>
          <button onClick={onNavigateExpeditions}>Expedições</button>
        </div>
        <div className="footer-links">
          <span>Benviva</span>
          <p>Grupos reduzidos</p>
          <p>Suporte antes e durante</p>
          <p>Curadoria de experiências</p>
        </div>
        <div className="footer-social">
          <span>Continue a viagem</span>
          <button aria-label="Instagram"><Instagram size={18} /> Instagram <ArrowUpRight size={15} /></button>
        </div>
      </div>
      <div className="site-shell footer-bottom"><span>© 2026 Benviva.</span><span>Vá viver.</span></div>
    </footer>
  );
};
