/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'localhost',
      'localhost:3000',
      'bashiruismail.io',
      'bashiruismail.com',
      'api.bashiruismail.io',
      'strapi.bashiruismail.io',
    ],
  },
};

module.exports = nextConfig;
