import React from 'react';

import { Form, Button, Panel, InputGroup, Stack, Checkbox, Divider } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';

const SignIn = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{
        height: '100vh'
      }}
    >
      <Brand style={{ marginBottom: 10 }} />
      <Panel
        header={<h3>Create an Account</h3>}
        bordered
        style={{ background: '#fff', width: 400 }}
      >
        <p>
          <span>Already have an account?</span> <Link to="/sign-in">Sign in here</Link>
        </p>

        <Divider>OR</Divider>

        <Form fluid>
          <Form.Group>
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name="name" />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Password</Form.ControlLabel>
            <InputGroup inside style={{ width: '100%' }}>
              <Form.Control
                name="password"
                type={visible ? 'text' : 'password'}
                autoComplete="off"
              />
              <InputGroup.Button onClick={() => setVisible(!visible)}>
                {visible ? <EyeIcon /> : <EyeSlashIcon />}
              </InputGroup.Button>
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Confirm Password</Form.ControlLabel>
            <Form.Control name="confirm-password" type="password" />
          </Form.Group>

          <Form.Group>
            <Stack style={{ marginLeft: -10 }}>
              <Checkbox>I Agree</Checkbox>
              <Button appearance="link">Terms and conditions.</Button>
            </Stack>
          </Form.Group>

          <Form.Group>
            <Stack spacing={6}>
              <Button appearance="primary">Submit</Button>
            </Stack>
          </Form.Group>
        </Form>
      </Panel>
    </Stack>
  );
};

export default SignIn;
