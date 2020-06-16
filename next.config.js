require('dotenv').config();

const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');

const nextConfig = {
    target: 'serverless',
    transformManifest: manifest => ['/'].concat(manifest),
    generateInDevMode: true,
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'https-calls',
              networkTimeoutSeconds: 15,
              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    env: {
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
    }
  };

module.exports = withCSS(withOffline(nextConfig));