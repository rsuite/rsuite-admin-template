'use client';

import { Breadcrumb, Panel, Text, VStack } from 'rsuite';
import VirtualizedTable from './VirtualizedTable';

export default function VirtualizedTablePage() {
  return (
    <Panel
      header={
        <VStack>
          <Text as="span" className="title">
            Virtualized Table
          </Text>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>Virtualized</Breadcrumb.Item>
          </Breadcrumb>
        </VStack>
      }
    >
      <VirtualizedTable />
    </Panel>
  );
}
