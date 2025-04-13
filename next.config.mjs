/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    basePath: '/brian-portfolio',
    assetPrefix: '/brian-portfolio',
};
  
export default nextConfig;
  
