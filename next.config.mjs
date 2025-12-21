/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Removed basePath and assetPrefix for custom domain (root) deployment
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
