/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    basePath: '',        // keep this empty for root deployment
    assetPrefix: '',     // keep this empty for root deployment
};
  
export default nextConfig;
  
