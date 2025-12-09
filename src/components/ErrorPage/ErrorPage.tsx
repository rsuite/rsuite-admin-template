import React from 'react';
import Image from 'next/image';
import './error-page.css';

interface ErrorPageProps {
  code?: number;
  children?: React.ReactNode;
}

const ErrorPage = ({ code = 404, children }: ErrorPageProps) => (
  <div className="error-page">
    <div className="item">
      <Image src={`/images/errors/${code}.svg`} alt={`Error ${code}`} width={400} height={300} />
      <div className="text">
        <h1 className="error-page-code">{code}</h1>
        {children}
      </div>
    </div>
  </div>
);

export default ErrorPage;
