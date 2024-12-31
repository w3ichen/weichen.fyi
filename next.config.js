const nextConfig = {
  output: "export", // Generate static HTML files on build
  images: {
    // Disable optimize when output: export
    unoptimized: true, // https://nextjs.org/docs/messages/export-image-api
  },
};

module.exports = nextConfig;
