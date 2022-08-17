import React from 'react';
import { Drawer, DrawerProps, Button, Form } from 'rsuite';

const DrawerView = (props: DrawerProps) => {
  const { onClose, ...rest } = props;
  return (
    <Drawer size="sm" placement="right" onClose={onClose} {...rest}>
      <Drawer.Header>
        <Drawer.Title>Add Member</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={onClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Drawer.Actions>
      </Drawer.Header>

      <Drawer.Body>
        <Form fluid>
          <Form.Group>
            <Form.ControlLabel>First Name</Form.ControlLabel>
            <Form.Control name="firstname" />
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Last Name</Form.ControlLabel>
            <Form.Control name="lastname" />
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" type="email" />
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control name="password" type="password" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>City</Form.ControlLabel>
            <Form.Control name="city" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Street</Form.ControlLabel>
            <Form.Control name="street" />
          </Form.Group>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;
