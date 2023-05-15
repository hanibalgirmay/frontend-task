/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  api: {
    bodyParser: false,
  },
  basePath: 'https://hanibalgirmay.github.io',
  assetPrefix: 'https://hanibalgirmay.github.io',
};

module.exports = nextConfig;
