import Frame from '../components/Frame';
export default {
  onEnter: (nextState, replace) => {
    console.log('enter main');
  },
  component: Frame,
  childRoutes: [require('./list'), require('./dashboard'), require('./error')]
};
