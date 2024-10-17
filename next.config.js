/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'scontent.flim15-1.fna.fbcdn.net',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'media.licdn.com',
          pathname: '**',
        }
      ],
  },
  async rewrites() {
      return [
          {
              source: '/:path*',
              destination: '/2024/:path*',
          },
      ];
  },
};

module.exports = nextConfig;
