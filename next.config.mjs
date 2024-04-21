/** @type {import('next').NextConfig} */
const nextConfig = {
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
