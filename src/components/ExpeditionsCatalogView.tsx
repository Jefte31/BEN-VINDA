import React, { useMemo, useState } from 'react';
import { Destination } from '../types';
import { DestinationCard } from './DestinationCard';

interface ExpeditionsCatalogViewProps {
  destinations: Destination[];
  onSelectDestination: (destination: Destination) => void;
}

type Filter = 'Todas' | 'Brasil' | 'Internacionais';

export const ExpeditionsCatalogView: React.FC<ExpeditionsCatalogViewProps> = ({ destinations, onSelectDestination }) => {
  const [filter, setFilter] = useState<Filter>('Todas');

  const filtered = useMemo(() => {
    if (filter === 'Todas') return destinations;
    if (filter === 'Brasil') return destinations.filter((d) => d.pais.includes('Brasil'));
    return destinations.filter((d) => !d.pais.includes('Brasil'));
  }, [destinations, filter]);

  return (
    <div className="catalog-page">
      <section className="catalog-hero">
        <div className="site-shell">
          <span className="eyebrow light">Expedições Benviva</span>
          <h1>Escolha menos pelo mapa.<br /><em>Mais pelo que você quer viver.</em></h1>
          <p>Grupos pequenos, destinos que despertam algo e todo o cuidado para você simplesmente ir.</p>
        </div>
      </section>

      <section className="catalog-content">
        <div className="site-shell">
          <div className="filter-row" role="tablist" aria-label="Filtros de expedições">
            {(['Todas', 'Brasil', 'Internacionais'] as Filter[]).map((item) => (
              <button key={item} className={filter === item ? 'filter-pill active' : 'filter-pill'} onClick={() => setFilter(item)}>{item}</button>
            ))}
          </div>

          <div className="expedition-grid">
            {filtered.map((destination) => <DestinationCard key={destination.id} destination={destination} onSelect={onSelectDestination} />)}
          </div>
        </div>
      </section>
    </div>
  );
};
