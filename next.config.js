/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
    output: 'export',
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
