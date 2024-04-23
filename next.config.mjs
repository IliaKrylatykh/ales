/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "picsum.photos"],
    },
  },
  rewrites: async () => {
    return [
      {
        source: "/src/shared/images/:path",
        destination: "/src/shared/images/:path*",
      },
    ];
  },
};

export default nextConfig;
