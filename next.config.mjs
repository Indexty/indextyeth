/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["aceternity.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
