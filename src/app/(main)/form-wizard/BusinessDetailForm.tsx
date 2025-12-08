import { Form, SelectPicker, Textarea } from 'rsuite';
import FormHeader from './FormHeader';

const BusinessDetailForm = () => {
  return (
    <Form fluid>
      <FormHeader
        title="Business Info"
        description="Advanced collaboration forindividuals and organizations"
      />

      <Form.Group controlId="name">
        <Form.Label>Business Name</Form.Label>
        <Form.Control name="name" />
      </Form.Group>

      <Form.Group controlId="descriptor">
        <Form.Label>Shortened Descriptor</Form.Label>
        <Form.Control name="descriptor" />
        <Form.Text>
          Customers will see this shortened version of your statement descriptor.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="type">
        <Form.Label>Corporation Type</Form.Label>
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
        <Form.Text>
          Different team sizes will be assigned different management modes. Of course the fees are
          different.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Business Description</Form.Label>
        <Form.Control name="description" accepter={Textarea} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label> Contact Email</Form.Label>
        <Form.Control name="email" />
      </Form.Group>
    </Form>
  );
};

export default BusinessDetailForm;
