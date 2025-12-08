import React from 'react';
import { Form, Stack, InputGroup, Textarea, RadioTile, RadioTileGroup } from 'rsuite';
import { VscLock, VscWorkspaceTrusted } from 'react-icons/vsc';
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
        <Form.Label>Project Name</Form.Label>
        <Form.Control name="name" />
        <Form.Text>Project names must be unique.</Form.Text>
      </Form.Group>

      <Form.Group controlId="url">
        <Form.Label>Project URL</Form.Label>

        <InputGroup style={{ width: '100%' }}>
          <InputGroup.Addon>https://rsuitejs.com/</InputGroup.Addon>
          <Form.Control name="url" />
        </InputGroup>
        <Form.Text>
          Want to house several dependent projects under the same namespace? <a>Create a group.</a>
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Project description (optional)</Form.Label>
        <Form.Control name="description" accepter={Textarea} />
      </Form.Group>

      <Form.Group controlId="plan">
        <Form.Label>Visibility Level</Form.Label>
        <Stack spacing={10} direction="column" alignItems={'stretch'}>
          <RadioTileGroup value={level} onChange={value => setLevel(String(value))}>
            <RadioTile
              icon={<VscLock size={32} />}
              label="Private"
              value="Private"
            >
              Project access must be granted explicitly to each user. If this project is part of a
              group, access will be granted to members of the group.
            </RadioTile>
            <RadioTile
              icon={<VscWorkspaceTrusted size={32} />}
              label="Internal"
              value="Internal"
            >
              The project can be accessed by any logged in user except external users.
            </RadioTile>
          </RadioTileGroup>
        </Stack>
      </Form.Group>
    </Form>
  );
};

export default ProjectInfoForm;
