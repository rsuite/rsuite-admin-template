import React from 'react';
import { ButtonToolbar, Button, Stack } from 'rsuite';
import CheckRoundIcon from '@rsuite/icons/CheckRound';

const Completed = () => {
  return (
    <div>
      <div style={{ margin: '40px 0' }}>
        <Stack spacing={10}>
          <CheckRoundIcon style={{ fontSize: 50 }} color="#4caf50" />
          <div>
            <h5>Your Are Done!</h5>
            <p className="text-muted">You can start working on a new project.</p>
          </div>
        </Stack>
      </div>

      <p>
        Once you have created this project, if you return to Project Web App you see it listed as a
        project in the Project Center. Updates made to the task list on the project site are
        reflected in the Project Center in Project Web App.
      </p>
      <p>You can also click the button below to start working on the project.</p>

      <ButtonToolbar style={{ marginTop: 20 }}>
        <Button appearance="primary">View Project</Button>
        <Button>Add permissions to the project</Button>
      </ButtonToolbar>
    </div>
  );
};

export default Completed;
