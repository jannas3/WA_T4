import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {protocol:"http",
        hostname:"ranekapi.origamid.dev"
      }
    ]
  }
};

export default nextConfig;
