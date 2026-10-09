import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Para que la página de galería tenga tiempo de reintentar 3 veces el fetch a la api de Strapi con sus 60s por intento
  staticPageGenerationTimeout: 190,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/db8b2c9gb/**', // Como estoy usando Cludinary, limito el permiso a mi cuenta mediante el path de la url
      },
    ],
  },
};

export default nextConfig;
