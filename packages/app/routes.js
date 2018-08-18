// Note: This file is not parsed by Next config, so needs to be in ES5.

const nextRoutes = require('next-routes');
const routes = new nextRoutes();

// Define all dynamic routes here
// https://github.com/zeit/next.js/tree/canary/examples/with-next-routes
routes.add('map', '/map/:year/:month/:day/:nation?');

module.exports = routes;
