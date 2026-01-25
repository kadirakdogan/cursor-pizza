/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Debug mode için source maps (development)
  productionBrowserSourceMaps: false,
  // Development için daha detaylı hata mesajları
  reactStrictMode: true,
  // TypeScript hatalarını build'de göster
  typescript: {
    ignoreBuildErrors: false,
  },
  // ESLint hatalarını build'de göster
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
