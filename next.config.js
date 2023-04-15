/** @type {import('next').NextConfig} */

const withCSS = require('@zeit/next-css')
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
}

module.exports = nextConfig
