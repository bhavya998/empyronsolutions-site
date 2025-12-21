/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Remove basePath for now to test
    trailingSlash: true,
};

export default nextConfig;
