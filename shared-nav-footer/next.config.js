/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "shared-nav-footer",
        remotes: {
          "main-app": `main-app@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {
          "./Footer": "./components/utils/footer/index.js",
          "./Navbar": "./components/utils/navbar/index.js",
        },
        filename: "static/chunks/remoteEntry.js",
        shared: {
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;