/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: 'dist',
  basePath: '/lemuth_portfolio',

  images: {
    unoptimized: true
  }
};

export default nextConfig;
