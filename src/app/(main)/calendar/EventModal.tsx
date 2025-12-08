import type { MouseEvent } from 'react';
import { Modal, Button, Form, DatePicker, ModalProps, Stack, Checkbox } from 'rsuite';

interface EventModalProps extends ModalProps {
  onAddEvent: (event: MouseEvent) => void;
}

const EventModal = (props: EventModalProps) => {
  const { onClose, open, onAddEvent, ...rest } = props;
  return (
    <Modal open={open} onClose={onClose} backdrop="static" {...rest}>
      <Modal.Header>
        <Modal.Title>Add a New Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form fluid>
          <Form.Group controlId="name">
            <Form.Label>Event Name</Form.Label>
            <Form.Control name="name" />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Event Description</Form.Label>
            <Form.Control name="description" />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Event Location</Form.Label>
            <Form.Control name="location" />
          </Form.Group>
          <Form.Group controlId="start">
            <Form.Label>Event Date</Form.Label>
            <Stack spacing={6}>
              <DatePicker
                format="yyyy-MM-dd HH:mm:ss"
                block
                style={{ width: 200 }}
                placeholder="Start Date"
              />
              <DatePicker
                format="yyyy-MM-dd HH:mm:ss"
                block
                style={{ width: 200 }}
                placeholder="End Date"
              />
              <Checkbox>All Day</Checkbox>
            </Stack>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onAddEvent} appearance="primary">
          Submit
        </Button>
        <Button onClick={onClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;
