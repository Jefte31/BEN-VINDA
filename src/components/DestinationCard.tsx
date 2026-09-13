import React from 'react';
import { ArrowUpRight, MapPin, Users } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onSelect }) => {
  return (
    <article className="expedition-card" onClick={() => onSelect(destination)}>
      <div className="expedition-image-wrap">
        <img src={destination.heroImage} alt={destination.name} className="expedition-image" referrerPolicy="no-referrer" />
        <span className="expedition-number">{String(destination.orderNumber).padStart(2, '0')}</span>
        <span className="expedition-group"><Users size={13} /> até {destination.grupoMaximo}</span>
      </div>
      <div className="expedition-card-body">
        <div className="location-line"><MapPin size={14} /> {destination.pais || destination.country}</div>
        <h3>{destination.name}</h3>
        <p className="expedition-profile">{destination.perfilExperiencia}</p>
        <p className="expedition-subtitle">{destination.subtitle}</p>
        <div className="expedition-meta"><span>{destination.duracao}</span><span>{destination.difficulty}</span></div>
        <button className="text-link" onClick={(event) => { event.stopPropagation(); onSelect(destination); }}>
          Conhecer esta expedição <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
};
