/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  transpilePackages: ['@fullcalendar'],
  turbopack: {}
};

module.exports = nextConfig;
