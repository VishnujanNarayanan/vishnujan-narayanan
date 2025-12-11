/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,  // This fixes the lighting issue
  },
}

module.exports = nextConfig