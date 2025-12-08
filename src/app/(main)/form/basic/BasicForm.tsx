'use client';

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
  Textarea,
  TagInput,
  MaskedInput,
  InputPicker,
  NumberInput,
  Cascader,
  MultiCascader,
  Rate,
  Uploader,
  TreePicker,
  CheckTreePicker,
  ButtonToolbar,
  Button,
  Toggle,
  AutoComplete,
  Divider
} from 'rsuite';
import PageContent from '@/components/PageContent';
import './form-basic.css';

import { mockTreeData } from '@/data/mock';

const treeData = mockTreeData({ limits: [2, 3, 3], labels: ['Provincial', 'County', 'Town'] });
const selectData = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice'].map(item => ({
  label: item,
  value: item
}));

const BasicForm = () => {
  return (
    <PageContent>
      <div className="form-basic-header">
        <h2 className="form-basic-title">Form Components</h2>
        <p className="form-basic-description">
          Comprehensive showcase of RSuite form components. For detailed documentation, visit{' '}
          <a href="https://rsuitejs.com/components/form/" target="_blank" rel="noreferrer">
            RSuite Form Docs
          </a>
          .
        </p>
      </div>

      <Form className="basic-form">
        {/* Text Input Section */}
        <div className="form-section">
          <h3 className="form-section-title">Text Input Controls</h3>
          <Divider />

          <Form.Stack>
            <Form.Group controlId="Input">
              <Form.Label>Input</Form.Label>
              <Form.Control name="Input" placeholder="Enter text" w={400} />
            </Form.Group>

            <Form.Group controlId="MaskedInput">
              <Form.Label>Masked Input</Form.Label>
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
              <Form.Label>Tag Input</Form.Label>
              <Form.Control name="TagInput" accepter={TagInput} placeholder="Add tags" />
            </Form.Group>

            <Form.Group controlId="InputNumber">
              <Form.Label>Number Input</Form.Label>
              <Form.Control name="InputNumber" accepter={NumberInput} placeholder="Enter number" />
            </Form.Group>

            <Form.Group controlId="AutoComplete">
              <Form.Label>Auto Complete</Form.Label>
              <Form.Control
                name="AutoComplete"
                accepter={AutoComplete}
                data={selectData}
                placeholder="Type to search"
              />
            </Form.Group>

            <Form.Group controlId="Textarea" className="form-group-full align-start">
              <Form.Label>Textarea</Form.Label>
              <Form.Control
                name="Textarea"
                accepter={Textarea}
                rows={3}
                placeholder="Enter description"
              />
            </Form.Group>
          </Form.Stack>
        </div>

        {/* Selection Controls */}
        <div className="form-section">
          <h3 className="form-section-title">Selection Controls</h3>
          <Divider />
          <Form.Stack>
            <Form.Group controlId="checkbox" className="form-group-full">
              <Form.Label>Checkbox Group</Form.Label>
              <Form.Control name="checkbox" accepter={CheckboxGroup} inline>
                <Checkbox value="HTML">HTML</Checkbox>
                <Checkbox value="CSS">CSS</Checkbox>
                <Checkbox value="Javascript">Javascript</Checkbox>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="radio" className="form-group-full">
              <Form.Label>Radio Group</Form.Label>
              <Form.Control name="radio" accepter={RadioGroup} inline>
                <Radio value="HTML">HTML</Radio>
                <Radio value="CSS">CSS</Radio>
                <Radio value="Javascript">Javascript</Radio>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="rate" className="form-group-full">
              <Form.Label>Rate</Form.Label>
              <Form.Control name="rate" accepter={Rate} color="yellow" />
            </Form.Group>

            <Form.Group controlId="Toggle" className="form-group-full align-center">
              <Form.Label>Toggle</Form.Label>
              <Toggle />
            </Form.Group>
          </Form.Stack>
        </div>

        {/* Date & Time Pickers */}
        <div className="form-section">
          <h3 className="form-section-title">Date & Time Pickers</h3>
          <Divider />
          <Form.Stack>
            <Form.Group controlId="datePicker">
              <Form.Label>Date Picker</Form.Label>
              <Form.Control
                name="datePicker"
                accepter={DatePicker}
                placeholder="Select date"
                block
              />
            </Form.Group>

            <Form.Group controlId="dateRangePicker">
              <Form.Label>Date Range Picker</Form.Label>
              <Form.Control
                name="dateRangePicker"
                accepter={DateRangePicker}
                placeholder="Select range"
                block
              />
            </Form.Group>
          </Form.Stack>
        </div>

        {/* Picker Components */}
        <div className="form-section">
          <h3 className="form-section-title">Picker Components</h3>
          <Divider />
          <Form.Stack>
            <Form.Group controlId="selectPicker">
              <Form.Label>Select Picker</Form.Label>
              <Form.Control
                name="selectPicker"
                accepter={SelectPicker}
                data={selectData}
                placeholder="Select option"
                block
              />
            </Form.Group>

            <Form.Group controlId="checkPicker">
              <Form.Label>Check Picker</Form.Label>
              <Form.Control
                name="checkPicker"
                accepter={CheckPicker}
                data={selectData}
                placeholder="Select multiple"
                block
              />
            </Form.Group>

            <Form.Group controlId="tagPicker">
              <Form.Label>Tag Picker</Form.Label>
              <Form.Control
                name="tagPicker"
                accepter={TagPicker}
                data={selectData}
                placeholder="Select tags"
                block
              />
            </Form.Group>

            <Form.Group controlId="inputPicker">
              <Form.Label>Input Picker</Form.Label>
              <Form.Control
                name="inputPicker"
                accepter={InputPicker}
                data={selectData}
                placeholder="Search and select"
                block
              />
            </Form.Group>
          </Form.Stack>
        </div>

        {/* Tree & Cascader Components */}
        <div className="form-section">
          <h3 className="form-section-title">Tree & Cascader Components</h3>
          <Divider />
          <Form.Stack>
            <Form.Group controlId="cascader">
              <Form.Label>Cascader</Form.Label>
              <Form.Control
                name="cascader"
                accepter={Cascader}
                data={treeData}
                placeholder="Select cascading"
                block
              />
            </Form.Group>

            <Form.Group controlId="multiCascader">
              <Form.Label>Multi Cascader</Form.Label>
              <Form.Control
                name="multiCascader"
                accepter={MultiCascader}
                data={treeData}
                placeholder="Select multiple"
                block
              />
            </Form.Group>

            <Form.Group controlId="TreePicker">
              <Form.Label>Tree Picker</Form.Label>
              <Form.Control
                name="TreePicker"
                accepter={TreePicker}
                data={treeData}
                placeholder="Select from tree"
                block
              />
            </Form.Group>

            <Form.Group controlId="CheckTreePicker">
              <Form.Label>Check Tree Picker</Form.Label>
              <Form.Control
                name="CheckTreePicker"
                accepter={CheckTreePicker}
                data={treeData}
                placeholder="Select multiple from tree"
                block
              />
            </Form.Group>
          </Form.Stack>
        </div>

        {/* File Upload */}
        <div className="form-section">
          <h3 className="form-section-title">File Upload</h3>
          <Divider />
          <Form.Stack>
            <Form.Group controlId="uploader" className="form-group-full">
              <Form.Label>Uploader</Form.Label>
              <Form.Control name="uploader" accepter={Uploader} action="#" />
            </Form.Group>
          </Form.Stack>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <ButtonToolbar>
            <Button appearance="primary" size="lg">
              Submit
            </Button>
            <Button appearance="subtle" size="lg">
              Cancel
            </Button>
          </ButtonToolbar>
        </div>
      </Form>
    </PageContent>
  );
};

export default BasicForm;
