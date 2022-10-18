/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
