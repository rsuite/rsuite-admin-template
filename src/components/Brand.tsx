import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Stack } from 'rsuite';

const Brand = props => {
  return (
    <Stack className="brand" {...props}>
      <Logo height={26} style={{ marginTop: 6 }} />
      <Link to="/">
        <span style={{ marginLeft: 14 }}>Admin Template</span>
      </Link>
    </Stack>
  );
};

export default Brand;
