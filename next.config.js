/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.seekpng.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "./base.scss";`,
  },
};

module.exports = nextConfig;
