/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/lemuth_portfolio",
  output: "export",
  // reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "/public",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
