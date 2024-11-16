/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/anthonygayflor/**'
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        pathname: '/anthonygayflor/**'
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: { loader: '@svgr/webpack', options: { icon: true }}
    });

    // config.output.publicPath = '/.next/';
    
    return config;
  },
};

export default nextConfig;
