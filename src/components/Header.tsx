import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export type SiteView = 'home' | 'expeditions';

interface HeaderProps {
  activeView: SiteView;
  onNavigate: (view: SiteView) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, onNavigate }) => {
  const [open, setOpen] = useState(false);

  const go = (view: SiteView) => {
    onNavigate(view);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <button className="brand-button" onClick={() => go('home')} aria-label="Ir para o início">
          <img src="/benviva-logo.svg" className="brand-logo" alt="Benviva" />
        </button>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <button className={activeView === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => go('home')}>Início</button>
          <button className={activeView === 'expeditions' ? 'nav-link active' : 'nav-link'} onClick={() => go('expeditions')}>Expedições</button>
          <button className="nav-link" onClick={() => { go('home'); setTimeout(() => document.getElementById('jeito-benviva')?.scrollIntoView({ behavior: 'smooth' }), 80); }}>O jeito Benviva</button>
        </nav>

        <button className="header-cta desktop-cta" onClick={() => go('expeditions')}>Ver expedições <ArrowUpRight size={17} /></button>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? <X size={23} /> : <Menu size={23} />}</button>
      </div>

      {open && (
        <div className="mobile-menu">
          <button onClick={() => go('home')}>Início</button>
          <button onClick={() => go('expeditions')}>Expedições</button>
          <button onClick={() => { go('home'); setTimeout(() => document.getElementById('jeito-benviva')?.scrollIntoView({ behavior: 'smooth' }), 80); }}>O jeito Benviva</button>
          <button className="mobile-menu-cta" onClick={() => go('expeditions')}>Descobrir expedições</button>
        </div>
      )}
    </header>
  );
};
