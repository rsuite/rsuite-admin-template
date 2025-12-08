import React, { useState } from 'react';
import { Form, Stack, SelectPicker, RadioTile, RadioTileGroup } from 'rsuite';
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
        <Form.Label>Team Name</Form.Label>
        <Form.Control name="name" />
      </Form.Group>

      <Form.Group controlId="name">
        <Form.Label>Specify Team Size</Form.Label>
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
        <Form.Label>Choose a team workflow</Form.Label>
        <Stack spacing={10} direction="column" alignItems={'stretch'}>
          <RadioTileGroup value={type} onChange={value => setType(String(value))}>
            <RadioTile
              icon={<FaGit size={48} />}
              label="Git Flow"
              value="1"
            >
              Considered to be a bit complicated and advanced for many of today’s projects, GitFlow
              enables parallel development where developers can work separately from the master branch
              on features where a feature branch is created from the master branch.
            </RadioTile>
            <RadioTile
              icon={<FaGithub size={32} />}
              label="GitHub Flow"
              value="2"
            >
              GitHub Flow is a simpler alternative to GitFlow ideal for smaller teams as they don’t
              need to manage multiple versions.
            </RadioTile>

            <RadioTile
              icon={<FaGitlab size={32} />}
              label="GitLab Flow"
              value="3"
            >
              GitLab Flow is a simpler alternative to GitFlow that combines feature-driven development
              and feature branching with issue tracking.
            </RadioTile>
          </RadioTileGroup>
        </Stack>
      </Form.Group>
    </Form>
  );
};

export default TeamSettingsForm;
