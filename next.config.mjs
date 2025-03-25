/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', 
  images: {
    unoptimized: true, // Disables Next.js image optimization for static export
  },
};

export default nextConfig;
