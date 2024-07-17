/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: 'dist',
  // basePath: "/lemuth_portfolio",
  // reactStrictMode: true,
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
  // assetPrefix: "/public",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
