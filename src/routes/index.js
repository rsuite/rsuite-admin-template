export default {
  childRoutes: [
    {
      path: '/',
      indexRoute: { 
        onEnter: (nextState, replace) => replace('/list/data-table') 
      },
      childRoutes: [require('./main')]
    }
  ]
};
