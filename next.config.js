/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'localhost',
      'localhost:3000',
      'yourdomain.com',
      'api.yourdomain.com',
      'strapi.yourdomain.com',
    ],
  },
};

module.exports = nextConfig;
