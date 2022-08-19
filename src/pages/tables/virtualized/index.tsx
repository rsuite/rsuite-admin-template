import React from 'react';
import VirtualizedTable from './VirtualizedTable';

import { Breadcrumb, Panel } from 'rsuite';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Virtualized Table</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>Virtualized Table</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <VirtualizedTable />
    </Panel>
  );
};

export default Page;
