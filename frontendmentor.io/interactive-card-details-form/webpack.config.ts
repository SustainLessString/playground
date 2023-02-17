import * as path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";

import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src"),
      "@img": path.resolve(__dirname, "images"),
    },
  },
  mode: process.env.NODE_ENV ? "production" : "development",
  entry: "./src/Index.tsx",
  devServer: { port: 3000 },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  performance: { maxAssetSize: 10240000, maxEntrypointSize: 10240000 },

  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack", "file-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", {}]],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

export default config;
