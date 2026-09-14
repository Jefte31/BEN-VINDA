import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Images, LoaderCircle } from 'lucide-react';
import { Destination } from '../types';
import { getDestinationPhotoQueries } from '../data/photoQueries';
import { CommonsPhoto, fetchCommonsPhotos } from '../lib/commonsPhotos';

interface DestinationGalleryProps {
  destination: Destination;
}

const BATCH_SIZE = 18;
const MAX_PHOTOS = 200;

export const DestinationGallery: React.FC<DestinationGalleryProps> = ({ destination }) => {
  const queries = useMemo(
    () => getDestinationPhotoQueries(destination.slug, destination.name, destination.pais),
    [destination.slug, destination.name, destination.pais],
  );
  const [photos, setPhotos] = useState<CommonsPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [exhausted, setExhausted] = useState(false);
  const offsets = useRef<Record<string, number>>({});
  const nextQuery = useRef(0);

  const loadMore = async (reset = false) => {
    if (loading || exhausted) return;
    setLoading(true);

    try {
      const existing = reset ? [] : photos;
      const seen = new Set(existing.map((photo) => photo.fullUrl || photo.url));
      const collected: CommonsPhoto[] = [];
      let attempts = 0;

      while (collected.length < BATCH_SIZE && attempts < queries.length * 2) {
        const query = queries[nextQuery.current % queries.length];
        nextQuery.current += 1;
        attempts += 1;

        const offset = offsets.current[query] ?? 0;
        const batch = await fetchCommonsPhotos(query, offset, 14);
        offsets.current[query] = offset + 14;

        for (const photo of batch) {
          const key = photo.fullUrl || photo.url;
          if (!seen.has(key)) {
            seen.add(key);
            collected.push(photo);
          }
          if (collected.length >= BATCH_SIZE) break;
        }
      }

      const merged = [...existing, ...collected].slice(0, MAX_PHOTOS);
      setPhotos(merged);
      setExhausted(collected.length === 0 || merged.length >= MAX_PHOTOS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    offsets.current = {};
    nextQuery.current = 0;
    setPhotos([]);
    setExhausted(false);
    setLoading(false);

    const timer = window.setTimeout(() => {
      void loadMore(true);
    }, 0);

    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destination.slug]);

  return (
    <section className="detail-section destination-gallery-section">
      <div className="section-heading gallery-heading">
        <span className="eyebrow">Galeria do destino</span>
        <h2>O lugar como ele realmente é.</h2>
        <p>Fotografias reais e condizentes com os pontos desta expedição. A galeria pode chegar a até 200 imagens e carrega aos poucos para manter o site rápido.</p>
      </div>

      {photos.length > 0 ? (
        <div className="destination-gallery-grid">
          {photos.map((photo, index) => (
            <a
              href={photo.pageUrl}
              target="_blank"
              rel="noreferrer"
              className={index % 7 === 0 ? 'destination-gallery-item featured' : 'destination-gallery-item'}
              key={`${photo.id}-${photo.url}`}
              title={`${photo.title}${photo.artist ? ` — ${photo.artist}` : ''}`}
            >
              <img src={photo.url} alt={`${destination.name}: ${photo.title}`} loading="lazy" decoding="async" referrerPolicy="no-referrer" />
              <span className="gallery-credit">
                {photo.artist ? `Foto: ${photo.artist}` : 'Wikimedia Commons'}{photo.license ? ` · ${photo.license}` : ''}
              </span>
            </a>
          ))}
        </div>
      ) : (
        <div className="gallery-empty-state">
          <Images size={26} />
          <span>{loading ? 'Buscando fotografias reais do destino…' : 'As fotografias deste destino estão sendo preparadas.'}</span>
        </div>
      )}

      {!exhausted && (
        <div className="gallery-more-wrap">
          <button className="gallery-more-button" onClick={() => void loadMore()} disabled={loading}>
            {loading ? <><LoaderCircle className="gallery-spinner" size={17} /> Carregando…</> : `Carregar mais fotos (${photos.length}/${MAX_PHOTOS})`}
          </button>
        </div>
      )}
    </section>
  );
};
