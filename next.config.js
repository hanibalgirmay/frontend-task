/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  async rewrite() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://hanibalgirmay.github.io/frontend-task/api/:path*',
      },
    ]
  },
  trailingSlash: true,
  
  api: {
    bodyParser: false,
  },
  reactStrictMode: true,
  basePath: isProd ? "/frontend-task" : "",
};

module.exports = nextConfig;
