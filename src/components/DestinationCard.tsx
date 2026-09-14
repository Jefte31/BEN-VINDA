import React from 'react';
import { ArrowUpRight, MapPin, Users } from 'lucide-react';
import { Destination } from '../types';
import { CommonsImage } from './CommonsImage';
import { getDestinationPhotoQueries } from '../data/photoQueries';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onSelect }) => {
  const photoQuery = getDestinationPhotoQueries(destination.slug, destination.name, destination.pais)[0];

  return (
    <article className="expedition-card" onClick={() => onSelect(destination)}>
      <div className="expedition-image-wrap">
        <CommonsImage query={photoQuery} alt={destination.name} className="expedition-image" />
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
