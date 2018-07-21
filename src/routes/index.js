export default {
  childRoutes: [
    {
      path: '/',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/list/members')
      },
      childRoutes: [require('./main')]
    }
  ]
};
