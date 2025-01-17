/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY, // Add this line to expose the environment variable
  },
};

module.exports = nextConfig;
