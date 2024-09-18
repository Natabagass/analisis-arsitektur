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
        name: "audios",
        remotes: {
          "main-app": `main-app@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {
          "./Audio": "./components/audio/index.js",
          "./Text": "./components/text/index.js",
          "./Video": "./components/video/index.js",
          "./Image": "./components/image/index.js",
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