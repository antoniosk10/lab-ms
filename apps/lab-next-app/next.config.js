/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  output: 'standalone',
  transpilePackages: ['lab-api'],
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {}
    }

    config.experiments.topLevelAwait = true
    return config
  },
}

module.exports = nextConfig
