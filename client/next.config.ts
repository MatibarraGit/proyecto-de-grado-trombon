import type { NextConfig } from "next";
import { STRAPI_MEDIA_HOSTNAME } from "./src/lib/mediaHost";

const nextConfig: NextConfig = {
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
        hostname: STRAPI_MEDIA_HOSTNAME,
        pathname: '/db8b2c9gb/**', // Como estoy usando Cludinary, limito el permiso a mi cuenta mediante el path de la url
      },
    ],
  },
};

export default nextConfig;
