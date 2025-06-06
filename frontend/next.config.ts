import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['placehold.co'],

    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'placehold.co',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
};

export default nextConfig;
