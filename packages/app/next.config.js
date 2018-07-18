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

      config.plugins.push(
        new webpack.EnvironmentPlugin(['MAPBOX_ACCESS_TOKEN'])
      );
      return config;
    }
  })
);
