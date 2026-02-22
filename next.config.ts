import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Remove eslint configuration - it's deprecated */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;