/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    styledComponents: true,
  },
  images: {
    domains: ["loremflickr.com"],
  },
};

module.exports = nextConfig;
