/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://scontent.flim15-1.fna.fbcdn.net',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig
