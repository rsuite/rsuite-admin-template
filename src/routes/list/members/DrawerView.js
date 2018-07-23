//@flow
import * as React from 'react';
import { Drawer, Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'rsuite';

type Props = {
  show: boolean,
  onClose: () => void
};

class DrawerView extends React.Component<Props> {
  render() {
    const { show, onClose } = this.props;
    return (
      <Drawer size="sm" placement="right" show={show} onHide={onClose}>
        <Drawer.Header>
          <Drawer.Title>Create a new member</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Form fluid>
            <FormGroup>
              <ControlLabel>First Name</ControlLabel>
              <FormControl name="firstname" />
              <HelpBlock>Required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Last Name</ControlLabel>
              <FormControl name="lastname" />
              <HelpBlock>Required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl name="email" type="email" />
              <HelpBlock>Required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl name="password" type="password" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>City</ControlLabel>
              <FormControl name="city" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Street</ControlLabel>
              <FormControl name="street" />
            </FormGroup>
          </Form>
        </Drawer.Body>
        <Drawer.Footer>
          <Button onClick={onClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Drawer.Footer>
      </Drawer>
    );
  }
}

export default DrawerView;
