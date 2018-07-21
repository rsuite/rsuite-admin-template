// flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import * as errors from '../../images/errors';

const ErrorPage = ({ code = 404 }) => (
  <div className="error-page">
    <div className="item">
      <img src={errors[`error${code}`]} />
      <div className="text">
        <h1 className="code">{code}</h1>
        <p>
          <FormattedMessage id={`error${code}`} />
        </p>
      </div>
    </div>
  </div>
);

export default ErrorPage;
