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
        name: "main-app",
        remotes: {
          "media-app": `media-app@http://localhost:3001/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
          "news-app": `news-app@http://localhost:3002/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
          "videos-news-app": `videos-news-app@http://localhost:3003/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
