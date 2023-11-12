/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '53.fs1.hubspotusercontent-na1.net',
            port: '',
            pathname: '/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg',
          },
        ],
      },
}

module.exports = nextConfig
