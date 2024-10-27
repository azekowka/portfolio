/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '', // Replace 'portfolio' with your repo name
};

export default nextConfig;
