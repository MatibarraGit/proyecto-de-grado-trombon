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
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
