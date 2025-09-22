import type { NextConfig } from "next";

const nextConfig: NextConfig = {
// --- ADD THIS BLOCK ---
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // --- END OF ADDED BLOCK ---
};

export default nextConfig;
