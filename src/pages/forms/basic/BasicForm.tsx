import React from 'react';
import {
  Form,
  RadioGroup,
  Radio,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  DateRangePicker,
  CheckPicker,
  SelectPicker,
  TagPicker,
  Input,
  TagInput,
  MaskedInput,
  InputPicker,
  InputNumber,
  Cascader,
  MultiCascader,
  Rate,
  Uploader,
  Message,
  Divider,
  TreePicker,
  CheckTreePicker,
  ButtonToolbar,
  Button,
  Toggle,
  AutoComplete
} from 'rsuite';
import PageContent from '@/components/PageContent';

import { mockTreeData } from '@/data/mock';

const treeData = mockTreeData({ limits: [2, 3, 3], labels: ['Provincial', 'County', 'Town'] });
const selectData = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice'].map(item => ({
  label: item,
  value: item
}));

const Textarea = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

const BasicForm = () => {
  return (
    <PageContent>
      <Message>
        The following demonstrates the common components of forms provided by rsuite. For more
        detailed usage of forms, please refer to the{' '}
        <a href="https://rsuitejs.com/components/form/" target="_blank" rel="noreferrer">
          form usage
        </a>
        .
      </Message>
      <Divider />
      <Form className="basic-form" layout="horizontal">
        <Form.Group controlId="Input">
          <Form.ControlLabel>Input</Form.ControlLabel>
          <Form.Control name="Input" />
        </Form.Group>

        <Form.Group controlId="MaskedInput">
          <Form.ControlLabel>MaskedInput</Form.ControlLabel>
          <Form.Control
            name="MaskedInput"
            accepter={MaskedInput}
            placeholder="(555) 495-3947"
            mask={[
              '(',
              /[1-9]/,
              /\d/,
              /\d/,
              ')',
              ' ',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              /\d/
            ]}
          />
        </Form.Group>

        <Form.Group controlId="TagInput">
          <Form.ControlLabel>TagInput</Form.ControlLabel>
          <Form.Control name="TagInput" accepter={TagInput} />
        </Form.Group>

        <Form.Group controlId="InputNumber">
          <Form.ControlLabel>InputNumber</Form.ControlLabel>
          <Form.Control name="InputNumber" accepter={InputNumber} />
        </Form.Group>

        <Form.Group controlId="AutoComplete">
          <Form.ControlLabel>AutoComplete</Form.ControlLabel>
          <Form.Control name="AutoComplete" accepter={AutoComplete} data={selectData} />
        </Form.Group>

        <Form.Group controlId="Textarea">
          <Form.ControlLabel>Textarea</Form.ControlLabel>
          <Form.Control name="Textarea" accepter={Textarea} rows={3} />
        </Form.Group>

        <Form.Group controlId="checkbox">
          <Form.ControlLabel>Checkbox</Form.ControlLabel>
          <Form.Control name="checkbox" accepter={CheckboxGroup} inline style={{ marginLeft: -20 }}>
            <Checkbox value="HTML">HTML</Checkbox>
            <Checkbox value="CSS">CSS</Checkbox>
            <Checkbox value="Javascript">Javascript</Checkbox>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="radio">
          <Form.ControlLabel>Radio</Form.ControlLabel>
          <Form.Control name="radio" accepter={RadioGroup} inline style={{ marginLeft: -20 }}>
            <Radio value="HTML">HTML</Radio>
            <Radio value="CSS">CSS</Radio>
            <Radio value="Javascript">Javascript</Radio>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="datePicker">
          <Form.ControlLabel>DatePicker</Form.ControlLabel>
          <Form.Control name="datePicker" accepter={DatePicker} />
        </Form.Group>

        <Form.Group controlId="dateRangePicker">
          <Form.ControlLabel>DateRangePicker</Form.ControlLabel>
          <Form.Control name="dateRangePicker" accepter={DateRangePicker} />
        </Form.Group>

        <Form.Group controlId="checkPicker">
          <Form.ControlLabel>CheckPicker</Form.ControlLabel>
          <Form.Control name="checkPicker" accepter={CheckPicker} data={selectData} />
        </Form.Group>

        <Form.Group controlId="selectPicker">
          <Form.ControlLabel>SelectPicker</Form.ControlLabel>
          <Form.Control name="selectPicker" accepter={SelectPicker} data={selectData} />
        </Form.Group>

        <Form.Group controlId="tagPicker">
          <Form.ControlLabel>TagPicker</Form.ControlLabel>
          <Form.Control name="tagPicker" accepter={TagPicker} data={selectData} />
        </Form.Group>

        <Form.Group controlId="inputPicker">
          <Form.ControlLabel>InputPicker</Form.ControlLabel>
          <Form.Control name="inputPicker" accepter={InputPicker} data={selectData} />
        </Form.Group>

        <Form.Group controlId="cascader">
          <Form.ControlLabel>Cascader</Form.ControlLabel>
          <Form.Control name="cascader" accepter={Cascader} data={treeData} />
        </Form.Group>

        <Form.Group controlId="multiCascader">
          <Form.ControlLabel>MultiCascader</Form.ControlLabel>
          <Form.Control name="multiCascader" accepter={MultiCascader} data={treeData} />
        </Form.Group>

        <Form.Group controlId="TreePicker">
          <Form.ControlLabel>TreePicker</Form.ControlLabel>
          <Form.Control name="TreePicker" accepter={TreePicker} data={treeData} />
        </Form.Group>

        <Form.Group controlId="CheckTreePicker">
          <Form.ControlLabel>CheckTreePicker</Form.ControlLabel>
          <Form.Control name="CheckTreePicker" accepter={CheckTreePicker} data={treeData} />
        </Form.Group>

        <Form.Group controlId="rate">
          <Form.ControlLabel>Rate</Form.ControlLabel>
          <Form.Control name="rate" accepter={Rate} />
        </Form.Group>

        <Form.Group controlId="uploader">
          <Form.ControlLabel>Uploader</Form.ControlLabel>
          <Form.Control name="uploader" accepter={Uploader} action="#" />
        </Form.Group>

        <Form.Group controlId="Toggle">
          <Form.ControlLabel>Toggle</Form.ControlLabel>
          <Toggle style={{ lineHeight: '36px' }} />
        </Form.Group>

        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary">Submit</Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </PageContent>
  );
};

export default BasicForm;
