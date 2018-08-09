const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const withCss = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');
const webpack = require('webpack');

/**
 * With now-env in development, you can use process.env to get your secrets.
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-now-env
 */
if (process.env.NODE_ENV !== 'production') {
  require('now-env');
}

/**
 * If some of the envs are public, like a google maps key, but you still
 * want to keep them secret from the repo, the following code will allow you
 * to share some variables with the client, configured at compile time.
 */
module.exports = withCss(
  withTypescript({
    webpack: config => {
      // Remove UglifyJsPlugin
      // @see https://github.com/zeit/next.js/issues/1195
      config.plugins = config.plugins.filter(
        plugin => plugin.constructor.name !== 'UglifyJsPlugin'
      );

      // Set an UglifyJsPlugin without typeofs
      // @see https://github.com/alex3165/react-mapbox-gl/issues/200#issuecomment-370175270
      if (process.env.NODE_ENV === 'production') {
        config.plugins.push(
          new UglifyJsPlugin({
            uglifyOptions: { compress: { typeofs: false } }
          })
        );
      }

      // Set env variables on the client side
      // @see https://github.com/zeit/next.js/tree/canary/examples/with-now-env
      config.plugins.push(
        new webpack.EnvironmentPlugin(['BACKEND_API', 'MAPBOX_ACCESS_TOKEN'])
      );

      // Make Next.js work with Semantic-UI
      // https://github.com/zeit/next.js/blob/canary/examples/with-semantic-ui/next.config.js
      config.module.rules.push({
        test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            publicPath: './',
            outputPath: 'static/',
            name: '[name].[ext]'
          }
        }
      });
      return config;
    }
  })
);
