// @flow

import * as React from 'react';
import { Link } from 'react-router';
import { getHeight } from 'dom-lib';
import {
  Input,
  InputGroup,
  Breadcrumb,
  Table,
  Panel,
  Icon,
  ButtonToolbar,
  Button,
  IconButton,
  Navbar
} from 'rsuite';

import data from './users';

const { Column, HeaderCell, Cell } = Table;

type Props = {};

class DataList extends React.Component<Props> {
  render() {
    return (
      <div>
        <Panel
          header={
            <h3>
              <Icon icon="group" /> {'  '}
              Members
            </h3>
          }
        >
          <div className="table-toolbar">
            <ButtonToolbar className="inner-left">
              <Button appearance="primary" placement="left">
                New Member
              </Button>
            </ButtonToolbar>

            <div className="inner-right">
              <InputGroup inside>
                <Input placeholder="Search" />
                <InputGroup.Addon>
                  <Icon icon="search" />
                </InputGroup.Addon>
              </InputGroup>
            </div>
          </div>

          <Table
            autoHeight
            data={data}
            onRowClick={data => {
              console.log(data);
            }}
          >
            <Column width={70} align="center" fixed>
              <HeaderCell>Id</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column width={200} fixed>
              <HeaderCell>First Name</HeaderCell>
              <Cell dataKey="firstName" />
            </Column>

            <Column width={200}>
              <HeaderCell>Last Name</HeaderCell>
              <Cell dataKey="lastName" />
            </Column>

            <Column width={200}>
              <HeaderCell>City</HeaderCell>
              <Cell dataKey="city" />
            </Column>

            <Column width={200}>
              <HeaderCell>Street</HeaderCell>
              <Cell dataKey="street" />
            </Column>

            <Column width={300}>
              <HeaderCell>Company Name</HeaderCell>
              <Cell dataKey="companyName" />
            </Column>

            <Column width={300}>
              <HeaderCell>Email</HeaderCell>
              <Cell dataKey="email" />
            </Column>
          </Table>
        </Panel>
      </div>
    );
  }
}

export default DataList;
