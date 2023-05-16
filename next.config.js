/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  trailingSlash: true,
  export: "out",
  api: {
    bodyParser: false,
  },
  reactStrictMode: true,
  basePath: isProd ? "/frontend-task" : "",
};

module.exports = nextConfig;
