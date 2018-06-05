// @flow

import * as React from 'react';
import { Router, browserHistory } from 'react-router';
import { IntlProvider } from 'rsuite';
import zhCN from 'rsuite/lib/IntlProvider/locales/zh_CN';
import routes from './routes';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <IntlProvider locale={zhCN}>
        <Router history={browserHistory} routes={routes} />
      </IntlProvider>
    );
  }
}

export default App;
