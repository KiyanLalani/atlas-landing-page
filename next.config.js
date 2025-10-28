/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'x.ai',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Disable cache for both client and server
    config.cache = false;
    return config;
  },
  // For static export with proper SEO
  generateMetadata: async () => {
    return {
      robots: {
        index: true,
        follow: true,
      }
    }
  }
};

module.exports = nextConfig;