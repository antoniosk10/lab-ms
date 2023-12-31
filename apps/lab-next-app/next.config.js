/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  transpilePackages: [],
  output: 'standalone',
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {}
    }

    config.experiments.topLevelAwait = true
    return config
  },
}

module.exports = nextConfig
