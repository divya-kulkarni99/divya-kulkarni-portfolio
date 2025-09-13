import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  images: {
    // Required for static export when using next/image
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'www.cursor.com',
      },
      {
        protocol: 'https',
        hostname: 'lobehub.com',
      },
    ],
  },
  // Enable static HTML export for GitHub Pages
  output: 'export',
};

export default nextConfig;
