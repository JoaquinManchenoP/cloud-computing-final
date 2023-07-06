require("dotenv").config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
  },
};

module.exports = nextConfig;
