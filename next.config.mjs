/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/empyronsolutions-site' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/empyronsolutions-site/' : '',
};

export default nextConfig;
