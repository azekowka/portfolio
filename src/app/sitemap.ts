import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://azekowka.me/',
      lastModified: new Date('2025-04-15'),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}