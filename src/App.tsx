import React, { useState } from 'react';
import { allDestinations } from './data/destinations';
import { Destination } from './types';
import { Header, SiteView } from './components/Header';
import { HomeView } from './components/HomeView';
import { ExpeditionsCatalogView } from './components/ExpeditionsCatalogView';
import { DestinationDetailView } from './components/DestinationDetailView';
import { Footer } from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState<SiteView>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [reservationMessage, setReservationMessage] = useState<string | null>(null);

  const navigate = (view: SiteView) => {
    setSelectedDestination(null);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectDestination = (destination: Destination) => {
    setSelectedDestination(destination);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reserve = (destination: Destination) => {
    setReservationMessage(`Perfeito. O próximo passo é conectar o canal oficial de reservas da Benviva para ${destination.name}.`);
    window.setTimeout(() => setReservationMessage(null), 6500);
  };

  return (
    <div className="app-root">
      <Header activeView={activeView} onNavigate={navigate} />

      {reservationMessage && <div className="site-toast" role="status">{reservationMessage}</div>}

      {selectedDestination ? (
        <DestinationDetailView
          destination={selectedDestination}
          onBack={() => {
            setSelectedDestination(null);
            setActiveView('expeditions');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onReserve={reserve}
        />
      ) : activeView === 'home' ? (
        <HomeView onNavigateToExpeditions={() => navigate('expeditions')} />
      ) : (
        <ExpeditionsCatalogView destinations={allDestinations} onSelectDestination={selectDestination} />
      )}

      <Footer onNavigateHome={() => navigate('home')} onNavigateExpeditions={() => navigate('expeditions')} />
    </div>
  );
}
