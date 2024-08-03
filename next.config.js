// next.config.js
const path = require('path');

module.exports = {
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_DATABASE_URL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  },
  // Enable React Strict Mode for development
  reactStrictMode: true,

  // Enable SWC minification for better performance
  swcMinify: true,

  // Customize the directory for static files (if needed)
  // staticPageGenerationTimeout: 60, // Increase timeout if you have large pages

  // Optimize images
  images: {
    domains: ['example.com'], // Replace with your allowed image domains
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    // Add other image optimization settings if needed
  },

  // Configure TypeScript settings
  typescript: {
    ignoreBuildErrors: false, // Set to true to ignore TypeScript errors during build
  },

  // Add custom Webpack configuration if needed
  webpack: (config, { dev, isServer }) => {
    // Custom Webpack configuration can go here

    // Example: Resolve modules from 'src' directory
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    // Return the modified config
    return config;
  },

  // Internationalization configuration (if applicable)
  i18n: {
    locales: ['en', 'fr'], // Add your supported locales
    defaultLocale: 'en',
  },

  // Optional: Enable experimental features (make sure they are supported in your version)
  // experimental: {
  //   appDir: true,
  //   serverComponents: true,
  // },
};
