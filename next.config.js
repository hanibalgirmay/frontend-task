/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  trailingSlash: true,
  output: "export",
  api: {
    bodyParser: false,
  },
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/frontend-task/:path*',
  //       destination: '/api/:path*',
  //     },
  //   ]
  // },
  basePath: isProd ? "https://hanibalgirmay.github.io/frontend-task/" : "",
};

module.exports = nextConfig;
