import React, { useState } from 'react';
import { Form, Stack, SelectPicker } from 'rsuite';
import RadioTile from '@/components/RadioTile';
import { Icon } from '@rsuite/icons';
import { FaGit, FaGithub, FaGitlab } from 'react-icons/fa';

import FormHeader from './FormHeader';

const TeamSettingsForm = () => {
  const [type, setType] = useState('1');

  return (
    <Form fluid>
      <FormHeader
        title="Team Settings"
        description="Assemble related projects together and grant members access to several projects at once."
      />

      <Form.Group controlId="name">
        <Form.ControlLabel>Team Name</Form.ControlLabel>
        <Form.Control name="name" />
      </Form.Group>

      <Form.Group controlId="name">
        <Form.ControlLabel>Specify Team Size</Form.ControlLabel>
        <Form.Control
          name="name"
          accepter={SelectPicker}
          searchable={false}
          data={[
            { value: 1, label: '> 5 people' },
            { value: 2, label: '5-20 people' },
            { value: 3, label: '20-50 people' },
            { value: 4, label: '50+ people' }
          ]}
          block
        />
        <Form.HelpText>
          Different team sizes will be assigned different management modes. Of course the fees are
          different.
        </Form.HelpText>
      </Form.Group>

      <Form.Group controlId="plan">
        <Form.ControlLabel>Choose a team workflow</Form.ControlLabel>
        <Stack spacing={10} direction="column" alignItems={'stretch'}>
          <RadioTile
            icon={<Icon as={FaGit} />}
            title="Git Flow"
            value={type}
            name="1"
            onChange={setType}
          >
            Considered to be a bit complicated and advanced for many of today’s projects, GitFlow
            enables parallel development where developers can work separately from the master branch
            on features where a feature branch is created from the master branch.
          </RadioTile>
          <RadioTile
            icon={<Icon as={FaGithub} />}
            title="GitHub Flow"
            value={type}
            name="2"
            onChange={setType}
          >
            GitHub Flow is a simpler alternative to GitFlow ideal for smaller teams as they don’t
            need to manage multiple versions.
          </RadioTile>

          <RadioTile
            icon={<Icon as={FaGitlab} />}
            title="GitLab Flow"
            value={type}
            name="3"
            onChange={setType}
          >
            GitLab Flow is a simpler alternative to GitFlow that combines feature-driven development
            and feature branching with issue tracking.
          </RadioTile>
        </Stack>
      </Form.Group>
    </Form>
  );
};

export default TeamSettingsForm;
