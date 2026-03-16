import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dhanush Kumar Portfolio',
    short_name: 'Dhanush',
    description: 'Personal portfolio of Dhanush Kumar',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
