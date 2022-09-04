const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
        music_distribution: path.resolve(
          __dirname,
          "src/music-distribution.html"
        ),
        pricing: path.resolve(__dirname, "src/pricing.html"),
        label: path.resolve(__dirname, "src/label.html"),
        stories: path.resolve(__dirname, "src/stories.html"),
        qa: path.resolve(__dirname, "src/qa.html"),
        faq: path.resolve(__dirname, "src/faq.html"),
        promotion: path.resolve(__dirname, "src/promotion.html"),
      },
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};
