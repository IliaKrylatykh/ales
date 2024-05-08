/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost", "147.45.187.26"],
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
  images: {
    domains: ["localhost", "147.45.187.26"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "147.45.187.26",
        pathname: "/api/**",
      },
    ],
  },
};

export default nextConfig;
