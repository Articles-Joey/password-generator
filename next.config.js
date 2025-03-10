/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/menus',
        destination: '/the-restaurant/menus',
        permanent: true,
      },
      {
        source: '/the-patio',
        destination: '/the-restaurant/the-patio',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
