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
          source: '/',
          destination: '/2024',  // Redirige la raíz a /2024
      },
      {
          source: '/2024/:path*',
          destination: '/2024/:path*', // Mantiene la redirección para archivos estáticos
      },
      ];
  },
};

module.exports = nextConfig;
