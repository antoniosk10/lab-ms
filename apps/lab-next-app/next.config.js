/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
      'lab-api'
  ],
  webpack: (config, context) => {
    if(!config.experiments) {
      config.experiments = {}
    }

    config.experiments.topLevelAwait = true
    return config
  }
}

module.exports = nextConfig
