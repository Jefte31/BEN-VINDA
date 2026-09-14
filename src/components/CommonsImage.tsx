import React, { useEffect, useMemo, useState } from 'react';
import { fetchFirstCommonsPhoto } from '../lib/commonsPhotos';

interface CommonsImageProps {
  query: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

const fallbackSvg = (label: string) => {
  const safe = label.replace(/[&<>"']/g, '');
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><rect width="1600" height="1000" fill="#620124"/><rect x="80" y="80" width="1440" height="840" rx="24" fill="#FBE9D1" opacity=".08"/><text x="800" y="500" text-anchor="middle" dominant-baseline="middle" fill="#FBE9D1" font-size="54" font-family="Georgia,serif">${safe}</text></svg>`)}`;
};

export const CommonsImage: React.FC<CommonsImageProps> = ({ query, alt, className, eager = false }) => {
  const placeholder = useMemo(() => fallbackSvg(alt || 'Benviva'), [alt]);
  const [src, setSrc] = useState<string>(placeholder);

  useEffect(() => {
    let cancelled = false;
    setSrc(placeholder);

    fetchFirstCommonsPhoto(query).then((photo) => {
      if (!cancelled && photo?.url) setSrc(photo.url);
    });

    return () => {
      cancelled = true;
    };
  }, [query, placeholder]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
    />
  );
};
