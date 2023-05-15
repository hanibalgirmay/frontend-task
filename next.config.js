/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  api: {
    bodyParser: false,
  },
};

module.exports = nextConfig;
