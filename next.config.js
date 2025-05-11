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
    ],
  },
  webpack: (config, { isServer }) => {
    // Disable cache for both client and server
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;