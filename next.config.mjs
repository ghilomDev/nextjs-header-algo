/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          { source: '/', destination: '/home', permanent: true },
        ]
      },
      experimental: {
        ppr: true,
      },

};

export default nextConfig;
