/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://scontent.flim15-1.fna.fbcdn.net',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'https://media.licdn.com/',
            pathname: '**',
          }
        ],
      },
}

module.exports = nextConfig
