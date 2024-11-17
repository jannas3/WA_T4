import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Ou "http", dependendo do domínio
        hostname: "ranekapi.origamid.dev",
        pathname: "/wp-content/uploads/**", // Optional: Limitar o caminho se necessário
      },
    ],
  },
};

export default nextConfig;
