import React from 'react';
import { Form, Stack, InputGroup } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { VscLock, VscWorkspaceTrusted } from 'react-icons/vsc';
import RadioTile from '@/components/RadioTile';
import Textarea from '@/components/Textarea';
import FormHeader from './FormHeader';

const ProjectInfoForm = () => {
  const [level, setLevel] = React.useState('Private');

  return (
    <Form fluid>
      <FormHeader
        title="Project Info"
        description="Create a blank project to house your files, plan your work, and collaborate on code, among
          other things."
      />

      <Form.Group controlId="name">
        <Form.ControlLabel>Project Name</Form.ControlLabel>
        <Form.Control name="name" />
        <Form.HelpText>Project names must be unique.</Form.HelpText>
      </Form.Group>

      <Form.Group controlId="url">
        <Form.ControlLabel>Project URL</Form.ControlLabel>

        <InputGroup style={{ width: '100%' }}>
          <InputGroup.Addon>https://rsuitejs.com/</InputGroup.Addon>
          <Form.Control name="url" />
        </InputGroup>
        <Form.HelpText>
          Want to house several dependent projects under the same namespace? <a>Create a group.</a>
        </Form.HelpText>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.ControlLabel>Project description (optional)</Form.ControlLabel>
        <Form.Control name="description" accepter={Textarea} />
      </Form.Group>

      <Form.Group controlId="plan">
        <Form.ControlLabel>Visibility Level</Form.ControlLabel>
        <Stack spacing={10} direction="column" alignItems={'stretch'}>
          <RadioTile
            icon={<Icon as={VscLock} />}
            title="Private"
            value={level}
            name="Private"
            onChange={setLevel}
          >
            Project access must be granted explicitly to each user. If this project is part of a
            group, access will be granted to members of the group.
          </RadioTile>
          <RadioTile
            icon={<Icon as={VscWorkspaceTrusted} />}
            title="Internal"
            value={level}
            name="Internal"
            onChange={setLevel}
          >
            The project can be accessed by any logged in user except external users.
          </RadioTile>
        </Stack>
      </Form.Group>
    </Form>
  );
};

export default ProjectInfoForm;
