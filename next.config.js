/** @type {import('next').NextConfig} */


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.freecodecamp.org',
        port: '',
        pathname: '/news/content/images/2022/12/**',
      },
    ],
  },
}
