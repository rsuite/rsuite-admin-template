import React from 'react';
import * as errors from '@/images/errors';

const ErrorPage = ({ code = 404, children }) => (
  <div className="error-page">
    <div className="item">
      <img src={errors[`Error${code}Img`]} />
      <div className="text">
        <h1 className="error-page-code">{code}</h1>
        {children}
      </div>
    </div>
  </div>
);

export default ErrorPage;
