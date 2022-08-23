import React from 'react';
import { Form, SelectPicker } from 'rsuite';
import Textarea from '@/components/Textarea';
import FormHeader from './FormHeader';

const BusinessDetailForm = () => {
  return (
    <Form fluid>
      <FormHeader
        title="Business Info"
        description="Advanced collaboration forindividuals and organizations"
      />

      <Form.Group controlId="name">
        <Form.ControlLabel>Business Name</Form.ControlLabel>
        <Form.Control name="name" />
      </Form.Group>

      <Form.Group controlId="descriptor">
        <Form.ControlLabel>Shortened Descriptor</Form.ControlLabel>
        <Form.Control name="descriptor" />
        <Form.HelpText>
          Customers will see this shortened version of your statement descriptor.
        </Form.HelpText>
      </Form.Group>

      <Form.Group controlId="type">
        <Form.ControlLabel>Corporation Type</Form.ControlLabel>
        <Form.Control
          name="type"
          accepter={SelectPicker}
          searchable={false}
          data={[
            { value: 1, label: 'Sole proprietorship' },
            { value: 2, label: 'Joint stock company' },
            { value: 3, label: 'Limited liability company' },
            { value: 4, label: 'Partnership' },
            { value: 5, label: 'Limited partnership' },
            { value: 6, label: 'General partnership' },
            { value: 7, label: 'Limited liability partnership' },
            { value: 8, label: 'General liability partnership' },
            { value: 9, label: 'Limited liability general partnership' },
            { value: 10, label: 'General liability general partnership' }
          ]}
          block
        />
        <Form.HelpText>
          Different team sizes will be assigned different management modes. Of course the fees are
          different.
        </Form.HelpText>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.ControlLabel>Business Description</Form.ControlLabel>
        <Form.Control name="description" accepter={Textarea} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.ControlLabel> Contact Email</Form.ControlLabel>
        <Form.Control name="email" />
      </Form.Group>
    </Form>
  );
};

export default BusinessDetailForm;
