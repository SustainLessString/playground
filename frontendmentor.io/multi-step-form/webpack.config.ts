import * as path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "assets"),
    },
  },
  mode: process.env.NODE_ENV ? "production" : "development",
  entry: "./src/Index.tsx",
  devServer: { port: 3000 },
  performance: { hints: false },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
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
