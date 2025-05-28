/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['swiftlogisticsng.com'],
    unoptimized: process.env.NODE_ENV === 'production', // For Netlify static export
  },
  output: 'export', // Needed for Netlify static site generation
}

module.exports = nextConfig 