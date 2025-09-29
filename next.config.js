const STATIC_SECTIONS = [
  "workshops",
  "keynotes",
  "hackathon",
  "agenda",
  "programacion-competitiva",
];

const STATIC_ASSET_FOLDERS = ["css", "js", "img"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.flim15-1.fna.fbcdn.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/index.html",
        permanent: true, // Sirve directamente el archivo index.html de public/
      },
      {
        source: "/about",
        destination: "/index.html",
        permanent: true,
      },
      {
        source: "/schedule",
        destination: "/index.html",
        permanent: true,
      },
      {
        source: "/activities/:path*",
        destination: "/index.html",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    const sectionRewrites = STATIC_SECTIONS.flatMap((section) => {
      const baseRewrites = [
        {
          source: `/${section}`,
          destination: `/${section}/index.html`,
        },
        {
          source: `/${section}/favicon.ico`,
          destination: "/favicon.ico",
        },
      ];

      const assetRewrites = STATIC_ASSET_FOLDERS.map((folder) => ({
        source: `/${section}/${folder}/:path*`,
        destination: `/${folder}/:path*`,
      }));

      return [...baseRewrites, ...assetRewrites];
    });

    return [
      {
        source: "/2023/:path*",
        destination: "/:path*", // Sirve la app de Next.js en /2023
      },
      ...sectionRewrites,
     
    ];
  },
};

module.exports = nextConfig;
