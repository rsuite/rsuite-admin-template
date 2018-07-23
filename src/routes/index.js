export default {
  childRoutes: [
    {
      path: '/',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/dashboard')
      },
      childRoutes: [require('./main')]
    }
  ]
};
