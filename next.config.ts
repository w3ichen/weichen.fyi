import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Generate static HTML files on build
  images: {
    // Disable optimize when output: export
    unoptimized: true, // https://nextjs.org/docs/messages/export-image-api
  },
};

export default nextConfig;
