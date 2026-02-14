import type { MetadataRoute } from 'next';

const BASE_URL = 'https://jrzzo.com';

const ROUTES = [
  '/',
  '/research',
  '/visualizer',
  '/music-whitepaper',
  '/frequency-atlas-visualizer',
  '/frequency-paper',
  '/rzzodue',
  '/open-editions',
  '/plots',
  '/whitepaper'
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1 : path === '/research' || path === '/rzzodue' ? 0.9 : 0.7
  }));
}
