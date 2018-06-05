import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import ready from './ready';
import App from './App';

import './styles/index.less';

const hotRender = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

ready(() => {
  hotRender(hot(module)(App));
});
