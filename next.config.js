const SITE = require('./src/config.js').SITE;

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public'
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',

  //Compilador SWC de Rust
  swcMinify: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com'
      }
    ]
  }
  // experimental: { appDir: true },
});
