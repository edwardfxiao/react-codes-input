import webpack from 'webpack';
import path from 'path';
import PATH from './build_path';
import WebpackAssetsManifest from 'webpack-assets-manifest';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export default {
  context: PATH.ROOT_PATH,
  entry: {
    index: PATH.ROOT_PATH + 'example/index.js',
  },
  module: {
    rules: [
      {
        test: /\.mp3?$/,
        include: [PATH.ROOT_PATH],
        exclude: [PATH.NODE_MODULES_PATH],
        loader: 'file-loader',
        options: {
          name: 'audio/[name]-[hash].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)\??.*$/,
        include: [PATH.ROOT_PATH],
        // exclude: [PATH.NODE_MODULES_PATH],
        loader: 'url-loader',
        options: {
          limit: 1,
          name: 'font/[name]-[hash].[ext]',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)\??.*$/,
        include: [PATH.ROOT_PATH],
        // exclude: [PATH.NODE_MODULES_PATH],
        loader: 'url-loader',
        options: {
          limit: 1,
          name: 'img/[name]-[hash].[ext]',
        },
      },
      {
        test: /\.jsx?$/,
        include: [PATH.ROOT_PATH],
        exclude: [PATH.NODE_MODULES_PATH],
        enforce: 'post',
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        include: [PATH.ROOT_PATH],
        exclude: [PATH.NODE_MODULES_PATH],
        enforce: 'post',
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        include: [PATH.NODE_MODULES_PATH],
        enforce: 'post',
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {},
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-import', {}],
                  ['postcss-preset-env', {}],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [PATH.SOURCE_PATH],
        exclude: [PATH.NODE_MODULES_PATH],
        enforce: 'post',
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-import', {}],
                  ['postcss-preset-env', { stage: 0 }],
                  ['cssnano', { safe: true }],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'app')],
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.css'],
    fallback: {
      path: false,
    },
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    // https: {
    //   cert: helper.ROOT_PATH + 'src/https/cert.pem', // path to cert,
    //   key: helper.ROOT_PATH + 'src/https/key.pem', // path to key,
    // },
    historyApiFallback: true,
    client: { overlay: false },
    static: [
      {
        directory: path.join(__dirname, 'dist'),
        watch: true,
      },
    ],
    devMiddleware: {
      writeToDisk: filePath => {
        return /\.css$/.test(filePath);
      },
    },
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
    new webpack.ProvidePlugin({
      React: 'React',
      react: 'React',
      'window.react': 'React',
      'window.React': 'React',
    }),
    new WebpackAssetsManifest({
      output: 'manifest-rev.json',
    }),
  ],
};
