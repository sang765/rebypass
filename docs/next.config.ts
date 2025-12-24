import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/ReBypass',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
