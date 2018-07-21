// @flow

import * as React from 'react';
import { Router, browserHistory } from 'react-router';
import { IntlProvider } from 'react-intl';
import { IntlProvider as RSIntlProvider } from 'rsuite';

import enGB from 'rsuite/lib/IntlProvider/locales/en_GB';
import locales from './locales';
import routes from './routes';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <IntlProvider locale="en" messages={locales.en}>
        <RSIntlProvider locale={enGB}>
          <Router history={browserHistory} routes={routes} />
        </RSIntlProvider>
      </IntlProvider>
    );
  }
}

export default App;
