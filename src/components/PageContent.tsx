import React from 'react';
import { Panel } from 'rsuite';
import Copyright from '@/components/Copyright';

const PageContent = props => {
  return (
    <>
      <Panel style={{ background: '#fff' }} {...props} />
      <Copyright />
    </>
  );
};

export default PageContent;
