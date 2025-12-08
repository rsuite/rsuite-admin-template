'use client';

import { Breadcrumb, Panel, Text, VStack } from 'rsuite';
import DataTable from './DataTable';

export default function MembersPage() {
  return (
    <Panel
      header={
        <VStack>
          <Text as="span" className="title">
            Members
          </Text>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>Members</Breadcrumb.Item>
          </Breadcrumb>
        </VStack>
      }
    >
      <DataTable />
    </Panel>
  );
}
