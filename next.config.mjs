/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '', // Replace with your repo name
};

export default nextConfig;
