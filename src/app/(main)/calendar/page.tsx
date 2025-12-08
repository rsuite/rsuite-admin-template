'use client';

import { Panel, Breadcrumb, Text, VStack } from 'rsuite';
import Calendar from './Calendar';

export default function CalendarPage() {
  return (
    <Panel
      header={
        <VStack>
          <Text as="span" className="title">
            Calendar
          </Text>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Calendar</Breadcrumb.Item>
          </Breadcrumb>
        </VStack>
      }
    >
      <Calendar />
    </Panel>
  );
}
