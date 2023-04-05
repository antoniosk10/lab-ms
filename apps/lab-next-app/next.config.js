// const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  transpilePackages: [
    'lab-api'
  ],
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, "../../")
  // },
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {}
    }

    config.experiments.topLevelAwait = true
    return config
  }
}

module.exports = nextConfig
