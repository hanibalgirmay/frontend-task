/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  api: {
    bodyParser: false,
  },
  reactStrictMode: true,
  basePath: '/frontend-task',
};

module.exports = nextConfig;
