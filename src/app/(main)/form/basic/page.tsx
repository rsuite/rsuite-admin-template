'use client';

import { Breadcrumb, Panel, Text, VStack } from 'rsuite';
import BasicForm from './BasicForm';

export default function FormBasicPage() {
  return (
    <Panel
      header={
        <VStack>
          <Text as="span" className="title">
            Basic Form
          </Text>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Forms</Breadcrumb.Item>
            <Breadcrumb.Item active>Basic</Breadcrumb.Item>
          </Breadcrumb>
        </VStack>
      }
    >
      <BasicForm />
    </Panel>
  );
}
