/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    APP_KEY: "asda",
    sample: 'sample'
  },
};

module.exports = nextConfig;
