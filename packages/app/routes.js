// Note: This file is not parsed by Next config, so needs to be in ES5.

const nextRoutes = require('next-routes');
const routes = new nextRoutes();

// Define all dynamic routes here
// https://github.com/zeit/next.js/tree/canary/examples/with-next-routes
// TODO It'd be good if dynamic routes were integrated with next.js by default
// https://github.com/zeit/next.js/issues/4989
routes.add('map', '/map/:year/:month/:day/:entityId?/:edit(edit)?');

module.exports = routes;
