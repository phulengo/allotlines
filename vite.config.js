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
      },
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};
