'use client';

import { useState } from 'react';
import { Steps, Divider, Stack, Button } from 'rsuite';
import PageContent from '@/components/PageContent';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import ProjectTypeForm from './ProjectTypeForm';
import TeamSettingsForm from './TeamSettingsForm';
import BusinessDetailForm from './BusinessDetailForm';
import ProjectInfoForm from './ProjectInfoForm';
import Completed from './Completed';

const forms = [ProjectTypeForm, ProjectInfoForm, TeamSettingsForm, BusinessDetailForm, Completed];

const WizardForm = () => {
  const [step, setStep] = useState(0);
  const Form = forms[step];
  return (
    <PageContent>
      <Steps current={step}>
        <Steps.Item title="Project Type" />
        <Steps.Item title="Project Info" />
        <Steps.Item title="Team settings" />
        <Steps.Item title="Business Info" />
        <Steps.Item title="Completed" />
      </Steps>

      <Divider />
      <div>
        <Form />

        <Divider />

        <Stack justifyContent="space-between">
          {step !== 0 && (
            <Button startIcon={<FiChevronLeft />} onClick={() => setStep(Math.max(step - 1, 0))}>
              Back
            </Button>
          )}

          {step !== forms.length - 1 && (
            <Button
              endIcon={<FiChevronRight />}
              appearance="primary"
              onClick={() => setStep(Math.min(step + 1, 4))}
            >
              Continue
            </Button>
          )}
        </Stack>
      </div>
    </PageContent>
  );
};

export default WizardForm;
