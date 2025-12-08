'use client';

import { Breadcrumb, Panel, Text, VStack } from 'rsuite';
import WizardForm from './WizardForm';

export default function FormWizardPage() {
  return (
    <Panel
      header={
        <VStack>
          <Text as="span" className="title">
            Wizard Form
          </Text>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Forms</Breadcrumb.Item>
            <Breadcrumb.Item active>Wizard</Breadcrumb.Item>
          </Breadcrumb>
        </VStack>
      }
    >
      <WizardForm />
    </Panel>
  );
}
