export default {
  path: '/error',
  childRoutes: [require('./404'), require('./500')]
};
