export interface CommonsPhoto {
  id: number;
  title: string;
  url: string;
  fullUrl: string;
  pageUrl: string;
  artist: string;
  license: string;
}

const BAD_TITLE_WORDS = /(map|flag|logo|coat of arms|locator|diagram|satellite|icon|seal|emblem|route|mapa|bandeira)/i;
const PHOTO_EXT = /\.(jpe?g|png|webp)$/i;

const stripHtml = (value?: string) => {
  if (!value) return '';
  return value.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
};

export async function fetchCommonsPhotos(query: string, offset = 0, limit = 24): Promise<CommonsPhoto[]> {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: query,
    gsrnamespace: '6',
    gsrlimit: String(Math.min(limit, 50)),
    gsroffset: String(offset),
    prop: 'imageinfo',
    iiprop: 'url|mime|extmetadata',
    iiurlwidth: '1800',
    format: 'json',
    formatversion: '2',
    origin: '*',
  });

  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params.toString()}`);
  if (!response.ok) throw new Error(`Wikimedia Commons: ${response.status}`);

  const data = await response.json();
  const pages = Array.isArray(data?.query?.pages) ? data.query.pages : [];

  return pages
    .map((page: any) => {
      const info = page?.imageinfo?.[0];
      const title = String(page?.title ?? '').replace(/^File:/, '');
      const meta = info?.extmetadata ?? {};
      return {
        id: Number(page?.pageid ?? 0),
        title,
        url: info?.thumburl || info?.url || '',
        fullUrl: info?.url || info?.thumburl || '',
        pageUrl: info?.descriptionurl || `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(title)}`,
        artist: stripHtml(meta?.Artist?.value),
        license: stripHtml(meta?.LicenseShortName?.value || meta?.UsageTerms?.value),
        mime: String(info?.mime ?? ''),
      };
    })
    .filter((photo: any) => photo.url && /^image\//.test(photo.mime) && PHOTO_EXT.test(photo.url.split('?')[0]) && !BAD_TITLE_WORDS.test(photo.title))
    .map(({ mime, ...photo }: any) => photo as CommonsPhoto);
}

const heroCache = new Map<string, CommonsPhoto | null>();
const inFlight = new Map<string, Promise<CommonsPhoto | null>>();

export async function fetchFirstCommonsPhoto(query: string): Promise<CommonsPhoto | null> {
  if (heroCache.has(query)) return heroCache.get(query) ?? null;
  if (inFlight.has(query)) return inFlight.get(query)!;

  const promise = fetchCommonsPhotos(query, 0, 12)
    .then((photos) => photos[0] ?? null)
    .catch(() => null)
    .then((photo) => {
      heroCache.set(query, photo);
      inFlight.delete(query);
      return photo;
    });

  inFlight.set(query, promise);
  return promise;
}
