/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // output: "export",
  api: {
    bodyParser: false,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/frontend-task/:path*',
        destination: '/api/:path*',
      },
    ]
  },
  basePath: '/frontend-task',
};

module.exports = nextConfig;
