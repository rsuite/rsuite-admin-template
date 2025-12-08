import {
  Drawer,
  DrawerProps,
  Button,
  Form,
  Stack,
  NumberInput,
  InputGroup,
  Slider,
  Rate
} from 'rsuite';

const DrawerView = (props: DrawerProps) => {
  const { onClose, ...rest } = props;
  return (
    <Drawer backdrop="static" size="sm" placement="right" onClose={onClose} {...rest}>
      <Drawer.Header>
        <Drawer.Title>Add a new member</Drawer.Title>
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
          <Stack justifyContent="space-between" style={{ marginBottom: 20 }}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstname" style={{ width: 200 }} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastname" style={{ width: 200 }} />
            </Form.Group>
          </Stack>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control name="city" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Street</Form.Label>
            <Form.Control name="street" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control name="rating" accepter={Rate} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Skill Proficiency</Form.Label>
            <Form.Control name="skill" accepter={Slider} progress />
          </Form.Group>

          <Form.Group>
            <Form.Label>Income</Form.Label>
            <InputGroup style={{ width: '100%' }}>
              <InputGroup.Addon>$</InputGroup.Addon>
              <Form.Control name="income" accepter={NumberInput} style={{ width: '100%' }} />
            </InputGroup>
          </Form.Group>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;
