import React from 'react';

import { Form, Button, Panel, FlexboxGrid, InputGroup, IconButton, Stack, Divider } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import GithubIcon from '@rsuite/icons/legacy/Github';
import FacebookIcon from '@rsuite/icons/legacy/Facebook';
import GoogleIcon from '@rsuite/icons/legacy/Google';
import WechatIcon from '@rsuite/icons/legacy/Wechat';

const SignIn = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Panel
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={12}>
          <Panel header={<h3>Sign In</h3>} bordered style={{ background: '#fff' }}>
            <Form fluid>
              <Form.Group>
                <Form.ControlLabel>Username or email address</Form.ControlLabel>
                <Form.Control name="name" />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>
                  <span>Password</span>
                  <a style={{ float: 'right' }}>Forgot password?</a>
                </Form.ControlLabel>
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
                <Stack spacing={6} divider={<Divider vertical />}>
                  <Button appearance="primary">Sign in</Button>
                  <Stack spacing={6}>
                    <IconButton icon={<WechatIcon />} appearance="subtle" />
                    <IconButton icon={<GithubIcon />} appearance="subtle" />
                    <IconButton icon={<FacebookIcon />} appearance="subtle" />
                    <IconButton icon={<GoogleIcon />} appearance="subtle" />
                  </Stack>
                </Stack>
              </Form.Group>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Panel>
  );
};

export default SignIn;
