import React, { useState } from 'react';
import { Form, Stack, RadioTile, RadioTileGroup } from 'rsuite';
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
        <RadioTileGroup value={type} inline onChange={value => setType(String(value))}>
          <RadioTile
            icon={<VscFile size={32} />}
            label="Create blank project"
            value="personal"
          >
            Create a blank project to house your files, plan your work, and collaborate on code, among
            other things.
          </RadioTile>
          <RadioTile
            icon={<VscNotebookTemplate size={32} />}
            label="Create from template"
            value="brand"
          >
            Create a project pre-populated with the necessary files to get you started quickly.
          </RadioTile>
          <RadioTile
            icon={<VscRepoClone size={32} />}
            label="Import project"
            value="group"
          >
            Migrate your data from an external source like GitHub, Bitbucket, or another instance of
            GitLab.
          </RadioTile>
        </RadioTileGroup>
      </Stack>
    </Form>
  );
};

export default ProjectTypeForm;
