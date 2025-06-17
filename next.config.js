/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint configuration
  eslint: {
    // Disable ESLint during builds if you want to skip linting
    // ignoreDuringBuilds: true,
    
    // Or specify custom directories to lint
    dirs: ['app', 'components', 'lib', 'config', 'constants']
  },
  
  // TypeScript configuration
  typescript: {
    // Disable type checking during builds if needed
    // ignoreBuildErrors: true,
  },
  
  // Image optimization
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  
  // Experimental features
  experimental: {
    // Enable if you want to use app directory features
    appDir: true,
  },
  
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