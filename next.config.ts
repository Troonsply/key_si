import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/key_si",
  images: { unoptimized: true },
};

export default nextConfig;
