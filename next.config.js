require('dotenv').config()
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.toppal.com",
      "th.bing.com"
    ]
  }
}

module.exports = nextConfig

