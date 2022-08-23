import React, { useState } from 'react';
import { Form, Stack } from 'rsuite';
import RadioTile from '@/components/RadioTile';
import { Icon } from '@rsuite/icons';
import { VscNotebookTemplate, VscRepoClone, VscFile } from 'react-icons/vsc';
import FormHeader from './FormHeader';

const ProjectTypeForm = () => {
  const [type, setType] = useState('personal');

  return (
    <Form>
      <FormHeader
        title="Create new project"
        description="You can always create a new project from a template or another project. But if you need to start fresh, you can create a blank project         ."
      />

      <Stack spacing={30} style={{ margin: '60px 0' }}>
        <RadioTile
          icon={<Icon as={VscFile} />}
          title="Create blank project"
          value={type}
          name="personal"
          onChange={setType}
        >
          Create a blank project to house your files, plan your work, and collaborate on code, among
          other things.
        </RadioTile>
        <RadioTile
          icon={<Icon as={VscNotebookTemplate} />}
          title="Create from template"
          value={type}
          name="brand"
          onChange={setType}
        >
          Create a project pre-populated with the necessary files to get you started quickly.
        </RadioTile>
        <RadioTile
          icon={<Icon as={VscRepoClone} />}
          title="Import project"
          value={type}
          name="group"
          onChange={setType}
        >
          Migrate your data from an external source like GitHub, Bitbucket, or another instance of
          GitLab.
        </RadioTile>
      </Stack>
    </Form>
  );
};

export default ProjectTypeForm;
