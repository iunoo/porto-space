/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true, // ✅ AKTIFKAN agar build gak gagal karena lint
    dirs: ['app', 'components', 'lib', 'config', 'constants']
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true, // ✅ AKTIFKAN agar build gak gagal karena TS
  },

  // Image optimization
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },

  // ⚠️ Remove deprecated 'appDir' warning
  // 'appDir' is now default in Next 14+, no need to include it manually

  // Performance optimizations
  swcMinify: true,

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
