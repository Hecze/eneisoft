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
            source: '/2023/:path*',
            destination: '/:path*',  // Sirve la app de Next.js en /2023
        },
        {
          source: '/',
          destination: '/2024/:path*'
        }
    ];
  },
};

module.exports = nextConfig;
