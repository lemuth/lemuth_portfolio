/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/lemuth_portfolio",
  output: "export",
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
  // assetPrefix: "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
