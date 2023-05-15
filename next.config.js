/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  api: {
    bodyParser: false,
  },
  basePath: '/frontend-task',
};

module.exports = nextConfig;
